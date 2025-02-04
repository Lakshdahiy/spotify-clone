const express = require('express');
const isAuth = require('../middleware/authMiddleware');
const uploadFile = require('../middleware/multer');
const {createAlbum,getAllAlbum, addSong, addThumbnail, getAllSongsByAlbum, getAllSongs} = require('../controllers/songController.js');



const router = express.Router()

//upload song route
router.post('/album/new',isAuth,uploadFile,createAlbum)
router.get('/album/all',isAuth,getAllAlbum)
router.post('/new',isAuth,uploadFile,addSong)
router.post('/:id',isAuth,uploadFile,addThumbnail)
router.get('/all',isAuth,getAllSongs)
router.get('/album/:id',isAuth,getAllSongsByAlbum)
module.exports = router