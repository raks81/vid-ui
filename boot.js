var express = require('express');
var http = require('http');

var app = express();
app.use('/', express.static('./'));

http.createServer(app).listen(process.env.PORT,
    function () {
        console.log("Express server listening on port %s", process.env.PORT);
    }
);