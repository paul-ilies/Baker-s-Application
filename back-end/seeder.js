import dotenv from "dotenv";
import retete from "./retete/retete.json";
import Retete from './modele/modelRetete';
import connectDB from "./db/db";

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

