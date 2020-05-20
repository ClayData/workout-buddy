import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import API from '../../utils/API';
import { useParams } from "react-router-dom";

function RunWorkout() {
    const [bigTime, SetBigTime] = useState(0);
    const [lilTime, SetLilTime] = useState(0);
    const [workoutIndex, setWorkoutIndex] = useState(0);

    let times = []
    let totalTime;
    let currentTime;

    function runTimer(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        totalTime = times.reduce(reducer)
        currentTime = times[workoutIndex];

        let timeInterval = setInterval(function() {
            totalTime--;
            currentTime--;
            console.log(currentTime);
            
            if(totalTime === 0){
                clearInterval(timeInterval)
            }
            else if(currentTime <= 0) {
                setWorkoutIndex(workoutIndex + 1);
                currentTime = times[workoutIndex]
            }
            
            SetLilTime(currentTime);
            SetBigTime(totalTime);
        }, 100)
    }

    const {id} = useParams();

    useEffect(() => {
        API.getWorkout(id).then((res) => {
            times = res.data[0].exercises.map((exercise) => {
                return exercise.duration
            });
        })
    }, [])

    return(
        <div>
            <Typography>
                {lilTime}
            </Typography>
            <Typography>
                {bigTime}
            </Typography>
            <button onClick={runTimer}>Start</button>
        </div>
    )
}

export default RunWorkout;