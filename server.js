const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const app = express();
const passport = require("./passport/setup");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({
  secret: "spicy meatball",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB");

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
