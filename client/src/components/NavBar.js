import React from 'react';
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

function NavBar() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <MenuButton/>
                <Typography variant="h6" className={classes.title}>
                    Workout Buddy
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;