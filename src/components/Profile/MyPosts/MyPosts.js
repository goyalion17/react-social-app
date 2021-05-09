import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
 

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
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
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
