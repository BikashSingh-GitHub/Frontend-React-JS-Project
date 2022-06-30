import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./upload.css";
import { AiFillInfoCircle} from 'react-icons/ai';



function Uploadpage3() {
  return (

     <div className="uploadhead">
        
        
     
 <div className="uploadbox2">     
 </div>
         <div className="align3">

  <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
  On Sale Royalties</div>
    <input type="text" placeholder="eg: 20%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Length of Royalties </div>
    <input type="text" placeholder="Lifetime" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Token Quantity</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Unlisted Tokens</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    ITO Token Price </div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Song Release Date</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    ITO Start Date</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    ITO Completion Date </div>
    <input type="text" placeholder="Lifetime" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1"><AiFillInfoCircle/></div> 
    Timezone</div>
    <input type="text" placeholder="eg: 10%" className="uploadinput1"/><br></br>
   
    </div>
 <style>{'body { background-color: #131C24; }'}</style>

 <button className="uploadconfirm fixplace1-3">Confirm</button>
 <button className="uploadback fixplace2-3">Back</button>
     </div>
  
  );
}

export default Uploadpage3;
