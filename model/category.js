const mongoose = require('mongoose');

const productListSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model('ProductList', productListSchema)