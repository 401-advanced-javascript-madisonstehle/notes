'use strict';

// ========== NOTES CONSTRUCTOR ==========
function Notes(arg) {
  // placeholders for note object
  this.id = 0;
  this.text = '';

  // if the input is valid, switch to .execute() function
  if (arg.valid()) this.execute(arg.command);
  // else throw an error
  else console.error('ERROR! invalid arguments. please enter a note in the format of: -a "note text here". note text cannot be empty');
};

// ========== PROTOTYPES ==========
Notes.prototype.execute = function(command) {
  // directory of flags
  switch(command.action){
    case 'add': // if case is add...
      this.add(command.payload); // switch to the .add() function
      break;
    default: // else do nothing
      break;
  }
};

Notes.prototype.add = function(payload) {
  // creates a random id for the note
  this.id = Math.floor(Math.random() * 100);

  // assigns payload to text for note
  this.text = payload;

  // message to terminal
  console.log('Adding note...');
  console.log(this.id + ':', this.text);
};

// ========== EXPORT CONSTRUCTOR ==========
module.exports = Notes