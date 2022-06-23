import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Loader from '../../components/Loader/Loader';
import OneNews from '../../components/OneNews/OneNews';
import AddNews from '../../components/AddNews/AddNews';
import EditProfile from '../../components/EditProfile/EditProfile';

import { userData } from '../../redux/actions/actionCreator';

import './UserPage.css';

function UserPage() {
  const dispatch = useDispatch();
  const [isAddNews, setModalAddNews] = useState(false);
  const [isEditProfile, setModalEditProfile] = useState(false);

  const data = useSelector((state) => state.userData.data);
  const edit = useSelector((state) => state.editProfileReducer.user);
  const isAccess = useSelector((state) => state.userReducer.isAccess);
  const isEdit = useSelector((state) => state.editProfileReducer.isAccess);
  const isNews = useSelector((state) => state.addNewsReducer.isAccess);

  useEffect(() => {
    if (isAccess) {
      dispatch(userData());
    }
  }, [dispatch, isAccess, isNews, isEdit]);

  if (!isAccess) {
    return <Loader />;
  }

  return (
    <div className="user-page">
      <div className="user-profile">
        <Card fullwidth="true" sx={{ display: 'flex' }}>
          <CardMedia
            sx={{ maxWidth: 140 }}
            component="img"
            height="140"
            image=""
            alt="User avatar"
          />
          <Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {(edit.name) ? edit.name : data.user?.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {(edit.email) ? edit.email : data.user?.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setModalEditProfile(true)}>
                Edit Profile
              </Button>
              <Button size="small" onClick={() => setModalAddNews(true)}>
                Add news
              </Button>
            </CardActions>
            <AddNews isAddNews={isAddNews} setAddNews={setModalAddNews} />
            <EditProfile isEditProfile={isEditProfile} setEditProfile={setModalEditProfile} />
          </Box>

        </Card>
      </div>
      <div className="userNews">
        <Typography component="div" variant="h2">
          User News
        </Typography>
        <div className="userNews__content">
          {data.news?.length ? (
            data.news?.map((post) => (
              <OneNews
                key={post.id}
                title={post.title}
                article={post.article}
                tag={post.tag}
                author={post.author}
                CreatedAt={post.created_at}
              />
            ))
          ) : (
            <p>No news</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(UserPage);
