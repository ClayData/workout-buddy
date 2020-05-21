import React, { useState, useContext } from 'react';
import LogInForm from '../../components/LogInForm';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './SignIn.css';
import UserContext  from '../../utils/UserContext';
import API from '../../utils/API';

const useStyles = makeStyles({
    root:{
        display: "flex"
    }
})

function SignIn() {
    const classes = useStyles()

    const {user, setUser} = useContext(UserContext)
      
    const onSubmit = data => {
        console.log(data)
        API.postUser(data)
        .then(res => {
            console.log(res);
            if(res.status === 200){
            setUser({
                userName: data.email})
            
        }
        })
        .catch(err => {
            console.log(err);
            console.log(err.response);
        })
    }

    const onClick = () => {
        console.log(user.userName)
    }

    return(
        
            <Grid container className={classes.root}>
                <Grid item xs>
                    <LogInForm
                    onSubmit={onSubmit}
                    />
                </Grid>
                <Grid item xs>
                    {/* <Paper 
                    className='image'
                    /> */}
                    <button onClick={onClick}>
                        Clicky
                    </button>
                </Grid>
            </Grid>
         
    )
}
export default SignIn