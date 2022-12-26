const express = require('express')

app = express();
const PORT = 8000;

const Container = require('../Container.js')
const products = new Container

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('views', './views')
app.set('view engine', 'pug')

app.post("/", (req, res) =>{
    const prod = req.body;
    products.createProd(prod);
    console.log(products)
    res.render('index')
    res.redirect('/productos')
})


app.get(app.get("/productos", (req, res) =>{
    res.render('vista', products)
})
)


const server = app.listen(PORT, () =>{
    console.log(`Servidor inicializado en el puerto ${PORT}`)
})
server.on('error', (error) =>{
    console.log('ERROR --->', error)
})