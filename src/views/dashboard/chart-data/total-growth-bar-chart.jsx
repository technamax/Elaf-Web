import PropTypes from 'prop-types';
import React, { useEffect, useState, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
// chart data

const status = [
  { value: 'today', label: 'Today' },
  { value: 'month', label: 'This Month' },
  { value: 'year', label: 'This Year' }
];

const TotalGrowthBarChart = ({ isLoading }) => {
  const [value, setValue] = useState('today');
  const [fabricData, setFabricData] = useState([]);

  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const divider = theme.palette.divider;
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  useEffect(() => {
    const fetchFabricData = async () => {
      try {
        const response = await fetch(
          'http://100.42.177.77:8091/api/Dashboard/GetFabricUsedByYear?year=2024'
        );
        const data = await response.json();
        setFabricData(data.result);
      } catch (error) {
        console.error('Error fetching fabric data:', error);
      }
    };

    fetchFabricData();
  }, []);

  const memoizedChartData = useMemo(() => {
    const fabricNames = fabricData.map((item) => item.fabricName);
    const fabricQuantities = fabricData.map((item) => item.fabricQuantity);
    const totalCosts = fabricData.map((item) => item.total);

    return {
      ...chartData,
      options: {
        ...chartData.options,
        colors: ['#a31f23', '#e0e0e0'],
        xaxis: {
          categories: fabricNames,
          labels: {
            style: {
              colors: [
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary
              ]
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: [primary]
            }
          }
        },
        grid: { borderColor: divider },
        tooltip: {
          theme: 'light',
          y: {
            formatter: (value, { dataPointIndex }) =>
              `${value} meters - Rs ${totalCosts[dataPointIndex].toLocaleString()}`
          }
        },
        legend: { labels: { colors: grey500 } }
      },
      series: [
        {
          name: 'Quantity',
          data: fabricQuantities
        }
      ]
    };
  }, [
    fabricData,
    primary200,
    primaryDark,
    secondaryMain,
    secondaryLight,
    primary,
    divider,
    isLoading,
    grey500
  ]);

  useEffect(() => {
    if (!isLoading && fabricData.length) {
      // Initialize or update the ApexCharts instance here
      const chart = new ApexCharts(
        document.getElementById('apex-chart'),
        memoizedChartData.options
      );
      chart.render();
    }
  }, [memoizedChartData, isLoading]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Fabric</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-select-currency"
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                '& .apexcharts-menu.apexcharts-menu-open': {
                  bgcolor: 'background.paper'
                }
              }}
            >
              {/* <div id="apex-chart"> */}
              {/* Render ApexCharts component */}
              <Chart
                options={memoizedChartData.options}
                series={memoizedChartData.series}
                type="bar"
                height={350}
              />
              {/* </div> */}
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
