var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/test",function (err,db) {
    var adminDB = db.admin();
    adminDB.serverStatus(function (err, status) {
        console.log(status);
        db.close();
    })
});