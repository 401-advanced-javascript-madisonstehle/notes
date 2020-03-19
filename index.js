'use strict';

// console.log('i am here!');

// ========== MODULES ==========
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

// ========== PROCESS TERMINAL ARGUMENTS ==========
let parsedInput = new Input(process.argv.slice(2));
let note = new Notes(parsedInput);
