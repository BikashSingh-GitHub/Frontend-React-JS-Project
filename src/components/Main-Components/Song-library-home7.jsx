import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import { AiFillInfoCircle} from 'react-icons/ai';

function SongLibraryHome7(props) {
  return (
    <div className="songcard">
      
 
        <div className="newrow-poster">
        <div className="backgroundcard6"> </div>
         <div className="pricebooks">...</div>
         <div className="linesongcard"></div>
        <div className="pricebook">Private</div> 
        <img className="song-img sfix" src={props.img} /></div>
        <div className="alignnamebox">
        <div className="aligncard">{props.title}</div>
         
        <div className="aligncard1">{props.artist}</div></div>
        <div className="alignendito">
        <div className="itoicon"><AiFillInfoCircle/></div>
         <div className="countdownito">COUNTDOWN:</div>
         <div className="comingsoontext">10 Days 5 Hrs 23 Min</div>
         <div className="endito">End of ITO Period</div>
        <button className="transbutton">102 Days 5 Hrs 23 Min</button>
        </div>
    </div>
  );
}

export default SongLibraryHome7;
