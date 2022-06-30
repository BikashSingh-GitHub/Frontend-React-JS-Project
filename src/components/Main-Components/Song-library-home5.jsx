import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";

function SongLibraryHome5(props) {
  return (
    <div className="songcard">
      
      <Link to="Bidprice">
        <div className="newrow-poster">
        <div className="backgroundcard3"> </div> 
        <div className="pricebookask">Bid:</div>
       
        <img className="sonimagesmall" src={props.img} /></div>
        <button className="bidtrbutton">BID</button>
        <div className="titlenew">{props.title}</div>
        </Link>
        </div>
  );
}

export default SongLibraryHome5;
