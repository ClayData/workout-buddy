import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuButton from './MenuButton';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function NavBar(props) {
    const classes = useStyles();

  return(
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <MenuButton SetUser={props.SetUser} />
          <Typography variant="h6" className={classes.title}>
              Workout Buddy
          </Typography>
          <Typography variant="h6" className={classes.title}>
              
          </Typography>
          <Typography variant="h6" className={classes.title}>
              
          </Typography>
          <Typography variant="h6" className={classes.title}>
              
          </Typography>
          <Typography variant="h6" className={classes.title}>
              
          </Typography>
          <Typography variant="h6" className={classes.title}>
              
          </Typography>
          <Typography variant="h6" className={classes.title}>
              
          </Typography>
          <Typography variant="h6" className={classes.title}>
              
          </Typography>
          <Typography variant="h6" className={classes.title}>
              
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/stats" style={{ textDecoration: 'none', color: 'white' }}>
              {props.user}
            </Link>
          </Typography>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;