import {divClassAdd} from './remove_add';
export default function addEventAlbums  () {
    const spans = document.querySelectorAll("#albums span");
    for (let span of spans) {
      span.addEventListener("click", (event) => {
        event.preventDefault();
        const [, id] = event.target.id.split("_");
        document.querySelector("#photos").parentNode.classList.remove("hidden");
        const divs = document.querySelectorAll("#photos >div");
        for (let div of divs) {
          divClassAdd(`#${div.id}`, "hidden");
        }
        document.querySelector(`#photos_${id}`).classList.remove("hidden");
      });
    }
  };