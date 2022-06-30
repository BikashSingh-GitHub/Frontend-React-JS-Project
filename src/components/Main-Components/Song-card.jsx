import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function Song(props) {
  return (
    <div className="songcard">
      
 
        <div className="row-poster">
        <div className="backgroundcard"> </div> <div className="pricebooks">...</div>
        <div className="pricebook">$0.23</div> 
        <Link to="/NewSongProfile" className="sold-card">
       
        <img className="song-img" src={props.img} /></Link></div>
        <button className="livebutton">LIVE</button>
        <p className="home home-title">{props.title}</p>
        <br />
        <p className="home artist">{props.artist}</p>
  
    </div> 
  );
}

export default Song;
