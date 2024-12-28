const express = require('express');
const {createUser, loginUser, myProfile, logoutUser} = require('../controllers/userController');
const isAuth = require('../middleware/authMiddleware');


const router = express.Router();

//routes to create a new user 

router.post('/register',createUser);

router.post('/login',loginUser);

//router.get('/me',isAuth,myProfile)
router.get('/me',isAuth,myProfile)
router.get('/logout',isAuth,logoutUser)

module.exports = router ;

