import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import AnimateButton from 'ui-component/extended/AnimateButton';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useUser } from 'context/User';

import loading from '../../../../assets/images/eloading.gif';
const AuthLogin = ({ ...others }) => {
  const { setUser } = useUser();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [checked, setChecked] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook
  const { enqueueSnackbar } = useSnackbar();

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form with values:', formValues);

    try {
      const response = await axios.post(
        'http://100.42.177.77:83/api/Users/authenticate',
        {
          username: formValues.username,
          password: formValues.password
        }
      );
      enqueueSnackbar('Login successful!', {
        variant: 'success',
        autoHideDuration: 5000
      });
      console.log('Full response:', response);

      if (response.data) {
        const { token, empId } = response.data; // Destructure token and empId

        // Save token and empId to localStorage
        localStorage.setItem('authToken', token);
        localStorage.setItem('empId', empId);

        // console.log('Stored empId:', empId); // Log stored empId
        // console.log('Stored token:', token); // Log stored token
        setUser(response.data);

        navigate('/dashboard');
        console.log('Authentication successful', response.data);
      } else {
        throw new Error('No data in response');
      }
    } catch (error) {
      console.error('Authentication failed', error.response.data);
      setError('Authentication failed. Please check your credentials.');
      enqueueSnackbar('Login Failed!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        marginTop: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          //   size="small"
          value={formValues.username}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          id="password"
          autoComplete="current-password"
          //   size="small"
          value={formValues.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {/* {error && <FormHelperText error>{error}</FormHelperText>} */}
        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button
              sx={{ borderRadius: 10 }}
              disableElevation
              fullWidth
              type="submit"
              variant="contained"
              color="error"
            >
              Sign in
            </Button>
          </AnimateButton>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLogin;
