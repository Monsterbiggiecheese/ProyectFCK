const searchInput = document.getElementById('searchInput');
const books = document.querySelectorAll('main a');
const bookTitles = Array.from(books).map(book => book.textContent.toLowerCase());

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    books.forEach(function (book, index) {
        const title = bookTitles[index];
        if (title.includes(searchTerm)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});
