const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

const serverUri = 'mongodb://localhost:27017';
const dbName = 'my-store';
const colName = 'products';

function add(product, callback) {
  MongoClient.connect(serverUri, (err, client) => {
    assert.equal(null, err);
    console.log('Successfully connected to MongoDB.');

    const db = client.db(dbName);
    const col = db.collection(colName);

    col.insertOne(product, (err, result) => {
      assert.equal(null, err);
      client.close();
      callback(result.ops);
    });
  });
}

function addMany(products, callback) {
  MongoClient.connect(serverUri, (err, client) => {
    assert.equal(null, err);
    console.log('Successfully connected to MongoDB.');

    const db = client.db(dbName);
    const col = db.collection(colName);

    col.insertMany(products, (err, result) => {
      assert.equal(null, err);
      client.close();
      callback(result.ops);
    });
  });
}

function getAll(callback) {
  MongoClient.connect(serverUri, (err, client) => {
    assert.equal(null, err);
    console.log('Successfully connected to MongoDB.');

    const db = client.db(dbName);
    const col = db.collection(colName);

    col.find({}).toArray((err, products) => {
      assert.equal(null, err);
      client.close();
      callback(products);
    });
  });
}

function deleteById(id, callback) {
  MongoClient.connect(serverUri, (err, client) => {
    assert.equal(null, err);
    console.log('Successfully connected to MongoDB.');

    const db = client.db(dbName);
    const col = db.collection(colName);

    col.deleteOne({ _id: ObjectId(id) }, (err, result) => {
      assert.equal(null, err);
      client.close();
      callback(result);
    });
  });
}

function deleteAll(callback) {
  MongoClient.connect(serverUri, (err, client) => {
    assert.equal(null, err);
    console.log('Successfully connected to MongoDB.');

    const db = client.db(dbName);
    const col = db.collection(colName);

    col.deleteMany({}, (err, result) => {
      assert.equal(null, err);
      client.close();
      callback(result);
    });
  });
}

module.exports = {
  add,
  addMany,
  getAll,
  deleteById,
  deleteAll
};
