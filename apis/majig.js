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

//
/// { majig:Majig } || { Error }
app.get('/', function(req, res) {
  Index.localize(req, res, {
  }, {
    path: req.query.path,
    majigId: req.query.majigId,
  }).then(function(locals) {
    var query = {};
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
/* POST */

// path:'', markdown:'',
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
/* PUT */

// path, markdown:'',
/// { majig:Majig } || { Error }
app.put('/', function(req, res) {
  Index.localize(req, res, {
    token: res.locals.token,
  }, {
    path: req.body.path,
    tags: req.body.tags,
    markdown: req.body.markdown,
  }).then(function(locals) {
    return Majig.findOne({
      path: res.locals.path
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
    if(!majig) return majig;
    if(res.locals.tags !== undefined) {
      majig.tags = res.locals.tags;
    }
    if(res.locals.markdown  !== undefined) {
      majig.markdown = res.locals.markdown;
    }
    return majig.save({
    }).catch(function(errs) {
      throw new Error.parsed(errs);
    });
  }).then(function(majig) {
    if(majig) return majig;
    return Majig({
      path: res.locals.path,
      tags: res.locals.tags,
      markdown: res.locals.markdown,
    }).save({
    }).then(function(majig) {
      res.locals.majig = majig;
      return majig;
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

// majigId:ObjectId, markdown:'',
/// { majig:Majig } || { Error }
app.put('/:majigId', function(req, res) {
  Index.localize(req, res, {
    token: res.locals.token,
    majigId: req.params.majigId,
  }, {
    path: req.body.path,
    tags: req.body.tags,
    markdown: req.body.markdown,
  }).then(function(locals) {
    return Majig.findOne({
      _id: res.locals.majigId
    }).catch(function(err) {
      throw new Error.code(5000);
    });
  }).then(function(majig) {
    if(!majig) throw new Error.code(6013);
    if(res.locals.path !== undefined) {
      majig.path = res.locals.path;
    }
    if(res.locals.tags !== undefined) {
      majig.tags = res.locals.tags;
    }
    if(res.locals.markdown !== undefined) {
      majig.markdown = res.locals.markdown;
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

// majigId:ObjectId,
/// { majig:Majig } || { Error }
app.put('/:majigId/published',
function(req, res) {
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
    majig.published = Date.now();
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

// majigId:ObjectId,
/// { majig:Majig } || { Error }
app.put('/:majigId/unpublished',
function(req, res) {
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
    majig.published = undefined;
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
/* DELETE */

// majigId:ObjectId,
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
