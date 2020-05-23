import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import from "../SignIn.css";

function SignIn() {
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
          
          <form>
          <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Sign-In</h1>
            <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          variant="outlined"
        /><br /><br />
  <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        /><br /> <br />
<Button  variant="contained" color="primary" >
  Sign-In
</Button>
</form>
</div>
    )
}

export default SignIn