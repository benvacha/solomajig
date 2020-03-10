/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* */
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var ObjectId = Mongoose.Types.ObjectId;

/* */

var schema = new Schema({
  path: { type:String, required:true },
  markdown: { type:String, required:true },
  created: { type:Date, default:date.now },
  updated: { type:Date, default:date.now },
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
module.exports = schema;
