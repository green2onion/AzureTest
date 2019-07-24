const express = require("express");
const app = new express();

var url = 'localhost:';
const port = process.env.PORT || 1337;

app.listen(port, function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("HTTP Server on %s:%s", url, port)
    }
});

app.use(express.static("public"));


