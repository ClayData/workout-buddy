import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import WorkoutList from '../../components/WorkoutList';

const useStyles = makeStyles((theme) => ({
    root: {
       
    }
})) 



const Workouts = () => {
    const classes = useStyles();
    return(
        <div>
            <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item >
                    <h2>Completed Workouts</h2>
                    <WorkoutList />    
                </Grid>        
                <Grid item >    
                    <h2>Create New Workout</h2>
                </Grid>
                <Grid item >
                    <h2>Existing Workouts</h2>
                    <WorkoutList />
                </Grid>    
            </Grid>
        </div>
    )
}

export default Workouts