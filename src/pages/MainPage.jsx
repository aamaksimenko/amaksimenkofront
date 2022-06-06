import React, { memo } from "react";

import News from "../components/News/News";
import "./index.css";

function OneNews({ post }) {
  return (
    <div className="wrapper">
      <div className="content__container posts">
        <News />
      </div>
    </div>
  );
}

export default memo(OneNews);
