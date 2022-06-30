import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import footerlogo from '../images/footerlogo.png';
import twitterlogo from '../images/twitterlogo.png';
import linkedinlogo from '../images/linkedinlogo.png';
import mlogo from '../images/mlogo.png';
import instalogo from '../images/instalogo.png';

function Footernav() {
  return (
    <div className="footercontainer">
  <div className="buttomnav"> </div>  
  <img src={footerlogo} className="footerlogo"   />
 <div className="foottext1">Founded in 2021, Tokn Music seeks to unlock the potential of the music industry by bridging connections and providing mutually beneficial value to all participating parties. Tokn Music enables musicians to build additional sources of revenue by selling streaming royalties to fans and investors through our order matching engined marketplace.</div>
 <div className="foottext2">Site Nav</div>
 <div className="fitu">
 <div className="foottext3">Resources</div>
 <button className="foottext4">Contact</button> </div>
 <img src={linkedinlogo} className="linkedinlogo"   />
 <img src={twitterlogo} className="twitterlogo"   />
 <img src={mlogo } className="mlogo"   />
 <img src={instalogo} className="instalogo"   />
 </div>
  );
}

export default withRouter(Footernav);
 