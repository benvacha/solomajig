/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
const __require = global.__require;
const Mongoose = require('mongoose');
const Schema = __require('/schemas/index');

/*
/* */
module.exports = Mongoose.model('Index', Schema);
