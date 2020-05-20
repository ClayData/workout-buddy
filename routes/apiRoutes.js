const router = require("express").Router();
const workoutController = require("../controllers/workoutController");
const passport = require("passport");

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

router.post("/register_login", (req, res, next) => {
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if(!user) {
            return res.status(400).json({ errors: "No user found"});
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });
        })
    })(req, res, next)
})

module.exports = router;