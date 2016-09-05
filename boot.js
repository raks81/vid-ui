var express = require('express');
var http = require('http');

var app = express();
app.use('/public', express.static('./app'));
app.use('/ajax', express.static('./ajax'));

http.createServer(app).listen(process.env.PORT,
    function () {
        var port = process.env.PORT || '8080';
        console.log("Express server listening on port %s", process.env.PORT);
        console.log("Open http://localhost:" + port + '/public/#/home to test');
    }
);