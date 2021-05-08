import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Messages = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItem name="Dimych" id="1" />
        <DialogsItem name="Irinka" id="2" />
        <DialogsItem name="Sveta" id="3" />
        <DialogsItem name="Sasha" id="4" />
        <DialogsItem name="Viktor" id="5" />
        <DialogsItem name="Valera" id="6" />
      </div>
      <div className={s.messages}>
        <Messages message="Hi" />
        <Messages message="Hello" />
        <Messages message="What's up" />
        <Messages message="What's up" />
        <Messages message="What's up" />
        <Messages message="What's up" />
      </div>
    </div>
  );
};

export default Dialogs;
