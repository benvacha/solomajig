/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
const __require = global.__require;
const Express = require('express');
const Index = __require('/models/index');
const Error = __require('/models/error');
/* */
const app = Express();

/*
/* */

//
/// { token:Token } || { Error }
app.put('/', (req, res) => {
  Index.localize(req, res, {
    username: req.body.username,
    password: req.body.password
  }, {
  }).then((locals) => {
    if (!process.env.SOLOMAJIG_USERNAME ||
      res.locals.username !==
      process.env.SOLOMAJIG_USERNAME) {
      throw new Error.Code(6006);
    }
    if (!process.env.SOLOMAJIG_PASSWORD ||
      res.locals.password !==
      process.env.SOLOMAJIG_PASSWORD) {
      throw new Error.Code(6004);
    }
    return Index.author(req, res, {});
  }).then((token) => {
    if (!token) throw new Error.Code(5000);
    Index.respond(req, res, token);
  }).catch((err) => {
    Index.respond(req, res, null, err);
  });
});

/*
/* */
module.exports = app;
