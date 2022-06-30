import React from "react";
import { Link, withRouter } from "react-router-dom";
import SongLibraryHome from "./Song-library-home";
import "./Main.css";
import Song from "./Song-card";

import songDetails from "./Database/song-details";

function createSong(detail) {
  return (
      <Song
          key={detail.id}
          img={detail.img}
          title={detail.title}
          artist={detail.artist}
      />   
  
  );
}


function Userprofile() {
  return (
    <div className="headpageyu">
    <div className="main-body">
       <style>{'body { background-color: #010B13; }'}</style>
      <div className="artcover"></div>
      <div className="artcircle"> </div>
      <div className="artusername">User Name</div>
      <div className="artusername2">@username</div>
      <div className="home">  
      <div className="row-posters">{songDetails.map(detail =>
           <SongLibraryHome
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>
            </div>
     
   </div>
   </div>
  );
}

export default Userprofile;
