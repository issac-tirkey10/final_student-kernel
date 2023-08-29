import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {Link} from 'react-router-dom'

import "./headerprofile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import firebase from "firebase";
import Feed from './Feed'

function Header() {

  const user = useSelector(selectUser);

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };

  return (
    
    <div className="Header">
      <div className="Header__logo">
      <h2>Learner's kernel </h2>
        <img
         /* src='Logo.png' 
          alt=""*/
          
        />
        
      </div>
  
      <div className="Header__icons">
        <div className="active Header__icon" className="Header_profile__icon">
        <Link style={{ textDecoration: 'none', color: 'grey'}}  to ="./" >
          <HomeIcon className="Header_profile__icon_icon"/>
          </Link>
        </div>
      
        <div className="Header_profile__icon">
         <Link style={{ textDecoration: 'none', color: 'grey'}}  to ="./Profile" >
         <PeopleAltOutlinedIcon className="Header_profile__icon_icon"/></Link>
        </div>
      </div>
      <div className="Header__Rem">
        <div className="Header__avatar">
          <div className="Avatar">
          <Link  style={{ textDecoration: 'none', color: 'grey'}}  to ="./" >
           <ExitToAppIcon onClick={() => auth.signOut()} />   
           </Link>   
          </div>
        </div>
</div>
</div>
  );
}
export default Header;
