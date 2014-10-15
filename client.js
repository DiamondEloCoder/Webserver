var net = require('net');
var host = process.argv[2];

var client = net.connect({port:host}, function() {

	client.write('Sup!');
});

client.on('end', function() {

	console.log('Client Disconnected');
});