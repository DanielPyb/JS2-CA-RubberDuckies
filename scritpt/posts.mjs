import { baseURL } from "./baseurl.mjs";

console.log("hello")

const postText = document.getElementById("post-text");
const postBTN = document.getElementById("post-btn");
const createdPosts = document.querySelector(".created-posts");

export async function getAllPosts(){
  const options = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
}
try{
  const response = await fetch(`${baseURL}social/posts?_author=true`, options)
  const data = await response.json();
  getPosts(data, createdPosts);
  return data;
  }catch(error){
    console.log(error)
  }
}
// putting the post data away for the search
const everyPost = await getAllPosts();

postBTN.addEventListener("click", createPost);

async function createPost(e) {
  const newPost = {
    title: "",
    body: postText.value,
};
  const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    },
    body: JSON.stringify(newPost),
  }
  try{
    const response = await fetch(`${baseURL}social/posts`, options)
    const result = await response.json();
    postText.value = "";
  } catch(error){
    console.log(error)
  }
}


/**
 * Display a chosen array inside of a chosen container
 * @param {array} arr 
 * @param {HTMLContainer} container 
 */
export function getPosts(arr, container) {
    container.innerHTML = "";
    arr.forEach(post => {
        //destructuring the objects inside the array for readability and ease of use
        const {author: author, body: body, id: id} = post;
        container.innerHTML += 
        `
        <div class="row pt-3 mt-4 border border-1 shadow rounded-top">
        <div class="col-3 col-sm-2">
          <img src="img/logo.png" alt="user photo"/>
        </div>
        <div class="col-9 col-sm-10">
          <h2 class="display-6"><a class="no_underline" href="profile.html?username=${author.name}">${author.name}</h2></a>
          <p><a class="no_underline" href="post.html?id=${id}">
            ${body}
          </p></a>
        </div>
      </div>
        `
    });
}

getAllPosts();

