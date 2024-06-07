import React from 'react';
import AddAdditionalServices from 'components/additionalProcesses.jsx/addadditionalServices'; 
import Divider from '@mui/material/Divider';
import AdditionalServiceTable from 'components/additionalProcesses.jsx/addadditionalserviceTable';
import MainCard from 'ui-component/cards/MainCard';

export default function AdditionalServices(fetchData) {


  return (

    <MainCard

    style={{
      borderWidth: 1,
      borderStyle: 'dotted',
      borderColor: '#a11f23'
    }}
 >
 

<AddAdditionalServices/>
    <Divider />
    <AdditionalServiceTable fetchData={fetchData}/>
 </MainCard> 
  );
}
