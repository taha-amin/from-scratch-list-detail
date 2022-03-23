// import functions and grab DOM elements
import { getBooks } from './fetch-utils.js';
import { renderBookCard } from './render-utils.js';

const bookListContainer = document.getElementById('book-list-container');

//on load
//fetch all books
//render and append all book cards to the container

window.addEventListener('load', async () => {
    //send request for all dogs
      // wait for response
    const books = await getBooks();

    //once response shows up, render and append
    for (let book of books) {
        const bookEl = renderBookCard(book);

        bookListContainer.append(bookEl);
    }
});