var express = require('express');
var url = require('url');
var app = express();
app.listen(8081);
app.get('/image',function (req, res) {
    res.sendfile('arch.jpg',{maxAge:1,root:'./views'},function (err) {
        if(err){
            console.log("Error");
        }else{
            console.log("Success");
        }
    });
});