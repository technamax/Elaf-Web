// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */
import Elogo from 'assets//images/elogocropped.png';
// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return <img src={Elogo} alt="Berry" width="100" />;
};

export default Logo;
