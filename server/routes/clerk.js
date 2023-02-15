const express = require('express')

// controller functions
const { loginClerk, signupClerk } = require('../controllers/clerkController')
// const AdminHome = require('../models/announcementSchema')

const router = express.Router()

// login route
router.post('/clerklogin', loginClerk)

// signup route
router.post('/clerksignup', signupClerk)



module.exports = router