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
    }
})

function LogInForm(props) {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();


    return(
        <Grid style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
           <form onSubmit={handleSubmit(props.onSubmit)}>
                <Grid item>
                    <TextField label="Username" variant="outlined" name="email" inputRef={register} required className={classes.input}/>
                </Grid>
                <Grid item>
                    <TextField label="Password" variant="outlined" name="password" inputRef={register} required className={classes.input}/>
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