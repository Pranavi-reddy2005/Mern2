const express = require('express')
const router = express.Router()
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
        const { name, img, price, } = ProductData
        if(!name || !img || !price){
            res.status(400).json({message:"All fields required"})
        }
        const storedata = await ProductData.save()
        res.status(200).json(ProductData)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

router.put('/edit/:id', async (req,res)=>{
    try{
       const id = req.params.id
       const existingproduct = await Products.findOne({_id:id})
       if(!existingproduct){
           res.status(404).json({message:"Product not found!"})
       }
       const updateproduct = await Products.findByIdAndUpdate(id,req.body, {new:true})
       res.status(200).json(updateproduct)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}) 

router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id
        const existingproduct = await Products.findOne({_id:id})
        if(!existingproduct){
            res.status(404).json({message:"Product not found!"})
        }
        await Products.findByIdAndDelete(id)
        res.status(200).json({ message: "Product Deleted"})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

module.exports = router

// 1.GET
// 2.POST
// 3.PUT
// 4.DELETE

// 1.READ
// 2.CREATE
// 3.UPDATE
// 4.DELETE


// 200 -> OK
// 404 -> NOT FOUND
// 500 -> INTERNAL SERVER ERROR
// 201 -> CREATED
// 400 -> BAD Request
// 401 -> UnAuthorized