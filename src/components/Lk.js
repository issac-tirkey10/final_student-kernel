import React from "react";
import Feed from "./Feed.js";
import Header from "./Header";
import "./lk.css";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

function Lk() {
  return (
    <div className="lk">
       <Header />
      <div className="lk__content">
    <Sidebar />
    <Feed />
      <Widget />


      </div>
    </div>
  );
}

export default Lk;
