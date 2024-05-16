import { Book } from './Book.js';

export class FictionBook extends Book {
  constructor(title, author, isbn, price, availability, genre = 'fiction') {
    super(title, author, isbn, price, availability);
  }
}