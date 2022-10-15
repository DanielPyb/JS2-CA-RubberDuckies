import { getAllPosts } from "./Api/apiCalls.mjs";
import { getPosts } from "./Render/post-render.mjs";

//Main array that will be manipulated
const mainArr = await getAllPosts();

//the array that will be displayed when searching
let subArr = [];

//Container for the posts
const createdPosts = document.querySelector(".created-posts");

//Grabbing the input value 
const postSort = document.getElementById("sorting-by");

postSort.addEventListener("change", () =>{
    postListSort(postSort.value);
})


/**
 * 
 * @param {String} value - input value from the HTML that will decide which sorting method that will be used 
 */
function postListSort(value){ 
    switch(value){
        case "newest":
            subArr = mainArr.sort((a, b) => {
                return new Date(b.created) - new Date(a.created)
            })
        break;
        case "oldest":
            subArr = mainArr.sort((a, b) => {
                return new Date(a.created) - new Date(b.created)
            })
        break;
    }
    getPosts(subArr, createdPosts);
}