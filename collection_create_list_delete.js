var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function (err, db) {
   var newDB = db.db("newDB");
   //collectionNames 2.0中没有该方法
   console.log(newDB.collectionNames)
   // newDB.collectionNames(function (err, collectionNames) {
   //     console.log("Initial collections:");
   //     console.log(collectionNames);
   //
   //     newDB.createCollection("newCollection",function (err, collection) {
   //         newDB.collectionNames(function (err, collectionNames) {
   //             console.log("Collections after creation:");
   //             console.log(collectionNames);
   //
   //             newDB.dropCollection("newCollection",function (err, results) {
   //                 newDB.collectionNames(function (err, collectionNames) {
   //                     console.log("Collections after deletionName:");
   //                     console.log(collectionNames);
   //
   //                     db.close();
   //                 })
   //             })
   //         })
   //     })
   // })
});