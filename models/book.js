const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    name: String, quantity: String, author: String, creationDate: Date,
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;