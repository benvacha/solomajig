/* Copyright (C) 2020 BenVacha/SoloMajig *//*
/* /**/
const Mongoose = require('mongoose');
const Schema = __require('/schemas/error');

/*
/* */
module.exports = Mongoose.model('Error', Schema);
