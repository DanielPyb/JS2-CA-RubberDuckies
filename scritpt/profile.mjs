import { baseURL } from "./baseurl.mjs";
const createdPosts = document.querySelector(".created-posts");

const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);

let username 
if(searchParams.get("username")){
  username = (searchParams.get("username"));
} else{
  username = localStorage.getItem("username");
}

document.getElementById("profile-name").innerText = username;

async function lookAtProfile() {
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }
    const response = await fetch(`${baseURL}social/profiles/${username}?_posts=true`, options)
    const data = await response.json();
    createProfilePosts(data);
    console.log(data);
}

function createProfilePosts(data) {
    createdPosts.innerHTML = "";
    data.posts.forEach(post => {
        //destructuring the objects inside the array for readability and ease of use
        const {owner: owner, body: body, id: id } = post;
        createdPosts.innerHTML +=
        `
        <div class="row pt-3 mt-4 border border-1 rounded-top">
        <div class="col-3 col-sm-2">
          <img src="img/logo.png" alt="user photo"/>
        </div>
        <div class="col-9 col-sm-10">
          <h2 class="display-6"><a class="no_underline" href="profile.html?username=${owner}">${owner}</h2></a>
          <p><a class="no_underline" href="post.html?id=${id}">
            ${body}
          </p></a>
        </div>
        <div class="delete-post"><p>X</p></div>
      </div>
        `
    });
};

lookAtProfile()