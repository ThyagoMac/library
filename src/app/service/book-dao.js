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
}

module.exports = BookDao;