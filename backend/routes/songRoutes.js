const express = require('express');
const isAuth = require('../middleware/authMiddleware');
const uploadFile = require('../middleware/multer');
const createAlbum = require('../controllers/songController');
const getAllAlbum = require('../controllers/songController');


const router = express.Router()

//upload song route
router.post('/album/new',isAuth,uploadFile,createAlbum)
router.get("/album/all",isAuth,getAllAlbum)
module.exports = router