var MongoClient = require('mongodb').MongoClient;
function addObject(collection,object) {
    collection.insert(object,function (err, result) {
        if(!err){
            console.log("Inserted:");
            console.log(result);
        }
    })
}
MongoClient.connect("mongodb://localhost/",function (err, db) {
   var myDB = db.db("astro");
   myDB.dropCollection("nebulae",function (err, result) {
       console.log(result);
   });
   myDB.createCollection("nebulae",function (err, nebulae) {
       addObject(nebulae,{ngc:"NGC 7293",name:"Helix",type:"planetary",localhost:"Aquila"});
       addObject(nebulae,{ngc:"NGC 6543",name:"Cat's Eye",type:"planetary",localhost:"Draco"});
       addObject(nebulae,{ngc:"NGC 1952",name:"Crab",type:"planetary",localhost:"Taurus"});
   });
   setTimeout(function () {
       db.close();
   },3000);
});
