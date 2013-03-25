var request = require('request')
    , server = '192.168.16.16'
    , obj = 'customers'
    , method = 'getkwords'
    , user = 1
    ;


request('http://' + server + '/' + obj + '?act=' + method + '&user=' + user, function(error,response,body){
    if(!error && response.statusCode == 200){
        console.log(body);
    };
});
