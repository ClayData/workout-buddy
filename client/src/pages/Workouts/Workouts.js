import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateWorkout from '../../components/CreateWorkout'
import SavedListContainer from '../../components/SavedListContainer';

const useStyles = makeStyles((theme) => ({
    number: {
       width: '100px'
    }
})) 

const Workouts = () => {
    const classes = useStyles();
    return(
        <div>
            <Grid container direction="row" justify="space-around" alignItems="centerg">
            <Grid item >
                    <h2>Completed Workouts</h2>
                    <SavedListContainer />    
                </Grid>       
                <CreateWorkout />
                <Grid item >
                    <h2>Saved Workouts</h2>
                    <SavedListContainer />
                </Grid>    
            </Grid>
        </div>
    )
}

export default Workouts