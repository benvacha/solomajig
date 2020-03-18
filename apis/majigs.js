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
    keyword: req.query.keyword,
    filter: req.query.filter,
  }).then(function(locals) {
    var regex = new RegExp(
      res.locals.keyword, "i");
    var query = {
      path: { $exists: false },
    };
    if(res.locals.keyword) {
      query.markdown = regex;
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
  }, {
    markdown: req.body.markdown,
    filter: req.body.filter,
    keyword: req.body.keyword,
  }).then(function(locals) {
    return Majig({
      markdown: res.locals.markdown,
    }).save({
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    res.locals.majig = majig;
    var regex = new RegExp(
      res.locals.keyword, "i");
    var query = {
      path: { $exists: false },
    };
    if(res.locals.keyword) {
      query.markdown = regex;
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
    majigId: req.params.majigId,
  }, {
    markdown: req.body.markdown,
    filter: req.body.filter,
    keyword: req.body.keyword,
  }).then(function(locals) {
    return Majig.findOne({
      _id: res.locals.majigId,
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(6013);
    majig.markdown = res.locals.markdown;
    return majig.save({
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(5000);
    var regex = new RegExp(
      res.locals.keyword, "i");
    var query = {
      path: { $exists: false },
    };
    if(res.locals.keyword) {
      query.markdown = regex;
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
    majigId: req.params.majigId,
  }, {
    filter: req.query.filter,
    keyword: req.query.keyword,
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
    var regex = new RegExp(
      res.locals.keyword, "i");
    var query = {
      path: { $exists: false },
    };
    if(res.locals.keyword) {
      query.markdown = regex;
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
