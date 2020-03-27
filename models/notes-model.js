'use strict';

const notesMongooseModel = require('./notes-schema.js')

class Model {
  constructor(mongooseModel) {
    this.model = mongooseModel;
  }

  async create(record){
    try {
      let recordToAdd = new this.model(record);
      return await recordToAdd.save(); 
    } 
    catch(e) {
      console.error('ERROR CREATING RECORD', e);
      return false;
    }
  }

  async read(category){
    try {
      let foundRecords = await this.model.find();

      return foundRecords.forEach( obj => {
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
      console.error('ERROR FINDING RECORD', e);
      return false;
    }
  }

  async update(_id, changedRecord){
    try {
      let newRecord = await this.model.findByIdAndUpdate({_id}, changedRecord);
      console.log('UPDATED RECORD', newRecord);
      return newRecord;
    }
    catch(e) {
      console.error('ERROR UPDATING RECORD', e);
    }
  }

  async delete(_id){
    try {
      let deletedRecord = await this.model.deleteOne({ _id: _id });
    } catch(e) {
      console.error('ERROR DELETING RECORD', e);
      return false;
    }
  }

}


let NotesModel = new Model(notesMongooseModel);

module.exports = NotesModel;