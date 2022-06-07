import React, { memo } from 'react';
import { Alert } from '@mui/material';
import * as PropTypes from 'prop-types';

function InfoBlock({ severity, text }) {
  return (
    <Alert sx={{ width: '100%' }} severity={severity}>
      {text}
    </Alert>
  );
}

InfoBlock.propTypes = {
  severity: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default memo(InfoBlock);
