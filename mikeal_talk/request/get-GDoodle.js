var request = require('request')
    , fs = require('fs')
    , path = require('path')
    , doodle = 'http://www.google.com/logos/2013/womens_day_2013-1055007-hp.jpg'
    , imgpath = path.join(__dirname, 'doodle.jpg');

request(doodle).pipe(fs.createWriteStream(imgpath));
