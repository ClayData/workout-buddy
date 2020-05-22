const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    user: { type: String, required: true },
    exercises: [{ exercise: String, duration: Number }],
    completed: {type: Boolean, default: false},
    timesCompleted: { type: Number, default: 0 }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
