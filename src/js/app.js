import getUser from './user'
import addEventTabs from './tabs'
import {eventWindow} from './window'


const main = () => {
  getUser();
  addEventTabs();
  document.querySelector("#off").addEventListener("click", () => {
    document.querySelector("#off").parentNode.classList.add("hidden");
  });
  eventWindow();
};

main();