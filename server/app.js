const express = require("express");
const cors = require("cors")

const { productsRoutes } = require("./controllers/products")

const app = express()
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use(cors())
app.use("/products", productsRoutes)

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
