import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

export default function LoginAlert(props) {
    return (
        <MuiAlert elevation={6} variant="filled" {...props} severity="error">
            Incorrect Password
        </MuiAlert>
    );
}