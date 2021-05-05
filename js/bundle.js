/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/js/user.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/js/tabs.js\");\n/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window */ \"./src/js/window.js\");\n\r\n\r\n\r\n\r\n\r\nconst main = () => {\r\n  (0,_user__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n  document.querySelector(\"#off\").addEventListener(\"click\", () => {\r\n    document.querySelector(\"#off\").parentNode.classList.add(\"hidden\");\r\n  });\r\n  (0,_window__WEBPACK_IMPORTED_MODULE_2__.eventWindow)();\r\n};\r\n\r\nmain();\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/app.js?");

/***/ }),

/***/ "./src/js/comments.js":
/*!****************************!*\
  !*** ./src/js/comments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./src/js/const.js\");\n\r\nconst getComments = async (id) => {\r\n    const response = await fetch(`${_const__WEBPACK_IMPORTED_MODULE_0__.default[0] + _const__WEBPACK_IMPORTED_MODULE_0__.default[5]}?postId=${id}`);\r\n    const comments = await response.json();\r\n  \r\n    renderComments(comments.length, comments[0].postId);\r\n  };\r\n  \r\n  const renderComments = (quantity, id) => {\r\n    document.querySelector(\r\n      `#coments_${id}`\r\n    ).innerHTML = `<span>${quantity} comments</span>`;\r\n  };\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/comments.js?");

/***/ }),

/***/ "./src/js/const.js":
/*!*************************!*\
  !*** ./src/js/const.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst URL = [\r\n  \"https://jsonplaceholder.typicode.com\",\r\n  \"/users\",\r\n  \"/todos\",\r\n  \"/posts\",\r\n  \"/albums\",\r\n  \"/comments\",\r\n  \"/photos\",\r\n];\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (URL);\r\n\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/const.js?");

/***/ }),

/***/ "./src/js/event_albums.js":
/*!********************************!*\
  !*** ./src/js/event_albums.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEventAlbums)\n/* harmony export */ });\n/* harmony import */ var _remove_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove_add */ \"./src/js/remove_add.js\");\n\r\nfunction addEventAlbums  () {\r\n    const spans = document.querySelectorAll(\"#albums span\");\r\n    for (let span of spans) {\r\n      span.addEventListener(\"click\", (event) => {\r\n        event.preventDefault();\r\n        const [, id] = event.target.id.split(\"_\");\r\n        document.querySelector(\"#photos\").parentNode.classList.remove(\"hidden\");\r\n        const divs = document.querySelectorAll(\"#photos >div\");\r\n        for (let div of divs) {\r\n          (0,_remove_add__WEBPACK_IMPORTED_MODULE_0__.divClassAdd)(`#${div.id}`, \"hidden\");\r\n        }\r\n        document.querySelector(`#photos_${id}`).classList.remove(\"hidden\");\r\n      });\r\n    }\r\n  };\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/event_albums.js?");

/***/ }),

/***/ "./src/js/event_posts.js":
/*!*******************************!*\
  !*** ./src/js/event_posts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEventPosts)\n/* harmony export */ });\nfunction addEventPosts ()  {\r\n    const spans = document.querySelectorAll(\"#posts span\");\r\n    for (let span of spans) {\r\n      span.addEventListener(\"mouseover\", (event) => {\r\n        event.preventDefault();\r\n        const [, id] = event.target.id.split(\"_\");\r\n        document.querySelector(`#coments_${id}`).classList.remove(\"hidden\");\r\n      });\r\n      span.addEventListener(\"mouseout\", (event) => {\r\n        event.preventDefault();\r\n        const [, id] = event.target.id.split(\"_\");\r\n        document.querySelector(`#coments_${id}`).classList.add(\"hidden\");\r\n      });\r\n      span.addEventListener(\"mousemove\", (event) => {\r\n        event.preventDefault();\r\n        const [, id] = event.target.id.split(\"_\");\r\n        document.querySelector(\r\n          `#coments_${id}`\r\n        ).style.left = `${event.clientX}px`;\r\n        document.querySelector(`#coments_${id}`).style.top = `${\r\n          event.clientY - 40\r\n        }px`;\r\n      });\r\n    }\r\n  };\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/event_posts.js?");

/***/ }),

