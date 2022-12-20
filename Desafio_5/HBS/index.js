const express = require('express');


const app = express();
const PORT = 8080;

const Container = require('../Container.js')
const products = new Container

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'hbs')
app.set('views', './views')

app.get("/productos", (req, res) =>{
    products.getAll()
    res.render('index', {products})
})

app.post("/productos", (req, res) =>{
    const prod = req.body;
    products.createProd(prod);
    //res.redirect('/')
})


const server = app.listen(PORT, () =>{
    console.log(`Servidor inicializado en el puerto ${PORT}`)
})
server.on('error', (error) =>{
    console.log('ERROR', error)
})