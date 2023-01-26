const express = require('express')
const { getannouncement } = require('../controllers/notificationController')

// controller functions
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.get('/notification', getannouncement)


module.exports = router