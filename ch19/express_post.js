var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
app.get('/user',function (req, res) {
   var response = '<form method="post">' +
       'First:<input type="text" name="first"/><br/>' +
       'Last:<input type="text" name="last"/><br/>' +
       '<input type="submit" value="Submit"/></form>';
    res.send(response);
});

app.post('/user',function (req, res) {
    var response = '<form method="post">' +
        'First:<input type="text" name="first"/><br/>' +
        'Last:<input type="text" name="last"/><br/>' +
        '<input type="submit" value="Submit"/></form>' +
        '<h1>Hello '+ req.body.first +'</h1>';
    res.type('html');
    res.end(response);
    console.log(req.body);
});
app.listen(8081);