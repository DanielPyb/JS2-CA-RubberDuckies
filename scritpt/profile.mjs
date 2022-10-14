import { lookAtProfile } from "./Api/apiCalls.mjs";
import { createProfilePosts } from "./Render/profile-post-render.mjs";

//getting the username identification from the window searchbar
const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);

//finding out if this is another users profile page or your own, depending on if there is a param or not
let username = ""
if(searchParams.get("username")){
  username = (searchParams.get("username"));
} else{
  username = localStorage.getItem("username");
}

document.getElementById("profile-name").innerText = username;

// Getting the array and the container
const profileInformation = await lookAtProfile(username);
const createdPosts = document.querySelector(".created-posts");

createProfilePosts(profileInformation, createdPosts)