/***/ "./src/js/getdata.js":
/*!***************************!*\
  !*** ./src/js/getdata.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./src/js/const.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/js/render.js\");\n //y\r\n//y\r\nconst getData = async (id) => {\r\n  const result = [];\r\n  for (let i = 1; i < 5; i++) {\r\n    if (i === 1) {\r\n      const response = await fetch(`${_const__WEBPACK_IMPORTED_MODULE_0__.default[0] + _const__WEBPACK_IMPORTED_MODULE_0__.default[1]}/${id}`);\r\n      const data = await response.json();\r\n      result.push(data);\r\n      continue;\r\n    }\r\n    const response = await fetch(`${_const__WEBPACK_IMPORTED_MODULE_0__.default[0] + _const__WEBPACK_IMPORTED_MODULE_0__.default[1]}/${id}${_const__WEBPACK_IMPORTED_MODULE_0__.default[i]}`);\r\n    const data = await response.json();\r\n    result.push(data);\r\n  }\r\n  (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderInfo)(result[0]);\r\n  (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderToDo)(result[1]);\r\n  (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderPosts)(result[2]);\r\n  (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderAlbums)(result[3]);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/getdata.js?");

/***/ }),

/***/ "./src/js/photos.js":
/*!**************************!*\
  !*** ./src/js/photos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./src/js/const.js\");\n\r\nconst getPhotos = async (id) => {\r\n    const response = await fetch(`${_const__WEBPACK_IMPORTED_MODULE_0__.default[0] + _const__WEBPACK_IMPORTED_MODULE_0__.default[6]}?albumId=${id}`);\r\n    const album = await response.json();\r\n    renderPhotos(album);\r\n  };\r\n  \r\n  const renderPhotos = (album) => {\r\n    const div = document.createElement(\"div\");\r\n    div.id = `photos_${album[0].albumId}`;\r\n    div.classList.add(\"wrapper-photo\");\r\n    div.classList.add(\"hidden\");\r\n    album.forEach((photo) => {\r\n      div.innerHTML += `<div><img src=${photo.thumbnailUrl}></div>`;\r\n    });\r\n    document.querySelector(\"#photos\").appendChild(div);\r\n  };\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPhotos);\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/photos.js?");

/***/ }),

