import { getAllPosts } from "./Api/apiCalls.mjs";
import { getPosts } from "./Render/post-render.mjs";


// Getting the array and the container
const everyPost = await getAllPosts();
const createdPosts = document.querySelector(".created-posts");



getPosts(everyPost, createdPosts);