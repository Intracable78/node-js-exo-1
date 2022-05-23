
const fastify = require('fastify')({ logger: true })
const Book = require('../models/book');

//route test

module.exports = {

    // get all books
    fetch: async (req, res) => {
        console.log('here')
        const allBooks = await Book.find();
        res.send(allBooks);
    },

    // create one book
    post: async (req, res) => {
        const name = req.body.name;
        const quantity = req.body.quantity;

        const createBook = new Book({ name: name, quantity: quantity })
        await createBook.save();
    },

    //get one book by id
    get: async (req, res) => {
        const bookId = req.params.id;
        try {
            const getBookById = await Book.findById(bookId)
            res.send(getBookById);
        } catch (err) {
            res.send('book not found')
        }
    },

    /*get : ('/search/book/:name', async (req, res) => {
        console.log("here")
        const name = req.params.name
        try {
            const searchBook = await Book.find(({ name: { $regex: name } }));
            res.send(searchBook)
        } catch (err) {
            res.send('book not found')
        }
    }) */

    //update one book by idÒ
    patch: async (req, res) => {
        const bookId = req.params.id;
        const name = req.body.name;
        const quantity = req.body.quantity;
        try {
            const book = await Book.findById(bookId)
            book.name = name;
            book.quantity = quantity;
            await book.save();
            res.send(book);
        } catch (err) {
            res.send('book not found')
        }
    },
    //delete one book by id

    delete: async (req, res) => {
        const bookId = req.params.id;
        try {
            const book = await Book.delete(bookId)
            await book.save();
            res.send('Book has been deleted');
        } catch (err) {
            res.send('book not found')
        }
    }

}