const mongoose = require('mongoose')
const Announcement = require('../models/announcementModel')


// get all workouts
const getannouncement = async (req, res) => {
  //const _id = req._id

  const ann = await Announcement.find({}).sort({createdAt: -1})

  res.status(200).json(ann)
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
const createannouncement = async (req, res) => {
  const {announcement} = req.body

  let emptyFields = []

  if(!announcement) {
    emptyFields.push('announcement')
  }
//   if(!load) {
//     emptyFields.push('load')
//   }
//   if(!reps) {
//     emptyFields.push('reps')
//   }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    // const user_id = req.user._id
    const ann = await Announcement.create({announcement})
    res.status(200).json(ann)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout
// const deleteWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findOneAndDelete({_id: id})

//   if (!workout) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(workout)
// }

// // update a workout
// const updateWorkout = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findOneAndUpdate({_id: id}, {
//     ...req.body
//   })

//   if (!workout) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(workout)
// }


module.exports = {
    getannouncement,
 createannouncement
}