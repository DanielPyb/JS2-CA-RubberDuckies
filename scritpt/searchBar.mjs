import { baseURL } from "./baseurl.mjs";

async function getAllPosts(){
    const options = {
      method: "GET",
      headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
  }
    const response = await fetch(`${baseURL}social/posts?_author=true`, options)
    const data = await response.json();
    return data;
  }

const getAllPostsArray = await getAllPosts();
console.log(getAllPostsArray);

const searchBar = document.querySelector("#search-bar")


searchBar.addEventListener("keyup", newPostList)

function newPostList(e){
 /* Here i must make a code that goes over the old array and filters out the results that should not come in the new array
 this should be based on the value inside of the searchbar. */
}