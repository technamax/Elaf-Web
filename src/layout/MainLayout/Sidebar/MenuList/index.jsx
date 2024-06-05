// material-ui
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import fetchMenuItems from '../../../../api/menuService';
import * as Icons from '@mui/icons-material'; // Import all icons from MUI

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = ({ empId, token }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const data = await fetchMenuItems(empId, token);
        setMenuItems(data.mainMenuModel); // Adjust to use mainMenuModel
        setLoading(false);
        console.log('menuItem', menuItem);
        // console.log('Fetched data:', data.mainMenuModel);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getMenuItems();
  }, [empId, token]);

  if (loading) {
    return (
      <Typography variant="h6" align="center">
        Loading...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        {error}
      </Typography>
    );
  }

  const navItems = menuItems.map((mainMenu) => {
    const subMenuItems = mainMenu.subMenus.map((subMenu) => ({
      id: subMenu.subMenuId,
      title: subMenu.subMenuDesc,
      // title: mainMenu.mainMenuDesc,
      type: 'item',
      url: subMenu.link,
      icon: subMenu.icon
    }));

    const navGroup = {
      id: mainMenu.mainMenuId,
      title: mainMenu.mainMenuDesc,
      type: 'group',
      icon: mainMenu.icon,
      children: subMenuItems
    };

    return <NavGroup key={navGroup.id} item={navGroup} />;
  });

  return <>{navItems}</>;
};

export default MenuList;
