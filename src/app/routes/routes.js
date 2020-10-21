const BookDao = require('../service/book-dao.js');
const db = require('../../config/database.js');


module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Main  test</h1>
            </body> 
        </html>`);
    });

    app.get('/livros', function(req, resp) {
        
        const bookdao = new BookDao(db);
        bookdao.getAll().then(books => resp.marko(
            require('../views/books/list/show.marko'),
            {
                books: books
            }
        )).catch (error => console.log(error));
        
    });

    app.get('/livros/form', function(req, resp){
        resp.marko(require('../views/books/form/form.marko'), { book: {} });
    });

    app.post('/livros', function(req, resp){
        console.log(req.body);
        const bookdao = new BookDao(db);
        bookdao.add(req.body).then(resp.redirect('/livros'))
        .catch (error => console.log(error));
    });

    app.put('/livros', function(req, resp){
        console.log(req.body);
        const bookdao = new BookDao(db);
        bookdao.update(req.body).then(resp.redirect('/livros'))
        .catch (error => console.log(error));
    });

    app.delete('/livros/:id', function(req, resp) {
        const id = req.params.id;

        const bookDao = new BookDao(db);
        bookDao.delete(id).then(() => resp.status(200).end())
            .catch(error => console.log(error));
    });

    app.get('/livros/form/:id', function(req, resp) {
        const id = req.params.id;
        const bookdao = new BookDao(db);
    
        bookdao.getId(id)
            .then(book => 
                resp.marko(
                    require('../views/books/form/form.marko'),
                    { book: book } //talvez seja livro: book
                )
            )
            .catch(error => console.log(error));
    });
};
