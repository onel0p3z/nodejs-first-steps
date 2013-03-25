var http = require('http')
    , request = require('request');

http.createServer(function(req,res){
    req.pipe(request('http://www.google.com'+req.url)).pipe(res);
}).listen(3000);
