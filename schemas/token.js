/* Copyright (C) 2020 BenVacha/SoloMajig *//*

  Token.new({
  }).then().catch();

  Token.verify({
  }).then().catch();

/* /**/
const Promise = require('bluebird');
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const JSONWebToken = require('jsonwebtoken');
const Index = __require('/models/index');
const Error = __require('/models/error');
/* */
const schema = new Schema({
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
  const slug = JSONWebToken.sign({
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
