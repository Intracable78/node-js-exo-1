// import
/*const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())*/

const fastify = require('fastify');
const app = fastify();
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
//const contentRangeHook = require('./hooks/contentRangeHook');
try {
    mongoose.connect('mongodb://localhost:27017/databaseExo');
} catch (e) {
    console.error(e);
}
//app.addHook('preHandler', contentRangeHook);
bookRoutes(app);
app.listen(3000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running on ${address}`);
});