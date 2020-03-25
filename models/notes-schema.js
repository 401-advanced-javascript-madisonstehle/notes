'use strict';

const mongoose = require('mongoose');


const notesSchema = mongoose.Schema({
  text: { type: String, required: true},
  categories: { type: Array },
});

const notesModel = mongoose.model('notes', notesSchema);

module.exports = notesModel;