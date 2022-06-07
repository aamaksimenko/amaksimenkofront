import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Grid } from '@mui/material';

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
    <div className="main-page">
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
  );
}

export default memo(MainPage);
