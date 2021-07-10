import express from "express";
import asyncHandler from "express-async-handler"
import Retete from '../modele/modelRetete.js';

const router = express.Router();

router
    .get("/recipes", asyncHandler(async (req, res) => {
        const retete = await Retete.find({});
        res.json(retete)

    }))
    .get("/recipes/:id", asyncHandler(async (req, res) => {
        const reteta = await Retete.findById(req.params.id)
        if (reteta) {
            res.json(reteta)
        } else {
            res.status(404)
            throw new Error("Recipe not found")
        }
    }))


export default router

