import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./upload.css";
import { AiFillInfoCircle} from 'react-icons/ai';
import upload from '../images/upload.png';


function Uploadpage1() {
  return (

     <div className="uploadhead">

        <div className="dotbox"></div>
     
         <div className="align">


    </div>
 <style>{'body { background-color: #131C24; }'}</style>
 <img src={upload} className="uploadlogo"   />
<div className="draganddrop"> Drag and Drop</div>
<div className="draganddrop1"> browse your files</div>
 <div className="uploadbox">     
 </div>
 <button className="uploadconfirm">Confirm</button>
 <button className="uploadback">Back</button>
     </div>
  
  );
}

export default Uploadpage1;
