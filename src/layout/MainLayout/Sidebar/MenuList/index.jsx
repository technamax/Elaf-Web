// material-ui
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import fetchMenuItems from '../../../../api/menuService';
import * as Icons from '@mui/icons-material'; // Import all icons from MUI
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = ({ empId, token }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    //   const getMenuItems = async () => {
    //     try {
    //       const data = await fetchMenuItems(empId, token);
    //       const fetchedMenuItems = data.mainMenuModel;

    //       // Check if defaultUrl is null for any menu and navigate to welcome page if so
    //       const shouldNavigateToWelcome = fetchedMenuItems.some(
    //         (menu) => menu.defaultUrl === null
    //       );
    //       if (shouldNavigateToWelcome) {
    //         navigate('/welcome'); // Navigate to welcome page
    //       }
    //       setMenuItems(data.mainMenuModel);
    //       // Adjust to use mainMenuModel
    //       setLoading(false);
    //       console.log('menuItem', menuItem);
    //       // console.log('Fetched data:', data.mainMenuModel);
    //     } catch (err) {
    //       setError(err.message);
    //       setLoading(false);
    //     }
    //   };

    //   getMenuItems();
    // }, [empId, token]);
    const getMenuItems = async () => {
      try {
        const data = await fetchMenuItems(empId, token);
        setMenuItems(data.mainMenuModel);
        setLoading(false);

        // Check if any defaultUrl is null
        const shouldNavigateToWelcome = data.mainMenuModel.some(
          (menu) => menu.defaultUrl === null
        );
        if (shouldNavigateToWelcome) {
          navigate('/welcome');
        }
        // if (!shouldNavigateToWelcome) {
        //   navigate('/dashboard');
        // }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getMenuItems();
  }, [empId, token, navigate]);

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
