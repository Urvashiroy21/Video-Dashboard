import React from 'react'
import Logo from '../assets/logo.png'
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { selectToggler, toggleDrawer } from '../features/toggleSlice.js';
import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom';

const handleClick = (isShown, dispatch) => {
  dispatch(toggleDrawer(!isShown))
}

const NavBar = () => {
  const isShown = useSelector(selectToggler)
  const dispatch = useDispatch();
  return (
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleClick(isShown, dispatch)}
            sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Toolbar sx={{ px: '1rem', width: '100%' }}>
          <Link to="/" style={{ color: 'inherit', padding: '0.5rem', textDecoration:"none" }}>Home</Link>
          <Link to="/history" style={{ color: 'inherit', padding: '0.5rem', textDecoration:"none"  }}>History</Link>
        </Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar