import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

import ChartDataMonth from './chart-data/total-order-month-line-chart';
import ChartDataYear from './chart-data/total-order-year-line-chart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// assets
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useGetPlanningDashboardByYearQuery } from '../../api/store/Apis/dashboardApi';

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading }) => {
  const theme = useTheme();
  const { data: dashboardData } = useGetPlanningDashboardByYearQuery();
  const [noOfDesign, setNoOfDesign] = useState(null);
  useEffect(() => {
    if (dashboardData) {
      setNoOfDesign(dashboardData.result[0].noOfDesign);
    }
  }, [dashboardData]);
  const [timeValue, setTimeValue] = React.useState(false);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };
  const [totalFabricInMeter, setTotalFabricInMeter] = useState(null);
  useEffect(() => {
    if (dashboardData) {
      setTotalFabricInMeter(dashboardData.result[0].totalFabricInMeter);
    }
  }, [dashboardData]);
  const formattedTotalFabricInMeter = totalFabricInMeter
    ? new Intl.NumberFormat().format(totalFabricInMeter)
    : null;

  const [costOfFabric, setCostOfFabric] = useState(null);
  useEffect(() => {
    if (dashboardData) {
      setCostOfFabric(dashboardData.result[0].costOfFabric);
    }
  }, [dashboardData]);
  const formattedcostOfFabric = costOfFabric
    ? new Intl.NumberFormat().format(costOfFabric)
    : null;

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          sx={{
            bgcolor: 'secondary.dark',
            color: '#fff',
            overflow: 'hidden',
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: 210,
              height: 210,
              background: theme.palette.secondary[800],
              borderRadius: '50%',
              top: { xs: -105, sm: -85 },
              right: { xs: -140, sm: -95 }
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              width: 210,
              height: 210,
              background: theme.palette.secondary[800],
              borderRadius: '50%',
              top: { xs: -155, sm: -125 },
              right: { xs: -70, sm: -15 },
              opacity: 0.5
            }
          }}
        >
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  {/* <Grid item>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...theme.typography.commonAvatar,
                          ...theme.typography.largeAvatar,
                          bgcolor: 'secondary.800',
                          mt: 1
                        }}
                      >
                        <img src={EarningIcon} alt="Notification" />
                      </Avatar>
                    </Grid> */}
                  <Grid item>
                    {/* <Avatar
                        variant="rounded"
                        sx={{
                          ...theme.typography.commonAvatar,
                          ...theme.typography.mediumAvatar,
                          bgcolor: 'secondary.dark',
                          color: 'secondary.200',
                          zIndex: 1
                        }}
                        aria-controls="menu-earning-card"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreHorizIcon fontSize="inherit" />
                      </Avatar> */}
                    {/* <Menu
                        id="menu-earning-card"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        variant="selectedMenu"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right'
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right'
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          <GetAppTwoToneIcon sx={{ mr: 1.75 }} /> Import Card
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <FileCopyTwoToneIcon sx={{ mr: 1.75 }} /> Copy Data
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <PictureAsPdfTwoToneIcon sx={{ mr: 1.75 }} /> Export
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <ArchiveTwoToneIcon sx={{ mr: 1.75 }} /> Archive File
                        </MenuItem>
                      </Menu> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: '2.125rem',
                        fontWeight: 500,
                        mr: 1,
                        mt: 1.75,
                        mb: 0.75
                      }}
                    >
                      {noOfDesign}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        cursor: 'pointer',
                        ...theme.typography.smallAvatar,
                        bgcolor: 'secondary.200',
                        color: 'secondary.dark'
                      }}
                    >
                      <ArrowUpwardIcon
                        fontSize="inherit"
                        sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }}
                      />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'secondary.200'
                  }}
                >
                  Total Design
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      )}
    </>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalOrderLineChartCard;
