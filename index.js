const express = require('express');
const app = express();
const port = 3000;


app.use(express.json())



app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

const products = [];
products.push({
    id: 1,
    name: 'first product',
    aliment: 'Tomate'
})

app.get('/products', (req, res) => res.json(products));

app.post('/create/product', (req, res) => {
    const product = req.body;
    if (products.find(x => x.id === parseInt(req.body.id))) {
        res.send('Sorry this id is already exists');
        return;
    }
    products.push(product);
    res.send('Product has benn created successfully');
    // products.push(req.body);
})

app.get('/product/:id', (req, res) => {
    const searchProductByid = products.find(x => x.id === parseInt(req.params.id))
    if (!searchProductByid) {
        res.send('Error : product not exists')
        return;
    }
    res.send(searchProductByid);
})

app.post('/update/product/:id', (req, res) => {
    console.log('here')
    const searchProductByid = products.find(x => x.id === req.params.id)
    if (!searchProductByid) {
        res.send('Error : product not exists')
        return;
    }
    searchProductByid.id = req.body.id;
    searchProductByid.name = req.body.name;
    searchProductByid.aliment = req.body.aliment;
    res.send(searchProductByid);

})

app.delete('/delete/product/:id', (req, res) => {
    const searchProductByid = products.findIndex(x => x.id === parseInt(req.params.id));
    console.log(req.params.id)
    if (!products[searchProductByid]) {
        console.log(products[searchProductByid])
        console.log(searchProductByid)
        res.send('Error : product not exists')
        return;
    }
    products.splice(searchProductByid, 1);
    res.send('Product has benn deleted');
})
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))