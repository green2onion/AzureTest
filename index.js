const http = require('http');
const express = require('express');
const app = new express();

var fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(8000);
});

app.get('/', function (request, response) {
    response.sendFile('./index.html');
})


const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);
