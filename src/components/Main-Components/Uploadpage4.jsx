import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./upload.css";
import { AiFillInfoCircle} from 'react-icons/ai';



function Uploadpage4() {
  return (

     <div className="uploadhead">
        
        
     
 <div className="uploadbox4">     
 </div>
         <div className="align4">

  <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
  Spotify Profile URL</div>
    <input type="text" placeholder="eg: 20%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Apple Profile URL </div>
    <input type="text" placeholder="Lifetime" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Start Time</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Length</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    CD/Track Number </div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Type</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Stage Name</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Spotify URL </div>
    <input type="text" placeholder="eg: https://" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Type</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Stage Name</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Spotify URL </div>
    <input type="text" placeholder="eg: https://" className="uploadinput1"/><br></br>
   
    </div>
 <style>{'body { background-color: #131C24; }'}</style>

 <button className="uploadconfirm fixplace1-4">Confirm</button>
 <button className="uploadback fixplace2-4">Back</button>
     </div>
  
  );
}

export default Uploadpage4;
