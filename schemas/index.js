/* Copyright (C) 2020 BenVacha/SoloMajig *//*

  Index.author(req, res, {
  }).then(token).catch(error);

  Index.authorize(req, res, {
    xtoken: input
  }, {
    xtoken: input
  }).then(token).catch(error);

  Index.localize(req, res, {
    localizer: input
  }, {
    localizer: input
  ).then(locals).catch(error);

  Index.respond(req, res,
    data, error, debug
  }).then(response).catch(error);

/* /**/
const __require = global.__require;
const Promise = require('bluebird');
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Error = __require('/models/error');
const Token = __require('/models/token');
/* */
const schema = new Schema({
}, {
  collation: { locale: 'en_US', strength: 1 },
  toObject: { transform: function (doc, ret) {} },
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
/// token || throw Error
schema.statics.author =
function (req, res, data) {
  return new Promise(function (resolve, reject) {
    Token.new(
    ).then(function (token) {
      resolve(token);
    }).catch(function () {
      reject(new Error.Code(6001));
    });
  });
};

// xtoken:String, required:Boolean
/// token || throw Error
schema.statics.authorize =
function (req, res, requireds, optionals) {
  return new Promise(function (resolve, reject) {
    const xtoken = requireds.xtoken ||
    optionals.xtoken;
    if (!xtoken) { return resolve(); }
    Token.verify(
      xtoken
    ).then(function (token) {
      res.locals.token = token;
      resolve(token);
    }).catch(function () {
      reject(new Error.Code(6001));
    });
  });
};

/*
/* */

// req:{}, input:*
/// falsy || throw Error
schema.statics.LOCALIZERS = {
  flags: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6020);
    } else if (!input) { return; }
    res.locals.flags = input;
  },
  filter: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6016);
    } else if (!input) { return; }
    res.locals.filter = input;
  },
  limit: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6025);
    } else if (!input) { return; }
    input = parseInt(input);
    if (input < 0 || isNaN(input)) {
      throw new Error.Code(6026);
    }
    res.locals.limit = input;
  },
  majigId: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6007);
    } else if (!input) { return; }
    res.locals.majigId = input;
  },
  markdown: function (req, res, input, required) {
    if (required && input === undefined) {
      throw new Error.Code(6009);
    } else if (input === undefined) { return; }
    res.locals.markdown = input;
  },
  password: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6003);
    } else if (!input) { return; }
    res.locals.password = input;
  },
  path: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6011);
    } else if (input === false) {
      res.locals.path = false;
      return;
    } else if (!input) { return; }
    const regex = new RegExp('^/.*[^/]$');
    if (!regex.test(input)) {
      throw new Error.Code(6012);
    }
    res.locals.path = input;
  },
  published: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6022);
    } else if (input === false) {
      res.locals.published = false;
      return;
    } else if (input === true) {
      res.locals.published = Date.now();
      return;
    } else if (!input) { return; }
    const published = Date.parse(input);
    if (isNaN(published)) {
      throw new Error.Code(6023);
    }
    res.locals.published = published;
  },
  skip: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6027);
    } else if (!input) { return; }
    input = parseInt(input);
    if (input < 0 || isNaN(input)) {
      throw new Error.Code(6028);
    }
    res.locals.skip = input;
  },
  tags: function (req, res, input, required) {
    if (required && input === undefined) {
      throw new Error.Code(6018);
    } else if (input === undefined) { return; }
    res.locals.tags = input;
  },
  terms: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6014);
    } else if (!input) { return; }
    res.locals.terms = input;
  },
  token: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6002);
    } else if (!input) { return; }
    res.locals.token = input;
  },
  username: function (req, res, input, required) {
    if (required && !input) {
      throw new Error.Code(6005);
    } else if (!input) { return; }
    res.locals.username = input;
  }
};

// req:{}, res:{},
// requireds:{ localizer:input }
// optionals:{ localizer:input }
/// res.locals || throw Error
schema.statics.localize =
function (req, res, requireds, optionals) {
  return new Promise(function (resolve, reject) {
    const localizers = schema.statics.LOCALIZERS;
    for (const required in requireds) {
      if (!localizers[required]) {
        return reject(new Error.Code(5000));
      }
      try {
        localizers[required](
          req, res, requireds[required], true);
      } catch (error) { return reject(error); }
    }
    for (const optional in optionals) {
      if (!localizers[optional]) break;
      try {
        localizers[optional](
          req, res, optionals[optional], false);
      } catch (error) { return reject(error); }
    }
    return resolve(res.locals);
  });
};

/*
/* */

// req:{}, res:{},
// data:{}, error:Error
/// (response) || (Error)
schema.statics.respond =
function (req, res, data, error, debug) {
  return new Promise(function (resolve, reject) {
    const nodeEnv = process.env.NODE_ENV;
    debug = typeof (debug) !== 'undefined' ? debug
      : error && nodeEnv !== 'production';
    if (debug) {
      console.log('###\nRESPOND:',
        data, error);
    }
    const response = { meta: { version: '0.1.0' } };
    if (error) {
      response.errors = [{
        code: error.code || 1000,
        status: error.status || 500,
        title: error.title || 'server error',
        detail: error.detail || 'server error'
      }];
    } else { response.data = data; }
    if (!error) { response.status = 200; } else { response.status = error.status || 500; }
    if (debug) { console.log('', response, '\n####'); }
    res.status(response.status).json(response);
    return resolve(response);
  });
};

/*
/* */
module.exports = schema;
