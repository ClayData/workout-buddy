const router = require("express").Router();
const workoutController = require("../controllers/workoutController");

router.route("/api/workouts/:user")
    .get(workoutController.getUserWorkouts)
    .post(workoutController.createWorkout)

router.get("/health", function(req, res) {
    res.send("Hello from the express server!");
})

module.exports = router;