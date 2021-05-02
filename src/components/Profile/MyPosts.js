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
        <Post message="Hi, how are you?" likeCount="15" />
        <Post message="It's my first post" likeCount="35" />
      </div>
    </div>
  );
};

export default MyPosts;
