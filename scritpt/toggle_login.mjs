const loginToggle = document.getElementById("login-button");
const registerToggle = document.getElementById("register-button");
const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");


loginToggle.addEventListener("click", toggleRegister);
registerToggle.addEventListener("click", toggleLogin);

function toggleLogin() {
    registerForm.style.display = "block"
    loginForm.style.display = "none"
}

function toggleRegister() {
    registerForm.style.display = "none"
    loginForm.style.display = "block"
}