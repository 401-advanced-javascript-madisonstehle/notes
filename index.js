#!/usr/bin/env node

'use strict';

// ========== MODULES ==========
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

// ========== PROCESS TERMINAL ARGUMENTS ==========
let parsedInput = new Input(process.argv.slice(2));
let note = new Notes(parsedInput);
