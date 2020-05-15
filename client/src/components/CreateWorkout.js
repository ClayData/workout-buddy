import React, { useState } from 'react';
import WorkoutListItem from './WorkoutListItem';
import { Grid, TextField, List, Button } from '@material-ui/core';
import API from '../utils/API';

function CreateWorkout() {
    
    const [formObject, setFormObject] = useState({});
    const [exerciseList, setExerciseList] = useState([]);
    const [workoutName, setWorkoutName] = useState();
        


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]:value })
    };

    const addExercise = (event) =>{
        event.preventDefault();
        if (formObject.exercise && formObject.duration) {
            setExerciseList(exerciseList => [...exerciseList, formObject])
        }
        
    }

    const formSubmit = (event) => {
        event.preventDefault();
        API.saveWorkout({
            title: workoutName,
            exercises: exerciseList
        });
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
                            name="duration"
                            type="Number"
                            className="number"
                            id="time"
                            onChange={handleInputChange}
                            />
                            <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={addExercise} 
                            // disabled={!(formObject.exercise && formObject.duration)}
                            type="submit"
                            >Add Exercise</Button>
                        </Grid>
                    </form>
                    {exerciseList.length ? (
                    <List>
                        {exerciseList.map((exercise) => {
                            return(
                                <WorkoutListItem
                                text={exercise.exercise + " " + exercise.duration}
                                />
                            )
                            }
                        )}
                    </List>
                        ) : (
                            <h3>No Exercises Added Yet</h3>
                        )
                        }
                        <Button
                            variant="contained" 
                            color="primary" 
                            onClick={formSubmit} 
                            type="submit"
                            >
                                Save Workout
                        </Button>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default CreateWorkout;