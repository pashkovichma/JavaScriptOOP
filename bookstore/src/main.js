import { Book } from './models/books/Book.js';
import { FictionBook } from './models/books/FictionBook.js';
import { NonFictionBook } from './models/books/NonFictionBook.js';
import { User } from './models/User.js';
import { Cart } from './models/Cart.js';
import { Order } from './models/Order.js';

const book1 = new Book("Name book1", "Author book1", "ISBN book1", 1, true);
const book2 = new Book("Name book2", "Author book2", "ISBN book2", 2, true);
const book3 = new Book("Name book3", "Author book3", "ISBN book3", 3, true);

const fictionBook = new FictionBook("Name fictionBook1", "Author fictionBook1", "ISBN fictionBook1", 11, true);
const nonFictionBook = new NonFictionBook("Name fictionBook2", "Author fictionBook2", "ISBN fictionBook2", 22, true);

const user1 = new User("Name user1", "email user1");
const user2 = new User("Name user2", "email user2");
const user3 = new User("Name user3", "email user3");

const cart1 = new Cart();
cart1.addBook(book1);
cart1.addBook(book2);
cart1.addBook(book3);
cart1.addBook(fictionBook);
cart1.addBook(nonFictionBook);

const cart2 = new Cart();
cart2.addBook(book3);
cart2.addBook(nonFictionBook);

const order1 = new Order(user1, cart1.books);
const order2 = new Order(user2, cart2.books); 

//Demonstration

console.log("Order1 User1:");
console.log("Books:");
//console.log(order1);
order1.books.forEach(book => {
    console.log(`Book: ${book.title} Price: ${book.price}`);
});
console.log(`Total Price: ${order1.totalPrice}`);

console.log("Order2 User2 :");
console.log("Books:");
order2.books.forEach(book => {
  console.log(`Book: ${book.title} Price: ${book.price}`);
});
console.log(`Total Price: ${order2.totalPrice}`);

console.log(user1.name, user1.email, user1.userID);

user1.name = "Name user11";
user1.email = "email user11";
try {
  user1.userID = 9;
} catch (e) {
  throw new Error("You can't change userId. It is generated automatically and doesn't have a setter.");
} finally {
  console.log(user1.name, user1.email, user1.userID);
}

