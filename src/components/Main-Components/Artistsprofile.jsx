import React from "react";
import { Link, withRouter } from "react-router-dom";
import SongLibraryHome from "./Song-library-home";
import "./Main.css";
import SongLibraryHome3 from "./Song-library-home3";
import SongLibraryHome4 from "./Song-library-home4";
import SongLibraryHome5 from "./Song-library-home5";
import SongLibraryHome6 from "./Song-library-home6";
import SongLibraryHome7 from "./Song-library-home7";
import { AiFillInfoCircle} from 'react-icons/ai';
import songDetails from "./Database/song-details";
import songDetails2 from "./Database/song-details2";
import Song from "./Song-card";
import  {useState} from "react";


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



function Artistsprofile() {
  const [state, setState] = useState(true);
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(true);
  return (
    <div className="headpage">
       <style>{'body { background-color: #010B13; }'}</style>
      <div className="artcover"></div>
      <div className="artcircle"> </div><Link to="Settings">
      <button className="artbox2-31t">Setting</button></Link>
      <div className="artusername">User Name</div>
      <div className="artusername2">@username</div>
      
      <div className="artbox1">
      {!state &&  <Link><button className="artbox1-1" onClick={() => setState(true)}>Launch</button></Link>}
      {state &&  <button className="artbox1-1" onClick={() => setState(false)}>Launch</button>}
        {!state1 &&   <button className="artbox1-2" onClick={() => setState(true)} >Collection</button>}
        {state1 &&   <button className="artbox1-2" onClick={() => setState(false)} >Collection</button>}
      {!state2 &&     <button className="artbox1-3" onClick={() => setState(true)}>Profile</button>}
      {state2 &&     <button className="artbox1-3" onClick={() => setState(false)}>Profile</button>}
        <button className="artbox2-31">Settings</button>
      </div>
      <div className="artbox2">
        <div className="artbox2-1"><div className="iconfix"><AiFillInfoCircle/></div> Withdraw aumount</div>
        <div className="artbox2-2">$10,390.02</div>
        <button className="artbox2-3">Withdraw</button>
      </div>
      <div className="artbox4"><div className="artline"></div>
      <div className="artbox3-1"><div className="iconfix"><AiFillInfoCircle/></div>  TOTAL EARNED</div><div className="artboxnumber">$23,120.04</div>
     <div className="artline"></div>
        <div className="artbox3-2"><div className="iconfix"><AiFillInfoCircle/></div> ROYALTIES EARNED</div><div className="artboxnumber">$6,300.00</div>
        
        <div className="artbox3-3"><div className="iconfix"><AiFillInfoCircle/></div> TOKENS EARNED</div><div className="artboxnumber">$16,820.04</div>
       
     <div className="artbox4-ab">
     <div className="limitorder"> LIMIT ORDER</div>
       <div className="askbidalign">
     <div className="row-posters">{songDetails2.map(detail =>
           <SongLibraryHome4
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>
        <div className="row-posters">{songDetails2.map(detail =>
           <SongLibraryHome5
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>
           
            
   </div>
            
     </div>

      </div>
      <div className="home">  
      <div className="artborder">
        
      {!state &&    <div className="row-posters">{songDetails.map(detail =>
           <SongLibraryHome
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>}
           {state &&          <div className="row-posters">{songDetails2.map(detail =>
           <SongLibraryHome6
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>}
            {state &&        <div className="row-posters">{songDetails2.map(detail =>
           <SongLibraryHome7
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>}

            </div>
            
            </div>
   </div>
  
  );
}

export default Artistsprofile;
