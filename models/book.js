const mongoose = require('mongoose');
const { Schema } = mongoose;

//define model

const bookSchema = new Schema({
    name: String, quantity: String, author: String, creationDate: Date,
});

//create model for database

const Book = mongoose.model('books', bookSchema);

module.exports = Book;