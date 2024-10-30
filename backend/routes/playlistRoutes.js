const express =require('express');

const {createPlaylist} = require('../controllers/playlistController');

const router = express.Router();

router.post('/create',createPlaylist);

module.exports = router;

