import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { IconButton, Button } from '@material-ui/core';

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

    return minutes + ":" + seconds;
}

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
    actionBtn: {
        maxWidth: '8vw',
        marginBottom: '1vh'
    },
    btn: {
        maxWidth: '12vw',
        marginBottom: '1vh'
    }
}));

function RunExerciseList(props) {
    const classes = useStyles();
    const history = useHistory();

    let totalTime = 0;
    for(let exercise of props.exercises) {
        totalTime += exercise.duration;
    }
    return(
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
                {props.exercises.map((exercise, i) => {
                    if(i >= props.index) {
                        return (
                            <TableRow key={i} style={i === props.index ? {backgroundColor: "lightgreen"} : {backgroundColor: ""}}>
                                <TableCell> <FitnessCenterIcon/> </TableCell>
                                <TableCell component="th" scope="row">
                                    {exercise.exercise}
                                </TableCell>
                                <TableCell align="left">{formatTime(exercise.duration)}</TableCell>
                            </TableRow>
                        )
                    }
                })}
                <TableRow key="total">
                    <TableCell></TableCell>
                    <TableCell component="th" scope="row">
                        <strong>Total Time</strong>
                    </TableCell>
                    <TableCell><strong>{formatTime(totalTime)}</strong></TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <Grid container direction="column">
            <Grid container direction="row">
                <IconButton className={classes.btn} color="warning" size="medium" variant="contained" onClick={props.handleClick}>
                    <PlayCircleFilledWhiteIcon fontSize="large"></PlayCircleFilledWhiteIcon>
                </IconButton>
                <IconButton className={classes.btn} color="warning" size="medium" variant="contained" onClick={props.onClick}>
                    <PauseCircleFilledIcon fontSize="large"></PauseCircleFilledIcon>
                </IconButton>
            </Grid>
            <Grid>    
                <Button className={classes.btn} color="secondary" size="medium" variant="contained" onClick={() => {
                   
                    history.push("/workouts")
                }}>Back To Workouts</Button>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default RunExerciseList;