/***/ "./src/js/remove_add.js":
/*!******************************!*\
  !*** ./src/js/remove_add.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"divClassRemove\": () => (/* binding */ divClassRemove),\n/* harmony export */   \"divClassAdd\": () => (/* binding */ divClassAdd)\n/* harmony export */ });\nconst divClassRemove = (id, clas) => {\r\n  const divs = document.querySelectorAll(id);\r\n  for (let div of divs) {\r\n    div.classList.remove(clas);\r\n  }\r\n};\r\n\r\nconst divClassAdd = (id, clas) => {\r\n  const divs = document.querySelectorAll(id);\r\n  for (let div of divs) {\r\n    div.classList.add(clas);\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/remove_add.js?");

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderInfo\": () => (/* binding */ renderInfo),\n/* harmony export */   \"renderToDo\": () => (/* binding */ renderToDo),\n/* harmony export */   \"renderPosts\": () => (/* binding */ renderPosts),\n/* harmony export */   \"renderAlbums\": () => (/* binding */ renderAlbums)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/js/comments.js\");\n/* harmony import */ var _photos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos */ \"./src/js/photos.js\");\n/* harmony import */ var _event_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event_posts */ \"./src/js/event_posts.js\");\n/* harmony import */ var _event_albums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event_albums */ \"./src/js/event_albums.js\");\n\r\n\r\n\r\n\r\n\r\nconst renderInfo = (user) => {\r\n  document.querySelector(\"#info\").innerHTML = `<h3>${user.name}</h3>\r\n    <h5>Email: ${user.email}</h5>\r\n    <h5>Address:</h5>\r\n    <ul class=\"addres\">\r\n    <li><h6>Street: ${user.address.street}</h6></li>\r\n    <li><h6>Suite: ${user.address.suite}</h6></li>\r\n    <li><h6>City: ${user.address.city}</h6></li>\r\n    <li><h6>Zipcode: ${user.address.zipcode}</h6></li>\r\n    </ul>\r\n    <h5>Phone: ${user.phone}</h5>\r\n    <h5>Website: ${user.website}</h5>\r\n    <h5>Company: ${user.company.name}</h5>\r\n    `;\r\n};\r\n\r\nconst renderToDo = (todos) => {\r\n  document.querySelector(\"#todo ul\").innerHTML = \"\";\r\n  todos.forEach((todo) => {\r\n    if (!todo.completed) {\r\n      document.querySelector(\r\n        \"#todo ul\"\r\n      ).innerHTML += `<li><p>${todo.title}</p></li>\r\n    `;\r\n    } else {\r\n      document.querySelector(\r\n        \"#todo ul\"\r\n      ).innerHTML += `<li class=\"is_done\"><p>${todo.title}</p></li>\r\n  `;\r\n    }\r\n  });\r\n};\r\n\r\nconst renderPosts = (posts) => {\r\n  document.querySelector(\"#posts ul\").innerHTML = \"\";\r\n  posts.forEach((post) => {\r\n    document.querySelector(\"#posts ul\").innerHTML += `<li class=\"position\">\r\n        <span id=\"post_${post.id}\">${post.title}</span>\r\n          <div id=\"coments_${post.id}\" class=\"comments hidden\">\r\n          </div>\r\n      </li>\r\n    `;\r\n    (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.default)(post.id);\r\n  });\r\n  (0,_event_posts__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n};\r\n\r\nconst renderAlbums = (albums) => {\r\n  document.querySelector(\"#photos\").innerHTML = \"\";\r\n  document.querySelector(\"#albums ul\").innerHTML = \"\";\r\n  albums.forEach((album) => {\r\n    document.querySelector(\r\n      \"#albums ul\"\r\n    ).innerHTML += `<li><span id=\"album_${album.id}\">${album.title}</span></li>\r\n    `;\r\n    (0,_photos__WEBPACK_IMPORTED_MODULE_1__.default)(album.id);\r\n  });\r\n  (0,_event_albums__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/render.js?");

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _remove_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove_add */ \"./src/js/remove_add.js\");\n/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window */ \"./src/js/window.js\");\n\r\n\r\nconst addEventTabs = () => {\r\n    const tabs = document.querySelectorAll(\".tabs\");\r\n    for (let tab of tabs) {\r\n      tab.addEventListener(\"click\", (event) => {\r\n        event.preventDefault();\r\n        \r\n        if ( (0,_window__WEBPACK_IMPORTED_MODULE_1__.widthWindow)() && (0,_window__WEBPACK_IMPORTED_MODULE_1__.isClass)(tab)) {\r\n          tab.classList.remove(\"tabs-event\");\r\n          document\r\n            .querySelector(`#${event.currentTarget.id.split(\"_\")[1]}`)\r\n            .classList.add(\"hidden\");\r\n            return\r\n        } \r\n          (0,_remove_add__WEBPACK_IMPORTED_MODULE_0__.divClassRemove)(\".tabs\", \"tabs-event\");\r\n          tab.classList.add(\"tabs-event\");\r\n          const [, id] = event.currentTarget.id.split(\"_\");\r\n          removeHidden(id);\r\n        \r\n      });\r\n    }\r\n  };\r\n  \r\n  const removeHidden = (id) => {\r\n    const divs = document.querySelectorAll(\".content\");\r\n    for (let div of divs) {\r\n      if (div.id === id) {\r\n        div.classList.remove(\"hidden\");\r\n        continue;\r\n      }\r\n      div.classList.add(\"hidden\");\r\n    }\r\n  };\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventTabs);\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/tabs.js?");

/***/ }),

