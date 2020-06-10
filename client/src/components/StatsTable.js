import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    header: {
        fontFamily: "Roboto"
    },
    tableStat: {
        fontFamily: "Roboto"
    }
})

export default function StatsTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="stats table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.header}>Total Time</TableCell>
                        <TableCell className={classes.header}>Avg. Time / Workout</TableCell>
                        <TableCell className={classes.header}>Workouts Completed</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.tableStat}>{props.totalTime}</TableCell>
                        <TableCell className={classes.tableStat}>{props.avgTime}</TableCell>
                        <TableCell className={classes.tableStat}>{props.totalCompleted}</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}