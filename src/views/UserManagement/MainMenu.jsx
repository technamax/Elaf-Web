import React from 'react';
import Divider from '@mui/material/Divider';
import AddMainMenu from 'components/MainMenu/addmainMenu';
import AddMainMenuTable from 'components/MainMenu/addmainmenuTable';


export default function Application(fetchData) {
  return (
    <>
      <AddMainMenu/>
      <Divider />
      <AddMainMenuTable
            fetchData={fetchData}

      />
    </>
  );
}


