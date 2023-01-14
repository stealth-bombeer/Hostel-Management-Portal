const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema

const nameSchema = new Schema({
  Name1: {
    type: String,
    required: true,
    unique: true
  },
  Name2: {
    type: String,
    required: true,
    unique: true
  },
  Name3: {
    type: String,
    required: true,
    unique: true

  },
  RoomNo: {
    type: Number,
    required: true,
    unique: true

  }
 
}, { timestamps: true })

nameSchema.plugin(uniqueValidator);
  





module.exports = mongoose.model('Name', nameSchema)