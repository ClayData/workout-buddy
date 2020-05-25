import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useLocation } from "react-router-dom";
import API from "../utils/API"

export default function MenuButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const location = useLocation();
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    // const handleClose = () => {
    //   setAnchorEl(null);
    //   API.signOut()
    // };

    const signOut = (event) => {
        sessionStorage.setItem("currentUser", "");
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
            <MenuItem>
                <Link to="/workouts" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Workouts
                </Link>
            </MenuItem>
            <MenuItem onClick={signOut}>
                <Link to="/signin" className={location.pathname === "/signin" ? "nav-link active" : "nav-link"}>
                    Sign Out
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/runworkout" className={location.pathname === "/runworkout" ? "nav-link active" : "nav-link"}>
                    Run Workout
                </Link>
            </MenuItem>
            
        </Menu>
    </div>
    )
}

