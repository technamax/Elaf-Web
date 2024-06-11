import React from 'react';
import AddAdditionalServices from 'components/additionalProcesses.jsx/addadditionalServices';
import Divider from '@mui/material/Divider';
import AdditionalServiceTable from 'components/additionalProcesses.jsx/addadditionalserviceTable';
import MainCard from 'ui-component/cards/MainCard';
import { Card, CardHeader, Avatar } from '@mui/material';
import '../../assets/scss/style.scss';

export default function AdditionalServices(fetchData) {
  return (
    <>
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={<AddOutlinedIcon />}
          title="Additional Services  "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <AddAdditionalServices />
      </Card>
      <Divider color="#cc8587" sx={{ height: 1, width: '100%', mt: 2 }} />
      <Card variant="outlined">
        <CardHeader
          className="css-4rfrnx-MuiCardHeader-root"
          // avatar={<AddOutlinedIcon />}
          title="View Additional Services  "
          titleTypographyProps={{ style: { color: 'white' } }}
        ></CardHeader>
        <AdditionalServiceTable fetchData={fetchData} />
      </Card>
    </>
  );
}
