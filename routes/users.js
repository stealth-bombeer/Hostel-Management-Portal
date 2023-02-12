const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utilities/catchAsync');
const users=require('../controllers/users');

router.get('/register', users.renderRegister);

router.post('/register', catchAsync(users.register));

router.get('/login', users.renderLogin);

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login);

router.get('/logout', users.logout);

module.exports = router;




//  *************** OR ****************
/*   some routes are having same path so we can group them together like this
where methods(eg. get ,post, put, etc. is replaced by keyword route, i.e, router.route)    see below

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout', users.logout)

module.exports = router; */