import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import Button from '@material-ui/core/Button';
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
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
        <Button className={classes.demo} onClick={() => {}} data-id={props.workout._id}>
            <ListItem>
                <ListItemIcon>
                    <FitnessCenterIcon />
                </ListItemIcon>

                <ListItemText>
                <Link to={`/runworkout/${props.workout._id}`} className={location.pathname === `/runworkout/${props.workout._id}` ? "nav-link active" : "nav-link"}>
                    {props.workout.title}
                </Link>

                </ListItemText>
            </ListItem>
        </Button>
    </div>
  )
}

export default SavedWorkoutItem;