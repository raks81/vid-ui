var express = require('express');
var http = require('http');

var app = express();
app.use('/public', express.static('./app'));
app.use('/ajax', express.static('./ajax'));
app.get('/', function (req, res) {
    res.redirect('/public');
});

var port = process.env.PORT || '8080';
http.createServer(app).listen(port,
    function () {
        console.log("Express server listening on port %s", port);
        console.log("Open http://localhost:" + port + '/public/#/home to test');
    }
);