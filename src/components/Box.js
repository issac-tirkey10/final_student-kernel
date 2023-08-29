import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Box.css";

export default function Box() {
  const user = useSelector(selectUser);

  return (
    <div className="Box">
      <div className="Box__info">
        <Avatar
          src={
            user.photo
              ? user.photo
              :user.photo
          }
          className="Box__infoAvatar"
        />
        <h5>{user.displayName ? user.displayName : user.email}</h5>
      </div>
      <div className="Box__desc">
        <p>Enter your post and share you knowledge with the world</p>
      </div>
    </div>
  );
}
