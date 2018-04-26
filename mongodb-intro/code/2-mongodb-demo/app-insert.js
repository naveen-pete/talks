const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const product = {
  name: 'Hero Hawk Nuage 27T',
  description:
    'Comes in 85% assambled state. Allen-Key & Spanner provided for DIY installation. Installation video present in the Image tab',
  price: 4750,
  isAvailable: true
};

const serverUri = 'mongodb://localhost:27017';
const dbName = 'my-store';
const colName = 'products';

MongoClient.connect(serverUri, (err, client) => {
  assert.equal(err, null);
  console.log('Connected to database successfully!');

  const db = client.db(dbName);
  const col = db.collection(colName);

  col.insertOne(product, (err, result) => {
    assert.equal(err, null);

    console.log('Product added successfully!');
    console.log('Result:', result);
    client.close();
  });
});
