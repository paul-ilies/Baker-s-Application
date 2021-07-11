const express = require("express")
const dotenv = require("dotenv")
const { connectDB } = require("./db/db")
const path = require("path");
const retete = require("./route/retete")




dotenv.config({ path: "../.env" })
connectDB()
const PORT = process.env.PORT || 5000;

const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, "..", "front-end", "build")))

app.use(retete)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "front-end", "build", "index.html"))
})



app.listen(PORT, () => {
    console.log(`Serverul este deschis in portul: ${PORT}`)
})

