import React, { useState, useEffect } from "react";
import { List } from '@material-ui/core';
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
    const [dense, setDense] = React.useState(false);
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
                    return <SavedWorkoutItem workout={workout} key={i} />
                })}
            </List>
       
    )
}

export default SavedListContainer;