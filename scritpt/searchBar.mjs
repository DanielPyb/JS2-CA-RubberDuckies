import { getAllPosts } from "./Api/apiCalls.mjs";
import { getPosts } from "./Render/post-render.mjs";


const searchBar = document.querySelector("#search-bar");

//The container that will display the manipulated array
const createdPosts = document.querySelector(".created-posts");

// grabbing the main array that will be manipulated
const getAllPostsArray = await getAllPosts();

searchBar.addEventListener("keyup", newPostList);

function newPostList(e) {
  const result = getAllPostsArray.filter((post) =>
    post.body.toLowerCase().includes(e.target.value.toLowerCase())
  );
  getPosts(result, createdPosts);
}