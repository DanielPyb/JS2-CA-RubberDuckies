import { loginFunc, registerFunc } from "./Api/API_login_register.mjs";



const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");


loginForm.addEventListener("submit", loginFunc);
registerForm.addEventListener("submit", registerFunc);

// logging out

const logOutBtn = document.querySelector("#log-out");
logOutBtn.addEventListener("click", logOut);

function logOut() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("username");
  location.reload();
}