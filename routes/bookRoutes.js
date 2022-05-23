module.exports = (app) => {
    // create a note
    app.get('/api/book', (request, reply) => { });

    // get the list of notes
    app.post('/api/book', (request, reply) => { });

    // get a single note
    app.get('/api/book/:id', (request, reply) => { });

    // update a note
    app.get('/api/book/:name', (request, reply) => { });

    // delete a note
    app.patch('/api/book/:id', (request, reply) => { });

    app.delete('/api/book/:id', (request, reply) => { });
};
