const product = require('./product-data');

const displayProduct = () => {
  console.log('Product Details');
  console.log('  Id:', product.id);
  console.log('  Name:', product.name);
  console.log('  Price:', product.price);
};

module.exports = displayProduct;
