import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OneNews from "./OneNews";
import { fetchNews } from "../actions/newsActions";

export default function News() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.news);
  dispatch(fetchNews());
  if (!posts.length) {
    return <div className="not_news"></div>;
  }
  return posts.map((post) => <OneNews post={post} key={post.id} />);
}
