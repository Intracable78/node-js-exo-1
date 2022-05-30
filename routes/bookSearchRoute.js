const bookSearchControllers = require('../controllers/bookSearchControllers');
module.exports = (app) => {

    //search book by name
    app.get('/bookSearch/:name', bookSearchControllers.get);
}; 