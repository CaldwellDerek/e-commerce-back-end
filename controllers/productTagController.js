const express = require("express");
const router = express.Router();
const {ProductTag} = require("../models");

// Get all Product Tags
router.get("/", async (request, response)=> {
    try {
        const allProductTags = await ProductTag.findAll();
        response.status(200).json(allProductTags);
    } catch (error) {
        response.status(500).json({msg: "Something went wrong!"});
    }
})

// Get Product Tag by ID
router.get("/:id", async (request, response)=> {
    try {
        const productTag = await ProductTag.findByPk(request.params.id);
        console.log(productTag);
        if (productTag){
            response.status(200).json(productTag);
        } else {
            response.status(404).json({msg: "Product Tag not found!"});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

// Create new Product Tag route
router.post("/", async (request, response)=> {
    try {
        const newProductTag = await ProductTag.create({
            product_id: request.body.product_id,
            tag_id: request.body.tag_id
        });
        response.status(200).json(newProductTag);
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

// Update by Product Tag ID route
router.put("/:id", async (request, response)=> {
    try {
        const updateProduct = await ProductTag.update({
            product_id: request.body.product_id,
            tag_id: request.body.tag_id
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

// Delete Product Tag by ID route
router.delete('/:id', async (request, response)=> {
    try {
        const deleteProductTag = await ProductTag.destroy({
            where: {
                id:request.params.id
            }
        });
        if (deleteProductTag) {
            response.status(200).json(deleteProductTag);
        } else {
            response.status(404).json({msg: "Category not found!"});
        }
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

module.exports = router;