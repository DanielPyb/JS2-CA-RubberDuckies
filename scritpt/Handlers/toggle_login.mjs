const loginToggle = document.getElementById("login-button");
const registerToggle = document.getElementById("register-button");
const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");


loginToggle.addEventListener("click", toggleRegister);
registerToggle.addEventListener("click", toggleLogin);

//Toggle the login and register form
function toggleLogin() {
    registerForm.style.display = "block"
    loginForm.style.display = "none"
}

//Toggle the login and register form
export function toggleRegister() {
    registerForm.style.display = "none"
    loginForm.style.display = "block"
}