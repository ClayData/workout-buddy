import React, { useContext } from 'react';
import LogInForm from '../../components/LogInForm';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import UserContext  from '../../utils/UserContext';
import API from '../../utils/API';


const useStyles = makeStyles({
    root:{
        display: "flex"
        
    },
    formHolder:{

    },
    image:{

    },
    header:{
        fontSize: "2.5rem",
    }
})

function SignIn() {
    const classes = useStyles()
    const history = useHistory();
    const {user, setUser} = useContext(UserContext)
      
    const onSubmit = data => {
        console.log(data)
        API.postUser(data)
        .then(res => {
            console.log(res);
            if(res.status === 200){
            setUser({
                userName: data.email})
                
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
                    <Typography className={classes.header}>
                        Log-In / Sign-Up
                    </Typography>
                    <LogInForm
                    onSubmit={onSubmit}
                    />
                </Grid>
                <Grid item xs>
                    <Paper className={classes.image}></Paper>
                </Grid>
                
            </Grid>
            
         
    )
}
export default SignIn