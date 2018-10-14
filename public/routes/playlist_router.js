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

router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now());
  next();
});

router.get('/create', (req, res) => {
    var createPlaylist = {
        url: 'https://api.spotify.com/v1/users/' + user_id + '/playlists',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
        },
        body: {
            'name': 'Sunshine and Rainbows',
            'public': false,
            'description': 'A new ACED playlist'
        },
        json: true,
    };
    
    request.post(createPlaylist, (err, response, body)=>{
        if (err) console.log(err);
        else{
            console.log(body.uri);
        }
    });
});

