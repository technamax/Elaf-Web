import { useState, useEffect, useCallback } from 'react';

import axios from 'axios';
import {
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider,
  Grid,
  TextField,
  Box,
  Tab,
  Card,
  CardHeader,
  IconButton
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const Summary = () => {
  return (
    <>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          //   avatar={<Avatar src={roller} sx={{ background: 'transparent' }} />}
          title="View Summary "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
      </Card>

      <Grid item xs={12} md={12}>
        <Divider
          color="#921e22"
          sx={{ height: 2, width: '100%', mt: 4, mb: 4 }}
        />{' '}
      </Grid>

      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          //   avatar={<VisibilityOutlinedIcon />}
          title="View Dyeing "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>

        <Grid
          container
          spacing={2}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={12} paddingTop={1}>
            {/* <ReuseableDataGrid
                  iColumns={columns}
                  initialRows={rows}
                  setInitialData={setInitialData}
                  deleteApi={deleteApi}
                  deleteBy="dpId"
                  refetch={refetchDyeingPrintingData}
                  setAccordionExpanded={setAccordionExpanded}
                  fileName="Dyeing&PrintingList"
                  isLoading={isLoading}
                /> */}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Summary;
