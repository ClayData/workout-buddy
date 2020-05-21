import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

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

function Timer(props) {
    const [bigTime, SetBigTime] = useState(["00", "00"]);
    const [lilTime, SetLilTime] = useState(["00", "00"]);
    const [runningTimer, SetRunningTimer] = useState(false);

    let times = props.times;

    function runTimer() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let totalTime = times.reduce(reducer)
        let index = 0;
        let currentTime = times[index];

        let timeInterval = setInterval(function() {
            totalTime--;
            currentTime--;
            console.log(index);
            
            if(totalTime === 0){
                clearInterval(timeInterval)
            }
            else if(currentTime === 0) {
                currentTime = times[index + 1]
                index++;
                props.SetIndex(index);
            }
            
            SetLilTime(formatTime(currentTime));
            SetBigTime(formatTime(totalTime));
        }, 200)
    }

    useEffect(() => {console.log("Rendered!");}, []);

    if(runningTimer === false && props.run === true) {
        SetRunningTimer(true);
        runTimer();
    }

    return (
        <Grid item xs={8}>
            <h1 className="exerciseName">{props.currentExercise}</h1>
            <div className="exerciseTime" style={{fontSize: "16vw"}}>
                {lilTime[0]}:{lilTime[1]}
            </div>
            <div className="exerciseTime" style={{fontSize: "5vw"}}>
                {bigTime[0]}:{bigTime[1]}
            </div>
        </Grid>
    )
}

export default Timer;