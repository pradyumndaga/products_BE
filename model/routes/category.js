const express = require('express');

const Category = require('../category');

categoryRouter = express.Router();

categoryRouter.get('/', async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.send(JSON.stringify(categories));
    } catch {
        res.send(JSON.stringify({ error: 'Error in fetching categories!' }));
    }
});

categoryRouter.get('/:id', async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);
        res.send(JSON.stringify(category));
    } catch {
        res.send(JSON.stringify({ error: 'Error in fetching categories!' }));
    }
});

module.exports = categoryRouter;