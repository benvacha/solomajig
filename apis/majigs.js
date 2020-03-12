/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* /**/
var Express = require('express');
var Mongoose = require('mongoose');
var ObjectId = Mongoose.Types.ObjectId;
var Index = __require('/models/index');
var Error = __require('/models/error');
var Majig = __require('/models/majig');
/* */
var app = Express();

/*
/* GET */

//
/// { majigs:[Majig] } || { Error }
app.get('/', function(req, res) {
  Index.localize(req, res, {
  }, {
    path: req.query.path,
    keyword: req.query.keyword,
  }).then(function(locals) {
    var query = {};
    if(res.locals.keyword) {
      var regex = new RegExp(
        res.locals.keyword, "i")
      query = { markdown: regex };
    } else if(res.locals.path) {
      query = { path: res.locals.path };
    } else {
      throw new Error.code(6007);
    };
    return Majig.find({
      ...query
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majigs) {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch(function(err) {
      Index.respond(req, res, null, err);
  });
});

/*
/* POST */

// path:'', markdown:'',
/// { majigs:[Majig] } || { Error }
app.post('/', function(req, res) {
  Index.localize(req, res, {
    path: req.body.path,
    markdown: req.body.markdown,
  }, {
  }).then(function(locals) {
    return Majig({
      path: res.locals.path,
      markdown: res.locals.markdown,
    }).save({
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    res.locals.majig = majig;
    return Majig.find({
      path: res.locals.path
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majigs) {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch(function(err) {
      if(res.locals.majig) {
          res.locals.majig.remove(); }
      Index.respond(req, res, null, err);
  });
});

/*
/* DELETE */

//
/// { majig:Majig } || { Error }
app.delete('/:majigId', function(req, res) {
  Index.localize(req, res, {
    majigId: req.params.majigId,
  }, {
  }).then(function(locals) {
    throw new Error.code(5001);
    Index.respond(req, res, {});
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
});

/*
/* */
module.exports = app;
