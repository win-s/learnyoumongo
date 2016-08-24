var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var size = process.argv[2] || 'S';
mongo.connect(url,function(err,db){
    if(err)throw err;
    var prices = db.collection('prices');
    prices.aggregate([
        {
            $match:{
                size:size
            }
        },
        {
            $group: {
                _id:"$size",
                price:{
                    $avg:"$price"
                }
            }
        }
    ]).toArray(function(err,results){
        if(err)throw err;
        console.log(results[0].price.toFixed(2));
        db.close();
    });

    // prices.find({
    //
    // }).toArray(function(err,results){
    //     if(err)throw err;
    //     console.log(results);
    //     db.close();
    // });
});
