import React, { memo } from 'react';
import { string } from 'prop-types';
import { Alert } from '@mui/material';

function InfoBlock({ severity, text }) {
  return (
    <Alert sx={{ width: '100%' }} severity={severity}>
      {text}
    </Alert>
  );
}

InfoBlock.propTypes = {
  severity: string.isRequired,
  text: string.isRequired,
};

export default memo(InfoBlock);
