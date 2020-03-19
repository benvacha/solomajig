/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* /**/
var Express = require('express');
var Index = __require('/models/index');
/* */
var app = Express();

/*
/* */

app.use(function(req, res, next) {
  Index.authorize(req, res, {
  }).then(function(token) {
    next();
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
});

/*
/* */

app.use('/majig', __require('/apis/majig'));
app.use('/majigs', __require('/apis/majigs'));
app.use('/token', __require('/apis/token'));
/* */
app.use(function(req, res, next) {
  return res.status(404).json({desc:'api not found'});
});
/* */
app.use(function(err, req, res, next) {
  if(err) { console.log(err); }
  return res.status(500).json({desc:'api server error'});
});

/*
/* */
module.exports = app;
