const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log("MongoDB created")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

module.exports = { connectDB }

