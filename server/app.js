const express = require("express");
const cors = require("cors")

const { productsRoutes } = require("./controllers/products")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use(cors())
app.use("/products", productsRoutes)

module.exports = app
