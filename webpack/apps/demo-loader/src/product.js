export default class Product {
  constructor() {
    this.id = 2;
    this.name = 'American Tourister Backpack';
    this.price = 750;
  }

  display() {
    console.log('Product Details');
    console.log('  Id:', this.id);
    console.log('  Name:', this.name);
    console.log('  Price:', this.price);
  }
}
