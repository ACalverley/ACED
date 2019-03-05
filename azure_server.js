require('dotenv').config();
const express = require('express'); // Express web server framework
		bodyParser = require('body-parser');
		cors = require('cors');
		cookieParser = require('cookie-parser');
		queryString = require('query-string');
		request = require('request-promise'); // "Request" library
		base64Img = require('base64-img');
        atob = require('atob');
        pd = require('paralleldots');
        fs = require('fs');

var app = express();
var url = "https://canadacentral.api.cognitive.microsoft.com/face/v1.0/detect?";
pd.apiKey = process.env.PARALLEL_DOTS_API_KEY;
const filePath = './public/savedImg/tempFace.png';

app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.use(express.static(__dirname + '/public'))
   // parse application/x-www-form-urlencoded
   // .use(bodyParser.raw({type: "application/octet-stream", limit: '50mb'}))
   .use(bodyParser.urlencoded({   limit: '50mb', extended: true }))
	// parse application/json
   .use(bodyParser.json({type: "application/octet-stream", limit: '50mb'}))
   .use(cors())
   .use(cookieParser());

app.use('/playlist',require('./public/routes/playlist_router.js'));

app.use('/user', require('./public/routes/user_router.js'));

app.use('/login', require('./public/routes/login_router.js'));

// receiving the POST request from index.html
app.post('/webcam', (req, res) => {

	console.log("made it to the server");
    
 //    img = req.body.img;
	// data = img.replace(/^data:image\/\w+;base64,/, "");
 //    buf = new Buffer.from(data, 'base64');

 //    fs.writeFile(filePath, buf, (err, data) => {
 //        if (err) console.log(err);
 //        else {
 //            console.log("successfully written to file!");
 //            pd.facialEmotion(filePath, type='local')
 //                .then((response) => {
 //                    console.log(response);
 //                })
 //                .catch((error) => {
 //                    console.log(error);
 //                });
 //        }
 //    });


	// var authOptions = {
 //            url: url + 
 //            	queryString.stringify({
	// 	            returnFaceId: true,
	// 	            returnFaceLandmarks: true,
	// 	            returnFaceAttributes: "age,gender,headPose,smile,emotion"
 //        		}),
 //            headers: {
 //                'Content-Type': 'application/octet-stream',
 //                'Ocp-Apim-Subscription-Key': '4c04468a743c4afb8784828df37ecf38'
 //            },
 //            body: {
 //            	img
 //            },
 //            json: true
 //        };

 //    request.post(authOptions, function(error, response, body) {
 //    	if (error){
 //    		console.log(error);
 //    	}
 //    	else {
 //    		console.log("success");
 //    		console.log(body);
	// 		// var emotions = body.faceAttributes.emotion[0];
			
	// 		// for (var i = 0; i < emotions.length; i++){
	// 		// 	console.log(emotions[i]);
	// 		// }
 //    	}
	// });

	res.send("successful blob receival!");
});

app.set("view engine", "ejs");
app.set("views", __dirname + "\\public");

console.log('Listening on 8888');
app.listen(8888);
