var express = require('express')
    , app = express();

app.use(express.bodyParser());
app.get('/', function(req, res){
    console.log('json.stringify: '+JSON.stringify(req.query));
    console.log('ip '+req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress);
    res.json({page:'GET /'} );
});
app.get('/:obj',function(req, res){
    res.json({'params':req.params.obj,'param':req.param('obj')});
    console.log("req.param('obj'): "+req.param('obj'));
    console.log('req.params.obj: '+req.params.obj);
});

app.get('/customers/:user', function(req, res){
    res.json(req.param);
    console.log('query: '+JSON.stringify(req.query));
    console.log('param: '+req.param);
    console.log('params: '+req.params);
    console.log('body: '+req.body);
});
app.post('/', function(req, res){
    res.json(req.body);
    console.log(req.body);
});

app.listen(3000);
