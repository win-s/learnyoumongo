var mongo = require('mongodb').MongoClient;
var db = process.argv[2];
var collection = process.argv[3];
var id = process.argv[4];
var url = 'mongodb://localhost:27017/'+db;
console.log( db+'|'+collection+'|'+id );
// console.log( ObjectId(id) );
mongo.connect(url,function(err,db){
    if(err){
        console.log("connect:error");
        throw err;
    }

    db
        .collection(collection)
        .remove({
            _id:id
        },{},function(err,result){
            if(err)throw err;
            console.log(result);
            db.close();
        });
});
