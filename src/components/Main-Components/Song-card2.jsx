import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function Song2(props) {
  return (
    <div className="songcard">
        <div className="row-poster">
        <Link to="/NewSongProfile" className="presale-card">
        <img className="song-img" src={props.img} /> </Link></div>
        <button className="presalebutton">PRESALE</button><br/>
        <p className="home home-title">{props.title}</p>
        <br />
        <p className="home artist">{props.artist}</p>
    </div> 
  );
}

export default Song2;
