import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuButton from './MenuButton';
import UserContext from '../utils/UserContext';

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
    const { user } = useContext(UserContext);

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <MenuButton/>
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
                    {user.userName}
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;