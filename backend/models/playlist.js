const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }], 
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;
