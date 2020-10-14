import React, { useState } from 'react'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import { useDispatch} from 'react-redux'
//import {reset} from './store/actions/basicAction'
//import '../static/css/dashboard.scss'

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    'root':{
      backgroundColor: 'white',
      color:'darkgray',
      '&:focus': {
        backgroundColor: 'white',
        color:'darkgray'
      }
    }
  }))(MenuItem);

function sidebar(props) {
  const avatar = require("../public/avatar.png");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear();
    //dispatch(reset);
    alert('you have been logged out');
    location.replace('/');
  }


  return (
    <div className="col-12 layer">
      <div className="profile-pic">
        <Link href="#"><a onClick={handleClick} aria-haspopup="true" aria-controls="customized-menu"><img className="profile" src={avatar} alt='profile'></img></a></Link>
        {/* <a role='button' className="collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">username<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                <div className="collapse bg-white" id="collapseOne" aria-labelledby="headingOne">
                    <h5 className="collapse-header">Profile</h5>
                    <h5 className="collapse-header" onClick={logout}>logout</h5>
                </div> */}
        <div>
          <a
            className="collapsed"
            role='button'
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            username
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
          </a>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <StyledMenuItem>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </StyledMenuItem>
            <StyledMenuItem onClick={logout}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
      </div>
      <hr className="sidebar-divider"></hr>
      {props.children}
    </div>
  )
}

export default sidebar
