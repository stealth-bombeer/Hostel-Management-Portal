const Blockfloor = require('../models/blockSchema')
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
  // const BlockNo = req.query.BlockNo
  // const FloorNo = req.query.FloorNo
  // console.log(req.headers.BlockNo);
  const id=req.id

  const names = await Blockfloor.find({id}).sort({createdAt: 1})

  res.status(200).json(names)
  // console.log(req.headers.BlockNo);
  // const { BlockNo } = req.headers;
  // const rank = await blockfloor.findOne({ BlockNo })
  // console.log(rank);
  // return res.json({ rank });
}


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

  // let emptyFields = []

  // if(!Name1) {
  //   emptyFields.push('Name1')
  // }
  // if(!Name2) {
  //   emptyFields.push('Name2')
  // }
  // if(!Name3) {
  //   emptyFields.push('Name3')
  // }
  // if(!RoomNo) {
  //   emptyFields.push('Name3')
  // }
  // if(emptyFields.length > 0) {
  //   return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  // }

  // add doc to db
  try {
    
    // const exists1 = await this.findOne({Name1})

    // if (exists1) {
    //   throw Error('Name already in use')
    // }
    // const exists2 = await this.findOne({Name2})
  
    // if (exists2) {
    //   throw Error('Name already in use')
    // }
    // const exists3 = await this.findOne({Name3})
  
    // if (exists3) {
    //   throw Error('Name already in use')
    // }
    // const exists4 = await this.findOne({RoomNo})
  
    // if (exists4) {
    //   throw Error('Room already in use')
    // }
    // const user_id = req.user._id
    // const b = await Blockfloor.create({BlockNo,FloorNo})
    // res.status(200).json(b)
    const b =await Blockfloor.updateOne(
      { BlockNo: BlockNo, FloorNo: FloorNo, RoomNo : RoomNo },
      { $push: { Students: { Name: Email } } }
    );
    res.status(200).json(b)
  } catch (error) {
    if(error.code===11000)
   {
     console.log("Hi")
     res.status(400).json({error});
   }
   else{
     console.log("vuv")
    res.status(400).json({error: error.message})
   }

    
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
  const {name,number,block,roomno,complain} = req.body

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
  const comp = await Complain.create({name,number,block,roomno,complain})
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
  createcomplain
}