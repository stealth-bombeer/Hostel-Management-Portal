const mongoose = require('mongoose');


const Schema = mongoose.Schema

const studentSchema = new Schema ({
    Name:{
        type:String
    }

})

// const roomSchema = new Schema ({
//     RNo: {
//         type:Number
//     },
//     Students: [studentSchema]
// })

// const floorSchema =new Schema ({
//     FNo: {
//         type:Number
        
//     },
//     Room: [roomSchema]
// })

const blockSchema = new Schema({
  BlockNo: {
    type: String
  },
  FloorNo:{
    type: Number
  },
  RoomNo:{
    type: Number
  },
  Students:[studentSchema]
 
})



module.exports = mongoose.model('Block', blockSchema)