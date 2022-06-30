import React from "react";
import {Route, Switch } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import Main from "./Main.jsx";
import "./Main-Components/upload.css";
import Uploadpage1 from "./Main-Components/Uploadpage1.jsx";
import Uploadpage2 from "./Main-Components/Uploadpage2.jsx";
import Uploadpage3 from "./Main-Components/Uploadpage3.jsx";
import Uploadpage4 from "./Main-Components/Uploadpage4.jsx";
import NewSongProfile from "./Main-Components/NewSongProfile.jsx";
import Libraryprofile from "./Main-Components/Song-libraryprofile";
import NewSongProfilePresale from "./Main-Components/NewSongProfilePresale.jsx";
import NewSongProfileCoomingsoon from "./Main-Components/NewSongProfileCoomingsoon.jsx";
import Footernav from "./Main-Components/Footernav.jsx";
import Artistsprofile from "./Main-Components/Artistsprofile.jsx";
import Userprofile from "./Main-Components/Userprofile.jsx";
import Placebid from "./Main-Components/Placebid.jsx";
import Buynow from "./Main-Components/Buynow.jsx";
import Sellnow from "./Main-Components/Sellnow.jsx";
import Edit from "./Main-Components/Edit.jsx";
import Settings from "./Main-Components/Settings.jsx";
import NewSongProfileinfo from "./Main-Components/NewSongProfileinfo.jsx";
import Askbid from "./Main-Components/Askbid.jsx";
import Bidprice from "./Main-Components/Bidprice.jsx";
import NewSongProfileSoldout from "./Main-Components/NewSongProfileSoldout.jsx";

function App() {
    return (
      <div>
        
          <Switch>
          <Route path="/NewSongProfileSoldout" exact component={() => <NewSongProfileSoldout />} />
          <Route path="/NewSongProfileinfo" exact component={() => <NewSongProfileinfo />} />
          <Route path="/Askbid" exact component={() => <Askbid />} />
          <Route path="/Bidprice" exact component={() => <Bidprice />} />
          <Route path="/libraryprofile" exact component={() => <Libraryprofile/>} />
          <Route path="/NewSongProfileCoomingsoon" exact component={() => <NewSongProfileCoomingsoon/>} />
          <Route path="/Home" exact component={() => <Main />} />
          <Route path="/Placebid" exact component={() => <Placebid />} />
          <Route path="/NewSongProfile" exact component={() => <NewSongProfile />} />
          <Route path="/Userprofile" exact component={() => <Userprofile/>} />
          <Route path="/Footer" exact component={() => <Main />} />
          <Route path="/Uploadpage1" exact component={() => <Uploadpage1 />} />
          <Route path="/NewSongProfilePresale" exact component={() => <NewSongProfilePresale />} />
          <Route path="/Uploadpage2" exact component={() => <Uploadpage2 />} />
          <Route path="/Uploadpage3" exact component={() => <Uploadpage3 />} />
          <Route path="/Uploadpage4" exact component={() => <Uploadpage4 />} />
          <Route path="/Artistsprofile" exact component={() => <Artistsprofile />} />
          <Route path="/Buynow" exact component={() => <Buynow />} />
          <Route path="/Sellnow" exact component={() => <Sellnow />} />
          <Route path="/Settings" exact component={() => <Settings />} />
          <Route path="/Edit" exact component={() => <Edit />} />
          </Switch>
    </div>
  );
}

export default App;