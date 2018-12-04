const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    client_id: String,
    access_token: String,
    refresh_token: String,
    savedArtists: [String],
    savedGenres: {genre: String, count: Number}
});


module.exports.userSchema = userSchema;