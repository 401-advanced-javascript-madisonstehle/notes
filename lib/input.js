'use strict';

// 'a' does something
// exporting a's constructor (that gives us 'a')
// a.command = { action: 'add', payload: 'string' }
// a.valid() = function that tells us if a.command is valid
// args = ['-a', 'my note']

// ========== PACKAGES ==========
const minimist = require('minimist');

// ========== CONSTRUCTOR ==========
function Input(arg) {
  this.command = {};

  let formattedArgs = minimist(arg);
  let objKeyArray = Object.keys(formattedArgs);

  for (let i = 0; i < objKeyArray.length; i++) {
    let key = objKeyArray[i];
    let val = formattedArgs[key];

    // console.log('key', key, 'val', val);

    switch(key) {
      case 'a':
      case 'add':
        this.command = { action: 'add', payload: val }
        return;
  
      default:
        break;
    }
  }

}

Input.prototype.valid = function() {
  if (!this.command) return false;
  if (!this.command.action) return false;

  switch(this.command.action){
    case 'add':
      return typeof this.command.payload === 'string';
    default:
      break;
  }

  if (this.command && this.command.action === 'add') return true;
  else return false;
}

module.exports = Input;