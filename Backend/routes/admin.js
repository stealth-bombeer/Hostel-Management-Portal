const express = require('express')

// controller functions
const { loginAdmin, signupAdmin } = require('../controllers/adminController')
// const AdminHome = require('../models/announcementSchema')
const { createannouncement } = require('../controllers/notificationController')

const router = express.Router()

// login route
router.post('/adminlogin', loginAdmin)

// signup route
router.post('/adminsignup', signupAdmin)

router.post('/ad', createannouncement)

module.exports = router