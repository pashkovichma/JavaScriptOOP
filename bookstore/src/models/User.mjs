//users of the bookstore
export class User {
  static counterUserId = 1; //Static counter to generate unique userID

  constructor(name, email) {
    this._name = name;
    this._email = email;
    this._userID = User.counterUserId++; //generate unique userID
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set email(newEmail) {
    this._email = newEmail;
  }

  get email() {
    return this._email;
  }

  get userID() {
    return this._userID;
  }
}