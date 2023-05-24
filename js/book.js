class Book {
    constructor(author,language,subject,title, comments='comments'){
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
        this.comments = comments
        this.isFavorite = false;
    }
    // Create and return book element which contains the Title and Author
    render(){
        const book = document.createElement('section');
        book.className = 'book';
        const title = document.createElement('h5');
        title.className = 'title';
        title.innerText = this.title;
        const author = document.createElement('h6');
        author.className = 'author';
        author.innerText = this.author;
        const star = document.createElement('span');
        star.classList.add('material-symbols-outlined','star');
        star.innerText = 'star';

        book.append(star, title,author);

        return book;
    }
}