/***/ "./src/js/tostart.js":
/*!***************************!*\
  !*** ./src/js/tostart.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toStart)\n/* harmony export */ });\n/* harmony import */ var _remove_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove_add */ \"./src/js/remove_add.js\");\n//n\r\n\r\nfunction toStart(id) {\r\n  (0,_remove_add__WEBPACK_IMPORTED_MODULE_0__.divClassRemove)(\"#users div\", \"user-event\");\r\n  document.querySelector(`#user_${id}`).classList.add(\"user-event\");\r\n  document.querySelector(\"#ex-2\").classList.remove(\"hidden\");\r\n  (0,_remove_add__WEBPACK_IMPORTED_MODULE_0__.divClassRemove)(\".tabs\", \"tabs-event\");\r\n  document.querySelector(\"#tabs_info\").classList.add(\"tabs-event\");\r\n  (0,_remove_add__WEBPACK_IMPORTED_MODULE_0__.divClassAdd)(\".content\", \"hidden\");\r\n  document.querySelector(\"#info\").classList.remove(\"hidden\");\r\n}\r\n\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/tostart.js?");

/***/ }),

/***/ "./src/js/user.js":
/*!************************!*\
  !*** ./src/js/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tostart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tostart */ \"./src/js/tostart.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ \"./src/js/const.js\");\n/* harmony import */ var _getdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getdata */ \"./src/js/getdata.js\");\n//y\r\n\r\n//y\r\nconst getUser = async () => {\r\n  const response = await fetch(`${_const__WEBPACK_IMPORTED_MODULE_1__.default[0] + _const__WEBPACK_IMPORTED_MODULE_1__.default[1]}`);\r\n  const users = await response.json();\r\n  renderUsers(users);\r\n  addEventUsers();\r\n};\r\n\r\nconst renderUsers = (users) => {\r\n  users.forEach((user) => {\r\n    document.querySelector(\r\n      \"#users\"\r\n    ).innerHTML += `<div id=\"user_${user.id}\" class=\"users\"><h4>${user.username}</h4></div>`;\r\n  });\r\n  if (localStorage.getItem(\"user\")) {\r\n    const id = localStorage.getItem(\"user\");\r\n    (0,_tostart__WEBPACK_IMPORTED_MODULE_0__.default)(id);\r\n    (0,_getdata__WEBPACK_IMPORTED_MODULE_2__.default)(id);\r\n  }\r\n};\r\n\r\nconst addEventUsers = () => {\r\n  const divs = document.querySelectorAll(\"#users div\");\r\n  for (let div of divs) {\r\n    div.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      const [, id] = event.currentTarget.id.split(\"_\");\r\n      localStorage.setItem(\"user\", id);\r\n      (0,_tostart__WEBPACK_IMPORTED_MODULE_0__.default)(id);\r\n      (0,_getdata__WEBPACK_IMPORTED_MODULE_2__.default)(id);\r\n    });\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUser);\r\n\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/user.js?");

/***/ }),

/***/ "./src/js/window.js":
/*!**************************!*\
  !*** ./src/js/window.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventWindow\": () => (/* binding */ eventWindow),\n/* harmony export */   \"widthWindow\": () => (/* binding */ widthWindow),\n/* harmony export */   \"isClass\": () => (/* binding */ isClass)\n/* harmony export */ });\n/* harmony import */ var _tostart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tostart */ \"./src/js/tostart.js\");\n\r\nconst eventWindow = () => {\r\n  window.addEventListener(\"resize\", resizeThrottler, false);\r\n  var resizeTimeout;\r\n  function resizeThrottler() {\r\n    if (!resizeTimeout) {\r\n      resizeTimeout = setTimeout(function () {\r\n        resizeTimeout = null;\r\n        actualResizeHandler();\r\n      }, 66);\r\n    }\r\n  }\r\n};\r\nconst actualResizeHandler = () => {\r\n  const tabs = document.querySelectorAll(\".tabs-event\");\r\n  if (!tabs.length && !widthWindow() && localStorage.user) {\r\n    (0,_tostart__WEBPACK_IMPORTED_MODULE_0__.default)(localStorage.user);\r\n  }\r\n};\r\n\r\nconst widthWindow = () => {\r\n  return document.documentElement.clientWidth < 768;\r\n};\r\nconst isClass = (tab) => {\r\n  return tab.classList.contains(\"tabs-event\");\r\n};\r\n\r\n\n\n//# sourceURL=webpack://hw_user_all_info_webpack/./src/js/window.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;