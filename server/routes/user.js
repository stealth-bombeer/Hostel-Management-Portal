const express = require('express')

const {getallBlocks} = require('../controllers/adminController')
const {getBlock,createBlock}=require("../controllers/workoutController");
// controller functions
const { loginUser,registerUser,signupUser,forgotPassword,ResetPassword,feesUpload} = require('../controllers/userController')

const router = express.Router()
const cloudinary=require('cloudinary').v2;
const{createcomplain}=require("../controllers/workoutController");
const{getannouncement}=require('../controllers/notificationController');
const requireAuth = require("../middleware/requireAuth");
cloudinary.config({ 
    cloud_name: 'ddyiex0z8', 
    api_key: '616962189132742', 
    api_secret: 's_7ldYcshqnuvBz7PnYj8E6S9fI',
    secure: true
  });

// login route
router.post('/login', loginUser)
router.post('/forgotPassword',forgotPassword)
router.put('/resetPassword/:newToken',ResetPassword)
router.post('/register',registerUser)
router.post('/signup',signupUser)

// signup route
router.use(requireAuth);

router.get('/ad', getallBlocks)
router.post("/complainclerk",createcomplain)
router.get('/notification', getannouncement)
router.get("/home", getBlock);
router.put("/home", createBlock);
router.post('/feesupload',feesUpload)


module.exports = router;