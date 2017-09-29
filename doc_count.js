var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/",function (err, db) {
   var myDB = db.db("words");
   myDB.collection("word_stats",countItems);

   setTimeout(function () {
       db.close();
   },3000);
});

function countItems(err, words) {
    words.count({first:{$in:['a','b','c']}},function(err, count) {
        console.log("Words starting with a,b or c:"+count);
    });

    // words.find({size:{$gt:12}},function (err, cursor) {
    //     displayWords("Words longer than 12 characters:",cursor);
    // });

    // words.find({size:{$mod:[2,0]}}, function (err, cursor) {
    //     displayWords("Words with even Lengths:",cursor);
    // });

    // words.find({letters:{$size:12}}, function (err, cursor) {
    //     displayWords("Words with 12 Distinct characters:",cursor);
    // });

    // words.find({$and:[{first:{$in:['a','e','i','o','u']}},{last:{$in:['a','e','i','o','u']}}]}, function (err, cursor) {
    //     displayWords("Words that start and end width a vowels:",cursor);
    // });

    // words.find({"stats.vowels":{$gt:5}}, function (err, cursor) {
    //     displayWords("Words containing 7 or more vowels:",cursor);
    // });

    // words.find({letters:{$all:['a','e','i','o','u']}}, function (err, cursor) {
    //     displayWords("Words with all 5 vowels:",cursor);
    // });

    // words.find({otherChars:{$exists:true}}, function (err, cursor) {
    //     displayWords("Words with non-alphabet characters:",cursor);
    // });

    // words.find({charsets:{$elemMatch:{$and:[{type:'other'},{chars:{$size:2}}]}}}, function (err, cursor) {
    //     displayWords("Words with 2 non-alphabet characters:",cursor);
    // });
}