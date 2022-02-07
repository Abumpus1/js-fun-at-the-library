//Ran through most of last half of these tests on librarion.js with mentor

class Librarian {
  constructor(personName, library) {
    this.name = personName;
    this.library = library;
  }
  greetPatron(personName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${personName}!`;
    }
    return `Hello, ${personName}!`;
  }
  findBook(bookTitle) {
    var shelfValues = Object.values(this.library.shelves);
    for (var i = 0; i < shelfValues.length; i++) {
      for (var j = 0; j < shelfValues[i].length; j++) {
        if (shelfValues[i][j].title === bookTitle) {
          shelfValues[i].splice(j, 1);
          return `Yes, we have ${bookTitle}`;
        }
      }
    }
    return `Sorry, we do not have ${bookTitle}`;
  }
  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  }
}

module.exports = Librarian;
