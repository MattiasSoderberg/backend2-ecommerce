const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    discountPrice: Number,
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    image: { type: String, required: true },
})

const Product = mongoose.model("Product", productSchema)

const getAllProducts = async () => {
    return await Product.find()
}

const getProduct = async (sku) => {
    return await Product.findOne({ sku })
}

const createProduct = async (productData) => {
    const product = await new Product(productData)
    await product.save()
    return product
}

module.exports = { getAllProducts, getProduct, createProduct }