function loggedInName() {
  if (localStorage.getItem("username") && localStorage.getItem("username") != "undefined") {
    const username = localStorage.getItem("username");
    const navBar = document.getElementById("nav-bar");
    navBar.innerHTML += `<div><p><a href="profile.html" style="color: #fefefe" class="no_underline">${username}</a></p></div>`;
  }
}

loggedInName();