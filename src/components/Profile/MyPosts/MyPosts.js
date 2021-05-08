import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
      <button>Add post</button>
      </div>
      <div>new post</div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount="15" />
        <Post message="It's my first post" likesCount="35" />
      </div>
    </div>
  );
};

export default MyPosts;
