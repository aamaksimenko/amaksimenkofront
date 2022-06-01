import React from "react";
import OneNews from "./OneNews";

export default function News({ posts }) {
  return posts.map((post) => <OneNews post={post} key={post.toString()} />);
}
