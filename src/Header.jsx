import React from 'react';
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import {useStateValue} from './DataLayer';
function Header() {
    const [{user}, dispatch] = useStateValue();
    return(

    <div className = "header">
        <div className="header_left">
     <SearchIcon />
     <input
     placeholder = "Search for Artists, Songs, Or PlayLists" type = "text" />
        </div>
        <div className="header_right">
         <Avatar src = {user?.images[0]?.url} alt = "user" />
         <h4>
             {user?.display_name}
         </h4>
        </div>
    </div>
    )
}
export default Header;