import React, {useState} from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateWorkout from '../../components/CreateWorkout'
import SavedListContainer from '../../components/SavedListContainer';
import CompletedListContainer from '../../components/CompletedListContainer';

const useStyles = makeStyles((theme) => ({
    number: {
       width: '100px'
    }
})) 

const Workouts = () => {
    const [numSaved, SetNumSaved] = useState(0);
    const classes = useStyles();
    return(
        
        <div>
            <Grid container direction="row" justify="space-around" alignItems="baseline">
                <Grid item >
                    <h2>Completed Workouts</h2>
                    <CompletedListContainer />    
                </Grid>       
                <CreateWorkout setNumSaved={SetNumSaved} numSaved={numSaved} />
                <Grid item >
                    <h2>Saved Workouts</h2>
                    <SavedListContainer />
                </Grid>    
            </Grid>
        </div>
       
    )
}

export default Workouts