/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* */
var Promise = require('bluebird');
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var ObjectId = Mongoose.Types.ObjectId;
var Majig = __require('/models/majig');

/* */

var schema = new Schema({
  path: { type:String },
  markdown: { type:String, default:'' },
  created: { type:Date, default:Date.now },
  updated: { type:Date, default:Date.now },
  published: { type:Date },
}, {
  collation: { locale:'en_US', strength:1 },
  toObject: { transform:function(doc, ret) {} },
  toJSON: { transform:function(doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id; delete ret.__v;
  }, virtuals:true }
});

/*
/* VALIDATORS */

//
///
schema.path('path')
.validate(function(val) {
    return /^\/.*[^\/]$/.test(val);
}, 'invalid path')
.validate(function(val) {
  var self = this;
  return new Promise(function(resolve) {
    if(!val || !self.isModified('path')) {
      return resolve(); }
    Mongoose.models['Majig'].findOne({
      path: val
    }, function(err, majig) {
      if(err || majig) {
        return resolve(false); }
      return resolve();
    });
  });
}, 'path exists');

/*
/* HOOKS */

//
///
schema.pre('save', function(next) {
  if(this.isModified('markdown')) {
    this.updated = Date.now();
  }
  return next();
});

/*
/* */
module.exports = schema;
