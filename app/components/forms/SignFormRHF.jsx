// app/components/forms/SignFormRHF.jsx
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';

import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// ----- opciones demo (reemplaza por las tuyas) -----
const AGENTS = ['KEITH BARTLETT', 'PETER WOLDU', 'AIDEEN ZAREH', 'STACEY MADUCK'];
const COMPANIES = ['SUTTON', 'C21', 'HOME EXPERT', 'REALTY HUB', '2% REALTY', 'BOYES GROUP'];
const PLACES = ['REGINA', 'BETHUNE', 'MOOSE JAW'];
const JOBS = ['UP', 'DOWN', 'SOLD UP', 'SOLD DOWN'];

// Sugerencias de direcciones para el Autocomplete
const ADDRESS_SUGGESTIONS = [
  '2145 ATKINSON ST.',
  '2348 FRANCIS ST.',
  '5400 GREEN SILVERBERRY DR',
  '36 HODGES BAY',
  '302 CAVENDISH ST.',
  '130 WALDEN CRES.'
];

// ----- esquema de validación -----
const SignSchema = z.object({
  date: z.string().min(1, 'Requerido'),
  agent: z.string().min(1, 'Requerido'),
  address: z.string().min(3, 'Mínimo 3 caracteres'),
  company: z.string().min(1, 'Requerido'),
  place: z.string().min(1, 'Requerido'),
  miles: z.coerce.number().min(0, 'No negativo').default(0),
  job: z.string().min(1, 'Requerido'),
  cost: z.coerce.number().min(0, 'No negativo').default(0),
  misc: z.string().optional().nullable()
});

export default function SignFormRHF({ onSubmit, formId = 'sign-form', hideInnerButtons = false }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm({
    resolver: zodResolver(SignSchema),
    defaultValues: {
      date: '',
      agent: '',
      address: '',
      company: '',
      place: '',
      miles: 0,
      job: 'UP',
      cost: 0,
      misc: ''
    },
    mode: 'onSubmit',
    reValidateMode: 'onBlur'
  });

  const submitHandler = (data) => {
    // aquí disparas tu mutation / action
    // console.log(data);
    onSubmit?.(data);
  };

  return (
     <Box component="form" id={formId} noValidate onSubmit={handleSubmit(submitHandler)}>
     <Stack spacing={1}>
  {/* Fila 1: DATE + AGENT */}
  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap flexWrap="wrap">
    <Box sx={{ flex: 1, minWidth: 220 }}>
      <Controller
        name="date"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="sign-date"
            label="DATE"
            type="date"
            size="small"
            fullWidth
            InputLabelProps={{ shrink: true }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message || ' '}
          />
        )}
      />
    </Box>

    <Box sx={{ flex: 1, minWidth: 220 }}>
      <Controller
        name="agent"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="sign-agent"
            label="AGENT"
            select
            size="small"
            fullWidth
            error={!!fieldState.error}
            helperText={fieldState.error?.message || ' '}
          >
            {AGENTS.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </TextField>
        )}
      />
    </Box>
  </Stack>

  {/* Fila 2: ADDRESS (Autocomplete, full width) */}
  <Controller
    name="address"
    control={control}
    render={({ field, fieldState }) => (
      <Autocomplete
        id="sign-address"
        freeSolo
        options={ADDRESS_SUGGESTIONS}
        value={field.value || ''}
        onChange={(_, val) => field.onChange(val ?? '')}
        onInputChange={(_, val) => field.onChange(val ?? '')}
        renderInput={(params) => (
          <TextField
            {...params}
            label="ADDRESS"
            size="small"
            fullWidth
            error={!!fieldState.error}
            helperText={fieldState.error?.message || ' '}
          />
        )}
      />
    )}
  />

  {/* Fila 3: COMPANY + PLACE */}
  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap flexWrap="wrap">
    <Box sx={{ flex: 1, minWidth: 220 }}>
      <Controller
        name="company"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="sign-company"
            label="COMPANY"
            select
            size="small"
            fullWidth
            error={!!fieldState.error}
            helperText={fieldState.error?.message || ' '}
          >
            {COMPANIES.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </TextField>
        )}
      />
    </Box>

    <Box sx={{ flex: 1, minWidth: 220 }}>
      <Controller
        name="place"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="sign-place"
            label="PLACE"
            select
            size="small"
            fullWidth
            error={!!fieldState.error}
            helperText={fieldState.error?.message || ' '}
          >
            {PLACES.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </TextField>
        )}
      />
    </Box>
  </Stack>

  {/* Fila 4: MILES + JOB + COST */}
  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap flexWrap="wrap">
    <Box sx={{ flex: 1, minWidth: 160 }}>
      <Controller
        name="miles"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="sign-miles"
            label="MILES"
            type="number"
            size="small"
            fullWidth
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message || ' '}
          />
        )}
      />
    </Box>

    <Box sx={{ flex: 1, minWidth: 160 }}>
      <Controller
        name="job"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="sign-job"
            label="JOB"
            select
            size="small"
            fullWidth
            error={!!fieldState.error}
            helperText={fieldState.error?.message || ' '}
          >
            {JOBS.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </TextField>
        )}
      />
    </Box>

    <Box sx={{ flex: 1, minWidth: 160 }}>
      <Controller
        name="cost"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="sign-cost"
            label="COST"
            type="number"
            size="small"
            fullWidth
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0, step: 0.01 }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message || ' '}
          />
        )}
      />
    </Box>
  </Stack>

  {/* Fila 5: MISC (multilínea grande) */}
  <Controller
    name="misc"
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        id="sign-misc"
        label="MISC"
        size="small"
        fullWidth
        multiline
        minRows={3}
      />
    )}
  />

  {/* Botones */}
  {!hideInnerButtons && (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mt: 1 }}>
      <Button type="submit" variant="contained" disabled={isSubmitting}>Save</Button>
      <Button type="button" variant="outlined" onClick={() => reset()} disabled={isSubmitting}>Clear</Button>
    </Stack>
  )}
</Stack>

    </Box>
  );
}