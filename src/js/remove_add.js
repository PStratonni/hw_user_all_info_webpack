const divClassRemove = (id, clas) => {
  const divs = document.querySelectorAll(id);
  for (let div of divs) {
    div.classList.remove(clas);
  }
};

const divClassAdd = (id, clas) => {
  const divs = document.querySelectorAll(id);
  for (let div of divs) {
    div.classList.add(clas);
  }
};
export { divClassRemove, divClassAdd };
