// import
/*const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())*/

const fastify = require('fastify')({ logger: true })

const mongoose = require('mongoose');
const client = mongoose.connect('mongodb://localhost:27017/databaseExo');
fastify.get('/', async () => { return { msg: "Hello World" } });

const PORT = 3000;

const start = async () => {
    try {
        await fastify.listen(PORT, '0.0.0.0');
        console.log(fastify.printRoutes());
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();