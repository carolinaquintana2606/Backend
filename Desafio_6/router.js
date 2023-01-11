const { Router } = require('express');
const router = Router();

const ContainerProducts = require('./ContainerProducts.js')
const products = new ContainerProducts()

router.get('/', (req, res) => res.render('products', {products} ));

module.exports = {
	router,
	products
};
