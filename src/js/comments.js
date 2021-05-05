import URL from './const';
const getComments = async (id) => {
    const response = await fetch(`${URL[0] + URL[5]}?postId=${id}`);
    const comments = await response.json();
  
    renderComments(comments.length, comments[0].postId);
  };
  
  const renderComments = (quantity, id) => {
    document.querySelector(
      `#coments_${id}`
    ).innerHTML = `<span>${quantity} comments</span>`;
  };
  export default getComments;