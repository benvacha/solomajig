/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
const Express = require('express');
const Mongoose = require('mongoose');
const ObjectId = Mongoose.Types.ObjectId;
const Index = __require('/models/index');
const Error = __require('/models/error');
const Majig = __require('/models/majig');
/* */
const app = Express();

/*
/* */

//
/// { majigs:[Majig] } || { Error }
app.get('/', (req, res) => {
  Index.localize(req, res, {
  }, {
    flags: req.query.flags,
    keyword: req.query.keyword,
    filter: req.query.filter,
  }).then((locals) => {
    const query = {};
    if(res.locals.keyword) {
      query.markdown = new RegExp(
        res.locals.keyword, "i");
    } else {
      query.path = { $exists: false };
    }
    if(res.locals.flags) {
      query.$or = [];
      res.locals.flags.forEach((flag) => {
        query.$or.push({
          tags: new RegExp(flag, "i")
        });
      });
    }
    if(!res.locals.token) {
      query.published = {
        $exists: true
      };
    }
    return Majig.find(
      query
    ).sort(
      res.locals.filter || '-updated'
    ).catch((err) => {
      throw new Error.code(5000);
    });
  }).then((majigs) => {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch((err) => {
      Index.respond(req, res, null, err);
  });
});

/*
/* */

//
/// { majigs:[Majig] } || { Error }
app.post('/', (req, res) => {
  Index.localize(req, res, {
    token: res.locals.token,
  }, {
    tags: req.body.tags,
    markdown: req.body.markdown,
    flags: req.body.flags,
    keyword: req.body.keyword,
    filter: req.body.filter,
  }).then((locals) => {
    return Majig({
      tags: res.locals.tags,
      markdown: res.locals.markdown,
    }).save({
    }).catch((errs) => {
      throw new Error.parsed(errs);
    });
  }).then((majig) => {
    if(!majig) throw new Error.code(5000);
    res.locals.majig = majig;
    const query = {};
    if(res.locals.keyword) {
      query.markdown = new RegExp(
        res.locals.keyword, "i");
    } else {
      query.path = { $exists: false };
    }
    if(res.locals.flags) {
      query.$or = [];
      res.locals.flags.forEach((flag) => {
        query.$or.push({
          tags: new RegExp(flag, "i")
        });
      });
    }
    return Majig.find(
      query
    ).sort(
      res.locals.filter || '-updated'
    ).catch((err) => {
      throw new Error.code(5000);
    });
  }).then((majigs) => {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch((err) => {
      if(res.locals.majig) {
          res.locals.majig.remove(); }
      Index.respond(req, res, null, err);
  });
});

/*
/* */

//
/// { majig:Majig } || { Error }
app.put('/:majigId', (req, res) => {
  Index.localize(req, res, {
    token: res.locals.token,
    majigId: req.params.majigId,
  }, {
    tags: req.body.tags,
    markdown: req.body.markdown,
    published: req.body.published,
    flags: req.body.flags,
    keyword: req.body.keyword,
    filter: req.body.filter,
  }).then((locals) => {
    return Majig.findOne({
      _id: res.locals.majigId,
    }).catch((err) => {
      throw new Error.code(5000);
    });
  }).then((majig) => {
    if(!majig) throw new Error.code(6013);
    if(res.locals.tags !== undefined) {
      majig.tags = res.locals.tags;
    }
    if(res.locals.markdown !== undefined) {
      majig.markdown = res.locals.markdown;
    }
    if(res.locals.published === false) {
      majig.published = undefined;
    } else if(res.locals.published !== undefined) {
      majig.published = res.locals.published;
    }
    return majig.save({
    }).catch((errs) => {
      throw new Error.parsed(errs);
    });
  }).then((majig) => {
    if(!majig) throw new Error.code(5000);
    const query = {};
    if(res.locals.keyword) {
      query.markdown = new RegExp(
        res.locals.keyword, "i");
    } else {
      query.path = { $exists: false };
    }
    if(res.locals.flags) {
      query.$or = [];
      res.locals.flags.forEach((flag) => {
        query.$or.push({
          tags: new RegExp(flag, "i")
        });
      });
    }
    return Majig.find(
      query
    ).sort(
      res.locals.filter || '-updated'
    ).catch((err) => {
      throw new Error.code(5000);
    });
  }).then((majigs) => {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch((err) => {
    Index.respond(req, res, null, err);
  });
});

/*
/* */

//
/// { majig:Majig } || { Error }
app.delete('/:majigId', (req, res) => {
  Index.localize(req, res, {
    token: res.locals.token,
    majigId: req.params.majigId,
  }, {
    flags: req.query.flags,
    keyword: req.query.keyword,
    filter: req.query.filter,
  }).then((locals) => {
    return Majig.findOne({
      _id: res.locals.majigId,
    }).catch((err) => {
      throw new Error.code(5000);
    });
  }).then((majig) => {
    if(!majig) throw new Error.code(6013);
    return majig.remove({
    }).catch((err) => {
      throw new Error.code(5000);
    });
  }).then((majig) => {
    if(!majig) throw new Error.code(5000);
    const query = {};
    if(res.locals.keyword) {
      query.markdown = new RegExp(
        res.locals.keyword, "i");
    } else {
      query.path = { $exists: false };
    }
    if(res.locals.flags) {
      query.$or = [];
      res.locals.flags.forEach((flag) => {
        query.$or.push({
          tags: new RegExp(flag, "i")
        });
      });
    }
    return Majig.find(
      query
    ).sort(
      res.locals.filter || '-updated'
    ).catch((err) => {
      throw new Error.code(5000);
    });
  }).then((majigs) => {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch((err) => {
    Index.respond(req, res, null, err);
  });
});

/*
/* */
module.exports = app;
