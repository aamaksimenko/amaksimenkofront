import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OneNews from '../OneNews/OneNews';
import { userNews } from '../../redux/actions/actionCreator';

function CurrentNews() {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.userNews.user);

  useEffect(() => {
    dispatch(userNews());
  }, [dispatch]);

  return (
    <div className="userNews">
      <div className="userNews__content">
        {news.map((post) => (
          <OneNews
            key={post.id}
            title={post.title}
            article={post.article}
            tag={post.tag}
            author={post.author}
            CreatedAt={post.created_at}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(CurrentNews);
