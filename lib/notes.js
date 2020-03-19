'use strict';

function Notes(arg) {
  this.id = 0;
  this.note = {};

  if (arg.valid()) this.execute(arg.command);
  else console.error('ERROR! invalid arguments. please enter a note in the format of: -a "note text here".');
}

Notes.prototype.execute = function(command) {

  switch(command.action){
    case 'add':
      this.add(command.payload);
      break;
    default:
      break;
  }
}

Notes.prototype.add = function(payload) {
  // creates a random id for the note
  this.id = Math.floor(Math.random() * 100);

  // create a "note" object
  this.note = { id: this.id, text: payload};

  // message to terminal
  console.log('Adding note...');
  console.log(this.id + ':', payload);

}


module.exports = Notes