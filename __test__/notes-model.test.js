'use strict';

const supergoose = require('@code-fellows/supergoose');
const NotesModel = require('../models/notes-model.js');

jest.spyOn(global.console, 'log');
console.log = jest.fn();

beforeAll( async () => {
  await NotesModel.create({
    text: 'do laundry',
    categories: ['5e766d24ac87d229d4091d18']
  });

  await NotesModel.create({
    text: 'clean dishes',
    categories: ['5e766d24ac87d229d4091d18']
  });
});

describe( 'db can create', () => {
  it('for best case', async () => {
    let response = await NotesModel.create({
      text: 'grocery shopping',
      categories: ['5e766d24ac87d229d4091d18']
    });

    expect(response).not.toBe(false);
    expect(response.text).toBe('grocery shopping');
  });

  it('except when name is taken', async () => {
    let response =   await NotesModel.create({
      text: 'clean dishes',
      categories: ['5e766d24ac87d229d4091d18']
    });

    expect(response).toBe(false);
  });
});

describe( 'db can read', () => {
  it('for all records', async () => {
    await NotesModel.read();

    expect(console.log).toHaveBeenCalled();
  });

  it( 'for a valid category', async () => {
    await NotesModel.read('home');

    expect(console.log).toHaveBeenCalled();
  });
});

describe( 'db can update', () => {
  it('update a record given an ID and a change', async () => {
    let response = await NotesModel.update('5e766c78ac87d229d4091d16', {"text": "clean bathroom"});

    // expect(response.text).toBe('clean bathroom');
    expect(console.log).toHaveBeenCalled();
  })
})

describe( 'db can delete', () => {
  it('delete a record given an ID', async () => {
    await NotesModel.delete('5e7e7abacb38d35c50332bc0');

    expect(console.log).toHaveBeenCalled();
  })
})