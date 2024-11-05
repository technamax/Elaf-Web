/* eslint-disable prettier/prettier */
import * as React from 'react';

import { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useUser } from '../../../../context/User';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Button, Popover, Grid, TextField, MenuItem } from '@mui/material'; // import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
// import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
// import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios'; // Make sure this line is added

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import Elogo from 'assets/images/ELogo.png';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { SnackbarProvider, useSnackbar } from 'notistack';
import convert from 'convert-units';

// assets
import {
  IconLogout,
  IconSearch,
  IconSettings
  // IconUser
} from '@tabler/icons-react';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = (username) => {
  console.log('ProfileSection rendered'); // Log to check if component is mounting

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [convertAnchorEl, setConvertAnchorEl] = React.useState(null);
  const [lookupDomains, setLookupDomains] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const { data: lookupData, refetch } = useGetLookUpListQuery();
  const [formData, setFormData] = useState({
    lookUpId: '',
    lookUpName: '',
    lookUpDomain: lookupDomains.length > 0 ? lookupDomains[0].lookUpDomain : '', // Set default value
    lookUpCategory: '',
    enabled: '',
    createdOn: new Date().toISOString()
  });
  const [conversionData, setConversionData] = useState({
    fromUnit: 'm',
    toUnit: 'cm',
    inputValue: '',
    outputValue: ''
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleConvertClick = (event) => {
    setConvertAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setConvertAnchorEl(null);
    setConversionData({
      fromUnit: 'm',
      toUnit: 'cm',
      inputValue: '',
      outputValue: ''
    });
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const customization = useSelector((state) => state.customization);
  const navigate = useNavigate();
  console.log(username);
  //   const [sdm, setSdm] = useState(true);
  // const [value, setValue] = useState('');
  //   const [notification, setNotification] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const { user, setUser } = useUser();

  const anchorRef = useRef(null);

  const handleLogout = () => {
    console.log('Logout');
    localStorage.removeItem('authToken');
    localStorage.removeItem('empId');
    localStorage.removeItem('isLoggedIn');
    setUser(null);
    navigate('/'); // Navigate to login page
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (event, index, route = '') => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== '') {
      navigate(route);
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleSave = async () => {
    if (!formData.lookUpDomain || !formData.lookUpName) {
      enqueueSnackbar('Please fill in all required fields.', {
        variant: 'error',
        autoHideDuration: 5000
      });
      return;
    }

    try {
      const response = await axios.get(
        `http://100.42.177.77:86/api/Common/SaveLookUp?lookupDomain=${formData.lookUpDomain}&LookUpName=${formData.lookUpName}&appId=1`
      );

      if (response.data.success) {
        // If save was successful
        enqueueSnackbar(response.data.message || 'Lookup saved successfully!', {
          variant: 'success',
          autoHideDuration: 5000
        });

        // Reset form data
        setFormData({
          lookUpId: '',
          lookUpName: '',
          lookUpDomain: '',
          lookUpCategory: '',
          enabled: '',
          createdOn: new Date().toISOString()
        });

        refetch(); // Refetch lookup data
        return response.data;
      } else {
        // If duplicate lookup name was detected
        enqueueSnackbar(
          response.data.message || 'This lookup name already exists.',
          {
            variant: 'error',
            autoHideDuration: 5000
          }
        );
      }
    } catch (error) {
      // Handle unexpected errors
      enqueueSnackbar('Error saving data. Please try again.', {
        variant: 'error',
        autoHideDuration: 5000
      });
      console.error('Save error:', error); // Log error for debugging
      throw error;
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleConversionChange = (e) => {
    const { name, value } = e.target;
    setConversionData((prevData) => {
      const newData = { ...prevData, [name]: value };
      const direction = name === 'inputValue' ? 'L2R' : 'R2L';

      if (direction === 'L2R') {
        newData.outputValue = convert(value)
          .from(newData.fromUnit)
          .to(newData.toUnit);
      } else {
        newData.inputValue = convert(value)
          .from(newData.toUnit)
          .to(newData.fromUnit);
      }

      return newData;
    });
  };

  useEffect(() => {
    const GetLookUpDomains = async () => {
      try {
        const response = await axios.get(
          `http://100.42.177.77:86/api/Common/GetLookUpDomains?appId=1`
        );
        console.log('Fetched lookup domains:', response.data.result);
        setLookupDomains(response.data.result); // Set the state
      } catch (error) {
        console.error('Error fetching lookup domains:', error);
      }
    };

    GetLookUpDomains();
  }, []);

  // useEffect(() => {
  //   if (lookupData && lookupData.result) {
  //     setLookupDomains(lookupData.result); // Update the state with the result
  //   }
  // }, [lookupData]);

  const open1 = Boolean(anchorEl);
  const convertOpen = Boolean(convertAnchorEl);
  const id = open ? 'simple-popover' : undefined;
  const convertId = convertOpen ? 'convert-popover' : undefined;
  return (
    <>
      {/* left chip */}

      <Button
        aria-describedby={id}
        variant="outlined"
        size="small"
        onClick={handleClick}
        sx={{ marginRight: '8px' }}
      >
        +Lookup
      </Button>
      <Button
        aria-describedby={convertId}
        variant="outlined"
        size="small"
        onClick={handleConvertClick}
      >
        Convertor
      </Button>
      <Popover
        id={convertId}
        open={convertOpen}
        anchorEl={convertAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{
          '.MuiPopover-paper': {
            width: '300px',
            padding: '16px'
          }
        }}
      >
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <TextField
              fullWidth
              select
              label="From"
              size="small"
              name="fromUnit"
              value={conversionData.fromUnit}
              onChange={handleConversionChange}
            >
              {convert()
                .possibilities('length')
                .map((unit) => (
                  <MenuItem key={unit} value={unit}>
                    {unit}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
          <Grid item sm={6}>
            <TextField
              fullWidth
              select
              label="To"
              size="small"
              name="toUnit"
              value={conversionData.toUnit}
              onChange={handleConversionChange}
            >
              {convert()
                .possibilities('length')
                .map((unit) => (
                  <MenuItem key={unit} value={unit}>
                    {unit}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
          <Grid item sm={12}>
            <TextField
              fullWidth
              label={conversionData.fromUnit}
              size="small"
              name="inputValue"
              value={conversionData.inputValue}
              onChange={handleConversionChange}
              type="number"
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              fullWidth
              label={conversionData.toUnit}
              size="small"
              name="outputValue"
              value={conversionData.outputValue}
              onChange={handleConversionChange}
              type="number"
            />
          </Grid>
        </Grid>
      </Popover>
      <Popover
        id="mouse-over-popover"
        open={open1}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{
          '.MuiPopover-paper': {
            width: '300px',
            padding: '16px'
          }
        }}
      >
        <Grid container spacing={3} width="Inherit">
          <Grid item sm={12}>
            <TextField
              fullWidth
              select
              label="Select Lookup"
              size="small"
              value={formData.lookUpDomain}
              name="lookUpDomain"
              onChange={handleChange}
            >
              {/* Conditionally render the MenuItems if lookupDomains is available */}
              {lookupDomains.length > 0 ? (
                lookupDomains.map((domain) => (
                  <MenuItem
                    key={domain.lookUpDomain}
                    value={domain.lookUpDomain}
                  >
                    {domain.lookUpDomain}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No domains available</MenuItem> // Show a fallback message if no data
              )}
            </TextField>
          </Grid>
          <Grid item sm={12}>
            <TextField
              fullWidth
              label="Add Lookup Description"
              value={formData.lookUpName}
              onChange={handleChange}
              name="lookUpName"
              size="small"
            />
          </Grid>
          <Grid item sm={3} textAlign="right">
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Popover>
      {/* right chip */}
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary.light,
          // backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            // color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            src={Elogo}
            sx={{
              ...theme.typography.mediumAvatar,
              backgroundColor: 'white',
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            // color="inherit"
          />
        }
        label={
          <IconSettings
            stroke={1.5}
            size="1.5rem"
            color={theme.palette.primary.main}
          />
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        // color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <Box sx={{ p: 2, pb: 0 }}>
                    <Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="h4">Good Morning,</Typography>
                        <Typography
                          component="span"
                          variant="h4"
                          sx={{ fontWeight: 400 }}
                        >
                          {/* Elaf Develop */}
                          {user.firstName}
                        </Typography>
                      </Stack>
                      {/* <Typography variant="subtitle2">Project Admin</Typography> */}
                    </Stack>

                    <Divider />
                  </Box>
                  <PerfectScrollbar
                    style={{
                      height: '100%',
                      maxHeight: 'calc(100vh - 250px)',
                      overflowX: 'hidden'
                    }}
                  >
                    <Box sx={{ p: 2, pt: 0 }}>
                      {/* <Divider /> */}

                      <List
                        component="nav"
                        sx={{
                          width: '100%',
                          maxWidth: 350,
                          minWidth: 300,
                          // backgroundColor: theme.palette.background.paper,
                          borderRadius: '10px',
                          [theme.breakpoints.down('md')]: {
                            minWidth: '100%'
                          },
                          '& .MuiListItemButton-root': {
                            mt: 0.5
                          }
                        }}
                      >
                        <ListItemButton
                          sx={{
                            borderRadius: `${customization.borderRadius}px`
                          }}
                          selected={selectedIndex === 0}
                          onClick={(event) =>
                            handleListItemClick(event, 0, '#')
                          }
                        >
                          <ListItemIcon>
                            <IconSettings stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">
                                Account Settings
                              </Typography>
                            }
                          />
                        </ListItemButton>

                        <ListItemButton
                          sx={{
                            borderRadius: `${customization.borderRadius}px`
                          }}
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">Logout</Typography>
                            }
                          />
                        </ListItemButton>
                      </List>
                    </Box>
                  </PerfectScrollbar>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
