import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LogIn from '../LogIn/LogIn';
import './index.css';
import Registration from '../Registration/Registration';
import { logOutUser } from '../../redux/actions/actionCreator';

function Header() {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(false);
  const [regState, setRegState] = useState(false);
  const tokenReg = useSelector((state) => state.userReducer.isAccess);

  const logOut = () => {
    localStorage.clear();
    dispatch(logOutUser());
  };
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

        {(tokenReg) ? (
          <nav className="header__menu">
            <button id="sign-out" type="button" onClick={logOut}>Log Out</button>
            <button id="page" type="button">Profile</button>
          </nav>
        ) : (
          <nav className="header__menu">
            <button id="sign-in" type="button" onClick={() => setLoginState(true)}>Sign in</button>
            <button id="out" type="button" onClick={() => setRegState(true)}>Registration</button>
          </nav>
        )}
      </div>
      <LogIn modalActiveIn={loginState} setModalActiveIn={setLoginState} />
      <Registration modalActiveReg={regState} setModalActiveReg={setRegState} />
    </header>
  );
}

export default memo(Header);
