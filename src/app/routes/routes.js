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
        /* 
        bookdao.getAll(function(error, res) {
            resp.marko(
                require('../views/books/list/show.marko'),
                {
                    books: res
                }
            );
        }) */
        
    });

};
