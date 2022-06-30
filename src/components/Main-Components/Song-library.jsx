import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function SongLibrary(props) {
  return (
    <div className="song-library">
    
        <div className="row-poster">
        <Link to="/NewSongProfile2">
        <img className="song-img" src={props.img} />
        <p className="home lib-title">{props.title}</p>
        </Link>
        </div>
        
        
        
    </div>
  );
}

export default SongLibrary;
