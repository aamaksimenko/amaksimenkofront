import React, { memo } from "react";

export default memo(function OneNews({
  title,
  article,
  tag,
  author,
  created_at,
}) {
  return (
    <div className="news">
      <h2 className="news__title">{title}</h2>
      <div className="news__content">
        <div className="news__image">Image here</div>
        <div className="news__article">{article}</div>
      </div>
      <div className="news__info info">
        <div className="info__tag">Tags: {tag}</div>
        <div className="info__created">
          <span>{author}</span>
          <br />
          <span>{created_at}</span>
        </div>
      </div>
    </div>
  );
});
