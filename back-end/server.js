import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./db/db";
import retete from "./route/retete";



dotenv.config()
connectDB()
const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, "..", "front-end", "build")))

app.use(retete)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "front-end", "build", "index.html"))
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serverul este deschis in portul: ${PORT}`)
})

