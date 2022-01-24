class Patron {
    constructor(name, email){
      this.name = name;
      this.email = email;
      this.currentBook = null;
      this.balance = 0;
    }

    // Method for patron's checking out new book from the library
    checkOut(book) {
      this.currentBook = book;
      book.out = true;
      book.patron = this;
    }

    // Method for patron's returning book to the library
    returnBook(book) {
      this.currentBook = null;
      book.out = false;
      book.patron = null;
    }
}
