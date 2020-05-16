const router = require("express").Router();
const workoutController = require("../controllers/workoutController");

router.route("/api/workouts")
    .get(workoutController.getUserWorkouts)
    .post(workoutController.createWorkout)

router.route("/api/workouts/completed")
    .get(workoutController.getCompletedWorkouts)
    
router.route("/api/workouts/:id")
    .delete(workoutController.deleteWorkout)
    .get(workoutController.getWorkoutById)

router.get("/health", function(req, res) {
    res.send("Hello from the express server!");
})

module.exports = router;