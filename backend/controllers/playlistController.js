const Playlist = require('../models/Playlist');
const User = require('../models/user');


// Create Playlist
const createPlaylist = async (req, res) => {
  try {
    const { name } = req.body;

    // Create a new playlist
    const playlist = new Playlist({ name });

    await playlist.save(); // Save the playlist to the database

    res.status(201).json({ message: 'Playlist created successfully', playlist });
  } catch (error) {
    console.error("Error in createPlaylist:", error); // Log the error
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createPlaylist };
