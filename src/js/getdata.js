import URL from './const'; //y
import {renderInfo, renderToDo, renderPosts,renderAlbums} from './render'//y
const getData = async (id) => {
  const result = [];
  for (let i = 1; i < 5; i++) {
    if (i === 1) {
      const response = await fetch(`${URL[0] + URL[1]}/${id}`);
      const data = await response.json();
      result.push(data);
      continue;
    }
    const response = await fetch(`${URL[0] + URL[1]}/${id}${URL[i]}`);
    const data = await response.json();
    result.push(data);
  }
  renderInfo(result[0]);
  renderToDo(result[1]);
  renderPosts(result[2]);
  renderAlbums(result[3]);
};
export default getData;
