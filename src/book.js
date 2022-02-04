function createTitle(bookTitle) {
  return title = `The ${bookTitle}`
}

function buildMainCharacter(name1, age1, pronouns1) {
  return {
    name: name1,
    age: age1,
    pronouns: pronouns1
  }
}

function saveReview(reviewDesc, reviews) {
  if (reviews.includes(reviewDesc) === false) {
    return reviews.push(reviewDesc)
  }
}

function calculatePageCount(bookTitle) {
  return bookPageCount = bookTitle.length * 20
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    genre: genre,
    pageCount: calculatePageCount(title)
  }
  return book
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}
