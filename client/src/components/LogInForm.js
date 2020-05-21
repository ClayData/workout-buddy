import React, { useState } from 'react';
import { TextField, Button, Grid }from '@material-ui/core/';

import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

function LogInForm(props) {
    const { register, handleSubmit } = useForm();

    

    return(
        <Grid style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
           <form onSubmit={handleSubmit(props.onSubmit)}>
                <Grid item>
                    <TextField label="Email" variant="outlined" name="email" inputRef={register} required/>
                </Grid>
                <Grid item>
                    <TextField label="Password" variant="outlined" name="password" inputRef={register} required/>
                </Grid>
                <Grid>
               <Button 
               variant="contained"
               type="submit"
               >
                   Submit
               </Button>
               </Grid>
           </form> 
          
        </Grid>
    )
}

export default LogInForm;