var fs = require('fs')
    , path = require('path')
    , http = require('http')
    , socketio = require('socket.io')
    , sockets = [];

var index = fs.readFileSync(path.join(__dirname, 'index.html'));

var s = http.createServer(function(req,res){
    if(req.url === '/'){
        res.statusCode = 200;
	res.setHeader('content-type','text/html');
	res.end(index);
    };
});

var io = socketio.listen(s);
s.listen(3000);

io.sockets.on('connection', function(socket){
    sockets.push(socket);
});

process.stdin.resume();
process.stdin.on('data', function(chunk){
    sockets.forEach(function(socket){
        socket.emit('data', chunk.toString());
    });
});
