import React, {useState, useEffect} from 'react';
import { Grid, Paper } from '@material-ui/core';
import API from '../../utils/API';
import './Stats.css';

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / (60*60));
    const minutes = Math.floor((totalSeconds % (60*60)) / 60);
    const seconds = totalSeconds % 60;

    return hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";
}

function Stats() {
    const [userData, SetUserData] = useState({});
    const [totalTime, SetTotalTime] = useState(0);

    useEffect(() => {
        let time = 0;
        API.getUserData(sessionStorage.getItem("currentUser")).then((data) => {
            SetUserData(data.data[0]);
            data.data[0].completedWorkouts.map((workout) => {
                workout.map((exercise) => {
                    time += exercise.duration
                })
            });
            SetTotalTime(time);
        })
    }, []);

    return (
        <div>
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
        </div>
    )
}

export default Stats;