import React, { memo } from 'react';
import * as PropTypes from 'prop-types';

import './index.css';

function OneNews({
  title, article, tag, author, CreatedAt,
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
  title: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  CreatedAt: PropTypes.string.isRequired,
};

export default memo(OneNews);
