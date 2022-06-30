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

function NewSongProfileCoomingsoon() {
  return (
    
    <div className="headpageyu">
   <div className="Profile"><div className="profilecoomingsoon">45 Days - 5 Hrs - 3 Mins</div>  
    <div className="newsongprofile"></div>
         
    <div className="koit">
    
       
       <Link to="Userprofile"><div className="artistbox">   <div className="songprofilecircle"></div>  </div> 
       <img src={emoji} className="emoji"   />
       <div className="artistboxname">Artists Name</div></Link>
 
<div className="profilebackground"></div>
       <h1 className="songtitleprofile"> Song Title</h1>
        
<img src={spotify} className="spotify"/> 
    < img src={apple} className="apple"/> 
    <div className="spt1"><div className="iconfix"><AiFillInfoCircle/></div>Price per Token:</div>
    <div className="spt2"></div><div className="z1">$4.00</div>
    <div className="spt1"><div className="iconfix"><AiFillInfoCircle/></div>Total Quantity:</div>
    <div className="spt2"></div><div  className="z2">1200</div>
    <div className="spt1"><div className="iconfix"><AiFillInfoCircle/></div>Total Royalty %:</div>
    <div className="spt2"></div><div className="z2">12%</div>
    <div className="spt1"><div className="iconfix"><AiFillInfoCircle/></div>Royalty % per Token:</div>
    <div className="spt2"></div><div className="z2">%.016</div>
    <Link to="Placebid">
    <button className="placebidprofilep1">Place Bid</button></Link>
    <Link to="BuyNow">
    <button className="buynowprofilep1">Buy Now</button></Link>
   <div className="placetc">
    <div className="pbsmalltermtext">By clicking above, you acknowledge and adhere to our<div className="pbcolortc">Terms or Service, <br></br> Purchasers agreement </div>, and all other <div className="pbcolortc">Legal.</div></div>
 </div>
    </div>
       
  <div className="artist12">Artist Info:</div>
  <div className="artist12p">

  <img src={spotify} className="twitterlogo"   />
 <img src={instalogo} className="instalogo"   />
 <img src={twitterlogo } className="mlogo"   />
 </div>
   <p className="artistinfo">Stevie Flowers is a generational and groundbreaking artist pushing the boundaries of indie music. The sound that Flowers curates is symbolic of the industry changes that Tokn Music is awaiting. Fusce id pretium ante. Suspendisse nec nibh mi. Fusce interdum ipsum non lectus semper, in pretium ipsum maximus. Aliquam id diam at tellus tincidunt aliquet ut vitae risus. Nullam nunc justo, pharetra a lorem eget, ullamcorper commodo nibh. Quisque interdum mi non lorem blandit tincidunt. Fusce finibus nibh non tincidunt auctor. Fusce ac lacus non ex ullamcorper porta at ut orci. Pellentesque felis nulla, cursus ac orci quis, tincidunt egestas quam. Sed tristique fringilla odio.</p>

        <span className="songcoverimage"> <img src={coverart} className="picio"   /> </span>
       
       
        </div>
        {/* <div className="termtext">By clicking above, you acknowledge and adhere to our Terms or Service , Purchasers agreement , and all other Legal.</div>
       <div className="termtext2">ROYALTIES WILL BEGIN SENDING AFTER BETA</div> */}
        </div>
  
  );
}

export default NewSongProfileCoomingsoon;
