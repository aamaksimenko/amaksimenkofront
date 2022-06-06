import React, { useEffect, memo, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OneNews from '../OneNews/OneNews';
import InfoBlock from '../InfoBlock/InfoBlock';
import { getNews } from '../../redux/actions/newsActions';

function News() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.newsReducer);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (!posts.length) {
    return <InfoBlock />;
  }

  return (
    <>
      {posts.map((
        { post },
      ) => (
        <OneNews
          key={post.id}
          title={post.title}
          article={post.article}
          tag={post.tag}
          author={post.author}
          created_at={post.created_at}
        />
      ))}
      ,
    </>
  );
}

export default memo(News);
