import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 35 },
    { id: 2, message: "It's my first post", likesCount: 35 },
    { id: 2, message: "It's my first post", likesCount: 35 },
  ];

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs />} />
          <Route path="/profile" render={() => <Profile posts={posts}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
