import { baseURL } from "./baseurl.mjs";
import { deletePost, editPost } from "./apiCalls.mjs";

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
        <div class="row pt-3 mt-4 border border-1 shadow rounded-top">
        <div class="col-3 col-sm-2">
          <img src="img/logo.png" alt="user photo"/>
        </div>
        <div class="col-9 col-sm-10">
          <h2 class="display-6">${post.author.name}</h2>
          <p class="post-text">
            ${post.body}
          </p>
        </div>
        <div class="row">
        <div class="delete-post col-3"><p>X</p></div>
        <div class="edit-post col-3"><p>Edit</p></div>
        </div>
      </div>
      <div class="post-edit" style="display: none;">
      <textarea></textarea>
    </div>
        `
        const editPostBTN = individualPost.querySelector(".edit-post");
        editPostBTN.addEventListener("click", ()=>{
          editPost(post.id);
        });
        const deletePostBTN = individualPost.querySelector(".delete-post");
        deletePostBTN.addEventListener("click", ()=>{
          deletePost(post.id);
        });
}

export function editPostObject(){
    const originalTextPost = individualPost.querySelector(".post-text")
    const postEditField = document.querySelector(".post-edit")
    postEditField.innerHTML = "";
    postEditField.innerHTML =`<textarea id="new-text">${originalTextPost}</textarea>
                              <button>confirm</button>`
    const confirmBTN = postEditField.querySelector("button");
    confirmBTN.addEventListener("click", confirmChange);
}

function confirmChange(){
      const newTextField = postEditField.querySelector("#new-text")
      const newText = newTextField.value;
      console.log(newText);
}


console.log(singlePostArr);
await getPosts(singlePostArr)

