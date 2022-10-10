import { baseURL } from "./baseurl.mjs";
import { getPosts } from "./posts.mjs";

const searchBar = document.querySelector("#search-bar");
const contentContainer = document.getElementById("content-container");
const createdPosts = document.querySelector(".created-posts");

async function getAllPosts() {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  try {
    const response = await fetch(
      `${baseURL}social/posts?_author=true`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const getAllPostsArray = await getAllPosts();

searchBar.addEventListener("keyup", newPostList);

function newPostList(e) {
  const result = getAllPostsArray.filter((post) =>
    post.body.toLowerCase().includes(e.target.value.toLowerCase())
  );
  getPosts(result, createdPosts);
}
