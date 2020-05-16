import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Workouts from './pages/Workouts/Workouts';
import SignIn from './pages/SignIn/SignIn';
import RunWorkout from './pages/RunWorkout/RunWorkout';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Route exact path="/" component={Workouts} />
          <Route exact path="/workouts" component={Workouts} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/runworkout/:id" component={RunWorkout} />
      </div>
    </Router>
  );
}

export default App;
