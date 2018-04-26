const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const serverUri = 'mongodb://localhost:27017';
const dbName = 'my-store';
const colName = 'products';

MongoClient.connect(serverUri, (err, client) => {
  assert.equal(err, null);
  console.log('Connected to database successfully!');

  const db = client.db(dbName);
  const col = db.collection(colName);

  col.find({}).toArray((err, products) => {
    assert.equal(err, null);

    console.log('Products retrieved successfully!');
    console.log('products:', products);
    client.close();
  });
});
