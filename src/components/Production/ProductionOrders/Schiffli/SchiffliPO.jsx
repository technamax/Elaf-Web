import React, { useEffect, useState } from 'react';
import {

  Box,
  Card,
  CardHeader,
  Grid,
  TextField,
  MenuItem,
  Divider,
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { DataGrid } from '@mui/x-data-grid';
import { useUser } from 'context/User';
import {
  useGetLookUpListQuery,
  useGetWareHouseLocationsQuery,
} from 'api/store/Apis/lookupApi';
import {
  useGetProductionBatchDetailsByProductionidQuery,
  useGetProductionBatchForProcessingQuery
} from 'api/store/Apis/productionApi';



const shiffliColumns = [
  {
    field: '',
    headerName: 'Components',
  },
  {
    field: 'fabricName',
    headerName: 'Fabric',
  },
  {
    field: '',
    headerName: 'Color',
  },
  {
    field: 'totalPcs',
    headerName: 'Total Pieces',
  },
  {
    field: 'availableQty',
    headerName: 'TotalQuantity',
  },
  {
    field: '',
    headerName: 'Planned Rpt',
  },
  {
    field: 'operatingMachineName',
    headerName: 'Operating',
  },
  {
    field: '',
    headerName: 'Working Heads',
  },
  {
    field: 'cuttingSize',
    headerName: 'Cutting Size',
  },
  {
    field: '',
    headerName: 'Items Per Repeat',
  },
  {
    field: 'Actions',
    headerName: 'Actions',
  },
  {
    field: 'statusName',
    headerName: 'Details Status',
  }

]

const ShiffliPO = () => {

  const { user } = useUser();

  const [productions, setProductions] = useState([]);
  const [processTypes, setProcessTypes] = useState([]);
  const [vendorsList, setVendorsList] = useState([]);
  const [designsList, setDesignsList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);
  const [shiffliComponents, setShiffliComponents] = useState([]);
  const [openRows, setOpenRows] = useState({});
  const [selectedRows, setSelectedRows] = useState([])
  const [formData, setFormData] = useState({
    poId: 0,
    productionId: '',
    planningHeaderId: '',
    issuanceDate: new Date().toISOString().slice(0, 10),
    expectedReturnDate: '',
    processTypeId: '',
    vendorId: '',
    locationId: '',
    remarks: '',
    poPieces: '',
    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    LastUpdatedBy: user.empId
  });

  const { data: productionBatchData, refetch: refetchProductionBatchData } =
    useGetProductionBatchForProcessingQuery();
  const { data: lookUpData, refetch: refetchlookUpData } =
    useGetLookUpListQuery();
  const { data: designsData, refetch: refetchDesignsData } =
    useGetProductionBatchDetailsByProductionidQuery(formData.productionId, {
      skip: !formData.productionId
    });
  const { data: locationsData, refetch: refetchLocationsData } =
    useGetWareHouseLocationsQuery();

  useEffect(() => {
    if (productionBatchData) {
      setProductions(
        productionBatchData.result.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [productionBatchData, refetchProductionBatchData]);

  useEffect(() => {
    if (lookUpData) {
      setProcessTypes(
        lookUpData.result[0].productionProcessList
          .filter((item) => item.lookUpId === 1225 || item.lookUpId === 1226)
          .map((row, index) => ({
            id: index,
            ...row
          }))
      );
      console.log('lookUpData.result[0]', lookUpData.result[0]);
      setVendorsList(
        lookUpData.result[0].vendorList.map((row, index) => ({
          id: index,
          ...row
        }))
      );
    }
  }, [lookUpData]);

  useEffect(() => {
    if (designsData) {
      setDesignsList(
        designsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [designsData, refetchDesignsData]);

  useEffect(() => {
    if (locationsData) {
      setLocationsList(
        locationsData.result.map((row, index) => ({
          id: index + 1,
          ...row
        }))
      );
    }
  }, [locationsData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getShiffliComponentsByDesignId = async () => {
    try {
      const response = await fetch(`http://100.42.177.77:83/api/PO/GetSchiffliComponentsByDesignId?designId=${formData.planningHeaderId}`);
      const data = await response.json();
      setShiffliComponents(data.result);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getShiffliComponentsByDesignId();
  }, [formData.planningHeaderId]);

  const toggleRow = (id) => {
    setOpenRows((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const isRowSelected = (id) => selectedRows.includes(id);

  return (

    <Box>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={
          // <Avatar src={schiffli} sx={{ background: 'transparent' }} />
          // }
          title="Shiffili Production Order"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={1}
          width="Inherit"
          sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Production"
              name="productionId"
              value={formData.productionId}
              onChange={handleChange}
              size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
            >
              {productions.map((option) => (
                <MenuItem key={option.productionId} value={option.productionId}>
                  {option.collectionName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Design"
              name="planningHeaderId"
              value={formData.planningHeaderId}
              onChange={handleChange}
              size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
            >
              {designsList.map((option) => (
                <MenuItem
                  key={option.planningHeaderId}
                  value={option.planningHeaderId}
                >
                  {option.designNo}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Process Type"
              name="processTypeId"
              value={formData.processTypeId}
              onChange={handleChange}
              size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
            >
              {processTypes.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              type="date"
              label="Issuance Date"
              name="issuanceDate"
              value={formData.issuanceDate}
              onChange={handleChange}
              fullWidth
              // error={!!formErrors.launchDate}
              // helperText={formErrors.launchDate}
              InputLabelProps={{
                shrink: true,
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              size="small"
              type="date"
              label="Expected Return"
              name="expectedReturnDate"
              value={formData.expectedReturnDate}
              onChange={handleChange}
              fullWidth
              // error={!!formErrors.expectedReturnDate}
              // helperText={formErrors.expectedReturnDate}
              InputLabelProps={{
                shrink: true,
                sx: {
                  // set the color of the label when not shrinked
                  color: 'black'
                }
              }}
            />
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Fabric"
              name="fabricId"
              value={formData.fabricId}
              onChange={handleChange}
              size="small"
              // error={!!formErrors.brandId}
              // helperText={formErrors.brandId}
            >
              {fabricsList.map((option) => (
                <MenuItem key={option.fabricId} value={option.fabricId}>
                  {option.fabricName}
                </MenuItem>
              ))}
            </TextField>
          </Grid> */}
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Vendor"
              name="vendorId"
              value={formData.vendorId}
              onChange={handleChange}
              size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
            >
              {vendorsList.map((option) => (
                <MenuItem key={option.lookUpId} value={option.lookUpId}>
                  {option.lookUpName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              select
              label="Select Location"
              name="locationId"
              value={formData.locationId}
              onChange={handleChange}
              size="small"
            // error={!!formErrors.brandId}
            // helperText={formErrors.brandId}
            >
              {locationsList.map((option) => (
                <MenuItem key={option.locationId} value={option.locationId}>
                  {option.section +
                    '.' +
                    option.aisle +
                    '.' +
                    option.rack +
                    '.' +
                    option.bin}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Remarks"
              fullWidth
              size="small"
              name="remarks"
              onChange={handleChange}
              value={formData.remarks}
              required
            // disabled={isEdit}
            // error={!!formErrors.collectionName}
            // helperText={formErrors.collectionName}
            />
          </Grid>
          <Grid item xs={12}>
            <Box style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={shiffliComponents}
                columns={shiffliColumns}
                pageSize={10}
                getRowId={(row) => row.schiffiliId}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant='outlined'>
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          avatar={<VisibilityOutlinedIcon />}
          title="Assign TCs & Issuance"
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <Grid
          container
          spacing={2}
          width="Inherit"
        // sx={{ paddingY: 2, paddingX: 2 }}
        >
          <Grid item xs={12}>
            
          </Grid>
        </Grid>
      </Card>
    </Box >
  );
};

export default ShiffliPO;
