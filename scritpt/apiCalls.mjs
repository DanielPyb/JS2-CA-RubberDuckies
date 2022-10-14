import { baseURL } from "./baseurl.mjs";

export async function editPost(id, textValue) {
  console.log("working before edit post obj function");
  console.log("working after edit post obj function");
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
    console.log(error);
  }
}

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