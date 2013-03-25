var http = require('http'),
    util = require('util');
var options = { 
    host: 'api.twitter.com',
    port: 80,
    path: '/1/statuses/user_timeline/nino0057.json'
};
var chunks = [], total = 0;

http.get(options, function(res) {
     console.log('Got response ' + res.statusCode);
     })
     .on('data', function(chunk) {
         chunks.push(chunk);
	 total+= chunk.length;
     })
     .on('error', function(e) {
         console.log('Got Error ' + e.message);
     })
     .on('end', function() {
         var buf = new Buffer(total)
	 cur = 0;
	 for (var i = 0, l = chunks.length; i < l; i++) {
	     chunks[i].copy(buf, cur, 0);
	     cur += chunks[i].length;
	 }
	 console.log(util.inspect(buf.toString(), true, 5));
     });
