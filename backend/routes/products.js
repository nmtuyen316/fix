const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Product = require('../models/ProductModel')

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);
    }catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})
module.exports = router