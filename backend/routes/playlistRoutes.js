const express =require('express');

const {createPlaylist, addSongToPlaylist} = require('../controllers/playlistController');

const router = express.Router();

router.post('/create',createPlaylist);

router.post('/add-song',addSongToPlaylist);

module.exports = router;

