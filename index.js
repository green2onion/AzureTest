const http = require('http');
const express = require('express');
const app = new express();


app.get('/', function (request, response) {
    response.sendFile('index.html');
})


const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);
