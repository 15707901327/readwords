var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/",function (err, db) {
   var myDB = db.db("astro");
   myDB.collection("nebulae",function (err, nebulae) {
       nebulae.findOne({type:"supernova"},function (err, item) {
           console.log("Before Save:");
           console.log(item);

           // item.info = "Some New Info";
           // nebulae.save(item,{w:1},function (err, results) {
           //     nebulae.findOne({_id:item._id},function (err, saveItem) {
           //         console.log("After Save:");
           //         console.log(saveItem);
           //         db.close();
           //     })
           // })
       })
   });
});