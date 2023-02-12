//const express = require('express')
import express from 'express'

import productosRouter from './routes/productsRouter.js'
import carritosRouter from './routes/cartRouter.js'
//const productosRouter = require('./routes/productsRouter')
//const carritosRouter = require('./routes/cartRouter')


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)
app.get('*', function (req, res) {
    res.send({ status: "error", description: `ruta ${req.url} método ${req.method} no implementada` });
})


export default app