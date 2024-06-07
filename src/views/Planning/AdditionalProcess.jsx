import React from 'react';
import AddAdditionalProcess from 'components/additionalProcesses.jsx/addadditionalProcess';
import Divider from '@mui/material/Divider';
import AddAdditionalProcessTable from 'components/additionalProcesses.jsx/addadditionalprocessTable';
import MainCard from 'ui-component/cards/MainCard';

export default function AdditionalProcess(fetchData) { 
  return (
    <MainCard
      style={{
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#a11f23'
      }}
    >
      <AddAdditionalProcess />
      <Divider />
      <AddAdditionalProcessTable fetchData={fetchData} />
    </MainCard>
  );
}
