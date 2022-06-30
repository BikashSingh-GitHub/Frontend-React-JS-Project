import React from "react";
import { Link, withRouter } from "react-router-dom";
import placebid from '../images/placebid.jpg';
import emoji from '../images/emoji.png';
import spotify from '../images/spotify.png';
import apple from '../images/apple.png';
import "./Main.css";
import { AiFillInfoCircle} from 'react-icons/ai';


function Askbid() {
  return (
    
    <div className="headpage1">
   <div className="Profile">
    <div className="placebiscoverbackground"></div>
         
    <div className="placebidhead">Edit Ask</div>
    
    <div className="pbcontainer"> <div className="pbicon"><AiFillInfoCircle/></div> <div className="pbtext1">Quantity</div><div className="pbmq" > My Total Tokens :7</div> 
    <input type="text" placeholder="0" className="pbinput1"/></div> 
    <div className="pbcontainer1"> <div className="pbicon"><AiFillInfoCircle/></div> <div className="pbtext1">Strike Price</div><div className="pbmq" > Max :$200.00</div> 
    <input type="text" placeholder="0" className="pbinput1"/></div>
       <div className="placebidbox">  
  </div> 
  <div className="pbcontainer3">
   <div className="pbline1"></div>
   <div className="pblinetext">Royalities:</div>
   <div className="pbline2"></div>   
   <div className="pblinetext2">Total Projected Earnings:</div>
   <div className="pbline3"></div> 
  <button className="pbconfirm"> Confirm</button>
  <div className="pbsmalltermtext">By clicking above, you acknowledge and adhere to our<br></br> <div className="pbcolortc">Terms or Service , Purchasers agreement </div>, and all other <br></br><div className="pbcolortc">Legal.</div></div>
   </div>
        
         
       
 
<div className="profilebackground"></div>

   
         

       
 
   

        <span className="songcoverimage1"> <img src={placebid} className="picio"   /> </span>
       
       
        </div>
        {/* <div className="termtext">By clicking above, you acknowledge and adhere to our Terms or Service , Purchasers agreement , and all other Legal.</div>
       <div className="termtext2">ROYALTIES WILL BEGIN SENDING AFTER BETA</div> */}
        </div>
  
  );
}

export default Askbid;
