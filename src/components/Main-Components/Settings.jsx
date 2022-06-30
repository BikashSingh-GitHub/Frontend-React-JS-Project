import React from "react";
import { Link, withRouter } from "react-router-dom";
import placebid from '../images/placebid.jpg';
import emoji from '../images/emoji.png';
import spotify from '../images/spotify.png';
import apple from '../images/apple.png';
import "./Main.css";
import { CgProfile} from 'react-icons/cg';
import { AiOutlineTool} from 'react-icons/ai';
import { BiUpload} from 'react-icons/bi';
import { AiFillCheckCircle} from 'react-icons/ai';
import  {useState} from "react";

function Settings() {
  const [state, setState] = useState(true);
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(true);
  return (
    <div className="Settingshead"><div className="circleyset"></div>
    <div className="makealign">
    {!state &&  <button className="settingsicon1" onClick={() => setState(true)}><CgProfile/> <button className="ko" onClick={() => setState(true)}>Profile</button ></button>}
    {state &&   <button className="settingsicon1"onClick={() => setState(false)}><CgProfile/> <button  className="ko" onClick={() => setState(false)}>Profile</button ></button>}
     {!state1 &&<button className="settingsicon2" onClick={() => setState(true)}><AiOutlineTool/> <button  className="ko" onClick={() => setState(true)}>Advance Settings</button ></button>}
     {state1 &&<button className="settingsicon2"onClick={() => setState(false)}><AiOutlineTool/> <button  className="ko" onClick={() => setState(false)}>Advance Settings</button ></button>}
     {!state && <button className="settingsicon3"onClick={() => setState(true)}><BiUpload/> <button  className="ko" onClick={() => setState(true)}>Upload</button ></button>}
     {state &&  <button className="settingsicon3"onClick={() => setState(false)}><BiUpload/> <button  className="ko" onClick={() => setState(false)}>Upload</button ></button>}
     </div>
     
    <div className="settingsleftcontainer "></div>
    {!state &&   <div className="settingsrightcontainer ">  <div className="npro">Profile</div><button className="setconf">Confirm</button>
    <button className="setlogout">Logout</button>
    <div className="setpropic">Profile Picture</div>  
    <div className="setcirclenew"></div>
    <div className="setaligninput">
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
  Username</div>
    <input type="text" placeholder="@username" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
   Display Name </div>
    <input type="text" placeholder="User Name" className="uploadinput1"/><br></br>
    </div>  </div>}
    {state &&
    <div className="settingsrightcontainer ">  <div className="npro">Advance Settings</div><button className="setconf">Confirm</button>

   <div className="setinputmainalign">
    <div className="setaligninput">
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
  Email</div>
    <input type="text" placeholder="email@email.com" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
  Phone Number </div>
    <input type="text" placeholder="+1 (444) 344 - 0009" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Artist Name</div>
    <input type="text" placeholder="Artist Name" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Legal First Name</div>
    <input type="text" placeholder="First" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Legal Last Name</div>
    <input type="text" placeholder="Last" className="uploadinput1"/><br></br>
    </div> 
    <div className="setaligninputrt">
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Zip Code</div>
    <input type="text" placeholder="1122 Street Name St" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Country </div>
    <input type="text" placeholder="United States" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Address</div>
    <input type="text" placeholder="1122 Street Name St" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    State</div>
    <input type="text" placeholder="California" className="uploadinput1"/><br></br>
 
    </div> 
     </div>
     </div>
     }
     {!state &&
    <div className="settingsrightcontainer ">  <div className="npro">Advance Settings</div><button className="setconf">Confirm</button>

   <div className="setinputmainalign">
    <div className="setaligninput">
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
  Email</div>
    <input type="text" placeholder="email@email.com" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
  Phone Number </div>
    <input type="text" placeholder="+1 (444) 344 - 0009" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Artist Name</div>
    <input type="text" placeholder="Artist Name" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Legal First Name</div>
    <input type="text" placeholder="First" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Legal Last Name</div>
    <input type="text" placeholder="Last" className="uploadinput1"/><br></br>
    </div> 
    <div className="setaligninputrt">
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Zip Code</div>
    <input type="text" placeholder="1122 Street Name St" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Country </div>
    <input type="text" placeholder="United States" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    Address</div>
    <input type="text" placeholder="1122 Street Name St" className="uploadinput1"/><br></br>
    <div className="uploadicontext1"><div className="iconupload1pp"><AiFillCheckCircle/></div> 
    State</div>
    <input type="text" placeholder="California" className="uploadinput1"/><br></br>
 
    </div> 
     </div>
     </div>
     }
        </div>
  
  );
}

export default Settings;
