import React from "react";

export default function Header() {
  return (
    <header class="header">
      <div class="header__container">
        <div className="header__home">
          <a href="/">News</a>
        </div>
        <nav className="header__menu">
          <a href="/">Sign in</a>
          <a href="/">Registration</a>
        </nav>
      </div>
    </header>
  );
}
