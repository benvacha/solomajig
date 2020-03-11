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
app.get('/', function(req, res) {
  Index.localize(req, res, {
  }, {
    path: req.query.path,
    majigId: req.query.majigId,
  }).then(function(locals) {
    var query = {};
    if(res.locals.majigId) {
      query = { _id: res.locals.majigId };
    } else if(res.locals.path) {
      query = { path: res.locals.path };
    } else {
      throw new Error.code(6007);
    };
    return Majig.findOne({
      ...query
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(6013);
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
app.put('/', function(req, res) {
  Index.localize(req, res, {
    markdown: req.body.markdown,
  }, {
    majigId: req.body.majigId,
    path: req.body.path,
  }).then(function(locals) {
    var query = {};
    if(res.locals.majigId) {
      query = { _id: res.locals.majigId };
    } else if(res.locals.path) {
      query = { path: res.locals.path };
    } else {
      throw new Error.code(6007);
    };
    return Majig.findOne({
      ...query
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
    if(!majig) return majig;
    majig.markdown = res.locals.markdown;
    return majig.save({
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(majig) return majig;
    return Majig({
      path: res.locals.path,
      markdown: res.locals.markdown,
    }).save({
    }).then(function(majig) {
      res.locals.majig = majig;
      return majig;
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    Index.respond(req, res, majig);
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
    path: req.body.path,
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
