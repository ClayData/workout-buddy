const WorkoutModel = require("../models/exerciseModel");

module.exports = {
    createWorkout: function(workout) {
        WorkoutModel.create(workout);
    },
    getUserWorkouts: function(user) {
        WorkoutModel.find(user);
    }
}