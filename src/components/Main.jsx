import {Route, Switch } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import "./Main-Components/Main.css";
import "./Main-Components/upload.css";
import Navbar from "./Main-Components/Navbar";
import Footernav from "./Main-Components/Footernav.jsx";
import Libraryprofile from "./Main-Components/Song-libraryprofile";
import Home from "./Main-Components/Home";
import NewSongProfile from "./Main-Components/NewSongProfile.jsx";
import NewSongProfileSoldout from "./Main-Components/NewSongProfileSoldout.jsx";
import NewSongProfilePresale from "./Main-Components/NewSongProfilePresale.jsx";
import Artistsprofile from "./Main-Components/Artistsprofile.jsx";
import Userprofile from "./Main-Components/Userprofile.jsx";
import Uploadpage1 from "./Main-Components/Uploadpage1.jsx";
import Uploadpage2 from "./Main-Components/Uploadpage2.jsx";
import Uploadpage3 from "./Main-Components/Uploadpage3.jsx";
import Uploadpage4 from "./Main-Components/Uploadpage4.jsx";
import Placebid from "./Main-Components/Placebid.jsx";
import Askbid from "./Main-Components/Askbid.jsx";
import Buynow from "./Main-Components/Buynow.jsx";
import Sellnow from "./Main-Components/Sellnow.jsx";
import Bidprice from "./Main-Components/Bidprice.jsx";
import Edit from "./Main-Components/Edit.jsx";
import Settings from "./Main-Components/Settings.jsx";
import NewSongProfileCoomingsoon from "./Main-Components/NewSongProfileCoomingsoon.jsx";
import NewSongProfileinfo from "./Main-Components/NewSongProfileinfo.jsx";

function Main() {
    return (
      <BrowserRouter>
      <div className="main-div">
          <div className="main-body"></div>
          <Navbar />
          <Switch>
          <Route path="/NewSongProfileinfo" exact component={() => <NewSongProfileinfo />} />
          <Route path="/Uploadpage1" exact component={() => <Uploadpage1 />} />
          <Route path="/Settings" exact component={() => <Settings />} />
          <Route path="/Uploadpage2" exact component={() => <Uploadpage2 />} />
          <Route path="/Uploadpage3" exact component={() => <Uploadpage3 />} />
          <Route path="/Uploadpage4" exact component={() => <Uploadpage4 />} />
          <Route path="/NewSongProfileCoomingsoon" exact component={() => <NewSongProfileCoomingsoon/>} />
          <Route path="/Home" exact component={() => <Home />} />
          <Route path="/Placebid" exact component={() => <Placebid />} />
          <Route path="/Askbid" exact component={() => <Askbid />} />
          <Route path="/Bidprice" exact component={() => <Bidprice />} />
          <Route path="/Buynow" exact component={() => <Buynow />} />
          <Route path="/Sellnow" exact component={() => <Sellnow />} />
          <Route path="/Userprofile" exact component={() => <Userprofile/>} />
          <Route path="/libraryprofile" exact component={() => <Libraryprofile/>} />
          <Route path="/NewSongProfile" exact component={() => <NewSongProfile />} />
          <Route path="/NewSongProfilePresale" exact component={() => <NewSongProfilePresale />} />
          <Route path="/NewSongProfileSoldout" exact component={() => <NewSongProfileSoldout />} />
          <Route path="/Artistsprofile" exact component={() => <Artistsprofile />} />
          <Route path="/Uploadpage1" exact component={() => <Uploadpage1 />} />
          <Route path="/Footernav" exact component={() => <Footernav />} />
          <Route path="/Edit" exact component={() => <Edit />} />
            </Switch>
            {/* <Footernav/> */}
        </div></BrowserRouter>
      );
    }
    
    export default Main;
    