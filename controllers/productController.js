const express = require("express");
const router = express.Router();
const {Product} = require("../models");

router.get("/", async (request, response)=> {
    try {
        const allProducts = await Product.findAll();
        response.status(200).json(allProducts);
    } catch (error) {
        response.status(500).json({msg: "Something went wrong!"});
    }
})

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

module.exports = router;