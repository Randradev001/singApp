import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { DataGrid } from '@mui/x-data-grid';
import MainCard from 'ui-component/cards/MainCard';

// Íconos MUI
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const columns = [
  
  {
      field: 'actions',
      headerName: 'Actions',
      width: 140,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Stack direction="row" spacing={1} sx={{ pl: 0.5 }}>
          <Tooltip title="View">
            <IconButton
              size="small"
              color='primary'
              onClick={(e) => { e.stopPropagation(); handleView(params.row); }}
            >
              <VisibilityIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit">
            <IconButton
              size="small"
              color='blue'
              onClick={(e) => { e.stopPropagation(); handleEdit(params.row); }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton
              size="small"
              color='error'
              onClick={(e) => { e.stopPropagation(); handleDelete(params.row.id); }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },






  {
    field: 'Company',
    headerName: 'Company name',
    width: 250,
    editable: true,
  },
  {
    field: 'Owner',
    headerName: 'Administrator name',
    description: 'This column has a value getter and is sortable.',
    width: 300,
  /*  valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,*/
  },
  
  {
    field: 'Phone',
    headerName: 'Phone number',
    width: 200,
    editable: true,
  },

    {
    field: 'Addres',
    headerName: 'Addres',
    width: 300,
    editable: true,
  },
];

const rows = [
  { id: 1, Company: 'ADAM NIESNER', Addres: 'Jon 471 r2g 069', Phone: 123456789, Owner:'Alexander Casas '},
  { id: 2, Company: 'AL SCHWEITZER', Addres: 'Cersei 471 r2g 069', Phone: 123456789, Owner: 'Alberto mcay ' },
  { id: 3, Company: 'ANDY SCHMIDT', Addres: 'Jaime 471 r2g 069', Phone: 123456789, Owner: 'Jhon Pritchard ' },
  { id: 4, Company: 'ANNETTE KATCHAN', Addres: 'Arya 471 r2g 069', Phone: 123456789, Owner: 'Emily Corp ' },
  { id: 5, Company: 'B.BAUMGARTNER', Addres: 'Daenerys 471 r2g 069', Phone: 123456789, Owner: 'Andres Andrade ' },
  { id: 6, Company: 'BARRY DUNDAS', Addres: '471 r2g 069', Phone: 123456789, Owner: 'Dylan' },
  { id: 7, Company: 'BILL RIPPLINGER', Addres: 'Ferrara 471 r2g 069', Phone: 123456789, Owner: 'Franchesca smith ' },
  { id: 8, Company: 'BIRCHWOOD', Addres: 'Rossini 471 r2g 069', Phone: 123456789, Owner: 'Alex kennedy ' },
  { id: 9, Company: 'BRENDA HEIBEIN', Addres: 'Harvey 471 r2g 069', Phone: 123456789, Owner: 'Alexander Casas ' },
];

export default function DataGridCompany() {
  return (
    <MainCard title="Company list">
       <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        filterModel={{
        items: [],
       
        }}
        initialState={{
        pagination: {
            paginationModel: {
            pageSize: 5,
            },
        },
        }}
        pageSizeOptions={[5]}
       // checkboxSelection
      //  disableRowSelectionOnClick
      />
    </Box>
  </MainCard>
   
  );
}
