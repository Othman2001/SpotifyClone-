import React from 'react';
import "./player.css";
import SideBar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
function Player({spotify}) {
    return(
        <div className ="player">
      <div className="player-body">
      <SideBar />
          <Body spotify = {spotify} />
        
        <Footer />
      </div>
        </div>
    )
}
export default Player;
//sidebar 

//body 

//footer