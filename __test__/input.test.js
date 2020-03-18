'use strict';

// ======= import input constructor =======
const Input = require('../lib/input.js');

// ======= fake bad data for testing =======

// no command line data (null)
const badInputA = [];
// command line input wrong (not the format of flag + data)
const badInputB = ['WRONG'];
// command line input has wrong flag
const badInputC = ['-b', 'WRONG'];
// command line input has data that is not a string
const badInputD = ['-a', ''];

// ======= fake good data for testing =======

// command line input with '-a' followed by a string
const goodInput = ['-a', 'This is a note'];

// ======= TESTS =======

describe('handle bad input', () => {
  it('handles empty input', () => {
    let result = new Input(badInputA);

    // result.command; {action: 'add', payload: 'a string' }
    //  when given [], result.command = {}
    // result.valid(); returns true or false if the command makes sense

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

describe('handles good input', () => {
  it('handles input of -a and a string', () => {
    let result = new Input(goodInput);
    expect(result.valid()).toBeTruthy;
  });
});

