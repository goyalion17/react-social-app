import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "It's my first post", likesCount: 35 },
      { id: 2, message: "It's my first post", likesCount: 35 },
      { id: 2, message: "It's my first post", likesCount: 35 },
    ],
    newPostText: "it-kamasutra",
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Irinka" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "What's up" },
      { id: 3, message: "What's up" },
      { id: 3, message: "What's up" },
      { id: 3, message: "What's up" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = ''
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
