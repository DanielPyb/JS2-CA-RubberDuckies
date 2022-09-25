import { baseURL } from "./baseurl.mjs";

console.log("hello")

const postText = document.getElementById("post-text");
const postBTN = document.getElementById("post-btn");
const createdPosts = document.querySelector(".created-posts");
const deletePostBTN = document.getElementsByClassName("delete-post")

export async function getAllPosts(){
  const options = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
}
  const response = await fetch(`${baseURL}social/posts?_author=true`, options)
  const data = await response.json();
  getPosts(data);
  return data;
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
    const response = await fetch(`${baseURL}social/posts`, options)
    const result = await response.json();
    postText.value = "";
}




function deletePost() {

}

function getPosts(arr) {
    createdPosts.innerHTML = "";
    arr.forEach(post => {
        //destructuring the objects inside the array for readability and ease of use
        const {author: author, body: body} = post;
        createdPosts.innerHTML += 
        `
        <div class="row pt-3 mt-4 border border-1 rounded-top">
        <div class="col-3 col-sm-2">
          <img src="img/logo.png" alt="user photo"/>
        </div>
        <div class="col-9 col-sm-10">
          <h2 class="display-6">${author.name}</h2>
          <p>
            ${body}
          </p>
        </div>
        <div class="delete-post"><p>X</p></div>
      </div>
        `
    });
}

getAllPosts();

