'use strict';

const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
  category: { type: String, required: true },
});

const categoriesModel = mongoose.model('categories', categoriesSchema);

module.exports = categoriesModel;