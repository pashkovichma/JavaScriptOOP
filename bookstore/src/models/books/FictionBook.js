import { Book } from './Book.js';

export class FictionBook extends Book {
  constructor(title, author, isbn, price, availability, genre = 'fiction') {
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