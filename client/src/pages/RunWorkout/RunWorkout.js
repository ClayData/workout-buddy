import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import API from '../../utils/API';
import { useParams } from "react-router-dom";

function RunWorkout() {
    const [bigTime, SetBigTime] = useState();
    const [lilTime, SetLilTime] = useState();

    let times = []
    let totalTime;
    let currentTime;
    let index = 0;

    function runTimer(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        totalTime = times.reduce(reducer)
        currentTime = times[index];

        let timeInterval = setInterval(function() {
            totalTime--;
            currentTime--;
            console.log(currentTime);
            
            if(totalTime === 0){
                clearInterval(timeInterval)
            }
            else if(currentTime <= 0) {
                console.log("jsdhfkjdsh")
                index ++;
                currentTime = times[index]
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