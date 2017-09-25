var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;
var client = new MongoClient(new Server('localhost',27017,{
        socketOptions:{connectionTimeoutMS:500},
        poolSize:5,
        auto_reconnect:500
    },
    {
        numberOfRetries:3,
        retryMilliSeconds:500
    }));

console.log(client);
/*client.open(function (err, client) {
    if(err){
        console.log(err);
        console.log("Connection Failed Via Client Object");
    }
});*/