import React, {useState} from 'react';
import { Grid, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateWorkout from '../../components/CreateWorkout'
import SavedListContainer from '../../components/SavedListContainer';
import CompletedListContainer from '../../components/CompletedListContainer';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f4f7f9"
    },
    number: {
       width: '100px'
    },
    background:{
       width: '100vw',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
    },
    paper: {
        height: '100vh',
        width: '30vw',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "'Roboto', sans-serif"
    }
})) 

const Workouts = () => {
    const [workoutAdded, SetWorkoutAdded] = useState(0);
    const user = sessionStorage.getItem("currentUser")

    const classes = useStyles();
    return(
       
            <Grid container className={classes.root}>
                <Paper className={classes.background} square>
                    <Grid item >
                        <Paper variant="outlined" className={classes.paper}>
                            <CompletedListContainer user={user}/>    
                        </Paper>
                    </Grid>       
                    <Grid item>
                        <Paper variant="outlined" className={classes.paper}>
                            <CreateWorkout workoutAdded={workoutAdded} SetWorkoutAdded={SetWorkoutAdded} user={user}/>
                        </Paper>
                    </Grid>
                    <Grid item >
                        <Paper variant="outlined" className={classes.paper}>
                            <SavedListContainer workoutAdded={workoutAdded} SetWorkoutAdded={SetWorkoutAdded} user={user}/>
                        </Paper>
                    </Grid>    
                </Paper>
            </Grid>
        
    )
}

export default Workouts;