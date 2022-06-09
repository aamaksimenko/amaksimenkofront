import React, { memo } from 'react';
import * as PropTypes from 'prop-types';
import { TextField, Button } from '@mui/material/';

import Modal from '../Modal/Modal';
import './login.css';

function LogIn({ modalActiveIn, setModalActiveIn }) {
  return (
    <Modal active={modalActiveIn} setActive={setModalActiveIn}>
      <form action="">
        <h2>Sign in</h2>
        <div className="log-form">

          <div className="log-form__field">
            <p>Email</p>
            <TextField fullWidth required id="email_in" label="Email" />
          </div>

          <div className="log-form__field">
            <p>Password</p>
            <TextField fullWidth required id="password_in" label="Password" type="password" autoComplete="current-password" />
          </div>
          <div className="log-form__field">
            <div id="in"><Button>Sign in</Button></div>
            <div id="cls_in"><Button onClick={() => setModalActiveIn(false)}>Close</Button></div>
          </div>
        </div>
      </form>
    </Modal>
  );
}

LogIn.propTypes = {
  modalActiveIn: PropTypes.bool.isRequired,
  setModalActiveIn: PropTypes.func.isRequired,
};

export default memo(LogIn);
