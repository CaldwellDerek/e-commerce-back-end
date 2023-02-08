const express = require("express");
const router = express.Router();
const {Tag} = require("../models");

// Get all Tags
router.get("/", async (request, response)=> {
    try {
        const allTags = await Tag.findAll();
        response.status(200).json(allTags);
    } catch (error) {
        response.status(500).json({msg: "Something went wrong!"});
    }
})

// Get Tag by ID
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

// Create new Tag route
router.post("/", async (request, response)=> {
    try {
        const newTag = await Tag.create(	{
            tag_name: request.body.tag_name
        });
        response.status(200).json(newTag);
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

// Update by Tag ID route
router.put("/:id", async (request, response)=> {
    try {
        const updateTag = await Tag.update({
            tag_name: request.body.tag_name
        },
        {
            where: {
                id: request.params.id
            }
        });
        if (updateTag){
            response.status(200).json(updateTag);
        } else {
            response.status(404).json({msg: "Category not found!"});
        }
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

// Delete Tag by ID route
router.delete('/:id', async (request, response)=> {
    try {
        const deleteTag = await Tag.destroy({
            where: {
                id:request.params.id
            }
        });
        if (deleteTag) {
            response.status(200).json(deleteTag);
        } else {
            response.status(404).json({msg: "Category not found!"});
        }
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});


module.exports = router;