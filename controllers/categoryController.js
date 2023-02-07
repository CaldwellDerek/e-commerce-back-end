const express = require("express");
const router = express.Router();
const {Category} = require("../models");

router.get("/", async (request, response)=> {
    try {
        const allCategories = await Category.findAll();
        response.status(200).json(allCategories);
    } catch (error) {
        response.status(500).json({msg: "Something went wrong!"});
    }
})

module.exports = router;