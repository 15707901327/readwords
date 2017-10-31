var express = require('express');
var url = require('url');
var app = express();

app.listen(8081);
app.get('/json',function (req,res) {
   app.set('json spaces',4);
   res.json({name:"Sminthsonian",built:"1846",items:'137M',centers:['art','astrophysics','natural history','plantary','biology','apace','zoo']});
});

app.get('/error',function (req, res) {
   res.json(500,{status:false,message:"Internal Server Error"});
});

app.get('/jsonp',function (req, res) {
    app.set('jsonp callback name','cb');
    res.jsonp({name:"Smithsonian",built:'1846',items:'137M',centers:['art','astrophysics','natural history','plantary','biology','apace','zoo']})
});