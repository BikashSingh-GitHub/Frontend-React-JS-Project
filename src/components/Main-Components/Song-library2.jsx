import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function SongLibrary2(props) {
  return (
    <div className="song-library">
    
        <div className="row-poster">
        <Link to="/NewSongProfile2">
        <img className="song-img" src={props.img} />
       
        <p className="home">{props.title}</p> 
        <p className="home artist">{props.artist}</p>
         </Link>
       
        </div>
       
       
      
    </div>
  );
}

export default SongLibrary2;
