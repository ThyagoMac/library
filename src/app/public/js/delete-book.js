let booksTable = document.querySelector('#livros');
booksTable.addEventListener('click', (evento) => {
    let clickedElement = evento.target;

    if (clickedElement.dataset.type == 'remocao') {
        let bookId = clickedElement.dataset.ref;
        
        fetch(`http://localhost:3000/livros/${bookId}`, { method: 'DELETE' })
            .then(res => {

                let tr = clickedElement.closest(`#book_${bookId}`);
                tr.remove();
            })
            .catch(err => console.log(err));
    }
});