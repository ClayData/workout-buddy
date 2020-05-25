const mongoose = require("mongoose");

const statsModel = new mongoose.Schema({
    user: { type: String, required: true },
    joinDate: { type: Date, default: Date.now },
    completedWorkouts: []
});

const Stat = mongoose.model("Stat", statsModel);
module.exports = Stat;