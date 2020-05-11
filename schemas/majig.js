/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* */
const Promise = require('bluebird');
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
/* */
const schema = new Schema({
  path: {
    type: String
  },
  tags: [{
    type: String,
    index: true,
    lowercase: true
  }],
  markdown: {
    type: String,
    default: ''
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Date
  }
}, {
  collation: {
    locale: 'en_US', strength: 1
  },
  toObject: {
    transform: function (doc, ret) {}
  },
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id; delete ret.__v;
    },
    virtuals: true
  }
});

/*
/* */

//
/// next || error
schema.path('path')
  .validate(function (val) {
    const regex = new RegExp('^/.*[^/]$');
    return regex.test(val);
  }, 'invalid path')
  .validate(function (val) {
    const self = this;
    return new Promise(function (resolve) {
      if (!val || !self.isModified('path')) {
        return resolve();
      }
      Mongoose.models.Majig.findOne({
        path: val
      }, function (err, majig) {
        if (err || majig) {
          return resolve(false);
        }
        return resolve();
      });
    });
  }, 'path exists');

/*
/* */

//
/// next || error
schema.pre('save', function (next) {
  if (this.isModified('markdown')) {
    this.updated = Date.now();
  }
  return next();
});

/*
/* */

//
/// query || error
schema.query.byIdPath = function (id, path) {
  if (id) {
    return this.where({
      _id: id
    });
  } else if (path) {
    return this.where({
      path: path
    });
  } else {
    return this.error();
  }
};

//
/// query || error
schema.query.byPage = function (limit, skip) {
  if (!limit) limit = 25;
  if (!skip) skip = 0;
  return this.limit(limit).skip(skip);
};

//
/// query || error
schema.query.byTerms = function (terms) {
  if (!terms) {
    return this.where({
      path: { $exists: false }
    });
  }
  return this.where({
    markdown: new RegExp(terms, 'i')
  });
};

//
/// query || error
schema.query.byFlags = function (flags) {
  if (!flags || !flags.length) return this;
  const query = { $or: [] };
  flags.forEach((flag) => {
    query.$or.push({
      tags: flag
    });
  });
  return this.where(query);
};

//
/// query || error
schema.query.byFilter = function (filter) {
  return this.sort(filter || '-updated');
};

//
/// query || error
schema.query.byToken = function (token) {
  if (token) return this;
  return this.where({
    published: { $exists: true }
  });
};

/*
/* */
module.exports = schema;
