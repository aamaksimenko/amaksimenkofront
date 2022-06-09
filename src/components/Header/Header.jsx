import React, { memo, useState } from 'react';
import {
  Box, TextField, Button,
} from '@mui/material/';

import Modal from '../Modal/Modal';
import './index.css';

function Header() {
  const [modalActiveIn, setModalActiveIn] = useState(false);
  const [modalActiveReg, setModalActiveReg] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__home">
          <a href="/">NEWS</a>
        </div>
        <div className="header__search">
          <button type="submit" className="header__button">Search</button>
          <input type="search" className="header__input" />
        </div>
        <nav className="header__menu">
          <button id="sign-in" type="button" onClick={() => setModalActiveIn(true)}>Sign in</button>
          <button id="out" type="button" onClick={() => setModalActiveReg(true)}>Registration</button>
        </nav>
      </div>
      <Modal active={modalActiveIn} setActive={setModalActiveIn}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <h2>Sign in</h2>
          <div className="log-form">

            <div className="log-form__field">
              <p>Email</p>
              <TextField fullWidth required id="email" label="Email" />
            </div>

            <div className="log-form__field">
              <p>Password</p>
              <TextField fullWidth required id="password" label="Password" type="password" autoComplete="current-password" />
            </div>
            <div className="log-form__field">
              <div id="in"><Button>Sign in</Button></div>
              <div id="cls"><Button onClick={() => setModalActiveIn(false)}>Close</Button></div>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal active={modalActiveReg} setActive={setModalActiveReg}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <h2>Registration form</h2>
          <div className="reg-form">
            <div className="reg-form__field">
              <p>Name</p>
              <TextField fullWidth required id="name" label="Name" />
            </div>
            <div className="reg-form__field">
              <p>Email</p>
              <TextField fullWidth required id="email" label="Email" />
            </div>
            <div className="reg-form__field">
              <p>Password</p>
              <TextField fullWidth required id="password" label="Password" type="password" autoComplete="current-password" />
            </div>
            <div className="reg-form__field">
              <div id="reg"><Button>Registration</Button></div>
              <div id="cls"><Button onClick={() => setModalActiveReg(false)}>Close</Button></div>
            </div>
          </div>
        </Box>
      </Modal>
    </header>
  );
}

export default memo(Header);
