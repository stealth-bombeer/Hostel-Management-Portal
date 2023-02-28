const mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema

const complainSchema = new Schema({
name: {
        type: String,
        required: true,
        // unique: true
      },
      number: {
        type: String,
        required: true,
        // unique: true
      },
  block: {
    type: String,
    required: true,
    // unique: true
  },
  roomno: {
    type: String,
    required: true,
    // unique: true
  },
  complain: {
    type: String,
    required: true,
    // unique: true

  },
  date: {
    type: String,
    required: true,
    // unique: true

  },
  compdetail: {
    type: String,
    required: true,
    // unique: true

  }

//   Slot: {
//     type: Number,
//     required: true,
//     unique: true

//   }
 
}, { timestamps: true })

// appointmentSchema.plugin(uniqueValidator);
  





module.exports = mongoose.model('Complain', complainSchema)