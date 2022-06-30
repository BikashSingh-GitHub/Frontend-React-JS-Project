import React from "react";
import { Link, withRouter } from "react-router-dom";
import placebid from '../images/placebid.jpg';
import emoji from '../images/emoji.png';
import spotify from '../images/spotify.png';
import apple from '../images/apple.png';
import "./Main.css";
import { AiFillInfoCircle} from 'react-icons/ai';
import { AiOutlineUp} from 'react-icons/ai';
import { AiOutlineDown} from 'react-icons/ai';
import  {useState} from "react";

function Edit() {
  const [state, setState] = useState(true);
  return (
   
      
    <div className="headpage1">
   <div className="Profileedit">
    <div className="placebiscoverbackground"></div>
    {state &&      <div>
       
      <div className="placebidhead">Edit</div>
    
       <div className="pbcontainer"> <div className="pbicon"><AiFillInfoCircle/></div> <div className="pbtext1">Live Tokens</div><div className="pbmq" > Max :100</div> 
    <input type="text" placeholder="50" className="pbinput1"/></div> 
    <div className="pbcontainer1"> <div className="pbicon"><AiFillInfoCircle/></div> <div className="pbtext1">Strike Price</div><div className="pbmq" > Max :$200.00</div> 
    <input type="text" placeholder="$23.00" className="pbinput1"/></div>
       <div className="placebidbox">  
  </div> 
  
  <button className="pbconfirmedit"> Confirm</button>
  <button className="editadvancesettings1"  onClick={() => setState(false)} >ADVANCE SETTINGS<div className="advnicon"><AiOutlineDown/></div></button>
  </div>}
  {!state &&      <div>
       
       <div className="placebidhead">Edit</div>
     
        <div className="pbcontainer"> <div className="pbicon"><AiFillInfoCircle/></div> <div className="pbtext1">Live Tokens</div><div className="pbmq" > Max  :100</div> 
     <input type="text" placeholder="50" className="pbinput1"/></div> 
     <div className="pbcontainer1"> <div className="pbicon"><AiFillInfoCircle/></div> <div className="pbtext1">Strike Price</div><div className="pbmq" > Max :$200.00</div> 
     <input type="text" placeholder="$23.00" className="pbinput1"/></div>
        <div className="placebidboxextend">  
   </div> 
   
   <button className="pbconfirmeditextend"> Confirm</button></div>}
  
  {!state &&<button className="editadvancesettings"  onClick={() => setState(true)}>ADVANCE SETTINGS<div className="advnicon"><AiOutlineUp/></div></button>   }
 
    {!state &&  <div><div className="pbcontainer1edit"> <div className="pbtext1-1">Royalty %</div> 
    <input type="text" placeholder="82%" className="pbinput1-1"/></div>  
    <div className="pbcontainer1edit1-2"> <div className="pbtext1-1">You</div> 
    <input type="text" placeholder="@username" className="pbinput1-12"/></div> 
    <div className="pbcontainer1edit2-1"> <div className="pbtext1-1">Royalty %</div> 
    <input type="text" placeholder="82%" className="pbinput1-1"/></div>  
    <div className="pbcontainer1edit2-2"> <div className="pbtext1-1">You</div> 
    <input type="text" placeholder="@username" className="pbinput1-12"/></div>
    <div className="pbcontainer1edit3-1"> <div className="pbtext1-1">Royalty %</div> 
    <input type="text" placeholder="82%" className="pbinput1-1"/></div>  
    <div className="pbcontainer1edit3-2"> <div className="pbtext1-1">You</div> 
    <input type="text" placeholder="@username" className="pbinput1-12"/></div>
    <div className="addsplit">Add Split </div>
    <button className="esplit"> Edit Split</button>
    <div className="editbuynow">Buyback</div>
    <button className="conductbuyback"> Conduct Buyback</button>
    </div>
    
    } 


  
    
    
<div className="profilebackground"></div>

   
         

       
 
   

        <span className="songcoverimage1"> <img src={placebid} className="picio"   /> </span>
       
       
        </div>
        {/* <div className="termtext">By clicking above, you acknowledge and adhere to our Terms or Service , Purchasers agreement , and all other Legal.</div>
       <div className="termtext2">ROYALTIES WILL BEGIN SENDING AFTER BETA</div> */}
        </div>
  
  );
}

export default Edit;
