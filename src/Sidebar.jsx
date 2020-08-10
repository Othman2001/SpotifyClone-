import React from 'react';
import "./sidebar.css";
import SidebarOption from "./SidebarOption";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from './DataLayer';
function SideBar(){
  const [{playlists}, dispatch] = useStateValue();
  console.log(playlists);
    return(
      <div className = "Sidebar">
       <img className = "sidbar_logo" 
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt />
      <SidebarOption Icon = {HomeIcon} title = "Home" />
      <SidebarOption  Icon = {SearchIcon}  title = "Search" />
      <SidebarOption  Icon = {LibraryMusicIcon} title = "Your Library" />
        <br />
        <strong className= "sidebar_title" >PlayLists</strong>
       <hr />
       {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
       </div>
    );
}
export default SideBar;