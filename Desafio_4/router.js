const express = require('express');
const { json } = require('express/lib/response.js');
const Container = require("./Container.js")

const router = express.Router();
const products = new Container

router.get("/", (req, res) =>{
    const getAllProducts = products.getAll()
    res.send(products)
})

router.get("/:id", (req, res) =>{
    id = req.params.id
    const prodId = products.getById(parseInt(id))
    res.send(prodId);
})

router.post("/", (req, res) =>{
    const prod = req.body;
    const newProd = products.createProd(prod);
    res.send(newProd);
})

router.put("/:id", (req, res) =>{
    id = req.params.id
    const prod = req.body;
    const prodUpdate = products.updateById(parseInt(id), prod)
    res.send(prodUpdate);
})

router.delete("/:id", (req, res) =>{
    id = req.params.id
    const productsUpdate = products.deleteById(parseInt(id))
    res.send(productsUpdate);
})

module.exports = router;