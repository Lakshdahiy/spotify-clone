const mongoose = require('mongoose');
const Playlist = require('../models/Playlist');
const User = require('../models/user');
const Song = require('../models/song');

// Create Playlist
const createPlaylist = async (req, res) => {
  try {
    const { name, userId } = req.body;
     const user =await User.findById(userId);
     if(!user){
      return
      res.status(400).json({message:'User not found'})
     }

    // Create a new playlist
    const playlist = new Playlist({ name, user: userId });

    await playlist.save(); // Save the playlist to the database

    res.status(201).json({ message: 'Playlist created successfully', playlist });
  } catch (error) {
    console.error("Error in createPlaylist:", error); // Log the error
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a Song to Playlist
const addSongToPlaylist = async (req, res) => {
  try {
    const { title, artist, duration, playlistId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(playlistId)) {
      return res.status(400).json({ message: 'Invalid playlist ID format' })
      
      
      
    }


    // Find the playlist
    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }

    // Create a new song
    const song = new Song({ title, artist, duration });
    await song.save();

    // Add the song ID to the playlist's songs array
    playlist.songs.push(song._id);
    await playlist.save();

    res.status(200).json({ message: "Song added to the playlist", playlist });
  } catch (error) {
    console.log("Error in addSongToPlaylist:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createPlaylist, addSongToPlaylist };
