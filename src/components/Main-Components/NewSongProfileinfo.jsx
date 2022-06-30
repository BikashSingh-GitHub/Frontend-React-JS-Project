import React from "react";
import { Link, withRouter } from "react-router-dom";
import coverart from '../images/coverart.jpg';
import emoji from '../images/emoji.png';
import spotify from '../images/spotify.png';
import apple from '../images/apple.png';
import "./Main.css";
import { AiFillInfoCircle} from 'react-icons/ai';
import twitterlogo from '../images/twitterlogo.png';
import mlogo from '../images/mlogo.png';
import instalogo from '../images/instalogo.png';

function SongProfileinfo() {
  return (
    
    <div className="headpageyu">
   <div className="Profileer"> 
    <div className="newsongprofile"></div>
         
<div className="koit">
    
       
       <Link to="Userprofile"><div className="artistbox">   <div className="songprofilecircle"></div>  </div> 
       <img src={emoji} className="emoji"   />
       <div className="artistboxname">Artists Name</div></Link>
 
<div className="profilebackground"></div>
       <h1 className="songtitleprofile"> Song Title</h1>
        
<img src={spotify} className="spotify"/> 
    < img src={apple} className="apple"/> 
 <div className="boxmytoken"><div className="iconfixer"><AiFillInfoCircle/><div className="mytokn">MY TOKENS:</div></div><div className="numrt">512</div></div>
 <div className="boxmytoken1"><div className="iconfixer"><AiFillInfoCircle/><div className="mytokn">MY ROYALTIES:</div></div><div className="numrt1">60%</div></div> 
 <div className="sellalign"><Link to="Placebid">
    <button className="placebidprofile">Edit</button></Link>
    <Link to="BuyNow">
    <button className="buynowprofile">Sell Now</button></Link>
    </div>
    <div className="artbox2pop">
        <div className="artbox2-1"><div className="iconfix"><AiFillInfoCircle/></div>EARNINGS</div>
        <div className="artbox2-2">$10,390.02</div>
        <button className="artbox2-3">Track</button>
      </div>
      <div className="eryu">
    <div className="spt1"><div className="iconfix"><AiFillInfoCircle/></div>Price per Token:</div>
    <div className="spt2"></div><div className="z1">$4.00</div>
    <div className="spt1"><div className="iconfix"><AiFillInfoCircle/></div>Total Quantity:</div>
    <div className="spt2"></div><div  className="z2">1200</div>
    <div className="spt1"><div className="iconfix"><AiFillInfoCircle/></div>Total Royalty %:</div>
    <div className="spt2"></div><div className="z2">12%</div>
    <div className="spt1"><div className="iconfix"><AiFillInfoCircle/></div>Royalty % per Token:</div>
    <div className="spt2"></div><div className="z2">%.016</div>
   
  </div>
    </div>
    <div className="artist12">Artist Info:</div>
    <div className="artist12p">

    <img src={spotify} className="twitterlogo"   />
 <img src={instalogo} className="instalogo"   />
 <img src={twitterlogo } className="mlogo"   />
 </div>
    <p className="artistinfoop">Stevie Flowers is a generational and groundbreaking artist pushing the boundaries of indie music. The sound that Flowers curates is symbolic of the industry changes that Tokn Music is awaiting. Fusce id pretium ante. Suspendisse nec nibh mi. Fusce interdum ipsum non lectus semper, in pretium ipsum maximus. Aliquam id diam at tellus tincidunt aliquet ut vitae risus. Nullam nunc justo, pharetra a lorem eget, ullamcorper commodo nibh. Quisque interdum mi non lorem blandit tincidunt. Fusce finibus nibh non tincidunt auctor. Fusce ac lacus non ex ullamcorper porta at ut orci. Pellentesque felis nulla, cursus ac orci quis, tincidunt egestas quam. Sed tristique fringilla odio.</p>

        <span className="songcoverimage"> <img src={coverart} className="picio"   /> </span>
       
       
        </div>
        {/* <div className="termtext">By clicking above, you acknowledge and adhere to our Terms or Service , Purchasers agreement , and all other Legal.</div>
       <div className="termtext2">ROYALTIES WILL BEGIN SENDING AFTER BETA</div> */}
        </div>
  
  );
}

export default SongProfileinfo;
