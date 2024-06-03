import React from 'react';
import Divider from '@mui/material/Divider';
import AddSubMenu from 'components/SubMenu/addsubMenu';
import AddSubMenuTable from 'components/SubMenu/addsubmenuTable';

export default function Application(fetchData) {
  return (
    <>
      <AddSubMenu />
      <Divider />
      <AddSubMenuTable 
      fetchData={fetchData}
      />
    </>
  );
}



