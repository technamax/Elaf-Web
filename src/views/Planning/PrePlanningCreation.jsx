import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  Button,
  MenuItem,
  Typography,
  Grid,
  TextField,
  Box,
  Tab,
  Divider
} from '@mui/material';
import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
import {
  useGetDesignListByCollectionIdQuery,
  useGetPlanningHeaderListByCollectionIdQuery
} from 'api/store/Apis/designApi';
import EditAbleDataGrid from 'components/EditAbleDataGrid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { SnackbarProvider, useSnackbar } from 'notistack';
import '../../App.css';
import MainCard from 'ui-component/cards/MainCard';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

import { useUser } from 'context/User';

const SmallTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '0.875rem', // Adjust font size
    padding: '4px 6px' // Adjust padding
  },
  width: 'auto', // Let width adjust automatically
  height: 'auto', // Let height adjust automatically
  minWidth: '100px', // Set minimum width to ensure it's usable
  minHeight: '30px' // Set minimum height to ensure it's usable
}));

const PrePlanningCreation = () => {
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const apiRef = useGridApiRef();
  const { user } = useUser();

  const [formData, setFormData] = useState({
    // collectionName: '',
    planningHeaderId: 0,
    collectionId: '',
    // plannedCollectionId: '',
    // plannedDesignedId: '',
    // designId: '',
    poPcs: '',
    // batchNo: '',
    createdBy: user.empId,
    createdOn: new Date().toISOString()
  });
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    setFormData({
      ...formData,
      collectionId: initialData?.collectionId || '',
      planningHeaderId: initialData?.planningHeaderId || 0,
      // plannedCollectionId: initialData?.plannedCollectionId || '',
      // plannedDesignedId: initialData?.plannedDesignedId || '',
      // designId: initialData?.designId || '',
      poPcs: initialData?.poPcs || ''
      // batchNo: initialData?.batchNo || ''
    });
  }, [initialData]);

  const { data: collectionData, refetch: refetchCollection } =
    useGetCollectionListQuery();
  // const { data: designData, refetch } = useGetDesignListByCollectionIdQuery();
  const { data: designData, refetch: refetchDesignData } =
    useGetDesignListByCollectionIdQuery(formData.collectionId, {
      skip: !formData.collectionId // Skip the query if no collection is selected
    });
  const { data: batchData, refetch: refetchbatchData } =
    useGetPlanningHeaderListByCollectionIdQuery(formData.collectionId, {
      skip: !formData.collectionId // Skip the query if no collection is selected
    });

  // selectedCollectionId,
  // {
  //   skip: !selectedCollectionId // Skip the query if no collection is selected
  // }

  const { enqueueSnackbar } = useSnackbar();
  const [designList, setDesignList] = useState([]);
  const [initialRows, setInitialRows] = useState([]);
  useEffect(() => {
    if (designData) {
      setDesignList(
        designData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
      // refetchDesignData();
    }
  }, [designData, formData.collectionId]);
  useEffect(() => {
    if (batchData) {
      setInitialRows(
        batchData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
      // refetchDesignData();
    }
  }, [batchData]);
  const collectionList = collectionData?.result || [];
  // const designList = designData || [];

  // const [designOptions, setDesignOptions] = useState([]);
  const [plannedCollection, setPlannedCollection] = useState([]);
  const [plannedDesign, setPlannedDesign] = useState([]);
  // const [gridData, setGridData] = useState([]);
  const [value, setValue] = useState('1');
  console.log('designOptions', designList);

  // const fetchData = useCallback(async () => {
  //   try {
  //     if (formData.plannedDesignedId) {
  //       const response = await axios.get(
  //         `http://100.42.177.77:8091/api/PrePlanning/GetPlanningHeaderListByDesignId?designId=${formData.plannedDesignedId}`
  //       );
  //       const rowsWithId = response.data.result.map((row, index) => ({
  //         ...row,
  //         id: index + 1
  //       }));
  //       setGridData(rowsWithId);
  //       refetch();
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setGridData([]);
  //   }
  // }, [formData.plannedDesignedId]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

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
      field: 'poPcs',
      headerName: 'Po Pcs',
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
      field: 'batchStatus',
      headerName: 'Status',
      flex: 1,
      editable: true
    }
  ];

  const handleCellEdit = (params) => {
    const { id, field, value } = params;
    console.log('Editing cell:', params); // Debugging line

    if (field === 'poPcs') {
      setDesignList((prevRows) =>
        prevRows.map((row) => (row.id === id ? { ...row, poPcs: value } : row))
      );
    }
  };
  const designsColumns = [
    {
      field: 'id',

      headerName: 'Sr#'
    },
    {
      field: 'orderNumber',
      flex: 1,

      headerName: 'Order Number'
    },
    {
      field: 'designNo',
      flex: 1,

      headerName: 'Design'
    },
    {
      field: 'designerName',
      flex: 1,

      headerName: 'Designer'
    },
    {
      field: 'poPcs',
      headerName: 'Po Pcs',
      flex: 1,

      renderCell: (params) => (
        <SmallTextField
          variant="outlined"
          size="small"
          // fullWidth
          sx={{ mt: 1, width: '100%' }} // Adjust width and height as needed
          value={params.row.poPcs || ''}
          onChange={(event) =>
            handleCellEdit({
              id: params.id,
              field: 'poPcs',
              value: Number(event.target.value)
            })
          }
          type="number"
          InputProps={{
            style: { fontSize: '0.875rem' } // Ensure the font size is suitable
          }}
        />
      )
    },
    {
      field: 'dateOfPlanning',
      flex: 1,

      headerName: 'Date Of Planning',
      valueGetter: (params) => {
        const date = new Date(params);
        return date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: '2-digit'
        });
      }
    },
    {
      field: 'colorName',
      flex: 1,

      headerName: 'colorName'
    }
  ];

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const [pcs, setPcs] = useState('');
  console.log('pcs', pcs);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );
      setPcs(selectedCollection.poPcs);
      setFormData({
        ...formData,
        collectionId: value,
        poPcs: selectedCollection ? selectedCollection.poPcs : ''
      });
    } else if (name === 'designId') {
      setFormData({
        ...formData,
        designId: value,
        poPcs: pcs,

        plannedDesignedId: value // Update plannedDesignedId as well
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        'http://100.42.177.77:8091/api/PrePlanning/SavePrePlanningHeader',
        formData
      );
      enqueueSnackbar('Planning Batch saved successfully!', {
        variant: 'success',
        autoHideDuration: 5000
      });

      setFormData({
        ...formData,
        // collectionName: '',
        // collectionId: '',
        designId: '',
        poPcs: '',
        batchNo: ''
      });
      // await refetchCollection();
      // await fetchData();
    } catch (error) {
      console.error('Error saving data:', error);
      enqueueSnackbar('Planning Batch not saved successfully!', {
        variant: 'error',
        autoHideDuration: 5000
      });
    }
  };

  // useEffect(() => {
  //   const getDesignListByCollectionId = async () => {
  //     if (formData.collectionId) {
  //       try {
  //         const response = await axios.get(
  //           `http://100.42.177.77:8091/api/DesignRegistration/GetDesignListByCollectionId?CollectionId=${formData.collectionId}`
  //         );
  //         setDesignOptions(response.data.result);
  //       } catch (error) {
  //         console.error('Error fetching design options:', error);
  //       }
  //     }
  //   };
  //   getDesignListByCollectionId();
  // }, [formData.collectionId]);

  useEffect(() => {
    const GetCollectionFromPlanningHeader = async () => {
      try {
        const response = await axios.get(
          'http://100.42.177.77:8091/api/PrePlanning/GetCollectionListFromPlanningHeader'
        );
        setPlannedCollection(response.data.result);
      } catch (error) {
        console.error('Error fetching planned collections:', error);
      }
    };
    GetCollectionFromPlanningHeader();
  }, []);

  useEffect(() => {
    const GetDesignFromPlanningHeaderByCollectionId = async () => {
      if (formData.plannedCollectionId) {
        try {
          const response = await axios.get(
            `http://100.42.177.77:8091/api/PrePlanning/GetDesignFromPlanningHeaderByCollectionId?collectionid=${formData.plannedCollectionId}`
          );
          setPlannedDesign(response.data.result);
        } catch (error) {
          console.error('Error fetching planned designs:', error);
        }
      }
    };
    GetDesignFromPlanningHeaderByCollectionId();
  }, [formData.plannedCollectionId]);

  console.log('formdata', formData);
  console.log('InitialData', initialData);
  const [selectedDesigns, setSelectedDesigns] = useState([]);
  const [pcsList, setPcsList] = useState([]);
  const handleRowSelectionModelChange = useCallback(
    (newRowSelectionModel) => {
      setRowSelectionModel(newRowSelectionModel);
      const designsIds = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData ? rowData['designId'] : null; // Adjust the field name to match your data
        })
        .filter((id) => id !== null); // Filter out any null values
      const poPcsLists = newRowSelectionModel
        .map((id) => {
          const rowData = apiRef.current.getRow(id);
          console.log('rowData', rowData);
          return rowData ? rowData['poPcs'] : null; // Adjust the field name to match your data
        })
        .filter((id) => id !== null); // Filter out any null values
      console.log('poPcsLists', poPcsLists);
      // const designs = poPcsLists.map((planningHeaderId) => ({
      //   prodctionDetId: 0,
      //   productionId: 0,
      //   planningHeaderId: planningHeaderId,
      //   createdOn: new Date().toISOString(),
      //   createdBy: user.empId,
      //   lastUpdatedBy: user.empId,
      //   lastUpdatedOn: new Date().toISOString()
      // }));
      // setFormData({
      //   ...formData,
      //   designIdList: designsIds,
      //   poPcsList: poPcsLists
      // });
      setSelectedDesigns(designsIds);
      setPcsList(poPcsLists);
    },
    [apiRef]
  );

  useEffect(() => {
    setFormData({
      ...formData,
      designIdList: selectedDesigns,
      poPcsList: pcsList
    });
  }, [selectedDesigns]);
  useEffect(() => {
    if (apiRef.current) {
      console.log('API ref is ready:', apiRef.current);
    }
  }, [apiRef]);

  // console.log('selectedDesigns:', selectedDesigns);

  const deleteApi = `http://100.42.177.77:8091/api/PrePlanning/DeletePlanningHeaderIdByPlanningId?planningHeaderId=`;
  return (
    <MainCard
      style={{
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23',
        // backgroundColor: '#eef2f6',
        width: 'auto',
        maxHeight: { xs: '80vh', md: 'auto' },
        overflow: 'auto'
      }}
    >
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChangeTabs}
              aria-label="lab API tabs example"
            >
              <Tab
                icon={<AddCircleIcon />}
                label="Add Collection"
                value="1"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
              <Tab
                icon={<SearchIcon />}
                label="Search Collection"
                value="2"
                sx={(theme) => ({
                  '& .MuiTouchRipple-child': {
                    backgroundColor: `${theme.palette.primary.main} !important`
                  }
                })}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                title="Create Batch Planning"
                titleTypographyProps={{ style: { color: 'white' } }}
              ></CardHeader>

              <Grid
                container
                spacing={1}
                width="Inherit"
                sx={{ paddingY: 2, paddingX: 2 }}
              >
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    select
                    label="Select Collection"
                    name="collectionId"
                    value={formData.collectionId}
                    onChange={handleChange}
                    size="small"
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  >
                    {collectionList.map((option) => (
                      <MenuItem
                        key={option.collectionId}
                        value={option.collectionId}
                      >
                        {option.collectionName}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {/* <Grid item xs={12} md={4}>
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
                        // set the color of the label when not shrinked
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
                </Grid> */}
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Po PCs"
                    fullWidth
                    size="small"
                    name="poPcs"
                    value={formData.poPcs}
                    onChange={handleChange}
                    sx={(theme) => ({
                      ...(formData.poPcs !== '' && {
                        '.css-4a5t8g-MuiInputBase-input-MuiOutlinedInput-input':
                          {
                            backgroundColor: `#c9c9c9 !important`
                          }
                      }),
                      '& .MuiInputBase-input.Mui-disabled': {
                        WebkitTextFillColor: 'black' // Adjust text color here
                      },
                      '& .MuiInputBase-root.Mui-disabled': {
                        backgroundColor: '#f9f9f9' // Adjust background color here
                      },
                      '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
                        {
                          // borderColor: 'gray' // Adjust border color here
                        },
                      '& .MuiInputLabel-root.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.87)' // Darker label color
                      }
                    })}
                    InputLabelProps={{
                      sx: {
                        // set the color of the label when not shrinked
                        color: 'black'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                      rows={designList}
                      columns={designsColumns}
                      apiRef={apiRef}
                      disableRowSelectionOnClick
                      checkboxSelection
                      onRowSelectionModelChange={handleRowSelectionModelChange}
                      rowSelectionModel={rowSelectionModel}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  textAlign="right"
                  sx={{ marginBottom: 2 }}
                >
                  <Button variant="contained" size="small" onClick={handleSave}>
                    Save
                  </Button>
                </Grid>
                <Divider
                  color="#cc8587"
                  sx={{ height: 2, width: '100%', mt: 2 }}
                />
                <Grid item xs={12} paddingTop={1}>
                  <ReuseableDataGrid
                    initialRows={initialRows}
                    iColumns={columns}
                    formData={formData}
                    deleteApi={deleteApi}
                    deleteBy="planningHeaderId"
                    // fetchData={fetchData}
                    refetch={refetchbatchData}
                    setInitialData={setInitialData}
                  />
                </Grid>
              </Grid>
            </Card>
          </TabPanel>
          <TabPanel value="2">
            {/* <Grid item xs={9} md={9}>
                    <Typography variant="h3" gutterBottom>
                      Search Collection
                    </Typography>
                  </Grid> */}
            <Card variant="outlined">
              <CardHeader
                className="css-4rfrnx-MuiCardHeader-root"
                title="Searc Batch Planning"
                titleTypographyProps={{ style: { color: 'white' } }}
              ></CardHeader>
              <Grid
                container
                spacing={2}
                width="Inherit"
                sx={{ paddingY: 2, paddingX: 2 }}
              >
                <Grid item xs={12} md={4}>
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
                <Grid item xs={12} md={4}>
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
                      <MenuItem
                        key={option.planningHeaderId}
                        value={option.designId}
                      >
                        {option.designNo}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Divider
                  color="#cc8587"
                  sx={{ height: 2, width: '100%', mt: 2 }}
                />
                <Grid item xs={12} paddingTop={1}>
                  <ReuseableDataGrid
                    initialRows={initialRows}
                    iColumns={columns}
                    formData={formData}
                    // fetchData={fetchData}
                    refetch={refetchCollection}
                    setInitialData={setInitialData}
                  />
                </Grid>
              </Grid>
            </Card>
          </TabPanel>
        </TabContext>
      </Box>
    </MainCard>
  );
};

export default PrePlanningCreation;
