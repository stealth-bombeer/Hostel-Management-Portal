const express = require('express')
const { getannouncement } = require('../controllers/notificationController')

// controller functions
const { loginUser,registerUser,signupUser} = require('../controllers/userController')

const router = express.Router()
const cloudinary=require('cloudinary').v2;


cloudinary.config({ 
    cloud_name: 'ddyiex0z8', 
    api_key: '616962189132742', 
    api_secret: 's_7ldYcshqnuvBz7PnYj8E6S9fI',
    secure: true
  });

// login route
router.post('/login', loginUser)

// signup route

router.post('/register',registerUser)
router.post('/signup',signupUser)


router.get('/notification', getannouncement)


module.exports = router