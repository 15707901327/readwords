var express = require('express');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session:expressSession});

var mongoose = require('mongoose');
require('./models/users_model');
var conn = mongoose.connect('mongodb://localhost/myapp');
var app = express();

/*
* 设置模板引擎
* * 设置模板扩展名
* * 设置模板文件存放位置
* * 定义默认的模板引擎*/
app.engine('.html',require('ejs').__express);
app.set('views',__dirname + '/views');
app.set('view engine','html');

//设置中间件bodyParser，处理在请求正文中的POST参数
app.use(bodyParser());
//请求读取cookie并在响应中设置cookie
app.use(cookieParser());
app.use(expressSession({
    secret:'SECRET',
    cookie:{maxAge:60*60*1000}
}));

require('./routes')(app);

app.listen(8081);