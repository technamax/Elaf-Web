// // import PropTypes from 'prop-types';
// // import { useTheme } from '@mui/material/styles';
// import * as React from 'react';

// import Box from '@mui/material/Box';
// import LogoSection from '../LogoSection';
// // import NotificationSection from './NotificationSection';
// import ProfileSection from './ProfileSection';
// import Sidebar from '../Sidebar';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import MenuList from '../Sidebar/MenuList';
// import { Divider } from '@mui/material';
// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function Header() {
//   //   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   //   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const empId = '10014'; // Or fetch this dynamically based on logged-in user
//   const token =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE3MTYxODIzODUsImV4cCI6MTcxNjc4NzE4NSwiaWF0IjoxNzE2MTgyMzg1fQ.H5ZS9FG0yZEyTMSkxBB3Qdcq1PYSSOeTpJjv7jvg0Ow'; // Replace this with the actual token from your auth response
//   console.log(token);
//   return (
//     <AppBar position="absolute" sx={{ bgcolor: '#7c7c7c', top: '-27px' }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <LogoSection></LogoSection>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             <Sidebar empId={empId} token={token} />
//             {/* <MenuList empId={empId} token={token} /> */}
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <ProfileSection></ProfileSection>
//           </Box>
//         </Toolbar>

//         <Divider></Divider>
//       </Container>
//       {/* <MenuList empId={empId} token={token} /> */}
//     </AppBar>
//   );
// }
// export default Header;

// {
//   /* <Sidebar empId={empId} token={token} /> */
// }

import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import NotificationSection from './NotificationSection';
import ProfileSection from './ProfileSection';

// assets
import { IconMenu2 } from '@tabler/icons-react';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  // const empId = '10014';
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE3MTYyMDY5NjAsImV4cCI6MTcxNjI5MzM2MCwiaWF0IjoxNzE2MjA2OTYwfQ.mjJ73RGAN9r-jn8tu17XMqsOCwySNAxQ-5dyxcxgYqI';
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '8px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      {/* header search */}
      {/* <SearchSection /> */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      {/* <NotificationSection /> */}
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
