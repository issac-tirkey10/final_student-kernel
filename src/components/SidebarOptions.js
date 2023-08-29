import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";
import {Link} from 'react-router-dom'

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <p>ABOUT US</p>
        </div>
        <div className="aboutusdiv">
        <p className="aboutus">Welcome to Learner's Kernel,<br></br> your number one source for knowledge.
           We're dedicated to providing you the very best of experience.
           Here we wish to provide you with interesting content, which we hope you will like. </p>
    </div>
    </div>
  );
}

export default SidebarOptions;
