'use strict';

// ========== IMPORT CONSTRUCTOR ==========
const Input = require('../lib/input.js');

// ========== EXAMPLE INPUTS ==========

// no command line data (null)
const badInputA = [];

// command line input wrong (not the format of flag + data)
const badInputB = ['WRONG'];

// command line input has wrong flag
const badInputC = ['-b', 'WRONG'];

// command line input has data that is not a string
const badInputD = ['-a', ''];

// GOOD INPUT! -> command line input with '-a' followed by a string
const goodInput = ['-a', 'This is a note'];

// ========== TESTS ==========

// bad inputs
describe('handle bad input', () => {
  it('handles empty input', () => {
    let result = new Input(badInputA);
    expect(result.valid()).toBeFalsy();
  });

  it('handles wrong input', () => {
    let result = new Input(badInputB);
    expect(result.valid()).toBeFalsy();
  })

  it('handles wrong flag', () => {
    let result = new Input(badInputC);
    expect(result.valid()).toBeFalsy();
  });

  it('handles wrong data type', () => {
    let result = new Input(badInputD);
    expect(result.valid()).toBeFalsy();
  });
});

// good input
describe('handles good input', () => {
  it('handles input of -a and a string', () => {
    let result = new Input(goodInput);
    expect(result.valid()).toBeTruthy;
  });
});

