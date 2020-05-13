import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputForm from '../../components/InputForm';
import WorkoutListItem from '../../components/WorkoutListItem';

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
                    <WorkoutListItem />    
                </Grid>        
                <Grid item >    
                    <h2>Create New Workout</h2>
                        <InputForm
                        name="Workout Name"
                        />
                        <InputForm
                        name="Exercise"
                        />
                        <InputForm
                        name="Exercise"
                        />
                        <InputForm
                        name="Exercise"
                        />
                        <InputForm
                        name="Exercise"
                        />
                </Grid>
                <Grid item >
                    <h2>Existing Workouts</h2>
                    <WorkoutListItem />
                </Grid>    
            </Grid>
        </div>
    )
}

export default Workouts