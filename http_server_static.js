var fs = require('fs');
var http = require('http');
var url = require('url');
var Root_DTR = "html/";
http.createServer(function (req, res) {
   var urlObj = url.parse(req.url, true ,false);
   fs.readFile(Root_DTR + urlObj.pathname,function (err, data) {
       if(err){
           res.writeHead(404);
           res.end(JSON.stringify(err));
           return;
       }
       res.writeHead(200);
       res.end(data);
   })
}).listen(8080);