import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";


export default function MenuButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory()
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const signOut = (event) => {
        sessionStorage.setItem("currentUser", "");
        props.SetUser("");
        history.push("/signin")
    }

    return(
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => {setAnchorEl(null);}}
            >
            <MenuItem onClick={() => history.push("/workouts")}>
                Workouts
            </MenuItem>
            <MenuItem onClick={signOut}>
                Sign Out
            </MenuItem>
            <MenuItem onClick={() => history.push("/stats")}>
                User Stats
            </MenuItem>
            
        </Menu>
    </div>
    )
}

