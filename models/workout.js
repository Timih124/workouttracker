// adding dependices
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        //getting date and setting date to today
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    //pulls exercise array
    exercises: Array 
}) 

const Workout = mongoose.model("Workout", workoutSchema)

module.exports=Workout


























