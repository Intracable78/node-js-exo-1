
const bookControllers = require('./../controllers/bookControllers');

module.exports = (app) => {
    //  get all books
    app.get('/books', bookControllers.fetch);

    // create a book
    app.post('/book', bookControllers.create);

    // get book by id
    app.get('/book/:id', bookControllers.get);

    // get book by name
    //  app.get('book/name/:name', bookControllers.get);

    // update book by id
    app.patch('/book/:id', bookControllers.patch);

    // delete book by id
    app.delete('/book/:id', bookControllers.delete);
}; 
