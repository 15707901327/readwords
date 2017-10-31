var express = require('express');
var jade = require('jade');
var ejs = require('ejs');
var app = express();
app.set('views','./views');
app.set('view engine','jade');
app.engine('jade',jade.__express);
app.engine('html',ejs.renderFile);
app.listen(8081);
app.locals.uname = "Brad";

app.get('/jade',function (req, res) {
    res.render('user_jade');
});
app.get('/ejs',function (req, res) {
    app.render('user_ejs.html',function (err, renderedData) {
        res.send(renderedData);
    })
});