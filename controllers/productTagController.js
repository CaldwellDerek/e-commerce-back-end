const express = require("express");
const router = express.Router();
const {ProductTag} = require("../models");

router.get("/", async (request, response)=> {
    try {
        const allProductTags = await ProductTag.findAll();
        response.status(200).json(allProductTags);
    } catch (error) {
        response.status(500).json({msg: "Something went wrong!"});
    }
})

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


module.exports = router;