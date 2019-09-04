import React from "react";

const Posts = ({ posts }: any) => {
  return (
    <ul className="list-group mb-4">
      {posts.map((post: any) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;