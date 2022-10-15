import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "../valdiation.mjs";
import { baseURL } from "../baseurl.mjs";
import { toggleRegister } from "../Handlers/toggle_login.mjs";

// all the register values
const registerUsername = document.getElementById("username-register");
const registerEmail = document.getElementById("email-register");
const registerPassword = document.getElementById("password-register");
const reigsterPasswordConfirm = document.getElementById(
  "password-register-confirm"
);

// all the login values
const loginEmail = document.getElementById("email-log-in");
const loginPassword = document.getElementById("password-log-in");


//log-in in function
export async function loginFunc(e) {
  e.preventDefault();
  //login object with values from the login fields ready to be parsed
  const loginObject = {
    email: loginEmail.value,
    password: loginPassword.value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginObject),
  };
  try {
    const response = await fetch(`${baseURL}social/auth/login`, options);
    const result = await response.json();
    console.log(result)
    localStorage.setItem("accessToken", result.accessToken);
    localStorage.setItem("username", result.name);
    if(response.status == 200){
      location.replace("profile.html")
    } else{
      alert(result.message);
    }
  } catch (error) {
    console.log("something went wrong");
  }
}

export async function registerFunc(e) {
  e.preventDefault();
  const registerObject = {
    name: registerUsername.value,
    email: registerEmail.value,
    password: registerPassword.value,
  };
  if (
    validateUsername(registerUsername.value) &&
    validateEmail(registerEmail.value) &&
    validatePassword(registerPassword, reigsterPasswordConfirm)
  ) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerObject),
    };
    try {
      const response = await fetch(`${baseURL}social/auth/register`, options);
      const result = await response.json();
      if(response.status == 201){
        alert("new profile created")
        toggleRegister();
      } else{
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
