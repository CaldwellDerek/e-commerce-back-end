const express = require("express");
const router = express.Router();
const {Tag} = require("../models");

router.get("/", async (request, response)=> {
    try {
        const allTags = await Tag.findAll();
        response.status(200).json(allTags);
    } catch (error) {
        response.status(500).json({msg: "Something went wrong!"});
    }
})

module.exports = router;