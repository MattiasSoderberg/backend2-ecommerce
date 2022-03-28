const express = require("express")

const { readProducts } = require("../models/products")

const productsRoutes = express.Router()

productsRoutes.get("/", async (req, res) => {
    const products = await readProducts()
    res.json(products)
})

productsRoutes.get("/:sku", async (req, res) => {
    const { products } = await readProducts()
    const product = products.find(({sku}) => sku === req.params.sku)
    if (product) {
        res.json(product)
    } else {
        res.sendStatus(404)
    }
})

module.exports = { productsRoutes }