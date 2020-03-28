'use strict';

const mongoose = require('mongoose');


const notesSchema = mongoose.Schema({
  text: { type: String, required: true, unique: true},
  categories: { type: Array },
});

notesSchema.pre('save', function(){
  console.log('Saving note...');
  console.log(this);
});

notesSchema.post('save', function(){
  console.log('Note saved!');
});

notesSchema.pre('find', function(){
  console.log('finding notes...');
});

notesSchema.post('find', function(){
  console.log('Are these the notes you\'re looking for?');
});

notesSchema.pre('updateOne', function(){
  console.log('updating note...');
  console.log(this);
});

notesSchema.post('updateOne', function(){
  console.log('Note updated!');
});

notesSchema.pre('deleteOne', function(){
  console.log('Deleting note...');
});

notesSchema.post('deleteOne', function(){
  console.log('Note deleted!');
});

const notesModel = mongoose.model('notes', notesSchema);

module.exports = notesModel;