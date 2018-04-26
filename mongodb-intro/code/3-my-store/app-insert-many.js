const Products = require('./products');

const products = [
  {
    name: 'Premsons 608 Four Bearing Fidget Spinner',
    description: 'Perfect toy for fidgeters. Updated',
    isAvailable: true,
    price: 150
  },
  {
    name: 'Bahubali DVD',
    description:
      'Raised in a remote tribal village, Shivudu grows up a carefree young man who relentlessly pursues his heart"s desire.',
    isAvailable: false,
    price: 299
  }
];

Products.addMany(products, result => {
  console.log('  Products added successfully!');
  console.log('  result:', result);
});
