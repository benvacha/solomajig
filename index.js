/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* /**/
var Dotenv = require('dotenv').config();
if(Dotenv.error) console.log('Error dotenv://.env');
/* /**/
var Promise = require('bluebird');
var Express = require('express');
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');
/* */
global.__path = function(path) {
  return __dirname + path; };
global.__require = function(path) {
  return require(__dirname + path); };
global.__static = function(path) {
  return Express.static(__dirname + path); };
/* */
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

/*
/* */

app.use('/apis', __require('/apis/index'));
/* */
app.use('/', __static('/dists'));
app.use(function(req, res, next) {
  res.sendFile(__path('/dists/index.html'));
});
/* */
app.use(function(err, req, res, next) {
  if(err) { console.log(err); }
  res.status(500).send('server error');
});

/*
/* */

Mongoose.Promise = require('bluebird');
Mongoose.connection.on('connected', function() {
  console.log('Connected', process.env.MONGODB_URI);
}).on('error', function(err) {
  console.log('Error', process.env.MONGODB_URI);
  if(err) { console.log(err); }
}).on('disconnected', function() {
  console.log('\nDisconnected', process.env.MONGODB_URI);
}).on('open', function() {
  console.log('Opened', process.env.MONGODB_URI);
  var server = app.listen(process.env.PORT || 3000,
  function() { console.log('Listening http://%s:%s',
    server.address().address,
    server.address().port
  ); });
});
if(process.env.MONGODB_URI) {
  Mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} else {
  console.log('Error mongodb://.env');
  console.log('Error http://.env');
}

/*
/* */

process.on('SIGINT', function() {
  Mongoose.connection.close(function() {
    console.log('Exiting http://.env\n');
    process.exit();
  });
});
