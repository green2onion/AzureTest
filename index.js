const http = require('http');
const express = require('express');
const app = new express();
var path = require('path');

const port = process.env.PORT || 1337;


const server = http.createServer(app).listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("HTTP Server on http://localhost:%s", port)
    }
})


app.get('/', function (request, response) {
    response.sendFile('index.html', { root: path.join(__dirname, '../site') });
});