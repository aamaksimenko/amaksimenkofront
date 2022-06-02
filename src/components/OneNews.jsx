import React from "react";

export default function OneNews({ post }) {
  return (
    <div className="news">
      <h2 className="news__title">{post.title}</h2>
      <div className="news__content">
        <div className="news__image">Image here</div>
        <div className="news__article">{post.article}</div>
      </div>
      <div className="news__info info">
        <div className="info__tag">Tags: {post.tag}</div>
        <div className="info__created">
          <span>{post.author}</span>
          <br />
          <span>{post.created_at}</span>
        </div>
      </div>
    </div>
  );
}
