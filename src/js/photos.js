import URL from './const';
const getPhotos = async (id) => {
    const response = await fetch(`${URL[0] + URL[6]}?albumId=${id}`);
    const album = await response.json();
    renderPhotos(album);
  };
  
  const renderPhotos = (album) => {
    const div = document.createElement("div");
    div.id = `photos_${album[0].albumId}`;
    div.classList.add("wrapper-photo");
    div.classList.add("hidden");
    album.forEach((photo) => {
      div.innerHTML += `<div><img src=${photo.thumbnailUrl}></div>`;
    });
    document.querySelector("#photos").appendChild(div);
  };
  export default getPhotos;