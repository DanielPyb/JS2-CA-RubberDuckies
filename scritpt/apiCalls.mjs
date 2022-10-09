import { baseURL } from "./baseurl.mjs";
import { editPostObject } from "./individualPost.mjs";

export async function editPost(id) {
    console.log("working before edit post obj function")
    const editedText = editPostObject();
  console.log("working after edit post obj function")
  const editObject = {
    title: "",
    body: "hard coded new value",
};
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(editObject),
  };
  const response = await fetch(`${baseURL}social/posts/${id}`, options);
  const data = await response.json();
  return data;
}

export async function deletePost(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  const response = await fetch(`${baseURL}social/posts/${id}`, options);
  const data = await response.json();
  return data;
}
