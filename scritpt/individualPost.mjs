import { singlePost } from "./Api/apiCalls.mjs";
import { getIndividualPosts } from "./Render/individual-post-render.mjs";


// Retrieves information on which post it is that should be displayed by the information in the windows searchbar i.e search parame
const parameterString = window.location.search;
const searchParams = new URLSearchParams(parameterString);
const currentID = (searchParams.get("id"));

// Adding container and the object to put in the renderer
const individualPost = document.querySelector(".individual-post ")
const singlePostObj = await singlePost(currentID);

getIndividualPosts(singlePostObj, individualPost)