/// Include Nodejs' net module.
const net = require('net');
// The port on which the server is listening.
const port = 9090;

// Use net.createServer() in your code. This is just for illustration purpose.
// Create a new TCP server.
const server = net.createServer();
// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
server.listen(port, function() {
    console.log(`Server listening for connection requests on socket localhost:${port}`);
});

// When a client requests a connection with the server, the server creates a new
// socket dedicated to that client.
server.on('connection', function(socket) {
    console.log('A new connection has been established.');

    // Now that a TCP connection has been established, the server can send data to
    // the client by writing to its socket.
    socket.write('Hello, client.');

    // The server can also receive data from the client by reading from its socket.
    socket.on('data', function(chunk) {
        console.log(`Data received from client: ${chunk.toString()}`);
    });

    // When the client requests to end the TCP connection with the server, the server
    // ends the connection.
    socket.on('end', function() {
        console.log('Closing connection with the client');
    });

    // Don't forget to catch error, for your own sake.
    socket.on('error', function(err) {
        console.log(`Error: ${err}`);
    });
});





// var net = require('net');
 
// // Configuration parameters
// var HOST = 'localhost';
// var PORT = 38068;
 
// // Create Server instance 
// var server = net.createServer(onClientConnected);  
 
// server.listen(PORT, HOST, function() {  
//   console.log('server listening on %j', server.address());
// });
 
// function onClientConnected(sock) {  
//   var remoteAddress = sock.remoteAddress + ':' + sock.remotePort;
//   console.log('new client connected: %s', remoteAddress);
 
//   sock.on('data', function(data) {
//     console.log('%s Says: %s', remoteAddress, data);
//     sock.write(data);
//     sock.write(' exit');
//   });
//   sock.on('close',  function () {
//     console.log('connection from %s closed', remoteAddress);
//   });
//   sock.on('error', function (err) {
//     console.log('Connection %s error: %s', remoteAddress, err.message);
//   });
// };