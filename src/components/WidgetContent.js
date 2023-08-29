import React from "react";
import { Link } from "react-router-dom";
import "./WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <div className="widget__contentTitle">
          <h5><a href="https://en.wikipedia.org/wiki/Computer_programming" style={{ textDecoration: 'none', color: '#a3b3d3'}}>Programming</a></h5>
          <p></p>
        </div>
      </div>
      <div className="widget__content">
        <div className="widget__contentTitle">
          <h5><a href="https://en.wikipedia.org/wiki/Science_and_technology" style={{ textDecoration: 'none', color: '#a3b3d3'}}>Science & tech</a></h5>
          <p></p>
        </div>
      </div>
      <div className="widget__content">
        <div className="widget__contentTitle">
          <h5><a href="https://en.wikipedia.org/wiki/Art" style={{ textDecoration: 'none', color: '#a3b3d3'}}>Art & Design</a></h5>
          <p></p>
        </div>
      </div>
      <div className="widget__content">
        <div className="widget__contentTitle">
          <h5><a href="https://en.wikipedia.org/wiki/Economics" style={{ textDecoration: 'none', color: '#a3b3d3'}}>Finance & economics</a></h5>
          <p></p>
        </div>
      </div>
      <div className="widget__content">
        <div className="widget__contentTitle">
          <h5><a href="https://en.wikipedia.org/wiki/History" style={{ textDecoration: 'none', color: '#a3b3d3'}}>History</a></h5>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
