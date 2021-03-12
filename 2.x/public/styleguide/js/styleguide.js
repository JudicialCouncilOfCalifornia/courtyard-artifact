"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./source/styleguide/js/styleguide.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./source/styleguide/js/styleguide.js":
  /*!********************************************!*\
    !*** ./source/styleguide/js/styleguide.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function sourceStyleguideJsStyleguideJs(module, exports) {
    eval("const schemeSwitcher = document.getElementById(\"jcc-schemebar-schemes\");\n\nif (schemeSwitcher.options.length > 0) {\n  const storage = window.localStorage;\n  const scheme = storage.getItem(\"scheme\") || \"base\";\n\n  // Set to stored scheme\n  schemeSwitcher.value = scheme;\n  loadStylesheets(scheme);\n\n  schemeSwitcher.addEventListener(\"change\", function () {\n    const newScheme = this.value;\n    loadStylesheets(newScheme);\n  });\n\n  function loadStylesheets(newScheme) {\n    storage.setItem(\"scheme\", newScheme);\n\n    // IDs of the stylesheet links\n    const cssIds = [\"sg-css\", \"pl-css\"];\n\n    cssIds.forEach(function (id) {\n      // Get stylesheet & path\n      const el = document.getElementById(id);\n      const url = new URL(el.href);\n\n      // Remove the file name portion\n      const pathname = url.pathname.split(\"/\");\n      pathname.pop();\n\n      // Add the new filename and load the stylesheet\n      const prefix = id.startsWith(\"sg\") ? \"sg-\" : \"\";\n      const filename = prefix + newScheme + \".css\";\n      url.pathname = pathname.join(\"/\") + \"/\" + filename;\n      el.setAttribute(\"href\", url.href);\n    });\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc3R5bGVndWlkZS9qcy9zdHlsZWd1aWRlLmpzP2JkNmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6Ii4vc291cmNlL3N0eWxlZ3VpZGUvanMvc3R5bGVndWlkZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjaGVtZVN3aXRjaGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqY2Mtc2NoZW1lYmFyLXNjaGVtZXNcIik7XG5cbmlmIChzY2hlbWVTd2l0Y2hlci5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIGNvbnN0IHNjaGVtZSA9IHN0b3JhZ2UuZ2V0SXRlbShcInNjaGVtZVwiKSB8fCBcImJhc2VcIjtcblxuICAvLyBTZXQgdG8gc3RvcmVkIHNjaGVtZVxuICBzY2hlbWVTd2l0Y2hlci52YWx1ZSA9IHNjaGVtZTtcbiAgbG9hZFN0eWxlc2hlZXRzKHNjaGVtZSk7XG5cbiAgc2NoZW1lU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmV3U2NoZW1lID0gdGhpcy52YWx1ZTtcbiAgICBsb2FkU3R5bGVzaGVldHMobmV3U2NoZW1lKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbG9hZFN0eWxlc2hlZXRzKG5ld1NjaGVtZSkge1xuICAgIHN0b3JhZ2Uuc2V0SXRlbShcInNjaGVtZVwiLCBuZXdTY2hlbWUpO1xuXG4gICAgLy8gSURzIG9mIHRoZSBzdHlsZXNoZWV0IGxpbmtzXG4gICAgY29uc3QgY3NzSWRzID0gW1wic2ctY3NzXCIsIFwicGwtY3NzXCJdO1xuXG4gICAgY3NzSWRzLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAvLyBHZXQgc3R5bGVzaGVldCAmIHBhdGhcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChlbC5ocmVmKTtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBmaWxlIG5hbWUgcG9ydGlvblxuICAgICAgY29uc3QgcGF0aG5hbWUgPSB1cmwucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgcGF0aG5hbWUucG9wKCk7XG5cbiAgICAgIC8vIEFkZCB0aGUgbmV3IGZpbGVuYW1lIGFuZCBsb2FkIHRoZSBzdHlsZXNoZWV0XG4gICAgICBjb25zdCBwcmVmaXggPSBpZC5zdGFydHNXaXRoKFwic2dcIikgPyBcInNnLVwiIDogXCJcIjtcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gcHJlZml4ICsgbmV3U2NoZW1lICsgXCIuY3NzXCI7XG4gICAgICB1cmwucGF0aG5hbWUgPSBwYXRobmFtZS5qb2luKFwiL1wiKSArIFwiL1wiICsgZmlsZW5hbWU7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybC5ocmVmKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/styleguide/js/styleguide.js\n");
    /***/
  }
  /******/

});