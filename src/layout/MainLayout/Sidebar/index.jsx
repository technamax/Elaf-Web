import PropTypes from 'prop-types';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MenuList from './MenuList';
import Chip from 'ui-component/extended/Chip';
import { drawerWidth } from 'store/constant';

const Sidebar = ({ drawerOpen, drawerToggle, empId, token }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%'
      }}
    >
      <PerfectScrollbar
        component="div"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          paddingLeft: '16px',
          paddingRight: '16px',
          overflow: 'hidden'
        }}
      >
        <MenuList empId={empId} token={token} />
      </PerfectScrollbar>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func
};

export default Sidebar;
