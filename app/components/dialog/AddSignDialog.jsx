// app/components/dialogs/AddSignDialog.jsx
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import SignFormRHF from 'components/forms/SignFormRHF';


export default function AddSignDialog({ open, onClose, onCreate }) {
  const formId = 'add-sign-form';

  const handleSubmitFromForm = async (data) => {
    await onCreate?.(data);     // aquí guardas (API/mutation)
    onClose?.();                // cerrar al terminar OK
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" keepMounted>
      <DialogTitle>Add work to do</DialogTitle>
      <DialogContent dividers>
        <SignFormRHF
          formId={formId}
          hideInnerButtons
          onSubmit={handleSubmitFromForm}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="text">Cancelar</Button>
        {/* Importante: este botón dispara el submit del form por id */}
        <Button type="submit" form={formId} variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
