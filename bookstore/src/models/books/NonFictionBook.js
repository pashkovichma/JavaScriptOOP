import { Book } from './Book.js';

export class NonFictionBook extends Book {
  constructor(title, author, isbn, price, availability, genre = 'nonFiction') {
    super(title, author, isbn, price, availability);
    this._genre = genre;
  }

  get genre() {
    return this._genre;
  }

  set genre(newGenre) {
    this._genre = newGenre;
  }
}