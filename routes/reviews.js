const express= require('express');
const router=express.Router({mergeParams:true});
const catchAsync= require('../utilities/catchAsync');     //..
const ExpressError= require('../utilities/ExpressError');   //.. to go back in our yelpcamp folder and then to get inside utilities folder.
const review= require('../controllers/reviews');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');


router.post('/', isLoggedIn, validateReview,catchAsync(review.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(review.deleteReview));

module.exports= router;