/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* /**/
var Express = require('express');
/* */
var app = Express();

/*
/* */

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
