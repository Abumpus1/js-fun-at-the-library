function shelfBook(bookTitle, bookShelves) {
  if (bookShelves.length < 3) {
    bookShelves.unshift(bookTitle);
  }
}

function unshelfBook(bookTitle, bookShelves) {
  for (var i = 0; i < bookShelves.length; i++) {
    if (bookShelves[i].title === bookTitle) {
       bookShelves.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.join(", ");
}

function searchShelf(shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(bookTitle) === true) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
