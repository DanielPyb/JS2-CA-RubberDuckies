import { getAllPosts } from "./Api/apiCalls.mjs";
import { getPosts } from "./Render/post-render.mjs";


const searchBar = document.querySelector("#search-bar");
const createdPosts = document.querySelector(".created-posts");


const getAllPostsArray = await getAllPosts();
searchBar.addEventListener("keyup", newPostList);

function newPostList(e) {
  const result = getAllPostsArray.filter((post) =>
    post.body.toLowerCase().includes(e.target.value.toLowerCase())
  );
  getPosts(result, createdPosts);
}