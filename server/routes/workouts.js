const express = require("express");
const {
  getNames,

  createName,

  updateName,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all workouts
router.get("/home", getNames);

//GET a single workout
// router.get('/:id', getWorkout)

// POST a new workout
router.post("/home", createName);

// DELETE a workout
// router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch("/home:id", updateName);

module.exports = router;
