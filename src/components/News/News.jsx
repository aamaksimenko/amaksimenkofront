import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneNews from "../OneNews/OneNews";
import { getNews } from "../../redux/actions/newsActions";

export default memo(function News() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (!posts.length) {
    return <div className="not_news">No news</div>;
  }
  return posts.map((post) => (
    <OneNews
      title={post.title}
      article={post.article}
      tag={post.tag}
      author={post.author}
      created_at={post.created_at}
      key={post.id}
    />
  ));
});
