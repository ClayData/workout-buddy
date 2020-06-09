const mongoose = require("mongoose");
const db = require("../models/exerciseModel");

mongoose.connect("mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const workoutSeed = [
  {
    title: "Full Body",
    exercises: [
      {
        exercise: "Push-Ups",
        duration: 30
      },
      {
        exercise: "Squats",
        duration: 30
      },
      {
        exercise: "Burpees",
        duration: 30
      },
      {
        exercise: "Lunges",
        duration: 30
      },
      {
        exercise: "Plank",
        duration: 30
      }
    ]
  }
];

db.deleteMany({})
  .then(() => db.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
