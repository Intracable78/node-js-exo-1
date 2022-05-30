const fastify = require('fastify')({ logger: true })
const Book = require('../models/book');

module.exports = {

    get: async (req, res) => {
        const name = req.params.name;
        try {
            const searchBook = await Book.find(({ name: { $regex: name } }));
            res.send(searchBook)
        } catch (err) {
            res.send('book not found')
        }
    },


}