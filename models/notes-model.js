'use strict';

const mongoose = require('mongoose');
const notesMongooseModel = require('./notes-schema.js')

class Model {
  constructor(mongooseModel) {
    this.model = mongooseModel;
  }

  async create(record){
    try {
      let recordToAdd = new this.model(record);
      await recordToAdd.save(); 
    } 
    catch(e) {
      console.error('ERROR CREATING RECORD', e);
    }
  }

  async read(category){
    try {
      let foundRecords = await this.model.find();

      foundRecords.forEach( obj => {
        if (category){
          if (obj.categories.includes('5e766dc5ac87d229d4091d19') && category === 'school') {
            console.log('Note ID:', obj._id);
            console.log(obj.text);
            console.log('-----------');
          }
          if (obj.categories.includes('5e766d24ac87d229d4091d18') && category === 'home') {
            console.log('Note ID:', obj._id);
            console.log(obj.text);
            console.log('-----------');
          }
          if (obj.categories.includes('5e766cadac87d229d4091d17') && category === 'work') {
            console.log('Note ID:', obj._id);
            console.log(obj.text);
            console.log('-----------');
          }
        } else {
          console.log('Note ID:', obj._id);
          console.log(obj.text);
          console.log('-----------');
        }
      });
    }
    catch(e) {
      console.error('ERROR FINDING RECORD', e)
    }
  }

  async update(_id, changedRecord){

  }

  async delete(_id){
    try {
      let deletedRecord = await this.model.deleteOne({ _id: _id });
    } catch(e) {
      console.error('ERROR DELETING RECORD', e);
    }
  }

}


let NotesModel = new Model(notesMongooseModel);

module.exports = NotesModel;