const router = require("express").Router();
const workoutController = require("../controllers/workoutController");

router.post("/api/workouts").post((req, res) => {
    workoutController.createWorkout(req.body).then((response) => {
        res.json(response)
    })
});

router.get("/api/workouts/:user", (req, res) => {
    workoutController.getUserWorkouts(req.params.user).then((workouts) => {
        res.json(workouts)
    })
});

router.get("/", function(req, res) {
    res.send("dsfjdsljf");
})

module.exports = router;