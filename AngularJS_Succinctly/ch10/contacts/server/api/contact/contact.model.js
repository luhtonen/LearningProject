'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number
});

module.exports = mongoose.model('Contact', ContactSchema);