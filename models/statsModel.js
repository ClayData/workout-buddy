const mongoose = require("mongoose");

const statsModel = new mongoose.Schema({
    user: { type: String, required: true },
    completedWorkouts: []
});

const Stat = mongoose.model("Stat", statsModel);
module.exports = Stat;