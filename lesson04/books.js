function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function Library() {
  this.books = [];
}

Library.prototype.addBook = function(book) {
  this.books.push(book);
}

Library.prototype.getBooksByYear = function (year) {
  return this.books.filter(b => b.year === year);
}

const library = new Library();

library.addBook(new Book("Animal Farm", "George Orwell", 1945));
library.addBook(new Book("Some Book", "Someone", 1960));

console.log(library.getBooksByYear(1945));
