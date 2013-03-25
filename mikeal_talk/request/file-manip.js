var request = require('request')
    , fs = require('fs')
    , http = require('http')
    , path = require('path')
    , doodle = path.join(__dirname, 'doodle.jpg')
    , doodle2 = path.join(__dirname, 'doodle2.jpg');

var s = http.createServer(function(req,res){
    console.log(req.method, req.headers);
    if (req.method == 'PUT'){
        var f = fs.createWriteStream(doodle2);
	req.pipe(f);
	f.on('close', function(){
	    res.writeHead(201);
	    res.end();
	    s.close();
	});
    };
})
.listen(3000, function(){
    fs.createReadStream(doodle).pipe(request.put('http://localhost:3000'))
});
