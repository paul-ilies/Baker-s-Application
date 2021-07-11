const mongoose = require("mongoose")

const reteteSchema = new mongoose.Schema({

    name: String,
    type: String,
    image: String,
    flour: Number,
    water: Number,
    salt: Number,
    instantYeast: Number,
    description: String,
    bulkFermentatiom: String,
    proofTime: String,
    sampleSchedule: String,
    stepOne: String,
    stepOneDescription: String,
    stepTwo: String,
    stepTwoDescription: String,
    stepThree: String,
    stepThreeDescription: String,
    stepFour: String,
    stepFourDescription: String,
    stepFive: String,
    stepFiveDescription: String,
    stepSix: String,
    stepSixDescription: String,
    stepSeven: String,
    stepSevenDescription: String,
    stepEight: String,
    steptEightDescription: String,

})

const Retete = mongoose.model('Retete', reteteSchema)

module.exports = Retete

