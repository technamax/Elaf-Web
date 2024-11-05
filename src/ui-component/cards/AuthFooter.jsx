// material-ui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" target="_blank" underline="hover">
      Elaf Premium
    </Typography>
    <Typography
      variant="subtitle2"
      component={Link}
      href="https://technamax.com"
      target="_blank"
      underline="hover"
    >
      &copy; Powered By TECHNAMAX
    </Typography>
  </Stack>
);

export default AuthFooter;
