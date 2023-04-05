import { Box, styled } from '@mui/material';
import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import BranchPage from '../../../Pages/Admin/Branch/BranchPage';

function Branches() {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <BranchPage />
        </Box>
      </Box>
    </div>
  )
}

export default Branches
