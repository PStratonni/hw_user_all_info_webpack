import getComments from "./comments.js";
import getPhotos from "./photos";
import addEventPosts from "./event_posts";
import addEventAlbums from "./event_albums";

const renderInfo = (user) => {
  document.querySelector("#info").innerHTML = `<h3>${user.name}</h3>
    <h5>Email: ${user.email}</h5>
    <h5>Address:</h5>
    <ul class="addres">
    <li><h6>Street: ${user.address.street}</h6></li>
    <li><h6>Suite: ${user.address.suite}</h6></li>
    <li><h6>City: ${user.address.city}</h6></li>
    <li><h6>Zipcode: ${user.address.zipcode}</h6></li>
    </ul>
    <h5>Phone: ${user.phone}</h5>
    <h5>Website: ${user.website}</h5>
    <h5>Company: ${user.company.name}</h5>
    `;
};

const renderToDo = (todos) => {
  document.querySelector("#todo ul").innerHTML = "";
  todos.forEach((todo) => {
    if (!todo.completed) {
      document.querySelector(
        "#todo ul"
      ).innerHTML += `<li><p>${todo.title}</p></li>
    `;
    } else {
      document.querySelector(
        "#todo ul"
      ).innerHTML += `<li class="is_done"><p>${todo.title}</p></li>
  `;
    }
  });
};

const renderPosts = (posts) => {
  document.querySelector("#posts ul").innerHTML = "";
  posts.forEach((post) => {
    document.querySelector("#posts ul").innerHTML += `<li class="position">
        <span id="post_${post.id}">${post.title}</span>
          <div id="coments_${post.id}" class="comments hidden">
          </div>
      </li>
    `;
    getComments(post.id);
  });
  addEventPosts();
};

const renderAlbums = (albums) => {
  document.querySelector("#photos").innerHTML = "";
  document.querySelector("#albums ul").innerHTML = "";
  albums.forEach((album) => {
    document.querySelector(
      "#albums ul"
    ).innerHTML += `<li><span id="album_${album.id}">${album.title}</span></li>
    `;
    getPhotos(album.id);
  });
  addEventAlbums();
};
export { renderInfo, renderToDo, renderPosts, renderAlbums };
