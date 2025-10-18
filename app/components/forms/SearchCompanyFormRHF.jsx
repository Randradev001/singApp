import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { CompanySearchSchema } from 'components/fields/company.schema';
import RHFTextField from 'components/fields/RHFTextField.jsx';
import AddSignDialog from 'components/dialog/AddSignDialog';

export default function SearchCompanyFormRHF({ onSearch }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(CompanySearchSchema),
    defaultValues: { company: '' },
    mode: 'onSubmit',        // valida al enviar (menos re-renders)
    reValidateMode: 'onBlur' // y revalida al salir del campo
  });

   const [openAdd, setOpenAdd] = React.useState(false);

  const handleCreate = async (data) => {
    // 1) envía a backend (fetch/React Query mutation/Remix action)
    // 2) refresca la tabla (invalidate/refetch) o setRows([...rows, map(data)])
  };

  const onSubmit = (data) => {
    // Por ahora solo UI; si quieres: onSearch?.(data.company)
  };    

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1}
        alignItems="center"
      >
        <div style={{ flex: 1, width: '100%' }}>
          <RHFTextField
            name="company"
            control={control}
            label="Company name"
            placeholder="Ej: BIRCHWOOD"
            inputProps={{ id: 'company-input' }}  // id estable (SSR safe)
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          startIcon={<SearchIcon />}
          disabled={isSubmitting}
        >
          Search
        </Button>

        <Button
          type="button"
          variant="contained"
          color="success"
          startIcon={<FileDownloadIcon />}
          onClick={() => { /* botón sin acción por ahora */ }}
        >
          Export to excel
        </Button>

        <Button
          type="button"
          variant="contained"
          onClick={() => setOpenAdd(true)}  
          disabled={isSubmitting}
        >
          + Add
        </Button>

         <AddSignDialog
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onCreate={handleCreate}
      />
      </Stack>
    </form>
  );
}
