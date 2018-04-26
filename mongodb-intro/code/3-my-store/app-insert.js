const Products = require('./products');

const product = {
  name: 'Data Structures and Algorithms ',
  description: 'Book description',
  isAvailable: true,
  price: 500
};

Products.add(product, result => {
  console.log('  Product added successfully!');
  console.log('  result:', result);
});
