import toStart from "./tostart";
const eventWindow = () => {
  window.addEventListener("resize", resizeThrottler, false);
  var resizeTimeout;
  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        actualResizeHandler();
      }, 66);
    }
  }
};
const actualResizeHandler = () => {
  const tabs = document.querySelectorAll(".tabs-event");
  if (!tabs.length && !widthWindow() && localStorage.user) {
    toStart(localStorage.user);
  }
};

const widthWindow = () => {
  return document.documentElement.clientWidth < 768;
};
const isClass = (tab) => {
  return tab.classList.contains("tabs-event");
};
export { eventWindow, widthWindow, isClass };
