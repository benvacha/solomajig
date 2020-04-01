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

// username:String, password:String
/// { token:Token } || { Error }
app.put('/', function(req, res) {
  Index.localize(req, res, {
    username: req.body.username,
    password: req.body.password,
  }, {
  }).then(function(locals) {
    if(res.locals.username !==
      process.env.SOLOMAJIG_USERNAME) {
      throw new Error.code(6006);
    }
    if(res.locals.password !==
      process.env.SOLOMAJIG_PASSWORD) {
      throw new Error.code(6004);
    }
    return Token.new();
  }).then(function(token) {
    if(!token) throw new Error.code(5000);
    Index.respond(req, res, token);
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
});

/*
/* */
module.exports = app;
