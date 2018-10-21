const mongoose = require('mongoose');
	userModel = require('./userModel.js');

mongoose.connect('mongodb://localhost:27017/aced', { useNewUrlParser: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function(callback){
	console.log("Connection Succeeded."); /* Once the database connection has succeeded, the code in db.once is executed. */
});

var User = mongoose.model('User', userModel.userSchema);

module.exports.User = User;