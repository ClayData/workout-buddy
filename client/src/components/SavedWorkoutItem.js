import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link, useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
        width: '12vw'
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

function SavedWorkoutItem(props) {
  const classes = useStyles();
  const location = useLocation();
  return (
    <div>
            <ListItem className={classes.demo} onClick={() => {}} data-id={props.workout._id} button>
                <ListItemIcon>
                    <Link to={`/runworkout/${props.workout._id}`} 
                    className={location.pathname === `/runworkout/${props.workout._id}` ? "nav-link active" : "nav-link"}
                    style={{"color": "black", "textDecoration": "none"}}
                    >
                        <FitnessCenterIcon />
                    </Link>
                </ListItemIcon>

                <ListItemText className={classes.text} >
                <Link to={`/runworkout/${props.workout._id}`} 
                className={location.pathname === `/runworkout/${props.workout._id}` ? "nav-link active" : "nav-link"}
                style={{"color": "black", "textDecoration": "none"}}
                >
                    {props.workout.title}
                </Link>

                </ListItemText>
                <IconButton onClick={props.onClick}>
                    <DeleteForeverIcon edge="end" aria-label="delete"/>
                </IconButton>
                
            </ListItem>
    </div>
  )
}

export default SavedWorkoutItem;