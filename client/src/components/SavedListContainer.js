import React, { useState, useEffect } from "react";
import { List, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SavedWorkoutItem from "./SavedWorkoutItem";
import API from '../utils/API';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    
}));

function SavedListContainer(props) {
    const [dense] = React.useState(false);
    const [workouts, setWorkouts] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        API.getWorkouts(props.user).then((results) => {
            setWorkouts(results.data);
        });
    }, [props.workoutAdded])

    return(
        
            <List dense={dense} >
                <h2>Saved Workouts</h2> <br />
                {workouts.map((workout, i) => {
                    return (
                        <div>
                    <SavedWorkoutItem workout={workout} key={i} onClick={() => 
                        {
                            if(window.confirm(`Are you sure you want to delete ${workout.title}?`)){
                            API.deleteWorkout(workout._id)
                            props.SetWorkoutAdded(props.workoutAdded - 1)
                            }
                        }
                    }/>
                    <Divider />
                    </div>
                    )
                }
                )}
            </List>
       
    )
}

export default SavedListContainer;