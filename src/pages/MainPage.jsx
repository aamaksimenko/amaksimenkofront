import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OneNews from '../components/OneNews/OneNews';
// import InfoBlock from '../components/InfoBlock/InfoBlock';
import { getNews } from '../redux/actions/newsActions';
import './index.css';

function MainPage() {
  const dispatch = useDispatch();

  const { news } = useSelector((state) => state.newsReducer);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  // if (!news.length) {
  //   return <InfoBlock />;
  // }

  return (
    <>
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
      ,
    </>
  );
}

export default memo(MainPage);
