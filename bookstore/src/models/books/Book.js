//individual book
export class Book { 
  constructor(title, author, isbn, price, availability) {
    this._title = title;
    this._author = author;
    this._isbn = isbn;
    this._price = price;
    this._availability = availability;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    this._author = newAuthor;
  }

  get isbn() {
    return this._isbn;
  }

  set isbn(newIsbn) {
    this._isbn = newIsbn;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get availability() {
    return this._availability;
  }

  set availability(newAvailability) {
    this._availability = newAvailability;
  }

  isAvailable() {
    return this._availability;
  }
};