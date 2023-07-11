"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n//import { data } from '../../../SpeakerData';\n\n\nconst { promisify } = __webpack_require__(/*! util */ \"util\");\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst delay = (ms)=>new Promise((resolve)=>{\n        setTimeout(resolve, ms);\n    });\nasync function handler(req, res) {\n    //res.status(200).send(JSON.stringify(data, null, 2));\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    try {\n        const readFileData = await readFile(jsonFile);\n        await delay(1000);\n        const speakers = JSON.parse(readFileData).speakers;\n        if (speakers) {\n            res.setHeader(\"Content-Type\", \"application/json\");\n            res.status(200).send(JSON.stringify(speakers, null, 2));\n            console.log(\"GET /api/speakers status: 200\");\n        }\n    } catch (e) {\n        console.log(\"/api/speakers error\", e);\n        res.status(404).send(\"File Not Found on server\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4Q0FBOEM7QUFDdEI7QUFDSjtBQUVwQixNQUFNLEVBQUVFLFNBQVMsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxrQkFBTTtBQUNwQyxNQUFNQyxXQUFXRixVQUFVRCxvREFBV0c7QUFDdEMsTUFBTUMsUUFBUSxDQUFDQyxLQUNYLElBQUlDLFFBQVEsQ0FBQ0M7UUFDVEMsV0FBV0QsU0FBU0Y7SUFDeEI7QUFFVyxlQUFlSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUMsc0RBQXNEO0lBRXRELE1BQU1DLFdBQVdiLG1EQUFZUSxDQUFDLE1BQU07SUFDcEMsSUFBSTtRQUNBLE1BQU1NLGVBQWUsTUFBTVYsU0FBU1M7UUFDcEMsTUFBTVIsTUFBTTtRQUNaLE1BQU1VLFdBQVdDLEtBQUtDLE1BQU1ILGNBQWNDO1FBQzFDLElBQUlBLFVBQVU7WUFDVkgsSUFBSU0sVUFBVSxnQkFBZ0I7WUFDOUJOLElBQUlPLE9BQU8sS0FBS0MsS0FBS0osS0FBS0ssVUFBVU4sVUFBVSxNQUFNO1lBQ3BETyxRQUFRQyxJQUFJO1FBQ2hCO0lBQ0osRUFBRSxPQUFPQyxHQUFHO1FBQ1JGLFFBQVFDLElBQUksdUJBQXVCQztRQUNuQ1osSUFBSU8sT0FBTyxLQUFLQyxLQUFLO0lBQ3pCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25pbmctcmVhY3QtY29tcG9uZW50Ly4vcGFnZXMvYXBpL3NwZWFrZXJzL2luZGV4LmpzPzdkOWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vLi4vLi4vU3BlYWtlckRhdGEnO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5jb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZShcInV0aWxcIik7XHJcbmNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcclxuY29uc3QgZGVsYXkgPSAobXMpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICAvL3Jlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcclxuXHJcbiAgICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZShcIi4vXCIsIFwiZGIuanNvblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgICAgIGlmIChzcGVha2Vycykge1xyXG4gICAgICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoc3BlYWtlcnMsIG51bGwsIDIpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVQgL2FwaS9zcGVha2VycyBzdGF0dXM6IDIwMFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIvYXBpL3NwZWFrZXJzIGVycm9yXCIsIGUpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKFwiRmlsZSBOb3QgRm91bmQgb24gc2VydmVyXCIpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInBhdGgiLCJmcyIsInByb21pc2lmeSIsInJlcXVpcmUiLCJyZWFkRmlsZSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbkZpbGUiLCJyZWFkRmlsZURhdGEiLCJzcGVha2VycyIsIkpTT04iLCJwYXJzZSIsInNldEhlYWRlciIsInN0YXR1cyIsInNlbmQiLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/speakers/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();