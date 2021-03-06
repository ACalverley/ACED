/**
 * This is the router file that allows the system to
 * create a playlsit and add tracks to that playlist
 * for the web app to play
 */
require('dotenv').config();
const express = require('express'),
    router = express.Router();
    request = require('request'); // "Request" library
    cors = require('cors');
    querystring = require('querystring');
    cookieParser = require('cookie-parser');


var playlistID;

// var playlistSchema = new mongoose.Schema({
//     client_id: String,
//     // this will store the playlists URI
//     createdPlaylist: String,
// });

router.use(function timeLog(req, res, next) {
    //   console.log('Time: ', Date.now());
    next();
});

// creates a playlist for the user
router.get('/create', (req, res) => {
    trackURIs = req.query.tracks;

    console.log("inside playlist_router");
    var createPlaylist = {
        url: 'https://api.spotify.com/v1/users/' + req.query.user_id + '/playlists',
        headers: {
            'Authorization': 'Bearer ' + req.query.access_token,
            'Content-Type': 'application/json'
        },
        body: {
            'name': 'Sunshine and Rainbows',
            'public': true,
            'description': 'A new ACED playlist'
        },
        json: true,
    };

    request.post(createPlaylist, (err, response, body) => {
        if (err) console.log(err);
        else {
            playlistID = body.id;

            //add songs to playlist
            var addSong = {
                url: 'https://api.spotify.com/v1/playlists/' + playlistID + '/tracks',
                headers: {
                    'Authorization': 'Bearer ' + req.query.access_token,
                    'Content-Type': 'application/json'
                },
                body: {
                    'uris': trackURIs
                },
                json: true,
            };

            request.post(addSong, (err, addSongRes) => {
                if (err) console.log(err);
                else {
                    console.log("Redirecting back to user router");

                    res.redirect("/?" + 
                        querystring.stringify({
                            playlist_id: playlistID
                        }));
                }
            });
        }
    });

    // res.sendFile("test.html", { "root": __dirname + '/../' });
});


module.exports = router;