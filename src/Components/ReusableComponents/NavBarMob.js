import React, { useState, useEffect, useMediaQuery } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Grid, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import breakpoints from './breakpoints'
import { NavLink } from 'react-router-dom';
const NavBarMob = () => {
  const links = [
    {text: 'Home', link: '/'},
    {text: 'Projects', link: '/projects'},
    {text: 'Facilities', link: '/facilities'},
    {text: '101', link: '/101'},
    {text: 'Sponsorship', link: '/sponsorship'},
    {text: 'Events', link: '/events'},
  ]
  
  const [scrolling, setScrolling] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: scrolling ? '#fff' : 'rgba(255, 255, 255, 0.7)',
        transition: 'background-color 0.3s ease',
        boxShadow: 'none',
        width:'100%',
      }}
    >
      <Grid container spacing={0} sx={{width:'100%',padding:0, height:'60px',}}>
        <Grid item xs={2} margin={'auto'}>
          <img src='./images/logo.png' alt='icrs-logo' style={{width:'32px',height:'32px'}} />
        </Grid>
        <Grid item xs={8} margin={'auto'}>
          <Typography variant="h6" color="black" sx={{flexGrow:1}} align='center' marginX={1}>
            Imperial College Robotics
          </Typography>
        </Grid>
        <Grid item md={2} margin={'auto'}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            sx={{borderRadius:'10%',backgroundColor:'gray',margin:'1px'}}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {links.map((linkItem, index) => (
              <MenuItem key={index} component={NavLink} to={linkItem.link} onClick={handleClose}>
                <ListItemText sx={{color:'black',padding:'5px'}} align='center'>{linkItem.text}</ListItemText>
              </MenuItem>
            ))
            }
          </Menu>
        </Grid>
        
      </Grid>
    </AppBar>
  );
};

export default NavBarMob;
