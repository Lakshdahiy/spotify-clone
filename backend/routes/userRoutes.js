const express = require('express');
const {createUser, loginUser} = require('../controllers/userController');

const router = express.Router();

//routes to create a new user 

router.post('/register',createUser);

router.post('/login',loginUser)

module.exports = router ;