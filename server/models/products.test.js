const mongoose = require("mongoose")
const { getProduct, createProduct } = require("./products")

const MONGODB_URL = "mongodb://127.0.0.1/testdb"

beforeAll(async () => {
    await mongoose.connect(MONGODB_URL)
})

afterAll(async () => {
    await mongoose.connection.close()
})

afterAll(async () => {
    mongoose.connection.dropDatabase()
})


test("Should create product", async () => {
    const newProduct = await createProduct ({
        name: "New product",
        sku: "XYZ-000",
        price: 499,
        description: "A new product",
        thumbnail: "/fake-image-thumbnail",
        image: "/fake-image.jpg"
    })
    const product = await getProduct(newProduct.sku)
    expect(product.name).toBe(newProduct.name)
})

test("SKU's should be unique", async () => {
    const fakeProduct = {
        name: "New product",
        sku: "XYZ-000",
        price: 499,
        description: "A new product",
        thumbnail: "/fake-image-thumbnail",
        image: "/fake-image.jpg"
    }

    await createProduct(fakeProduct)
    expect(async () => {
        await createProduct(fakeProduct)
    }).toThrow()
})