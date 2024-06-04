import React from 'react';
import Divider from '@mui/material/Divider';
import AddUsers from 'components/Users/addUsers';
import AddUsersTable from 'components/Users/addusersTable';

export default function Application(fetchData) {
  return (
    <>
      <AddUsers />
      <Divider />
      <AddUsersTable
      fetchData={fetchData}

      />
    </>
  );
}
