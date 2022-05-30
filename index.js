// define base of project

const fastify = require('fastify');
const app = fastify();
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const bookSearchRoute = require('./routes/bookSearchRoute');
//connect to database
try {
    mongoose.connect('mongodb://localhost:27017/databaseExo');
} catch (e) {
    console.error(e);
}
bookRoutes(app);
bookSearchRoute(app);

app.listen(3000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running on ${address}`);
});