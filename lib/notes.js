'use strict';

function Notes(arg) {
  if (arg.valid()) this.execute(arg.command);
  else console.error('ERROR! invalid arguments. please enter a note in the format of: -a "note text here".');
}

Notes.prototype.execute = function(command) {
  console.log('EXECUTING NOTES')

  switch(command.action){
    case 'add':
      this.add(command.payload);
      break;
    default:
      break;
  }
}

Notes.prototype.add = function(payload) {
  let id = Math.floor(Math.random() * 100);

  console.log('Adding note...');
  console.log(id + ':', payload);

}


module.exports = Notes