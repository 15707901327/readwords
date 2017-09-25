var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/testDB",function (err,db) {
    if(err){
        console.log("connection Failed Via Connectiion String...");
    }else{
        console.log("Connected Via Connection String...");
        db.logout(function (err, result) {
            if(!err){
                console.log("Logged out Via Connection String...")
            }
            db.close();
            console.log("Connection close....")
        });
    }
});