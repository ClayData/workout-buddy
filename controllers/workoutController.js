const WorkoutModel = require("../models/exerciseModel");

module.exports = {
    createWorkout: function(req, res) {
        WorkoutModel.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    },
    getUserWorkouts: function(req, res) {
        WorkoutModel.find({user: req.params.user})
        .then((workouts) => res.json(workouts))
        .catch(err => res.status(422).json(err));
    }
}