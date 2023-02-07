require("dotenv").config();
const express = require("express");
const sequelize = require("./config/connection.js");

const server = express();
const PORT = process.env.PORT || 3000;
const {  Product, Category, Tag, ProductTag,} = require('./models');
// const allRoutes = require("./controllers");

server.use(express.urlencoded({extended: true}));
server.use(express.json());
// server.use(allRoutes);


sequelize.sync({force:false}).then( ()=> {
    server.listen(PORT, ()=> {
        console.log(`SERVER RUNNING - Listening on Port: ${PORT}`);
    })
})