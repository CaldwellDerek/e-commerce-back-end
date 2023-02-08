const express = require("express");
const router = express.Router();
const {Product} = require("../models");

// Get all Products route
router.get("/", async (request, response)=> {
    try {
        const allProducts = await Product.findAll();
        response.status(200).json(allProducts);
    } catch (error) {
        response.status(500).json({msg: "Something went wrong!"});
    }
})

// Get Product by ID route
router.get("/:id", async (request, response)=> {
    try {
        const product = await Product.findByPk(request.params.id);
        console.log(product);
        if (product){
            response.status(200).json(product);
        } else {
            response.status(404).json({msg: "Product not found!"});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

// Create new Product route
router.post("/", async (request, response)=> {
    try {
        const newProducts = await Product.create({
            product_name: request.body.product_name,
            price: request.body.price,
            stock: request.body.stock,
            category_id: request.body.category_id,
            categoryId: request.body.categoryId
        });
        response.status(200).json(newProducts);
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

// Update by Product ID route
router.put("/:id", async (request, response)=> {
    try {
        const updateProduct = await Product.update({
            product_name: request.body.product_name,
            price: request.body.price,
            stock: request.body.stock,
            category_id: request.body.category_id,
            categoryId: request.body.categoryId
        },
        {
            where: {
                id: request.params.id
            }
        });
        if (updateProduct){
            response.status(200).json(updateProduct);
        } else {
            response.status(404).json({msg: "Category not found!"});
        }
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

// Delete Product by ID route
router.delete('/:id', async (request, response)=> {
    try {
        const deleteProduct = await Product.destroy({
            where: {
                id:request.params.id
            }
        });
        if (deleteProduct) {
            response.status(200).json(deleteProduct);
        } else {
            response.status(404).json({msg: "Category not found!"});
        }
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
})
module.exports = router;