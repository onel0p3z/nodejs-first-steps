var http = require('http');
var url = require('url');
var fs = require('fs');

var newPostFormHTML = fs.readFileSync('views/post/new.html');

function renderNewPostForm(req, res){
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(newPostFormHTML);
}
function render404(req, res){
	res.writeHead(404);
        res.end('<h1>404 Not Found</h1>');
}
function RenderIndex(req, res){
    res.writeHead(200, {'Content-Type': 'text/json; charset=utf-8'});
    res.end("{'scr':'hello world'}");
}
http.createServer(function(req, res){
  var IndexRegex = new RegExp('^/?$');
	var newPostFormRegex = new RegExp('^/posts/new/?$');
	var pathname  = url.parse(req.url).pathname;
	if (newPostFormRegex.test(pathname)){
	        renderNewPostForm(req, res);

	}else{
		//render404(req,res);
    RenderIndex(req, res);
	}
	
}).listen(80, '192.168.16.11');
console.log('Server running at 192.168.16.11 on port 80');
