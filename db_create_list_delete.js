var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost/",function(error,db){
    var adminDB = db.admin();
    adminDB.listDatabases(function (err,database) {
        console.log("Before Add Database List: ");
        console.log(database);
    });

    var newDB = db.db("newDB");
    newDB.createCollection("newCollection",function (err, collection) {
        if(!err){
            console.log("New Databases and Collection Created");
            adminDB.listDatabases(function (err,database) {
                console.log("After Add Database List: ");
                console.log(database);
                db.db("newDB").dropDatabase(function (err, results) {
                    if(!err){
                        console.log("Database dropped");
                        setTimeout(function(){
                            adminDB.listDatabases(function (err,results) {
                                var found = false;
                                for(var i = 0; i < results.databases.length;i++){
                                    if(results.databases[i].name == "newDB"){
                                        found = true;
                                    }
                                }

                                if(!found){
                                    console.log("After Delete Database List:");
                                    console.log(results);
                                }

                                db.close();
                            });
                        },1500)
                    }
                })
            });
        }
    })
});