
const bookControllers = require('./../controllers/bookControllers');

module.exports = (app) => {
    // create a note
    app.get('/books', bookControllers.fetch);

    // get the list of notes
    app.post('/book', (request, reply) => { bookControllers.post });

    // get a single note
    app.get('/book/:id', (request, reply) => { bookControllers.get });

    // update a note
    //  app.get('/api/book/:name', (request, reply) => { });

    // delete a note
    app.patch('/book/:id', (request, reply) => { bookControllers.patch });

    app.delete('/book/:id', (request, reply) => { bookControllers.delete });
};
