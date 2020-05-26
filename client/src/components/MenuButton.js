import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useLocation, useHistory } from "react-router-dom";
import API from "../utils/API"
import { PromiseProvider } from 'mongoose';

export default function MenuButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory()
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
                {/* <Link to="/workouts" className={location.pathname === "/" ? "nav-link active" : "nav-link"} >
                    Workouts
                </Link> */}
                Workouts
            </MenuItem>
            <MenuItem onClick={signOut}>
                {/* <Link to="/signin" className={location.pathname === "/signin" ? "nav-link active" : "nav-link"} >
                    Sign Out
                </Link> */}
                Sign Out
            </MenuItem>
            <MenuItem onClick={() => history.push("/stats")}>
                {/* <Link to="/stats" className={location.pathname === "/stats" ? "nav-link active" : "nav-link"} >
                    User Stats
                </Link> */}
                User Stats
            </MenuItem>
            
        </Menu>
    </div>
    )
}

