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

module.exports = router;