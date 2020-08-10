//this is and stdanrd js file to deal with api 
//spotify autherication sending the user data ton spotify server by api
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "21967e99f7d64339b17f1919e23df841";
//userApis
const scopes = [
"user-read-currently-playing",//play music
"user-read-recently-played",//wathc your recenlty 
"user-read-playback-state",//playback
"user-top-read",//top read of the user
"user-modify-playback-state",//user modifaction 
];
//youd don't have to understand every l9ine of code this is stndard 
export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };
export const LoginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  //loginurl  =endpoint, cliendid = $clientid , &redircet url = $redirecturl, &scope = $scopejoin("%20"))}}defult code etc  