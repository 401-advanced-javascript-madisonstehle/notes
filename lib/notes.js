'use strict';

// ========== PACKAGES ==========
const mongoose = require('mongoose');

// ========== MODULES ==========
const NotesModel = require('../models/notes-model.js');

// ========== GLOBALS ==========
const dbURL = 'mongodb://localhost:27017/app';

// ========== START DB ==========
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

// ========== NOTES CLASS ==========
class Notes {
  constructor(arg) {
    // placeholders for note object
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

      let note = await NotesModel.create(this);

    } catch(err) {
      console.error(err);
    }
    mongoose.disconnect();
  }

  async List(category) {
    try {
      await NotesModel.read(category);

    } catch(err) {
      console.error(err);
    }
    mongoose.disconnect();
  }

  async delete(id) {
    try {
      await NotesModel.delete(id);
    } catch(err) {
      console.error(err);
    }
    mongoose.disconnect();
  }

}

// ========== EXPORT CONSTRUCTOR ==========
module.exports = Notes;