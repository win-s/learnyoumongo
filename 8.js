var mongo = require('mongodb').MongoClient;
var age = parseInt( process.argv[2] );
var url = 'mongodb://localhost:27017/learnyoumongo';

// console.log(age);

mongo.connect(url,function(err,db){
    if(err)throw err;

    // db.collection('parrots').count({
    //     'age':{ $gt:age}
    // },function(err,count){
    //     console.log(count);
    //     db.close();
    // });
    db.collection('parrots').find({
        'age':{$gt:age}
    }).count(function(err,count){
        if(err)throw err;

        console.log(count);
        db.close();
    });
});
