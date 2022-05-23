const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    book: { name: String, quantity: String },
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;