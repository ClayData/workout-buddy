import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import Timer from '../../components/Timer';
import RunExerciseList from '../../components/RunExerciseList';
import API from '../../utils/API';
import './RunWorkout.css';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 200,
    },
    root: {
        flexGrow: 1,
      },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    
}));

function RunWorkout() {
    const [workoutIndex, SetWorkoutIndex] = useState(0);
    const [times, SetTimes] = useState([]);
    const [workoutTitle, SetWorkoutTitle] = useState("");
    const [exercises, SetExercises] = useState([]);
    const [runWorkout, SetRunWorkout] = useState(false);
   

    function handleClick(event) {
        if(runWorkout === false) {
            SetRunWorkout(true);
            //event.target.value = "Stop Workout"
        }
        else {
            SetRunWorkout(false);
            //event.target.value = "Start Workout"
        }
    }

    const {id} = useParams();

    useEffect(() => {
        API.getWorkout(id).then((res) => {
            SetTimes(res.data[0].exercises.map((exercise) => {
                return exercise.duration
            }));
            SetExercises(res.data[0].exercises.map((exercise) => {
                return exercise
            }));
            SetWorkoutTitle(res.data[0].title);
        })
    }, []);

    const classes = useStyles();

    return (
        <div className="runWorkout">
            <br/>
            <h2>{workoutTitle}</h2>
            <Grid container justify="center" className={classes.root} spacing={1}>
                <RunExerciseList exercises={exercises} index={workoutIndex} handleClick={handleClick}/>
                <Timer times={times} index={workoutIndex} title={workoutTitle} id={id} SetIndex={SetWorkoutIndex} currentExercise={exercises[workoutIndex] ? exercises[workoutIndex].exercise : ""} run={runWorkout} />
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </div>
    )
}

export default RunWorkout;