var net = require('net');
const convert = require('xml-js');

const port = 9090;
// var faceReaderAddress = 'http://localhost:9090/';
var options = {compact: true, ignoreComment: true, spaces: 4};
var client = new net.Socket();

client.connect(port, '127.0.0.1', function() {
	console.log('Connection established');
	console.log('Attempting to start FaceReader instance');
	
	start_analyzing = {
		'_declaration':{
			'_attributes':{
				'version': '1.0',
				'encoding': 'utf-8'
			}
		},
		'ActionMessage':{
			// '_attributes': {
			// 	'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
			// 	'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema'
			// },
			'Id':{
				'_text': "Test_01"
			},
			'ActionType':{
				'_text': 'FaceReader_Start_Analyzing'
			}
		}
	};

	xml_start_analyzing = convert.json2xml(start_analyzing, options);
	console.log("XML ActionMessage being sent:");
	console.log(xml_start_analyzing);

	client.write(xml_start_analyzing);
	console.log("Sent!");
});

client.on('error', function(error){
	console.log(error);
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	// client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});