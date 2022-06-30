import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import toknlogo from '../images/toknlogo.png';

function Navbar() {

 
 
  return (
    <div>
  <div className="topnav"> </div>  
  <img src={toknlogo} className="logodesign"   />
 <Link to="/Home">
 <div className="nhome">HOME</div></Link>
 <Link to="/Artistsprofile">
 <div className="nlibrary">LIBRARY</div></Link>

 <Link to="/uploadpage1">
 <div className="nlogin">Login</div></Link>
 <Link to="/userprofile">
 <button className="nsignup">Signup</button></Link> </div>

  );
}

export default withRouter(Navbar);
 