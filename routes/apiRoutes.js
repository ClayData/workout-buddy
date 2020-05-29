const router = require("express").Router();
const workoutController = require("../controllers/workoutController");
const passport = require("passport");

router.route("/api/workouts")
    .post(workoutController.createWorkout)

router.route("/api/workouts/:user")
    .get(workoutController.getUserWorkouts)

router.route("/api/workouts/completed/:user")
    .get(workoutController.getCompletedWorkouts)

router.route("/api/workout/completed/:id")
    .put(workoutController.setCompletedWorkout)

router.route("/api/workout/increment/:id/:timesCompleted")
    .put(workoutController.incrementCompletedWorkout)
    
router.route("/api/workout/:id")
    .delete(workoutController.deleteWorkout)
    .get(workoutController.getWorkoutById)

router.route("/api/users/:user/stats")
    .get(workoutController.getUserStats)
    .put(workoutController.writeToStats)

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

router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;