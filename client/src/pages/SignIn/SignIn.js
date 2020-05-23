import React from 'react';
import LogInForm from '../../components/LogInForm';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import Image from '../../assets/deadlift-guy.jpg'

const useStyles = makeStyles({
    root:{
        display: "flex"
        
    },
    formHolder:{

    },
    image:{
        backgroundImage: `url(${Image})`,
        height: '92vh',
        background: 'linear-gradient(to left bottom, rgb(36,34,195,0.8), rgb(0,3,5,0.8))'
    },
    header:{
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginTop: "1.5rem"
    },
    headerContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

function SignIn() {
    const classes = useStyles()
    const history = useHistory();
    
      
    const onSubmit = data => {
        console.log(data)
        API.postUser(data)
        .then(res => {
            console.log(res);
            if(res.status === 200){
                sessionStorage.setItem("currentUser", data.email)
                history.push("/workouts")
            }
        })
        .catch(err => {
            console.log(err);
            console.log(err.response);
        })
    }

    return(
            <Grid container className={classes.root}>
                <Grid item xs className={classes.formHolder}>
                    <Grid item className={classes.headerContainer}>
                        <Typography className={classes.header}>
                            Log-In / Sign-Up
                        </Typography>
                    </Grid>
                    <LogInForm
                    onSubmit={onSubmit}
                    />
                </Grid>
                <Grid item xs>
                    <Paper className={classes.image} elevation={2}>
                        
                    </Paper>
                </Grid>
                
            </Grid>
            
         
    )
}
export default SignIn