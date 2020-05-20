import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
import { useParams } from "react-router-dom";

function formatTime(seconds) {
    return
}

function RunWorkout() {
    const [workoutTitle, SetWorkoutTitle] = useState(0);
    const [exercises, SetExercises] = useState([]);
    const [bigTime, SetBigTime] = useState(0);
    const [lilTime, SetLilTime] = useState(0);
    const [workoutIndex, setWorkoutIndex] = useState(0);

    let times = []

    function runTimer() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let totalTime = times.reduce(reducer)
        let currentTime = times[workoutIndex];

        let timeInterval = setInterval(function() {
            totalTime--;
            currentTime--;
            console.log(currentTime);
            console.log(totalTime);
            
            if(totalTime === 0){
                clearInterval(timeInterval)
            }
            else if(currentTime === 0) {
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
            const exerciseList = res.data[0].exercises.map((exercise) => {
                return exercise
            });
            SetExercises(exerciseList);
            SetWorkoutTitle(res.data[0].title);
        })
    }, [])

    return(
        <div>
            <h1>{workoutTitle}</h1>
            <ul>
                {exercises.map((exercise, i) => {
                    return <li key={i}>{exercise.exercise}</li>
                })}
            </ul>
            <Button color="secondary" size="large" variant="contained" onClick={runTimer}>Start Workout</Button>
        </div>
    )
}

export default RunWorkout;