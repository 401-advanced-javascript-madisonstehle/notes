'use strict';

// ========== IMPORT CONSTRUCTORS ==========
const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');

// ========== EXAMPLE NOTES ==========
// empty input
const badInputEmpty = new Input([]);

// wrong flag
const badInputFlag = new Input(['-b', 'notenotenotenote']);

// wrong text
const badInputText = new Input(['-a', '']);

// wrong flag AND text
const badInputBoth = new Input(['-b', '']);

// good input!
const goodInput =  new Input(['-a', 'This is a note']);

// ========== CONDITIONS ==========
// allows jest to "spy on" the console and watch for logs
jest.spyOn(global.console, 'log');
console.log = jest.fn();

// ========== TESTS ==========

// bad inputs
describe('handle bad note', () => {
  it('not to print an empty add-note to the console', () => {
    new Notes(badInputEmpty);
    
    expect(console.log).not.toHaveBeenCalled();
  });

  it('not to print a wrongly flagged add-note to the console', () => {
    new Notes(badInputFlag);
    
    expect(console.log).not.toHaveBeenCalled();
  });

  it('not to print an empty text add-note to the console', () => {
    new Notes(badInputText);
    
    expect(console.log).not.toHaveBeenCalled();
  });

  it('not to print a wrongly flagged AND text add-note to the console', () => {
    new Notes(badInputBoth);
    
    expect(console.log).not.toHaveBeenCalled();
  });
});

// good input
describe('handle correctly flagged add-note', () => {
  it('print good note to console', () => {
    new Notes(goodInput);

    expect(console.log).toHaveBeenCalled();
  });
});

