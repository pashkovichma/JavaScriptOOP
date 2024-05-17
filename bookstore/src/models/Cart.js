import { Book } from './books/Book.js';

export class Cart {
  constructor() {
    this._books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this._books.push(book);
    } else {
      throw new Error(`${book} is not an instance of Book`);
    }
  }

  removeBook(book) {
    const index = this._books.indexOf(book);
    if (index > -1) {
      this._books.splice(index, 1);
    }
  }

  calculateTotalPrice() {
    let totalPrice = 0;

    for (let book of this.books) {
      totalPrice += book.price;
    }
    return totalPrice;
  }

  get books() {
    return this._books;
  }

  set books(newBooks) {
    if (Array.isArray(newBooks) && newBooks.every(book => book instanceof Book)) {
        this._books = newBooks;
    } else {
        throw new Error('Every book should be an instance of Book');
    }
  }
}