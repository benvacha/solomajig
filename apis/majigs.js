/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
const Express = require('express');
const Mongoose = require('mongoose');
const ObjectId = Mongoose.Types.ObjectId;
const Index = __require('/models/index');
const Error = __require('/models/error');
const Majig = __require('/models/majig');
/* */
const app = Express();

/*
/* */

//
/// { majigs:[Majig] } || { Error }
app.get('/', (req, res) => {
  Index.localize(req, res, {
  }, {
    flags: req.query.flags,
    keyword: req.query.keyword,
    filter: req.query.filter,
    limit: req.query.limit,
    skip: req.query.skip,
  }).then((locals) => {
    return Majig.countDocuments(
    ).byTerms(
      res.locals.keyword
    ).byFlags(
      res.locals.flags
    ).byFilter(
      res.locals.filter
    ).byToken(
      res.locals.token
    ).catch((err) => {
      throw new Error.code(5000);
    });
  }).then((count) => {
    if(!count) return {};
    res.locals.count = count;
    return Majig.find(
    ).byPage(
      res.locals.limit,
      res.locals.skip
    ).byTerms(
      res.locals.keyword
    ).byFlags(
      res.locals.flags
    ).byFilter(
      res.locals.filter
    ).byToken(
      res.locals.token
    ).catch((err) => {
      console.log(err);
      throw new Error.code(5000);
    });
  }).then((majigs) => {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch((err) => {
      Index.respond(req, res, null, err);
  });
});

/*
/* */
module.exports = app;
