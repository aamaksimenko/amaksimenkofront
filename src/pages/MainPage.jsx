import React, { memo } from "react";

import News from "../components/News/News";
import Header from "../components/Header/Header";

export default memo(function OneNews({ post }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="content__container">
          <div className="content__posts posts">
            <News />
          </div>
        </div>
      </div>
    </div>
  );
});
