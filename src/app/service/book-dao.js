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
}

module.exports = BookDao;