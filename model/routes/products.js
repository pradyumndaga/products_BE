const express = require('express');

const Product = require('../product');

const Category = require('../category');

productRouter = express.Router();

productRouter.get('/list/:id', async (req, res, next) => {
    try {
        const products = await Product.find({categoryId: req.params.id});
        res.send(JSON.stringify(products));
    } catch {
        res.send(JSON.stringify({ error: 'Error in fetching products!' }));
    }
});

productRouter.get('/:id', async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)
        res.send(JSON.stringify(product));
    } catch {
        res.send(JSON.stringify({ error: 'Error in fetching products!' }));
    }
});

module.exports = productRouter;