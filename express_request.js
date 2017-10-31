var express = require('express');
var app = express();

app.listen(8081);

app.get('/',function (req, res) {
   console.log("X");
   res.send("one");
});

app.get('/user/:userid',function (req, res) {
    console.log("URL:\t " + req.originalUrl);
    console.log("Protocol:\t " + req.protocol);
    console.log("IP:\t " + req.ip);
    console.log("Path:\t " + req.path);

    res.send("User Request");
});