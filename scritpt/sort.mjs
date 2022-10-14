import { getPosts, getAllPosts } from "./posts.mjs";


const mainArr = await getAllPosts();
let subArr = [];
const createdPosts = document.querySelector(".created-posts");

const postSort = document.getElementById("sorting-by");
console.log(postSort);

postSort.addEventListener("change", () =>{
    postListSort(postSort.value);
})

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