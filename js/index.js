const bookShelf = new Bookshelf("Classics Collection");

const renderAllBooks = () => {
    bookData.map((book) => {
    const newBook = new Book(book.author, book.language, book.subject, book.title);
    bookShelf.addBook(newBook);
  });
  
  bookShelf.render();
}

renderAllBooks();
// Create Search bar
// Create DOM elements
const searchInput = document.querySelector('.searchInput')
const searchButton = document.querySelector('.searchButton')
searchButton.addEventListener('click', () => {
  renderAllBooks(filterBooks(bookData));
  console.log(searchInput.value);
})

// Filter Books
const filterBooks = (books) => {
  books.filter(book => {
    book.name.toLowerCase().includes(searchInput.value.toLowerCase())
  })
};

// Create favorite function
const favorite = () => {
  const star = document.querySelector('.star')
  star.addEventListener('click', () => {
    
  })
}