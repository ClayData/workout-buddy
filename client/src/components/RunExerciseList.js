import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function RunExerciseList(props) {
    const classes = useStyles();
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
                {props.exercises.map((exercise, i) => (
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
    )
}

export default RunExerciseList;