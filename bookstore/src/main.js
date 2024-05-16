import { Book } from './models/Book.mjs';
import { User } from './models/User.mjs';
import { Cart } from './models/Cart.mjs';
import { Order } from './models/Order.mjs';

const book1 = new Book("Name book 1", "Author book 1", "ISBN book 1", 1, true);
const book2 = new Book("Name book 2", "Author book 2", "ISBN book 2", 2, true);
const book3 = new Book("Name book 3", "Author book 3", "ISBN book 3", 3, true);

const user1 = new User("Name user 1", "email user 1", "user 1 ID");
const user2 = new User("Name user 2", "email user 2", "user 2 ID");
const user3 = new User("Name user 3", "email user 3", "user 3 ID");

const cart1 = new Cart();
cart1.addBook(book1);
cart1.addBook(book2);
cart1.addBook(book3);

const cart2 = new Cart();
cart2.addBook(book3);

const order1 = new Order(user1, cart1.books);
const order2 = new Order(user2, cart2.books); 


//Part 3: Demonstration
console.log("Order1 User1:");
console.log("Books:");
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