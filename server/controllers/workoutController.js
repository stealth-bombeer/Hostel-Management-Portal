// const Blockfloor = require('../models/blockSchema')
// const User = require("../models/userModel");
// const Complain = require('../models/complainModel')

// const mongoose = require('mongoose')

// // get all Names
// // const getBlock = async (req, res) => {
// //   const BlockNo = req.BlockNo
// //   const FloorNo = req.FloorNo

// //   const names = await blockfloor.find({BlockNo,FloorNo}).sort({createdAt: -1})

// //   res.status(200).json(names)
// // }
// const getBlock = async (req, res) => {
//   // const BlockNo = req.query.BlockNo
//   // const FloorNo = req.query.FloorNo
//   // console.log(req.headers.BlockNo);
//   const id=req.id

//   const names = await Blockfloor.find({id}).sort({createdAt: 1})

//   res.status(200).json(names)
//   // console.log(req.headers.BlockNo);
//   // const { BlockNo } = req.headers;
//   // const rank = await blockfloor.findOne({ BlockNo })
//   // console.log(rank);
//   // return res.json({ rank });
// }


// // get a single workout
// // const getWorkout = async (req, res) => {
// //   const { id } = req.params

// //   if (!mongoose.Types.ObjectId.isValid(id)) {
// //     return res.status(404).json({error: 'No such workout'})
// //   }

// //   const workout = await Workout.findById(id)

// //   if (!workout) {
// //     return res.status(404).json({error: 'No such workout'})
// //   }
  
// //   res.status(200).json(workout)
// // }


// // create new workout
// const createBlock = async (req, res) => {
//   const {BlockNo,FloorNo,Email,RoomNo} = req.body
  
//   try {
    
    
//     const b =await Blockfloor.updateOne(
//       { BlockNo: BlockNo, FloorNo: FloorNo, RoomNo : RoomNo },
//       { $push: { Students: { Name: Email } } }
//     );
//     const c =await User.updateOne(
//       { name: Email },
//       { $set: {alloted:"1"} }
//     );
//     console.log(c,"Alloted")
//     res.status(200).json(b)
//   } catch (error) {
//     if(error.code===11000)
//    {
//      console.log("Hi")
//      res.status(400).json({error});
//    }
//    else{
//      console.log("vuv")
//     res.status(400).json({error: error.message})
//    }

    
//   }
// }

// const createAlloted = async (req, res) => {
//   const {Email} = req.body
//   console.log(req.body,"Inside");
 
//   try {
//     console.log("Hiiii")
//     const b =await User.updateOne(
//       { name: Email },
//       { $set: {alloted:"1"} }
//     );
//     res.status(200).json(b)
//     console.log("Hiiii")
//   } catch (error) {
//     if(error.code===11000)
//    {
//      console.log("Hi")
//      res.status(400).json({error});
//    }
//    else{
//      console.log("vuv")
//     res.status(400).json({error: error.message})
//    }
//   }
// }

// // delete a workout
// // const deleteWorkout = async (req, res) => {
// //   const { id } = req.params

// //   if (!mongoose.Types.ObjectId.isValid(id)) {
// //     return res.status(404).json({error: 'No such workout'})
// //   }

// //   const name = await Name.findOneAndDelete({_id: id})

// //   if (!name) {
// //     return res.status(400).json({error: 'No such workout'})
// //   }

// //   res.status(200).json(name)
// // }

// // update a workout
// // const updateName = async (req, res) => {
// //   const { id } = req.params

// //   if (!mongoose.Types.ObjectId.isValid(id)) {
// //     return res.status(404).json({error: 'No such workout'})
// //   }

// //   const name = await Workout.findOneAndUpdate({_id: id}, {
// //     ...req.body
// //   })

// //   if (!name) {
// //     return res.status(400).json({error: 'No such workout'})
// //   }

// //   res.status(200).json(name)
// // }
// const createcomplain = async (req, res) => {
//   console.log("Inside createcomplain")
//   const {name,number,block,roomno,complain} = req.body

//   let emptyFields = []
//   if(!name) {
//     emptyFields.push('name')
//   }
//   if(!number) {
//     emptyFields.push('number')
//   }
//   if(!block) {
//     emptyFields.push('block')
//   }
//   if(!roomno) {
//     emptyFields.push('roomno')
//   }
//   if(!complain) {
//     emptyFields.push('complain')
//   }
  
//   if(emptyFields.length > 0) {
//     return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
//   }
//   try
//   {
//     // const exists= await Appointment.find({Slot})
//     // if(exists)
//     // {
//     //   res.status(400).json({error: error.message})
//     // }
//   const comp = await Complain.create({name,number,block,roomno,complain})
//   res.status(200).json(comp)
//   }
//   catch(error){
//     res.status(400).json({error: error.message})
//   }
// }

// module.exports = {
//   getBlock,
  
//   // createName,
  
//   // updateName
//   createBlock,
//   createcomplain,
//   createAlloted
// }



