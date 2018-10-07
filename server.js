require('dotenv').config();
var express = require('express'); // Express web server framework
// var session = require('express-session');
var request = require('request'); // "Request" library
var cors = require('cors');
var cookieParser = require('cookie-parser');

// ES6 usage of classes
// import {User} from '/public/JS/user.js';

var app = express();

app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.use('/user', require('./public/routes/user_router.js'));

app.use('/login', require('./public/routes/login_router.js'));  


console.log('Listening on 8888');
app.listen(8888);

