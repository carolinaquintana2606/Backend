const express = require('express')

app = express();
const PORT = 8070;

const Container = require('../Container.js')
const products = new Container

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('views', './views')
app.set('view engine', 'pug')

app.get(app.get("/productos", (req, res) =>{
    res.render('index', {products})
})
)

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