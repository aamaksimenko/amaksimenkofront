import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TextField } from '@mui/material';
import Loader from '../../components/Loader/Loader';
// import OneNews from '../../components/OneNews/OneNews';
import { userData, userNews } from '../../redux/actions/actionCreator';

function UserPage() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userData.user);
  const news = useSelector((state) => state.userNews.user);
  const isLoadingUser = useSelector((state) => state.userData.isLoading);
  const isLoadingNews = useSelector((state) => state.userNews.isLoading);

  useEffect(() => {
    dispatch(userData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(userNews());
  }, [dispatch]);

  if (isLoadingUser || isLoadingNews) {
    return (
      <Loader />
    );
  }

  console.log(`${user.id}: ${user.name} : ${user.email}`);
  console.log(news);

  return (
    <div className="userPage">
      <div className="userProfile">
        <h2>User Profile</h2>
        <TextField
          disabled
          id="userName"
          label="Name"
          defaultValue={user.name}
        />
        <TextField
          disabled
          id="userEmail"
          label="Email"
          defaultValue={user.email}
        />
        <h2>User News</h2>
      </div>

      {/* {news.map((post) => (
        <OneNews
          key={post.id}
          title={post.title}
          article={post.article}
          tag={post.tag}
          author={post.author}
          CreatedAt={post.created_at}
        />
      ))} */}
    </div>
  );
}

export default memo(UserPage);
