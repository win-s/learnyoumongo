var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

var firstName = process.argv[2] === 'test' ? 'test firstName':process.argv[2] ;
var lastName = process.argv[2] === 'test' ? 'test LastName':process.argv[3];

// console.log(firstName);
// console.log(lastName);
// console.log(process.argv[2]);

mongo.connect(url,function(err,db){
    if(err)throw err;

    db
        .collection('docs')
        .insert({
            'firstName':firstName,
            'lastName':lastName
        },function(err,data){
            if(err)throw err;
            console.log( JSON.stringify(data['ops'][0]) );
            // console.log( data );
            db.close();
        });
});
