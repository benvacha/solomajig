/* Copyright (C) 2020 BenVacha/Solomajig *//*

  Index.authorize(req, res, {
  }).then(token).catch(error);

  Index.localize(req, res, {
    localizer: input
  }, {
    localizer: input
  ).then(locals).catch(error);

  Index.respond(req, res,
    data, error, debug
  }).then(response).catch(error);

/* /**/
var Promise = require('bluebird');
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var Error = __require('/models/error');
var Token = __require('/models/token');
/* */
var schema = new Schema({
}, {
  collation: { locale:'en_US', strength:1 },
  toObject: { transform:function(doc, ret) {} },
  toJSON: { transform:function(doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id; delete ret.__v;
  }, virtuals:true }
});

/*
/* AUTHORIZE */

//
///
schema.statics.authorize =
function(req, res, options) {
return new Promise(function(resolve, reject) {
  var xToken = req.headers['x-token']
    || req.query['xtoken'];
  if(!xToken) reject(new Error.code(6002));
  Token.verify(
    xToken
  ).then(function(token) {
    res.locals.token = token;
    resolve(token);
  }).catch(function(err) {
    reject(new Error.code(6001));
  });
});
};

/*
/* LOCALIZE */

// req:{}, input:*
/// falsy || throw Error
schema.statics.LOCALIZERS = {
  majigId: function(req, res, input, required) {
    if(required && !input) {
      throw new Error.code(6000);
    }
    res.locals.majigId = input;
  },
  markdown: function(req, res, input, required) {
    if(required && !input) {
      throw new Error.code(6000);
    }
    res.locals.markdown = input;
  },
  password: function(req, res, input, required) {
    if(required && !input) {
      throw new Error.code(6003);
    }
    res.locals.password = input;
  },
  path: function(req, res, input, required) {
    if(required && !input) {
      throw new Error.code(6000);
    }
    res.locals.path = input;
  },
  username: function(req, res, input, required) {
    if(required && !input) {
      throw new Error.code(6005);
    }
    res.locals.username = input;
  },
};

// req:{}, res:{},
// requireds:{ localizer:input }
// optionals:{ localizer:input }
/// res.locals || throw Error
schema.statics.localize =
function(req, res, requireds, optionals) {
return new Promise(function(resolve, reject) {
  var localizers = schema.statics.LOCALIZERS;
  for(var required in requireds) {
    if(!localizers[required]) {
      return reject(new Error.code(5000)); }
    try { localizers[required](
      req, res, requireds[required], true); }
    catch(error) { return reject(error); }
  }
  for(var optional in optionals) {
    if(!localizers[optional]) break;
    try { localizers[optional](
      req, res, optionals[optional], false); }
    catch(error) { return reject(error); }
  }
  return resolve(res.locals);
});
};

/*
/* RESPOND */

// req:{}, res:{},
// data:{}, error:Error
/// (response) || (Error)
schema.statics.respond =
function(req, res, data, error, debug) {
return new Promise(function(resolve, reject) {
  var nodeEnv = process.env.NODE_ENV;
  debug = typeof(debug) !== 'undefined' ? debug :
    error && nodeEnv !== 'production';
  if(debug) { console.log('###\nRESPOND:',
    data, error); }
  var response = { meta:{ version:'0.1.0' } };
  if(error) { response.errors = [{
    code: error.code || 1000,
    status: error.status || 500,
    title: error.title || 'server error',
    detail: error.detail || 'server error'
  }]; } else { response.data = data; }
  if(!error) { response.status = 200; }
  else { response.status = error.status || 500; }
  if(debug) { console.log('', response, '\n####'); }
  res.status(response.status).json(response);
  return resolve(response);
});
};

/*
/* */
module.exports = schema;
