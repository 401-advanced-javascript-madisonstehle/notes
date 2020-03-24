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
        this.add(command.payload); // switch to the .add() function
        break;
      
      case 'list':
        this.List();
        break;
        
      case 'delete':
        this.delete(command.payload);
        break;  

      default: // else do nothing
        break;
    }
  }

  async add(payload){
    try {
      this.text = payload;
      let note = new NotesModel(this);
      await note.save(); 
      console.log(`"${this.text}" was saved!`)
    } catch(err) {
      console.error(err);
    }
    mongoose.disconnect();
  }

  async List() {
    try {
      let allNotes = await NotesModel.find();
      allNotes.forEach( obj => {
        console.log(obj.text);
      })
    } catch(err) {
      console.error(err);
    }
    mongoose.disconnect();
  }

  async delete(payload) {
    try {
      let targetNote = await NotesModel.findOne( { text: `${payload}` })
      console.log('note to be deleted:', targetNote);
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