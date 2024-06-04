import React from 'react';
import AddRole from 'components/Roles/addRole';
import Divider from '@mui/material/Divider';
import AddRoleTable from 'components/Roles/addroleTable';


export default function Application(fetchData) {
  return (
    <>
      <AddRole />
      <Divider />
      <AddRoleTable
       fetchData={fetchData} />
    </>
  );
}

