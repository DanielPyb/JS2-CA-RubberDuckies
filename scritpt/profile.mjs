import { createPost } from "./apiCalls.mjs";
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
}

function createProfilePosts(data) {
    createdPosts.innerHTML = "";
    data.posts.forEach(post => {
        //destructuring the objects inside the array for readability and ease of use
        const {owner: owner, body: body, id: id, created: created, media: media } = post;
        createdPosts.innerHTML +=
        `
        <div class="row pt-3 mt-4 border border-1 shadow rounded-top single-post">
          <div class="col-3 col-sm-2">
            <img src="img/logo.png" alt="user photo"/>
          </div>
          <div class="col-9 col-sm-10">
            <h2 class="display-6"><a class="no_underline" href="profile.html?username=${owner}">${owner}</h2></a> 
            <span>${created.slice(0,10)}</span>
            <p><a class="no_underline" href="post.html?id=${id}">
              ${body}
            </p></a>
          </div>
          ${!media ? `</div>` : `<img src="${media}" style="width: 100%"></div> </div>`}
          `
    });
};


const postBTN = document.getElementById("post-btn")

postBTN.addEventListener("click", createPost);

lookAtProfile();