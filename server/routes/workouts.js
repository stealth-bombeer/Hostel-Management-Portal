const express = require('express')
const {
  getNames,
  
  createName,
  
  updateName
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all workouts
router.get('/', getNames)

//GET a single workout
// router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createName)


// DELETE a workout
// router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateName)


module.exports = router