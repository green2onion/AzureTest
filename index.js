const http = require('http');
const express = require('express');
const app = new express();
var path = require('path');
var url = 'placeholder';
const port = process.env.PORT || 1337;



/*const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end();
}).listen(port, function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("HTTP Server on %s:%s", http, port)
    }
});  I actually don't need any of this stuff?? */

app.get('/', function (request, response) {
    response.sendFile('index.html', { root: __dirname });
}).listen(port, function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("HTTP Server on %s:%s", url, port)
    }
});




