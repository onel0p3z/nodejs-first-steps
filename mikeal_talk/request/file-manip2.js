var request = require('request')
    , fs = require('fs')
    , http = require('http')
    , path = require('path')
    , doodleurl = 'http://www.google.com/intl/en_com/images/srpr/logo3w.png'
    , doodle3 = path.join(__dirname, 'doodle3.png');

var s = http.createServer(function(req,res){
    console.log(req.method, req.headers);
    if (req.method == 'PUT'){
        var f = fs.createWriteStream(doodle3);
	req.pipe(f);
	f.on('close', function(){
	    res.writeHead(201);
	    res.end();
	    s.close();
	});
    };
})
.listen(3000, function(){
    request.get(doodleurl).pipe(request.put('http://localhost:3000'))
});

