import { loginURL } from "./baseurl.mjs";

const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");


// all the register values
const registerUsername = document.getElementById("username-register")
const registerEmail = document.getElementById("email-register")
const registerPassword = document.getElementById("password-register")
const reigsterPasswordConfirm = document.getElementById("password-register-confirm")

// all the login values
const loginEmail = document.getElementById("email-log-in")
const loginPassword = document.getElementById("password-log-in")

loginForm.addEventListener("submit", loginFunc)
registerForm.addEventListener("submit", registerFunc)


//log-in in function
async function loginFunc(e){
    e.preventDefault();
    //login object with values from the login fields ready to be parsed 
    const loginObject = {
        email: loginEmail.value,
        password: loginPassword.value
    }
    const options = {
        method: "POST",
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjgyLCJuYW1lIjoiRGFuaWVsUHliIiwiZW1haWwiOiJkYW5pZWwuc29sbGlkQHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9pbWcuc2VydmljZS5jb20vYXZhdGFyLmpwZyIsImJhbm5lciI6Imh0dHBzOi8vaW1nLnNlcnZpY2UuY29tL2Jhbm5lci5qcGciLCJpYXQiOjE2NjQwMTA4MjJ9.tnH6FKjgiS1H4sNvcbNcNLP8G-U-D6DvWmxkw2r1g48',
        },
        body: JSON.stringify(loginObject)
    };
    console.log(options.body);  
    try {const response = await fetch(loginURL, options)
    console.log(response)
    return response.json();
    } catch{
        console.log(error)
    }
}

function registerFunc(e){
    e.preventDefault();
    const registerObject = {
        name: registerUsername.value,
        email: registerEmail.value,
        password: registerPassword.value,
    }
    console.log(registerObject);

}

console.log(loginEmail);