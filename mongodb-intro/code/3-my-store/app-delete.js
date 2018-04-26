const Products = require('./products');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'id', alias: 'i', type: String },
  { name: 'all', alias: 'a', type: Boolean }
];

const options = commandLineArgs(optionDefinitions);

console.log('Command Line Options:', options);

if (options.all) {
  Products.deleteAll(result => {
    console.log('All products deleted successfully.');
  });
} else {
  const id = options.id;
  Products.deleteById(id, result => {
    console.log(`Product deleted successfully. (id: ${id})`);
  });
}
