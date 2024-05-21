import PropTypes from 'prop-types';
import React from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Collapse from '@mui/material/Collapse';
import { ListItemButton } from '@mui/material';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'; // project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //
const NavGroup = ({ item }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false); // State to manage sub-menu open/close

  const handleClick = () => {
    setOpen(!open);
  };

  // menu list collapse & items
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return (
          <NavCollapse key={menu.id} menu={menu} level={1}>
            {/* Sub-menu items here */}
          </NavCollapse>
        );
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
      // subheader={
      //   item.title && (
      //     <Typography
      //       variant="caption"
      //       sx={{ ...theme.typography.menuCaption }}
      //       display="block"
      //       gutterBottom
      //     >
      //       {item.title}
      //       {item.caption && (
      //         <Typography
      //           variant="caption"
      //           sx={{ ...theme.typography.subMenuCaption }}
      //           display="block"
      //           gutterBottom
      //         >
      //           {item.caption}
      //         </Typography>
      //       )}
      //     </Typography>
      //   )
      // }
      >
        {item.children?.length > 1 && ( // Check if there are sub-menus
          <ListItemButton onClick={handleClick}>
            <Typography
              variant="body1"
              // sx={{ ...theme.typography.menuCaption }}
            >
              {item.title}
            </Typography>
            {open ? (
              <ArrowDropDownOutlinedIcon fontSize="small" />
            ) : (
              <ArrowDropDownOutlinedIcon fontSize="small" />
            )}
          </ListItemButton>
        )}
        {item.children?.length === 1 && items}{' '}
        {/* Render single item if no sub-menus */}
        {open && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            {items}
          </Collapse>
        )}
      </List>

      {/* group divider */}
      {/* <Divider sx={{ mt: 0.25, mb: 1.25 }} /> */}
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;
