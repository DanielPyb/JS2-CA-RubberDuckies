import { baseURL, loginURL } from "./baseurl.mjs";
import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "./valdiation.mjs";

const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");

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

loginForm.addEventListener("submit", loginFunc);
registerForm.addEventListener("submit", registerFunc);

//log-in in function
async function loginFunc(e) {
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
    localStorage.setItem("accessToken", result.accessToken);
    localStorage.setItem("username", result.name);
    loginForm.innerHTML = "<p>hello and welcome to the site!</p>";
  } catch(error) {
    console.log("something went wrong");
  }
}

async function registerFunc(e) {
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
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("something went wrong");
  }
}

// logging out

const logOutBtn = document.querySelector("#log-out");
logOutBtn.addEventListener("click", logOut);

function logOut() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("username");
  location.reload();
}