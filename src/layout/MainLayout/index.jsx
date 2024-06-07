import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// material-ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect } from 'react';
// project imports
import { CssBaseline, styled, useTheme } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import { SET_MENU } from 'store/actions';
import { drawerWidth } from 'store/constant';

// assets
import { IconChevronRight } from '@tabler/icons-react';

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'theme'
})(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px'
  }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  // const empId = '10014';
  // const token =
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE3MTY1Mjg5MzYsImV4cCI6MTcxNjYxNTMzNiwiaWF0IjoxNzE2NTI4OTM2fQ.Ku5x42gHE3JXLqHQVQaV_Qoh-lK2lc5LnBfdshPGPiU';
  const empId = localStorage.getItem('empId');
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // Handle left drawer
  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));

  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };
  // const [empId, setEmpId] = useState('');
  const [token, setToken] = useState('');
  console.log(empId, token);

  useEffect(() => {
    const storedEmpId = localStorage.getItem('empId');
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      setToken(authToken);
      console.log('Retrieved authToken:', authToken); // Log the token for debugging
    } else {
      console.error('No authToken found in localStorage');
    }

    // if (storedEmpId) {
    //   setEmpId(storedEmpId);
    //   console.log('Retrieved empId:', storedEmpId); // Log the empId for debugging
    // } else {
    //   console.error('No empId found in localStorage');
    // }
  }, []);
  console.log(token);
  return (
    <Box
      sx={{
        display: 'flex',
        transform: !matchDownMd ? 'scale(0.8)' : 'none',
        transformOrigin: 'top left',
        width: !matchDownMd ? '125%' : '100%',
        height: !matchDownMd ? '125%' : '100%'
      }}
    >
      <CssBaseline />
      {/* header */}

      <AppBar
        className=".css-h4y409-MuiList-root "
        // enableColorOnDark
        position="absolute"
        color="transparent"
        // To change Appbar Color/
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.error,
          transition: leftDrawerOpened
            ? theme.transitions.create('width')
            : 'none'
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
        empId={empId}
        token={token}
      />
      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        {/* breadcrumb */}
        <Breadcrumbs
          separator={IconChevronRight}
          navigation={navigation}
          icon
          title
          rightAlign
        />
        <Outlet />
      </Main>
      {/* <Customization /> */}
    </Box>
  );
};

export default MainLayout;
