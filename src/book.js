function createTitle(bookTitle) {
  return `The ${bookTitle}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(reviewDesc, reviews) {
  if (reviews.includes(reviewDesc) === false) {
    return reviews.push(reviewDesc);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title: title,
    mainCharacter: mainCharacter,
    genre: genre,
    pageCount: calculatePageCount(title)
  }
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
