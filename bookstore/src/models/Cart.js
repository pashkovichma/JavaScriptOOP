//simulate a shopping cart
export class Cart {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

  calculateTotalPrice() {
    let totalPrice = 0;

    for (let book of this.books) {
      totalPrice += book.price;
    }
    return totalPrice;
  }
}