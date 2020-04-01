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
app.get('/', function(req, res) {
  Index.localize(req, res, {
  }, {
    path: req.query.path,
    majigId: req.query.majigId,
  }).then(function(locals) {
    const query = {};
    if(res.locals.majigId) {
      query._id = res.locals.majigId;
    } else if(res.locals.path) {
      query.path = res.locals.path;
    } else {
      throw new Error.code(6007);
    };
    if(!res.locals.token) {
      query.published = {
        $exists: true
      };
    }
    return Majig.findOne(
      query
    ).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(6013);
    Index.respond(req, res, majig);
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
});

/*
/* */

//
/// { majig:Majig } || { Error }
app.post('/', function(req, res) {
  Index.localize(req, res, {
    token: res.locals.token,
  }, {
    path: req.body.path,
    tags: req.body.tags,
    markdown: req.body.markdown,
  }).then(function(locals) {
    return Majig({
      path: res.locals.path,
      tags: res.locals.tags,
      markdown: res.locals.markdown,
    }).save({
    }).then(function(majig) {
      return res.locals.majig = majig;
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    Index.respond(req, res, majig);
  }).catch(function(err) {
    if(res.locals.majig) {
      res.locals.majig.remove(); }
    Index.respond(req, res, null, err);
  });
});

/*
/* */

//
/// { majig:Majig } || { Error }
app.put('/:majigId', function(req, res) {
  Index.localize(req, res, {
    token: res.locals.token,
    majigId: req.params.majigId,
  }, {
    path: req.body.path,
    tags: req.body.tags,
    markdown: req.body.markdown,
    published: req.body.published,
  }).then(function(locals) {
    return Majig.findOne({
      _id: res.locals.majigId
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
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
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    Index.respond(req, res, majig);
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
});

/*
/* */

//
/// { majig:Majig } || { Error }
app.delete('/:majigId', function(req, res) {
  Index.localize(req, res, {
    token: res.locals.token,
    majigId: req.params.majigId,
  }, {
  }).then(function(locals) {
    return Majig.findOne({
      _id: res.locals.majigId
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(6013);
    return majig.remove({
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    Index.respond(req, res, majig);
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
});

/*
/* */
module.exports = app;
