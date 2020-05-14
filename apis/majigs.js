/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
const __require = global.__require;
const Express = require('express');
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
    terms: req.query.terms,
    filter: req.query.filter,
    limit: req.query.limit,
    skip: req.query.skip
  }).then((locals) => {
    return Majig.countDocuments(
    ).byTerms(
      res.locals.terms
    ).byFlags(
      res.locals.flags
    ).byPathed(
      res.locals.terms,
      res.locals.flags
    ).byFilter(
      res.locals.filter
    ).byToken(
      res.locals.token
    ).catch(() => {
      throw new Error.Code(5000);
    });
  }).then((count) => {
    if (!count) return {};
    res.locals.count = count;
    return Majig.find(
    ).byPage(
      res.locals.limit,
      res.locals.skip
    ).byTerms(
      res.locals.terms
    ).byFlags(
      res.locals.flags
    ).byPathed(
      res.locals.terms,
      res.locals.flags
    ).byFilter(
      res.locals.filter
    ).byToken(
      res.locals.token
    ).catch(() => {
      throw new Error.Code(5000);
    });
  }).then((majigs) => {
    if (!majigs) throw new Error.Code(5000);
    Index.respond(req, res, {
      count: res.locals.count,
      majigs: majigs
    });
  }).catch((err) => {
    Index.respond(req, res, null, err);
  });
});

/*
/* */
module.exports = app;
