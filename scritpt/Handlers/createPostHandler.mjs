import { createPost } from "../Api/apiCalls.mjs";

//everywhere you can create a new post it will have this as it's id for the button
const postBTN = document.getElementById("post-btn");
postBTN.addEventListener("click", createPost);