import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
  Divider,
  Box,
  Tab,
  Card,
  CardHeader,
  Avatar,
  FormControl,
  CircularProgress,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {} from '@mui/material';
import '../../assets/scss/style.scss';
import {
  DataGrid,
  GridToolbarContainer,
  useGridApiRef
} from '@mui/x-data-grid';

import { useGetMainMenuListQuery } from 'api/store/Apis/userManagementApi';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReuseableDataGrid from 'components/ReuseableDataGrid';
import AddTermsAndConditions from 'components/Production/TermsAndConditions/AddTermsAndConditions';
import AssignTermsAndConditions from 'components/Production/TermsAndConditions/AssignTermsAndConditions';
// import SubMenu from './SubMenu';
import { useGetCollectionListFromPlanningHeaderQuery } from 'api/store/Apis/productionApi';
import { useGetLookUpListQuery } from 'api/store/Apis/lookupApi';
import { styled } from '@mui/material/styles';

//////
import * as React from 'react';
import { useUser } from 'context/User';

const Issuance = () => {
  const { user } = useUser();
  const [initialData, setInitialData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [processType, setProcessType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    productionId: 0,
    collectionId: '',
    processType: '',
    AssignQty: '',
    startDate: new Date().toISOString(),
    appId: user.appId,
    createdOn: new Date().toISOString(),
    createdBy: user.empId,
    lastUpdatedOn: new Date().toISOString(),
    lastUpdatedBy: user.empId
  });
  console.log('Form Data:', formData);

  const [initialRows, setInitialRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const [accordionExpanded, setAccordionExpanded] = useState(false); // Add state variable for accordion
  const handleAccordionToggle = (event, isExpanded) => {
    setAccordionExpanded(!accordionExpanded);
  };

  const { data: lookupData } = useGetLookUpListQuery();
  useEffect(() => {
    if (lookupData) {
      const data = lookupData.result[0];

      setProcessType(data.productionProcessList);
    }
  }, [lookupData]);

  const [collectionList, setCollectionList] = useState([]);
  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const response = await axios.get(
          'https://gecxc.com:449/api/Production/GetProductionBatchForProcessing?appId=1'
        );
        if (response.data.success) {
          setCollectionList(
            response.data.result.map((row, index) => ({
              id: index + 1,
              ...row
            }))
          );
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error('Failed to fetch collection data', error);
      }
    };

    fetchCollectionData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'collectionId') {
      const selectedCollection = collectionList.find(
        (collection) => collection.collectionId === parseInt(value)
      );

      setFormData({
        ...formData,
        collectionId: value
        // productionId: selectedCollection ? selectedCollection.productionId : '',
        // status: selectedCollection ? selectedCollection.status : ''
      });
      //   GetFabricForProductionByCollectionId(1, value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  return <div>Issuance</div>;
};

export default Issuance;
