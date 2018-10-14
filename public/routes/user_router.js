require('dotenv').config();
const express = require('express'),
      router = express.Router();
      request = require('request'); // "Request" library
      cors = require('cors');
      querystring = require('querystring');
      cookieParser = require('cookie-parser');

var access_token, refresh_token, client_id;

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// called when /user endpoint is hit
// get users saved albums and look at what genres they like
router.get('/',(req, res)=>{
  access_token = req.query.access_token;
  refresh_token = req.query.refresh_token;
  client_id = req.query.client_id;

  // console.log('here is token: ' + access_token);
  
  // var playSong = {
  //     url: 'https://api.spotify.com/v1/me/player/play',
  //     headers: {
  //       'Authorization': 'Bearer ' + access_token
  //     },
  //     json: true
  //   };

  // req.put(playSong, function(req, res){
  //   if (res){
  //     console.log('should be playing song');
  //   }
  // });


  // var flag = true;
  // var genres = new Map();

  // while (flag) {
	var offset = 0;
	var getSavedAlbums = {
		url: 'https://api.spotify.com/v1/me/albums',
		// qs: {
	//      limit: 50,
	//      offset: offset
	//  },
	headers: {
	   'Authorization': 'Bearer ' + access_token
	},
	json: true
	};

	var i;
  request.get(getSavedAlbums, (err, response, body)=>{
  	if (err) console.log(err);
  	else {
  		for(i = 0; i < body.items.length; i++){
			
			var getArtistGenre = {
			  	url: 'https://api.spotify.com/v1/artists/' + body.items[i].album.artists[0].id,
			  	// qs: {
			   //      limit: 50,
			   //      offset: offset
			   //  },
				headers: {
				   'Authorization': 'Bearer ' + access_token
				},
				json: true
			};

  			request.get(getArtistGenre, (err, response, body)=>{
  				if (err) console.log(err);
  				else {
  					console.log(body.genres);

            request.post()
  				}
  			});
  		}
  	}
  });
  // }


  res.sendFile("test.html", {"root": __dirname + '/../'});
});


module.exports = router;