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
import SearchCompanyFormRHF from 'components/forms/SearchCompanyFormRHF';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';


const columns = [
  
  {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
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

          <Tooltip title="status">
            <IconButton
              size="small"
              color='primary'
              onClick={(e) => { e.stopPropagation(); handleDelete(params.row.id); }}
            >
              <RunningWithErrorsIcon fontSize="small" />
            </IconButton>
          </Tooltip>

        </Stack>
      ),
    },






  {
    field: 'Date',
    headerName: 'Work date',
    width: 250,
    editable: true,
  },
  {
    field: 'company',
    headerName: 'Company name',
    description: 'This column has a value getter and is sortable.',
    width: 300,
  /*  valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,*/
  },
  {
    field: 'Addres',
    headerName: 'Addres',
    width: 300,
    editable: true,
  },
  {
    field: 'Phone',
    headerName: 'Phone number',
    width: 200,
    editable: true,
  },
    {
    field: 'Agente',
    headerName: 'Agente',
    width: 200,
    editable: true,
  },
  {
    field: 'Place',
    headerName: 'Place',
    width: 200,
    editable: true,
  },

    {
    field: 'Miles',
    headerName: 'Miles',
    width: 200,
    editable: true,
  },

    {
    field: 'JobsType',
    headerName: 'Job',
    width: 200,
    editable: true,
  },

    {
    field: 'Cost',
    headerName: 'Cost',
    width: 200,
    editable: true,
  },

    {
    field: 'Misc',
    headerName: 'Misc',
    width: 200,
    editable: true,
  },


];

const rows = [
  {
    id: 1,
    Date: '2025-11-21',
    company: 'PETER WOLDU',
    Addres: '2348 FRANCIS ST.',
    Phone: '+1(431) 555-0123',
    Agente: 'HOME EXPERT',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 25,
    Misc: 'P = NOV 24 - 100% PETER'
  },
  {
    id: 2,
    Date: '2025-11-10',
    company: 'PETER WOLDU',
    Addres: '5400 GREEN SILVERBERRY DR',
    Phone: '+1(431) 555-0123',
    Agente: 'HOME EXPERT',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 25,
    Misc: 'P = NOV 14 - 100% PETER'
  },
  {
    id: 3,
    Date: '2025-11-10',
    company: 'PETER WOLDU',
    Addres: '36 HODGES BAY',
    Phone: '+1(431) 555-0123',
    Agente: 'HOME EXPERT',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 25,
    Misc: 'P = NOV 14TH - 100% PETER'
  },
  {
    id: 4,
    Date: '2025-10-27',
    company: 'AIDEEN ZAREH',
    Addres: '302 CAVENDISH ST.',
    Phone: '+1(431) 555-0123',
    Agente: 'HOME EXPERT',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 25,
    Misc: 'P = OCT 31ST - 100% AIDEEN'
  },
  {
    id: 5,
    Date: '2025-10-27',
    company: 'LISA TROMBETTA',
    Addres: '1303 VICTORY CRES',
    Phone: '+1(431) 555-0123',
    Agente: 'REALTY HUB',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 19,
    Misc: 'P = OCT 31'
  },
  {
    id: 6,
    Date: '2025-10-24',
    company: 'KEITH BRITTON',
    Addres: '5248 GREEN APPLE DR.',
    Phone: '+1(431) 555-0123',
    Agente: '2% REALTY',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 25,
    Misc: 'P = OCT 24'
  },
  {
    id: 7,
    Date: '2025-10-23',
    company: 'DAN THIBAULT',
    Addres: '5760 PEARSALL CR.',
    Phone: '+1(431) 555-0123',
    Agente: 'C21',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 25,
    Misc: 'P = NOV 17'
  },
  {
    id: 8,
    Date: '2025-10-22',
    company: 'STACEY MADUCK',
    Addres: '2095 WASCANA GREENS',
    Phone: '+1(431) 555-0123',
    Agente: 'C21',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN x2',
    Cost: 38,
    Misc: 'P = JAN 30 - 2 SIGNS ON PROPERTY'
  },
  {
    id: 9,
    Date: '2025-10-22',
    company: 'MARC HEINTZ',
    Addres: '2346 7TH AVE. E.',
    Phone: '+1(431) 555-0123',
    Agente: 'C21',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN x2',
    Cost: 38,
    Misc: 'P = OCT 27 - 2 SIGNS ON PROPERTY'
  },
  {
    id: 10,
    Date: '2025-10-21',
    company: 'STACEY MADUCK',
    Addres: '3250 RAE ST.',
    Phone: '+1(431) 555-0123',
    Agente: 'C21',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 19,
    Misc: 'P = JAN 15'
  },
  {
    id: 11,
    Date: '2025-10-21',
    company: 'ABBY REDEKOPP',
    Addres: '130 WALDEN CRES.',
    Phone: '+1(431) 555-0123',
    Agente: 'C21',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 19,
    Misc: 'P = NOV 10'
  },
  {
    id: 12,
    Date: '2025-10-20',
    company: 'SHARON CLARK',
    Addres: '3630 HAUGHTON RD.',
    Phone: '+1(431) 555-0123',
    Agente: 'BOYES GROUP',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 19,
    Misc: 'P = NOV 14'
  },
  {
    id: 13,
    Date: '2025-10-20',
    company: 'JAZZ / AIDEEN',
    Addres: '123 POPLAR BLUFF CRES.',
    Phone: '+1(431) 555-0123',
    Agente: 'HOME EXPERT',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 25,
    Misc: 'P = OCT 24 - 100% JAZZ'
  },
  {
    id: 14,
    Date: '2025-10-20',
    company: 'JAZZ / AIDEEN',
    Addres: '4313 WAKELING ST.',
    Phone: '+1(431) 555-0123',
    Agente: 'HOME EXPERT',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 25,
    Misc: 'P = OCT 24TH - 100% JAZZ'
  },
  {
    id: 15,
    Date: '2025-10-19',
    company: 'KEITH BRITTON',
    Addres: '1222 CATLEY BAY N.',
    Phone: '+1(431) 555-0123',
    Agente: '2% REALTY',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 25,
    Misc: 'P = OCT 17'
  },
  {
    id: 16,
    Date: '2025-10-18',
    company: 'KEITH BRITTON',
    Addres: '24 ODIN WAY',
    Phone: '+1(431) 555-0123',
    Agente: '2% REALTY',
    Place: 'REGINA',
    Miles: 0,
    JobsType: 'SOLD DOWN',
    Cost: 25,
    Misc: 'REMOVAL OCTOBER 17'
  },
  {
    id: 17,
    Date: '2025-10-17',
    company: 'JASON COSSETTE',
    Addres: 'BETHUNE ACREAGE',
    Phone: '+1(431) 555-0123',
    Agente: 'SUTTON',
    Place: 'BETHUNE',
    Miles: 136,
    JobsType: 'SOLD DOWN x',
    Cost: 138.6,
    Misc: '50.6294324, -105.2073582  MILEAGE CHARGE = $81.60'
  }
];


export default function DataGridOperation() {
  return (
    <MainCard title="Company list">
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
