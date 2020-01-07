var express=require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';

const dbName = 'adminDb';

router.post('/post', (req, res)=>{

const client = new MongoClient(url);

client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
//   console.log(req.body);
  const db = client.db(dbName);
  var a=req.body

  db.collection('youths').insertOne({a:1}, function(err, r) {
      console.log("its working");
      console.log(a);
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);

      client.close();
    });
  });

});
module.exports = router;