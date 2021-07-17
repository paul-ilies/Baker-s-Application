const mongoose = require("mongoose")

const dotenv = require("dotenv");

dotenv.config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB created`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

module.exports = { connectDB }

