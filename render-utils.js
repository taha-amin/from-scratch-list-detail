export function renderBookCard(book) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('book-card');

    p.textContent = book.name;
    img.src = `./assets/${book.img}`;
    a.href = `./book-detail/?id=${book.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderBookDetail(book) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const titleEl = document.createElement('h2');
    const pagesEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const quoteEl = document.createElement('p');
    const authorEl = document.createElement('p');

    div.classList.add('book-detail');

    titleEl.textContent = book.title;
    titleEl.classList.add('title');

    pagesEl.textContent = `${book.pages} pages`;
    pagesEl.classList.add('pages');

    genreEl.textContent = `Genre: ${book.genre}`;
    genreEl.classList.add('genre');

    quoteEl.textContent = book.quote;
    quoteEl.classList.add('quote');

    authorEl.textContent = `Author: ${book.author}`;
    authorEl.classList.add('author');

    img.src = `../assets/${book.img}`;

    div.append(
        titleEl,
        img,
        genreEl,
        pagesEl,
        authorEl,
        quoteEl
    );

    return div;
}