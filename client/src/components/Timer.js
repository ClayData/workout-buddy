import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import API from '../utils/API';

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

function Timer(props) {
    const [bigTime, SetBigTime] = useState(["00:00"]);
    const [lilTime, SetLilTime] = useState(["00:00"]);
    const [runningTimer, SetRunningTimer] = useState(false);
    const [completed, SetCompleted] = useState(false);

    let times = props.times;

    function runTimer() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let totalTime = times.reduce(reducer)
        let index = 0;
        let currentTime = times[index];

        SetLilTime(formatTime(currentTime));
        SetBigTime(formatTime(totalTime));

        let timeInterval = setInterval(function() {
            totalTime--;
            currentTime--;
            
            if(totalTime === 0){
                SetCompleted(true);

                //Mark workout as completed back in DB and increment times completed
                API.setCompleted(props.id)
                .then((res) => {
                    API.incrementCompleted(props.id, res.data.timesCompleted + 1);
                });

                //Write workout into stats
                API.getWorkout(props.id).then((workout) => {
                    API.writeToStats(sessionStorage.getItem("currentUser"), [workout.data[0].exercises]);
                })

                clearInterval(timeInterval)
            }
            else if(currentTime === 0) {
                currentTime = times[index + 1]
                index++;
                props.SetIndex(index);
            }
            
            SetLilTime(formatTime(currentTime));
            SetBigTime(formatTime(totalTime));
        }, 100)
    }

    useEffect(() => {console.log("Rendered!");}, []);

    if(runningTimer === false && props.run === true) {
        SetRunningTimer(true);
        runTimer();
    }

    return (
        <Grid item xs={6} className="timers">
            <h1 className="exerciseName">{!runningTimer ? props.title : !completed ? props.currentExercise : "Workout Completed!"}</h1>
            <div className="exerciseTime" style={{fontSize: "16vw"}}>
                {lilTime}
            </div>
            <div className="exerciseTime" style={{fontSize: "5vw"}}>
                {bigTime}
            </div>
        </Grid>
    )
}

export default Timer;