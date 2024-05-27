import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
import { useGetDesignListQuery } from 'api/store/Apis/designApi';
import EditAbleDataGrid from 'components/EditAbleDataGrid';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { GetCollectionList } from 'api/apis';

// ==============================|| SAMPLE PAGE ||============================== //

const PrePlanningCreation = () => {
  const { data, error, isLoading, refetch } = useGetCollectionListQuery();
  const { data: collectionData } = useGetCollectionListQuery();
  const { data: designData } = useGetDesignListQuery();
  const [loading, setLoading] = useState(true);

  const collectionList = collectionData || [];
  const designList = designData || [];
  const [formData, setFormData] = useState({
    collectionName: '',
    collectionId: '',
    plannedCollectionId: '',
    plannedDesignedId: '',

    designId: '',
    poPcs: '',
    batchNo: '',
    createdBy: 0,
    createdOn: new Date().toISOString()
  });
  const [designOptions, setDesignOptions] = useState([]);

  //   const [collectionList, setCollectionList] = useState([]);
  const [plannedCollection, setPlannedCollection] = useState([]);
  //   const [collectionListPassed, setCollectionListPassed] = useState([]);
  const [plannedDesign, setPlannedDesign] = useState([]);
  const [gridData, setGridData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://gecxc.com:4041/api/PrePlanning/GetPlanningHeaderListByDesignId?designId=${formData.plannedDesignedId}`
      );
      console.log('DataGridResponse', response);
      const rowsWithId = response.data.map((row, index) => ({
        ...row,
        id: index + 1
      }));

      setGridData(rowsWithId);
    } catch (error) {
      console.error('Error fetching data:', error);
      setGridData([]); // Ensure gridData is an array even in case of error
    }
  }, [formData.plannedDesignedId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const initialRows = setGridData;

  const columns = [
    {
      field: 'collectionName',
      headerName: 'Collection',
      editable: true,
      flex: 2
    },
    {
      field: 'batchNo',
      headerName: 'Batch#',
      flex: 1,
      editable: true
    },
    {
      field: 'designNo',
      headerName: 'Design Number',
      flex: 1,
      editable: true
    },
    {
      field: 'Status',
      headerName: 'Status',
      flex: 1,
      editable: true
    }
  ];

  const volume = [
    { value: 'Volume 1', label: 'Volume 1' },
    { value: 'Volume 2', label: 'Volume 2' },
    { value: 'Volume 3', label: 'Volume 3' },
    { value: 'Volume 4', label: 'Volume 4' },
    { value: 'Volume 5', label: 'Volume 5' }
  ];

  const enabled = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    console.log(formData);
    try {
      const response = await axios.post(
        'https://gecxc.com:4041/api/PrePlanning/SavePrePlanningHeader',
        formData
      );
      console.log('Form data saved:', response.data);
      setFormData({
        collectionName: '',
        collectionId: '',
        designId: '',
        poPcs: '',
        batchNo: ''
      });
      refetch();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // const deleteApi =
  //   'https://gecxc.com:4041/API/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=';
  // const editAPi =
  //   'https://gecxc.com:4041/API/CollectionRegistration/SaveCollection';

  useEffect(() => {
    const getDesignListByCollectionId = async () => {
      if (formData.collectionId) {
        try {
          const response = await axios.get(
            `https://gecxc.com:4041/API/DesignRegistration/GetDesignListByCollectionId?CollectionId=${formData.collectionId}`
          );
          console.log(formData.collectionId);
          console.log(response);
          setDesignOptions(response.data);
        } catch (error) {
          console.error('Error fetching design options:', error);
        }
      }
    };
    getDesignListByCollectionId();
  }, [formData.collectionId]);

  useEffect(() => {
    const GetCollectionFromPlanningHeader = async () => {
      try {
        const response = await axios.get(
          'https://gecxc.com:4041/api/PrePlanning/GetCollectionFromPlanningHeader'
        );
        console.log('GetCollectionFromPlanningHeader', response);
        setPlannedCollection(response.data);
      } catch (error) {
        console.error('Error fetching design options:', error);
      }
    };
    GetCollectionFromPlanningHeader();
  }, []);

  useEffect(() => {
    const GetDesignFromPlanningHeaderByCollectionId = async () => {
      if (formData.plannedCollectionId) {
        try {
          const response = await axios.get(
            `https://gecxc.com:4041/api/PrePlanning/GetDesignFromPlanningHeaderByCollectionId?collectionid=${formData.plannedCollectionId}`
          );
          console.log('GetDesignFromPlanningHeaderByCollectionId', response);
          setPlannedDesign(response.data);
        } catch (error) {
          console.error('Error fetching design options:', error);
        }
      }
    };
    GetDesignFromPlanningHeaderByCollectionId();
  }, [formData.plannedCollectionId]); // Effect depends on collectionId
  console.log('formData', formData);

  return (
    <MainCard
      style={{
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23'
      }}
    >
      <FormControl>
        <Grid container spacing={2} width="inherit">
          <Grid item sm={9}>
            <Typography variant="h3" gutterBottom>
              Pre Planning Creation
            </Typography>
          </Grid>
          <Grid item sm={3} textAlign="right">
            <Button variant="contained" size="small" onClick={handleSave}>
              Save
            </Button>
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              select
              label="Select Collection"
              name="collectionId"
              value={formData.collectionId}
              onChange={handleChange}
              size="small"
            >
              {collectionList.map((option) => (
                <MenuItem key={option.collectionId} value={option.collectionId}>
                  {option.collectionName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              select
              label="Select Design"
              name="designId"
              value={formData.designId}
              onChange={handleChange}
              size="small"
            >
              {designOptions.map((option) => (
                <MenuItem key={option.designId} value={option.designId}>
                  {option.designNo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sm={4}>
            <TextField
              label="Po PCs"
              fullWidth
              size="small"
              name="poPcs"
              value={formData.poPcs}
              onChange={handleChange}
            />
          </Grid>

          <Grid item sm={12}>
            <Divider
              color="#cc8587"
              sx={{ height: 2, width: '100%', marginBottom: 2 }}
            />

            <Typography variant="h4" gutterBottom>
              Search
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              select
              label="Select Collection"
              name="plannedCollectionId"
              value={formData.plannedCollectionId}
              onChange={handleChange}
              size="small"
            >
              {plannedCollection.length > 0 ? (
                plannedCollection.map((option) => (
                  <MenuItem
                    id="ddlCollection"
                    key={option.planningHeaderId}
                    value={option.collectionId}
                  >
                    {option.collectionName}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No Collections Available</MenuItem>
              )}
            </TextField>
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              select
              label="Design"
              name="plannedDesignedId"
              value={formData.plannedDesignedId}
              onChange={handleChange}
              size="small"
            >
              {plannedDesign.map((option) => (
                <MenuItem key={option.planningHeaderId} value={option.designId}>
                  {option.designNo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sm={12} paddingTop={1}>
            <EditAbleDataGrid
              initialRows={gridData}
              ncolumns={columns}
              formData={formData}
              fetchData={fetchData}
              // deleteApi={deleteApi}
              //   editApi={editApi}
            />
          </Grid>
        </Grid>
      </FormControl>
    </MainCard>
  );
};

export default PrePlanningCreation;
