const request = require('request');

var getVideoAnalysis = {
	url: 'https://api.kairos.com/v2/media',
	headers: {
		app_id:"4b181116",
		app_key:"df92294e67014291bfa4192cfa9abe79"
	},
	qs: {
		source: 'http://media.kairos.com/test.flv'
	}
};

request.post(getVideoAnalysis, (error, res, body) => {
	if(error) console.log(error);
	else console.log(body);
});

// console.log('Listening on 8888');
// app.listen(8888);


var kairosemotionapilib = require('./kairosemotionapilib');

var callback = function (e,r,c) {
	if (e != null) {
		console.log(e)
	}
	if (r != null) {
		console.log(r)
	}	
}

var controller = kairosemotionapilib.EmotionAnalysisController;
controller.createMedia('http://media.kairos.com/test.flv', callback);