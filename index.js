// import
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

//route test

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

// data par defaut

const books = [];
books.push(
    {
        id: 1,
        name: 'Premier Livre',
        qty: '3'
    },
    {
        id: 2,
        name: 'Second Livre',
        qty: '1'
    }
)

// get all books
app.get('/books', (req, res) => res.json(books));

// create one book
app.post('/create/books', (req, res) => {
    const book = req.body;
    if (books.find(x => x.id === parseInt(req.body.id))) {
        res.send('Sorry this id is already exists');
        return;
    }
    books.push(book);
    res.send('Book has been created successfully');
})
//get one book by id
app.get('/book/:id', (req, res) => {
    const searchBookByid = books.find(x => x.id === parseInt(req.params.id))
    if (!searchBookByid) {
        res.send('Error : book not exists')
        return;
    }
    res.send(searchBookByid);
})
//update one book by id
app.post('/update/book/:id', (req, res) => {
    const searchBookByid = books.find(x => x.id === req.params.id)
    if (!searchBookByid) {
        res.send('Error : book not exists')
        return;
    }
    searchBookByid.id = req.body.id;
    searchBookByid.name = req.body.name;
    searchBookByid.qty = req.body.qty;
    res.send(searchBookByid);
})
//delete one book by id

app.delete('/delete/book/:id', (req, res) => {
    const searchBookByid = books.findIndex(x => x.id === parseInt(req.params.id));
    if (!books[searchBookByid]) {
        res.send('Error : book not exists')
        return;
    }
    books.splice(searchBookByid, 1);
    res.send('Book has been deleted successfully');
})
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))