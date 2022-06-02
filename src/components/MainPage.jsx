import React from "react";
import News from "./News";
import Header from "./Header";

export default function OneNews({ post }) {
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
}
