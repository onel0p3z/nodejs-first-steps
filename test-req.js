var http = require('http');

var options = {
  host: '192.168.16.16'
  //host : 'www.google.com'
  , port: 80
  , path: '/Customers/?act=getinfo&user=juan'
  //, path: '/'
  , method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  if (res.statusCode != 404){
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  };
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
 req.write('data\n');
// req.write('data\n');
 req.end();
