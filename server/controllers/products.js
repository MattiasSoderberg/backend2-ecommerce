const express = require("express")

const { getAllProducts, getProduct } = require("../models/products")

const productsRoutes = express.Router()

productsRoutes.get("/", async (req, res) => {
    const products = await getAllProducts()
    res.json({ products })
})

productsRoutes.get("/:sku", async (req, res) => {
    const product = await getProduct(req.params.sku)
    if (product) {
        res.json(product)
    } else {
        res.sendStatus(404)
    }
})

module.exports = { productsRoutes }