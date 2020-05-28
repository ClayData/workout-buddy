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

let timeInterval;
let index = 0;
let totalTime;

function Timer(props) {
    const [bigTime, SetBigTime] = useState(["00:00"]);
    const [lilTime, SetLilTime] = useState(["00:00"]);
    const [runningTimer, SetRunningTimer] = useState(false);
    const [completed, SetCompleted] = useState(false);

    let times = props.times;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    function runTimer(totalTime) {
        let currentTime = times[0];

        SetLilTime(formatTime(currentTime));
        SetBigTime(formatTime(totalTime));

         timeInterval = setInterval(function() {
            totalTime--;
            currentTime--;
            
            if(totalTime === 0){
                index++;
                props.SetIndex(index);
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
                times.shift()
                currentTime = times[0]

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
        totalTime = times.reduce(reducer)
        runTimer(totalTime);
    }
    else if(props.run === false && runningTimer === true){
        SetRunningTimer(false)
        clearInterval(timeInterval)
    }

    return (
        <Grid item xs={6} className="timers">
            <h1 className="exerciseName">{!runningTimer ? props.title : !completed ? props.currentExercise : "Workout Completed!"}</h1>
            <div className="exerciseTime" style={{fontSize: "16vw", fontFamily: 'Roboto'}}>
                {lilTime}
            </div>
            <div className="exerciseTime" style={{fontSize: "5vw", fontFamily: 'Roboto'}}>
                {bigTime}
            </div>
        </Grid>
    )
}

export default Timer;