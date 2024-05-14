//Part 1: Class Design

class Book {
  constructor(title, author, isbn, price, availability) {
    this.title = title; 
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  }
};

class User {
  constructor(name, email, userID) {
    this.name = name;
    this.email = email;
    this.userID = userID;
  }
}

class Cart {
  constructor() {
    this.books = [];
  }

  addBooks(book) {
    this.books.push(book);
  }

  removeBook(isbn) {
    this.addBooks = this.books.filter(book => book.isbn !== isbn);
  }

  calculateTotalPrice() {
    let totalPrice = 0;

    for (let book of this.books) {
      totalPrice += book.price;
    }
    return totalPrice;
  }
}

class Order {
  constructor(user, books) {
      this.user = user;
      this.books = books;
      this.totalPrice = this.calculateTotalPrice();
  }

  calculateTotalPrice() {
      let totalPrice = 0;
      for (let book of this.books) {
          totalPrice += book.price;
      }
      return totalPrice;
  }
}