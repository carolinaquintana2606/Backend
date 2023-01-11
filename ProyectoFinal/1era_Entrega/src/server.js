const express = require('express')


const productosRouter = require('./routes/productsRouter')
const carritosRouter = require('./routes/cartRouter')

// instancio servidor y persistencia
const app = express()


// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)
app.get('*', function (req, res) {
    res.send({ status: "error", description: `ruta ${req.url} método ${req.method} no implementada` });
})


module.exports = app