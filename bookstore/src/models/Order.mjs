export class Order {
  constructor(user, books) {
      this.user = user;
      this.books = books;
      this.totalPrice = this.calculateTotalPrice();
  }

  //calculate user total price
  calculateTotalPrice() {
      let totalPrice = 0;
      for (let book of this.books) {
          totalPrice += book.price;
      }
      return totalPrice;
  }
}