/* Copyright (C) 2020 BenVacha/Solomajig *//*
/* /**/
var Express = require('express');
var Mongoose = require('mongoose');
var ObjectId = Mongoose.Types.ObjectId;
var Index = __require('/models/index');
var Error = __require('/models/error');
var Majig = __require('/models/majig');
/* */
var app = Express();

/*
/* GET */

// keyword:'',
/// { majigs:[Majig] } || { Error }
app.get('/', function(req, res) {
  Index.localize(req, res, {
  }, {
    flags: req.query.flags,
    keyword: req.query.keyword,
    filter: req.query.filter,
  }).then(function(locals) {
    var query = {};
    if(res.locals.keyword) {
      query.markdown = new RegExp(
        res.locals.keyword, "i");
    } else {
      query.path = { $exists: false };
    }
    if(res.locals.flags) {
      query.$or = [];
      res.locals.flags.forEach(flag => {
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
    ).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majigs) {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch(function(err) {
      Index.respond(req, res, null, err);
  });
});

/*
/* POST */

// markdown:'',
/// { majigs:[Majig] } || { Error }
app.post('/', function(req, res) {
  Index.localize(req, res, {
    token: res.locals.token,
  }, {
    tags: req.body.tags,
    markdown: req.body.markdown,
    flags: req.body.flags,
    keyword: req.body.keyword,
    filter: req.body.filter,
  }).then(function(locals) {
    return Majig({
      tags: res.locals.tags,
      markdown: res.locals.markdown,
    }).save({
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    res.locals.majig = majig;
    var query = {};
    if(res.locals.keyword) {
      query.markdown = new RegExp(
        res.locals.keyword, "i");
    } else {
      query.path = { $exists: false };
    }
    if(res.locals.flags) {
      query.$or = [];
      res.locals.flags.forEach(flag => {
        query.$or.push({
          tags: new RegExp(flag, "i")
        });
      });
    }
    return Majig.find(
      query
    ).sort(
      res.locals.filter || '-updated'
    ).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majigs) {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch(function(err) {
      if(res.locals.majig) {
          res.locals.majig.remove(); }
      Index.respond(req, res, null, err);
  });
});

/*
/* PUT */

// majigId:ObjectId, markdown:'',
/// { majig:Majig } || { Error }
app.put('/:majigId', function(req, res) {
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
  }).then(function(locals) {
    return Majig.findOne({
      _id: res.locals.majigId,
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
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
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    var query = {};
    if(res.locals.keyword) {
      query.markdown = new RegExp(
        res.locals.keyword, "i");
    } else {
      query.path = { $exists: false };
    }
    if(res.locals.flags) {
      query.$or = [];
      res.locals.flags.forEach(flag => {
        query.$or.push({
          tags: new RegExp(flag, "i")
        });
      });
    }
    return Majig.find(
      query
    ).sort(
      res.locals.filter || '-updated'
    ).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majigs) {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
});

/*
/* DELETE */

//
/// { majig:Majig } || { Error }
app.delete('/:majigId', function(req, res) {
  Index.localize(req, res, {
    token: res.locals.token,
    majigId: req.params.majigId,
  }, {
    flags: req.query.flags,
    keyword: req.query.keyword,
    filter: req.query.filter,
  }).then(function(locals) {
    return Majig.findOne({
      _id: res.locals.majigId,
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
    var query = {};
    if(res.locals.keyword) {
      query.markdown = new RegExp(
        res.locals.keyword, "i");
    } else {
      query.path = { $exists: false };
    }
    if(res.locals.flags) {
      query.$or = [];
      res.locals.flags.forEach(flag => {
        query.$or.push({
          tags: new RegExp(flag, "i")
        });
      });
    }
    return Majig.find(
      query
    ).sort(
      res.locals.filter || '-updated'
    ).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majigs) {
      if(!majigs) throw new Error.code(5000);
      Index.respond(req, res, majigs);
  }).catch(function(err) {
    Index.respond(req, res, null, err);
  });
});

/*
/* */
module.exports = app;
