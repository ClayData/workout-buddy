import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@material-ui/core';

function RunWorkout() {

    const [bigTime, SetBigTime] = useState(100);
    const [lilTime, SetLilTime] = useState(30);
    let changingLilTime = lilTime;
    let changingBigTime = bigTime;

    function bigChanger() {setInterval(function(){
        let changingLilTime = lilTime;
       changingBigTime--;
       
    }, 1000)
}

    function lilChanger() {setInterval(function() {
        changingLilTime--;
        
        

        if(lilTime === 0){
            SetLilTime("")
            clearInterval()
        }

    }, 1000)
}

    useEffect(() => {
        lilChanger();
        bigChanger();
    })


    return(
        <div>
            <Typography>
                {changingBigTime}
            </Typography>
            <Typography>
                {changingLilTime}
            </Typography>
        </div>
    )
}

export default RunWorkout;