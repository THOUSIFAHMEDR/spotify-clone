const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    playlists: Array,
    likedSongs: Array,
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)