import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import s from "./Profile.module.css";

const Profile = (props) => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 35 },
    { id: 2, message: "It's my first post", likesCount: 35 },
    { id: 2, message: "It's my first post", likesCount: 35 },
  ];
  return (
    <div>
      <ProfileInfo />

      <MyPosts posts={posts}/>
    </div>
  );
};

export default Profile;
