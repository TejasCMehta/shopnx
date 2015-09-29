'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SettingsSchema = new Schema({
  paypal: String
});

module.exports = mongoose.model('Settings', SettingsSchema);
