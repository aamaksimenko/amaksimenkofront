import React from "react";
import Users from "components/Users";
import News from "components/News";

function App() {
  return (
    <header class="header">
      <div class="header__container">
        <span>News</span>
        <a href="/">Home page</a>
        <Users />
        <News />
      </div>
    </header>
  );
}

export default App;
