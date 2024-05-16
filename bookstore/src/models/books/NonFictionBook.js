import { Book } from './Book.js';

export class NonFictionBook extends Book {
  constructor(title, author, isbn, price, availability, genre = 'nonFiction') {
    super(title, author, isbn, price, availability);
  }
}