import React, { useState, useEffect, useContext } from "react";
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SavedWorkoutItem from "./SavedWorkoutItem";
import API from '../utils/API';
import UserContext from '../utils/UserContext';

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
    const [dense, setDense] = React.useState(false);
    const [workouts, setWorkouts] = useState([]);

    const { user } = useContext(UserContext);
    const classes = useStyles();

    useEffect(() => {
        API.getWorkouts(user.userName).then((results) => {
            setWorkouts(results.data);
        });
    }, [])

    return(
        <List dense={dense}>
            {workouts.map((workout, i) => {
                return <SavedWorkoutItem workout={workout} key={i} />
            })}
        </List>
    )
}

export default SavedListContainer;