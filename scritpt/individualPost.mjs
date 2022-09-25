import { baseURL } from "./baseurl.mjs";

const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);

const currentID = (searchParams.get("id"));


const individualPost = document.querySelector(".individual-post ")

async function singlePost(){
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }
      const response = await fetch(`${baseURL}social/posts/${currentID}?_author=true`, options)
      const data = await response.json();
      getPosts(data);
      return data;
    }

const singlePostArr = await singlePost();

function getPosts(post) {
    individualPost.innerHTML = "";
        //destructuring the objects inside the array for readability and ease of use
        individualPost.innerHTML = 
        `
        <div class="row pt-3 mt-4 border border-1 rounded-top">
        <div class="col-3 col-sm-2">
          <img src="img/logo.png" alt="user photo"/>
        </div>
        <div class="col-9 col-sm-10">
          <h2 class="display-6">${post.author.name}</h2>
          <p>
            ${post.body}
          </p>
        </div>
        <div class="delete-post"><p>X</p></div>
      </div>
        `
}
console.log(singlePostArr);
await getPosts(singlePostArr)
