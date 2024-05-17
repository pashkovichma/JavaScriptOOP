import { User } from './User.js';
import { Book } from './books/Book.js';

export class Order {
    constructor(user, books) {
        if (user instanceof User) {
            this._user = user;
        } else {
            throw new Error(`${user} is not an instance of User`);
        }

        if (Array.isArray(books) && books.every(book => book instanceof Book)) {
            this._books = books;
        } else {
            throw new Error('Every book should be an instance of Book');
        }

        this._totalPrice = this.calculateTotalPrice();
    }

  //calculate user total price
    calculateTotalPrice() {
        let totalPrice = 0;
        for (let book of this._books) {
            totalPrice += book.price;
        }
        return totalPrice;
    }

    get user() {
        return this._user;
    }

    set user(newUser) {
        if (newUser instanceof User) {
            this._user = newUser;
        } else {
            throw new Error('${newUser} is not an instance of User');
        }
    }

    get books() {
        return this._books;
    }

    set books(newBooks) {
        if (Array.isArray(newBooks) && newBooks.every(book => book instanceof Book)) {
            this._books = newBooks;
            this._totalPrice = this.calculateTotalPrice(); // Update total price
        } else {
            throw new Error('Books must be an array of Book instances');
        }
    }

    get totalPrice() {
        return this._totalPrice;
    }
}