"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateatmayogashala"]("common",{

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/common.css */ \"./src/css/common.css\");\n/* harmony import */ var _assets_material_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/material-icons.css */ \"./src/assets/material-icons.css\");\n/* harmony import */ var _html_header_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html/header.html */ \"./src/html/header.html\");\n/* harmony import */ var _html_footer_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html/footer.html */ \"./src/html/footer.html\");\n/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/loader */ \"./src/modules/loader.js\");\n/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_loader__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\ndocument.querySelector(\"body\").insertAdjacentHTML(\"afterbegin\", _html_header_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\ndocument.querySelector(\"body\").insertAdjacentHTML(\"beforeend\", _html_footer_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n\nlet sign_ui = document.querySelector(\"div.sign\")\ndocument.querySelector(\"#sitemap\").onclick = e => {\n    e.preventDefault()\n    changeHash(\"sitemap\")\n}\n\nif (window.location.pathname.includes(\"index.html\")) document.querySelector(\"#home\").classList.add(\"nav-active\")\nelse if (window.location.pathname.includes(\"contact.html\")) document.querySelector(\"#contact\").classList.add(\"nav-active\")\nelse if (window.location.pathname.includes(\"products.html\")) document.querySelector(\"#products\").classList.add(\"nav-active\")\nelse if (window.location.pathname.includes(\"about.html\")) document.querySelector(\"#about\").classList.add(\"nav-active\")\nelse document.querySelector(\"#home\").classList.add(\"nav-active\")\n\nlet dealWithHash = () => {\n    let hash = window.location.hash.substring(1)\n    console.log(hash)\n    switch (hash) {\n        case \"sitemap\":\n            document.querySelector(\"footer\").scrollIntoView({ behavior: \"smooth\", block: \"start\" })\n            break\n        case \"login\":\n            sign_ui.style[\"opacity\"] = \"1\"\n            sign_ui.style[\"visibility\"] = \"visible\"\n            break\n        default: // Hide active popups\n            sign_ui.style[\"opacity\"] = \"0\"\n            sign_ui.style[\"visibility\"] = \"hidden\"\n            break\n    }\n}\nlet changeHash = hash => {\n    if (window.location.hash.substring(1) === hash) window.dispatchEvent(new HashChangeEvent(\"hashchange\"))\n    else window.location.hash = hash\n}\ndealWithHash()\naddEventListener(\"hashchange\", dealWithHash)\n\n// Animations...\ndocument.querySelector(\"div.sign div.wrapper\").onscroll = e => {\n    e.target.style[\"background-position-x\"] = (e.target.scrollTop / e.target.children[0].clientHeight) * 30 + \"%\"\n}\ndocument.querySelector(\"div.sign div.wrapper div.abstraction button\").onclick = e => {\n    document.querySelector(\"div.sign div.wrapper div.logup\").scrollIntoView({ behavior: \"smooth\", block: \"start\" })\n}\nsign_ui.onclick = e => {\n    if (e.target.id === \"sign\") {\n        window.location.hash = \"\"\n        sign_ui.style[\"opacity\"] = \"0\"\n        sign_ui.style[\"visibility\"] = \"hidden\"\n    }\n}\ndocument.querySelector(\"nav div.login\").onclick = e => {\n    window.location.hash = \"login\"\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDVztBQUNHO0FBQ0E7QUFDRjs7QUFFckMsZ0VBQWdFLHlEQUFNO0FBQ3RFLCtEQUErRCx5REFBTTs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsb0NBQW9DO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxvQ0FBb0M7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F0bWF5b2dhc2hhbGEvLi9zcmMvY29tbW9uLmpzPzY5ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9jc3MvY29tbW9uLmNzc1wiXG5pbXBvcnQgXCIuL2Fzc2V0cy9tYXRlcmlhbC1pY29ucy5jc3NcIlxuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9odG1sL2hlYWRlci5odG1sXCJcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vaHRtbC9mb290ZXIuaHRtbFwiXG5pbXBvcnQgbG9hZGVyIGZyb20gXCIuL21vZHVsZXMvbG9hZGVyXCJcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBoZWFkZXIpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZm9vdGVyKVxuXG5sZXQgc2lnbl91aSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2lnblwiKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlbWFwXCIpLm9uY2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjaGFuZ2VIYXNoKFwic2l0ZW1hcFwiKVxufVxuXG5pZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiaW5kZXguaHRtbFwiKSkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpLmNsYXNzTGlzdC5hZGQoXCJuYXYtYWN0aXZlXCIpXG5lbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJjb250YWN0Lmh0bWxcIikpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKS5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKVxuZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwicHJvZHVjdHMuaHRtbFwiKSkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9kdWN0c1wiKS5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKVxuZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFwiYWJvdXQuaHRtbFwiKSkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKS5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKVxuZWxzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIikuY2xhc3NMaXN0LmFkZChcIm5hdi1hY3RpdmVcIilcblxubGV0IGRlYWxXaXRoSGFzaCA9ICgpID0+IHtcbiAgICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKVxuICAgIGNvbnNvbGUubG9nKGhhc2gpXG4gICAgc3dpdGNoIChoYXNoKSB7XG4gICAgICAgIGNhc2UgXCJzaXRlbWFwXCI6XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJsb2dpblwiOlxuICAgICAgICAgICAgc2lnbl91aS5zdHlsZVtcIm9wYWNpdHlcIl0gPSBcIjFcIlxuICAgICAgICAgICAgc2lnbl91aS5zdHlsZVtcInZpc2liaWxpdHlcIl0gPSBcInZpc2libGVcIlxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDogLy8gSGlkZSBhY3RpdmUgcG9wdXBzXG4gICAgICAgICAgICBzaWduX3VpLnN0eWxlW1wib3BhY2l0eVwiXSA9IFwiMFwiXG4gICAgICAgICAgICBzaWduX3VpLnN0eWxlW1widmlzaWJpbGl0eVwiXSA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfVxufVxubGV0IGNoYW5nZUhhc2ggPSBoYXNoID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpID09PSBoYXNoKSB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgSGFzaENoYW5nZUV2ZW50KFwiaGFzaGNoYW5nZVwiKSlcbiAgICBlbHNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaFxufVxuZGVhbFdpdGhIYXNoKClcbmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGRlYWxXaXRoSGFzaClcblxuLy8gQW5pbWF0aW9ucy4uLlxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5zaWduIGRpdi53cmFwcGVyXCIpLm9uc2Nyb2xsID0gZSA9PiB7XG4gICAgZS50YXJnZXQuc3R5bGVbXCJiYWNrZ3JvdW5kLXBvc2l0aW9uLXhcIl0gPSAoZS50YXJnZXQuc2Nyb2xsVG9wIC8gZS50YXJnZXQuY2hpbGRyZW5bMF0uY2xpZW50SGVpZ2h0KSAqIDMwICsgXCIlXCJcbn1cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2lnbiBkaXYud3JhcHBlciBkaXYuYWJzdHJhY3Rpb24gYnV0dG9uXCIpLm9uY2xpY2sgPSBlID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnNpZ24gZGl2LndyYXBwZXIgZGl2LmxvZ3VwXCIpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSlcbn1cbnNpZ25fdWkub25jbGljayA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJzaWduXCIpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiXG4gICAgICAgIHNpZ25fdWkuc3R5bGVbXCJvcGFjaXR5XCJdID0gXCIwXCJcbiAgICAgICAgc2lnbl91aS5zdHlsZVtcInZpc2liaWxpdHlcIl0gPSBcImhpZGRlblwiXG4gICAgfVxufVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiBkaXYubG9naW5cIikub25jbGljayA9IGUgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJsb2dpblwiXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common.js\n");

/***/ })

});