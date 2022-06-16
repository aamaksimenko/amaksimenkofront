import React, { memo } from 'react';
import { string } from 'prop-types';

import './index.css';

function OneNews({
  title,
  article,
  tag,
  author,
  CreatedAt,
}) {
  return (
    <div className="news">
      <h2 className="news__title">{title}</h2>
      <div className="news__content">
        <div className="news__image">Image here</div>
        <div className="news__article">{article}</div>
      </div>
      <div className="news__info info">
        <div className="info__tag">
          Tags:
          {tag}
        </div>
        <div className="info__created">
          <span>{author}</span>
          <br />
          <span>{CreatedAt}</span>
        </div>
      </div>
    </div>
  );
}

OneNews.propTypes = {
  title: string.isRequired,
  article: string.isRequired,
  tag: string.isRequired,
  author: string.isRequired,
  CreatedAt: string.isRequired,
};

export default memo(OneNews);
