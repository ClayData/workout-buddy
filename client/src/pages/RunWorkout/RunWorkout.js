import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import API from '../../utils/API';
import { useParams } from "react-router-dom";

function RunWorkout() {

    let [bigTime, SetBigTime] = useState(100);
    let [lilTime, SetLilTime] = useState(30);
    let [exerciseTimes, SetExerciseTimes] = useState([]);
    let [runningTimer, SetRunningTimer] = useState(false);

    function bigChanger(){
        SetRunningTimer(true);

        let timeInterval = setInterval(function() {
            
            if(bigTime === 0){
                clearInterval(timeInterval)
            }
            if(lilTime === 0){
                clearInterval(timeInterval)
            }
            SetBigTime(bigTime--)
            SetLilTime(lilTime--)
        }, 1000)
    }

    const {id} = useParams();

    useEffect(() => {
        if(runningTimer === false){
            API.getWorkout(id).then((res) => {
                console.log(res.data)
                //SetLilTime(res);
                //SetBigTime(res);
                //bigChanger();
            })
        }
    })

    return(
        <div>
            <Typography>
                {bigTime}
            </Typography>
            <Typography>
                {lilTime}
            </Typography>
        </div>
    )
}

export default RunWorkout;