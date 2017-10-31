/**
 * 一个Express服务器上的重定向
 * */
var express = require('express');
var url = require('url');
var app = express();
app.listen(8081);
app.get('/baidu',function (req, res) {
    res.redirect('http://baidu.com');
});
app.get('/first',function (req, res) {
   res.redirect('/second');
});
app.get('/second',function (req, res) {
   res.send("Response from Second");
});

app.get('/level/A',function (req, res) {
    res.redirect("/level/B");
});
app.get('/level/B',function (req, res) {
    res.send("Response from level B");
});