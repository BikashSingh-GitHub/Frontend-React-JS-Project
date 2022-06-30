import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function SongLibraryHome8(props) {
  return (
    <div className="songcard">
      
 
        <div className="row-poster">
        <div className="backgroundcard"> </div> <div className="pricebooks">...</div>
        <div className="pricebook">$0.23</div> 
        <Link to="/NewSongProfileCoomingsoon" className="sold-card">
       
        <img className="cardfix" src={props.img} /></Link></div>
        <button className="transbuttonmain">45 Days - 5 Hrs - 3 Mins</button>
        <div className="songnamefix">
        <p className="home home-title">{props.title}</p>
 <br></br>
        <p className="home artist">{props.artist}</p>
  
 </div>

     
    </div>
  );
}

export default SongLibraryHome8;
