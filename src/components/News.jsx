import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OneNews from "./OneNews";
import { fetchNews } from "../actions/newsActions";

export default function News() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.news);
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

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
}
