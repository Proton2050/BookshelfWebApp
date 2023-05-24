class Bookshelf {
    constructor(collectionName){
        this.collectionName = collectionName;
        this.books = [];
    }
    // Shelve book method
    addBook(book){
        this.books.push(book);
    }
    // Render method (should insert into DOM)
    render(){
        const collection = document.querySelector('.books');
        const header = document.createElement('div');
        header.className = 'header';
        collection.append(header);

        const shelf = document.createElement('div')
        shelf.className = 'shelf';
        collection.append(shelf);

        const title = document.querySelector('#collectionName');
        title.innerText = this.collectionName;

        this.books.forEach((book) => {
            shelf.append(book.render());
        });
    }
}