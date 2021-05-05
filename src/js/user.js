import toStart from "./tostart";//y
import URL from './const'
import getData from "./getdata";//y
const getUser = async () => {
  const response = await fetch(`${URL[0] + URL[1]}`);
  const users = await response.json();
  renderUsers(users);
  addEventUsers();
};

const renderUsers = (users) => {
  users.forEach((user) => {
    document.querySelector(
      "#users"
    ).innerHTML += `<div id="user_${user.id}" class="users"><h4>${user.username}</h4></div>`;
  });
  if (localStorage.getItem("user")) {
    const id = localStorage.getItem("user");
    toStart(id);
    getData(id);
  }
};

const addEventUsers = () => {
  const divs = document.querySelectorAll("#users div");
  for (let div of divs) {
    div.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.currentTarget.id.split("_");
      localStorage.setItem("user", id);
      toStart(id);
      getData(id);
    });
  }
};
export default getUser;
