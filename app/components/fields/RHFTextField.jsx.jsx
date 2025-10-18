import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export default function RHFTextField({ name, control, label, ...props }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          size="small"
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error?.message || ' '}
          {...props}
        />
      )}
    />
  );
}
