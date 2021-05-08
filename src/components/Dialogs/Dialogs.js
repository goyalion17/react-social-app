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
  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Irinka" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "What's up" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItem name={dialogsData[0].name} id={dialogsData[0]} />
        <DialogsItem name={dialogsData[1].name} id={dialogsData[1]} />
      </div>
      <div className={s.messages}>
        <Messages message={messagesData[0].message} />
        <Messages message={messagesData[1].message} />
        <Messages message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
