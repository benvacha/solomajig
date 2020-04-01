/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* */
const Promise = require('bluebird');
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const ObjectId = Mongoose.Types.ObjectId;
const Majig = __require('/models/majig');
/* */
const schema = new Schema({
  path: { type:String },
  tags: { type:String, default:'' },
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
/* */

//
///
schema.path('path')
.validate(function(val) {
    return /^\/.*[^\/]$/.test(val);
}, 'invalid path')
.validate(function(val) {
  const self = this;
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
/* */

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
