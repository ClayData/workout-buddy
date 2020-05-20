import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './RunWorkout.css';
import API from '../../utils/API';
import { useParams } from "react-router-dom";

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

function formatTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds % 60;

    if(minutes < 10) {
        minutes = "0" + minutes.toString()
    }
    else {
        minutes = minutes.toString()
    }
    if(seconds < 10) {
        seconds = "0" + seconds.toString()
    }
    else {
        seconds = seconds.toString()
    }

    return [minutes, seconds];
}

function RunWorkout() {
    const [workoutTitle, SetWorkoutTitle] = useState(0);
    const [exercises, SetExercises] = useState([]);
    const [bigTime, SetBigTime] = useState(["00", "00"]);
    const [lilTime, SetLilTime] = useState(["00", "00"]);
    const [workoutIndex, SetWorkoutIndex] = useState(0);

    let times = []

    function runTimer() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let totalTime = times.reduce(reducer)
        let currentTime = times[workoutIndex];

        let timeInterval = setInterval(function() {
            totalTime--;
            currentTime--;
            
            if(totalTime === 0){
                clearInterval(timeInterval)
            }
            else if(currentTime === 0) {
                SetWorkoutIndex(workoutIndex + 1);
                currentTime = times[workoutIndex]
            }
            
            SetLilTime(formatTime(currentTime));
            SetBigTime(formatTime(totalTime));
        }, 100)
    }

    const {id} = useParams();

    useEffect(() => {
        API.getWorkout(id).then((res) => {
            times = res.data[0].exercises.map((exercise) => {
                return exercise.duration
            });
            const exerciseList = res.data[0].exercises.map((exercise) => {
                return exercise
            });
            SetExercises(exerciseList);
            SetWorkoutTitle(res.data[0].title);
        })
    }, [])

    const classes = useStyles();

    return(
        <div>
            <br/>
            <h2>{workoutTitle}</h2>

            <Grid container justify="center" className={classes.root} spacing={2}>
                <Grid item xs={4}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell><strong>Exercise</strong></TableCell>
                            <TableCell align="left"><strong>Time</strong></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {exercises.map((exercise, i) => (
                            <TableRow key={i}>
                            <TableCell> <FitnessCenterIcon/> </TableCell>
                            <TableCell component="th" scope="row">
                                {exercise.exercise}
                            </TableCell>
                            <TableCell align="left">{exercise.duration}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
                <Grid item xs={8}>
                    <div className="exerciseTime" style={{fontSize: "17vw"}}>
                        {lilTime[0]}:{lilTime[1]}
                    </div>
                    <div className="exerciseTime" style={{fontSize: "6vw"}}>
                        {bigTime[0]}:{bigTime[1]}
                    </div>
                </Grid>
            </Grid>
            <br/>
            <Button color="secondary" size="large" variant="contained" onClick={runTimer}>Start Workout</Button>
        </div>
    )
}

export default RunWorkout;