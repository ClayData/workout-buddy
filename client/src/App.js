import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Workouts from './pages/Workouts/Workouts';
import SignIn from './pages/SignIn/SignIn';
import RunWorkout from './pages/RunWorkout/RunWorkout';
import Stats from './pages/Stats/Stats';

const themeObject ={
  palette: {
    primary: { 
      main: '#053f5b' },
    secondary: { main: '#5e3c6f'},
    warning: { main: '#f44336' },
    type: 'light',
  },
  typography: {
    fontFamily: 'Roboto',
    color: 'black'
  }
}

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const { 
    palette: { type }
  } = theme;

  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light'
      }
    }
    setTheme(updatedTheme)
  }
  return [theme, toggleDarkMode]
}

function App() {
  const [theme, toggleDarkMode] = useDarkMode();
  const [user, SetUser] = useState("");
  
  const themeConfig = createMuiTheme(theme)

  useEffect(() => {
    SetUser(sessionStorage.getItem("currentUser"));
  }, [])
  return (
    <ThemeProvider theme={themeConfig}>
      <Router>
            <div className="App">
              <NavBar user={user} SetUser={SetUser} onClick={toggleDarkMode} />
              <Route exact path="/" component={() => {return (<SignIn SetUser={SetUser} />)}} />
              <Route exact path="/workouts" component={Workouts} />
              <Route exact path="/signin" component={() => {return (<SignIn SetUser={SetUser} />)}} />
              <Route exact path="/runworkout/:id" component={RunWorkout} />
              <Route exact path="/stats" component={Stats} />
            
            </div>
      
      </Router>
     </ThemeProvider>
  );
}

export default App;
