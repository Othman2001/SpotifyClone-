import React from 'react';
import './Login.css';
import log from './log.png';
import {LoginUrl} from './spotify';
function Login() {
    return(
        <div className ="login">
        <img src={log} alt="logo"/>
        <a href = {LoginUrl} >Login With Spotify</a>
        </div>
    )
}
export default Login;