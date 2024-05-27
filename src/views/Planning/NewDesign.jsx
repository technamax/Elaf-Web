// /* eslint-disable prettier/prettier */
// // material-ui
// import {
//   Grid,
//   TextField,
//   Button,
//   MenuItem,
//   FormControl,
//   Typography,
//   Divider
// } from '@mui/material';
// import { useState } from 'react';
// import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
// import { useGetDesignListQuery } from 'api/store/Apis/designApi';
// import axios from 'axios';

// // import dayjs from 'dayjs';
// // import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import EditAbleDataGrid from 'components/EditAbleDataGrid';

// // project imports
// import MainCard from 'ui-component/cards/MainCard';
// // import Fabrication from './Fabrication';
// // import Edit from '@mui/icons-material/Edit';

// // ==============================|| SAMPLE PAGE ||============================== //

// const NewDesign = () => {
//   const { data, error, isLoading, refetch } = useGetCollectionListQuery();
//   const {
//     data: designData,
//     error: designError,
//     isLoading: designLoading
//   } = useGetDesignListQuery();

//   const collectionList = data || [];
//   const designList = designData || [];
//   console.log('designList', designList);

//   const [formData, setFormData] = useState({
//     collectionId: '',
//     designNo: '',
//     designerName: '',
//     poPcs: '',
//     dateOfPlanning: '',
//     colorId: '',
//     appId: 1,
//     createdBy: 0,
//     createdOn: new Date().toISOString(),
//     lastUpdatedBy: 0,
//     lastUpdatedOn: new Date().toISOString()
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const colors = [
//     {
//       value: 1,
//       label: 'Red'
//     },
//     { value: 2, label: 'Blue' },
//     {
//       value: 3,
//       label: 'Green'
//     }
//   ];
//   const initialRows = designList.map((design, index) => ({
//     id: index + 1,
//     designId: design.designId,
//     collectionId: design.collectionId,
//     designNo: design.designNo,
//     designerName: design.designerName,
//     poPcs: design.poPcs,
//     dateOfPlanning: design.dateOfPlanning,
//     colorId: design.colorId,
//     appId: design.appId,
//     createdBy: design.createdBy,
//     createdOn: design.createdOn,
//     lastUpdatedBy: design.lastUpdatedBy,
//     lastUpdatedOn: design.lastUpdatedOn
//   }));

//   console.log(initialRows);

//   const columns = [
//     {
//       field: 'collectionId',
//       headerName: 'Collection ID',
//       editable: true,
//       flex: 2,
//       type: 'singleSelect',
//       valueOptions: collectionList.map((collection) => ({
//         value: collection.collectionId,
//         label: collection.collectionName
//       }))
//     },
//     {
//       field: 'designNo',
//       headerName: 'designNo',
//       flex: 1,
//       editable: true
//     },
//     {
//       field: 'designerName',
//       headerName: 'Designer Name',
//       // type: 'date',
//       flex: 1,
//       editable: true
//     },
//     {
//       field: 'poPcs',
//       headerName: 'poPcs',
//       // type: 'date',
//       flex: 1,
//       editable: true
//     },
//     {
//       field: 'dateOfPlanning',
//       headerName: 'dateOfPlanning',
//       type: 'date',
//       flex: 1,
//       editable: true,
//       valueGetter: (params) => (params ? new Date(params) : null) // Ensure date is parsed correctly
//     },
//     {
//       field: 'colorId',
//       headerName: 'colorId',
//       flex: 1,
//       editable: true,
//       type: 'singleSelect',
//       valueOptions: colors.map((color) => ({
//         value: color.value,
//         label: color.label
//       }))
//     }
//   ];

//   const handleSave = async () => {
//     console.log(formData);
//     try {
//       const response = await axios.post(
//         'https://gecxc.com:4041/API/DesignRegistration/SaveDesign',
//         formData
//       );
//       console.log('Form data saved:', response.data);
//       setFormData({
//         collectionId: '',
//         designNo: '',
//         designerName: '',
//         poPcs: '',
//         dateOfPlanning: '',
//         color: ''
//       });
//       // fetchData();
//       // refetch();
//       console.log(response);
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   const deleteApi =
//     'https://gecxc.com:4041/API/CollectionRegistration/DeleteCollectionByCollectionId?collectionId=';
//   const editAPi = 'https://gecxc.com:4041/API/DesignRegistration/SaveDesign';

//   return (
//     <MainCard
//       style={{
//         borderWidth: 2,
//         borderStyle: 'dashed',
//         borderColor: '#a11f23'
//       }}
//     >
//       <FormControl>
//         <Grid container spacing={2} width="Inherit">
//           <Grid item sm={9}>
//             <Typography variant="h3" gutterBottom>
//               Create New Design
//             </Typography>
//           </Grid>
//           <Grid item sm={3} textAlign="right">
//             <Button variant="contained" size="small" onClick={handleSave}>
//               Save
//             </Button>
//           </Grid>
//           <Grid item sm={4}>
//             <TextField
//               fullWidth
//               select
//               label="Select Collection"
//               defaultValue=""
//               name="collectionId"
//               value={formData.collectionId}
//               onChange={handleChange}
//               //   helperText="Please Select Collection"
//               size="small"
//             >
//               {collectionList.map((option) => (
//                 <MenuItem key={option.collectionId} value={option.collectionId}>
//                   {option.collectionName}
//                 </MenuItem>
//               ))}
//             </TextField>{' '}
//           </Grid>
//           <Grid item sm={4}>
//             <TextField
//               label="design No."
//               name="designNo"
//               fullWidth
//               size="small"
//               value={formData.designNo}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item sm={4}>
//             <TextField
//               label="Designer Name"
//               fullWidth
//               size="small"
//               name="designerName"
//               value={formData.designerName}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item sm={4}>
//             <TextField
//               size="small"
//               type="date"
//               label="Planning Date"
//               name="dateOfPlanning"
//               value={formData.dateOfPlanning}
//               onChange={handleChange}
//               fullWidth
//               focused
//             />
//           </Grid>
//           <Grid item sm={4}>
//             <TextField
//               label="Po PCs"
//               fullWidth
//               size="small"
//               name="poPcs"
//               value={formData.poPcs}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item sm={4}>
//             <TextField
//               fullWidth
//               select
//               name="color"
//               label="Color"
//               defaultValue=""
//               helperText="Please select color"
//               value={formData.colorId}
//               onChange={handleChange}
//               size="small"
//             >
//               {colors.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Divider></Divider>
//           <Grid item sm={12} paddingTop={1}>
//             <EditAbleDataGrid
//               initialRows={initialRows}
//               ncolumns={columns}
//               formData={formData}
//               editAPi={editAPi}
//             />
//           </Grid>
//         </Grid>
//       </FormControl>
//     </MainCard>
//   );
// };

// export default NewDesign;

import {
  Grid,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Typography,
  Divider
} from '@mui/material';
import { useState } from 'react';
import { useGetCollectionListQuery } from 'api/store/Apis/collectionApi';
import { useGetDesignListQuery } from 'api/store/Apis/designApi';
import axios from 'axios';

import EditAbleDataGrid from 'components/EditAbleDataGrid';
import MainCard from 'ui-component/cards/MainCard';

const NewDesign = () => {
  const { data: collectionData } = useGetCollectionListQuery();
  const { data: designData } = useGetDesignListQuery();

  const collectionList = collectionData || [];
  const designList = designData || [];
  console.log('designList', designList);

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
    setFormData({ ...formData, [name]: value });
  };

  const colors = [
    { value: 1, label: 'Red' },
    { value: 2, label: 'Blue' },
    { value: 3, label: 'Green' }
  ];

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

  console.log(initialRows);

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
      valueGetter: (params) => (params ? new Date(params) : null) // Ensure date is parsed correctly
    },
    {
      field: 'colorId',
      headerName: 'Color',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: colors.map((color) => ({
        value: color.value,
        label: color.label
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
      setFormData({
        collectionId: '',
        designNo: '',
        designerName: '',
        poPcs: '',
        dateOfPlanning: '',
        colorId: ''
      });
      console.log(response);
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
              name="colorId"
              label="Color"
              value={formData.colorId}
              onChange={handleChange}
              size="small"
            >
              {colors.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
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
