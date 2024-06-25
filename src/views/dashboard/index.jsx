import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import Box from '@mui/material/Box';
import { gridSpacing } from 'store/constant';
import DyeingData from './DyeingData';
// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { padding } from '@mui/system';
import EmbroideryData from './EmbrioderyData';
import PrintingData from './PrintingData';
import SchiffliData from './SchiffliData';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>

              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: 203,
                    label: 'Total Income',
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box mb={2}>
              {' '}
              {/* Adjust the value of mb (margin-bottom) as needed */}
              <EmbroideryData isLoading={isLoading} />
            </Box>
            <Box mb={2}>
              {' '}
              {/* Adjust the value of mb (margin-bottom) as needed */}
              <DyeingData isLoading={isLoading} />
            </Box>
            <Box mb={2}>
              {' '}
              {/* Adjust the value of mb (margin-bottom) as needed */}
              <PrintingData isLoading={isLoading} />
            </Box>
            <Box mb={2}>
              {' '}
              {/* Adjust the value of mb (margin-bottom) as needed */}
              <SchiffliData isLoading={isLoading} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
