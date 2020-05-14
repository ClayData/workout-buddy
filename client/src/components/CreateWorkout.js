import React, { useState } from 'react';

import WorkoutListItem from './WorkoutListItem';
import { Grid, TextField, List, Button } from '@material-ui/core';

function CreateWorkout() {
    
        const [formObject, setFormObject] = useState({});
        const [exerciseList, setExerciseList] = useState([]);
        const [workoutName, setWorkoutName] = useState();
        


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]:value })
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        if (formObject.exercise && formObject.seconds) {
            setExerciseList(exerciseList => [...exerciseList, formObject])
        }
        
    }

    const formSubmit = (event) => {
        event.preventDefault();
    }
    
        return(
            <div>
             <Grid container>
                    <Grid item>    
                        <h2>Create New Workout</h2>
                        <Grid item>
                            <TextField
                            label="Workout Name"
                            onChange={e => setWorkoutName(e.target.value)}
                            />
                        </Grid>
                        <form>
                            <Grid container direction="row">
                                <TextField
                                name="exercise"
                                id="exercise"
                                onChange={handleInputChange}
                                />
                                <TextField
                                name="seconds"
                                type="Number"
                                className="number"
                                id="time"
                                onChange={handleInputChange}
                                />
                                <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={handleFormSubmit} 
                                disabled={!(formObject.exercise && formObject.seconds)}
                                type="submit"
                                >Add Exercise</Button>
                            </Grid>
                        </form>
                        {/* if no list displays h3 else will map through exerciseList */}
                        {exerciseList.length ? (
                        <List>
                            {exerciseList.map((exercise) => {
                                return(
                                    <WorkoutListItem
                                    text={exercise.exercise + " " + exercise.seconds + "s"}
                                    />
                                )
                                }
                            )}
                        </List>
                         ) : (
                             <h3>No Exercises Added Yet</h3>
                         )
                            }
                        
                        <Button //Button for adding the workouts to the db
                        variant="contained"
                        color="primary"
                        onClick={formSubmit}
                        >Save Workout</Button>
                    </Grid>
                </Grid>
            </div>
        )
    
}

export default CreateWorkout;