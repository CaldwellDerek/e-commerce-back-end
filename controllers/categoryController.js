const express = require("express");
const router = express.Router();
const {Category} = require("../models");

router.get("/", async (request, response)=> {
    try {
        const allCategories = await Category.findAll();
        response.status(200).json(allCategories);
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

router.get("/:id", async (request, response)=> {
    try {
        const category = await Category.findByPk(request.params.id);
        console.log(category);
        if (category){
            response.status(200).json(category);
        } else {
            response.status(404).json({msg: "Category not found!"});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

router.post("/", async (request, response)=> {
    try {
        const newCategory = await Category.create({
            category_name: request.body.category_name
        });
        response.status(200).json(newCategory);
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

router.put("/:id", async (request, response)=> {
    try {
        const updateCategory = await Category.update({
            category_name: request.body.category_name
        },
        {
            where: {
                id: request.params.id
            }
        });
        if (updateCategory){
            response.status(200).json(updateCategory);
        } else {
            response.status(404).json({msg: "Category not found!"});
        }
    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
});

module.exports = router;


/*
    try {

    } catch (error){
        console.log(error);
        response.status(500).json({msg: "Something went wrong!"});
    }
*/