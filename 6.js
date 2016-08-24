var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/'+process.argv[2];
// var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url,function(err,db){
    if(err)throw err;

    db.collection('users').update({
        username:'tinatime'
    },{
        $set:{
            age:40
        }
    },function(err,result){
        if(err)throw err;
        // console.log(result);
        db.close();
    });
});
