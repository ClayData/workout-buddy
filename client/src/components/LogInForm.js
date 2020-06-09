import React from 'react';
import { TextField, Button, Grid }from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import LoginAlert from './LoginAlert';

const useStyles = makeStyles({
    input:{
        marginTop: '1rem'
    },
    btn:{
        marginTop: '1rem'
    },
    errMsg: {
        fontFamily: "Roboto",
    }
})

function LogInForm(props) {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();


    return(
        <Grid style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
           <form onSubmit={handleSubmit(props.onSubmit)}>
                <Grid item direction="column">
                    <TextField label="Username" variant="outlined" name="email" inputRef={register({
                        minLength: 1,
                        maxLength: 15,
                    })} required className={classes.input}/>
                   <p style={classes.errMsg}>{errors.password && "Must be between 1 - 15 characters"}</p>
                </Grid>
                <Grid item direction="column">
                    <TextField label="Password" variant="outlined" name="password" inputRef={register({
                        minLength: 5,
                        maxLength: 15,
                        
                    })} required className={classes.input}/>
                    <p style={classes.errMsg}>{errors.password && "Must be between 5 - 15 characters"}</p>
                </Grid>
                <Grid>
               <Button 
               variant="contained"
               type="submit"
               className={classes.btn}
               color="primary"
               >
                   Submit
               </Button> <br/> <br/>
               <LoginAlert style={props.loginError ? {visibility: "visible"} : {visibility: "hidden"}} />
               </Grid>
           </form> 
        </Grid>
    )
}

export default LogInForm;