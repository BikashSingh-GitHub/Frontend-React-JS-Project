import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";


function SongLibraryHome4(props) {
  return (
    <div className="songcard">
      
      <Link to="Askbid">
        <div className="newrow-poster">
        
        <div className="backgroundcard3"> </div> <div className="pricebooksask">$120.23</div>
        <div className="pricebookask">Ask:</div>
       
        <img className="sonimagesmall" src={props.img} /></div>
        <button className="asktrbutton">ASK</button>
        <div className="titlenew">{props.title}</div></Link>
    </div>
  );
}

export default SongLibraryHome4;
