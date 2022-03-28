const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")

const { productsRoutes } = require("./controllers/products")

const app = express()
const PORT = 5000;
const MONGODB_URL = "mongodb://127.0.0.1/ecommerce"

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use(cors())
app.use("/products", productsRoutes)

mongoose.connect(MONGODB_URL)

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
