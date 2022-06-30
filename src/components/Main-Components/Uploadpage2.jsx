import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./upload.css";
import { AiFillInfoCircle} from 'react-icons/ai';



function Uploadpage2() {
  return (

     <div className="uploadhead">
          <div className="uploadicontext1 placenew"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Cover Art </div>
        <div className="dotbox1"></div>
     
         <div className="align">

  <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Track Title </div>
    <input type="text" placeholder="Song Name" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Artist Name </div>
    <input type="text" placeholder="Set Default Name" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Language</div>
    <input type="text" placeholder="English" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Genre </div>
    <input type="text" placeholder="Select" className="uploadinput1"/>

    </div>
 <style>{'body { background-color: #131C24; }'}</style>

 <div className="uploadbox1">     
 </div>
 <button className="uploadconfirm fixplace1">Confirm</button>
 <button className="uploadback fixplace2">Back</button>
     </div>
  
  );
}

export default Uploadpage2;
