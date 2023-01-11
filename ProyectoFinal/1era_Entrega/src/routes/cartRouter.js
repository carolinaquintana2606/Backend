const express = require('express')

const { Router } = express;
const cartRouter = new Router;

const ContainerCart = require('../containers/ContainerCart')
const Cart = new ContainerCart ("../db/dbCart.json")

const ContainerProducts = require('../containers/ContainerProducts')
const Products = new ContainerProducts("../db/dbProducts.json")

//metodos
cartRouter.post("/", async (req, res) => {
    const newCart = await Cart.createCart();
    res.send(newCart);
})

cartRouter.delete("/:id", async (req, res) =>{
    id = req.params.id
    const cartsUpdate = await Cart.deleteById(parseInt(id))
    res.send(cartsUpdate);

})

cartRouter.get("/:id/products", async (req, res) =>{
    id = req.params.id
    const prodByCart = await Cart.getById(parseInt(id))
    res.send(prodByCart)

})

cartRouter.post("/:id/products", async (req, res) =>{
    id = req.params.id
    let idProd = req.body
    idProd = idProd.id
    const prodId = await Products.getById(idProd)
    
    const NewProdCart = await Cart.addProd(id, prodId)
    res.send (NewProdCart)

})


cartRouter.delete("/:id/products/:id_prod", async (req, res) =>{
    id = req.params.id
    idProd = req.params.id_prod
    const newCart = await Cart.deleteByIdProd(id, idProd)
    res.send (newCart)
})

module.exports = cartRouter;