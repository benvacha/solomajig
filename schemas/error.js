/* Copyright (C) 2020 BenVacha/Solomajig *//*

  Model.operation()
    .then(function(a) { return b; })
    .then(function(b) { return c; })
    .catch(Error.code, function(err) {})
    .catch(Error.raw, function(err) {})
    .catch(Error.parsed, function(err) {})
    .catch({ code:0000 }, function(err) {})
    .catch({ status:000 }, function(err) {})
    .catch(function(err) {})
    .finally(function() {});

  throw new Error.code(0000);
  throw new Error.raw(000, '', '');
  throw new Error.parsed(err, 000);

/* /**/
var Promise = require('bluebird');
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
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
/* CODES */

//
///
schema.statics.CODES = {
  1000: { status:100, message:'failure' },
  /* SUCCESS */
  2000: { status:200, message:'success' },
  2001: { status:201, message:'created' },
  2002: { status:202, message:'accepted' },
  /* REDIRECT */
  3000: { status:300, message:'redirect' },
  3001: { status:301, message:'moved' },
  3007: { status:307, message:'redirected' },
  /* CLIENT */
  4000: { status:400, message:'client error' },
  4001: { status:401, message:'unauthorized' },
  4003: { status:403, message:'forbidden' },
  4004: { status:404, message:'not found' },
  4005: { status:405, message:'not allowed' },
  4009: { status:409, message:'conflicted' },
  /* SERVER */
  5000: { status:500, message:'server error' },
  5001: { status:501, message:'unimplemented' },
  5003: { status:503, message:'unavailable' },
  /*
    USAGE
  */
  6000: { status:400, message:'usage error' },
  //// keyword
  6014: { status:400, message:'keyword required' },
  6015: { status:400, message:'invalid keyword' },
  //// majig
  6007: { status:400, message:'majig required' },
  6008: { status:400, message:'invalid majig' },
  6013: { status:404, message:'unknown majig' },
  //// markdown
  6009: { status:400, message:'markdown required' },
  6010: { status:400, message:'invalid markdown' },
  //// password
  6003: { status:400, message:'password required' },
  6004: { status:400, message:'invalid credential' },
  //// path
  6011: { status:400, message:'path required' },
  6012: { status:400, message:'invalid path' },
  //// username
  6005: { status:400, message:'username required' },
  6006: { status:400, message:'invalid credential' },
  //// x-token
  6002: { status:401, message:'invalid token' },
  6001: { status:401, message:'invalid token' },
  //// ,
  6016: { status:400, message:'' }
};

/*
/* ERRORS */

// code:0000
/// Error || throw Error
schema.statics.code = function(code) {
  if(code && schema.statics.CODES[code]) {
    this.code = code;
  } else { this.code = 1000; }
  this.status = schema.statics.CODES[this.code].status;
  this.title = schema.statics.CODES[this.code].message;
  this.detail = schema.statics.CODES[this.code].message;
  this.name = "Code " + this.code + " Error";
  Error.captureStackTrace(this, schema.statics.code);
}
schema.statics.code.prototype = Object.create(Error.prototype);
schema.statics.code.prototype.constructor = schema.statics.code;

/* */

// status:000, title:'', detail:''
/// Error || throw Error
schema.statics.raw = function(status, title, detail) {
  this.code = 1000;
  this.status = status || 500;
  this.title = title || '500 Error';
  this.detail = detail || '500 Error';
  this.name = "Raw " + this.status + " Error";
  Error.captureStackTrace(this, schema.statics.raw);
}
schema.statics.raw.prototype = Object.create(Error.prototype);
schema.statics.raw.prototype.constructor = schema.statics.raw;

/* */

// errs:Mongoose.Error, status:000
/// Error || throw Error
schema.statics.parsed = function(errs, status) {
  this.status = status || 400;
  if(!errs.errors) errs.errors = { error:errs };
  for(var error in errs.errors) break;
  this.title = errs.errors[error].message || '400 Error';
  this.detail = errs.errors[error].message || '400 Error';
  this.name = "Parsed " + this.status + " Error";
  Error.captureStackTrace(this, schema.statics.parsed);
}
schema.statics.parsed.prototype = Object.create(Error.prototype);
schema.statics.parsed.prototype.constructor = schema.statics.parsed;

/*
/* */
module.exports = schema;
