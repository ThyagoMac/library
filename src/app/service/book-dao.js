class BookDao {

    constructor(db){
        this._db = db;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                function(error, res) {
                    if (error) {
                        return reject('Não foi possivel listar os libros');
                    }

                    return resolve(res);
                }
            )
        })
    }

    add(book) {
        return new Promise((resolve, reject) =>{
            this._db.run(
                `INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values (?,?,?)`
                , [
                    book.titulo,
                    book.preco,
                    book.descricao
                ],
                function(err) {
                    if(err){
                        console.log(err);
                        return reject('Não foi possivel adicionar o livro!');
                    }
                    resolve();
                }
            )
        });
    }

    update(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                book.titulo,
                book.preco,
                book.descricao,
                book.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) =>{
            this._db.get(
                `
                    DELETE
                    FROM livros
                    WHERE id = ?

                `,
                [id],
                (err) => {
                    if(err) {
                        return reject('Não foi possível remover o livro!');
                    }

                    return resolve();
                }
            );
        });
    }

    getId(id) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (err, book) => {
                    if(err) {
                        return reject('Não foi possível encontrar o livro!');
                    }
                    return resolve(book);
                }
            );
        });
    }


}

module.exports = BookDao;