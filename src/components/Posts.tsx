import React from "react";
import { postType } from "./../interfaces";

interface PostsPropsI {
  posts: postType[];
}

const Posts = ({ posts }: PostsPropsI) => {
  return (
    <ul className="list-group mb-4">
      {posts.map((post: postType) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
