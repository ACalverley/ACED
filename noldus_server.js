require('dotenv').config();
const convert = require('xml-js');
const express = require('express'); // Express web server framework
const xmlparse = require('express-xml-bodyparser');
var options = {compact: true, ignoreComment: true, spaces: 4};
var faceReaderURL = 'http://localhost:9090/';
var serverPort = 'http://localhost:3005/';

var app = express();
var port = 3005;

app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.use(express.static(__dirname + '/public'));
app.use(xmlparse());

app.get('/connect', (req, res) => {
	console.log('Attempting to start FaceReader instance');
	
	start_analyzing = {
		'_declaration':{
			'_attributes':{
				'version': '1.0',
				'encoding': 'utf-8'
			}
		},
		'ActionMessage':{
			'_attributes': {
				'xmlns:xsi': serverPort,
				'xmlns:xsd': serverPort
			},
			'Id':{
				'_text': "Test_01"
			},
			'ActionType':{
				'_text': 'FaceReader_Start_Analzying'
			}
		}
	};

	xml_start_analyzing = convert.json2xml(start_analyzing, options);

	options = {
		url: faceReaderURL,
    	body : xml_start_analyzing,
    	headers: {'Content-Type': 'text/xml'}
	};

	app.post(options, (req, res) => {
		console.log(req.body);
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});


app.get('*', (req, res) => {
	res.send("hello!!!");
});
