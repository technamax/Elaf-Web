// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import React, { useState, useEffect } from "react";
import AddAdditionalServices from 'components/additionalProcesses.jsx/addadditionalServices'; 
import Divider from '@mui/material/Divider';
import AdditionalServiceTable from 'components/additionalProcesses.jsx/addadditionalserviceTable';



import axios from 'axios'
import MainCard from 'ui-component/cards/MainCard';

export default function AdditionalServices() {


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
    <AdditionalServiceTable/>
 </MainCard> 
  );
}
