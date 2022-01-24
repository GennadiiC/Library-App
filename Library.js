class Library {
    constructor(){
      this.books = [];
      this.patrons = [];
      this.dailyFine = .1;
    }


    // Adds new book to the patrons array
    addBook(book) {
      this.books.push(book);
    }

    // Adds new patron to the patrons array
    addPatron(patron) {
      this.patrons.push(patron);
    }

    // Charges patrons fine for overdue books
    chargeFines() {
      const now = new Date();

      const latePatrons = this.patrons.filter(patron =>
        (patron.currentBook !== null && patron.currentBook.dueDate < now)
      );

      for (let patron of latePatrons) {
        const dateDiff = new Date(now - patron.currentBook.dueDate);
        const daysLate = dateDiff.getDate();
        patron.balance === 0 ? patron.balance += this.dailyFine * daysLate : null;
      }
    }

}
