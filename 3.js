var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt( process.argv[2] );
// var age = process.argv[2];
// console.log(age);

mongo.connect( url, function(err,db){
    if(err)throw err;

    var parrots = db.collection('parrots');
    parrots.find({
        age: {$gt:age}
    }).toArray(function(err,documents){
        // documents.forEach(function(value){
        //     console.log(value);
        // });
        if(err)throw err;
        console.log(documents);
        db.close();
    });

});
