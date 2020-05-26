import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

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

function CompletedListItem(props) {
    const classes = useStyles();
    return (
        <div className={classes.demo}>
            <ListItem>
            <ListItemIcon>
                {props.workout.timesCompleted}
            </ListItemIcon>
            <ListItemIcon>
                <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText
                primary={props.workout.title}
            />
            </ListItem>
            <Divider />
        </div>
    )
}

export default CompletedListItem;