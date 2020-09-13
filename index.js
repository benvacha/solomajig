/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
const Dotenv = require('dotenv').config();
if (Dotenv.error) console.log('Error dotenv://.env');
/* /**/
const Path = require('path');
const Express = require('express');
const Helmet = require('helmet');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
/* */
const __path = global.__path = function (path) {
  return Path.join(__dirname, path);
};
const __require = global.__require = function (path) {
  return require(Path.join(__dirname, path));
};
const __static = global.__static = function (path) {
  return Express.static(Path.join(__dirname, path));
};
/* */
const app = Express();
//
app.use(
  Helmet({
    contentSecurityPolicy: {
      directives: {
        baseUri: "'self'",
        blockAllMixedContent: [],
        frameAncestors: ["'self'"],
        scriptSrcAttr: ["'none'"],
        defaultSrc: [
          "'self'"
        ],
        fontSrc: [
          "'self'",
          "fonts.gstatic.com"
        ],
        imgSrc: [
          "'self'"
        ],
        objectSrc: [
          "'none'"
        ],
        scriptSrc: [
          "'self'",
          "ajax.googleapis.com",
          "'unsafe-inline'",
          "'unsafe-eval'"
        ],
        styleSrc: [
          "'self'",
          "fonts.googleapis.com"
        ]
      },
    }
  })
);
//
app.enable('trust proxy');
app.use(function(req, res, next) {
  const debug = process.env.NODE_ENV !== 'production';
  if(req.secure || debug) return next();
  res.redirect('https://' + req.headers.host + req.url);
});
//
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

/*
/* */

app.use('/apis', __require('/apis/index'));
/* */
app.use('/', __static('/deploys'));
app.use(function (req, res, next) {
  res.redirect((req.secure ? 'https://' : 'http://')
    + req.headers.host + '/#' + req.url);
  // res.sendFile(__path('/deploys/index.html'));
});
/* */
app.use(function (err, req, res, next) {
  if (err) { console.log(err); }
  res.status(500).send('server error');
});

/*
/* */

Mongoose.Promise = require('bluebird');
Mongoose.connection.on('connected', function () {
  console.log('Connected', process.env.MONGODB_URI);
}).on('error', function (err) {
  console.log('Error', process.env.MONGODB_URI);
  if (err) { console.log(err); }
}).on('disconnected', function () {
  console.log('\nDisconnected', process.env.MONGODB_URI);
}).on('open', function () {
  console.log('Opened', process.env.MONGODB_URI);
  const server = app.listen(process.env.PORT || 3000,
    function () {
      console.log('Listening http://%s:%s',
        server.address().address,
        server.address().port
      );
    });
});
if (process.env.MONGODB_URI) {
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

process.on('SIGINT', function () {
  Mongoose.connection.close(function () {
    console.log('Exiting http://.env\n');
    process.exit();
  });
});
