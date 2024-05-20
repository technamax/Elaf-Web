// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
import * as React from 'react';

import Box from '@mui/material/Box';
import LogoSection from '../LogoSection';
// import NotificationSection from './NotificationSection';
import ProfileSection from './ProfileSection';
import Sidebar from '../Sidebar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MenuList from '../Sidebar/MenuList';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  //   const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const empId = '10014'; // Or fetch this dynamically based on logged-in user
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE3MTYxODIzODUsImV4cCI6MTcxNjc4NzE4NSwiaWF0IjoxNzE2MTgyMzg1fQ.H5ZS9FG0yZEyTMSkxBB3Qdcq1PYSSOeTpJjv7jvg0Ow'; // Replace this with the actual token from your auth response
  console.log(token);
  return (
    <AppBar position="fixed" sx={{ bgcolor: '#7c7c7c', top: '-15px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoSection></LogoSection>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* <Sidebar empId={empId} token={token} /> */}
            <MenuList empId={empId} token={token} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ProfileSection></ProfileSection>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
