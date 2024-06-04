// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import React, { useState, useEffect } from "react";
import AddAdditionalProcess from "components/additionalProcesses.jsx/addadditionalProcess";
import Divider from '@mui/material/Divider';
import AdditionalProcessTable from "components/additionalProcesses.jsx/addadditionalprocessTable";



import axios from 'axios'
import MainCard from 'ui-component/cards/MainCard';

export default function AdditionalProcess() {


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
    <AdditionalProcessTable/>
   
</MainCard> 

  );
}


