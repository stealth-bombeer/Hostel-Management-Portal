const express = require('express')

// controller functions
const { loginAdmin, signupAdmin,getallBlocks } = require('../controllers/adminController')
// const AdminHome = require('../models/announcementSchema')
const { createannouncement,getcomplain } = require('../controllers/notificationController')

const router = express.Router()

// login route
router.post('/adminlogin', loginAdmin)

// signup route
router.post('/adminsignup', signupAdmin)
router.get('/ad', getallBlocks)
router.post('/ann', createannouncement)
router.get('/comp', getcomplain)

module.exports = router