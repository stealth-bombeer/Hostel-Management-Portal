const express = require('express')

// controller functions
const { loginClerk, signupClerk } = require('../controllers/clerkController')
// const AdminHome = require('../models/announcementSchema')
const{getcomplain}=require('../controllers/notificationController')
const router = express.Router()
const requireAuth3 = require("../middleware/requireAuth3");
// login route
router.post('/clerklogin', loginClerk)

// signup route
router.post('/clerksignup', signupClerk)
router.use(requireAuth3)
router.get('/comp', getcomplain)



module.exports = router