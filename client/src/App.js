import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Workouts from './pages/Workouts/Workouts';
import SignIn from './pages/SignIn/SignIn';
import RunWorkout from './pages/RunWorkout/RunWorkout';
import Stats from './pages/Stats/Stats';

function App() {
  const [user, SetUser] = useState("");
  useEffect(() => {
    SetUser(sessionStorage.getItem("currentUser"));
  })
  return (
    <Router>
        <div className="App">
          <NavBar user={user}/>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/workouts" component={Workouts} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/runworkout/:id" component={RunWorkout} />
          <Route exact path="/stats" component={Stats} />
        </div>
    </Router>
  );
}

export default App;
