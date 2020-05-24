import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
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

function WorkoutListItem(props) {
  const classes = useStyles();
  const [secondary ] = React.useState(false);
  
  return (
    <div className={classes.demo}>
      <ListItem>
        <ListItemIcon>
          <FitnessCenterIcon />
        </ListItemIcon>
        <ListItemText
          primary={props.text}
          secondary={secondary ? 'Secondary text' : null}
        />
      </ListItem>
    </div>
  )
}

export default WorkoutListItem;