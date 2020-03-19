/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* /**/
var Express = require('express');
var Index = __require('/models/index');
var Error = __require('/models/error');
var Token = __require('/models/token');
/* */
var app = Express();

/*
/* GET */

//
/// { token:Token } || { Error }
app.get('/',
function(req, res, next) {
  Index.authorize(req, res, {
    required: true,
  }).then(function(token) {
    next();
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
}, function(req, res) {
  Index.localize(req, res, {
  }, {
    username: req.body.username,
    password: req.body.password,
  }).then(function(locals) {
    return Token.new();
  }).then(function(token) {
    if(!token) throw new Error.code(5000);
    Index.respond(req, res, token);
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
});

/*
/* PUT */

// username:'', password:''
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
