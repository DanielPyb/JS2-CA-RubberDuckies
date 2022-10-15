export function createProfilePosts(arr, container) {
    container.innerHTML = "";
    arr.posts.forEach(post => {
        //destructuring the objects inside the array for readability and ease of use
        const {owner: owner, body: body, id: id, created: created, media: media } = post;
        container.innerHTML +=
        `
        <div class="row pt-3 mt-4 border border-1 shadow rounded-top single-post">
          <div class="col-3 col-sm-2">
            <img src="img/logo.png" alt="user photo"/>
          </div>
          <div class="col-9 col-sm-10">
            <h2 class="display-6"><a class="no_underline" href="profile.html?username=${owner}">${owner}</h2></a> 
            <span>${created.slice(0,10)}</span>
            <p><a class="no_underline" href="post.html?id=${id}">
              ${body}
            </p></a>
          </div>
          ${!media ? `</div>` : `<img src="${media}" style="width: 100%"></div> </div>`}
          `
    });
};
