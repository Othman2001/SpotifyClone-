import React,{useEffect, useState} from 'react';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import {getTokenFromResponse} from "./spotify";
import "./App.css";
import Login from './Login';
import {useStateValue} from './DataLayer';
//import Login from './Login';

//create spotify web api 
const spotify = new SpotifyWebApi();

function App() {
//state

const[{user , token}, dispatch] = useStateValue(); 

//use effect will run code in spefice condition 
//keeb eye in window location
//when the app loads then do the followint that the usage if the following use effect
  

useEffect(() => {
  // Set token
  const hash = getTokenFromResponse();
  window.location.hash = "";
  let _token = hash.access_token;

  if (_token) {
    spotify.setAccessToken(_token);

    dispatch({
      type: "SET_TOKEN",
      token: _token,
    });

    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user,
      });
    });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists,
      });
      spotify.getPlaylist("1ADT4YoA4yRyprZNgpUMgp").then((response)=> 
      dispatch({
        type:"SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      }))
    });
  }
}, [token, dispatch]);

  return (
    <div className="App">
    {
      //render compoent depends on speific condtion 
     token ? (
       <div>
       <Player spotify={spotify} />

       </div>
     ): (
      <Login />
     )
    }
   
    </div>
  );
}

export default App;
//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="/__/firebase/7.17.1/firebase-app.js"></script>
//<!-- TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="/__/firebase/7.17.1/firebase-analytics.js"></script>
//<!-- Initialize Firebase -->
//<script src="/__/firebase/init.js"></script>
// 21967e99f7d64339b17f1919e23df841
//react api context 
//
//"BQCq14axfMYx_zVFNtJ-sPJ250cc4w5rA3iacmRkpGof__Wy_uRaUQiV0DwzuayNYxjyi2bgqvku-6wkI7hVeHzXGzkFEvk5JHBpB9RkNfhn56kjr--GUvFdcY33rxT_Ma-13yBxjUz3lJ10fQUF-5fQYxP912Un5mVtRH3lhmU_6O1P236y"


