const Name = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all Names
const getNames = async (req, res) => {
  const id = req.id

  const names = await Name.find({id}).sort({createdAt: -1})

  res.status(200).json(names)
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
const createName = async (req, res) => {
  const {Name1,Name2,Name3,RoomNo} = req.body

  let emptyFields = []

  if(!Name1) {
    emptyFields.push('Name1')
  }
  if(!Name2) {
    emptyFields.push('Name2')
  }
  if(!Name3) {
    emptyFields.push('Name3')
  }
  if(!RoomNo) {
    emptyFields.push('Name3')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

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
    const name = await Name.create({Name1,Name2,Name3,RoomNo})
    res.status(200).json(name)
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
const updateName = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const name = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!name) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(name)
}


module.exports = {
  getNames,
  
  createName,
  
  updateName
}