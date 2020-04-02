/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
const Express = require('express');
const Index = __require('/models/index');
/* */
const app = Express();

/*
/* */

app.use((req, res, next) => {
  Index.authorize(req, res, {
  }).then((token) => {
    next();
  }).catch((err) => {
    Index.respond(req, res, null, err);
  });
});

/*
/* */

app.use('/majig', __require('/apis/majig'));
app.use('/majigs', __require('/apis/majigs'));
app.use('/token', __require('/apis/token'));

/*
/* */

app.use((req, res, next) => {
  return res.status(404)
    .json({desc:'api not found'});
});
/* */
app.use((err, req, res, next) => {
  if(err) { console.log(err); }
  return res.status(500)
    .json({desc:'api server error'});
});

/*
/* */
module.exports = app;
