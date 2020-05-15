import React, { useState, useEffect } from "react";
import axios from "axios";
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

function SavedListContainer() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        API.getWorkouts().then((results) => {
            setWorkouts(results.data);
        });
    }, [])

    return(
        <List dense={dense}>
            {console.log(workouts)}
            {workouts.map((workout, i) => {
                return <SavedWorkoutItem title={workout.title} key={i} />
            })}
        </List>
    )
}

export default SavedListContainer;