/* Copyright (C) 2020 BenVacha/Solomajig *//*

  Token.new({
  }).then().catch();

  Token.verify({
  }).then().catch();

/* /**/
var Promise = require('bluebird');
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var JSONWebToken = require('jsonwebtoken');
var Index = __require('/models/index');
var Error = __require('/models/error');
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
/* */

//
/// (token) || (Error)
schema.statics.new = function() {
return new Promise(function(resolve, reject) {
  var slug = JSONWebToken.sign({
  }, process.env.SOLOMAJIG_PASSWORD
    + process.env.SOLOMAJIG_USERNAME);
  return resolve({ slug:slug });
}); };

// slug:JSONWebToken
/// (token) || (Error)
schema.statics.verify = function(slug) {
return new Promise(function(resolve, reject) {
  resolve(JSONWebToken.verify(
    slug, process.env.SOLOMAJIG_PASSWORD
    + process.env.SOLOMAJIG_USERNAME
  ));
}); };

/*
/* */
module.exports = schema;
