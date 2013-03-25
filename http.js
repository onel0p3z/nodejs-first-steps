// Load the http module to create an http server.
 var express = require('express')
     , app = module.exports = express();
app.set('view engine', 'html');
app.set('views', __dirname);
// Configure our HTTP server to respond with Hello World to all requests.
 app.get('/', function(req,res){
     res.render('index.html');
 });
//
//     // Listen on port 8000, IP defaults to 127.0.0.1
      app.listen(8000);
//
//     // Put a friendly message on the terminal
     console.log("Server running at http://127.0.0.1:8000/");
