import { editPost, deletePost } from "../Api/apiCalls.mjs";

/**
 * Rendering the Individual Post that will be used so that the author/owner can delete/edit
 * @param {Object} post - the object that will be rendered
 * @param {Object} container - the HTML container that the post will be rendered
 */
export function getIndividualPosts(post, container) {
    const username = localStorage.getItem("username")
    const {author: author, body: body, id: id, created: created, media: media} = post;
          container.innerHTML = "";
          //destructuring the objects inside the array for readability and ease of use
          container.innerHTML = 
          `
          <div class="row pt-3 mt-4 border border-1 shadow rounded-top content-info">
          <div class="col-3 col-sm-2">
            <img src="img/logo.png" alt="user photo"/>
          </div>
          <div class="col-9 col-sm-10">
          <h2 class="display-6"><a class="no_underline" href="profile.html?username=${author.name}">${author.name}</h2></a>
            <span>${created.slice(0,10)}</span>
            <p class="post-text">
              ${body}
            </p>
            ${!media ? `</div>` : `<img src="${media}" style="width: 100%"></div> </div>`}
          </div>`
          if (username == author.name){
            const contentInfo = document.querySelector(".content-info")
            contentInfo.innerHTML +=
            `<div class="row">
          <div class="delete-post col-3"><p>X</p></div>
          <div class="edit-post col-3"><p>Edit</p></div>
          </div>
        </div>
        <div class="post-edit" style="display: none; "width: 100%">
        <textarea></textarea>
        </div>
        `
          const editPostBTN = container.querySelector(".edit-post");
          editPostBTN.addEventListener("click", ()=>{
            editPostObject(id);
          });
          const deletePostBTN = container.querySelector(".delete-post");
          deletePostBTN.addEventListener("click", ()=>{
            deletePost(id);
          });
        } 
  }
/**
 * Adds editing and deletion as part of the post if the owner is looking at it
 * @param {Number} id - the id number for the post 
 */
  function editPostObject(id){
    const individualPost = document.querySelector(".individual-post ")
    const originalTextPost = individualPost.querySelector(".post-text")
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