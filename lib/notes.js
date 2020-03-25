'use strict';

// ========== PACKAGES ==========
const mongoose = require('mongoose');

// ========== MODULES ==========
const NotesModel = require('../models/notes-schema.js');

// ========== GLOBALS ==========
const dbURL = 'mongodb://localhost:27017/app';

// ========== START DB ==========
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

// ========== NOTES CLASS ==========
class Notes {
  constructor(arg) {
    // placeholders for note object
    // this.id = 0;
    this.text = '';
  
    // if the input is valid, switch to .execute() function
    if (arg.valid()) this.execute(arg.command);
    // else throw an error
    else console.error('ERROR! invalid arguments. please enter a note in the format of: -a "note text here". note text cannot be empty');
  }

  execute(command){
    // directory of flags
    switch(command.action){
      case 'add': // if case is add...
        this.add(command.payload, command.categories); // switch to the .add() function
        break;
      
      case 'list':
        this.List(command.payload);
        break;
        
      case 'delete':
        this.delete(command.payload);
        break;  

      default: // else do nothing
        break;
    }
  }

  async add(payload, categories){
    try {
      this.text = payload;
      this.categories = categories;
      let note = new NotesModel(this);
      await note.save(); 
      console.log(`"${this.text}" was saved!`)
    } catch(err) {
      console.error(err);
    }
    mongoose.disconnect();
  }

  async List(category) {
    let allNotes = [];

    try {
      let allNotes = await NotesModel.find();

      allNotes.forEach( obj => {
        if (category){
          if (obj.categories.includes('5e766dc5ac87d229d4091d19') && category === 'school') {
            console.log('Note ID:', obj._id);
            console.log(obj.text);
            console.log('-----------');
          }
          if (obj.categories.includes('5e766d24ac87d229d4091d18') && category === 'home') {
            console.log('Note ID:', obj._id);
            console.log(obj.text);
            console.log('-----------');
          }
          if (obj.categories.includes('5e766cadac87d229d4091d17') && category === 'work') {
            console.log('Note ID:', obj._id);
            console.log(obj.text);
            console.log('-----------');
          }
        } else {
          console.log('Note ID:', obj._id);
          console.log(obj.text);
          console.log('-----------');
        }
      })
    } catch(err) {
      console.error(err);
    }
    mongoose.disconnect();
  }

  async delete(payload) {
    try {
      let targetNote = await NotesModel.findOne( { _id: `${payload}` })
      console.log('deleting note:', targetNote);
      await NotesModel.deleteOne(targetNote);
      console.log('... note has been deleted!');
    } catch(err) {
      console.error(err);
    }
    mongoose.disconnect();
  }

}

// ========== CLOSE DB ==========
// mongoose.disconnect();

// ========== EXPORT CONSTRUCTOR ==========
module.exports = Notes;