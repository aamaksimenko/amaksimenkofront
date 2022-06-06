import React, { memo } from "react";

import "../Header/index.css";

export default memo(function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__home">
          <a href="/">NEWS</a>
        </div>
        <div className="header__search">
          <button className="header__button">Search</button>
          <input type="search" className="header__input" />
        </div>
        <nav className="header__menu">
          <a href="/">Sign in</a>
          <a href="/">Registration</a>
        </nav>
      </div>
    </header>
  );
});
