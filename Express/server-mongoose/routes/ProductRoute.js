const express = require('express')
const router = express.Router();
const Products = require('../models/ProductsModel')

// Method : GET | API URL : localhost:3000/products/all
router.get('/all', async(req, res) => {
    try{
        const products = await Products.find()
        res.status(200).json(products)
    } catch(error) {
        res.status(500).json({ message: error.message})
    }
})
// Method : POST | API URL : localhost:3000/products/add
router.post('/add', async (req, res) => {
    try {
        const ProductData = new Products(req.body)
        const { title, img, price, } = ProductData
        if(!title || !img || !price){
            res.status(401).json({message:"All fields required"})
        }
        const storedata = await ProductData.save()
        res.status(200).json(storedata)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})
module.exports = router