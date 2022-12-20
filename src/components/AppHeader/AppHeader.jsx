import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import './AppHeader.scss'
import {LOGOUT} from "../../actions/users";
import logoIcon from "../../assets/img/logo.png";

function AppHeader() {
  const dispatch = useDispatch();
  let loginUserState = useSelector((state) => state.users.user);

  function exitUser() {
    dispatch({type: LOGOUT, payload: loginUserState});
  }

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='appHeader' position="fixed">
      <Container className='appHeader__container container'>
        <Toolbar disableGutters>
          <div className='logo'>
            <img className='logo__image' src={logoIcon} alt='logo'/>
            <NavLink className='logo__link' to='/'/>
          </div>

          <Box sx={{flexGrow: 1, display: {md: 'flex'}}}>
            {loginUserState &&
            <p>
              <NavLink className='signLink hoverLink' to='/editor'>
                New article
              </NavLink>
            </p>}
          </Box>

          <Box sx={{flexGrow: 0}}>
            {!loginUserState &&
            <ul className='sign'>
              <li>
                <NavLink className='signLink hoverLink' to='/signin'>
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink className='signLink hoverLink' to='/signup'>
                  Sign Up
                </NavLink>
              </li>
            </ul>}

            {loginUserState && <div>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                  <Avatar alt="Remy Sharp" src={loginUserState?.image}/>
                </IconButton>
              </Tooltip>

              <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >

                <MenuItem onClick={handleCloseUserMenu}>
                  <NavLink className='appHeader__menuLink' to={`profiles/${loginUserState?.username}`}>
                    Your profile
                  </NavLink>
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                  <NavLink className='appHeader__menuLink' to='/settings'>
                    Settings
                  </NavLink>
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                  <NavLink className='appHeader__menuLink' to='/' onClick={() => exitUser()}>
                    Exit
                  </NavLink>
                </MenuItem>
              </Menu>
            </div>}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppHeader;