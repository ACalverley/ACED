require('dotenv').config();
const express = require('express'); // Express web server framework
		cors = require('cors');
		cookieParser = require('cookie-parser');
		// Models = require('./public/models/models.js');

// ES6 usage of classes
// import {User} from '/public/JS/user.js';

var app = express();

app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.use('/playlist',require('./public/routes/playlist_router.js'));

app.use('/user', require('./public/routes/user_router.js'));

app.use('/login', require('./public/routes/login_router.js'));

app.get('/', (req, res) => {
	res.render('index.ejs', {playlist_id: req.query.playlist_id});
});

app.set("view engine", "ejs");
app.set("views", __dirname + "\\public");

console.log('Listening on 8888');
app.listen(8888);

