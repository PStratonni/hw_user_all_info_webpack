export default function addEventPosts ()  {
    const spans = document.querySelectorAll("#posts span");
    for (let span of spans) {
      span.addEventListener("mouseover", (event) => {
        event.preventDefault();
        const [, id] = event.target.id.split("_");
        document.querySelector(`#coments_${id}`).classList.remove("hidden");
      });
      span.addEventListener("mouseout", (event) => {
        event.preventDefault();
        const [, id] = event.target.id.split("_");
        document.querySelector(`#coments_${id}`).classList.add("hidden");
      });
      span.addEventListener("mousemove", (event) => {
        event.preventDefault();
        const [, id] = event.target.id.split("_");
        document.querySelector(
          `#coments_${id}`
        ).style.left = `${event.clientX}px`;
        document.querySelector(`#coments_${id}`).style.top = `${
          event.clientY - 40
        }px`;
      });
    }
  };