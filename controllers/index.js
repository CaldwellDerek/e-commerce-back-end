// TODO - IMPORT CONTROLLERS, EXPORT
const express = require("express");
const router = express.Router();

const categoryRoutes = require("./categoryController.js")
router.use("/api/categories", categoryRoutes);

const productRoutes = require("./productController.js");
router.use("/api/products", productRoutes);

const productTagRoutes = require("./productTagController.js");
router.use("/api/producttags", productTagRoutes);

const tagRoutes = require("./tagController.js");
router.use("/api/tags", tagRoutes);

module.exports = router;