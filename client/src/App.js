import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Workouts from './pages/Workouts/Workouts';
import SignIn from './pages/SignIn/SignIn';
import RunWorkout from './pages/RunWorkout/RunWorkout';
import UserContext from './utils/UserContext';

function App() {
  const [user, setUser] = useState({
    userName: ""
  })

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <NavBar />
            <Route exact path="/" component={SignIn} />
            <Route exact path="/workouts" component={Workouts} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/runworkout/:id" component={RunWorkout} />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
