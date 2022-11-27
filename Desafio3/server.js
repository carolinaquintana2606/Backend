const express = require('express')
const Container = require("../Container.js")
const products = new Container("./products.json")

const app = express()

const PORT = 3000;


app.get('/products', async (req, res) =>{

  const getAllProducts = await products.getAll()
    
    res.send({Productos: getAllProducts})
})


app.get('/productRandom', async (req, res) =>{
    const getAllProducts = await products.getAll()
    const getProductRandom = parseInt(Math.random() * getAllProducts.length)
    res.send({Productos: getAllProducts[getProductRandom]})
})

const server = app.listen(PORT, () =>{
    console.log(`Servidor inicializado en el puerto ${PORT}`)
})

server.on('error', (error) =>{
    console.log('ERROR', error)
})