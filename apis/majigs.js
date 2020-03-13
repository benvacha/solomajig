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

// keyword:'',
/// { majigs:[Majig] } || { Error }
app.get('/', function(req, res) {
  Index.localize(req, res, {
  }, {
    keyword: req.query.keyword,
  }).then(function(locals) {
    var regex = new RegExp(
      res.locals.keyword, "i");
    var query = {
      path: { $exists: false },
    };
    if(res.locals.keyword) {
      query.markdown = regex;
    }
    return Majig.find(
      query
    ).catch(function(err) {
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

// markdown:'',
/// { majigs:[Majig] } || { Error }
app.post('/', function(req, res) {
  Index.localize(req, res, {
    markdown: req.body.markdown,
  }, {
  }).then(function(locals) {
    return Majig({
      markdown: res.locals.markdown,
    }).save({
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    res.locals.majig = majig;
    return Majig.find({
      path: { $exists: false },
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
