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

module.exports = router;