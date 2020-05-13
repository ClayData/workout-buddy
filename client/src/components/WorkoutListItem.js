import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
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

const WorkoutListItem = (props) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);


    return (
        <div className={classes.demo}>
            <List dense={dense}>
              
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              
            </List>
        </div>
    )
}

export default WorkoutListItem;