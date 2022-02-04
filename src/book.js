function createTitle(bookTitle) {
  return title = `The ${bookTitle}`;
}

function buildMainCharacter(name, age, pronouns) {
  var mainChar = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return mainChar;
}

function saveReview(reviewDesc, reviews) {
  if (reviews.includes(reviewDesc) === false) {
    return reviews.push(reviewDesc);
  }
}

function calculatePageCount(bookTitle) {
  return bookPageCount = bookTitle.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    genre: genre,
    pageCount: calculatePageCount(title)
  }
  return book;
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
