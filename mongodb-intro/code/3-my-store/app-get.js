const Products = require('./products');

console.log('List of Products');
console.log('----------------');
Products.getAll(products => {
  if (products.length === 0) {
    console.log('No products in the collection.');
    return;
  }

  products.forEach((p, i) => {
    console.log(
      `  ${i + 1} -> Id: ${p._id}, Name: ${p.name}, Price: ${p.price}`
    );
  });
});
