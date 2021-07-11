const dotenv = require("dotenv")
const retete = require("./retete/retete.json")
const Retete = require("./modele/modelRetete.js")
const connectDB = require("./db/db")


dotenv.config()

connectDB()



const importareDate = async () => {
    try {
        await Retete.deleteMany()
        const sampleRecipe = retete.map(reteta => {
            return { ...reteta }
        })
        await Retete.insertMany(sampleRecipe)
        console.log(`Date importate`)
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

importareDate()

