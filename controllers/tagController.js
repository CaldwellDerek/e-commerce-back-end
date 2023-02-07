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

router.get("/:id", async (request, response)=> {
    try {
        const tag = await Tag.findByPk(request.params.id);
        console.log(tag);
        if (tag){
            response.status(200).json(tag);
        } else {
            response.status(404).json({msg: "Tag not found!"});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});


module.exports = router;