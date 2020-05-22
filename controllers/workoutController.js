const WorkoutModel = require("../models/exerciseModel");

module.exports = {
    createWorkout: function(req, res) {
        WorkoutModel.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    },
    deleteWorkout: function(req, res) {
        WorkoutModel.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    },
    getUserWorkouts: function(req, res) {
        WorkoutModel.find({user: req.params.user})
        .then((workouts) => res.json(workouts))
        .catch(err => res.status(422).json(err));
    },
    getWorkoutById: function(req, res) {
        WorkoutModel.find({_id: req.params.id})
        .then((workouts) => res.json(workouts))
        .catch(err => res.status(422).json(err));
    },
    getCompletedWorkouts: function(req, res) {
        WorkoutModel.find({user: req.params.user, completed: true})
        .sort({ timesCompleted: -1 })
        .then((workouts) => res.json(workouts))
        .catch(err => res.status(422).json(err));
    },
    setCompletedWorkout: function(req, res) {
        WorkoutModel.findOneAndUpdate({_id: req.params.id}, {completed: true})
        .then((response) => res.json(response))
        .catch(err => res.status(422).json(err));
    },
    incrementCompletedWorkout: function(req, res) {
        WorkoutModel.findOneAndUpdate({_id: req.params.id}, {timesCompleted: req.params.timesCompleted})
        .then((response) => res.json(response))
        .catch(err => res.status(422).json(err));
    }
}