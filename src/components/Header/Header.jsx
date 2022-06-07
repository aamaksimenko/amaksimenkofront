import React, { memo, useState } from 'react';

import Modal from '../Modal/Modal';

import './index.css';

function Header() {
  const [modalActive, setModalActive] = useState(true);
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
          <button type="button" onClick={() => setModalActive(true)}>Sign in</button>
          <button type="button">Registration</button>
        </nav>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <form action="">
          <p>First input</p>
          <input type="text" />
          <p>Second input</p>
          <input type="text" />
          <p>Third input</p>
          <input type="text" />
          <br />
          <button type="button" className="submit">sign in</button>
        </form>
      </Modal>
    </header>
  );
}

export default memo(Header);
