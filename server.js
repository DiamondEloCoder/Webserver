 var net = require('net');

 var server = net.createServer(function(c) {

 	console.log('Server Connected');

 	c.on('end', function() {
 		console.log('Server Disconnected');
 	});

 	c.write('Hello');
 	c.pipe(c);
 });

 server.listen(8300, function(){
 	console.log('Connection Bound')
 });

