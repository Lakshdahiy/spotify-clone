const express = require('express');
const { createPlaylist, addSongToPlaylist, viewPlaylist, updatePlaylistName } = require('../controllers/playlistController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create playlist route
router.post('/create', createPlaylist);

// Add song to playlist route
router.post('/add-song', addSongToPlaylist);

router.get('/view',viewPlaylist)

router.put('/update/:playlistId',updatePlaylistName);
module.exports = router;

