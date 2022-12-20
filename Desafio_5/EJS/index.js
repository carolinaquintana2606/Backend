const express = require('express')

const app = express();
const PORT = 8070;

const Container = require('../Container.js')
const products = new Container

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('views', './views')
app.set('view engine', 'ejs')

app.post("/", (req, res) =>{
    const prod = req.body;
    products.createProd(prod);
    res.render('index')
    res.redirect('/productos')
})

app.get("/productos", (req, res) =>{
    products.getAll()
    res.render('vista', products)
})


const server = app.listen(PORT, () =>{
    console.log(`Servidor inicializado en el puerto ${PORT}`)
})
server.on('error', (error) =>{
    console.log('ERROR', error)
})