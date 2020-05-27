import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useHistory } from 'react-router-dom';


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
  
  const history = useHistory();

  return (
    <div>
            <ListItem className={classes.demo} onClick={() => {
                 history.push(`/runworkout/${props.workout._id}`)
            }} data-id={props.workout._id} button>
                <ListItemIcon>    
                    <FitnessCenterIcon />
                </ListItemIcon>
                <ListItemText className={classes.text} >
                     {props.workout.title} 
                </ListItemText>
                <ListItemSecondaryAction onClick={props.onClick}>
                    <IconButton >
                        <DeleteForeverIcon edge="end" aria-label="delete"/>
                    </IconButton>
                </ListItemSecondaryAction>
                
            </ListItem>
    </div>
  )
}

export default SavedWorkoutItem;