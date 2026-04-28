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
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SearchCompanyFormRHF from 'components/forms/SearchCompanyFormRHF';


const columns = [
  
  {
      field: 'actions',
      headerName: 'Actions',
      width: 250,
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

          <Tooltip title="route generate integration">
            <IconButton
              size="small"
              color='primary'
              onClick={(e) => { e.stopPropagation(); handleDelete(params.row.id); }}
            >
              <IntegrationInstructionsIcon fontSize="small" />
            </IconButton>
          </Tooltip>

           <Tooltip title="pdf generate report">
            <IconButton
              size="small"
              color='error'
              onClick={(e) => { e.stopPropagation(); handleDelete(params.row.id); }}
            >
              <PictureAsPdfIcon fontSize="small" />
            </IconButton>
          </Tooltip>


        </Stack>
      ),
    },






  {
    field: 'date',
    headerName: 'Report date',
    flex: 1,          // ocupa espacio flexible
    minWidth: 100,
    editable: true,
  },
  {
    field: 'cant',
    headerName: 'Number of works',
    description: 'This column has a value getter and is sortable.',
        flex: 1,          // ocupa espacio flexible
    minWidth: 100,
  /*  valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,*/
  },
  
  {
    field: 'kmroad',
    headerName: 'kilometers to road',
       flex: 1,          // ocupa espacio flexible
    minWidth: 100,
    editable: true,
  },

    {
    field: 'status',
    headerName: 'Status',
        flex: 1,          // ocupa espacio flexible
    minWidth: 100,
    editable: true,
  },

{
  field: 'comp',
  headerName: 'Completed',
      flex: 1,          // ocupa espacio flexible
    minWidth: 100,
  renderCell: ({ value }) => (value ? 'Yes' : 'No')
}

];

const rows = [
  { id: 1,  date: '2025-11-10', cant: 12, kmroad: 18, status: 'Closed',      comp: true  },
  { id: 2,  date: '2025-11-11', cant:  9, kmroad: 10, status: 'Closed',      comp: true  },
  { id: 3,  date: '2025-11-12', cant:  7, kmroad: 12, status: 'Closed',      comp: true  },
  { id: 4,  date: '2025-10-13', cant:  5, kmroad:  8, status: 'Closed',      comp: true  },
  { id: 5,  date: '2025-10-14', cant:  4, kmroad:  6, status: 'Closed',      comp: true  },
  { id: 6,  date: '2025-10-15', cant:  6, kmroad: 14, status: 'Closed',      comp: true  },
  { id: 7,  date: '2025-10-16', cant:  3, kmroad:  9, status: 'In progress', comp: false },
  { id: 8,  date: '2025-10-17', cant:  2, kmroad: 22, status: 'Open',        comp: false },
  { id: 9,  date: '2025-10-18', cant:  1, kmroad:  5, status: 'Open',        comp: false },
];


export default function DataGridCompany() {
  return (
    <MainCard title="Report and integration daily works">
       <SearchCompanyFormRHF />
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
