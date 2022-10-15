import { baseURL } from "../baseurl.mjs";

/**
 * 
 * @param {Number} id - Input the id to the post that you wish to change
 * @param {String} textValue - What the new Body value should be for the edited post
 */
export async function editPost(id, textValue) {
  const editObject = {
    title: "",
    body: textValue,
  };
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(editObject),
  };
  try{
  const response = await fetch(`${baseURL}social/posts/${id}`, options);
  const data = await response.json();
  location.reload();
  return data;
  }
  catch(error){
    alert(error);
  }
}
/**
 * 
 * @param {Number} id - Input the Id that you wish to delete 
 */
export async function deletePost(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  try{
  const response = await fetch(`${baseURL}social/posts/${id}`, options);
  const data = await response.json();
  location.replace("profile.html")
  return data;
}
  catch(error) {
    console.log(error)
  }
}

/**
 * 
 * Takes the value from the "post-text" id, and creates a new post with that info as it's body
 */
export async function createPost(e) {
  const postText = document.getElementById("post-text");
  const newPost = {
    title: "",
    body: postText.value,
};
  const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    },
    body: JSON.stringify(newPost),
  }
  try{
    const response = await fetch(`${baseURL}social/posts`, options)
    const result = await response.json();
    postText.value = "";
    location.reload();
  } catch(error){
    console.log(error)
  }
}

/**
 * 
 * @returns Object carrying the the post information
 */
 export async function singlePost(id){
  const options = {
      method: "GET",
      headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
  }
  try{
    const response = await fetch(`${baseURL}social/posts/${id}?_author=true`, options)
    const data = await response.json();
    return data;
  } catch(error){
    console.log(error)
  }
  }

/**
 * 
 * @returns an array with posts from the API
 */
export async function getAllPosts(){
    const options = {
      method: "GET",
      headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
  }
  try{
    const response = await fetch(`${baseURL}social/posts?_author=true`, options)
    const data = await response.json();
    return data;
    }catch(error){
      console.log(error)
    }
  }

  /**
   * 
   * @param {String} username - the username of the profile that you want to look at
   * @returns data from the user, here we use it for the .post to display the posts from that user
   */
export async function lookAtProfile(username) {
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }
    const response = await fetch(`${baseURL}social/profiles/${username}?_posts=true`, options)
    const data = await response.json();
    return data;
}