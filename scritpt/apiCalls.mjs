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
