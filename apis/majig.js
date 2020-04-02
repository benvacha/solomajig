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
/// { majig:Majig } || { Error }
app.get('/', (req, res) => {
  Index.localize(req, res, {
  }, {
    path: req.query.path,
    majigId: req.query.majigId,
  }).then((locals) => {
    if(!res.locals.majigId
    && !res.locals.path) {
      throw new Error.code(6007);
    };
    return Majig.findOne(
    ).byIdPath(
      res.locals.majigId,
      res.locals.path
    ).byToken(
      res.locals.token
    ).catch((err) => {
      throw new Error.code(5000);
    });
  }).then((majig) => {
    if(!majig) throw new Error.code(6013);
    Index.respond(req, res, majig);
  }).catch((err) => {
    Index.respond(req, res, null, err);
  });
});

/*
/* */

//
/// { majig:Majig } || { Error }
app.post('/', (req, res) => {
  Index.localize(req, res, {
    token: res.locals.token,
  }, {
    path: req.body.path,
    tags: req.body.tags,
    markdown: req.body.markdown,
  }).then((locals) => {
    return Majig({
      path: res.locals.path,
      tags: res.locals.tags,
      markdown: res.locals.markdown,
    }).save({
    }).then((majig) => {
      return res.locals.majig = majig;
    }).catch((errs) => {
      throw new Error.parsed(errs);
    });
  }).then((majig) => {
    if(!majig) throw new Error.code(5000);
    Index.respond(req, res, majig);
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
    path: req.body.path,
    tags: req.body.tags,
    markdown: req.body.markdown,
    published: req.body.published,
  }).then((locals) => {
    return Majig.findOne({
      _id: res.locals.majigId
    }).catch((err) => {
      throw new Error.code(5000);
    });
  }).then((majig) => {
    if(!majig) throw new Error.code(6013);
    if(res.locals.path === false) {
      majig.path = undefined;
    } else if(res.locals.path !== undefined) {
      majig.path = res.locals.path;
    }
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
    Index.respond(req, res, majig);
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
  }).then((locals) => {
    return Majig.findOne({
      _id: res.locals.majigId
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
    Index.respond(req, res, majig);
  }).catch((err) => {
    Index.respond(req, res, null, err);
  });
});

/*
/* */
module.exports = app;
