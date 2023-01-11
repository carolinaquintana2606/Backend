const express = require('express')

const { Router } = express;
const productsRouter = new Router;

const ContainerProducts = require('../containers/ContainerProducts')
const Products = new ContainerProducts('../db/dbProducts.json')

function errorAdmin(path, method){
    const error = {
        error: -1,
    }
    if (path && method) {
        error.descripcion = `ruta '${path}' metodo '${method}' no autorizado`
    } else {
        error.descripcion = 'Usuario No Autorizado'
    }
    return error
}

const isAdmin = true

function adminsOnly(req, res, next){
    if (!isAdmin) {
        res.json(errorAdmin(req.url, req.method))
    } else {
        next()
    }
}


//métodos
productsRouter.get("/", async (req, res) =>{
    const getAllProducts = await Products.getAll()
    
    res.send(getAllProducts)
})

productsRouter.get("/:id", async (req, res) =>{
    id = req.params.id
    const prodId = await Products.getById(parseInt(id))
    res.send(prodId);
})

productsRouter.post("/", adminsOnly, async (req, res) =>{
    const prod = req.body;
    const newProd = await Products.createProd(prod);
    res.send(newProd);
})

productsRouter.put("/:id", adminsOnly, async (req, res) =>{
    id = req.params.id
    const prod = req.body;
    const prodUpdate = await Products.updateById(parseInt(id), prod)
    res.send(prodUpdate);
})

productsRouter.delete("/:id", adminsOnly, async (req, res) =>{
    id = req.params.id
    const productsUpdate = await Products.deleteById(parseInt(id))
    res.send(productsUpdate);
})

module.exports = productsRouter;