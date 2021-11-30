const mongoose = require('mongoose');
const schema = require('./who-schema');
const model = mongoose.model('WhoSchema', schema);
module.exports = model;
