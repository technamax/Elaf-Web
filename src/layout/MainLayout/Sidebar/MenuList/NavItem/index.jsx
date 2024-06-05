import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MENU_OPEN, SET_MENU } from 'store/actions';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavItem = ({ item, level }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const customization = useSelector((state) => state.customization);
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  const itemIcon = item.icon ? (
    <span
      dangerouslySetInnerHTML={{ __html: item.icon }}
      style={{ display: 'flex', alignItems: 'center' }}
    />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width:
          customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
        height:
          customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    ))
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch({ type: MENU_OPEN, id });
    if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  };

  useEffect(() => {
    if (pathname.includes(item.url)) {
      dispatch({ type: MENU_OPEN, id: item.id });
    }
  }, [pathname, item.id, item.url, dispatch]);

  return (
    <ListItemButton
      component={forwardRef((props, ref) => (
        <Link ref={ref} {...props} to={item.url} />
      ))}
      sx={{
        borderRadius: `${customization.borderRadius}px`,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`
      }}
      selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
      onClick={() => itemHandler(item.id)}
    >
      {item.icon && (
        <ListItemIcon sx={{ my: 'auto', minWidth: !item.icon ? 18 : 36 }}>
          <i class={item.icon}></i>
        </ListItemIcon>
      )}

      <ListItemText
        primary={
          <Typography
            variant={
              customization.isOpen.findIndex((id) => id === item.id) > -1
                ? 'h5'
                : 'body1'
            }
            color="inherit"
          >
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.subMenuCaption }}
              display="block"
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired
};

export default NavItem;
