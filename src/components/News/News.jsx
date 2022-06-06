import React, { useEffect, memo, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import OneNews from "../OneNews/OneNews";
import InfoBlock from "../InfoBlock/InfoBlock";
import { getNews } from "../../redux/actions/newsActions";

function News() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (!posts.length) {
    return <InfoBlock />;
  }
  return posts.map(({ id, title, article, tag, author, created_at }) => (
    <OneNews
      key={id}
      title={title}
      article={article}
      tag={tag}
      author={author}
      created_at={created_at}
    />
  ));
}

export default memo(News);
