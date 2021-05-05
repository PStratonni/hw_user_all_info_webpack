import { divClassRemove, divClassAdd } from "./remove_add";//n

export default function toStart(id) {
  divClassRemove("#users div", "user-event");
  document.querySelector(`#user_${id}`).classList.add("user-event");
  document.querySelector("#ex-2").classList.remove("hidden");
  divClassRemove(".tabs", "tabs-event");
  document.querySelector("#tabs_info").classList.add("tabs-event");
  divClassAdd(".content", "hidden");
  document.querySelector("#info").classList.remove("hidden");
}
