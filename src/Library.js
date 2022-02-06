function createLibrary (libraryName) {
  library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library
}
function addBook(library, book) {
  library.shelves[book.genre].push(book)
}
/* need to access genre of book to make function add to shelf dynamically,
need to make book.genre see that library.shelves has shelf with same name?
*/
// function checkoutBook(library, bookTitle, genre) {
//   if (library.shelves[genre].includes(bookTitle) === true) {
//     library.shelves[genre].splice(0, 1)
//   }
//   return `You have now checked out ${bookTitle} from the ${library}`
// } // use include???????




function checkoutBook(library, bookTitle, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === bookTitle) {
      library.shelves[genre].splice(i, 1)
      return `You have now checked out ${bookTitle} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
