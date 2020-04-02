/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
const Express = require('express');
const Index = __require('/models/index');
const Error = __require('/models/error');
const Token = __require('/models/token');
/* */
const app = Express();

/*
/* */

//
/// { token:Token } || { Error }
app.put('/', (req, res) => {
  Index.localize(req, res, {
    username: req.body.username,
    password: req.body.password,
  }, {
  }).then((locals) => {
    if(res.locals.username !==
      process.env.SOLOMAJIG_USERNAME) {
      throw new Error.code(6006);
    }
    if(res.locals.password !==
      process.env.SOLOMAJIG_PASSWORD) {
      throw new Error.code(6004);
    }
    return Token.new();
  }).then((token) => {
    if(!token) throw new Error.code(5000);
    Index.respond(req, res, token);
  }).catch((err) => {
    Index.respond(req, res, null, err);
  });
});

/*
/* */
module.exports = app;
