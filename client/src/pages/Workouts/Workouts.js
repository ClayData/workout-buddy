import React, {useState} from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateWorkout from '../../components/CreateWorkout'
import SavedListContainer from '../../components/SavedListContainer';
import CompletedListContainer from '../../components/CompletedListContainer';

const useStyles = makeStyles((theme) => ({
    number: {
       width: '100px'
    },
    paper: {
        height: '100vh',
        width: '30vw',
        display: 'flex',
        justifyContent: 'center',
    }
})) 

const Workouts = () => {
    const [workoutAdded, SetWorkoutAdded] = useState(0);
    const classes = useStyles();
    return(
        <div>
            <Grid container direction="row" justify="space-around" alignItems="baseline">
                <Grid item >
                    <Paper variant="outlined" className={classes.paper}>
                        <CompletedListContainer />    
                    </Paper>
                </Grid>       
                <Grid item>
                    <Paper variant="outlined" className={classes.paper}>
                        <CreateWorkout workoutAdded={workoutAdded} SetWorkoutAdded={SetWorkoutAdded} />
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper variant="outlined" className={classes.paper}>
                        <SavedListContainer workoutAdded={workoutAdded} />
                    </Paper>
                </Grid>    
            </Grid>
        </div>
    )
}

export default Workouts;