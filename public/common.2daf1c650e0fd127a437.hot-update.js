/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateatmayogashala"]("common",{

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((module) => {

eval("class Loaders {\n    constructor() {\n        let loading = `\n            <style>\n            @keyframes gradient {\n                0% {background-position: 0% 50%;}\n                50% {background-position: 100% 50%;}\n                100% {background-position: 0% 50%;}\n            }\n            #loading {\n                position: fixed;\n                top: 0;\n                left: 0;\n                height: 5px;\n                width: 100vw;\n                background-color: var(--ap);\n                z-index: 100;\n                background: var(--gradient);\n                background-size: 400% 400%;\n                animation: gradient 2s ease infinite;\n            }\n            </style>\n            <div id=\"loading\" class=\"hidden\"></div>`\n        document.querySelector(\"body\").insertAdjacentHTML(\"afterbegin\", loading)\n        console.log(\"Added Loader !\")\n        this.le = document.querySelector(\"#loading\")\n\n        this.hideLoader = () => {\n            this.le.classList.add(\"hidden\")\n        }\n        this.showLoader = () => {\n            this.le.classList.remove(\"hidden\")\n        }\n    }\n}\n\nlet loader = new Loaders()\n\nmodule.exports = loader\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9sb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXRtYXlvZ2FzaGFsYS8uL3NyYy9tb2R1bGVzL2xvYWRlci5qcz81YjViIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExvYWRlcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgbG9hZGluZyA9IGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZ3JhZGllbnQge1xuICAgICAgICAgICAgICAgIDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7fVxuICAgICAgICAgICAgICAgIDUwJSB7YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7fVxuICAgICAgICAgICAgICAgIDEwMCUge2JhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbG9hZGluZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcCk7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGdyYWRpZW50IDJzIGVhc2UgaW5maW5pdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRpbmdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PmBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBsb2FkaW5nKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGVkIExvYWRlciAhXCIpXG4gICAgICAgIHRoaXMubGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdcIilcblxuICAgICAgICB0aGlzLmhpZGVMb2FkZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dMb2FkZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGxvYWRlciA9IG5ldyBMb2FkZXJzKClcblxubW9kdWxlLmV4cG9ydHMgPSBsb2FkZXJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/loader.js\n");

/***/ })

});