import { getBook } from '../fetch-utils.js';
import { renderBookDetail } from '../render-utils.js';

const bookDetailContainer = document.getElementById('book-detail-container');

// on load
// get id from URL
// use the id to fetch the book
// render and append this book's details to the container

window.addEventListener('load', async () => {
    //figure out which book id we want to load
    const data = new URLSearchParams(window.location.search);
    const bookId = data.get('id');

    //send request for particular book
    const book = await getBook(bookId);

    //wait for response
    const bookEl = renderBookDetail(book);

    //once response shows up, render and append
    bookDetailContainer.append(bookEl);
});