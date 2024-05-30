/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
// import MenuCard from './MenuCard';
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import Chip from 'ui-component/extended/Chip';

import { drawerWidth } from 'store/constant';
import { CatchingPokemonSharp } from '@mui/icons-material';

// ==============================|| SIDEBAR DRAWER ||============================== //
const Sidebar = ({ drawerOpen, drawerToggle, window, empId, token }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  console.log(token);
  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          <LogoSection />
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
            paddingLeft: '16px',
            paddingRight: '16px'
          }}
        >
          <MenuList empId={empId} token={token} />
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList empId={empId} token={token} />
        </Box>
      </MobileView>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.white,
            backgroundColor: 'lightgrey',
            // to change sidebar background color
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '84px'
            }
          }
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object,
  empId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired
};

export default Sidebar;
