'use strict';

// ======= import notes constructor =======
const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');

// ======= example notes for testing =======
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

// allows jest to "spy on" the console and watch for logs
jest.spyOn(global.console, 'log');
console.log = jest.fn();

// ======= TESTS =======

describe('handle bad note', () => {
  it('not to print an empty add-note to the console', () => {
    let result = new Notes(badInputEmpty);
    
    expect(console.log).not.toHaveBeenCalled();
  });

  it('not to print a wrongly flagged add-note to the console', () => {
    let result = new Notes(badInputFlag);
    
    expect(console.log).not.toHaveBeenCalled();
  });

  it('not to print an empty text add-note to the console', () => {
    let result = new Notes(badInputText);
    
    expect(console.log).not.toHaveBeenCalled();
  });

  it('not to print a wrongly flagged AND text add-note to the console', () => {
    let result = new Notes(badInputBoth);
    
    expect(console.log).not.toHaveBeenCalled();
  })
})


describe('handle correctly flagged add-note', () => {
  it('print good note to console', () => {
    let result = new Notes(goodInput);

    expect(console.log).toHaveBeenCalled();
  });
});

