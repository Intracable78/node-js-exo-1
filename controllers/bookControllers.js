
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
    create: async (req, res) => {
        const name = req.body.name;
        const quantity = req.body.quantity;
        const newBook = await Book.create({ name: name, quantity: quantity });
        newBook.save();
        res.code(201).send(newBook);
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

    /*get: async (req, res) => {
        console.log("here")
        const name = req.params.name
        try {
            const searchBook = await Book.find(({ name: { $regex: name } }));
            res.send(searchBook)
        } catch (err) {
            res.send('book not found')
        }
    },*/

    //update one book by idÒ
    patch: async (req, res) => {
        try {
            const bookId = req.params.id;
            const updates = req.body;
            await Book.findByIdAndUpdate(bookId, updates);
            const BookToUpdate = await Book.findById(bookId);
            res.code(200).send({ data: BookToUpdate });
        } catch (err) {
            res.send('book not found')
        }
    },
    //delete one book by id

    delete: async (req, res) => {
        const bookId = req.params.id;
        try {
            const book = await Book.findByIdAndRemove(bookId)
            await book.save();
            res.send('Book has been deleted');
        } catch (err) {
            res.send('book not found')
        }
    }

}