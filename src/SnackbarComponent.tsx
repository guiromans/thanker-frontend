// SnackbarComponent.js
import React, { useState } from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Snackbar</button>
      <Snackbar
        open={open}
        autoHideDuration={3000} // Adjust as needed
        //onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleClose} severity="success">
          Snackbar message here.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackbarComponent;