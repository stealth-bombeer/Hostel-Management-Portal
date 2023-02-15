const express = require('express')

// controller functions
const { loginAdmin, signupAdmin } = require('../controllers/adminController')
// const AdminHome = require('../models/announcementSchema')
const { createannouncement,getcomplain } = require('../controllers/notificationController')
const { getacceptedstuds } = require('../controllers/adminController')
const { getrejectedstuds } = require('../controllers/rejectedController')
const router = express.Router()

// login route
router.post('/adminlogin', loginAdmin)

// signup route
router.post('/adminsignup', signupAdmin)

router.post('/ad', createannouncement)
router.get('/comp', getcomplain)
//to display accepted
router.get('/acceptedstuds', getacceptedstuds)
router.get('/rejectedstuds', getrejectedstuds)

module.exports = router