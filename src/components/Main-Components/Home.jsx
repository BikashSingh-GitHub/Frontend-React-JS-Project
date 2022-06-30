import React from "react"; 
import "./Main.css";
import Song from "./Song-card";
import Song2 from "./Song-card2";
import songfix from "./Database/song-details2";
import songDetails from "./Database/song-details";
import SongLibrary from "./Song-library";
import SongLibraryHome from "./Song-library-home";
import SongLibraryHome2 from "./Song-library-home2";
import SongLibraryHome3 from "./Song-library-home3";
import SongLibraryHome8 from "./Song-library-home8";
import { Link, withRouter } from "react-router-dom";
import cover from '../images/cover.jpg';

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



// function mobileMenu () {
//     if(document.querySelector(".mobile-menu").style.display == "none")
//     document.querySelector(".mobile-menu").style.display = "flex";
//     else
//     document.querySelector(".mobile-menu").style.display = "none";
// }

function Home() {
 
  return ( 
    <div className="home">  
        <style>{'body { background-color: #010B13; }'}</style>
     <div className="featuredbar">
       {/* <img src={""} className="cover"   /> */}
       <div className="timebar">0 DAYS 10 HOURS 5 MINUTES</div>
       <div className="timebar1">ARTIST NAME</div>
       <div className="timebar2">SONG TITLE</div>
       <button className="viewtoken">VIEW TOKEN</button>
     </div>
        <div className="explore">EXPLORE</div>
        <div className="row-posters">{songDetails.map(detail =>
           <SongLibraryHome
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>
                  <div className="row-posters">{songDetails.map(detail =>
           <SongLibraryHome2
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>
                <div className="row-posters">{songDetails.map(detail =>
           <SongLibraryHome3
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>
                 <div className="row-posters">{songDetails.map(detail =>
           <SongLibraryHome8
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>
    </div>
    
  );
}

export default Home;
