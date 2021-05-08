import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 35 },
  ];
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
        <Post
          message={postsData[0].message}
          likesCount={postsData[0].likesCount}
        />
        <Post
          message={postsData[1].message}
          likesCount={postsData[1].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
