const dotenv = require("dotenv")
dotenv.config()
const app = require("./app")
const mongoose = require("mongoose")

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL

mongoose.connect(MONGODB_URL)

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});