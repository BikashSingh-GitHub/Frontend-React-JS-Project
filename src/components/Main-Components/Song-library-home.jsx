import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function SongLibraryHome(props) {
  return (
    <div className="songcard">
      
 <Link to="NewSongProfile">
        <div className="row-poster">
        <div className="backgroundcard"> </div> <div className="pricebooks">...</div>
        <div className="pricebook">$0.23</div> 
       
       
        <img className="cardfix" src={props.img} /></div>
        <Link to="/NewSongProfile" className="sold-card">   <button className="livebutton">LIVE</button></Link>
        <div className="songnamefix">
        <p className="home home-title">{props.title}</p>
        <br />
        <p className="home artist">{props.artist}</p></div>
        </Link>
    </div>
  );
}

export default SongLibraryHome;
