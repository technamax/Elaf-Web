import {
  Grid,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
import { useGetDesignListByCollectionIdQuery } from 'api/store/Apis/designApi';
import axios from 'axios';

import EditAbleDataGrid from 'components/EditAbleDataGrid';
import MainCard from 'ui-component/cards/MainCard';

const NewDesign = () => {
  const { data: collectionData } = useGetCollectionListQuery();
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const { data: designData, refetch } = useGetDesignListByCollectionIdQuery(
    selectedCollectionId,
    {
      skip: !selectedCollectionId // Skip the query if no collection is selected
    }
  );

  const [designList, setDesignList] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    if (designData) {
      setDesignList(designData.result);
      refetch();
    }
  }, [designData]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axios.get(
          ' https://gecxc.com:4041/api/Common/GetLookUpByDomain?lookupDomain=COLOURS'
        );
        const data = response.data.result;

        setColors(data);
      } catch (error) {
        console.error('Error fetching pre-planning lookup data:', error);
      }
    };

    fetchColors();
  }, []);

  const collectionList = collectionData?.result || [];

  const [formData, setFormData] = useState({
    collectionId: '',
    designNo: '',
    designerName: '',
    poPcs: '',
    dateOfPlanning: '',
    colorId: '',
    appId: 1,
    createdBy: 0,
    createdOn: new Date().toISOString(),
    lastUpdatedBy: 0,
    lastUpdatedOn: new Date().toISOString()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      setSelectedCollectionId(value);
    }
    setFormData({ ...formData, [name]: value });
  };

  const initialRows = designList.map((design, index) => ({
    id: index + 1,
    designId: design.designId,
    collectionId: design.collectionId,
    designNo: design.designNo,
    designerName: design.designerName,
    poPcs: design.poPcs,
    dateOfPlanning: design.dateOfPlanning,
    colorId: design.colorId,
    appId: design.appId,
    createdBy: design.createdBy,
    createdOn: design.createdOn,
    lastUpdatedBy: design.lastUpdatedBy,
    lastUpdatedOn: design.lastUpdatedOn
  }));
  console.log('initialRows', initialRows);
  const columns = [
    {
      field: 'collectionId',
      headerName: 'Collection ID',
      editable: true,
      flex: 2,
      type: 'singleSelect',
      valueOptions: collectionList.map((collection) => ({
        value: collection.collectionId,
        label: collection.collectionName
      }))
    },
    {
      field: 'designNo',
      headerName: 'Design No',
      flex: 1,
      editable: true
    },
    {
      field: 'designerName',
      headerName: 'Designer Name',
      flex: 1,
      editable: true
    },
    {
      field: 'poPcs',
      headerName: 'Po PCs',
      flex: 1,
      editable: true
    },
    {
      field: 'dateOfPlanning',
      headerName: 'Date of Planning',
      type: 'date',
      flex: 1,
      editable: true,
      valueGetter: (params) => (params ? new Date(params) : null),
      valueFormatter: (params) => {
        const date = params;
        if (!date) return '';
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'colorId',
      headerName: 'Color',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: colors.map((collection) => ({
        value: collection.lookUpId,
        label: collection.lookUpName
      }))
    }
  ];

  const handleSave = async () => {
    console.log(formData);
    try {
      const response = await axios.post(
        'https://gecxc.com:4041/API/DesignRegistration/SaveDesign',
        formData
      );
      console.log('Form data saved:', response.data);
      setDesignList([...designList, response.data]);
      setFormData({
        collectionId: '',
        designNo: '',
        designerName: '',
        poPcs: '',
        dateOfPlanning: '',
        colorId: ''
      });
      refetch();
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const deleteApi =
    'https://gecxc.com:4041/API/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=';
  const editAPi = 'https://gecxc.com:4041/API/DesignRegistration/SaveDesign';

  return (
    <MainCard
      style={{
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23'
      }}
    >
      <FormControl>
        <Grid container spacing={2} width="Inherit">
          <Grid item sm={9}>
            <Typography variant="h3" gutterBottom>
              Create New Design
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
              label="Design No."
              name="designNo"
              fullWidth
              size="small"
              value={formData.designNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              label="Designer Name"
              fullWidth
              size="small"
              name="designerName"
              value={formData.designerName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              size="small"
              type="date"
              label="Planning Date"
              name="dateOfPlanning"
              value={formData.dateOfPlanning}
              onChange={handleChange}
              fullWidth
              focused
            />
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
          <Grid item sm={4}>
            <TextField
              fullWidth
              select
              label="Color"
              size="small"
              name="colorId"
              value={formData.colorId}
              onChange={handleChange}
            >
              {colors.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Divider />
          <Grid item sm={12} paddingTop={1}>
            <EditAbleDataGrid
              initialRows={initialRows}
              ncolumns={columns}
              formData={formData}
              editAPi={editAPi}
            />
          </Grid>
        </Grid>
      </FormControl>
    </MainCard>
  );
};

export default NewDesign;
