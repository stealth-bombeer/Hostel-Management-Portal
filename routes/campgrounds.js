const express= require('express');
const router=express.Router();
const catchAsync= require('../utilities/catchAsync');   //..
 //.. to go back in our yelpcamp folder and then to get inside utilities folder.
const Campground= require('../models/campground');    //..
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgrounds= require('../controllers/campgrounds');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.get('/', catchAsync(campgrounds.index));
 
router.post('/',isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground)   // image becoz in our new campground form name id has value image             
);

router.get('/new', isLoggedIn ,campgrounds.renderNewForm);
 
router.get('/:id',catchAsync(campgrounds.showCampground));

router.get('/:id/edit', isLoggedIn ,isAuthor, catchAsync(campgrounds.renderEditForm));

router.put('/:id', isLoggedIn ,isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground));

router.delete('/:id', isLoggedIn ,isAuthor, catchAsync(campgrounds.deleteCampground));


 

 

 


module.exports=router;




//  *************** OR ****************
/*   some routes are having same path so we can group them together like this
where methods(eg. get ,post, put, etc. is replaced by keyword route, i.e, router.route)    see below

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))

router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))



module.exports = router;  */