const Blockfloor = require('../models/blockSchema')
const User = require("../models/userModel");
const Complain = require('../models/complainModel')

const mongoose = require('mongoose')

// get all Names
// const getBlock = async (req, res) => {
//   const BlockNo = req.BlockNo
//   const FloorNo = req.FloorNo

//   const names = await blockfloor.find({BlockNo,FloorNo}).sort({createdAt: -1})

//   res.status(200).json(names)
// }
const getBlock = async (req, res) => {
  const id = req.id;
  
  try {
    const blocks = await Blockfloor.find({
      $or: [
        { BlockNo: 'D', RoomNo: { $in: [201, 202, 203, 204, 101, 102, 103, 104, 301, 302, 303, 304, 401, 402, 403, 404] }, 'Students.3': { $exists: false } },
        { BlockNo: 'D', RoomNo: { $in: [420, 421, 413, 414, 415, 416, 408, 409, 323, 322, 327, 315, 316, 317, 318, 309, 310, 311, 220, 221, 222, 208, 122, 123, 110] }, 'Students.1': { $exists: false } },
        { BlockNo: 'D', RoomNo: { $in: [405,406,407,410,411,412,417,418,419,422,423,305,306,307,308,312,313,314,319,320,321,324,325,326,205,206,207,209,210,211,212,213,214,215,216,217,218,219,223,224,105,106,107,108,109,111,112,113,114,115,116,117,118,119,120,121,124,125,126] }, 'Students.2': { $exists: false } },
        { BlockNo: { $in: ['A', 'B', 'C', 'E', 'F'] }, 'Students.2': { $exists: false } }
      ]
    });
    res.json(blocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  };












// get a single workout
// const getWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findById(id)

//   if (!workout) {
//     return res.status(404).json({error: 'No such workout'})
//   }
  
//   res.status(200).json(workout)
// }


// create new workout
const createBlock = async (req, res) => {
  const {BlockNo,FloorNo,Email,RoomNo} = req.body
  
 

    try {
      const blockfloor = await Blockfloor.findOne({ BlockNo: BlockNo, FloorNo: FloorNo, RoomNo: RoomNo });
    
      let maxStudents;
      if (BlockNo === 'D') {
        if ([201, 202, 203, 204, 101, 102, 103, 104, 301, 302, 303, 304, 401, 402, 403, 404].includes(RoomNo)) {
          maxStudents = 4;
        } else if ([420, 421, 413, 414, 415, 416, 408, 409, 323, 322, 327, 313, 314, 315, 316, 317, 318, 309, 310, 311, 220, 221, 222, 208, 122, 123, 110].includes(RoomNo)) {
          maxStudents = 2;
        } else {
          maxStudents = 3;
        }
      } else {
        maxStudents = 2;
      }
    
      if (blockfloor.Students.length < maxStudents) {
        const result = await Blockfloor.updateOne(
          { BlockNo: BlockNo, FloorNo: FloorNo, RoomNo: RoomNo },
          { $push: { Students: { Name: Email } } }
        );
        // check result and return updated document
      } else {
        throw new Error('Full');
      }
    
    
    const c =await User.updateOne(
      { name: Email },
      { $set: {alloted:"1"} }
    );
    console.log(c,"Alloted")
    res.status(200).json('alloted')
  } catch (error) {
    res.status(400).json({error:error.message})

    
  }
}

const createAlloted = async (req, res) => {
  const {Email} = req.body
  console.log(req.body,"Inside");
 
  try {
    console.log("Hiiii")
    const b =await User.updateOne(
      { name: Email },
      { $set: {alloted:"1"} }
    );
    res.status(200).json(b)
    console.log("Hiiii")
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

// delete a workout
// const deleteWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const name = await Name.findOneAndDelete({_id: id})

//   if (!name) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(name)
// }

// update a workout
// const updateName = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const name = await Workout.findOneAndUpdate({_id: id}, {
//     ...req.body
//   })

//   if (!name) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(name)
// }
const createcomplain = async (req, res) => {
  console.log("Inside createcomplain")
  const {name,number,block,roomno,complain,date,compdetail} = req.body

  let emptyFields = []
  if(!name) {
    emptyFields.push('name')
  }
  if(!number) {
    emptyFields.push('number')
  }
  if(!block) {
    emptyFields.push('block')
  }
  if(!roomno) {
    emptyFields.push('roomno')
  }
  if(!complain) {
    emptyFields.push('complain')
  }
  if(!compdetail) {
    emptyFields.push('compdetail')
  }
  
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }
  try
  {
    // const exists= await Appointment.find({Slot})
    // if(exists)
    // {
    //   res.status(400).json({error: error.message})
    // }
  const comp = await Complain.create({name,number,block,roomno,complain,date,compdetail})
  res.status(200).json(comp)
  }
  catch(error){
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getBlock,
  
  // createName,
  
  // updateName
  createBlock,
  createcomplain,
  createAlloted
}