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
/// { majig:Majig } || { Error }
app.get('/:majigId', function(req, res) {
  Index.localize(req, res, {
    majigId: req.params.majigId,
  }, {
  }).then(function(locals) {
    return Majig.findOne({
      _id: res.locals.majigId,
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(6000);
    Index.respond(req, res, majig);
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
});

/*
/* POST */

// path:'', markdown:'',
/// { majig:Majig } || { Error }
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
    Index.respond(req, res, majigs);
  }).catch(function(err) {
    if(res.locals.majig) {
      res.locals.majig.remove(); }
    Index.respond(req, res, null, err);
  });
});

/*
/* PUT */

//
/// { majig:Majig } || { Error }
app.put('/:majigId', function(req, res) {
  Index.localize(req, res, {
    majigId: req.params.majigId,
  }, {
    path: req.body.path,
    markdown: req.body.markdown,
  }).then(function(locals) {
    return Majig.findOne({
      _id: res.locals.majigId,
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(6000);
    majig.path = res.locals.path ?
      res.locals.path : majig.path;
    majig.markdown = res.locals.markdown ?
      res.locals.markdown : majig.markdown;
    return majig.save({
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    Index.respond(req, res, majig);
  }).catch(function(err) {
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
