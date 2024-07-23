import React, { useState, useEffect } from 'react';
import {
  MenuItem,
  TextField,
  Grid,
  Card,
  CardHeader,
  Divider,
  Typography
} from '@mui/material';
import {
  useGetCollectionFromPlanningHeaderQuery,
  useGetPrePlanningHeaderByDesignIdQuery,
  useGetFabricFromPrePlanningByBatchNoQuery,
  useGetFabricRequisitionListByBatchNoQuery,
  useGetAdditionalProcessListByBatchNoQuery,
  useGetFabricColorByComponentsBatchNoAndFabricIdQuery
} from 'api/store/Apis/prePlanningHeaderApi';
import { useGetDesignFromPlanningHeaderByCollectionIdQuery } from 'api/store/Apis/prePlanningHeaderApi';
import { useSnackbar } from 'notistack';
import { useUser } from 'context/User';
import axios from 'axios';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import PropTypes from 'prop-types';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import styled from '@emotion/styled';
// project imports
// import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { useGetPlanningDashboardByYearQuery } from '../../api/store/Apis/dashboardApi';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.grey[400]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.grey[400]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130
  }
}));

const Summary = (initialValues) => {
  const { user } = useUser();
  const { enqueueSnackbar } = useSnackbar();
  const [initialData, setInitialData] = useState([]);
  const { data: collectionData } = useGetCollectionFromPlanningHeaderQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const [summaryData, setSummaryData] = useState(null);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    designId: '',
    planningHeaderId: 0,
    batchNo: ''
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setSelectedCollectionId(initialValues.collectionId);
  }, [initialValues]);

  const { data: designData, refetch } =
    useGetDesignFromPlanningHeaderByCollectionIdQuery(selectedCollectionId, {
      skip: !selectedCollectionId // Skip the query if no collection is selected
    });

  const { data: batchData, refetch: refetchBatches } =
    useGetPrePlanningHeaderByDesignIdQuery(formData.designId, {
      skip: !formData.designId // Skip the query if no design is selected
    });

  const [designList, setDesignList] = useState([]);
  const [batchList, setBatchList] = useState([]);
  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    if (collectionData) {
      setCollectionList(collectionData.result);
    }
  }, [collectionData]);

  useEffect(() => {
    if (designData) {
      setDesignList(designData.result);
    }
  }, [designData]);

  useEffect(() => {
    if (batchData) {
      setBatchList(batchData.result);
    }
  }, [batchData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(`handleChange called with name: ${name}, value: ${value}`);

    if (name === 'collectionId') {
      setSelectedCollectionId(value);
      setFormData({
        ...formData,
        collectionId: value,
        designId: '',
        planningHeaderId: 0,
        batchNo: ''
      });
    } else if (name === 'designId') {
      setFormData({
        ...formData,
        designId: value,
        planningHeaderId: 0
      });
    } else if (name === 'batchNo') {
      const selectedBatch = batchList.find((batch) => batch.batchNo === value);
      setFormData({
        ...formData,
        batchNo: value,
        planningHeaderId: selectedBatch ? selectedBatch.planningHeaderId : ''
      });

      if (selectedBatch) {
        fetchSummaryData(selectedBatch.planningHeaderId);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log('Selected collection ID:', selectedCollectionId);
  console.log('Form data:', formData);
  console.log('Design list:', designList);
  console.log('Batch list:', batchList);

  // useEffect(() => {
  //   if (planningHeaderId) {
  //     fetchSummaryData(planningHeaderId);
  //   }
  // }, [planningHeaderId]);

  useEffect(() => {
    console.log('Updated summaryData:', summaryData);
  }, [summaryData]);

  const fetchSummaryData = async (planningHeaderId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://gecxc.com:4041/api/PrePlanning/GetPrePlanningSummaryByBatchId?planningHeaderId=${planningHeaderId}`
      );
      if (response.data.success) {
        console.log('Fetched data:', response.data.result); // Log the fetched data
        setSummaryData(response.data.result);
      } else {
        enqueueSnackbar(response.data.message, { variant: 'error' });
      }
    } catch (error) {
      enqueueSnackbar('Failed to fetch summary data', { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  // const [prePlanning, setPreplanning] = useState(null);
  // useEffect(() => {
  //   if (summaryData && summaryData.result && summaryData.result.length > 0) {
  //     setPreplanning(summaryData.result[0].totalCollection);
  //   }
  // }, [summaryData]);
  return (
    <>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          title="Summary"
          titleTypographyProps={{ style: { color: 'white' } }}
        />
        <Grid
          container
          spacing={1}
          width="inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              label="Select Collection"
              name="collectionId"
              value={selectedCollectionId}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  color: 'black'
                }
              }}
            >
              {collectionList.map((option) => (
                <MenuItem key={option.collectionId} value={option.collectionId}>
                  {option.collectionName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              label="Select Design"
              name="designId"
              value={formData.designId}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  color: 'black'
                }
              }}
            >
              {designList.map((option) => (
                <MenuItem key={option.designId} value={option.designId}>
                  {option.designNo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              select
              label="Batch No."
              name="batchNo"
              value={formData.batchNo}
              onChange={handleChange}
              size="small"
              InputLabelProps={{
                sx: {
                  color: 'black'
                }
              }}
            >
              {batchList.map((option) => (
                <MenuItem key={option.batchNo} value={option.batchNo}>
                  {option.batchNo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Card>

      <Grid item xs={12} md={12} mb={1}></Grid>

      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          title="Summary Details"
          titleTypographyProps={{ style: { color: 'white' } }}
        />
        <Grid
          container
          spacing={1}
          width="inherit"
          sx={{ paddingY: 1, paddingX: 1 }}
        >
          <Grid item xs={12} md={12} paddingTop={1}>
            {/* {isLoading ? (
              <SkeletonEarningCard />
            ) : ( */}
            <MainCard
              border={false}
              content={false}
              sx={{
                bgcolor: 'primary.main',
                color: '#fff',
                overflow: 'hidden',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
                  borderRadius: '50%',
                  top: { xs: -105, sm: -85 },
                  right: { xs: -140, sm: -95 }
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
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
                          Pre Planning
                        </Typography>
                      </Grid>
                      {/* <Grid item>
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
                      </Grid> */}
                    </Grid>
                  </Grid>
                  {summaryData.prePlanningList &&
                    summaryData.prePlanningList.length > 0 && (
                      <Grid item sx={{ mb: 1.25 }}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: 'primary.light'
                          }}
                        >
                          {summaryData.prePlanningList.map((item, index) => (
                            <div key={index}>
                              Design No: {item.designNo}, Components:{' '}
                              {item.componentsCount}, Fabric: {item.fabricCount}
                            </div>
                          ))}
                        </Typography>
                      </Grid>
                    )}
                </Grid>
              </Box>
            </MainCard>
            {/* )} */}
          </Grid>
          <Grid item xs={12} md={6} paddingTop={1}>
            {/* {isLoading ? (
              <SkeletonEarningCard />
            ) : ( */}
            <MainCard
              border={false}
              content={false}
              sx={{
                bgcolor: 'primary.main',
                color: '#fff',
                overflow: 'hidden',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
                  borderRadius: '50%',
                  top: { xs: -105, sm: -85 },
                  right: { xs: -140, sm: -95 }
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
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
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            bgcolor: theme.palette.grey[400],
                            color: 'secondary.dark',
                            mt: 1
                          }}
                        >
                          <i
                            class="bi bi-bag-check-fill
"
                          ></i>
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <Menu
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
                        ></Menu>
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
                          {/* {totalCollection} */}
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
                        color: 'primary.light'
                      }}
                    >
                      Total Collecions
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </MainCard>
            {/* )} */}
          </Grid>
          <Grid item xs={12} md={6} paddingTop={1}>
            {/* {isLoading ? (
              <SkeletonEarningCard />
            ) : ( */}
            <MainCard
              border={false}
              content={false}
              sx={{
                bgcolor: 'primary.main',
                color: '#fff',
                overflow: 'hidden',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
                  borderRadius: '50%',
                  top: { xs: -105, sm: -85 },
                  right: { xs: -140, sm: -95 }
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
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
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            bgcolor: theme.palette.grey[400],
                            color: 'secondary.dark',
                            mt: 1
                          }}
                        >
                          <i
                            class="bi bi-bag-check-fill
"
                          ></i>
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <Menu
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
                        ></Menu>
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
                          {/* {totalCollection} */}
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
                        color: 'primary.light'
                      }}
                    >
                      Total Collecions
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </MainCard>
            {/* )} */}
          </Grid>

          <Grid item xs={12} md={6} paddingTop={1}>
            {/* {isLoading ? (
              <SkeletonEarningCard />
            ) : ( */}
            <MainCard
              border={false}
              content={false}
              sx={{
                bgcolor: 'primary.main',
                color: '#fff',
                overflow: 'hidden',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
                  borderRadius: '50%',
                  top: { xs: -105, sm: -85 },
                  right: { xs: -140, sm: -95 }
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
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
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            bgcolor: theme.palette.grey[400],
                            color: 'secondary.dark',
                            mt: 1
                          }}
                        >
                          <i
                            class="bi bi-bag-check-fill
"
                          ></i>
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <Menu
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
                        ></Menu>
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
                          {/* {totalCollection} */}
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
                        color: 'primary.light'
                      }}
                    >
                      Total Collecions
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </MainCard>
            {/* )} */}
          </Grid>
          <Grid item xs={12} md={6} paddingTop={1}>
            {/* {isLoading ? (
              <SkeletonEarningCard />
            ) : ( */}
            <MainCard
              border={false}
              content={false}
              sx={{
                bgcolor: 'primary.main',
                color: '#fff',
                overflow: 'hidden',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
                  borderRadius: '50%',
                  top: { xs: -105, sm: -85 },
                  right: { xs: -140, sm: -95 }
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
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
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            bgcolor: theme.palette.grey[400],
                            color: 'secondary.dark',
                            mt: 1
                          }}
                        >
                          <i
                            class="bi bi-bag-check-fill
"
                          ></i>
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <Menu
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
                        ></Menu>
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
                          {/* {totalCollection} */}
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
                        color: 'primary.light'
                      }}
                    >
                      Total Collecions
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </MainCard>
            {/* )} */}
          </Grid>
          <Grid item xs={12} md={6} paddingTop={1}>
            {/* {isLoading ? (
              <SkeletonEarningCard />
            ) : ( */}
            <MainCard
              border={false}
              content={false}
              sx={{
                bgcolor: 'primary.main',
                color: '#fff',
                overflow: 'hidden',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
                  borderRadius: '50%',
                  top: { xs: -105, sm: -85 },
                  right: { xs: -140, sm: -95 }
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  width: 210,
                  height: 210,
                  background: theme.palette.grey[400],
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
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            bgcolor: theme.palette.grey[400],
                            color: 'secondary.dark',
                            mt: 1
                          }}
                        >
                          <i
                            class="bi bi-bag-check-fill
"
                          ></i>
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <Menu
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
                        ></Menu>
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
                          {/* {totalCollection} */}
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
                        color: 'primary.light'
                      }}
                    >
                      Total Collecions
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </MainCard>
            {/* )} */}
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Summary;
