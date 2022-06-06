import React, { memo } from "react";

import News from "../components/News/News";
import "./index.css";

export default memo(function OneNews({ post }) {
  return (
    <div className="wrapper">
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