import {divClassRemove} from './remove_add'
import{widthWindow,isClass} from './window'
const addEventTabs = () => {
    const tabs = document.querySelectorAll(".tabs");
    for (let tab of tabs) {
      tab.addEventListener("click", (event) => {
        event.preventDefault();
        
        if ( widthWindow() && isClass(tab)) {
          tab.classList.remove("tabs-event");
          document
            .querySelector(`#${event.currentTarget.id.split("_")[1]}`)
            .classList.add("hidden");
            return
        } 
          divClassRemove(".tabs", "tabs-event");
          tab.classList.add("tabs-event");
          const [, id] = event.currentTarget.id.split("_");
          removeHidden(id);
        
      });
    }
  };
  
  const removeHidden = (id) => {
    const divs = document.querySelectorAll(".content");
    for (let div of divs) {
      if (div.id === id) {
        div.classList.remove("hidden");
        continue;
      }
      div.classList.add("hidden");
    }
  };
  export default addEventTabs;