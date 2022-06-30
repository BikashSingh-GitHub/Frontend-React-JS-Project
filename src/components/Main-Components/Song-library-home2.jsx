import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function SongLibraryHome2(props) {
  return (
    <div className="songcard">
      
 <Link to="">
        <div className="row-poster">
        
        <div className="backgroundcard"> </div> <div className="pricebooks">...</div>
        <div className="pricebook">$0.23</div> 
        <Link to="/NewSongProfileSoldout" className="sold-card">
       
        <img className="cardfix" src={props.img} /></Link></div>
        <button className="soldbutton">SOLDOUT</button>
        <div className="songnamefix">
        <p className="home home-title">{props.title}</p>
        <br />
        <p className="home artist">{props.artist}</p>
        
        </div>
        </Link>
    </div>
  );
}

export default SongLibraryHome2;
