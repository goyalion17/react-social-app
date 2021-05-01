import React from "react";
import s from "./MyPosts.module.css";
import Post from "./MyPosts/Post";

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <div>new post</div>
      <div className={s.posts}>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;
