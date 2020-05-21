const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    user: { type: String, required: true },
    exercises: [{ exercise: String, duration: Number }],
    completed: {type: Boolean, default: false}
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
