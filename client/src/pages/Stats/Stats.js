import React, {useState, useEffect} from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import API from '../../utils/API';
import './Stats.css';

const useStyles = makeStyles({
    paperBackground: {
        height:'92vh',
        width: '100vw'
    }
})

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / (60*60));
    const minutes = Math.floor((totalSeconds % (60*60)) / 60);
    const seconds = totalSeconds % 60;

    return hours + " Hours " + minutes + " Minutes " + Math.round(seconds) + " Seconds ";
}

function Stats() {
    const [userData, SetUserData] = useState({});
    const [totalTime, SetTotalTime] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        let time = 0;
        API.getUserData(sessionStorage.getItem("currentUser")).then((data) => {
            SetUserData(data.data[0]);
            for(let workout of data.data[0].completedWorkouts) {
                for(let exercise of workout) {
                    time += exercise.duration
                }
            }
            SetTotalTime(time);
        })
    }, []);

    return (
        <Grid>
            <Paper className={classes.paperBackground}>
                
                <h1>{sessionStorage.currentUser} Stats:</h1><br />
                <div className="stat">
                    <strong>TOTAL WORKOUT TIME:</strong> {formatTime(totalTime)}
                </div>
                <div className="stat">
                    <strong>AVERAGE TIME/WORKOUT:</strong> {userData.completedWorkouts ? formatTime(totalTime / userData.completedWorkouts.length) : ""}
                </div>
                <div className="stat">
                    <strong>WORKOUTS COMPLETED:</strong> {userData.completedWorkouts ? userData.completedWorkouts.length : ""}
                </div>
            </Paper>
        </Grid>
    )
}

export default Stats;