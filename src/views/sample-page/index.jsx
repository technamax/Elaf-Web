// material-ui
import Typography from '@mui/material/Typography';

import { Grid, TextField, Button, Select, MenuItem, FormControl } from '@mui/material';


// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Planning Screen">
    {/* <Typography variant="body2">
      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
      minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
      in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
      descent molls anim id est labours.
    </Typography> */}
     <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>Create New Collection</h2>
          </Grid>
          <Grid item xs={3}>
            <TextField label="Collection Order #" fullWidth size="small" />
          </Grid>
          <Grid item xs={9}>
            <TextField label="Collection Name" fullWidth size="small" />
          </Grid>
          <Grid item xs={3}>
            <TextField size="small" type="date" label="Planning Date" name="planningDate" fullWidth focused />
          </Grid>
          <Grid item xs={3}>
            <TextField size="small" type="date" label="Planning Date" name="planningDate" fullWidth focused />
          </Grid>
          <Grid item xs={3}>
            <TextField size="small" type="date" label="Launch Date" name="launchDate" fullWidth focused />
          </Grid>
          <Grid item xs={3}>
            <TextField size="small" type="date" label="Planning Date" name="planningDate" fullWidth focused />
          </Grid>
        </Grid>

  </MainCard>
);

export default SamplePage;
