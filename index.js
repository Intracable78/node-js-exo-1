// import
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

const mongoose = require('mongoose');
const client = mongoose.connect('mongodb://localhost:27017/databaseExo');
const Book = mongoose.model('books', { name: String, quantity: String });

//route test

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});


// get all books
app.get('/books', async (req, res) => {
    const allBooks = await Book.find();
    res.send(allBooks);

})

// create one book
app.post('/create/book', async (req, res) => {
    const name = req.body.name;
    const quantity = req.body.quantity;

    const createBook = new Book({ name: name, quantity: quantity })
    await createBook.save();
})

//get one book by id
app.get('/book/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const getBookById = await Book.findById(bookId)
        res.send(getBookById);
    } catch (err) {
        res.send('book not found')
    }
})

app.get('/search/book/:name', async (req, res) => {
    console.log("here")
    const name = req.params.name
    try {
        const searchBook = await Book.find(({ name: { $regex: name } }));
        res.send(searchBook)
    } catch (err) {
        res.send('book not found')
    }
})

//update one book by idÒ
app.patch('/update/book/:id', async (req, res) => {
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
})
//delete one book by id

app.delete('/delete/book/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await Book.delete(bookId)
        await book.save();
        res.send('Book has been deleted');
    } catch (err) {
        res.send('book not found')
    }
})
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))