import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OneNews from '../../components/OneNews/OneNews';
import Loader from '../../components/Loader/Loader';
import { getNews } from '../../redux/actions/actionCreator';

import './index.css';

function MainPage() {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.newsReducer.news);
  const isLoading = useSelector((state) => state.newsReducer.isLoading);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Loader />
    );
  }

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
