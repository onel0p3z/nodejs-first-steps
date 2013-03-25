var http = require('http');
var url = require('url');
http.createServer(function(req, res){
	var page = url.parse(req.url).pathname;
	//console.log('Incoming request for: ' + page + '\n');
	//console.log('process.cwd(): ' + process.cwd()) + '\n';
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('This is Node.js\n');
}).listen(80, '192.168.16.11');
console.log('Server running at 192.168.16.11 on port 80');
