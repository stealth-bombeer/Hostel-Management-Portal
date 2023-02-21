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
  let cap;
  if(req.RoomNo==="402")
  {
    cap=4;
    console.log("doen")
  }
  else{
    cap=2;
    console.log("done")
    console.log(cap)
  }

  const names = await Blockfloor.find({ id, [`Students.${cap}`]: { $exists: false } }).sort({ createdAt: 1 });

  res.status(200).json(names);
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

    if (blockfloor.Students.length < 3) {
      const result = await Blockfloor.updateOne(
        { BlockNo: BlockNo, FloorNo: FloorNo, RoomNo: RoomNo },
        { $push: { Students: { Name: Email } } }
      );
      // check result and return updated document
    } else {
      throw new Error('less than 3');
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