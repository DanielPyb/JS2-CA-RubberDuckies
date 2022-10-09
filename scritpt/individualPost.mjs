import { baseURL } from "./baseurl.mjs";
import { deletePost, editPost } from "./apiCalls.mjs";
const username = localStorage.getItem("username")

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
        <div class="row pt-3 mt-4 border border-1 shadow rounded-top content-info">
        <div class="col-3 col-sm-2">
          <img src="img/logo.png" alt="user photo"/>
        </div>
        <div class="col-9 col-sm-10">
          <h2 class="display-6">${post.author.name}</h2>
          <p class="post-text">
            ${post.body}
          </p>
        </div>`
        if (username == post.author.name){
          const contentInfo = document.querySelector(".content-info")
          contentInfo.innerHTML +=
          `<div class="row">
        <div class="delete-post col-3"><p>X</p></div>
        <div class="edit-post col-3"><p>Edit</p></div>
        </div>
      </div>
      <div class="post-edit" style="display: none; "width: 100%">
      <textarea></textarea>
      </div>`
        const editPostBTN = individualPost.querySelector(".edit-post");
        editPostBTN.addEventListener("click", ()=>{
          editPostObject(post.id);
        });
        const deletePostBTN = individualPost.querySelector(".delete-post");
        deletePostBTN.addEventListener("click", ()=>{
          deletePost(post.id);
        });
      } else{
        console.log("not the original author")
      }
}

function editPostObject(id){

    const originalTextPost = individualPost.querySelector(".post-text")
    console.log(originalTextPost.innerHTML);
    const postEditField = document.querySelector(".post-edit")
    postEditField.style = "display:block"
    postEditField.innerHTML = "";
    postEditField.innerHTML =`
    <div class="row">
    <textarea id="new-text" style="height: 200px">${originalTextPost.innerText}</textarea>
                              <button>Update</button>
                              </div>
                              `
    const confirmBTN = postEditField.querySelector("button");
    confirmBTN.addEventListener("click", () => {
      const newTextField = postEditField.querySelector("#new-text")
      const newText = newTextField.value;
      editPost(id, newText)
      postEditField.style = "display:none"
    });
}

await getPosts(singlePostArr)

