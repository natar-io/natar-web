/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packs/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@stimulus/core/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/index.js ***!
  \***************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/application */ "./node_modules/@stimulus/core/dist/src/application.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _src_application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/context */ "./node_modules/@stimulus/core/dist/src/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _src_context__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony import */ var _src_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/controller */ "./node_modules/@stimulus/core/dist/src/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _src_controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]; });

/* harmony import */ var _src_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/schema */ "./node_modules/@stimulus/core/dist/src/schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _src_schema__WEBPACK_IMPORTED_MODULE_3__["defaultSchema"]; });





//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN2QyxPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLGtCQUFrQixDQUFBO0FBRXBFLE9BQU8sRUFBVSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUEifQ==

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/action.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/action.js ***!
  \********************************************************/
/*! exports provided: Action, getDefaultEventNameForElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventNameForElement", function() { return getDefaultEventNameForElement; });
/* harmony import */ var _action_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_descriptor */ "./node_modules/@stimulus/core/dist/src/action_descriptor.js");

var Action = /** @class */ (function () {
    function Action(element, index, descriptor) {
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
    }
    Action.forToken = function (token) {
        return new this(token.element, token.index, Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["parseDescriptorString"])(token.content));
    };
    Action.prototype.toString = function () {
        var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
        return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
    };
    Object.defineProperty(Action.prototype, "eventTargetName", {
        get: function () {
            return Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["stringifyEventTarget"])(this.eventTarget);
        },
        enumerable: true,
        configurable: true
    });
    return Action;
}());

var defaultEventNames = {
    "a": function (e) { return "click"; },
    "button": function (e) { return "click"; },
    "form": function (e) { return "submit"; },
    "input": function (e) { return e.getAttribute("type") == "submit" ? "click" : "change"; },
    "select": function (e) { return "change"; },
    "textarea": function (e) { return "change"; }
};
function getDefaultEventNameForElement(element) {
    var tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
        return defaultEventNames[tagName](element);
    }
}
function error(message) {
    throw new Error(message);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFHbkc7SUFZRSxnQkFBWSxPQUFnQixFQUFFLEtBQWEsRUFBRSxVQUFxQztRQUNoRixJQUFJLENBQUMsT0FBTyxHQUFPLE9BQU8sQ0FBQTtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFTLEtBQUssQ0FBQTtRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFBO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUssVUFBVSxDQUFDLFNBQVMsSUFBSSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUNoSCxJQUFJLENBQUMsVUFBVSxHQUFJLFVBQVUsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLFVBQVUsR0FBSSxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUFYTSxlQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUMxQixPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBV0QseUJBQVEsR0FBUjtRQUNFLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQUksSUFBSSxDQUFDLGVBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUM5RSxPQUFPLEtBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLFVBQUssSUFBSSxDQUFDLFVBQVUsU0FBSSxJQUFJLENBQUMsVUFBWSxDQUFBO0lBQ3JGLENBQUM7SUFFRCxzQkFBWSxtQ0FBZTthQUEzQjtZQUNFLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQy9DLENBQUM7OztPQUFBO0lBQ0gsYUFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7O0FBRUQsSUFBTSxpQkFBaUIsR0FBd0Q7SUFDN0UsR0FBRyxFQUFTLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxFQUFQLENBQU87SUFDeEIsUUFBUSxFQUFJLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxFQUFQLENBQU87SUFDeEIsTUFBTSxFQUFNLFVBQUEsQ0FBQyxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVE7SUFDekIsT0FBTyxFQUFLLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUF2RCxDQUF1RDtJQUN4RSxRQUFRLEVBQUksVUFBQSxDQUFDLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUTtJQUN6QixVQUFVLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUTtDQUMxQixDQUFBO0FBRUQsTUFBTSx3Q0FBd0MsT0FBZ0I7SUFDNUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM3QyxJQUFJLE9BQU8sSUFBSSxpQkFBaUIsRUFBRTtRQUNoQyxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzNDO0FBQ0gsQ0FBQztBQUVELGVBQWUsT0FBZTtJQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQzFCLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/action_descriptor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/action_descriptor.js ***!
  \*******************************************************************/
/*! exports provided: parseDescriptorString, stringifyEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDescriptorString", function() { return parseDescriptorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyEventTarget", function() { return stringifyEventTarget; });
// capture nos.:            12   23 4               43   1 5   56 7  76
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/;
function parseDescriptorString(descriptorString) {
    var source = descriptorString.trim();
    var matches = source.match(descriptorPattern) || [];
    return {
        eventTarget: parseEventTarget(matches[4]),
        eventName: matches[2],
        identifier: matches[5],
        methodName: matches[7]
    };
}
function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
        return window;
    }
    else if (eventTargetName == "document") {
        return document;
    }
}
function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
        return "window";
    }
    else if (eventTarget == document) {
        return "document";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uX2Rlc2NyaXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9uX2Rlc2NyaXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsdUVBQXVFO0FBQ3ZFLElBQU0saUJBQWlCLEdBQUcsZ0RBQWdELENBQUE7QUFFMUUsTUFBTSxnQ0FBZ0MsZ0JBQXdCO0lBQzVELElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RDLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDckQsT0FBTztRQUNMLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsU0FBUyxFQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkIsVUFBVSxFQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkIsVUFBVSxFQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDeEIsQ0FBQTtBQUNILENBQUM7QUFFRCwwQkFBMEIsZUFBdUI7SUFDL0MsSUFBSSxlQUFlLElBQUksUUFBUSxFQUFFO1FBQy9CLE9BQU8sTUFBTSxDQUFBO0tBQ2Q7U0FBTSxJQUFJLGVBQWUsSUFBSSxVQUFVLEVBQUU7UUFDeEMsT0FBTyxRQUFRLENBQUE7S0FDaEI7QUFDSCxDQUFDO0FBRUQsTUFBTSwrQkFBK0IsV0FBd0I7SUFDM0QsSUFBSSxXQUFXLElBQUksTUFBTSxFQUFFO1FBQ3pCLE9BQU8sUUFBUSxDQUFBO0tBQ2hCO1NBQU0sSUFBSSxXQUFXLElBQUksUUFBUSxFQUFFO1FBQ2xDLE9BQU8sVUFBVSxDQUFBO0tBQ2xCO0FBQ0gsQ0FBQyJ9

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/application.js":
/*!*************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/application.js ***!
  \*************************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher */ "./node_modules/@stimulus/core/dist/src/dispatcher.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./node_modules/@stimulus/core/dist/src/router.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./node_modules/@stimulus/core/dist/src/schema.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Application = /** @class */ (function () {
    function Application(element, schema) {
        if (element === void 0) { element = document.documentElement; }
        if (schema === void 0) { schema = _schema__WEBPACK_IMPORTED_MODULE_2__["defaultSchema"]; }
        this.element = element;
        this.schema = schema;
        this.dispatcher = new _dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"](this);
        this.router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"](this);
    }
    Application.start = function (element, schema) {
        var application = new Application(element, schema);
        application.start();
        return application;
    };
    Application.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, domReady()];
                    case 1:
                        _a.sent();
                        this.router.start();
                        this.dispatcher.start();
                        return [2 /*return*/];
                }
            });
        });
    };
    Application.prototype.stop = function () {
        this.router.stop();
        this.dispatcher.stop();
    };
    Application.prototype.register = function (identifier, controllerConstructor) {
        this.load({ identifier: identifier, controllerConstructor: controllerConstructor });
    };
    Application.prototype.load = function (head) {
        var _this = this;
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var definitions = Array.isArray(head) ? head : [head].concat(rest);
        definitions.forEach(function (definition) { return _this.router.loadDefinition(definition); });
    };
    Application.prototype.unload = function (head) {
        var _this = this;
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var identifiers = Array.isArray(head) ? head : [head].concat(rest);
        identifiers.forEach(function (identifier) { return _this.router.unloadIdentifier(identifier); });
    };
    Object.defineProperty(Application.prototype, "controllers", {
        // Controllers
        get: function () {
            return this.router.contexts.map(function (context) { return context.controller; });
        },
        enumerable: true,
        configurable: true
    });
    Application.prototype.getControllerForElementAndIdentifier = function (element, identifier) {
        var context = this.router.getContextForElementAndIdentifier(element, identifier);
        return context ? context.controller : null;
    };
    // Error handling
    Application.prototype.handleError = function (error, message, detail) {
        console.error("%s\n\n%o\n\n%o", message, error, detail);
    };
    return Application;
}());

function domReady() {
    return new Promise(function (resolve) {
        if (document.readyState == "loading") {
            document.addEventListener("DOMContentLoaded", resolve);
        }
        else {
            resolve();
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFBO0FBRXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDakMsT0FBTyxFQUFVLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUVoRDtJQVlFLHFCQUFZLE9BQTJDLEVBQUUsTUFBOEI7UUFBM0Usd0JBQUEsRUFBQSxVQUFtQixRQUFRLENBQUMsZUFBZTtRQUFFLHVCQUFBLEVBQUEsc0JBQThCO1FBQ3JGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBWE0saUJBQUssR0FBWixVQUFhLE9BQWlCLEVBQUUsTUFBZTtRQUM3QyxJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDcEQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ25CLE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7SUFTSywyQkFBSyxHQUFYOzs7OzRCQUNFLHFCQUFNLFFBQVEsRUFBRSxFQUFBOzt3QkFBaEIsU0FBZ0IsQ0FBQTt3QkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTt3QkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTs7Ozs7S0FDeEI7SUFFRCwwQkFBSSxHQUFKO1FB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

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/binding.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/binding.js ***!
  \*********************************************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
var Binding = /** @class */ (function () {
    function Binding(context, action) {
        this.context = context;
        this.action = action;
    }
    Object.defineProperty(Binding.prototype, "index", {
        get: function () {
            return this.action.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "eventTarget", {
        get: function () {
            return this.action.eventTarget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "identifier", {
        get: function () {
            return this.context.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Binding.prototype.handleEvent = function (event) {
        if (this.willBeInvokedByEvent(event)) {
            this.invokeWithEvent(event);
        }
    };
    Object.defineProperty(Binding.prototype, "eventName", {
        get: function () {
            return this.action.eventName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "method", {
        get: function () {
            var method = this.controller[this.methodName];
            if (typeof method == "function") {
                return method;
            }
            throw new Error("Action \"" + this.action + "\" references undefined method \"" + this.methodName + "\"");
        },
        enumerable: true,
        configurable: true
    });
    Binding.prototype.invokeWithEvent = function (event) {
        try {
            this.method.call(this.controller, event);
        }
        catch (error) {
            var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element, index = _a.index;
            var detail = { identifier: identifier, controller: controller, element: element, index: index, event: event };
            this.context.handleError(error, "invoking action \"" + this.action + "\"", detail);
        }
    };
    Binding.prototype.willBeInvokedByEvent = function (event) {
        var eventTarget = event.target;
        if (this.element === eventTarget) {
            return true;
        }
        else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
            return this.scope.containsElement(eventTarget);
        }
        else {
            return true;
        }
    };
    Object.defineProperty(Binding.prototype, "controller", {
        get: function () {
            return this.context.controller;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "methodName", {
        get: function () {
            return this.action.methodName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: true,
        configurable: true
    });
    return Binding;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0lBSUUsaUJBQVksT0FBZ0IsRUFBRSxNQUFjO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFRCxzQkFBSSwwQkFBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCw2QkFBVyxHQUFYLFVBQVksS0FBWTtRQUN0QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUVELHNCQUFJLDhCQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFBO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQU07YUFBVjtZQUNFLElBQU0sTUFBTSxHQUFJLElBQUksQ0FBQyxVQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN4RCxJQUFJLE9BQU8sTUFBTSxJQUFJLFVBQVUsRUFBRTtnQkFDL0IsT0FBTyxNQUFNLENBQUE7YUFDZDtZQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBVyxJQUFJLENBQUMsTUFBTSx5Q0FBa0MsSUFBSSxDQUFDLFVBQVUsT0FBRyxDQUFDLENBQUE7UUFDN0YsQ0FBQzs7O09BQUE7SUFFTyxpQ0FBZSxHQUF2QixVQUF3QixLQUFZO1FBQ2xDLElBQUk7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3pDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDUixJQUFBLFNBQWlELEVBQS9DLDBCQUFVLEVBQUUsMEJBQVUsRUFBRSxvQkFBTyxFQUFFLGdCQUFLLENBQVM7WUFDdkQsSUFBTSxNQUFNLEdBQUcsRUFBRSxVQUFVLFlBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFBO1lBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSx1QkFBb0IsSUFBSSxDQUFDLE1BQU0sT0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1NBQzVFO0lBQ0gsQ0FBQztJQUVPLHNDQUFvQixHQUE1QixVQUE2QixLQUFZO1FBQ3ZDLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQTtTQUNaO2FBQU0sSUFBSSxXQUFXLFlBQVksT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQy9FLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDL0M7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFBO1NBQ1o7SUFDSCxDQUFDO0lBRUQsc0JBQVksK0JBQVU7YUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQVksK0JBQVU7YUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFBO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQVksNEJBQU87YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQVksMEJBQUs7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBQ0gsY0FBQztBQUFELENBQUMsQUEzRUQsSUEyRUMifQ==

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/binding_observer.js":
/*!******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/binding_observer.js ***!
  \******************************************************************/
/*! exports provided: BindingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingObserver", function() { return BindingObserver; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./node_modules/@stimulus/core/dist/src/action.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding */ "./node_modules/@stimulus/core/dist/src/binding.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");



var BindingObserver = /** @class */ (function () {
    function BindingObserver(context, delegate) {
        this.context = context;
        this.delegate = delegate;
        this.bindingsByAction = new Map;
    }
    BindingObserver.prototype.start = function () {
        if (!this.valueListObserver) {
            this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__["ValueListObserver"](this.element, this.actionAttribute, this);
            this.valueListObserver.start();
        }
    };
    BindingObserver.prototype.stop = function () {
        if (this.valueListObserver) {
            this.valueListObserver.stop();
            delete this.valueListObserver;
            this.disconnectAllActions();
        }
    };
    Object.defineProperty(BindingObserver.prototype, "element", {
        get: function () {
            return this.context.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "identifier", {
        get: function () {
            return this.context.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "actionAttribute", {
        get: function () {
            return this.schema.actionAttribute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "schema", {
        get: function () {
            return this.context.schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "bindings", {
        get: function () {
            return Array.from(this.bindingsByAction.values());
        },
        enumerable: true,
        configurable: true
    });
    BindingObserver.prototype.connectAction = function (action) {
        var binding = new _binding__WEBPACK_IMPORTED_MODULE_1__["Binding"](this.context, action);
        this.bindingsByAction.set(action, binding);
        this.delegate.bindingConnected(binding);
    };
    BindingObserver.prototype.disconnectAction = function (action) {
        var binding = this.bindingsByAction.get(action);
        if (binding) {
            this.bindingsByAction.delete(action);
            this.delegate.bindingDisconnected(binding);
        }
    };
    BindingObserver.prototype.disconnectAllActions = function () {
        var _this = this;
        this.bindings.forEach(function (binding) { return _this.delegate.bindingDisconnected(binding); });
        this.bindingsByAction.clear();
    };
    // Value observer delegate
    BindingObserver.prototype.parseValueForToken = function (token) {
        var action = _action__WEBPACK_IMPORTED_MODULE_0__["Action"].forToken(token);
        if (action.identifier == this.identifier) {
            return action;
        }
    };
    BindingObserver.prototype.elementMatchedValue = function (element, action) {
        this.connectAction(action);
    };
    BindingObserver.prototype.elementUnmatchedValue = function (element, action) {
        this.disconnectAction(action);
    };
    return BindingObserver;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZ19vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW5kaW5nX29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDakMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUluQyxPQUFPLEVBQVMsaUJBQWlCLEVBQTZCLE1BQU0sOEJBQThCLENBQUE7QUFPbEc7SUFNRSx5QkFBWSxPQUFnQixFQUFFLFFBQWlDO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUMvQjtJQUNILENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFBO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUVELHNCQUFJLG9DQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFBO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBZTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUE7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFRO2FBQVo7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDbkQsQ0FBQzs7O09BQUE7SUFFTyx1Q0FBYSxHQUFyQixVQUFzQixNQUFjO1FBQ2xDLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU8sMENBQWdCLEdBQXhCLFVBQXlCLE1BQWM7UUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMzQztJQUNILENBQUM7SUFFTyw4Q0FBb0IsR0FBNUI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFBO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQsMEJBQTBCO0lBRTFCLDRDQUFrQixHQUFsQixVQUFtQixLQUFZO1FBQzdCLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDeEMsT0FBTyxNQUFNLENBQUE7U0FDZDtJQUNILENBQUM7SUFFRCw2Q0FBbUIsR0FBbkIsVUFBb0IsT0FBZ0IsRUFBRSxNQUFjO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELCtDQUFxQixHQUFyQixVQUFzQixPQUFnQixFQUFFLE1BQWM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFsRkQsSUFrRkMifQ==

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/context.js ***!
  \*********************************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _binding_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_observer */ "./node_modules/@stimulus/core/dist/src/binding_observer.js");

var Context = /** @class */ (function () {
    function Context(module, scope) {
        this.module = module;
        this.scope = scope;
        this.controller = new module.controllerConstructor(this);
        this.bindingObserver = new _binding_observer__WEBPACK_IMPORTED_MODULE_0__["BindingObserver"](this, this.dispatcher);
        try {
            this.controller.initialize();
        }
        catch (error) {
            this.handleError(error, "initializing controller");
        }
    }
    Context.prototype.connect = function () {
        this.bindingObserver.start();
        try {
            this.controller.connect();
        }
        catch (error) {
            this.handleError(error, "connecting controller");
        }
    };
    Context.prototype.disconnect = function () {
        try {
            this.controller.disconnect();
        }
        catch (error) {
            this.handleError(error, "disconnecting controller");
        }
        this.bindingObserver.stop();
    };
    Object.defineProperty(Context.prototype, "application", {
        get: function () {
            return this.module.application;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "identifier", {
        get: function () {
            return this.module.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "schema", {
        get: function () {
            return this.application.schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "dispatcher", {
        get: function () {
            return this.application.dispatcher;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "parentElement", {
        get: function () {
            return this.element.parentElement;
        },
        enumerable: true,
        configurable: true
    });
    // Error handling
    Context.prototype.handleError = function (error, message, detail) {
        if (detail === void 0) { detail = {}; }
        var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element;
        detail = Object.assign({ identifier: identifier, controller: controller, element: element }, detail);
        this.application.handleError(error, "Error " + message, detail);
    };
    return Context;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQVFwRDtJQU1FLGlCQUFZLE1BQWMsRUFBRSxLQUFZO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRWpFLElBQUk7WUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFBO1NBQzdCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFBO1NBQ25EO0lBQ0gsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRTVCLElBQUk7WUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQzFCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxDQUFBO1NBQ2pEO0lBQ0gsQ0FBQztJQUVELDRCQUFVLEdBQVY7UUFDRSxJQUFJO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUM3QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUMsQ0FBQTtTQUNwRDtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDN0IsQ0FBQztJQUVELHNCQUFJLGdDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUE7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQTtRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFBO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNEJBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUE7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxpQkFBaUI7SUFFakIsNkJBQVcsR0FBWCxVQUFZLEtBQVksRUFBRSxPQUFlLEVBQUUsTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUN0RCxJQUFBLFNBQTBDLEVBQXhDLDBCQUFVLEVBQUUsMEJBQVUsRUFBRSxvQkFBTyxDQUFTO1FBQ2hELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxZQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBUyxPQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDIn0=

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/controller.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/controller.js ***!
  \************************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _target_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target_properties */ "./node_modules/@stimulus/core/dist/src/target_properties.js");

var Controller = /** @class */ (function () {
    function Controller(context) {
        this.context = context;
    }
    Controller.bless = function () {
        Object(_target_properties__WEBPACK_IMPORTED_MODULE_0__["defineTargetProperties"])(this);
    };
    Object.defineProperty(Controller.prototype, "application", {
        get: function () {
            return this.context.application;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "targets", {
        get: function () {
            return this.scope.targets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "data", {
        get: function () {
            return this.scope.data;
        },
        enumerable: true,
        configurable: true
    });
    Controller.prototype.initialize = function () {
        // Override in your subclass to set up initial controller state
    };
    Controller.prototype.connect = function () {
        // Override in your subclass to respond when the controller is connected to the DOM
    };
    Controller.prototype.disconnect = function () {
        // Override in your subclass to respond when the controller is disconnected from the DOM
    };
    Controller.targets = [];
    return Controller;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBTzVEO0lBU0Usb0JBQVksT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQU5NLGdCQUFLLEdBQVo7UUFDRSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBTUQsc0JBQUksbUNBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUE7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsK0JBQVUsR0FBVjtRQUNFLCtEQUErRDtJQUNqRSxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNFLG1GQUFtRjtJQUNyRixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNFLHdGQUF3RjtJQUMxRixDQUFDO0lBOUNNLGtCQUFPLEdBQWEsRUFBRSxDQUFBO0lBK0MvQixpQkFBQztDQUFBLEFBaERELElBZ0RDO1NBaERZLFVBQVUifQ==

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/data_map.js":
/*!**********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/data_map.js ***!
  \**********************************************************/
/*! exports provided: DataMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMap", function() { return DataMap; });
var DataMap = /** @class */ (function () {
    function DataMap(scope) {
        this.scope = scope;
    }
    Object.defineProperty(DataMap.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMap.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    DataMap.prototype.get = function (key) {
        key = this.getFormattedKey(key);
        return this.element.getAttribute(key);
    };
    DataMap.prototype.set = function (key, value) {
        key = this.getFormattedKey(key);
        this.element.setAttribute(key, value);
        return this.get(key);
    };
    DataMap.prototype.has = function (key) {
        key = this.getFormattedKey(key);
        return this.element.hasAttribute(key);
    };
    DataMap.prototype.delete = function (key) {
        if (this.has(key)) {
            key = this.getFormattedKey(key);
            this.element.removeAttribute(key);
            return true;
        }
        else {
            return false;
        }
    };
    DataMap.prototype.getFormattedKey = function (key) {
        return "data-" + this.identifier + "-" + dasherize(key);
    };
    return DataMap;
}());

function dasherize(value) {
    return value.replace(/([A-Z])/g, function (_, char) { return "-" + char.toLowerCase(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV9tYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YV9tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFHRSxpQkFBWSxLQUFZO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxzQkFBSSw0QkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFBO1FBQzlCLENBQUM7OztPQUFBO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLEtBQWE7UUFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDakMsT0FBTyxJQUFJLENBQUE7U0FDWjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUE7U0FDYjtJQUNILENBQUM7SUFFTyxpQ0FBZSxHQUF2QixVQUF3QixHQUFXO1FBQ2pDLE9BQU8sVUFBUSxJQUFJLENBQUMsVUFBVSxTQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUcsQ0FBQTtJQUNwRCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7O0FBRUQsbUJBQW1CLEtBQWE7SUFDOUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsRUFBRSxJQUFJLElBQUssT0FBQSxNQUFJLElBQUksQ0FBQyxXQUFXLEVBQUksRUFBeEIsQ0FBd0IsQ0FBQyxDQUFBO0FBQ3pFLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/definition.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/definition.js ***!
  \************************************************************/
/*! exports provided: blessDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessDefinition", function() { return blessDefinition; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** @hidden */
function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: blessControllerConstructor(definition.controllerConstructor)
    };
}
function blessControllerConstructor(controllerConstructor) {
    var constructor = extend(controllerConstructor);
    constructor.bless();
    return constructor;
}
var extend = (function () {
    function extendWithReflect(constructor) {
        function Controller() {
            var _newTarget = this && this instanceof Controller ? this.constructor : void 0;
            return Reflect.construct(constructor, arguments, _newTarget);
        }
        Controller.prototype = Object.create(constructor.prototype, {
            constructor: { value: Controller }
        });
        Reflect.setPrototypeOf(Controller, constructor);
        return Controller;
    }
    function testReflectExtension() {
        var a = function () { this.a.call(this); };
        var b = extendWithReflect(a);
        b.prototype.a = function () { };
        return new b;
    }
    try {
        testReflectExtension();
        return extendWithReflect;
    }
    catch (error) {
        return function (constructor) { return /** @class */ (function (_super) {
            __extends(Controller, _super);
            function Controller() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Controller;
        }(constructor)); };
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxjQUFjO0FBQ2QsTUFBTSwwQkFBMEIsVUFBc0I7SUFDcEQsT0FBTztRQUNMLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVTtRQUNqQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7S0FDcEYsQ0FBQTtBQUNILENBQUM7QUFFRCxvQ0FBb0MscUJBQTRDO0lBQzlFLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQ2pELFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNuQixPQUFPLFdBQVcsQ0FBQTtBQUNwQixDQUFDO0FBRUQsSUFBTSxNQUFNLEdBQUcsQ0FBQztJQUdkLDJCQUFzRCxXQUFjO1FBQ2xFOztZQUNFLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxhQUFhLENBQUE7UUFDOUQsQ0FBQztRQUVELFVBQVUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQzFELFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7U0FDbkMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDL0MsT0FBTyxVQUFpQixDQUFBO0lBQzFCLENBQUM7SUFFRDtRQUNFLElBQU0sQ0FBQyxHQUFHLGNBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBUSxDQUFBO1FBQzFELElBQU0sQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzlCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLGNBQVksQ0FBQyxDQUFBO1FBQzdCLE9BQU8sSUFBSSxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRUQsSUFBSTtRQUNGLG9CQUFvQixFQUFFLENBQUE7UUFDdEIsT0FBTyxpQkFBaUIsQ0FBQTtLQUN6QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxVQUE0QixXQUFjLElBQUs7WUFBeUIsOEJBQVc7WUFBcEM7O1lBQXNDLENBQUM7WUFBRCxpQkFBQztRQUFELENBQUMsQUFBdkMsQ0FBeUIsV0FBVyxJQUFwQyxDQUF1QyxDQUFBO0tBQzlGO0FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQSJ9

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/dispatcher.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/dispatcher.js ***!
  \************************************************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listener */ "./node_modules/@stimulus/core/dist/src/event_listener.js");

var Dispatcher = /** @class */ (function () {
    function Dispatcher(application) {
        this.application = application;
        this.eventListenerMaps = new Map;
        this.started = false;
    }
    Dispatcher.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this.eventListeners.forEach(function (eventListener) { return eventListener.connect(); });
        }
    };
    Dispatcher.prototype.stop = function () {
        if (this.started) {
            this.started = false;
            this.eventListeners.forEach(function (eventListener) { return eventListener.disconnect(); });
        }
    };
    Object.defineProperty(Dispatcher.prototype, "eventListeners", {
        get: function () {
            return Array.from(this.eventListenerMaps.values())
                .reduce(function (listeners, map) { return listeners.concat(Array.from(map.values())); }, []);
        },
        enumerable: true,
        configurable: true
    });
    // Binding observer delegate
    /** @hidden */
    Dispatcher.prototype.bindingConnected = function (binding) {
        this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    };
    /** @hidden */
    Dispatcher.prototype.bindingDisconnected = function (binding) {
        this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
    };
    // Error handling
    Dispatcher.prototype.handleError = function (error, message, detail) {
        if (detail === void 0) { detail = {}; }
        this.application.handleError(error, "Error " + message, detail);
    };
    Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {
        var eventTarget = binding.eventTarget, eventName = binding.eventName;
        return this.fetchEventListener(eventTarget, eventName);
    };
    Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName) {
        var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        var eventListener = eventListenerMap.get(eventName);
        if (!eventListener) {
            eventListener = this.createEventListener(eventTarget, eventName);
            eventListenerMap.set(eventName, eventListener);
        }
        return eventListener;
    };
    Dispatcher.prototype.createEventListener = function (eventTarget, eventName) {
        var eventListener = new _event_listener__WEBPACK_IMPORTED_MODULE_0__["EventListener"](eventTarget, eventName);
        if (this.started) {
            eventListener.connect();
        }
        return eventListener;
    };
    Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {
        var eventListenerMap = this.eventListenerMaps.get(eventTarget);
        if (!eventListenerMap) {
            eventListenerMap = new Map;
            this.eventListenerMaps.set(eventTarget, eventListenerMap);
        }
        return eventListenerMap;
    };
    return Dispatcher;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUVoRDtJQUtFLG9CQUFZLFdBQXdCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUE7U0FDdEU7SUFDSCxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLGFBQWEsSUFBSSxPQUFBLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFBO1NBQ3pFO0lBQ0gsQ0FBQztJQUVELHNCQUFJLHNDQUFjO2FBQWxCO1lBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDL0MsTUFBTSxDQUFDLFVBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSyxPQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxFQUFFLEVBQXFCLENBQUMsQ0FBQTtRQUNsRyxDQUFDOzs7T0FBQTtJQUVELDRCQUE0QjtJQUU1QixjQUFjO0lBQ2QscUNBQWdCLEdBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0lBRUQsY0FBYztJQUNkLHdDQUFtQixHQUFuQixVQUFvQixPQUFnQjtRQUNsQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDekUsQ0FBQztJQUVELGlCQUFpQjtJQUVqQixnQ0FBVyxHQUFYLFVBQVksS0FBWSxFQUFFLE9BQWUsRUFBRSxNQUFtQjtRQUFuQix1QkFBQSxFQUFBLFdBQW1CO1FBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxXQUFTLE9BQVMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0lBRU8saURBQTRCLEdBQXBDLFVBQXFDLE9BQWdCO1FBQzNDLElBQUEsaUNBQVcsRUFBRSw2QkFBUyxDQUFZO1FBQzFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBRU8sdUNBQWtCLEdBQTFCLFVBQTJCLFdBQXdCLEVBQUUsU0FBaUI7UUFDcEUsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUNBQW1DLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDOUUsSUFBSSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFDaEUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQTtTQUMvQztRQUNELE9BQU8sYUFBYSxDQUFBO0lBQ3RCLENBQUM7SUFFTyx3Q0FBbUIsR0FBM0IsVUFBNEIsV0FBd0IsRUFBRSxTQUFpQjtRQUNyRSxJQUFNLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDL0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtTQUN4QjtRQUNELE9BQU8sYUFBYSxDQUFBO0lBQ3RCLENBQUM7SUFFTyx3REFBbUMsR0FBM0MsVUFBNEMsV0FBd0I7UUFDbEUsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsQ0FBQTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1NBQzFEO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQTtJQUN6QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBL0VELElBK0VDIn0=

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/event_listener.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/event_listener.js ***!
  \****************************************************************/
/*! exports provided: EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
var EventListener = /** @class */ (function () {
    function EventListener(eventTarget, eventName) {
        this.eventTarget = eventTarget;
        this.eventName = eventName;
        this.unorderedBindings = new Set;
    }
    EventListener.prototype.connect = function () {
        this.eventTarget.addEventListener(this.eventName, this, false);
    };
    EventListener.prototype.disconnect = function () {
        this.eventTarget.removeEventListener(this.eventName, this, false);
    };
    // Binding observer delegate
    /** @hidden */
    EventListener.prototype.bindingConnected = function (binding) {
        this.unorderedBindings.add(binding);
    };
    /** @hidden */
    EventListener.prototype.bindingDisconnected = function (binding) {
        this.unorderedBindings.delete(binding);
    };
    EventListener.prototype.handleEvent = function (event) {
        var extendedEvent = extendEvent(event);
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
            var binding = _a[_i];
            if (extendedEvent.immediatePropagationStopped) {
                break;
            }
            else {
                binding.handleEvent(extendedEvent);
            }
        }
    };
    Object.defineProperty(EventListener.prototype, "bindings", {
        get: function () {
            return Array.from(this.unorderedBindings).sort(function (left, right) {
                var leftIndex = left.index, rightIndex = right.index;
                return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    return EventListener;
}());

function extendEvent(event) {
    if ("immediatePropagationStopped" in event) {
        return event;
    }
    else {
        var stopImmediatePropagation_1 = event.stopImmediatePropagation;
        return Object.assign(event, {
            immediatePropagationStopped: false,
            stopImmediatePropagation: function () {
                this.immediatePropagationStopped = true;
                stopImmediatePropagation_1.call(this);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRfbGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXZlbnRfbGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFLRSx1QkFBWSxXQUF3QixFQUFFLFNBQWlCO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFFRCw0QkFBNEI7SUFFNUIsY0FBYztJQUNkLHdDQUFnQixHQUFoQixVQUFpQixPQUFnQjtRQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFRCxjQUFjO0lBQ2QsMkNBQW1CLEdBQW5CLFVBQW9CLE9BQWdCO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3RCLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QyxLQUFzQixVQUFhLEVBQWIsS0FBQSxJQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhLEVBQUU7WUFBaEMsSUFBTSxPQUFPLFNBQUE7WUFDaEIsSUFBSSxhQUFhLENBQUMsMkJBQTJCLEVBQUU7Z0JBQzdDLE1BQUs7YUFDTjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsc0JBQUksbUNBQVE7YUFBWjtZQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztnQkFDekQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQTtnQkFDdEQsT0FBTyxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckUsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDOzs7T0FBQTtJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQzs7QUFFRCxxQkFBcUIsS0FBWTtJQUMvQixJQUFJLDZCQUE2QixJQUFJLEtBQUssRUFBRTtRQUMxQyxPQUFPLEtBQUssQ0FBQTtLQUNiO1NBQU07UUFDRyxJQUFBLDJEQUF3QixDQUFVO1FBQzFDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDMUIsMkJBQTJCLEVBQUUsS0FBSztZQUNsQyx3QkFBd0I7Z0JBQ3RCLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUE7Z0JBQ3ZDLDBCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNyQyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0tBQ0g7QUFDSCxDQUFDIn0=

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/module.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/module.js ***!
  \********************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/@stimulus/core/dist/src/context.js");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "./node_modules/@stimulus/core/dist/src/definition.js");


var Module = /** @class */ (function () {
    function Module(application, definition) {
        this.application = application;
        this.definition = Object(_definition__WEBPACK_IMPORTED_MODULE_1__["blessDefinition"])(definition);
        this.contextsByScope = new WeakMap;
        this.connectedContexts = new Set;
    }
    Object.defineProperty(Module.prototype, "identifier", {
        get: function () {
            return this.definition.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "controllerConstructor", {
        get: function () {
            return this.definition.controllerConstructor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "contexts", {
        get: function () {
            return Array.from(this.connectedContexts);
        },
        enumerable: true,
        configurable: true
    });
    Module.prototype.connectContextForScope = function (scope) {
        var context = this.fetchContextForScope(scope);
        this.connectedContexts.add(context);
        context.connect();
    };
    Module.prototype.disconnectContextForScope = function (scope) {
        var context = this.contextsByScope.get(scope);
        if (context) {
            this.connectedContexts.delete(context);
            context.disconnect();
        }
    };
    Module.prototype.fetchContextForScope = function (scope) {
        var context = this.contextsByScope.get(scope);
        if (!context) {
            context = new _context__WEBPACK_IMPORTED_MODULE_0__["Context"](this, scope);
            this.contextsByScope.set(scope, context);
        }
        return context;
    };
    return Module;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRW5DLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFHMUQ7SUFNRSxnQkFBWSxXQUF3QixFQUFFLFVBQXNCO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUE7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxDQUFBO0lBQ2xDLENBQUM7SUFFRCxzQkFBSSw4QkFBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQTtRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFxQjthQUF6QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQTtRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFRO2FBQVo7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDM0MsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBc0IsR0FBdEIsVUFBdUIsS0FBWTtRQUNqQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNuQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVELDBDQUF5QixHQUF6QixVQUEwQixLQUFZO1FBQ3BDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9DLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN0QyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUE7U0FDckI7SUFDSCxDQUFDO0lBRU8scUNBQW9CLEdBQTVCLFVBQTZCLEtBQVk7UUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1NBQ3pDO1FBQ0QsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDIn0=

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/router.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/router.js ***!
  \********************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./node_modules/@stimulus/core/dist/src/module.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");
/* harmony import */ var _scope_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope_observer */ "./node_modules/@stimulus/core/dist/src/scope_observer.js");



var Router = /** @class */ (function () {
    function Router(application) {
        this.application = application;
        this.scopeObserver = new _scope_observer__WEBPACK_IMPORTED_MODULE_2__["ScopeObserver"](this.element, this.schema, this);
        this.scopesByIdentifier = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"];
        this.modulesByIdentifier = new Map;
    }
    Object.defineProperty(Router.prototype, "element", {
        get: function () {
            return this.application.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "schema", {
        get: function () {
            return this.application.schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "controllerAttribute", {
        get: function () {
            return this.schema.controllerAttribute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "modules", {
        get: function () {
            return Array.from(this.modulesByIdentifier.values());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "contexts", {
        get: function () {
            return this.modules.reduce(function (contexts, module) { return contexts.concat(module.contexts); }, []);
        },
        enumerable: true,
        configurable: true
    });
    Router.prototype.start = function () {
        this.scopeObserver.start();
    };
    Router.prototype.stop = function () {
        this.scopeObserver.stop();
    };
    Router.prototype.loadDefinition = function (definition) {
        this.unloadIdentifier(definition.identifier);
        var module = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"](this.application, definition);
        this.connectModule(module);
    };
    Router.prototype.unloadIdentifier = function (identifier) {
        var module = this.modulesByIdentifier.get(identifier);
        if (module) {
            this.disconnectModule(module);
        }
    };
    Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {
        var module = this.modulesByIdentifier.get(identifier);
        if (module) {
            return module.contexts.find(function (context) { return context.element == element; });
        }
    };
    // Error handler delegate
    /** @hidden */
    Router.prototype.handleError = function (error, message, detail) {
        this.application.handleError(error, message, detail);
    };
    // Scope observer delegate
    /** @hidden */
    Router.prototype.scopeConnected = function (scope) {
        this.scopesByIdentifier.add(scope.identifier, scope);
        var module = this.modulesByIdentifier.get(scope.identifier);
        if (module) {
            module.connectContextForScope(scope);
        }
    };
    /** @hidden */
    Router.prototype.scopeDisconnected = function (scope) {
        this.scopesByIdentifier.delete(scope.identifier, scope);
        var module = this.modulesByIdentifier.get(scope.identifier);
        if (module) {
            module.disconnectContextForScope(scope);
        }
    };
    // Modules
    Router.prototype.connectModule = function (module) {
        this.modulesByIdentifier.set(module.identifier, module);
        var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach(function (scope) { return module.connectContextForScope(scope); });
    };
    Router.prototype.disconnectModule = function (module) {
        this.modulesByIdentifier.delete(module.identifier);
        var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach(function (scope) { return module.disconnectContextForScope(scope); });
    };
    return Router;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBQ2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUc3QyxPQUFPLEVBQUUsYUFBYSxFQUF5QixNQUFNLGtCQUFrQixDQUFBO0FBRXZFO0lBTUUsZ0JBQVksV0FBd0I7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksUUFBUSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsQ0FBQTtJQUNwQyxDQUFDO0lBRUQsc0JBQUksMkJBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQTtRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFtQjthQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQTtRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFPO2FBQVg7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0QkFBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FB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

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/schema.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/schema.js ***!
  \********************************************************/
/*! exports provided: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target"
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQVc7SUFDbkMsbUJBQW1CLEVBQUUsaUJBQWlCO0lBQ3RDLGVBQWUsRUFBRSxhQUFhO0lBQzlCLGVBQWUsRUFBRSxhQUFhO0NBQy9CLENBQUEifQ==

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/scope.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/scope.js ***!
  \*******************************************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_map */ "./node_modules/@stimulus/core/dist/src/data_map.js");
/* harmony import */ var _target_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target_set */ "./node_modules/@stimulus/core/dist/src/target_set.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/src/selectors.js");



var Scope = /** @class */ (function () {
    function Scope(schema, identifier, element) {
        this.schema = schema;
        this.identifier = identifier;
        this.element = element;
        this.targets = new _target_set__WEBPACK_IMPORTED_MODULE_1__["TargetSet"](this);
        this.data = new _data_map__WEBPACK_IMPORTED_MODULE_0__["DataMap"](this);
    }
    Scope.prototype.findElement = function (selector) {
        return this.findAllElements(selector)[0];
    };
    Scope.prototype.findAllElements = function (selector) {
        var head = this.element.matches(selector) ? [this.element] : [];
        var tail = this.filterElements(Array.from(this.element.querySelectorAll(selector)));
        return head.concat(tail);
    };
    Scope.prototype.filterElements = function (elements) {
        var _this = this;
        return elements.filter(function (element) { return _this.containsElement(element); });
    };
    Scope.prototype.containsElement = function (element) {
        return element.closest(this.controllerSelector) === this.element;
    };
    Object.defineProperty(Scope.prototype, "controllerSelector", {
        get: function () {
            return Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["attributeValueContainsToken"])(this.schema.controllerAttribute, this.identifier);
        },
        enumerable: true,
        configurable: true
    });
    return Scope;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NvcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQTtBQUVwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFBO0FBQ3hDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUV6RDtJQU9FLGVBQVksTUFBYyxFQUFFLFVBQWtCLEVBQUUsT0FBZ0I7UUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCwyQkFBVyxHQUFYLFVBQVksUUFBZ0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFRCwrQkFBZSxHQUFmLFVBQWdCLFFBQWdCO1FBQzlCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQ2pFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUVELDhCQUFjLEdBQWQsVUFBZSxRQUFtQjtRQUFsQyxpQkFFQztRQURDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBRUQsK0JBQWUsR0FBZixVQUFnQixPQUFnQjtRQUM5QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNsRSxDQUFDO0lBRUQsc0JBQVkscUNBQWtCO2FBQTlCO1lBQ0UsT0FBTywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN0RixDQUFDOzs7T0FBQTtJQUNILFlBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDIn0=

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/scope_observer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/scope_observer.js ***!
  \****************************************************************/
/*! exports provided: ScopeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeObserver", function() { return ScopeObserver; });
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "./node_modules/@stimulus/core/dist/src/scope.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");


var ScopeObserver = /** @class */ (function () {
    function ScopeObserver(element, schema, delegate) {
        this.element = element;
        this.schema = schema;
        this.delegate = delegate;
        this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__["ValueListObserver"](this.element, this.controllerAttribute, this);
        this.scopesByIdentifierByElement = new WeakMap;
        this.scopeReferenceCounts = new WeakMap;
    }
    ScopeObserver.prototype.start = function () {
        this.valueListObserver.start();
    };
    ScopeObserver.prototype.stop = function () {
        this.valueListObserver.stop();
    };
    Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
        get: function () {
            return this.schema.controllerAttribute;
        },
        enumerable: true,
        configurable: true
    });
    // Value observer delegate
    /** @hidden */
    ScopeObserver.prototype.parseValueForToken = function (token) {
        var element = token.element, identifier = token.content;
        var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
        var scope = scopesByIdentifier.get(identifier);
        if (!scope) {
            scope = new _scope__WEBPACK_IMPORTED_MODULE_0__["Scope"](this.schema, identifier, element);
            scopesByIdentifier.set(identifier, scope);
        }
        return scope;
    };
    /** @hidden */
    ScopeObserver.prototype.elementMatchedValue = function (element, value) {
        var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
        this.scopeReferenceCounts.set(value, referenceCount);
        if (referenceCount == 1) {
            this.delegate.scopeConnected(value);
        }
    };
    /** @hidden */
    ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {
        var referenceCount = this.scopeReferenceCounts.get(value);
        if (referenceCount) {
            this.scopeReferenceCounts.set(value, referenceCount - 1);
            if (referenceCount == 1) {
                this.delegate.scopeDisconnected(value);
            }
        }
    };
    ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {
        var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
        if (!scopesByIdentifier) {
            scopesByIdentifier = new Map;
            this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
        }
        return scopesByIdentifier;
    };
    return ScopeObserver;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGVfb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NvcGVfb2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUMvQixPQUFPLEVBQVMsaUJBQWlCLEVBQTZCLE1BQU0sOEJBQThCLENBQUE7QUFPbEc7SUFRRSx1QkFBWSxPQUFnQixFQUFFLE1BQWMsRUFBRSxRQUErQjtRQUMzRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM1RixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxPQUFPLENBQUE7UUFDOUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksT0FBTyxDQUFBO0lBQ3pDLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxzQkFBSSw4Q0FBbUI7YUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUE7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCwwQkFBMEI7SUFFMUIsY0FBYztJQUNkLDBDQUFrQixHQUFsQixVQUFtQixLQUFZO1FBQ3JCLElBQUEsdUJBQU8sRUFBRSwwQkFBbUIsQ0FBVTtRQUM5QyxJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUUxRSxJQUFJLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUNuRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQzFDO1FBRUQsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsY0FBYztJQUNkLDJDQUFtQixHQUFuQixVQUFvQixPQUFnQixFQUFFLEtBQVk7UUFDaEQsSUFBTSxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQTtRQUNwRCxJQUFJLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDcEM7SUFDSCxDQUFDO0lBRUQsY0FBYztJQUNkLDZDQUFxQixHQUFyQixVQUFzQixPQUFnQixFQUFFLEtBQVk7UUFDbEQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzRCxJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDeEQsSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDO0lBRU8seURBQWlDLEdBQXpDLFVBQTBDLE9BQWdCO1FBQ3hELElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDdkIsa0JBQWtCLEdBQUcsSUFBSSxHQUFHLENBQUE7WUFDNUIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtTQUNsRTtRQUNELE9BQU8sa0JBQWtCLENBQUE7SUFDM0IsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXpFRCxJQXlFQyJ9

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/selectors.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/selectors.js ***!
  \***********************************************************/
/*! exports provided: attributeValueContainsToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValueContainsToken", function() { return attributeValueContainsToken; });
/** @hidden */
function attributeValueContainsToken(attributeName, token) {
    return "[" + attributeName + "~=\"" + token + "\"]";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2QsTUFBTSxzQ0FBc0MsYUFBcUIsRUFBRSxLQUFhO0lBQzlFLE9BQU8sTUFBSSxhQUFhLFlBQU0sS0FBSyxRQUFJLENBQUE7QUFDekMsQ0FBQyJ9

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/target_properties.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/target_properties.js ***!
  \*******************************************************************/
/*! exports provided: defineTargetProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineTargetProperties", function() { return defineTargetProperties; });
/** @hidden */
function defineTargetProperties(constructor) {
    var prototype = constructor.prototype;
    var targetNames = getTargetNamesForConstructor(constructor);
    targetNames.forEach(function (name) {
        var _a;
        return defineLinkedProperties(prototype, (_a = {},
            _a[name + "Target"] = {
                get: function () {
                    var target = this.targets.find(name);
                    if (target) {
                        return target;
                    }
                    else {
                        throw new Error("Missing target element \"" + this.identifier + "." + name + "\"");
                    }
                }
            },
            _a[name + "Targets"] = {
                get: function () {
                    return this.targets.findAll(name);
                }
            },
            _a["has" + capitalize(name) + "Target"] = {
                get: function () {
                    return this.targets.has(name);
                }
            },
            _a));
    });
}
function getTargetNamesForConstructor(constructor) {
    var ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce(function (targetNames, constructor) {
        getOwnTargetNamesForConstructor(constructor).forEach(function (name) { return targetNames.add(name); });
        return targetNames;
    }, new Set));
}
function getAncestorsForConstructor(constructor) {
    var ancestors = [];
    while (constructor) {
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors;
}
function getOwnTargetNamesForConstructor(constructor) {
    var definition = constructor["targets"];
    return Array.isArray(definition) ? definition : [];
}
function defineLinkedProperties(object, properties) {
    Object.keys(properties).forEach(function (name) {
        if (!(name in object)) {
            var descriptor = properties[name];
            Object.defineProperty(object, name, descriptor);
        }
    });
}
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X3Byb3BlcnRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0X3Byb3BlcnRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsY0FBYztBQUNkLE1BQU0saUNBQWlDLFdBQXFCO0lBQzFELElBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUE7SUFDdkMsSUFBTSxXQUFXLEdBQUcsNEJBQTRCLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDN0QsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7O1FBQUksT0FBQSxzQkFBc0IsQ0FBQyxTQUFTO1lBQzFELEdBQUksSUFBSSxXQUFRLElBQUc7Z0JBQ2pCLEdBQUc7b0JBQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3RDLElBQUksTUFBTSxFQUFFO3dCQUNWLE9BQU8sTUFBTSxDQUFBO3FCQUNkO3lCQUFNO3dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQTJCLElBQUksQ0FBQyxVQUFVLFNBQUksSUFBSSxPQUFHLENBQUMsQ0FBQTtxQkFDdkU7Z0JBQ0gsQ0FBQzthQUNGO1lBQ0QsR0FBSSxJQUFJLFlBQVMsSUFBRztnQkFDbEIsR0FBRztvQkFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuQyxDQUFDO2FBQ0Y7WUFDRCxHQUFDLFFBQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFRLElBQUc7Z0JBQ2hDLEdBQUc7b0JBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDL0IsQ0FBQzthQUNGO2dCQUNEO0lBckIwQixDQXFCMUIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVELHNDQUFzQyxXQUFxQjtJQUN6RCxJQUFNLFNBQVMsR0FBRywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN6RCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFdBQVcsRUFBRSxXQUFXO1FBQzFELCtCQUErQixDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQTtRQUNuRixPQUFPLFdBQVcsQ0FBQTtJQUNwQixDQUFDLEVBQUUsSUFBSSxHQUFrQixDQUFDLENBQUMsQ0FBQTtBQUM3QixDQUFDO0FBRUQsb0NBQW9DLFdBQXFCO0lBQ3ZELElBQU0sU0FBUyxHQUFlLEVBQUUsQ0FBQTtJQUNoQyxPQUFPLFdBQVcsRUFBRTtRQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzNCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0tBQ2pEO0lBQ0QsT0FBTyxTQUFTLENBQUE7QUFDbEIsQ0FBQztBQUVELHlDQUF5QyxXQUFxQjtJQUM1RCxJQUFNLFVBQVUsR0FBSSxXQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2xELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7QUFDcEQsQ0FBQztBQUVELGdDQUFnQyxNQUFXLEVBQUUsVUFBaUM7SUFDNUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1FBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsRUFBRTtZQUNyQixJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1NBQ2hEO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsb0JBQW9CLElBQVk7SUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDckQsQ0FBQyJ9

/***/ }),

/***/ "./node_modules/@stimulus/core/dist/src/target_set.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/target_set.js ***!
  \************************************************************/
/*! exports provided: TargetSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSet", function() { return TargetSet; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/src/selectors.js");

var TargetSet = /** @class */ (function () {
    function TargetSet(scope) {
        this.scope = scope;
    }
    Object.defineProperty(TargetSet.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetSet.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetSet.prototype, "schema", {
        get: function () {
            return this.scope.schema;
        },
        enumerable: true,
        configurable: true
    });
    TargetSet.prototype.has = function (targetName) {
        return this.find(targetName) != null;
    };
    TargetSet.prototype.find = function () {
        var targetNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetNames[_i] = arguments[_i];
        }
        var selector = this.getSelectorForTargetNames(targetNames);
        return this.scope.findElement(selector);
    };
    TargetSet.prototype.findAll = function () {
        var targetNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetNames[_i] = arguments[_i];
        }
        var selector = this.getSelectorForTargetNames(targetNames);
        return this.scope.findAllElements(selector);
    };
    TargetSet.prototype.getSelectorForTargetNames = function (targetNames) {
        var _this = this;
        return targetNames.map(function (targetName) { return _this.getSelectorForTargetName(targetName); }).join(", ");
    };
    TargetSet.prototype.getSelectorForTargetName = function (targetName) {
        var targetDescriptor = this.identifier + "." + targetName;
        return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(this.schema.targetAttribute, targetDescriptor);
    };
    return TargetSet;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXRfc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUV6RDtJQUdFLG1CQUFZLEtBQVk7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELHNCQUFJLDhCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHVCQUFHLEdBQUgsVUFBSSxVQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFBO0lBQ3RDLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQUsscUJBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixnQ0FBd0I7O1FBQzNCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQVEscUJBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixnQ0FBd0I7O1FBQzlCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFTyw2Q0FBeUIsR0FBakMsVUFBa0MsV0FBcUI7UUFBdkQsaUJBRUM7UUFEQyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUYsQ0FBQztJQUVPLDRDQUF3QixHQUFoQyxVQUFpQyxVQUFrQjtRQUNqRCxJQUFNLGdCQUFnQixHQUFNLElBQUksQ0FBQyxVQUFVLFNBQUksVUFBWSxDQUFBO1FBQzNELE9BQU8sMkJBQTJCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDIn0=

/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/index.js ***!
  \*******************************************************/
/*! exports provided: Multimap, IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/multimap */ "./node_modules/@stimulus/multimap/dist/src/multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return _src_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]; });

/* harmony import */ var _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/indexed_multimap */ "./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__["IndexedMultimap"]; });



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLGdCQUFnQixDQUFBO0FBQzlCLGNBQWMsd0JBQXdCLENBQUEifQ==

/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js ***!
  \**********************************************************************/
/*! exports provided: IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multimap */ "./node_modules/@stimulus/multimap/dist/src/multimap.js");
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/src/set_operations.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var IndexedMultimap = /** @class */ (function (_super) {
    __extends(IndexedMultimap, _super);
    function IndexedMultimap() {
        var _this = _super.call(this) || this;
        _this.keysByValue = new Map;
        return _this;
    }
    Object.defineProperty(IndexedMultimap.prototype, "values", {
        get: function () {
            return Array.from(this.keysByValue.keys());
        },
        enumerable: true,
        configurable: true
    });
    IndexedMultimap.prototype.add = function (key, value) {
        _super.prototype.add.call(this, key, value);
        Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["add"])(this.keysByValue, value, key);
    };
    IndexedMultimap.prototype.delete = function (key, value) {
        _super.prototype.delete.call(this, key, value);
        Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["del"])(this.keysByValue, value, key);
    };
    IndexedMultimap.prototype.hasValue = function (value) {
        return this.keysByValue.has(value);
    };
    IndexedMultimap.prototype.getKeysForValue = function (value) {
        var set = this.keysByValue.get(value);
        return set ? Array.from(set) : [];
    };
    return IndexedMultimap;
}(_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZF9tdWx0aW1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleGVkX211bHRpbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBQ3JDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFM0M7SUFBMkMsbUNBQWM7SUFHdkQ7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksR0FBRyxDQUFBOztJQUM1QixDQUFDO0lBRUQsc0JBQUksbUNBQU07YUFBVjtZQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCw2QkFBRyxHQUFILFVBQUksR0FBTSxFQUFFLEtBQVE7UUFDbEIsaUJBQU0sR0FBRyxZQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxHQUFNLEVBQUUsS0FBUTtRQUNyQixpQkFBTSxNQUFNLFlBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLEtBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLEtBQVE7UUFDdEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUNuQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBOUJELENBQTJDLFFBQVEsR0E4QmxEIn0=

/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/src/multimap.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/multimap.js ***!
  \**************************************************************/
/*! exports provided: Multimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/src/set_operations.js");

var Multimap = /** @class */ (function () {
    function Multimap() {
        this.valuesByKey = new Map();
    }
    Object.defineProperty(Multimap.prototype, "values", {
        get: function () {
            var sets = Array.from(this.valuesByKey.values());
            return sets.reduce(function (values, set) { return values.concat(Array.from(set)); }, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Multimap.prototype, "size", {
        get: function () {
            var sets = Array.from(this.valuesByKey.values());
            return sets.reduce(function (size, set) { return size + set.size; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Multimap.prototype.add = function (key, value) {
        Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["add"])(this.valuesByKey, key, value);
    };
    Multimap.prototype.delete = function (key, value) {
        Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["del"])(this.valuesByKey, key, value);
    };
    Multimap.prototype.has = function (key, value) {
        var values = this.valuesByKey.get(key);
        return values != null && values.has(value);
    };
    Multimap.prototype.hasKey = function (key) {
        return this.valuesByKey.has(key);
    };
    Multimap.prototype.hasValue = function (value) {
        var sets = Array.from(this.valuesByKey.values());
        return sets.some(function (set) { return set.has(value); });
    };
    Multimap.prototype.getValuesForKey = function (key) {
        var values = this.valuesByKey.get(key);
        return values ? Array.from(values) : [];
    };
    Multimap.prototype.getKeysForValue = function (value) {
        return Array.from(this.valuesByKey)
            .filter(function (_a) {
            var key = _a[0], values = _a[1];
            return values.has(value);
        })
            .map(function (_a) {
            var key = _a[0], values = _a[1];
            return key;
        });
    };
    return Multimap;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGltYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbXVsdGltYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUUzQztJQUdFO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFBO0lBQ3pDLENBQUM7SUFFRCxzQkFBSSw0QkFBTTthQUFWO1lBQ0UsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7WUFDbEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE5QixDQUE4QixFQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQy9FLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMEJBQUk7YUFBUjtZQUNFLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1lBQ2xELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxHQUFHLElBQUssT0FBQSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBZixDQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBRyxHQUFILFVBQUksR0FBTSxFQUFFLEtBQVE7UUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sR0FBTSxFQUFFLEtBQVE7UUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksR0FBTSxFQUFFLEtBQVE7UUFDbEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEMsT0FBTyxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxHQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLEtBQVE7UUFDZixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxrQ0FBZSxHQUFmLFVBQWdCLEdBQU07UUFDcEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEMsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsa0NBQWUsR0FBZixVQUFnQixLQUFRO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLE1BQU0sQ0FBQyxVQUFDLEVBQWE7Z0JBQVosV0FBRyxFQUFFLGNBQU07WUFBTSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQWpCLENBQWlCLENBQUM7YUFDNUMsR0FBRyxDQUFDLFVBQUMsRUFBYTtnQkFBWixXQUFHLEVBQUUsY0FBTTtZQUFNLE9BQUEsR0FBRztRQUFILENBQUcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQyJ9

/***/ }),

/***/ "./node_modules/@stimulus/multimap/dist/src/set_operations.js":
/*!********************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/set_operations.js ***!
  \********************************************************************/
/*! exports provided: add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
function add(map, key, value) {
    fetch(map, key).add(value);
}
function del(map, key, value) {
    fetch(map, key).delete(value);
    prune(map, key);
}
function fetch(map, key) {
    var values = map.get(key);
    if (!values) {
        values = new Set();
        map.set(key, values);
    }
    return values;
}
function prune(map, key) {
    var values = map.get(key);
    if (values != null && values.size == 0) {
        map.delete(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0X29wZXJhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2V0X29wZXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxjQUFvQixHQUFtQixFQUFFLEdBQU0sRUFBRSxLQUFRO0lBQzdELEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFFRCxNQUFNLGNBQW9CLEdBQW1CLEVBQUUsR0FBTSxFQUFFLEtBQVE7SUFDN0QsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUNqQixDQUFDO0FBRUQsTUFBTSxnQkFBc0IsR0FBbUIsRUFBRSxHQUFNO0lBQ3JELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0tBQ3JCO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDO0FBRUQsTUFBTSxnQkFBc0IsR0FBbUIsRUFBRSxHQUFNO0lBQ3JELElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDM0IsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDaEI7QUFDSCxDQUFDIn0=

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/index.js ***!
  \*****************************************************************/
/*! exports provided: AttributeObserver, ElementObserver, TokenListObserver, ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"]; });

/* harmony import */ var _src_element_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/element_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return _src_element_observer__WEBPACK_IMPORTED_MODULE_1__["ElementObserver"]; });

/* harmony import */ var _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__["TokenListObserver"]; });

/* harmony import */ var _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/value_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__["ValueListObserver"]; });





//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLDBCQUEwQixDQUFBO0FBQ3hDLGNBQWMsd0JBQXdCLENBQUE7QUFDdEMsY0FBYywyQkFBMkIsQ0FBQTtBQUN6QyxjQUFjLDJCQUEyQixDQUFBIn0=

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js ***!
  \**********************************************************************************/
/*! exports provided: AttributeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");

var AttributeObserver = /** @class */ (function () {
    function AttributeObserver(element, attributeName, delegate) {
        this.attributeName = attributeName;
        this.delegate = delegate;
        this.elementObserver = new _element_observer__WEBPACK_IMPORTED_MODULE_0__["ElementObserver"](element, this);
    }
    Object.defineProperty(AttributeObserver.prototype, "element", {
        get: function () {
            return this.elementObserver.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttributeObserver.prototype, "selector", {
        get: function () {
            return "[" + this.attributeName + "]";
        },
        enumerable: true,
        configurable: true
    });
    AttributeObserver.prototype.start = function () {
        this.elementObserver.start();
    };
    AttributeObserver.prototype.stop = function () {
        this.elementObserver.stop();
    };
    AttributeObserver.prototype.refresh = function () {
        this.elementObserver.refresh();
    };
    Object.defineProperty(AttributeObserver.prototype, "started", {
        get: function () {
            return this.elementObserver.started;
        },
        enumerable: true,
        configurable: true
    });
    // Element observer delegate
    AttributeObserver.prototype.matchElement = function (element) {
        return element.hasAttribute(this.attributeName);
    };
    AttributeObserver.prototype.matchElementsInTree = function (tree) {
        var match = this.matchElement(tree) ? [tree] : [];
        var matches = Array.from(tree.querySelectorAll(this.selector));
        return match.concat(matches);
    };
    AttributeObserver.prototype.elementMatched = function (element) {
        if (this.delegate.elementMatchedAttribute) {
            this.delegate.elementMatchedAttribute(element, this.attributeName);
        }
    };
    AttributeObserver.prototype.elementUnmatched = function (element) {
        if (this.delegate.elementUnmatchedAttribute) {
            this.delegate.elementUnmatchedAttribute(element, this.attributeName);
        }
    };
    AttributeObserver.prototype.elementAttributeChanged = function (element, attributeName) {
        if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
            this.delegate.elementAttributeValueChanged(element, attributeName);
        }
    };
    return AttributeObserver;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlX29ic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F0dHJpYnV0ZV9vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUEyQixNQUFNLG9CQUFvQixDQUFBO0FBUTdFO0lBTUUsMkJBQVksT0FBZ0IsRUFBRSxhQUFxQixFQUFFLFFBQW1DO1FBQ3RGLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBRXhCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQTtRQUNyQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFRO2FBQVo7WUFDRSxPQUFPLE1BQUksSUFBSSxDQUFDLGFBQWEsTUFBRyxDQUFBO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDOUIsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzdCLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsc0JBQUksc0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUE7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCw0QkFBNEI7SUFFNUIsd0NBQVksR0FBWixVQUFhLE9BQWdCO1FBQzNCLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVELCtDQUFtQixHQUFuQixVQUFvQixJQUFhO1FBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUNuRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNoRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELDBDQUFjLEdBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQ25FO0lBQ0gsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUFpQixPQUFnQjtRQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQ3JFO0lBQ0gsQ0FBQztJQUVELG1EQUF1QixHQUF2QixVQUF3QixPQUFnQixFQUFFLGFBQXFCO1FBQzdELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLGFBQWEsRUFBRTtZQUNyRixJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtTQUNuRTtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUMifQ==

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js ***!
  \********************************************************************************/
/*! exports provided: ElementObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
var ElementObserver = /** @class */ (function () {
    function ElementObserver(element, delegate) {
        var _this = this;
        this.element = element;
        this.started = false;
        this.delegate = delegate;
        this.elements = new Set;
        this.mutationObserver = new MutationObserver(function (mutations) { return _this.processMutations(mutations); });
    }
    ElementObserver.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, { attributes: true, childList: true, subtree: true });
            this.refresh();
        }
    };
    ElementObserver.prototype.stop = function () {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    };
    ElementObserver.prototype.refresh = function () {
        if (this.started) {
            var matches = new Set(this.matchElementsInTree());
            for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {
                var element = _a[_i];
                if (!matches.has(element)) {
                    this.removeElement(element);
                }
            }
            for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {
                var element = _c[_b];
                this.addElement(element);
            }
        }
    };
    // Mutation record processing
    ElementObserver.prototype.processMutations = function (mutations) {
        if (this.started) {
            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                var mutation = mutations_1[_i];
                this.processMutation(mutation);
            }
        }
    };
    ElementObserver.prototype.processMutation = function (mutation) {
        if (mutation.type == "attributes") {
            this.processAttributeChange(mutation.target, mutation.attributeName);
        }
        else if (mutation.type == "childList") {
            this.processRemovedNodes(mutation.removedNodes);
            this.processAddedNodes(mutation.addedNodes);
        }
    };
    ElementObserver.prototype.processAttributeChange = function (node, attributeName) {
        var element = node;
        if (this.elements.has(element)) {
            if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
                this.delegate.elementAttributeChanged(element, attributeName);
            }
            else {
                this.removeElement(element);
            }
        }
        else if (this.matchElement(element)) {
            this.addElement(element);
        }
    };
    ElementObserver.prototype.processRemovedNodes = function (nodes) {
        for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
            var node = _a[_i];
            var element = this.elementFromNode(node);
            if (element) {
                this.processTree(element, this.removeElement);
            }
        }
    };
    ElementObserver.prototype.processAddedNodes = function (nodes) {
        for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
            var node = _a[_i];
            var element = this.elementFromNode(node);
            if (element && this.elementIsActive(element)) {
                this.processTree(element, this.addElement);
            }
        }
    };
    // Element matching
    ElementObserver.prototype.matchElement = function (element) {
        return this.delegate.matchElement(element);
    };
    ElementObserver.prototype.matchElementsInTree = function (tree) {
        if (tree === void 0) { tree = this.element; }
        return this.delegate.matchElementsInTree(tree);
    };
    ElementObserver.prototype.processTree = function (tree, processor) {
        for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {
            var element = _a[_i];
            processor.call(this, element);
        }
    };
    ElementObserver.prototype.elementFromNode = function (node) {
        if (node.nodeType == Node.ELEMENT_NODE) {
            return node;
        }
    };
    ElementObserver.prototype.elementIsActive = function (element) {
        if (element.isConnected != this.element.isConnected) {
            return false;
        }
        else {
            return this.element.contains(element);
        }
    };
    // Element tracking
    ElementObserver.prototype.addElement = function (element) {
        if (!this.elements.has(element)) {
            if (this.elementIsActive(element)) {
                this.elements.add(element);
                if (this.delegate.elementMatched) {
                    this.delegate.elementMatched(element);
                }
            }
        }
    };
    ElementObserver.prototype.removeElement = function (element) {
        if (this.elements.has(element)) {
            this.elements.delete(element);
            if (this.delegate.elementUnmatched) {
                this.delegate.elementUnmatched(element);
            }
        }
    };
    return ElementObserver;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50X29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0lBUUUseUJBQVksT0FBZ0IsRUFBRSxRQUFpQztRQUEvRCxpQkFPQztRQU5DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBRXhCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUE7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQTtJQUMvRixDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtZQUNqRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDZjtJQUNILENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7U0FDckI7SUFDSCxDQUFDO0lB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

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js ***!
  \***********************************************************************************/
/*! exports provided: TokenListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");


var TokenListObserver = /** @class */ (function () {
    function TokenListObserver(element, attributeName, delegate) {
        this.attributeObserver = new _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"](element, attributeName, this);
        this.delegate = delegate;
        this.tokensByElement = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"];
    }
    Object.defineProperty(TokenListObserver.prototype, "started", {
        get: function () {
            return this.attributeObserver.started;
        },
        enumerable: true,
        configurable: true
    });
    TokenListObserver.prototype.start = function () {
        this.attributeObserver.start();
    };
    TokenListObserver.prototype.stop = function () {
        this.attributeObserver.stop();
    };
    TokenListObserver.prototype.refresh = function () {
        this.attributeObserver.refresh();
    };
    Object.defineProperty(TokenListObserver.prototype, "element", {
        get: function () {
            return this.attributeObserver.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenListObserver.prototype, "attributeName", {
        get: function () {
            return this.attributeObserver.attributeName;
        },
        enumerable: true,
        configurable: true
    });
    // Attribute observer delegate
    TokenListObserver.prototype.elementMatchedAttribute = function (element) {
        this.tokensMatched(this.readTokensForElement(element));
    };
    TokenListObserver.prototype.elementAttributeValueChanged = function (element) {
        var _a = this.refreshTokensForElement(element), unmatchedTokens = _a[0], matchedTokens = _a[1];
        this.tokensUnmatched(unmatchedTokens);
        this.tokensMatched(matchedTokens);
    };
    TokenListObserver.prototype.elementUnmatchedAttribute = function (element) {
        this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    };
    TokenListObserver.prototype.tokensMatched = function (tokens) {
        var _this = this;
        tokens.forEach(function (token) { return _this.tokenMatched(token); });
    };
    TokenListObserver.prototype.tokensUnmatched = function (tokens) {
        var _this = this;
        tokens.forEach(function (token) { return _this.tokenUnmatched(token); });
    };
    TokenListObserver.prototype.tokenMatched = function (token) {
        this.delegate.tokenMatched(token);
        this.tokensByElement.add(token.element, token);
    };
    TokenListObserver.prototype.tokenUnmatched = function (token) {
        this.delegate.tokenUnmatched(token);
        this.tokensByElement.delete(token.element, token);
    };
    TokenListObserver.prototype.refreshTokensForElement = function (element) {
        var previousTokens = this.tokensByElement.getValuesForKey(element);
        var currentTokens = this.readTokensForElement(element);
        var firstDifferingIndex = zip(previousTokens, currentTokens)
            .findIndex(function (_a) {
            var previousToken = _a[0], currentToken = _a[1];
            return !tokensAreEqual(previousToken, currentToken);
        });
        if (firstDifferingIndex == -1) {
            return [[], []];
        }
        else {
            return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
        }
    };
    TokenListObserver.prototype.readTokensForElement = function (element) {
        var attributeName = this.attributeName;
        var tokenString = element.getAttribute(attributeName) || "";
        return parseTokenString(tokenString, element, attributeName);
    };
    return TokenListObserver;
}());

function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter(function (content) { return content.length; })
        .map(function (content, index) { return ({ element: element, attributeName: attributeName, content: content, index: index }); });
}
function zip(left, right) {
    var length = Math.max(left.length, right.length);
    return Array.from({ length: length }, function (_, index) { return [left[index], right[index]]; });
}
function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fbGlzdF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbl9saXN0X29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQTtBQUNuRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFjN0M7SUFLRSwyQkFBWSxPQUFnQixFQUFFLGFBQXFCLEVBQUUsUUFBbUM7UUFDdEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksUUFBUSxDQUFBO0lBQ3JDLENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFBO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsc0JBQUksc0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQTtRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFBO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsOEJBQThCO0lB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

/***/ }),

/***/ "./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js ***!
  \***********************************************************************************/
/*! exports provided: ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");

var ValueListObserver = /** @class */ (function () {
    function ValueListObserver(element, attributeName, delegate) {
        this.tokenListObserver = new _token_list_observer__WEBPACK_IMPORTED_MODULE_0__["TokenListObserver"](element, attributeName, this);
        this.delegate = delegate;
        this.parseResultsByToken = new WeakMap;
        this.valuesByTokenByElement = new WeakMap;
    }
    Object.defineProperty(ValueListObserver.prototype, "started", {
        get: function () {
            return this.tokenListObserver.started;
        },
        enumerable: true,
        configurable: true
    });
    ValueListObserver.prototype.start = function () {
        this.tokenListObserver.start();
    };
    ValueListObserver.prototype.stop = function () {
        this.tokenListObserver.stop();
    };
    ValueListObserver.prototype.refresh = function () {
        this.tokenListObserver.refresh();
    };
    Object.defineProperty(ValueListObserver.prototype, "element", {
        get: function () {
            return this.tokenListObserver.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueListObserver.prototype, "attributeName", {
        get: function () {
            return this.tokenListObserver.attributeName;
        },
        enumerable: true,
        configurable: true
    });
    ValueListObserver.prototype.tokenMatched = function (token) {
        var element = token.element;
        var value = this.fetchParseResultForToken(token).value;
        if (value) {
            this.fetchValuesByTokenForElement(element).set(token, value);
            this.delegate.elementMatchedValue(element, value);
        }
    };
    ValueListObserver.prototype.tokenUnmatched = function (token) {
        var element = token.element;
        var value = this.fetchParseResultForToken(token).value;
        if (value) {
            this.fetchValuesByTokenForElement(element).delete(token);
            this.delegate.elementUnmatchedValue(element, value);
        }
    };
    ValueListObserver.prototype.fetchParseResultForToken = function (token) {
        var parseResult = this.parseResultsByToken.get(token);
        if (!parseResult) {
            parseResult = this.parseToken(token);
            this.parseResultsByToken.set(token, parseResult);
        }
        return parseResult;
    };
    ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {
        var valuesByToken = this.valuesByTokenByElement.get(element);
        if (!valuesByToken) {
            valuesByToken = new Map;
            this.valuesByTokenByElement.set(element, valuesByToken);
        }
        return valuesByToken;
    };
    ValueListObserver.prototype.parseToken = function (token) {
        try {
            var value = this.delegate.parseValueForToken(token);
            return { value: value };
        }
        catch (error) {
            return { error: error };
        }
    };
    return ValueListObserver;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfbGlzdF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9saXN0X29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUyxpQkFBaUIsRUFBNkIsTUFBTSx1QkFBdUIsQ0FBQTtBQWEzRjtJQU1FLDJCQUFZLE9BQWdCLEVBQUUsYUFBcUIsRUFBRSxRQUFzQztRQUN6RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLE9BQU8sQ0FBQTtRQUN0QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxPQUFPLENBQUE7SUFDM0MsQ0FBQztJQUVELHNCQUFJLHNDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUE7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxpQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2xDLENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFBO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQWE7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUE7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBWTtRQUNmLElBQUEsdUJBQU8sQ0FBVTtRQUNqQixJQUFBLGtEQUFLLENBQXlDO1FBQ3RELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDbEQ7SUFDSCxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLEtBQVk7UUFDakIsSUFBQSx1QkFBTyxDQUFVO1FBQ2pCLElBQUEsa0RBQUssQ0FBeUM7UUFDdEQsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3BEO0lBQ0gsQ0FBQztJQUVPLG9EQUF3QixHQUFoQyxVQUFpQyxLQUFZO1FBQzNDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNwQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQTtTQUNqRDtRQUNELE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7SUFFTyx3REFBNEIsR0FBcEMsVUFBcUMsT0FBZ0I7UUFDbkQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQTtZQUN2QixJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtTQUN4RDtRQUNELE9BQU8sYUFBYSxDQUFBO0lBQ3RCLENBQUM7SUFFTyxzQ0FBVSxHQUFsQixVQUFtQixLQUFZO1FBQzdCLElBQUk7WUFDRixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3JELE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFBO1NBQ2pCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQTtTQUNqQjtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFqRkQsSUFpRkMifQ==

/***/ }),

/***/ "./node_modules/@stimulus/webpack-helpers/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/webpack-helpers/dist/index.js ***!
  \**************************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return definitionsFromContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return identifierForContextKey; });
function definitionsFromContext(context) {
    return context.keys()
        .map(function (key) { return definitionForModuleWithContextAndKey(context, key); })
        .filter(function (value) { return value; });
}
function definitionForModuleWithContextAndKey(context, key) {
    var identifier = identifierForContextKey(key);
    if (identifier) {
        return definitionForModuleAndIdentifier(context(key), identifier);
    }
}
function definitionForModuleAndIdentifier(module, identifier) {
    var controllerConstructor = module.default;
    if (typeof controllerConstructor == "function") {
        return { identifier: identifier, controllerConstructor: controllerConstructor };
    }
}
function identifierForContextKey(key) {
    var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];
    if (logicalName) {
        return logicalName.replace(/_/g, "-").replace(/\//g, "--");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLGlDQUFpQyxPQUEwQztJQUMvRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUU7U0FDbEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsb0NBQW9DLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDO1NBQzlELE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQWlCLENBQUE7QUFDM0MsQ0FBQztBQUVELDhDQUE4QyxPQUEwQyxFQUFFLEdBQVc7SUFDbkcsSUFBTSxVQUFVLEdBQUcsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDL0MsSUFBSSxVQUFVLEVBQUU7UUFDZCxPQUFPLGdDQUFnQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQTtLQUNsRTtBQUNILENBQUM7QUFFRCwwQ0FBMEMsTUFBd0IsRUFBRSxVQUFrQjtJQUNwRixJQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDNUMsSUFBSSxPQUFPLHFCQUFxQixJQUFJLFVBQVUsRUFBRTtRQUM5QyxPQUFPLEVBQUUsVUFBVSxZQUFBLEVBQUUscUJBQXFCLHVCQUFBLEVBQUUsQ0FBQTtLQUM3QztBQUNILENBQUM7QUFFRCxNQUFNLGtDQUFrQyxHQUFXO0lBQ2pELElBQU0sV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xGLElBQUksV0FBVyxFQUFFO1FBQ2YsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO0tBQzNEO0FBQ0gsQ0FBQyJ9

/***/ }),

/***/ "./node_modules/stimulus/index.js":
/*!****************************************!*\
  !*** ./node_modules/stimulus/index.js ***!
  \****************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/core */ "./node_modules/@stimulus/core/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["defaultSchema"]; });




/***/ }),

/***/ "./node_modules/stimulus/webpack-helpers.js":
/*!**************************************************!*\
  !*** ./node_modules/stimulus/webpack-helpers.js ***!
  \**************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/webpack-helpers */ "./node_modules/@stimulus/webpack-helpers/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definitionsFromContext", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["definitionsFromContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identifierForContextKey", function() { return _stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_0__["identifierForContextKey"]; });




/***/ }),

/***/ "./packs/src/controllers sync recursive \\.js$":
/*!******************************************!*\
  !*** ./packs/src/controllers sync \.js$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calibrations_controller.js": "./packs/src/controllers/calibrations_controller.js",
	"./fileview_controller.js": "./packs/src/controllers/fileview_controller.js",
	"./packages_controller.js": "./packs/src/controllers/packages_controller.js",
	"./processes_controller.js": "./packs/src/controllers/processes_controller.js",
	"./system_controller.js": "./packs/src/controllers/system_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./packs/src/controllers sync recursive \\.js$";

/***/ }),

/***/ "./packs/src/controllers/calibrations_controller.js":
/*!**********************************************************!*\
  !*** ./packs/src/controllers/calibrations_controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");


/* harmony default export */ __webpack_exports__["default"] = (class extends stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"] {

  static get targets() {
    return [];
  }

  connect() {
    console.log("[DIST] Calibrations controller connected");
  }

  loadAllCamera() {
    console.log("Load all camera");
  }

  loadAllProjector() {
    console.log("Load all projector");
  }

  loadCalibration(event) {
    let file = event.target.dataset.file;
    let output = event.target.dataset.output;
    let type =  event.target.dataset.type;

    axios.get(`http://localhost:4567/service/load_configuration?file=${file}&output=${output}&type=${type}`)
    .then( (response) => {
      let noticeSuc = new PNotify({
        title: 'Calibration loaded',
        text: `<strong>Succeed with message</strong>: <br/> ${response.data}`,
        type: 'success',
        styling: 'fontawesome',
        buttons: {
          sticker: false
        }
      });
      noticeSuc.get().click(function() {
        noticeSuc.remove();
      });
    })
    .catch( (error) => {
      let noticeErr = new PNotify({
        title: 'Calibration not loaded',
        text: `Sorry ! <br/> We are unable to load the calibration file <strong>${file}</strong>. <br/> ${error}`,
        type: 'error',
        styling: 'fontawesome',
        buttons: {
          sticker: false
        }
      });
      noticeErr.get().click(function() {
        noticeErr.remove();
      });
    });
  }
});


/***/ }),

/***/ "./packs/src/controllers/fileview_controller.js":
/*!******************************************************!*\
  !*** ./packs/src/controllers/fileview_controller.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");


/* harmony default export */ __webpack_exports__["default"] = (class extends stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"] {

  static get targets() {
    return ['list', 'calibinput', 'calibkey', 'calibinputicon'];
  }

  connect() {
    console.log("[DIST] File view controller connected");
    this.calibinputTarget.value = "";
    this.reload();
    setInterval(() => {
      this.reload();
    }, 60000)
  }

  async reload ()  {
    let calibrationFilesList = await this.getCalibrationsFilesList();
    let markerboardFilesList = await this.getMarkerboardsFilesList();

    if (calibrationFilesList.data) {
      this.listTarget.innerHTML = calibrationFilesList.data;
    }
    if (markerboardFilesList.data) {
      this.listTarget.innerHTML += markerboardFilesList.data;
    }
  }

  fileClicked(event) {
    let file = event.currentTarget.dataset.file;
    this.type = event.currentTarget.dataset.type;
    this.calibinputTarget.value = file;
    this.calibinputTarget.classList.add('text-success');
    this.calibinputiconTarget.classList.add('icon-checkmark-circle');

  }

  loadFile(event) {
    let cFile = this.calibinputTarget.value;
    let cKey = this.calibkeyTarget.value;
    if (cFile == "" || cKey == "" || this.type == "undefined") {
      return;
    }

    // TODO: Do this server side
    let optType = "";
    let typeFolder = "calibration"
    switch(this.type) {
      case "calibration":
        optType = "-pd";
        break;
      case "projector":
        optType = "-pd -pr";
        break;
      case "pose":
        optType = "-m"; //TODO: -i only if inverted checkbox checked
        if (false)
          {}
        break;
      case "markerboard":
        typeFolder = "markerboards"
        optType = "-mb";
        break;
      default:
        optType = "-pd"
        break;
    }

    axios.get(`http://localhost:4567/service/load_configuration?file=data/${typeFolder}/${cFile}&output=${cKey}&type=${optType}`)
    .then( (response) => {
      successNotif('Calibration loaded', `<strong>Succeed with message</strong>: <br/> ${response.data}`);
    })
    .catch( (error) => {
      errorNotif('Calibration not loaded', `Sorry ! <br/> We are unable to load the calibration file <strong>${cFile}</strong>. <br/> ${error}`);
    });
  }

  async getMarkerboardsFilesList () {
    try {
      return await axios.get('http://localhost:4567/system/files/markerboards/list');
    } catch (error) {
      console.log(error);
    }
  }

  async getCalibrationsFilesList () {
    try {
      return await axios.get('http://localhost:4567/system/files/calibrations/list');
    } catch (error) {
      console.log(error);
    }
  }
});


/***/ }),

/***/ "./packs/src/controllers/packages_controller.js":
/*!******************************************************!*\
  !*** ./packs/src/controllers/packages_controller.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");


/* harmony default export */ __webpack_exports__["default"] = (class extends stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"] {
  static get targets() {
    return [ "list" ]
  }

  connect() {
    console.log("[DIST] Packages controller connected");
    this.reload();
  }

  reload() {
    this.block() // Plays an animation
    axios.get('http://localhost:4567/system/packages')
    .then( (response) => {
      this.listTarget.innerHTML = response.data;
      $("#packages-table").bootstrapTable();
    })
    .catch( (error) => {
      console.log(error);
    })
    .then( () => {
      this.unblock();
    });
  }

  block() {
    $(this.element).block({
      message: '<i class="icon-spinner2 spinner"></i>',
      overlayCSS: {
        backgroundColor: '#fff',
        opacity: 0.8,
        cursor: 'wait',
        'box-shadow': '0 0 0 1px #ddd'
      },
      css: {
        border: 0,
        padding: 0,
        backgroundColor: 'none'
      }
    });
  }

  unblock(){
    $(this.element).unblock();
  }
});


/***/ }),

/***/ "./packs/src/controllers/processes_controller.js":
/*!*******************************************************!*\
  !*** ./packs/src/controllers/processes_controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");


/* harmony default export */ __webpack_exports__["default"] = (class extends stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"] {

  static get targets() {
    return [ "list", "status" ]
  }

  connect(){
    console.log("[DIST] Process stimulus connected");
    this.reload();
  }

  reload() {
    this.block();
    axios.get('http://localhost:4567/service/info/all')
    .then( (response) => {
      this.listTarget.innerHTML = response.data;
      $('#process-table').bootstrapTable();
    })
    .catch( (error) => {
      console.log(error);
    })
    .then(() => {
      this.unblock();
    });
  }

  block() {
    $(this.element).block({
      message: '<i class="icon-spinner2 spinner"></i>',
      overlayCSS: {
        backgroundColor: '#fff',
        opacity: 0.8,
        cursor: 'wait',
        'box-shadow': '0 0 0 1px #ddd'
      },
      css: {
        border: 0,
        padding: 0,
        backgroundColor: 'none'
      }
    });
  }

  unblock() {
    $(this.element).unblock();
  }

  service(event) {
    let name = event.target.dataset.name;
    let action = event.target.dataset.nextaction;
    //this.block();

    axios.get('http://localhost:4567/service/' + name + '/' + action)
    .then( (response) => {
      successNotif('Service', '<strong>' + name.charAt(0).toUpperCase() + name.slice(1) + '</strong> successfully <strong>' + action + 'ed. </strong>');
    })
    .catch ( (error) => {
      errorNotif('Service', 'Oops ! </br> <strong>' + name.charAt(0).toUpperCase() + name.slice(1) + '</strong> failed to <strong>' + action + '</strong>.');
    })
    .then ( () => {
      this.reload();
    });
  }
});


/***/ }),

/***/ "./packs/src/controllers/system_controller.js":
/*!****************************************************!*\
  !*** ./packs/src/controllers/system_controller.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");


/* harmony default export */ __webpack_exports__["default"] = (class extends stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"] {

  static get targets() {
    return [ "cpu", "cpuprogress", "ram", "ramprogress", "disk", "diskprogress" ]
  }

  connect(){
    console.log("[DIST] System stimulus connected");
    this.reload();
    setInterval( () => {
      this.reload();
    }, 1000);
  }

  reload() {
    axios.get('http://localhost:4567/system/status')
    .then( (response) => {
      let values = response.data.split("\n");
      let cpu = values[0];
      let ram = values[1].split(';');
      let disk = values[2].split(';');
      this.cpuTarget.innerHTML = `${cpu}%`;
      this.ramTarget.innerHTML = `${parseInt(ram[0]/1000)}/${parseInt(ram[1]/1000)} MB`
      this.diskTarget.innerHTML = `${parseInt(disk[0])}/${parseInt(disk[1])} GB`;
      this.cpuprogressTarget.style.width = `${parseInt(cpu)}%`;
      this.ramprogressTarget.style.width = `${parseInt(ram[2])}%`;
      this.diskprogressTarget.style.width = `${parseInt(disk[2])}%`;
      //$('#process-table').bootstrapTable();
    })
    .catch( (error) => {
      console.log(error);
    });
  }
});


/***/ }),

/***/ "./packs/src/index.js":
/*!****************************!*\
  !*** ./packs/src/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/webpack-helpers.js");



const application = stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start()
const context = __webpack_require__("./packs/src/controllers sync recursive \\.js$")
application.load(Object(stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__["definitionsFromContext"])(context))


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3Qvc3JjL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9zcmMvYWN0aW9uX2Rlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3Qvc3JjL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L3NyYy9iaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L3NyYy9iaW5kaW5nX29ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L3NyYy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L3NyYy9kYXRhX21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9zcmMvZGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9zcmMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9zcmMvZXZlbnRfbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3Qvc3JjL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9zcmMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L3NyYy9zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9jb3JlL2Rpc3Qvc3JjL3Njb3BlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L3NyYy9zY29wZV9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9zcmMvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvY29yZS9kaXN0L3NyYy90YXJnZXRfcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL2NvcmUvZGlzdC9zcmMvdGFyZ2V0X3NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL211bHRpbWFwL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9tdWx0aW1hcC9kaXN0L3NyYy9pbmRleGVkX211bHRpbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvbXVsdGltYXAvZGlzdC9zcmMvbXVsdGltYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9tdWx0aW1hcC9kaXN0L3NyYy9zZXRfb3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL211dGF0aW9uLW9ic2VydmVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvbXV0YXRpb24tb2JzZXJ2ZXJzL2Rpc3Qvc3JjL2F0dHJpYnV0ZV9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL211dGF0aW9uLW9ic2VydmVycy9kaXN0L3NyYy9lbGVtZW50X29ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3RpbXVsdXMvbXV0YXRpb24tb2JzZXJ2ZXJzL2Rpc3Qvc3JjL3Rva2VuX2xpc3Rfb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdGltdWx1cy9tdXRhdGlvbi1vYnNlcnZlcnMvZGlzdC9zcmMvdmFsdWVfbGlzdF9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN0aW11bHVzL3dlYnBhY2staGVscGVycy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdGltdWx1cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RpbXVsdXMvd2VicGFjay1oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3BhY2tzL3NyYy9jb250cm9sbGVycyBzeW5jIFxcLmpzJCIsIndlYnBhY2s6Ly8vLi9wYWNrcy9zcmMvY29udHJvbGxlcnMvY2FsaWJyYXRpb25zX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja3Mvc3JjL2NvbnRyb2xsZXJzL2ZpbGV2aWV3X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja3Mvc3JjL2NvbnRyb2xsZXJzL3BhY2thZ2VzX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja3Mvc3JjL2NvbnRyb2xsZXJzL3Byb2Nlc3Nlc19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3BhY2tzL3NyYy9jb250cm9sbGVycy9zeXN0ZW1fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrcy9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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SztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3RkQ7QUFBQTtBQUFxQzs7QUFFdEIsNkVBQWMsbURBQVU7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvQ0Q7QUFBQTtBQUFxQzs7QUFFdEIsNkVBQWMsbURBQVU7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqRUQ7QUFBQTtBQUFxQzs7QUFFdEIsNkVBQWMsbURBQVU7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLG9DQUFvQyxJQUFJO0FBQ3hDLG9DQUFvQyxzQkFBc0IsR0FBRyxzQkFBc0I7QUFDbkYscUNBQXFDLGtCQUFrQixHQUFHLGtCQUFrQjtBQUM1RSw4Q0FBOEMsY0FBYztBQUM1RCw4Q0FBOEMsaUJBQWlCO0FBQy9ELCtDQUErQyxrQkFBa0I7QUFDakU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFBQTtBQUFBO0FBQXNDO0FBQzJCOztBQUVqRSxvQkFBb0Isb0RBQVc7QUFDL0IsZ0JBQWdCLG9FQUErQztBQUMvRCxpQkFBaUIsdUZBQXNCIiwiZmlsZSI6Im5hdGFyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFja3Mvc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwiLi9zcmMvYXBwbGljYXRpb25cIjtcbmV4cG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi9zcmMvY29udGV4dFwiO1xuZXhwb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL3NyYy9jb250cm9sbGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0U2NoZW1hIH0gZnJvbSBcIi4vc3JjL3NjaGVtYVwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGREwwTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSU3hOUVVGTkxHVkJRV1VzUTBGQlFUdEJRVU4yUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hGUVVGNVFpeE5RVUZOTEd0Q1FVRnJRaXhEUVVGQk8wRkJSWEJGTEU5QlFVOHNSVUZCVlN4aFFVRmhMRVZCUVVVc1RVRkJUU3hqUVVGakxFTkJRVUVpZlE9PSIsImltcG9ydCB7IHBhcnNlRGVzY3JpcHRvclN0cmluZywgc3RyaW5naWZ5RXZlbnRUYXJnZXQgfSBmcm9tIFwiLi9hY3Rpb25fZGVzY3JpcHRvclwiO1xudmFyIEFjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBY3Rpb24oZWxlbWVudCwgaW5kZXgsIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0ID0gZGVzY3JpcHRvci5ldmVudFRhcmdldCB8fCBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGRlc2NyaXB0b3IuZXZlbnROYW1lIHx8IGdldERlZmF1bHRFdmVudE5hbWVGb3JFbGVtZW50KGVsZW1lbnQpIHx8IGVycm9yKFwibWlzc2luZyBldmVudCBuYW1lXCIpO1xuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSBkZXNjcmlwdG9yLmlkZW50aWZpZXIgfHwgZXJyb3IoXCJtaXNzaW5nIGlkZW50aWZpZXJcIik7XG4gICAgICAgIHRoaXMubWV0aG9kTmFtZSA9IGRlc2NyaXB0b3IubWV0aG9kTmFtZSB8fCBlcnJvcihcIm1pc3NpbmcgbWV0aG9kIG5hbWVcIik7XG4gICAgfVxuICAgIEFjdGlvbi5mb3JUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXModG9rZW4uZWxlbWVudCwgdG9rZW4uaW5kZXgsIHBhcnNlRGVzY3JpcHRvclN0cmluZyh0b2tlbi5jb250ZW50KSk7XG4gICAgfTtcbiAgICBBY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXZlbnROYW1lU3VmZml4ID0gdGhpcy5ldmVudFRhcmdldE5hbWUgPyBcIkBcIiArIHRoaXMuZXZlbnRUYXJnZXROYW1lIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyB0aGlzLmV2ZW50TmFtZSArIGV2ZW50TmFtZVN1ZmZpeCArIFwiLT5cIiArIHRoaXMuaWRlbnRpZmllciArIFwiI1wiICsgdGhpcy5tZXRob2ROYW1lO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFjdGlvbi5wcm90b3R5cGUsIFwiZXZlbnRUYXJnZXROYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5naWZ5RXZlbnRUYXJnZXQodGhpcy5ldmVudFRhcmdldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBBY3Rpb247XG59KCkpO1xuZXhwb3J0IHsgQWN0aW9uIH07XG52YXIgZGVmYXVsdEV2ZW50TmFtZXMgPSB7XG4gICAgXCJhXCI6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBcImNsaWNrXCI7IH0sXG4gICAgXCJidXR0b25cIjogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIFwiY2xpY2tcIjsgfSxcbiAgICBcImZvcm1cIjogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIFwic3VibWl0XCI7IH0sXG4gICAgXCJpbnB1dFwiOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09IFwic3VibWl0XCIgPyBcImNsaWNrXCIgOiBcImNoYW5nZVwiOyB9LFxuICAgIFwic2VsZWN0XCI6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBcImNoYW5nZVwiOyB9LFxuICAgIFwidGV4dGFyZWFcIjogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIFwiY2hhbmdlXCI7IH1cbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEV2ZW50TmFtZUZvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIHZhciB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHRhZ05hbWUgaW4gZGVmYXVsdEV2ZW50TmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRFdmVudE5hbWVzW3RhZ05hbWVdKGVsZW1lbnQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV04wYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJGamRHbHZiaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEVWQlFXOUNMSEZDUVVGeFFpeEZRVUZGTEc5Q1FVRnZRaXhGUVVGRkxFMUJRVTBzY1VKQlFYRkNMRU5CUVVFN1FVRkhia2M3U1VGWlJTeG5Ra0ZCV1N4UFFVRm5RaXhGUVVGRkxFdEJRV0VzUlVGQlJTeFZRVUZ4UXp0UlFVTm9SaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZQTEU5QlFVOHNRMEZCUVR0UlFVTXhRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZUTEV0QlFVc3NRMEZCUVR0UlFVTjRRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZWQlFWVXNRMEZCUXl4WFFVRlhMRWxCUVVrc1QwRkJUeXhEUVVGQk8xRkJRM0JFTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVzc1ZVRkJWU3hEUVVGRExGTkJRVk1zU1VGQlNTdzJRa0ZCTmtJc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlFUdFJRVU5vU0N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSkxGVkJRVlVzUTBGQlF5eFZRVUZWTEVsQlFVa3NTMEZCU3l4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVOQlFVRTdVVUZEZGtVc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlNTeFZRVUZWTEVOQlFVTXNWVUZCVlN4SlFVRkpMRXRCUVVzc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RFFVRkJPMGxCUXpGRkxFTkJRVU03U1VGWVRTeGxRVUZSTEVkQlFXWXNWVUZCWjBJc1MwRkJXVHRSUVVNeFFpeFBRVUZQTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4eFFrRkJjVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRVHRKUVVOdVJpeERRVUZETzBsQlYwUXNlVUpCUVZFc1IwRkJVanRSUVVORkxFbEJRVTBzWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVWtzU1VGQlNTeERRVUZETEdWQlFXbENMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlFUdFJRVU01UlN4UFFVRlBMRXRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eGxRVUZsTEZWQlFVc3NTVUZCU1N4RFFVRkRMRlZCUVZVc1UwRkJTU3hKUVVGSkxFTkJRVU1zVlVGQldTeERRVUZCTzBsQlEzSkdMRU5CUVVNN1NVRkZSQ3h6UWtGQldTeHRRMEZCWlR0aFFVRXpRanRaUVVORkxFOUJRVThzYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZCTzFGQlF5OURMRU5CUVVNN096dFBRVUZCTzBsQlEwZ3NZVUZCUXp0QlFVRkVMRU5CUVVNc1FVRTNRa1FzU1VFMlFrTTdPMEZCUlVRc1NVRkJUU3hwUWtGQmFVSXNSMEZCZDBRN1NVRkROMFVzUjBGQlJ5eEZRVUZUTEZWQlFVRXNRMEZCUXl4SlFVRkpMRTlCUVVFc1QwRkJUeXhGUVVGUUxFTkJRVTg3U1VGRGVFSXNVVUZCVVN4RlFVRkpMRlZCUVVFc1EwRkJReXhKUVVGSkxFOUJRVUVzVDBGQlR5eEZRVUZRTEVOQlFVODdTVUZEZUVJc1RVRkJUU3hGUVVGTkxGVkJRVUVzUTBGQlF5eEpRVUZKTEU5QlFVRXNVVUZCVVN4RlFVRlNMRU5CUVZFN1NVRkRla0lzVDBGQlR5eEZRVUZMTEZWQlFVRXNRMEZCUXl4SlFVRkpMRTlCUVVFc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRjJSQ3hEUVVGMVJEdEpRVU40UlN4UlFVRlJMRVZCUVVrc1ZVRkJRU3hEUVVGRExFbEJRVWtzVDBGQlFTeFJRVUZSTEVWQlFWSXNRMEZCVVR0SlFVTjZRaXhWUVVGVkxFVkJRVVVzVlVGQlFTeERRVUZETEVsQlFVa3NUMEZCUVN4UlFVRlJMRVZCUVZJc1EwRkJVVHREUVVNeFFpeERRVUZCTzBGQlJVUXNUVUZCVFN4M1EwRkJkME1zVDBGQlowSTdTVUZETlVRc1NVRkJUU3hQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRVHRKUVVNM1F5eEpRVUZKTEU5QlFVOHNTVUZCU1N4cFFrRkJhVUlzUlVGQlJUdFJRVU5vUXl4UFFVRlBMR2xDUVVGcFFpeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGQk8wdEJRek5ETzBGQlEwZ3NRMEZCUXp0QlFVVkVMR1ZCUVdVc1QwRkJaVHRKUVVNMVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGQk8wRkJRekZDTEVOQlFVTWlmUT09IiwiLy8gY2FwdHVyZSBub3MuOiAgICAgICAgICAgIDEyICAgMjMgNCAgICAgICAgICAgICAgIDQzICAgMSA1ICAgNTYgNyAgNzZcbnZhciBkZXNjcmlwdG9yUGF0dGVybiA9IC9eKCguKz8pKEAod2luZG93fGRvY3VtZW50KSk/LT4pPyguKz8pKCMoLispKT8kLztcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURlc2NyaXB0b3JTdHJpbmcoZGVzY3JpcHRvclN0cmluZykge1xuICAgIHZhciBzb3VyY2UgPSBkZXNjcmlwdG9yU3RyaW5nLnRyaW0oKTtcbiAgICB2YXIgbWF0Y2hlcyA9IHNvdXJjZS5tYXRjaChkZXNjcmlwdG9yUGF0dGVybikgfHwgW107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXZlbnRUYXJnZXQ6IHBhcnNlRXZlbnRUYXJnZXQobWF0Y2hlc1s0XSksXG4gICAgICAgIGV2ZW50TmFtZTogbWF0Y2hlc1syXSxcbiAgICAgICAgaWRlbnRpZmllcjogbWF0Y2hlc1s1XSxcbiAgICAgICAgbWV0aG9kTmFtZTogbWF0Y2hlc1s3XVxuICAgIH07XG59XG5mdW5jdGlvbiBwYXJzZUV2ZW50VGFyZ2V0KGV2ZW50VGFyZ2V0TmFtZSkge1xuICAgIGlmIChldmVudFRhcmdldE5hbWUgPT0gXCJ3aW5kb3dcIikge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudFRhcmdldE5hbWUgPT0gXCJkb2N1bWVudFwiKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5RXZlbnRUYXJnZXQoZXZlbnRUYXJnZXQpIHtcbiAgICBpZiAoZXZlbnRUYXJnZXQgPT0gd2luZG93KSB7XG4gICAgICAgIHJldHVybiBcIndpbmRvd1wiO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudFRhcmdldCA9PSBkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gXCJkb2N1bWVudFwiO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlXTjBhVzl1WDJSbGMyTnlhWEIwYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WVdOMGFXOXVYMlJsYzJOeWFYQjBiM0l1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlQwRXNkVVZCUVhWRk8wRkJRM1pGTEVsQlFVMHNhVUpCUVdsQ0xFZEJRVWNzWjBSQlFXZEVMRU5CUVVFN1FVRkZNVVVzVFVGQlRTeG5RMEZCWjBNc1owSkJRWGRDTzBsQlF6VkVMRWxCUVUwc1RVRkJUU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGQk8wbEJRM1JETEVsQlFVMHNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVUU3U1VGRGNrUXNUMEZCVHp0UlFVTk1MRmRCUVZjc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVrTXNVMEZCVXl4RlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRrSXNWVUZCVlN4RlFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGRrSXNWVUZCVlN4RlFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGVFSXNRMEZCUVR0QlFVTklMRU5CUVVNN1FVRkZSQ3d3UWtGQk1FSXNaVUZCZFVJN1NVRkRMME1zU1VGQlNTeGxRVUZsTEVsQlFVa3NVVUZCVVN4RlFVRkZPMUZCUXk5Q0xFOUJRVThzVFVGQlRTeERRVUZCTzB0QlEyUTdVMEZCVFN4SlFVRkpMR1ZCUVdVc1NVRkJTU3hWUVVGVkxFVkJRVVU3VVVGRGVFTXNUMEZCVHl4UlFVRlJMRU5CUVVFN1MwRkRhRUk3UVVGRFNDeERRVUZETzBGQlJVUXNUVUZCVFN3clFrRkJLMElzVjBGQmQwSTdTVUZETTBRc1NVRkJTU3hYUVVGWExFbEJRVWtzVFVGQlRTeEZRVUZGTzFGQlEzcENMRTlCUVU4c1VVRkJVU3hEUVVGQk8wdEJRMmhDTzFOQlFVMHNTVUZCU1N4WFFVRlhMRWxCUVVrc1VVRkJVU3hGUVVGRk8xRkJRMnhETEU5QlFVOHNWVUZCVlN4RFFVRkJPMHRCUTJ4Q08wRkJRMGdzUTBGQlF5SjkiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tIFwiLi9kaXNwYXRjaGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXJcIjtcbmltcG9ydCB7IGRlZmF1bHRTY2hlbWEgfSBmcm9tIFwiLi9zY2hlbWFcIjtcbnZhciBBcHBsaWNhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcHBsaWNhdGlvbihlbGVtZW50LCBzY2hlbWEpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHZvaWQgMCkgeyBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyB9XG4gICAgICAgIGlmIChzY2hlbWEgPT09IHZvaWQgMCkgeyBzY2hlbWEgPSBkZWZhdWx0U2NoZW1hOyB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcih0aGlzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKHRoaXMpO1xuICAgIH1cbiAgICBBcHBsaWNhdGlvbi5zdGFydCA9IGZ1bmN0aW9uIChlbGVtZW50LCBzY2hlbWEpIHtcbiAgICAgICAgdmFyIGFwcGxpY2F0aW9uID0gbmV3IEFwcGxpY2F0aW9uKGVsZW1lbnQsIHNjaGVtYSk7XG4gICAgICAgIGFwcGxpY2F0aW9uLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiBhcHBsaWNhdGlvbjtcbiAgICB9O1xuICAgIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBkb21SZWFkeSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5zdG9wKCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5zdG9wKCk7XG4gICAgfTtcbiAgICBBcHBsaWNhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaWRlbnRpZmllciwgY29udHJvbGxlckNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHRoaXMubG9hZCh7IGlkZW50aWZpZXI6IGlkZW50aWZpZXIsIGNvbnRyb2xsZXJDb25zdHJ1Y3RvcjogY29udHJvbGxlckNvbnN0cnVjdG9yIH0pO1xuICAgIH07XG4gICAgQXBwbGljYXRpb24ucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoaGVhZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgcmVzdFtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmaW5pdGlvbnMgPSBBcnJheS5pc0FycmF5KGhlYWQpID8gaGVhZCA6IFtoZWFkXS5jb25jYXQocmVzdCk7XG4gICAgICAgIGRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlZmluaXRpb24pIHsgcmV0dXJuIF90aGlzLnJvdXRlci5sb2FkRGVmaW5pdGlvbihkZWZpbml0aW9uKTsgfSk7XG4gICAgfTtcbiAgICBBcHBsaWNhdGlvbi5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24gKGhlYWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJlc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlkZW50aWZpZXJzID0gQXJyYXkuaXNBcnJheShoZWFkKSA/IGhlYWQgOiBbaGVhZF0uY29uY2F0KHJlc3QpO1xuICAgICAgICBpZGVudGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChpZGVudGlmaWVyKSB7IHJldHVybiBfdGhpcy5yb3V0ZXIudW5sb2FkSWRlbnRpZmllcihpZGVudGlmaWVyKTsgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXBwbGljYXRpb24ucHJvdG90eXBlLCBcImNvbnRyb2xsZXJzXCIsIHtcbiAgICAgICAgLy8gQ29udHJvbGxlcnNcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuY29udGV4dHMubWFwKGZ1bmN0aW9uIChjb250ZXh0KSB7IHJldHVybiBjb250ZXh0LmNvbnRyb2xsZXI7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuZ2V0Q29udHJvbGxlckZvckVsZW1lbnRBbmRJZGVudGlmaWVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLnJvdXRlci5nZXRDb250ZXh0Rm9yRWxlbWVudEFuZElkZW50aWZpZXIoZWxlbWVudCwgaWRlbnRpZmllcik7XG4gICAgICAgIHJldHVybiBjb250ZXh0ID8gY29udGV4dC5jb250cm9sbGVyIDogbnVsbDtcbiAgICB9O1xuICAgIC8vIEVycm9yIGhhbmRsaW5nXG4gICAgQXBwbGljYXRpb24ucHJvdG90eXBlLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIiVzXFxuXFxuJW9cXG5cXG4lb1wiLCBtZXNzYWdlLCBlcnJvciwgZGV0YWlsKTtcbiAgICB9O1xuICAgIHJldHVybiBBcHBsaWNhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBBcHBsaWNhdGlvbiB9O1xuZnVuY3Rpb24gZG9tUmVhZHkoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhCd2JHbGpZWFJwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WVhCd2JHbGpZWFJwYjI0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkZRU3hQUVVGUExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNZMEZCWXl4RFFVRkJPMEZCUlhwRExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4VlFVRlZMRU5CUVVFN1FVRkRha01zVDBGQlR5eEZRVUZWTEdGQlFXRXNSVUZCUlN4TlFVRk5MRlZCUVZVc1EwRkJRVHRCUVVWb1JEdEpRVmxGTEhGQ1FVRlpMRTlCUVRKRExFVkJRVVVzVFVGQk9FSTdVVUZCTTBVc2QwSkJRVUVzUlVGQlFTeFZRVUZ0UWl4UlFVRlJMRU5CUVVNc1pVRkJaVHRSUVVGRkxIVkNRVUZCTEVWQlFVRXNjMEpCUVRoQ08xRkJRM0pHTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGQk8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGQk8xRkJRM0JDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVRTdVVUZEZEVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRVHRKUVVOb1F5eERRVUZETzBsQldFMHNhVUpCUVVzc1IwRkJXaXhWUVVGaExFOUJRV2xDTEVWQlFVVXNUVUZCWlR0UlFVTTNReXhKUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEZkQlFWY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVUU3VVVGRGNFUXNWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGQk8xRkJRMjVDTEU5QlFVOHNWMEZCVnl4RFFVRkJPMGxCUTNCQ0xFTkJRVU03U1VGVFN5d3lRa0ZCU3l4SFFVRllPenM3T3pSQ1FVTkZMSEZDUVVGTkxGRkJRVkVzUlVGQlJTeEZRVUZCT3p0M1FrRkJhRUlzVTBGQlowSXNRMEZCUVR0M1FrRkRhRUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRVHQzUWtGRGJrSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlFUczdPenM3UzBGRGVFSTdTVUZGUkN3d1FrRkJTU3hIUVVGS08xRkJRMFVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGQk8wbEJRM2hDTEVOQlFVTTdTVUZGUkN3NFFrRkJVU3hIUVVGU0xGVkJRVk1zVlVGQmEwSXNSVUZCUlN4eFFrRkJORU03VVVGRGRrVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxGVkJRVlVzV1VGQlFTeEZRVUZGTEhGQ1FVRnhRaXgxUWtGQlFTeEZRVUZGTEVOQlFVTXNRMEZCUVR0SlFVTnNSQ3hEUVVGRE8wbEJTVVFzTUVKQlFVa3NSMEZCU2l4VlFVRkxMRWxCUVN0Q08xRkJRWEJETEdsQ1FVZERPMUZCU0hGRExHTkJRWEZDTzJGQlFYSkNMRlZCUVhGQ0xFVkJRWEpDTEhGQ1FVRnhRaXhGUVVGeVFpeEpRVUZ4UWp0WlFVRnlRaXcyUWtGQmNVSTdPMUZCUTNwRUxFbEJRVTBzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hUUVVGTExFbEJRVWtzUTBGQlF5eERRVUZCTzFGQlEyaEZMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlFTeFZRVUZWTEVsQlFVa3NUMEZCUVN4TFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCZEVNc1EwRkJjME1zUTBGQlF5eERRVUZCTzBsQlF6TkZMRU5CUVVNN1NVRkpSQ3cwUWtGQlRTeEhRVUZPTEZWQlFVOHNTVUZCZFVJN1VVRkJPVUlzYVVKQlIwTTdVVUZJSzBJc1kwRkJhVUk3WVVGQmFrSXNWVUZCYVVJc1JVRkJha0lzY1VKQlFXbENMRVZCUVdwQ0xFbEJRV2xDTzFsQlFXcENMRFpDUVVGcFFqczdVVUZETDBNc1NVRkJUU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRk5CUVVzc1NVRkJTU3hEUVVGRExFTkJRVUU3VVVGRGFFVXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGQkxGVkJRVlVzU1VGQlNTeFBRVUZCTEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVhoRExFTkJRWGRETEVOQlFVTXNRMEZCUVR0SlFVTTNSU3hEUVVGRE8wbEJTVVFzYzBKQlFVa3NiME5CUVZjN1VVRkdaaXhqUVVGak8yRkJSV1E3V1VGRFJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZCTEU5QlFVOHNTVUZCU1N4UFFVRkJMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRV3hDTEVOQlFXdENMRU5CUVVNc1EwRkJRVHRSUVVOb1JTeERRVUZET3pzN1QwRkJRVHRKUVVWRUxEQkVRVUZ2UXl4SFFVRndReXhWUVVGeFF5eFBRVUZuUWl4RlFVRkZMRlZCUVd0Q08xRkJRM1pGTEVsQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zYVVOQlFXbERMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZCTzFGQlEyeEdMRTlCUVU4c1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVUU3U1VGRE5VTXNRMEZCUXp0SlFVVkVMR2xDUVVGcFFqdEpRVVZxUWl4cFEwRkJWeXhIUVVGWUxGVkJRVmtzUzBGQldTeEZRVUZGTEU5QlFXVXNSVUZCUlN4TlFVRmpPMUZCUTNaRUxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRVHRKUVVONlJDeERRVUZETzBsQlEwZ3NhMEpCUVVNN1FVRkJSQ3hEUVVGRExFRkJhRVZFTEVsQlowVkRPenRCUVVWRU8wbEJRMFVzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4VlFVRkJMRTlCUVU4N1VVRkRlRUlzU1VGQlNTeFJRVUZSTEVOQlFVTXNWVUZCVlN4SlFVRkpMRk5CUVZNc1JVRkJSVHRaUVVOd1F5eFJRVUZSTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3VTBGRGRrUTdZVUZCVFR0WlFVTk1MRTlCUVU4c1JVRkJSU3hEUVVGQk8xTkJRMVk3U1VGRFNDeERRVUZETEVOQlFVTXNRMEZCUVR0QlFVTktMRU5CUVVNaWZRPT0iLCJ2YXIgQmluZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaW5kaW5nKGNvbnRleHQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcImluZGV4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uaW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCaW5kaW5nLnByb3RvdHlwZSwgXCJldmVudFRhcmdldFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uLmV2ZW50VGFyZ2V0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZy5wcm90b3R5cGUsIFwiaWRlbnRpZmllclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pZGVudGlmaWVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCaW5kaW5nLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy53aWxsQmVJbnZva2VkQnlFdmVudChldmVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW52b2tlV2l0aEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcImV2ZW50TmFtZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uLmV2ZW50TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcIm1ldGhvZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHRoaXMuY29udHJvbGxlclt0aGlzLm1ldGhvZE5hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjdGlvbiBcXFwiXCIgKyB0aGlzLmFjdGlvbiArIFwiXFxcIiByZWZlcmVuY2VzIHVuZGVmaW5lZCBtZXRob2QgXFxcIlwiICsgdGhpcy5tZXRob2ROYW1lICsgXCJcXFwiXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCaW5kaW5nLnByb3RvdHlwZS5pbnZva2VXaXRoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kLmNhbGwodGhpcy5jb250cm9sbGVyLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBpZGVudGlmaWVyID0gX2EuaWRlbnRpZmllciwgY29udHJvbGxlciA9IF9hLmNvbnRyb2xsZXIsIGVsZW1lbnQgPSBfYS5lbGVtZW50LCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICAgICAgdmFyIGRldGFpbCA9IHsgaWRlbnRpZmllcjogaWRlbnRpZmllciwgY29udHJvbGxlcjogY29udHJvbGxlciwgZWxlbWVudDogZWxlbWVudCwgaW5kZXg6IGluZGV4LCBldmVudDogZXZlbnQgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5oYW5kbGVFcnJvcihlcnJvciwgXCJpbnZva2luZyBhY3Rpb24gXFxcIlwiICsgdGhpcy5hY3Rpb24gKyBcIlxcXCJcIiwgZGV0YWlsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQmluZGluZy5wcm90b3R5cGUud2lsbEJlSW52b2tlZEJ5RXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09PSBldmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnRUYXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHRoaXMuZWxlbWVudC5jb250YWlucyhldmVudFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmNvbnRhaW5zRWxlbWVudChldmVudFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcImNvbnRyb2xsZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY29udHJvbGxlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcIm1ldGhvZE5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5tZXRob2ROYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZy5wcm90b3R5cGUsIFwiZWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmcucHJvdG90eXBlLCBcInNjb3BlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnNjb3BlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQmluZGluZztcbn0oKSk7XG5leHBvcnQgeyBCaW5kaW5nIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbWx1WkdsdVp5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5aWFXNWthVzVuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVdEJPMGxCU1VVc2FVSkJRVmtzVDBGQlowSXNSVUZCUlN4TlFVRmpPMUZCUXpGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkJPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkJPMGxCUTNSQ0xFTkJRVU03U1VGRlJDeHpRa0ZCU1N3d1FrRkJTenRoUVVGVU8xbEJRMFVzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJRVHRSUVVNeFFpeERRVUZET3pzN1QwRkJRVHRKUVVWRUxITkNRVUZKTEdkRFFVRlhPMkZCUVdZN1dVRkRSU3hQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkJPMUZCUTJoRExFTkJRVU03T3p0UFFVRkJPMGxCUlVRc2MwSkJRVWtzSzBKQlFWVTdZVUZCWkR0WlFVTkZMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVRTdVVUZEYUVNc1EwRkJRenM3TzA5QlFVRTdTVUZGUkN3MlFrRkJWeXhIUVVGWUxGVkJRVmtzUzBGQldUdFJRVU4wUWl4SlFVRkpMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOd1F5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8xTkJRelZDTzBsQlEwZ3NRMEZCUXp0SlFVVkVMSE5DUVVGSkxEaENRVUZUTzJGQlFXSTdXVUZEUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZCTzFGQlF6bENMRU5CUVVNN096dFBRVUZCTzBsQlJVUXNjMEpCUVVrc01rSkJRVTA3WVVGQlZqdFpRVU5GTEVsQlFVMHNUVUZCVFN4SFFVRkpMRWxCUVVrc1EwRkJReXhWUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRVHRaUVVONFJDeEpRVUZKTEU5QlFVOHNUVUZCVFN4SlFVRkpMRlZCUVZVc1JVRkJSVHRuUWtGREwwSXNUMEZCVHl4TlFVRk5MRU5CUVVFN1lVRkRaRHRaUVVORUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNZMEZCVnl4SlFVRkpMRU5CUVVNc1RVRkJUU3g1UTBGQmEwTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1QwRkJSeXhEUVVGRExFTkJRVUU3VVVGRE4wWXNRMEZCUXpzN08wOUJRVUU3U1VGRlR5eHBRMEZCWlN4SFFVRjJRaXhWUVVGM1FpeExRVUZaTzFGQlEyeERMRWxCUVVrN1dVRkRSaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZCTzFOQlEzcERPMUZCUVVNc1QwRkJUeXhMUVVGTExFVkJRVVU3V1VGRFVpeEpRVUZCTEZOQlFXbEVMRVZCUVM5RExEQkNRVUZWTEVWQlFVVXNNRUpCUVZVc1JVRkJSU3h2UWtGQlR5eEZRVUZGTEdkQ1FVRkxMRU5CUVZNN1dVRkRka1FzU1VGQlRTeE5RVUZOTEVkQlFVY3NSVUZCUlN4VlFVRlZMRmxCUVVFc1JVRkJSU3hWUVVGVkxGbEJRVUVzUlVGQlJTeFBRVUZQTEZOQlFVRXNSVUZCUlN4TFFVRkxMRTlCUVVFc1JVRkJSU3hMUVVGTExFOUJRVUVzUlVGQlJTeERRVUZCTzFsQlEyaEZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4MVFrRkJiMElzU1VGQlNTeERRVUZETEUxQlFVMHNUMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGQk8xTkJRelZGTzBsQlEwZ3NRMEZCUXp0SlFVVlBMSE5EUVVGdlFpeEhRVUUxUWl4VlFVRTJRaXhMUVVGWk8xRkJRM1pETEVsQlFVMHNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVUU3VVVGRGFFTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhMUVVGTExGZEJRVmNzUlVGQlJUdFpRVU5vUXl4UFFVRlBMRWxCUVVrc1EwRkJRVHRUUVVOYU8yRkJRVTBzU1VGQlNTeFhRVUZYTEZsQlFWa3NUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMWxCUXk5RkxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVUU3VTBGREwwTTdZVUZCVFR0WlFVTk1MRTlCUVU4c1NVRkJTU3hEUVVGQk8xTkJRMW83U1VGRFNDeERRVUZETzBsQlJVUXNjMEpCUVZrc0swSkJRVlU3WVVGQmRFSTdXVUZEUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZCTzFGQlEyaERMRU5CUVVNN096dFBRVUZCTzBsQlJVUXNjMEpCUVZrc0swSkJRVlU3WVVGQmRFSTdXVUZEUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZCTzFGQlF5OUNMRU5CUVVNN096dFBRVUZCTzBsQlJVUXNjMEpCUVZrc05FSkJRVTg3WVVGQmJrSTdXVUZEUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZCTzFGQlF6TkNMRU5CUVVNN096dFBRVUZCTzBsQlJVUXNjMEpCUVZrc01FSkJRVXM3WVVGQmFrSTdXVUZEUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZCTzFGQlF6TkNMRU5CUVVNN096dFBRVUZCTzBsQlEwZ3NZMEZCUXp0QlFVRkVMRU5CUVVNc1FVRXpSVVFzU1VFeVJVTWlmUT09IiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIi4vYWN0aW9uXCI7XG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSBcIi4vYmluZGluZ1wiO1xuaW1wb3J0IHsgVmFsdWVMaXN0T2JzZXJ2ZXIgfSBmcm9tIFwiQHN0aW11bHVzL211dGF0aW9uLW9ic2VydmVyc1wiO1xudmFyIEJpbmRpbmdPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaW5kaW5nT2JzZXJ2ZXIoY29udGV4dCwgZGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLmJpbmRpbmdzQnlBY3Rpb24gPSBuZXcgTWFwO1xuICAgIH1cbiAgICBCaW5kaW5nT2JzZXJ2ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIgPSBuZXcgVmFsdWVMaXN0T2JzZXJ2ZXIodGhpcy5lbGVtZW50LCB0aGlzLmFjdGlvbkF0dHJpYnV0ZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJpbmRpbmdPYnNlcnZlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXIuc3RvcCgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMudmFsdWVMaXN0T2JzZXJ2ZXI7XG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RBbGxBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCaW5kaW5nT2JzZXJ2ZXIucHJvdG90eXBlLCBcImVsZW1lbnRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJpbmRpbmdPYnNlcnZlci5wcm90b3R5cGUsIFwiaWRlbnRpZmllclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pZGVudGlmaWVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmluZGluZ09ic2VydmVyLnByb3RvdHlwZSwgXCJhY3Rpb25BdHRyaWJ1dGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5hY3Rpb25BdHRyaWJ1dGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCaW5kaW5nT2JzZXJ2ZXIucHJvdG90eXBlLCBcInNjaGVtYVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5zY2hlbWE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCaW5kaW5nT2JzZXJ2ZXIucHJvdG90eXBlLCBcImJpbmRpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmJpbmRpbmdzQnlBY3Rpb24udmFsdWVzKCkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCaW5kaW5nT2JzZXJ2ZXIucHJvdG90eXBlLmNvbm5lY3RBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gbmV3IEJpbmRpbmcodGhpcy5jb250ZXh0LCBhY3Rpb24pO1xuICAgICAgICB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uc2V0KGFjdGlvbiwgYmluZGluZyk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYmluZGluZ0Nvbm5lY3RlZChiaW5kaW5nKTtcbiAgICB9O1xuICAgIEJpbmRpbmdPYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdEFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uZ2V0KGFjdGlvbik7XG4gICAgICAgIGlmIChiaW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzQnlBY3Rpb24uZGVsZXRlKGFjdGlvbik7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmJpbmRpbmdEaXNjb25uZWN0ZWQoYmluZGluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJpbmRpbmdPYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdEFsbEFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaChmdW5jdGlvbiAoYmluZGluZykgeyByZXR1cm4gX3RoaXMuZGVsZWdhdGUuYmluZGluZ0Rpc2Nvbm5lY3RlZChiaW5kaW5nKTsgfSk7XG4gICAgICAgIHRoaXMuYmluZGluZ3NCeUFjdGlvbi5jbGVhcigpO1xuICAgIH07XG4gICAgLy8gVmFsdWUgb2JzZXJ2ZXIgZGVsZWdhdGVcbiAgICBCaW5kaW5nT2JzZXJ2ZXIucHJvdG90eXBlLnBhcnNlVmFsdWVGb3JUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICB2YXIgYWN0aW9uID0gQWN0aW9uLmZvclRva2VuKHRva2VuKTtcbiAgICAgICAgaWYgKGFjdGlvbi5pZGVudGlmaWVyID09IHRoaXMuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQmluZGluZ09ic2VydmVyLnByb3RvdHlwZS5lbGVtZW50TWF0Y2hlZFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmNvbm5lY3RBY3Rpb24oYWN0aW9uKTtcbiAgICB9O1xuICAgIEJpbmRpbmdPYnNlcnZlci5wcm90b3R5cGUuZWxlbWVudFVubWF0Y2hlZFZhbHVlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RBY3Rpb24oYWN0aW9uKTtcbiAgICB9O1xuICAgIHJldHVybiBCaW5kaW5nT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgQmluZGluZ09ic2VydmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbWx1WkdsdVoxOXZZbk5sY25abGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5aWFXNWthVzVuWDI5aWMyVnlkbVZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeFZRVUZWTEVOQlFVRTdRVUZEYWtNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeE5RVUZOTEZkQlFWY3NRMEZCUVR0QlFVbHVReXhQUVVGUExFVkJRVk1zYVVKQlFXbENMRVZCUVRaQ0xFMUJRVTBzT0VKQlFUaENMRU5CUVVFN1FVRlBiRWM3U1VGTlJTeDVRa0ZCV1N4UFFVRm5RaXhGUVVGRkxGRkJRV2xETzFGQlF6ZEVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZCTzFGQlEzUkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZCTzFGQlEzaENMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJRVHRKUVVOcVF5eERRVUZETzBsQlJVUXNLMEpCUVVzc1IwRkJURHRSUVVORkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVU3V1VGRE0wSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEhRVUZITEVsQlFVa3NhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZCTzFsQlEzaEdMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRVHRUUVVNdlFqdEpRVU5JTEVOQlFVTTdTVUZGUkN3NFFrRkJTU3hIUVVGS08xRkJRMFVzU1VGQlNTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVU3V1VGRE1VSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkJPMWxCUXpkQ0xFOUJRVThzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGQk8xbEJRemRDTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUlVGQlJTeERRVUZCTzFOQlF6VkNPMGxCUTBnc1EwRkJRenRKUVVWRUxITkNRVUZKTEc5RFFVRlBPMkZCUVZnN1dVRkRSU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkJPMUZCUXpkQ0xFTkJRVU03T3p0UFFVRkJPMGxCUlVRc2MwSkJRVWtzZFVOQlFWVTdZVUZCWkR0WlFVTkZMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVRTdVVUZEYUVNc1EwRkJRenM3TzA5QlFVRTdTVUZGUkN4elFrRkJTU3cwUTBGQlpUdGhRVUZ1UWp0WlFVTkZMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVRTdVVUZEY0VNc1EwRkJRenM3TzA5QlFVRTdTVUZGUkN4elFrRkJTU3h0UTBGQlRUdGhRVUZXTzFsQlEwVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlFUdFJRVU0xUWl4RFFVRkRPenM3VDBGQlFUdEpRVVZFTEhOQ1FVRkpMSEZEUVVGUk8yRkJRVm83V1VGRFJTeFBRVUZQTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVUU3VVVGRGJrUXNRMEZCUXpzN08wOUJRVUU3U1VGRlR5eDFRMEZCWVN4SFFVRnlRaXhWUVVGelFpeE5RVUZqTzFGQlEyeERMRWxCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVUU3VVVGRGFrUXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3VVVGRE1VTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRKUVVONlF5eERRVUZETzBsQlJVOHNNRU5CUVdkQ0xFZEJRWGhDTEZWQlFYbENMRTFCUVdNN1VVRkRja01zU1VGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRVHRSUVVOcVJDeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTllMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVUU3V1VGRGNFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRUUVVNelF6dEpRVU5JTEVOQlFVTTdTVUZGVHl3NFEwRkJiMElzUjBGQk5VSTdVVUZCUVN4cFFrRkhRenRSUVVaRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVVFc1QwRkJUeXhKUVVGSkxFOUJRVUVzUzBGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCTVVNc1EwRkJNRU1zUTBGQlF5eERRVUZCTzFGQlF6VkZMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRVHRKUVVNdlFpeERRVUZETzBsQlJVUXNNRUpCUVRCQ08wbEJSVEZDTERSRFFVRnJRaXhIUVVGc1FpeFZRVUZ0UWl4TFFVRlpPMUZCUXpkQ0xFbEJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VVVGRGNrTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVTdXVUZEZUVNc1QwRkJUeXhOUVVGTkxFTkJRVUU3VTBGRFpEdEpRVU5JTEVOQlFVTTdTVUZGUkN3MlEwRkJiVUlzUjBGQmJrSXNWVUZCYjBJc1QwRkJaMElzUlVGQlJTeE5RVUZqTzFGQlEyeEVMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVRTdTVUZETlVJc1EwRkJRenRKUVVWRUxDdERRVUZ4UWl4SFFVRnlRaXhWUVVGelFpeFBRVUZuUWl4RlFVRkZMRTFCUVdNN1VVRkRjRVFzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZCTzBsQlF5OUNMRU5CUVVNN1NVRkRTQ3h6UWtGQlF6dEJRVUZFTEVOQlFVTXNRVUZzUmtRc1NVRnJSa01pZlE9PSIsImltcG9ydCB7IEJpbmRpbmdPYnNlcnZlciB9IGZyb20gXCIuL2JpbmRpbmdfb2JzZXJ2ZXJcIjtcbnZhciBDb250ZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRleHQobW9kdWxlLCBzY29wZSkge1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgbW9kdWxlLmNvbnRyb2xsZXJDb25zdHJ1Y3Rvcih0aGlzKTtcbiAgICAgICAgdGhpcy5iaW5kaW5nT2JzZXJ2ZXIgPSBuZXcgQmluZGluZ09ic2VydmVyKHRoaXMsIHRoaXMuZGlzcGF0Y2hlcik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgXCJpbml0aWFsaXppbmcgY29udHJvbGxlclwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb250ZXh0LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJpbmRpbmdPYnNlcnZlci5zdGFydCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIFwiY29ubmVjdGluZyBjb250cm9sbGVyXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb250ZXh0LnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIFwiZGlzY29ubmVjdGluZyBjb250cm9sbGVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmluZGluZ09ic2VydmVyLnN0b3AoKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250ZXh0LnByb3RvdHlwZSwgXCJhcHBsaWNhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmFwcGxpY2F0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGV4dC5wcm90b3R5cGUsIFwiaWRlbnRpZmllclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLmlkZW50aWZpZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250ZXh0LnByb3RvdHlwZSwgXCJzY2hlbWFcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLnNjaGVtYTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRleHQucHJvdG90eXBlLCBcImRpc3BhdGNoZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uLmRpc3BhdGNoZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250ZXh0LnByb3RvdHlwZSwgXCJlbGVtZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5lbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGV4dC5wcm90b3R5cGUsIFwicGFyZW50RWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyBFcnJvciBoYW5kbGluZ1xuICAgIENvbnRleHQucHJvdG90eXBlLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwpIHtcbiAgICAgICAgaWYgKGRldGFpbCA9PT0gdm9pZCAwKSB7IGRldGFpbCA9IHt9OyB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGlkZW50aWZpZXIgPSBfYS5pZGVudGlmaWVyLCBjb250cm9sbGVyID0gX2EuY29udHJvbGxlciwgZWxlbWVudCA9IF9hLmVsZW1lbnQ7XG4gICAgICAgIGRldGFpbCA9IE9iamVjdC5hc3NpZ24oeyBpZGVudGlmaWVyOiBpZGVudGlmaWVyLCBjb250cm9sbGVyOiBjb250cm9sbGVyLCBlbGVtZW50OiBlbGVtZW50IH0sIGRldGFpbCk7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24uaGFuZGxlRXJyb3IoZXJyb3IsIFwiRXJyb3IgXCIgKyBtZXNzYWdlLCBkZXRhaWwpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRleHQ7XG59KCkpO1xuZXhwb3J0IHsgQ29udGV4dCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWRHVjRkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWpiMjUwWlhoMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVU5CTEU5QlFVOHNSVUZCUlN4bFFVRmxMRVZCUVVVc1RVRkJUU3h2UWtGQmIwSXNRMEZCUVR0QlFWRndSRHRKUVUxRkxHbENRVUZaTEUxQlFXTXNSVUZCUlN4TFFVRlpPMUZCUTNSRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkJPMUZCUTNCQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkJPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVFN1VVRkRlRVFzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4SlFVRkpMR1ZCUVdVc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkJPMUZCUldwRkxFbEJRVWs3V1VGRFJpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGQk8xTkJRemRDTzFGQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4NVFrRkJlVUlzUTBGQlF5eERRVUZCTzFOQlEyNUVPMGxCUTBnc1EwRkJRenRKUVVWRUxIbENRVUZQTEVkQlFWQTdVVUZEUlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZCTzFGQlJUVkNMRWxCUVVrN1dVRkRSaXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkJPMU5CUXpGQ08xRkJRVU1zVDBGQlR5eExRVUZMTEVWQlFVVTdXVUZEWkN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUlVGQlJTeDFRa0ZCZFVJc1EwRkJReXhEUVVGQk8xTkJRMnBFTzBsQlEwZ3NRMEZCUXp0SlFVVkVMRFJDUVVGVkxFZEJRVlk3VVVGRFJTeEpRVUZKTzFsQlEwWXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlFUdFRRVU0zUWp0UlFVRkRMRTlCUVU4c1MwRkJTeXhGUVVGRk8xbEJRMlFzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4TFFVRkxMRVZCUVVVc01FSkJRVEJDTEVOQlFVTXNRMEZCUVR0VFFVTndSRHRSUVVWRUxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVFN1NVRkROMElzUTBGQlF6dEpRVVZFTEhOQ1FVRkpMR2REUVVGWE8yRkJRV1k3V1VGRFJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGQk8xRkJRMmhETEVOQlFVTTdPenRQUVVGQk8wbEJSVVFzYzBKQlFVa3NLMEpCUVZVN1lVRkJaRHRaUVVORkxFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVFN1VVRkRMMElzUTBGQlF6czdPMDlCUVVFN1NVRkZSQ3h6UWtGQlNTd3lRa0ZCVFR0aFFVRldPMWxCUTBVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUVR0UlFVTm9ReXhEUVVGRE96czdUMEZCUVR0SlFVVkVMSE5DUVVGSkxDdENRVUZWTzJGQlFXUTdXVUZEUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVlVGQlZTeERRVUZCTzFGQlEzQkRMRU5CUVVNN096dFBRVUZCTzBsQlJVUXNjMEpCUVVrc05FSkJRVTg3WVVGQldEdFpRVU5GTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVUU3VVVGRE0wSXNRMEZCUXpzN08wOUJRVUU3U1VGRlJDeHpRa0ZCU1N4clEwRkJZVHRoUVVGcVFqdFpRVU5GTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVUU3VVVGRGJrTXNRMEZCUXpzN08wOUJRVUU3U1VGRlJDeHBRa0ZCYVVJN1NVRkZha0lzTmtKQlFWY3NSMEZCV0N4VlFVRlpMRXRCUVZrc1JVRkJSU3hQUVVGbExFVkJRVVVzVFVGQmJVSTdVVUZCYmtJc2RVSkJRVUVzUlVGQlFTeFhRVUZ0UWp0UlFVTjBSQ3hKUVVGQkxGTkJRVEJETEVWQlFYaERMREJDUVVGVkxFVkJRVVVzTUVKQlFWVXNSVUZCUlN4dlFrRkJUeXhEUVVGVE8xRkJRMmhFTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzVlVGQlZTeFpRVUZCTEVWQlFVVXNWVUZCVlN4WlFVRkJMRVZCUVVVc1QwRkJUeXhUUVVGQkxFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUVR0UlFVTnVSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1YwRkJVeXhQUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVRTdTVUZEYWtVc1EwRkJRenRKUVVOSUxHTkJRVU03UVVGQlJDeERRVUZETEVGQmRFVkVMRWxCYzBWREluMD0iLCJpbXBvcnQgeyBkZWZpbmVUYXJnZXRQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vdGFyZ2V0X3Byb3BlcnRpZXNcIjtcbnZhciBDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXIoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbiAgICBDb250cm9sbGVyLmJsZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWZpbmVUYXJnZXRQcm9wZXJ0aWVzKHRoaXMpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRyb2xsZXIucHJvdG90eXBlLCBcImFwcGxpY2F0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmFwcGxpY2F0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udHJvbGxlci5wcm90b3R5cGUsIFwic2NvcGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuc2NvcGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sbGVyLnByb3RvdHlwZSwgXCJlbGVtZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5lbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udHJvbGxlci5wcm90b3R5cGUsIFwiaWRlbnRpZmllclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuaWRlbnRpZmllcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRyb2xsZXIucHJvdG90eXBlLCBcInRhcmdldHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLnRhcmdldHM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sbGVyLnByb3RvdHlwZSwgXCJkYXRhXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBPdmVycmlkZSBpbiB5b3VyIHN1YmNsYXNzIHRvIHNldCB1cCBpbml0aWFsIGNvbnRyb2xsZXIgc3RhdGVcbiAgICB9O1xuICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGluIHlvdXIgc3ViY2xhc3MgdG8gcmVzcG9uZCB3aGVuIHRoZSBjb250cm9sbGVyIGlzIGNvbm5lY3RlZCB0byB0aGUgRE9NXG4gICAgfTtcbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBPdmVycmlkZSBpbiB5b3VyIHN1YmNsYXNzIHRvIHJlc3BvbmQgd2hlbiB0aGUgY29udHJvbGxlciBpcyBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgRE9NXG4gICAgfTtcbiAgICBDb250cm9sbGVyLnRhcmdldHMgPSBbXTtcbiAgICByZXR1cm4gQ29udHJvbGxlcjtcbn0oKSk7XG5leHBvcnQgeyBDb250cm9sbGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1ZEhKdmJHeGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWpiMjUwY205c2JHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVV0QkxFOUJRVThzUlVGQlJTeHpRa0ZCYzBJc1JVRkJSU3hOUVVGTkxIRkNRVUZ4UWl4RFFVRkJPMEZCVHpWRU8wbEJVMFVzYjBKQlFWa3NUMEZCWjBJN1VVRkRNVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVFN1NVRkRlRUlzUTBGQlF6dEpRVTVOTEdkQ1FVRkxMRWRCUVZvN1VVRkRSU3h6UWtGQmMwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRVHRKUVVNNVFpeERRVUZETzBsQlRVUXNjMEpCUVVrc2JVTkJRVmM3WVVGQlpqdFpRVU5GTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVUU3VVVGRGFrTXNRMEZCUXpzN08wOUJRVUU3U1VGRlJDeHpRa0ZCU1N3MlFrRkJTenRoUVVGVU8xbEJRMFVzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJRVHRSUVVNelFpeERRVUZET3pzN1QwRkJRVHRKUVVWRUxITkNRVUZKTEN0Q1FVRlBPMkZCUVZnN1dVRkRSU3hQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkJPMUZCUXpOQ0xFTkJRVU03T3p0UFFVRkJPMGxCUlVRc2MwSkJRVWtzYTBOQlFWVTdZVUZCWkR0WlFVTkZMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVRTdVVUZET1VJc1EwRkJRenM3TzA5QlFVRTdTVUZGUkN4elFrRkJTU3dyUWtGQlR6dGhRVUZZTzFsQlEwVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlFUdFJRVU16UWl4RFFVRkRPenM3VDBGQlFUdEpRVVZFTEhOQ1FVRkpMRFJDUVVGSk8yRkJRVkk3V1VGRFJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGQk8xRkJRM2hDTEVOQlFVTTdPenRQUVVGQk8wbEJSVVFzSzBKQlFWVXNSMEZCVmp0UlFVTkZMQ3RFUVVFclJEdEpRVU5xUlN4RFFVRkRPMGxCUlVRc05FSkJRVThzUjBGQlVEdFJRVU5GTEcxR1FVRnRSanRKUVVOeVJpeERRVUZETzBsQlJVUXNLMEpCUVZVc1IwRkJWanRSUVVORkxIZEdRVUYzUmp0SlFVTXhSaXhEUVVGRE8wbEJPVU5OTEd0Q1FVRlBMRWRCUVdFc1JVRkJSU3hEUVVGQk8wbEJLME12UWl4cFFrRkJRenREUVVGQkxFRkJhRVJFTEVsQlowUkRPMU5CYUVSWkxGVkJRVlVpZlE9PSIsInZhciBEYXRhTWFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERhdGFNYXAoc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGF0YU1hcC5wcm90b3R5cGUsIFwiZWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERhdGFNYXAucHJvdG90eXBlLCBcImlkZW50aWZpZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmlkZW50aWZpZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIERhdGFNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAga2V5ID0gdGhpcy5nZXRGb3JtYXR0ZWRLZXkoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9O1xuICAgIERhdGFNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IHRoaXMuZ2V0Rm9ybWF0dGVkS2V5KGtleSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChrZXkpO1xuICAgIH07XG4gICAgRGF0YU1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBrZXkgPSB0aGlzLmdldEZvcm1hdHRlZEtleShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZShrZXkpO1xuICAgIH07XG4gICAgRGF0YU1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5nZXRGb3JtYXR0ZWRLZXkoa2V5KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEYXRhTWFwLnByb3RvdHlwZS5nZXRGb3JtYXR0ZWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBcImRhdGEtXCIgKyB0aGlzLmlkZW50aWZpZXIgKyBcIi1cIiArIGRhc2hlcml6ZShrZXkpO1xuICAgIH07XG4gICAgcmV0dXJuIERhdGFNYXA7XG59KCkpO1xuZXhwb3J0IHsgRGF0YU1hcCB9O1xuZnVuY3Rpb24gZGFzaGVyaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKF8sIGNoYXIpIHsgcmV0dXJuIFwiLVwiICsgY2hhci50b0xvd2VyQ2FzZSgpOyB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHRjBZVjl0WVhBdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlWOXRZWEF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlJVRTdTVUZIUlN4cFFrRkJXU3hMUVVGWk8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGQk8wbEJRM0JDTEVOQlFVTTdTVUZGUkN4elFrRkJTU3cwUWtGQlR6dGhRVUZZTzFsQlEwVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlFUdFJRVU16UWl4RFFVRkRPenM3VDBGQlFUdEpRVVZFTEhOQ1FVRkpMQ3RDUVVGVk8yRkJRV1E3V1VGRFJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGQk8xRkJRemxDTEVOQlFVTTdPenRQUVVGQk8wbEJSVVFzY1VKQlFVY3NSMEZCU0N4VlFVRkpMRWRCUVZjN1VVRkRZaXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRSUVVNdlFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzBsQlEzWkRMRU5CUVVNN1NVRkZSQ3h4UWtGQlJ5eEhRVUZJTEZWQlFVa3NSMEZCVnl4RlFVRkZMRXRCUVdFN1VVRkROVUlzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3VVVGREwwSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkJPMUZCUTNKRExFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRKUVVOMFFpeERRVUZETzBsQlJVUXNjVUpCUVVjc1IwRkJTQ3hWUVVGSkxFZEJRVmM3VVVGRFlpeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdFJRVU12UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMGxCUTNaRExFTkJRVU03U1VGRlJDeDNRa0ZCVFN4SFFVRk9MRlZCUVU4c1IwRkJWenRSUVVOb1FpeEpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGFrSXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdXVUZETDBJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1dVRkRha01zVDBGQlR5eEpRVUZKTEVOQlFVRTdVMEZEV2p0aFFVRk5PMWxCUTB3c1QwRkJUeXhMUVVGTExFTkJRVUU3VTBGRFlqdEpRVU5JTEVOQlFVTTdTVUZGVHl4cFEwRkJaU3hIUVVGMlFpeFZRVUYzUWl4SFFVRlhPMUZCUTJwRExFOUJRVThzVlVGQlVTeEpRVUZKTEVOQlFVTXNWVUZCVlN4VFFVRkpMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVWNzUTBGQlFUdEpRVU53UkN4RFFVRkRPMGxCUTBnc1kwRkJRenRCUVVGRUxFTkJRVU1zUVVFMVEwUXNTVUUwUTBNN08wRkJSVVFzYlVKQlFXMUNMRXRCUVdFN1NVRkRPVUlzVDBGQlR5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hWUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVsQlFVc3NUMEZCUVN4TlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVWtzUlVGQmVFSXNRMEZCZDBJc1EwRkJReXhEUVVGQk8wRkJRM3BGTEVOQlFVTWlmUT09IiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJsZXNzRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWRlbnRpZmllcjogZGVmaW5pdGlvbi5pZGVudGlmaWVyLFxuICAgICAgICBjb250cm9sbGVyQ29uc3RydWN0b3I6IGJsZXNzQ29udHJvbGxlckNvbnN0cnVjdG9yKGRlZmluaXRpb24uY29udHJvbGxlckNvbnN0cnVjdG9yKVxuICAgIH07XG59XG5mdW5jdGlvbiBibGVzc0NvbnRyb2xsZXJDb25zdHJ1Y3Rvcihjb250cm9sbGVyQ29uc3RydWN0b3IpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBleHRlbmQoY29udHJvbGxlckNvbnN0cnVjdG9yKTtcbiAgICBjb25zdHJ1Y3Rvci5ibGVzcygpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cbnZhciBleHRlbmQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGV4dGVuZFdpdGhSZWZsZWN0KGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGZ1bmN0aW9uIENvbnRyb2xsZXIoKSB7XG4gICAgICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMgJiYgdGhpcyBpbnN0YW5jZW9mIENvbnRyb2xsZXIgPyB0aGlzLmNvbnN0cnVjdG9yIDogdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KGNvbnN0cnVjdG9yLCBhcmd1bWVudHMsIF9uZXdUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIENvbnRyb2xsZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBDb250cm9sbGVyIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFJlZmxlY3Quc2V0UHJvdG90eXBlT2YoQ29udHJvbGxlciwgY29uc3RydWN0b3IpO1xuICAgICAgICByZXR1cm4gQ29udHJvbGxlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdFJlZmxlY3RFeHRlbnNpb24oKSB7XG4gICAgICAgIHZhciBhID0gZnVuY3Rpb24gKCkgeyB0aGlzLmEuY2FsbCh0aGlzKTsgfTtcbiAgICAgICAgdmFyIGIgPSBleHRlbmRXaXRoUmVmbGVjdChhKTtcbiAgICAgICAgYi5wcm90b3R5cGUuYSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBiO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB0ZXN0UmVmbGVjdEV4dGVuc2lvbigpO1xuICAgICAgICByZXR1cm4gZXh0ZW5kV2l0aFJlZmxlY3Q7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7IHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgICAgICBfX2V4dGVuZHMoQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIENvbnRyb2xsZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIENvbnRyb2xsZXI7XG4gICAgICAgIH0oY29uc3RydWN0b3IpKTsgfTtcbiAgICB9XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdWbWFXNXBkR2x2Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWldacGJtbDBhVzl1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN1FVRlBRU3hqUVVGak8wRkJRMlFzVFVGQlRTd3dRa0ZCTUVJc1ZVRkJjMEk3U1VGRGNFUXNUMEZCVHp0UlFVTk1MRlZCUVZVc1JVRkJSU3hWUVVGVkxFTkJRVU1zVlVGQlZUdFJRVU5xUXl4eFFrRkJjVUlzUlVGQlJTd3dRa0ZCTUVJc1EwRkJReXhWUVVGVkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNN1MwRkRjRVlzUTBGQlFUdEJRVU5JTEVOQlFVTTdRVUZGUkN4dlEwRkJiME1zY1VKQlFUUkRPMGxCUXpsRkxFbEJRVTBzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZCTzBsQlEycEVMRmRCUVZjc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlFUdEpRVU51UWl4UFFVRlBMRmRCUVZjc1EwRkJRVHRCUVVOd1FpeERRVUZETzBGQlJVUXNTVUZCVFN4TlFVRk5MRWRCUVVjc1EwRkJRenRKUVVka0xESkNRVUZ6UkN4WFFVRmpPMUZCUTJ4Rk96dFpRVU5GTEU5QlFVOHNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhYUVVGWExFVkJRVVVzVTBGQlV5eGhRVUZoTEVOQlFVRTdVVUZET1VRc1EwRkJRenRSUVVWRUxGVkJRVlVzUTBGQlF5eFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlF6RkVMRmRCUVZjc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVTdVMEZEYmtNc1EwRkJReXhEUVVGQk8xRkJSVVlzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4VlFVRlZMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVUU3VVVGREwwTXNUMEZCVHl4VlFVRnBRaXhEUVVGQk8wbEJRekZDTEVOQlFVTTdTVUZGUkR0UlFVTkZMRWxCUVUwc1EwRkJReXhIUVVGSExHTkJRWE5DTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCVVN4RFFVRkJPMUZCUXpGRUxFbEJRVTBzUTBGQlF5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTzFGQlF6bENMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEhRVUZITEdOQlFWa3NRMEZCUXl4RFFVRkJPMUZCUXpkQ0xFOUJRVThzU1VGQlNTeERRVUZETEVOQlFVRTdTVUZEWkN4RFFVRkRPMGxCUlVRc1NVRkJTVHRSUVVOR0xHOUNRVUZ2UWl4RlFVRkZMRU5CUVVFN1VVRkRkRUlzVDBGQlR5eHBRa0ZCYVVJc1EwRkJRVHRMUVVONlFqdEpRVUZETEU5QlFVOHNTMEZCU3l4RlFVRkZPMUZCUTJRc1QwRkJUeXhWUVVFMFFpeFhRVUZqTEVsQlFVczdXVUZCZVVJc09FSkJRVmM3V1VGQmNFTTdPMWxCUVhORExFTkJRVU03V1VGQlJDeHBRa0ZCUXp0UlFVRkVMRU5CUVVNc1FVRkJka01zUTBGQmVVSXNWMEZCVnl4SlFVRndReXhEUVVGMVF5eERRVUZCTzB0QlF6bEdPMEZCUTBnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlFTSjkiLCJpbXBvcnQgeyBFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vZXZlbnRfbGlzdGVuZXJcIjtcbnZhciBEaXNwYXRjaGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERpc3BhdGNoZXIoYXBwbGljYXRpb24pIHtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJNYXBzID0gbmV3IE1hcDtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRMaXN0ZW5lcikgeyByZXR1cm4gZXZlbnRMaXN0ZW5lci5jb25uZWN0KCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRMaXN0ZW5lcikgeyByZXR1cm4gZXZlbnRMaXN0ZW5lci5kaXNjb25uZWN0KCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGlzcGF0Y2hlci5wcm90b3R5cGUsIFwiZXZlbnRMaXN0ZW5lcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZXZlbnRMaXN0ZW5lck1hcHMudmFsdWVzKCkpXG4gICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAobGlzdGVuZXJzLCBtYXApIHsgcmV0dXJuIGxpc3RlbmVycy5jb25jYXQoQXJyYXkuZnJvbShtYXAudmFsdWVzKCkpKTsgfSwgW10pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyBCaW5kaW5nIG9ic2VydmVyIGRlbGVnYXRlXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5iaW5kaW5nQ29ubmVjdGVkID0gZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXJGb3JCaW5kaW5nKGJpbmRpbmcpLmJpbmRpbmdDb25uZWN0ZWQoYmluZGluZyk7XG4gICAgfTtcbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmJpbmRpbmdEaXNjb25uZWN0ZWQgPSBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICB0aGlzLmZldGNoRXZlbnRMaXN0ZW5lckZvckJpbmRpbmcoYmluZGluZykuYmluZGluZ0Rpc2Nvbm5lY3RlZChiaW5kaW5nKTtcbiAgICB9O1xuICAgIC8vIEVycm9yIGhhbmRsaW5nXG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIG1lc3NhZ2UsIGRldGFpbCkge1xuICAgICAgICBpZiAoZGV0YWlsID09PSB2b2lkIDApIHsgZGV0YWlsID0ge307IH1cbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5oYW5kbGVFcnJvcihlcnJvciwgXCJFcnJvciBcIiArIG1lc3NhZ2UsIGRldGFpbCk7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5mZXRjaEV2ZW50TGlzdGVuZXJGb3JCaW5kaW5nID0gZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gYmluZGluZy5ldmVudFRhcmdldCwgZXZlbnROYW1lID0gYmluZGluZy5ldmVudE5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoRXZlbnRMaXN0ZW5lcihldmVudFRhcmdldCwgZXZlbnROYW1lKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmZldGNoRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudFRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgICAgIHZhciBldmVudExpc3RlbmVyTWFwID0gdGhpcy5mZXRjaEV2ZW50TGlzdGVuZXJNYXBGb3JFdmVudFRhcmdldChldmVudFRhcmdldCk7XG4gICAgICAgIHZhciBldmVudExpc3RlbmVyID0gZXZlbnRMaXN0ZW5lck1hcC5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKCFldmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVyID0gdGhpcy5jcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VGFyZ2V0LCBldmVudE5hbWUpO1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lck1hcC5zZXQoZXZlbnROYW1lLCBldmVudExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmNyZWF0ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSkge1xuICAgICAgICB2YXIgZXZlbnRMaXN0ZW5lciA9IG5ldyBFdmVudExpc3RlbmVyKGV2ZW50VGFyZ2V0LCBldmVudE5hbWUpO1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVyLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmZldGNoRXZlbnRMaXN0ZW5lck1hcEZvckV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24gKGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIHZhciBldmVudExpc3RlbmVyTWFwID0gdGhpcy5ldmVudExpc3RlbmVyTWFwcy5nZXQoZXZlbnRUYXJnZXQpO1xuICAgICAgICBpZiAoIWV2ZW50TGlzdGVuZXJNYXApIHtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJNYXAgPSBuZXcgTWFwO1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyTWFwcy5zZXQoZXZlbnRUYXJnZXQsIGV2ZW50TGlzdGVuZXJNYXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudExpc3RlbmVyTWFwO1xuICAgIH07XG4gICAgcmV0dXJuIERpc3BhdGNoZXI7XG59KCkpO1xuZXhwb3J0IHsgRGlzcGF0Y2hlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdsemNHRjBZMmhsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVhOd1lYUmphR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVZEJMRTlCUVU4c1JVRkJSU3hoUVVGaExFVkJRVVVzVFVGQlRTeHJRa0ZCYTBJc1EwRkJRVHRCUVVWb1JEdEpRVXRGTEc5Q1FVRlpMRmRCUVhkQ08xRkJRMnhETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1YwRkJWeXhEUVVGQk8xRkJRemxDTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUVR0UlFVTm9ReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUVR0SlFVTjBRaXhEUVVGRE8wbEJSVVFzTUVKQlFVc3NSMEZCVER0UlFVTkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEycENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZCTzFsQlEyNUNMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFVRXNZVUZCWVN4SlFVRkpMRTlCUVVFc1lVRkJZU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUYyUWl4RFFVRjFRaXhEUVVGRExFTkJRVUU3VTBGRGRFVTdTVUZEU0N4RFFVRkRPMGxCUlVRc2VVSkJRVWtzUjBGQlNqdFJRVU5GTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOb1FpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRVHRaUVVOd1FpeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGQkxHRkJRV0VzU1VGQlNTeFBRVUZCTEdGQlFXRXNRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJNVUlzUTBGQk1FSXNRMEZCUXl4RFFVRkJPMU5CUTNwRk8wbEJRMGdzUTBGQlF6dEpRVVZFTEhOQ1FVRkpMSE5EUVVGak8yRkJRV3hDTzFsQlEwVXNUMEZCVHl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dHBRa0ZETDBNc1RVRkJUU3hEUVVGRExGVkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NTVUZCU3l4UFFVRkJMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUV4UXl4RFFVRXdReXhGUVVGRkxFVkJRWEZDTEVOQlFVTXNRMEZCUVR0UlFVTnNSeXhEUVVGRE96czdUMEZCUVR0SlFVVkVMRFJDUVVFMFFqdEpRVVUxUWl4alFVRmpPMGxCUTJRc2NVTkJRV2RDTEVkQlFXaENMRlZCUVdsQ0xFOUJRV2RDTzFGQlF5OUNMRWxCUVVrc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRKUVVOMFJTeERRVUZETzBsQlJVUXNZMEZCWXp0SlFVTmtMSGREUVVGdFFpeEhRVUZ1UWl4VlFVRnZRaXhQUVVGblFqdFJRVU5zUXl4SlFVRkpMRU5CUVVNc05FSkJRVFJDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVFN1NVRkRla1VzUTBGQlF6dEpRVVZFTEdsQ1FVRnBRanRKUVVWcVFpeG5RMEZCVnl4SFFVRllMRlZCUVZrc1MwRkJXU3hGUVVGRkxFOUJRV1VzUlVGQlJTeE5RVUZ0UWp0UlFVRnVRaXgxUWtGQlFTeEZRVUZCTEZkQlFXMUNPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hYUVVGVExFOUJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUVR0SlFVTnFSU3hEUVVGRE8wbEJSVThzYVVSQlFUUkNMRWRCUVhCRExGVkJRWEZETEU5QlFXZENPMUZCUXpORExFbEJRVUVzYVVOQlFWY3NSVUZCUlN3MlFrRkJVeXhEUVVGWk8xRkJRekZETEU5QlFVOHNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEZkQlFWY3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRVHRKUVVONFJDeERRVUZETzBsQlJVOHNkVU5CUVd0Q0xFZEJRVEZDTEZWQlFUSkNMRmRCUVhkQ0xFVkJRVVVzVTBGQmFVSTdVVUZEY0VVc1NVRkJUU3huUWtGQlowSXNSMEZCUnl4SlFVRkpMRU5CUVVNc2JVTkJRVzFETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVFN1VVRkRPVVVzU1VGQlNTeGhRVUZoTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkJPMUZCUTI1RUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVTdXVUZEYkVJc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhYUVVGWExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVRTdXVUZEYUVVc1owSkJRV2RDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hoUVVGaExFTkJRVU1zUTBGQlFUdFRRVU12UXp0UlFVTkVMRTlCUVU4c1lVRkJZU3hEUVVGQk8wbEJRM1JDTEVOQlFVTTdTVUZGVHl4M1EwRkJiVUlzUjBGQk0wSXNWVUZCTkVJc1YwRkJkMElzUlVGQlJTeFRRVUZwUWp0UlFVTnlSU3hKUVVGTkxHRkJRV0VzUjBGQlJ5eEpRVUZKTEdGQlFXRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVUU3VVVGREwwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRMmhDTEdGQlFXRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRVHRUUVVONFFqdFJRVU5FTEU5QlFVOHNZVUZCWVN4RFFVRkJPMGxCUTNSQ0xFTkJRVU03U1VGRlR5eDNSRUZCYlVNc1IwRkJNME1zVlVGQk5FTXNWMEZCZDBJN1VVRkRiRVVzU1VGQlNTeG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZCTzFGQlF6bEVMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSVUZCUlR0WlFVTnlRaXhuUWtGQlowSXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJRVHRaUVVNeFFpeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZCTzFOQlF6RkVPMUZCUTBRc1QwRkJUeXhuUWtGQlowSXNRMEZCUVR0SlFVTjZRaXhEUVVGRE8wbEJRMGdzYVVKQlFVTTdRVUZCUkN4RFFVRkRMRUZCTDBWRUxFbEJLMFZESW4wPSIsInZhciBFdmVudExpc3RlbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50TGlzdGVuZXIoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0ID0gZXZlbnRUYXJnZXQ7XG4gICAgICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICB0aGlzLnVub3JkZXJlZEJpbmRpbmdzID0gbmV3IFNldDtcbiAgICB9XG4gICAgRXZlbnRMaXN0ZW5lci5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLCBmYWxzZSk7XG4gICAgfTtcbiAgICBFdmVudExpc3RlbmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMsIGZhbHNlKTtcbiAgICB9O1xuICAgIC8vIEJpbmRpbmcgb2JzZXJ2ZXIgZGVsZWdhdGVcbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIEV2ZW50TGlzdGVuZXIucHJvdG90eXBlLmJpbmRpbmdDb25uZWN0ZWQgPSBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICB0aGlzLnVub3JkZXJlZEJpbmRpbmdzLmFkZChiaW5kaW5nKTtcbiAgICB9O1xuICAgIC8qKiBAaGlkZGVuICovXG4gICAgRXZlbnRMaXN0ZW5lci5wcm90b3R5cGUuYmluZGluZ0Rpc2Nvbm5lY3RlZCA9IGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMudW5vcmRlcmVkQmluZGluZ3MuZGVsZXRlKGJpbmRpbmcpO1xuICAgIH07XG4gICAgRXZlbnRMaXN0ZW5lci5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV4dGVuZGVkRXZlbnQgPSBleHRlbmRFdmVudChldmVudCk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmJpbmRpbmdzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGJpbmRpbmcgPSBfYVtfaV07XG4gICAgICAgICAgICBpZiAoZXh0ZW5kZWRFdmVudC5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcuaGFuZGxlRXZlbnQoZXh0ZW5kZWRFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudExpc3RlbmVyLnByb3RvdHlwZSwgXCJiaW5kaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy51bm9yZGVyZWRCaW5kaW5ncykuc29ydChmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVmdEluZGV4ID0gbGVmdC5pbmRleCwgcmlnaHRJbmRleCA9IHJpZ2h0LmluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0SW5kZXggPCByaWdodEluZGV4ID8gLTEgOiBsZWZ0SW5kZXggPiByaWdodEluZGV4ID8gMSA6IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEV2ZW50TGlzdGVuZXI7XG59KCkpO1xuZXhwb3J0IHsgRXZlbnRMaXN0ZW5lciB9O1xuZnVuY3Rpb24gZXh0ZW5kRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoXCJpbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWRcIiBpbiBldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXzEgPSBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb247XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGV2ZW50LCB7XG4gICAgICAgICAgICBpbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbl8xLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYWmxiblJmYkdsemRHVnVaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaWFpsYm5SZmJHbHpkR1Z1WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJSVUU3U1VGTFJTeDFRa0ZCV1N4WFFVRjNRaXhGUVVGRkxGTkJRV2xDTzFGQlEzSkVMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZCTzFGQlF6bENMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZCTzFGQlF6RkNMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJRVHRKUVVOc1F5eERRVUZETzBsQlJVUXNLMEpCUVU4c1IwRkJVRHRSUVVORkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVUU3U1VGRGFFVXNRMEZCUXp0SlFVVkVMR3REUVVGVkxFZEJRVlk3VVVGRFJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZCTzBsQlEyNUZMRU5CUVVNN1NVRkZSQ3cwUWtGQk5FSTdTVUZGTlVJc1kwRkJZenRKUVVOa0xIZERRVUZuUWl4SFFVRm9RaXhWUVVGcFFpeFBRVUZuUWp0UlFVTXZRaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZCTzBsQlEzSkRMRU5CUVVNN1NVRkZSQ3hqUVVGak8wbEJRMlFzTWtOQlFXMUNMRWRCUVc1Q0xGVkJRVzlDTEU5QlFXZENPMUZCUTJ4RExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdTVUZEZUVNc1EwRkJRenRKUVVWRUxHMURRVUZYTEVkQlFWZ3NWVUZCV1N4TFFVRlpPMUZCUTNSQ0xFbEJRVTBzWVVGQllTeEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRVHRSUVVONFF5eExRVUZ6UWl4VlFVRmhMRVZCUVdJc1MwRkJRU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZpTEdOQlFXRXNSVUZCWWl4SlFVRmhMRVZCUVVVN1dVRkJhRU1zU1VGQlRTeFBRVUZQTEZOQlFVRTdXVUZEYUVJc1NVRkJTU3hoUVVGaExFTkJRVU1zTWtKQlFUSkNMRVZCUVVVN1owSkJRemRETEUxQlFVczdZVUZEVGp0cFFrRkJUVHRuUWtGRFRDeFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGQk8yRkJRMjVETzFOQlEwWTdTVUZEU0N4RFFVRkRPMGxCUlVRc2MwSkJRVWtzYlVOQlFWRTdZVUZCV2p0WlFVTkZMRTlCUVU4c1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTenRuUWtGRGVrUXNTVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJRVHRuUWtGRGRFUXNUMEZCVHl4VFFVRlRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVUU3V1VGRGNrVXNRMEZCUXl4RFFVRkRMRU5CUVVFN1VVRkRTaXhEUVVGRE96czdUMEZCUVR0SlFVTklMRzlDUVVGRE8wRkJRVVFzUTBGQlF5eEJRV2hFUkN4SlFXZEVRenM3UVVGRlJDeHhRa0ZCY1VJc1MwRkJXVHRKUVVNdlFpeEpRVUZKTERaQ1FVRTJRaXhKUVVGSkxFdEJRVXNzUlVGQlJUdFJRVU14UXl4UFFVRlBMRXRCUVVzc1EwRkJRVHRMUVVOaU8xTkJRVTA3VVVGRFJ5eEpRVUZCTERKRVFVRjNRaXhEUVVGVk8xRkJRekZETEU5QlFVOHNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRE1VSXNNa0pCUVRKQ0xFVkJRVVVzUzBGQlN6dFpRVU5zUXl4M1FrRkJkMEk3WjBKQlEzUkNMRWxCUVVrc1EwRkJReXd5UWtGQk1rSXNSMEZCUnl4SlFVRkpMRU5CUVVFN1owSkJRM1pETERCQ1FVRjNRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUVR0WlFVTnlReXhEUVVGRE8xTkJRMFlzUTBGQlF5eERRVUZCTzB0QlEwZzdRVUZEU0N4RFFVRkRJbjA9IiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7IGJsZXNzRGVmaW5pdGlvbiB9IGZyb20gXCIuL2RlZmluaXRpb25cIjtcbnZhciBNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9kdWxlKGFwcGxpY2F0aW9uLCBkZWZpbml0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gYmxlc3NEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgICAgICB0aGlzLmNvbnRleHRzQnlTY29wZSA9IG5ldyBXZWFrTWFwO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZENvbnRleHRzID0gbmV3IFNldDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vZHVsZS5wcm90b3R5cGUsIFwiaWRlbnRpZmllclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5pZGVudGlmaWVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kdWxlLnByb3RvdHlwZSwgXCJjb250cm9sbGVyQ29uc3RydWN0b3JcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24uY29udHJvbGxlckNvbnN0cnVjdG9yO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kdWxlLnByb3RvdHlwZSwgXCJjb250ZXh0c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jb25uZWN0ZWRDb250ZXh0cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1vZHVsZS5wcm90b3R5cGUuY29ubmVjdENvbnRleHRGb3JTY29wZSA9IGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuZmV0Y2hDb250ZXh0Rm9yU2NvcGUoc2NvcGUpO1xuICAgICAgICB0aGlzLmNvbm5lY3RlZENvbnRleHRzLmFkZChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5jb25uZWN0KCk7XG4gICAgfTtcbiAgICBNb2R1bGUucHJvdG90eXBlLmRpc2Nvbm5lY3RDb250ZXh0Rm9yU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHRzQnlTY29wZS5nZXQoc2NvcGUpO1xuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWRDb250ZXh0cy5kZWxldGUoY29udGV4dCk7XG4gICAgICAgICAgICBjb250ZXh0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTW9kdWxlLnByb3RvdHlwZS5mZXRjaENvbnRleHRGb3JTY29wZSA9IGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dHNCeVNjb3BlLmdldChzY29wZSk7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRoaXMsIHNjb3BlKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHNCeVNjb3BlLnNldChzY29wZSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfTtcbiAgICByZXR1cm4gTW9kdWxlO1xufSgpKTtcbmV4cG9ydCB7IE1vZHVsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYlc5a2RXeGxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyMXZaSFZzWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkRRU3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEUxQlFVMHNWMEZCVnl4RFFVRkJPMEZCUlc1RExFOUJRVThzUlVGQll5eGxRVUZsTEVWQlFVVXNUVUZCVFN4alFVRmpMRU5CUVVFN1FVRkhNVVE3U1VGTlJTeG5Ra0ZCV1N4WFFVRjNRaXhGUVVGRkxGVkJRWE5DTzFGQlF6RkVMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZCTzFGQlF6bENMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzWlVGQlpTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkJPMUZCUXpkRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NTVUZCU1N4UFFVRlBMRU5CUVVFN1VVRkRiRU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZCTzBsQlEyeERMRU5CUVVNN1NVRkZSQ3h6UWtGQlNTdzRRa0ZCVlR0aFFVRmtPMWxCUTBVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUVR0UlFVTnVReXhEUVVGRE96czdUMEZCUVR0SlFVVkVMSE5DUVVGSkxIbERRVUZ4UWp0aFFVRjZRanRaUVVORkxFOUJRVThzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4eFFrRkJjVUlzUTBGQlFUdFJRVU01UXl4RFFVRkRPenM3VDBGQlFUdEpRVVZFTEhOQ1FVRkpMRFJDUVVGUk8yRkJRVm83V1VGRFJTeFBRVUZQTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVFN1VVRkRNME1zUTBGQlF6czdPMDlCUVVFN1NVRkZSQ3gxUTBGQmMwSXNSMEZCZEVJc1ZVRkJkVUlzUzBGQldUdFJRVU5xUXl4SlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VVVGRGFFUXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRSUVVOdVF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVFN1NVRkRia0lzUTBGQlF6dEpRVVZFTERCRFFVRjVRaXhIUVVGNlFpeFZRVUV3UWl4TFFVRlpPMUZCUTNCRExFbEJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZCTzFGQlF5OURMRWxCUVVrc1QwRkJUeXhGUVVGRk8xbEJRMWdzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUVR0WlFVTjBReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVRTdVMEZEY2tJN1NVRkRTQ3hEUVVGRE8wbEJSVThzY1VOQlFXOUNMRWRCUVRWQ0xGVkJRVFpDTEV0QlFWazdVVUZEZGtNc1NVRkJTU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VVVGRE4wTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOYUxFOUJRVThzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVUU3V1VGRGJFTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkJPMU5CUTNwRE8xRkJRMFFzVDBGQlR5eFBRVUZQTEVOQlFVRTdTVUZEYUVJc1EwRkJRenRKUVVOSUxHRkJRVU03UVVGQlJDeERRVUZETEVGQkwwTkVMRWxCSzBOREluMD0iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tIFwiLi9tb2R1bGVcIjtcbmltcG9ydCB7IE11bHRpbWFwIH0gZnJvbSBcIkBzdGltdWx1cy9tdWx0aW1hcFwiO1xuaW1wb3J0IHsgU2NvcGVPYnNlcnZlciB9IGZyb20gXCIuL3Njb3BlX29ic2VydmVyXCI7XG52YXIgUm91dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJvdXRlcihhcHBsaWNhdGlvbikge1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG4gICAgICAgIHRoaXMuc2NvcGVPYnNlcnZlciA9IG5ldyBTY29wZU9ic2VydmVyKHRoaXMuZWxlbWVudCwgdGhpcy5zY2hlbWEsIHRoaXMpO1xuICAgICAgICB0aGlzLnNjb3Blc0J5SWRlbnRpZmllciA9IG5ldyBNdWx0aW1hcDtcbiAgICAgICAgdGhpcy5tb2R1bGVzQnlJZGVudGlmaWVyID0gbmV3IE1hcDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJvdXRlci5wcm90b3R5cGUsIFwiZWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24uZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJvdXRlci5wcm90b3R5cGUsIFwic2NoZW1hXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBsaWNhdGlvbi5zY2hlbWE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSb3V0ZXIucHJvdG90eXBlLCBcImNvbnRyb2xsZXJBdHRyaWJ1dGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5jb250cm9sbGVyQXR0cmlidXRlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUm91dGVyLnByb3RvdHlwZSwgXCJtb2R1bGVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIudmFsdWVzKCkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUm91dGVyLnByb3RvdHlwZSwgXCJjb250ZXh0c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKGNvbnRleHRzLCBtb2R1bGUpIHsgcmV0dXJuIGNvbnRleHRzLmNvbmNhdChtb2R1bGUuY29udGV4dHMpOyB9LCBbXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFJvdXRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NvcGVPYnNlcnZlci5zdGFydCgpO1xuICAgIH07XG4gICAgUm91dGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjb3BlT2JzZXJ2ZXIuc3RvcCgpO1xuICAgIH07XG4gICAgUm91dGVyLnByb3RvdHlwZS5sb2FkRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIChkZWZpbml0aW9uKSB7XG4gICAgICAgIHRoaXMudW5sb2FkSWRlbnRpZmllcihkZWZpbml0aW9uLmlkZW50aWZpZXIpO1xuICAgICAgICB2YXIgbW9kdWxlID0gbmV3IE1vZHVsZSh0aGlzLmFwcGxpY2F0aW9uLCBkZWZpbml0aW9uKTtcbiAgICAgICAgdGhpcy5jb25uZWN0TW9kdWxlKG1vZHVsZSk7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLnVubG9hZElkZW50aWZpZXIgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xuICAgICAgICB2YXIgbW9kdWxlID0gdGhpcy5tb2R1bGVzQnlJZGVudGlmaWVyLmdldChpZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKG1vZHVsZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0TW9kdWxlKG1vZHVsZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJvdXRlci5wcm90b3R5cGUuZ2V0Q29udGV4dEZvckVsZW1lbnRBbmRJZGVudGlmaWVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IHRoaXMubW9kdWxlc0J5SWRlbnRpZmllci5nZXQoaWRlbnRpZmllcik7XG4gICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGUuY29udGV4dHMuZmluZChmdW5jdGlvbiAoY29udGV4dCkgeyByZXR1cm4gY29udGV4dC5lbGVtZW50ID09IGVsZW1lbnQ7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBFcnJvciBoYW5kbGVyIGRlbGVnYXRlXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBSb3V0ZXIucHJvdG90eXBlLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBtZXNzYWdlLCBkZXRhaWwpIHtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5oYW5kbGVFcnJvcihlcnJvciwgbWVzc2FnZSwgZGV0YWlsKTtcbiAgICB9O1xuICAgIC8vIFNjb3BlIG9ic2VydmVyIGRlbGVnYXRlXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBSb3V0ZXIucHJvdG90eXBlLnNjb3BlQ29ubmVjdGVkID0gZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyLmFkZChzY29wZS5pZGVudGlmaWVyLCBzY29wZSk7XG4gICAgICAgIHZhciBtb2R1bGUgPSB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZ2V0KHNjb3BlLmlkZW50aWZpZXIpO1xuICAgICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgICAgICBtb2R1bGUuY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBAaGlkZGVuICovXG4gICAgUm91dGVyLnByb3RvdHlwZS5zY29wZURpc2Nvbm5lY3RlZCA9IGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3Blc0J5SWRlbnRpZmllci5kZWxldGUoc2NvcGUuaWRlbnRpZmllciwgc2NvcGUpO1xuICAgICAgICB2YXIgbW9kdWxlID0gdGhpcy5tb2R1bGVzQnlJZGVudGlmaWVyLmdldChzY29wZS5pZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKG1vZHVsZSkge1xuICAgICAgICAgICAgbW9kdWxlLmRpc2Nvbm5lY3RDb250ZXh0Rm9yU2NvcGUoc2NvcGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBNb2R1bGVzXG4gICAgUm91dGVyLnByb3RvdHlwZS5jb25uZWN0TW9kdWxlID0gZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuc2V0KG1vZHVsZS5pZGVudGlmaWVyLCBtb2R1bGUpO1xuICAgICAgICB2YXIgc2NvcGVzID0gdGhpcy5zY29wZXNCeUlkZW50aWZpZXIuZ2V0VmFsdWVzRm9yS2V5KG1vZHVsZS5pZGVudGlmaWVyKTtcbiAgICAgICAgc2NvcGVzLmZvckVhY2goZnVuY3Rpb24gKHNjb3BlKSB7IHJldHVybiBtb2R1bGUuY29ubmVjdENvbnRleHRGb3JTY29wZShzY29wZSk7IH0pO1xuICAgIH07XG4gICAgUm91dGVyLnByb3RvdHlwZS5kaXNjb25uZWN0TW9kdWxlID0gZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICB0aGlzLm1vZHVsZXNCeUlkZW50aWZpZXIuZGVsZXRlKG1vZHVsZS5pZGVudGlmaWVyKTtcbiAgICAgICAgdmFyIHNjb3BlcyA9IHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyLmdldFZhbHVlc0ZvcktleShtb2R1bGUuaWRlbnRpZmllcik7XG4gICAgICAgIHNjb3Blcy5mb3JFYWNoKGZ1bmN0aW9uIChzY29wZSkgeyByZXR1cm4gbW9kdWxlLmRpc2Nvbm5lY3RDb250ZXh0Rm9yU2NvcGUoc2NvcGUpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSb3V0ZXI7XG59KCkpO1xuZXhwb3J0IHsgUm91dGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbTkxZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNKdmRYUmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGSFFTeFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTFCUVUwc1ZVRkJWU3hEUVVGQk8wRkJRMnBETEU5QlFVOHNSVUZCUlN4UlFVRlJMRVZCUVVVc1RVRkJUU3h2UWtGQmIwSXNRMEZCUVR0QlFVYzNReXhQUVVGUExFVkJRVVVzWVVGQllTeEZRVUY1UWl4TlFVRk5MR3RDUVVGclFpeERRVUZCTzBGQlJYWkZPMGxCVFVVc1owSkJRVmtzVjBGQmQwSTdVVUZEYkVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTEVOQlFVRTdVVUZET1VJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVFN1VVRkRka1VzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZCTzFGQlEzUkRMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJRVHRKUVVOd1F5eERRVUZETzBsQlJVUXNjMEpCUVVrc01rSkJRVTg3WVVGQldEdFpRVU5GTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVUU3VVVGRGFrTXNRMEZCUXpzN08wOUJRVUU3U1VGRlJDeHpRa0ZCU1N3d1FrRkJUVHRoUVVGV08xbEJRMFVzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJRVHRSUVVOb1F5eERRVUZET3pzN1QwRkJRVHRKUVVWRUxITkNRVUZKTEhWRFFVRnRRanRoUVVGMlFqdFpRVU5GTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXh0UWtGQmJVSXNRMEZCUVR0UlFVTjRReXhEUVVGRE96czdUMEZCUVR0SlFVVkVMSE5DUVVGSkxESkNRVUZQTzJGQlFWZzdXVUZEUlN4UFFVRlBMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVRTdVVUZEZEVRc1EwRkJRenM3TzA5QlFVRTdTVUZGUkN4elFrRkJTU3cwUWtGQlVUdGhRVUZhTzFsQlEwVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZETEZGQlFWRXNSVUZCUlN4TlFVRk5MRWxCUVVzc1QwRkJRU3hSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJhRU1zUTBGQlowTXNSVUZCUlN4RlFVRmxMRU5CUVVNc1EwRkJRVHRSUVVOeVJ5eERRVUZET3pzN1QwRkJRVHRKUVVWRUxITkNRVUZMTEVkQlFVdzdVVUZEUlN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZCTzBsQlF6VkNMRU5CUVVNN1NVRkZSQ3h4UWtGQlNTeEhRVUZLTzFGQlEwVXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlFUdEpRVU16UWl4RFFVRkRPMGxCUlVRc0swSkJRV01zUjBGQlpDeFZRVUZsTEZWQlFYTkNPMUZCUTI1RExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVRTdVVUZETlVNc1NVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlFUdFJRVU4yUkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZCTzBsQlF6VkNMRU5CUVVNN1NVRkZSQ3hwUTBGQlowSXNSMEZCYUVJc1ZVRkJhVUlzVlVGQmEwSTdVVUZEYWtNc1NVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUVR0UlFVTjJSQ3hKUVVGSkxFMUJRVTBzUlVGQlJUdFpRVU5XTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0VFFVTTVRanRKUVVOSUxFTkJRVU03U1VGRlJDeHJSRUZCYVVNc1IwRkJha01zVlVGQmEwTXNUMEZCWjBJc1JVRkJSU3hWUVVGclFqdFJRVU53UlN4SlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZCTzFGQlEzWkVMRWxCUVVrc1RVRkJUU3hGUVVGRk8xbEJRMVlzVDBGQlR5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGQkxFOUJRVThzU1VGQlNTeFBRVUZCTEU5QlFVOHNRMEZCUXl4UFFVRlBMRWxCUVVrc1QwRkJUeXhGUVVFeFFpeERRVUV3UWl4RFFVRkRMRU5CUVVFN1UwRkRia1U3U1VGRFNDeERRVUZETzBsQlJVUXNlVUpCUVhsQ08wbEJSWHBDTEdOQlFXTTdTVUZEWkN3MFFrRkJWeXhIUVVGWUxGVkJRVmtzUzBGQldTeEZRVUZGTEU5QlFXVXNSVUZCUlN4TlFVRlhPMUZCUTNCRUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVRTdTVUZEZEVRc1EwRkJRenRKUVVWRUxEQkNRVUV3UWp0SlFVVXhRaXhqUVVGak8wbEJRMlFzSzBKQlFXTXNSMEZCWkN4VlFVRmxMRXRCUVZrN1VVRkRla0lzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGQk8xRkJRM0JFTEVsQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZCTzFGQlF6ZEVMRWxCUVVrc1RVRkJUU3hGUVVGRk8xbEJRMVlzVFVGQlRTeERRVUZETEhOQ1FVRnpRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZCTzFOQlEzSkRPMGxCUTBnc1EwRkJRenRKUVVWRUxHTkJRV003U1VGRFpDeHJRMEZCYVVJc1IwRkJha0lzVlVGQmEwSXNTMEZCV1R0UlFVTTFRaXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVFN1VVRkRka1FzU1VGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVUU3VVVGRE4wUXNTVUZCU1N4TlFVRk5MRVZCUVVVN1dVRkRWaXhOUVVGTkxFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VTBGRGVFTTdTVUZEU0N4RFFVRkRPMGxCUlVRc1ZVRkJWVHRKUVVWR0xEaENRVUZoTEVkQlFYSkNMRlZCUVhOQ0xFMUJRV003VVVGRGJFTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZCTzFGQlEzWkVMRWxCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhsUVVGbExFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkJPMUZCUTNwRkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUVN4TFFVRkxMRWxCUVVrc1QwRkJRU3hOUVVGTkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRWEJETEVOQlFXOURMRU5CUVVNc1EwRkJRVHRKUVVNdlJDeERRVUZETzBsQlJVOHNhVU5CUVdkQ0xFZEJRWGhDTEZWQlFYbENMRTFCUVdNN1VVRkRja01zU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVFN1VVRkRiRVFzU1VGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVUU3VVVGRGVrVXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGQkxFdEJRVXNzU1VGQlNTeFBRVUZCTEUxQlFVMHNRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCZGtNc1EwRkJkVU1zUTBGQlF5eERRVUZCTzBsQlEyeEZMRU5CUVVNN1NVRkRTQ3hoUVVGRE8wRkJRVVFzUTBGQlF5eEJRWEpIUkN4SlFYRkhReUo5IiwiZXhwb3J0IHZhciBkZWZhdWx0U2NoZW1hID0ge1xuICAgIGNvbnRyb2xsZXJBdHRyaWJ1dGU6IFwiZGF0YS1jb250cm9sbGVyXCIsXG4gICAgYWN0aW9uQXR0cmlidXRlOiBcImRhdGEtYWN0aW9uXCIsXG4gICAgdGFyZ2V0QXR0cmlidXRlOiBcImRhdGEtdGFyZ2V0XCJcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMk5vWlcxaExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNOamFHVnRZUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGTlFTeE5RVUZOTEVOQlFVTXNTVUZCVFN4aFFVRmhMRWRCUVZjN1NVRkRia01zYlVKQlFXMUNMRVZCUVVVc2FVSkJRV2xDTzBsQlEzUkRMR1ZCUVdVc1JVRkJSU3hoUVVGaE8wbEJRemxDTEdWQlFXVXNSVUZCUlN4aFFVRmhPME5CUXk5Q0xFTkJRVUVpZlE9PSIsImltcG9ydCB7IERhdGFNYXAgfSBmcm9tIFwiLi9kYXRhX21hcFwiO1xuaW1wb3J0IHsgVGFyZ2V0U2V0IH0gZnJvbSBcIi4vdGFyZ2V0X3NldFwiO1xuaW1wb3J0IHsgYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG52YXIgU2NvcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NvcGUoc2NoZW1hLCBpZGVudGlmaWVyLCBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnRhcmdldHMgPSBuZXcgVGFyZ2V0U2V0KHRoaXMpO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRGF0YU1hcCh0aGlzKTtcbiAgICB9XG4gICAgU2NvcGUucHJvdG90eXBlLmZpbmRFbGVtZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRBbGxFbGVtZW50cyhzZWxlY3RvcilbMF07XG4gICAgfTtcbiAgICBTY29wZS5wcm90b3R5cGUuZmluZEFsbEVsZW1lbnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBoZWFkID0gdGhpcy5lbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpID8gW3RoaXMuZWxlbWVudF0gOiBbXTtcbiAgICAgICAgdmFyIHRhaWwgPSB0aGlzLmZpbHRlckVsZW1lbnRzKEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSk7XG4gICAgICAgIHJldHVybiBoZWFkLmNvbmNhdCh0YWlsKTtcbiAgICB9O1xuICAgIFNjb3BlLnByb3RvdHlwZS5maWx0ZXJFbGVtZW50cyA9IGZ1bmN0aW9uIChlbGVtZW50cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBfdGhpcy5jb250YWluc0VsZW1lbnQoZWxlbWVudCk7IH0pO1xuICAgIH07XG4gICAgU2NvcGUucHJvdG90eXBlLmNvbnRhaW5zRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QodGhpcy5jb250cm9sbGVyU2VsZWN0b3IpID09PSB0aGlzLmVsZW1lbnQ7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NvcGUucHJvdG90eXBlLCBcImNvbnRyb2xsZXJTZWxlY3RvclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlQ29udGFpbnNUb2tlbih0aGlzLnNjaGVtYS5jb250cm9sbGVyQXR0cmlidXRlLCB0aGlzLmlkZW50aWZpZXIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2NvcGU7XG59KCkpO1xuZXhwb3J0IHsgU2NvcGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMyTnZjR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjMk52Y0dVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRmxCUVZrc1EwRkJRVHRCUVVWd1F5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTFCUVUwc1kwRkJZeXhEUVVGQk8wRkJRM2hETEU5QlFVOHNSVUZCUlN3eVFrRkJNa0lzUlVGQlJTeE5RVUZOTEdGQlFXRXNRMEZCUVR0QlFVVjZSRHRKUVU5RkxHVkJRVmtzVFVGQll5eEZRVUZGTEZWQlFXdENMRVZCUVVVc1QwRkJaMEk3VVVGRE9VUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVUU3VVVGRGNFSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhWUVVGVkxFTkJRVUU3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVUU3VVVGRGRFSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUVR0UlFVTnNReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGQk8wbEJReTlDTEVOQlFVTTdTVUZGUkN3eVFrRkJWeXhIUVVGWUxGVkJRVmtzVVVGQlowSTdVVUZETVVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGQk8wbEJRekZETEVOQlFVTTdTVUZGUkN3clFrRkJaU3hIUVVGbUxGVkJRV2RDTEZGQlFXZENPMUZCUXpsQ0xFbEJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkJPMUZCUTJwRkxFbEJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRVHRSUVVOeVJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVUU3U1VGRE1VSXNRMEZCUXp0SlFVVkVMRGhDUVVGakxFZEJRV1FzVlVGQlpTeFJRVUZ0UWp0UlFVRnNReXhwUWtGRlF6dFJRVVJETEU5QlFVOHNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGQkxFOUJRVThzU1VGQlNTeFBRVUZCTEV0QlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVGRDTEVOQlFUWkNMRU5CUVVNc1EwRkJRVHRKUVVOc1JTeERRVUZETzBsQlJVUXNLMEpCUVdVc1IwRkJaaXhWUVVGblFpeFBRVUZuUWp0UlFVTTVRaXhQUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRVHRKUVVOc1JTeERRVUZETzBsQlJVUXNjMEpCUVZrc2NVTkJRV3RDTzJGQlFUbENPMWxCUTBVc1QwRkJUeXd5UWtGQk1rSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlFUdFJRVU4wUml4RFFVRkRPenM3VDBGQlFUdEpRVU5JTEZsQlFVTTdRVUZCUkN4RFFVRkRMRUZCY0VORUxFbEJiME5ESW4wPSIsImltcG9ydCB7IFNjb3BlIH0gZnJvbSBcIi4vc2NvcGVcIjtcbmltcG9ydCB7IFZhbHVlTGlzdE9ic2VydmVyIH0gZnJvbSBcIkBzdGltdWx1cy9tdXRhdGlvbi1vYnNlcnZlcnNcIjtcbnZhciBTY29wZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjb3BlT2JzZXJ2ZXIoZWxlbWVudCwgc2NoZW1hLCBkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLnZhbHVlTGlzdE9ic2VydmVyID0gbmV3IFZhbHVlTGlzdE9ic2VydmVyKHRoaXMuZWxlbWVudCwgdGhpcy5jb250cm9sbGVyQXR0cmlidXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5zY29wZXNCeUlkZW50aWZpZXJCeUVsZW1lbnQgPSBuZXcgV2Vha01hcDtcbiAgICAgICAgdGhpcy5zY29wZVJlZmVyZW5jZUNvdW50cyA9IG5ldyBXZWFrTWFwO1xuICAgIH1cbiAgICBTY29wZU9ic2VydmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52YWx1ZUxpc3RPYnNlcnZlci5zdGFydCgpO1xuICAgIH07XG4gICAgU2NvcGVPYnNlcnZlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52YWx1ZUxpc3RPYnNlcnZlci5zdG9wKCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2NvcGVPYnNlcnZlci5wcm90b3R5cGUsIFwiY29udHJvbGxlckF0dHJpYnV0ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmNvbnRyb2xsZXJBdHRyaWJ1dGU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIFZhbHVlIG9ic2VydmVyIGRlbGVnYXRlXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBTY29wZU9ic2VydmVyLnByb3RvdHlwZS5wYXJzZVZhbHVlRm9yVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0b2tlbi5lbGVtZW50LCBpZGVudGlmaWVyID0gdG9rZW4uY29udGVudDtcbiAgICAgICAgdmFyIHNjb3Blc0J5SWRlbnRpZmllciA9IHRoaXMuZmV0Y2hTY29wZXNCeUlkZW50aWZpZXJGb3JFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICB2YXIgc2NvcGUgPSBzY29wZXNCeUlkZW50aWZpZXIuZ2V0KGlkZW50aWZpZXIpO1xuICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICBzY29wZSA9IG5ldyBTY29wZSh0aGlzLnNjaGVtYSwgaWRlbnRpZmllciwgZWxlbWVudCk7XG4gICAgICAgICAgICBzY29wZXNCeUlkZW50aWZpZXIuc2V0KGlkZW50aWZpZXIsIHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgfTtcbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIFNjb3BlT2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRNYXRjaGVkVmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHJlZmVyZW5jZUNvdW50ID0gKHRoaXMuc2NvcGVSZWZlcmVuY2VDb3VudHMuZ2V0KHZhbHVlKSB8fCAwKSArIDE7XG4gICAgICAgIHRoaXMuc2NvcGVSZWZlcmVuY2VDb3VudHMuc2V0KHZhbHVlLCByZWZlcmVuY2VDb3VudCk7XG4gICAgICAgIGlmIChyZWZlcmVuY2VDb3VudCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLnNjb3BlQ29ubmVjdGVkKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBTY29wZU9ic2VydmVyLnByb3RvdHlwZS5lbGVtZW50VW5tYXRjaGVkVmFsdWUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHJlZmVyZW5jZUNvdW50ID0gdGhpcy5zY29wZVJlZmVyZW5jZUNvdW50cy5nZXQodmFsdWUpO1xuICAgICAgICBpZiAocmVmZXJlbmNlQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGVSZWZlcmVuY2VDb3VudHMuc2V0KHZhbHVlLCByZWZlcmVuY2VDb3VudCAtIDEpO1xuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZUNvdW50ID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLnNjb3BlRGlzY29ubmVjdGVkKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2NvcGVPYnNlcnZlci5wcm90b3R5cGUuZmV0Y2hTY29wZXNCeUlkZW50aWZpZXJGb3JFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNjb3Blc0J5SWRlbnRpZmllciA9IHRoaXMuc2NvcGVzQnlJZGVudGlmaWVyQnlFbGVtZW50LmdldChlbGVtZW50KTtcbiAgICAgICAgaWYgKCFzY29wZXNCeUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHNjb3Blc0J5SWRlbnRpZmllciA9IG5ldyBNYXA7XG4gICAgICAgICAgICB0aGlzLnNjb3Blc0J5SWRlbnRpZmllckJ5RWxlbWVudC5zZXQoZWxlbWVudCwgc2NvcGVzQnlJZGVudGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NvcGVzQnlJZGVudGlmaWVyO1xuICAgIH07XG4gICAgcmV0dXJuIFNjb3BlT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgU2NvcGVPYnNlcnZlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJOdmNHVmZiMkp6WlhKMlpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmMyTnZjR1ZmYjJKelpYSjJaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlJVRXNUMEZCVHl4RlFVRkZMRXRCUVVzc1JVRkJSU3hOUVVGTkxGTkJRVk1zUTBGQlFUdEJRVU12UWl4UFFVRlBMRVZCUVZNc2FVSkJRV2xDTEVWQlFUWkNMRTFCUVUwc09FSkJRVGhDTEVOQlFVRTdRVUZQYkVjN1NVRlJSU3gxUWtGQldTeFBRVUZuUWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hSUVVFclFqdFJRVU16UlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlFUdFJRVU4wUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlFUdFJRVU53UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlFUdFJRVU40UWl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRVHRSUVVNMVJpeEpRVUZKTEVOQlFVTXNNa0pCUVRKQ0xFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVRTdVVUZET1VNc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4SFFVRkhMRWxCUVVrc1QwRkJUeXhEUVVGQk8wbEJRM3BETEVOQlFVTTdTVUZGUkN3MlFrRkJTeXhIUVVGTU8xRkJRMFVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZCTzBsQlEyaERMRU5CUVVNN1NVRkZSQ3cwUWtGQlNTeEhRVUZLTzFGQlEwVXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkJPMGxCUXk5Q0xFTkJRVU03U1VGRlJDeHpRa0ZCU1N3NFEwRkJiVUk3WVVGQmRrSTdXVUZEUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVFN1VVRkRlRU1zUTBGQlF6czdPMDlCUVVFN1NVRkZSQ3d3UWtGQk1FSTdTVUZGTVVJc1kwRkJZenRKUVVOa0xEQkRRVUZyUWl4SFFVRnNRaXhWUVVGdFFpeExRVUZaTzFGQlEzSkNMRWxCUVVFc2RVSkJRVThzUlVGQlJTd3dRa0ZCYlVJc1EwRkJWVHRSUVVNNVF5eEpRVUZOTEd0Q1FVRnJRaXhIUVVGSExFbEJRVWtzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdFJRVVV4UlN4SlFVRkpMRXRCUVVzc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVUU3VVVGRE9VTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRaUVVOV0xFdEJRVXNzUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUVR0WlFVTnVSQ3hyUWtGQmEwSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZCTzFOQlF6RkRPMUZCUlVRc1QwRkJUeXhMUVVGTExFTkJRVUU3U1VGRFpDeERRVUZETzBsQlJVUXNZMEZCWXp0SlFVTmtMREpEUVVGdFFpeEhRVUZ1UWl4VlFVRnZRaXhQUVVGblFpeEZRVUZGTEV0QlFWazdVVUZEYUVRc1NVRkJUU3hqUVVGakxFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdFJRVU4wUlN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlFUdFJRVU53UkN4SlFVRkpMR05CUVdNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGRrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdVMEZEY0VNN1NVRkRTQ3hEUVVGRE8wbEJSVVFzWTBGQll6dEpRVU5rTERaRFFVRnhRaXhIUVVGeVFpeFZRVUZ6UWl4UFFVRm5RaXhGUVVGRkxFdEJRVms3VVVGRGJFUXNTVUZCVFN4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlFUdFJRVU16UkN4SlFVRkpMR05CUVdNc1JVRkJSVHRaUVVOc1FpeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4alFVRmpMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVUU3V1VGRGVFUXNTVUZCU1N4alFVRmpMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU4yUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8yRkJRM1pETzFOQlEwWTdTVUZEU0N4RFFVRkRPMGxCUlU4c2VVUkJRV2xETEVkQlFYcERMRlZCUVRCRExFOUJRV2RDTzFGQlEzaEVMRWxCUVVrc2EwSkJRV3RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMREpDUVVFeVFpeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRSUVVOMFJTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVU3V1VGRGRrSXNhMEpCUVd0Q0xFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVRTdXVUZETlVJc1NVRkJTU3hEUVVGRExESkNRVUV5UWl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzYTBKQlFXdENMRU5CUVVNc1EwRkJRVHRUUVVOc1JUdFJRVU5FTEU5QlFVOHNhMEpCUVd0Q0xFTkJRVUU3U1VGRE0wSXNRMEZCUXp0SlFVTklMRzlDUVVGRE8wRkJRVVFzUTBGQlF5eEJRWHBGUkN4SlFYbEZReUo5IiwiLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVWYWx1ZUNvbnRhaW5zVG9rZW4oYXR0cmlidXRlTmFtZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gXCJbXCIgKyBhdHRyaWJ1dGVOYW1lICsgXCJ+PVxcXCJcIiArIHRva2VuICsgXCJcXFwiXVwiO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJWc1pXTjBiM0p6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM05sYkdWamRHOXljeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeGpRVUZqTzBGQlEyUXNUVUZCVFN4elEwRkJjME1zWVVGQmNVSXNSVUZCUlN4TFFVRmhPMGxCUXpsRkxFOUJRVThzVFVGQlNTeGhRVUZoTEZsQlFVMHNTMEZCU3l4UlFVRkpMRU5CUVVFN1FVRkRla01zUTBGQlF5SjkiLCIvKiogQGhpZGRlbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVRhcmdldFByb3BlcnRpZXMoY29uc3RydWN0b3IpIHtcbiAgICB2YXIgcHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIHZhciB0YXJnZXROYW1lcyA9IGdldFRhcmdldE5hbWVzRm9yQ29uc3RydWN0b3IoY29uc3RydWN0b3IpO1xuICAgIHRhcmdldE5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gZGVmaW5lTGlua2VkUHJvcGVydGllcyhwcm90b3R5cGUsIChfYSA9IHt9LFxuICAgICAgICAgICAgX2FbbmFtZSArIFwiVGFyZ2V0XCJdID0ge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXRzLmZpbmQobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHRhcmdldCBlbGVtZW50IFxcXCJcIiArIHRoaXMuaWRlbnRpZmllciArIFwiLlwiICsgbmFtZSArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfYVtuYW1lICsgXCJUYXJnZXRzXCJdID0ge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRzLmZpbmRBbGwobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9hW1wiaGFzXCIgKyBjYXBpdGFsaXplKG5hbWUpICsgXCJUYXJnZXRcIl0gPSB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRhcmdldHMuaGFzKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfYSkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0VGFyZ2V0TmFtZXNGb3JDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHZhciBhbmNlc3RvcnMgPSBnZXRBbmNlc3RvcnNGb3JDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYW5jZXN0b3JzLnJlZHVjZShmdW5jdGlvbiAodGFyZ2V0TmFtZXMsIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGdldE93blRhcmdldE5hbWVzRm9yQ29uc3RydWN0b3IoY29uc3RydWN0b3IpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIHRhcmdldE5hbWVzLmFkZChuYW1lKTsgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXROYW1lcztcbiAgICB9LCBuZXcgU2V0KSk7XG59XG5mdW5jdGlvbiBnZXRBbmNlc3RvcnNGb3JDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHZhciBhbmNlc3RvcnMgPSBbXTtcbiAgICB3aGlsZSAoY29uc3RydWN0b3IpIHtcbiAgICAgICAgYW5jZXN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgICAgICBjb25zdHJ1Y3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb25zdHJ1Y3Rvcik7XG4gICAgfVxuICAgIHJldHVybiBhbmNlc3RvcnM7XG59XG5mdW5jdGlvbiBnZXRPd25UYXJnZXROYW1lc0ZvckNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSB7XG4gICAgdmFyIGRlZmluaXRpb24gPSBjb25zdHJ1Y3RvcltcInRhcmdldHNcIl07XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikgPyBkZWZpbml0aW9uIDogW107XG59XG5mdW5jdGlvbiBkZWZpbmVMaW5rZWRQcm9wZXJ0aWVzKG9iamVjdCwgcHJvcGVydGllcykge1xuICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKCEobmFtZSBpbiBvYmplY3QpKSB7XG4gICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BlcnRpZXNbbmFtZV07XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY2FwaXRhbGl6ZShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdGeVoyVjBYM0J5YjNCbGNuUnBaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZkR0Z5WjJWMFgzQnliM0JsY25ScFpYTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUlVFc1kwRkJZenRCUVVOa0xFMUJRVTBzYVVOQlFXbERMRmRCUVhGQ08wbEJRekZFTEVsQlFVMHNVMEZCVXl4SFFVRkhMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVUU3U1VGRGRrTXNTVUZCVFN4WFFVRlhMRWRCUVVjc05FSkJRVFJDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVFN1NVRkROMFFzVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkJMRWxCUVVrN08xRkJRVWtzVDBGQlFTeHpRa0ZCYzBJc1EwRkJReXhUUVVGVE8xbEJRekZFTEVkQlFVa3NTVUZCU1N4WFFVRlJMRWxCUVVjN1owSkJRMnBDTEVkQlFVYzdiMEpCUTBRc1NVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVUU3YjBKQlEzUkRMRWxCUVVrc1RVRkJUU3hGUVVGRk8zZENRVU5XTEU5QlFVOHNUVUZCVFN4RFFVRkJPM0ZDUVVOa08zbENRVUZOTzNkQ1FVTk1MRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zT0VKQlFUSkNMRWxCUVVrc1EwRkJReXhWUVVGVkxGTkJRVWtzU1VGQlNTeFBRVUZITEVOQlFVTXNRMEZCUVR0eFFrRkRka1U3WjBKQlEwZ3NRMEZCUXp0aFFVTkdPMWxCUTBRc1IwRkJTU3hKUVVGSkxGbEJRVk1zU1VGQlJ6dG5Ra0ZEYkVJc1IwRkJSenR2UWtGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZCTzJkQ1FVTnVReXhEUVVGRE8yRkJRMFk3V1VGRFJDeEhRVUZETEZGQlFVMHNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGUkxFbEJRVWM3WjBKQlEyaERMRWRCUVVjN2IwSkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlFUdG5Ra0ZETDBJc1EwRkJRenRoUVVOR08yZENRVU5FTzBsQmNrSXdRaXhEUVhGQ01VSXNRMEZCUXl4RFFVRkJPMEZCUTB3c1EwRkJRenRCUVVWRUxITkRRVUZ6UXl4WFFVRnhRanRKUVVONlJDeEpRVUZOTEZOQlFWTXNSMEZCUnl3d1FrRkJNRUlzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUVR0SlFVTjZSQ3hQUVVGUExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGRExGZEJRVmNzUlVGQlJTeFhRVUZYTzFGQlF6RkVMQ3RDUVVFclFpeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGQkxFbEJRVWtzU1VGQlNTeFBRVUZCTEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRWEpDTEVOQlFYRkNMRU5CUVVNc1EwRkJRVHRSUVVOdVJpeFBRVUZQTEZkQlFWY3NRMEZCUVR0SlFVTndRaXhEUVVGRExFVkJRVVVzU1VGQlNTeEhRVUZyUWl4RFFVRkRMRU5CUVVNc1EwRkJRVHRCUVVNM1FpeERRVUZETzBGQlJVUXNiME5CUVc5RExGZEJRWEZDTzBsQlEzWkVMRWxCUVUwc1UwRkJVeXhIUVVGbExFVkJRVVVzUTBGQlFUdEpRVU5vUXl4UFFVRlBMRmRCUVZjc1JVRkJSVHRSUVVOc1FpeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGQk8xRkJRek5DTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZCTzB0QlEycEVPMGxCUTBRc1QwRkJUeXhUUVVGVExFTkJRVUU3UVVGRGJFSXNRMEZCUXp0QlFVVkVMSGxEUVVGNVF5eFhRVUZ4UWp0SlFVTTFSQ3hKUVVGTkxGVkJRVlVzUjBGQlNTeFhRVUZ0UWl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGQk8wbEJRMnhFTEU5QlFVOHNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVUU3UVVGRGNFUXNRMEZCUXp0QlFVVkVMR2REUVVGblF5eE5RVUZYTEVWQlFVVXNWVUZCYVVNN1NVRkROVVVzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlF5eEpRVUZKTzFGQlEyNURMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeE5RVUZOTEVOQlFVTXNSVUZCUlR0WlFVTnlRaXhKUVVGTkxGVkJRVlVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVFN1dVRkRia01zVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZCTzFOQlEyaEVPMGxCUTBnc1EwRkJReXhEUVVGRExFTkJRVUU3UVVGRFNpeERRVUZETzBGQlJVUXNiMEpCUVc5Q0xFbEJRVms3U1VGRE9VSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVRTdRVUZEY2tRc1EwRkJReUo5IiwiaW1wb3J0IHsgYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG52YXIgVGFyZ2V0U2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhcmdldFNldChzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYXJnZXRTZXQucHJvdG90eXBlLCBcImVsZW1lbnRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYXJnZXRTZXQucHJvdG90eXBlLCBcImlkZW50aWZpZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmlkZW50aWZpZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYXJnZXRTZXQucHJvdG90eXBlLCBcInNjaGVtYVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuc2NoZW1hO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBUYXJnZXRTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh0YXJnZXROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmQodGFyZ2V0TmFtZSkgIT0gbnVsbDtcbiAgICB9O1xuICAgIFRhcmdldFNldC5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRhcmdldE5hbWVzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB0YXJnZXROYW1lc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3JGb3JUYXJnZXROYW1lcyh0YXJnZXROYW1lcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmZpbmRFbGVtZW50KHNlbGVjdG9yKTtcbiAgICB9O1xuICAgIFRhcmdldFNldC5wcm90b3R5cGUuZmluZEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRhcmdldE5hbWVzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB0YXJnZXROYW1lc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHRoaXMuZ2V0U2VsZWN0b3JGb3JUYXJnZXROYW1lcyh0YXJnZXROYW1lcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmZpbmRBbGxFbGVtZW50cyhzZWxlY3Rvcik7XG4gICAgfTtcbiAgICBUYXJnZXRTZXQucHJvdG90eXBlLmdldFNlbGVjdG9yRm9yVGFyZ2V0TmFtZXMgPSBmdW5jdGlvbiAodGFyZ2V0TmFtZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRhcmdldE5hbWVzLm1hcChmdW5jdGlvbiAodGFyZ2V0TmFtZSkgeyByZXR1cm4gX3RoaXMuZ2V0U2VsZWN0b3JGb3JUYXJnZXROYW1lKHRhcmdldE5hbWUpOyB9KS5qb2luKFwiLCBcIik7XG4gICAgfTtcbiAgICBUYXJnZXRTZXQucHJvdG90eXBlLmdldFNlbGVjdG9yRm9yVGFyZ2V0TmFtZSA9IGZ1bmN0aW9uICh0YXJnZXROYW1lKSB7XG4gICAgICAgIHZhciB0YXJnZXREZXNjcmlwdG9yID0gdGhpcy5pZGVudGlmaWVyICsgXCIuXCIgKyB0YXJnZXROYW1lO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVDb250YWluc1Rva2VuKHRoaXMuc2NoZW1hLnRhcmdldEF0dHJpYnV0ZSwgdGFyZ2V0RGVzY3JpcHRvcik7XG4gICAgfTtcbiAgICByZXR1cm4gVGFyZ2V0U2V0O1xufSgpKTtcbmV4cG9ydCB7IFRhcmdldFNldCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdGeVoyVjBYM05sZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTkwWVhKblpYUmZjMlYwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVVkJMRTlCUVU4c1JVRkJSU3d5UWtGQk1rSXNSVUZCUlN4TlFVRk5MR0ZCUVdFc1EwRkJRVHRCUVVWNlJEdEpRVWRGTEcxQ1FVRlpMRXRCUVZrN1VVRkRkRUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVFN1NVRkRjRUlzUTBGQlF6dEpRVVZFTEhOQ1FVRkpMRGhDUVVGUE8yRkJRVmc3V1VGRFJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGQk8xRkJRek5DTEVOQlFVTTdPenRQUVVGQk8wbEJSVVFzYzBKQlFVa3NhVU5CUVZVN1lVRkJaRHRaUVVORkxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVFN1VVRkRPVUlzUTBGQlF6czdPMDlCUVVFN1NVRkZSQ3h6UWtGQlNTdzJRa0ZCVFR0aFFVRldPMWxCUTBVc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUVR0UlFVTXhRaXhEUVVGRE96czdUMEZCUVR0SlFVVkVMSFZDUVVGSExFZEJRVWdzVlVGQlNTeFZRVUZyUWp0UlFVTndRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGQk8wbEJRM1JETEVOQlFVTTdTVUZGUkN4M1FrRkJTU3hIUVVGS08xRkJRVXNzY1VKQlFYZENPMkZCUVhoQ0xGVkJRWGRDTEVWQlFYaENMSEZDUVVGM1FpeEZRVUY0UWl4SlFVRjNRanRaUVVGNFFpeG5RMEZCZDBJN08xRkJRek5DTEVsQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRVHRSUVVNMVJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZCTzBsQlEzcERMRU5CUVVNN1NVRkZSQ3d5UWtGQlR5eEhRVUZRTzFGQlFWRXNjVUpCUVhkQ08yRkJRWGhDTEZWQlFYZENMRVZCUVhoQ0xIRkNRVUYzUWl4RlFVRjRRaXhKUVVGM1FqdFpRVUY0UWl4blEwRkJkMEk3TzFGQlF6bENMRWxCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlFUdFJRVU0xUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkJPMGxCUXpkRExFTkJRVU03U1VGRlR5dzJRMEZCZVVJc1IwRkJha01zVlVGQmEwTXNWMEZCY1VJN1VVRkJka1FzYVVKQlJVTTdVVUZFUXl4UFFVRlBMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlFTeFZRVUZWTEVsQlFVa3NUMEZCUVN4TFFVRkpMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVhwRExFTkJRWGxETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVUU3U1VGRE5VWXNRMEZCUXp0SlFVVlBMRFJEUVVGM1FpeEhRVUZvUXl4VlFVRnBReXhWUVVGclFqdFJRVU5xUkN4SlFVRk5MR2RDUVVGblFpeEhRVUZOTEVsQlFVa3NRMEZCUXl4VlFVRlZMRk5CUVVrc1ZVRkJXU3hEUVVGQk8xRkJRek5FTEU5QlFVOHNNa0pCUVRKQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1owSkJRV2RDTEVOQlFVTXNRMEZCUVR0SlFVTnVSaXhEUVVGRE8wbEJRMGdzWjBKQlFVTTdRVUZCUkN4RFFVRkRMRUZCZWtORUxFbEJlVU5ESW4wPSIsImV4cG9ydCAqIGZyb20gXCIuL3NyYy9tdWx0aW1hcFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL2luZGV4ZWRfbXVsdGltYXBcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTlwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4alFVRmpMR2RDUVVGblFpeERRVUZCTzBGQlF6bENMR05CUVdNc2QwSkJRWGRDTEVOQlFVRWlmUT09IiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBNdWx0aW1hcCB9IGZyb20gXCIuL211bHRpbWFwXCI7XG5pbXBvcnQgeyBhZGQsIGRlbCB9IGZyb20gXCIuL3NldF9vcGVyYXRpb25zXCI7XG52YXIgSW5kZXhlZE11bHRpbWFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbmRleGVkTXVsdGltYXAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5kZXhlZE11bHRpbWFwKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5rZXlzQnlWYWx1ZSA9IG5ldyBNYXA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEluZGV4ZWRNdWx0aW1hcC5wcm90b3R5cGUsIFwidmFsdWVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmtleXNCeVZhbHVlLmtleXMoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEluZGV4ZWRNdWx0aW1hcC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5hZGQuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgYWRkKHRoaXMua2V5c0J5VmFsdWUsIHZhbHVlLCBrZXkpO1xuICAgIH07XG4gICAgSW5kZXhlZE11bHRpbWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlbGV0ZS5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgICBkZWwodGhpcy5rZXlzQnlWYWx1ZSwgdmFsdWUsIGtleSk7XG4gICAgfTtcbiAgICBJbmRleGVkTXVsdGltYXAucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtleXNCeVZhbHVlLmhhcyh2YWx1ZSk7XG4gICAgfTtcbiAgICBJbmRleGVkTXVsdGltYXAucHJvdG90eXBlLmdldEtleXNGb3JWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc2V0ID0gdGhpcy5rZXlzQnlWYWx1ZS5nZXQodmFsdWUpO1xuICAgICAgICByZXR1cm4gc2V0ID8gQXJyYXkuZnJvbShzZXQpIDogW107XG4gICAgfTtcbiAgICByZXR1cm4gSW5kZXhlZE11bHRpbWFwO1xufShNdWx0aW1hcCkpO1xuZXhwb3J0IHsgSW5kZXhlZE11bHRpbWFwIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhobFpGOXRkV3gwYVcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5cGJtUmxlR1ZrWDIxMWJIUnBiV0Z3TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN1FVRkJRU3hQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEUxQlFVMHNXVUZCV1N4RFFVRkJPMEZCUTNKRExFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVUwc2EwSkJRV3RDTEVOQlFVRTdRVUZGTTBNN1NVRkJNa01zYlVOQlFXTTdTVUZIZGtRN1VVRkJRU3haUVVORkxHbENRVUZQTEZOQlJWSTdVVUZFUXl4TFFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZCT3p0SlFVTTFRaXhEUVVGRE8wbEJSVVFzYzBKQlFVa3NiVU5CUVUwN1lVRkJWanRaUVVORkxFOUJRVThzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVRTdVVUZETlVNc1EwRkJRenM3TzA5QlFVRTdTVUZGUkN3MlFrRkJSeXhIUVVGSUxGVkJRVWtzUjBGQlRTeEZRVUZGTEV0QlFWRTdVVUZEYkVJc2FVSkJRVTBzUjBGQlJ5eFpRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRVHRSUVVOeVFpeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hMUVVGTExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVRTdTVUZEYmtNc1EwRkJRenRKUVVWRUxHZERRVUZOTEVkQlFVNHNWVUZCVHl4SFFVRk5MRVZCUVVVc1MwRkJVVHRSUVVOeVFpeHBRa0ZCVFN4TlFVRk5MRmxCUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZCTzFGQlEzaENMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEV0QlFVc3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRVHRKUVVOdVF5eERRVUZETzBsQlJVUXNhME5CUVZFc1IwRkJVaXhWUVVGVExFdEJRVkU3VVVGRFppeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZCTzBsQlEzQkRMRU5CUVVNN1NVRkZSQ3g1UTBGQlpTeEhRVUZtTEZWQlFXZENMRXRCUVZFN1VVRkRkRUlzU1VGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdVVUZEZGtNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUVR0SlFVTnVReXhEUVVGRE8wbEJRMGdzYzBKQlFVTTdRVUZCUkN4RFFVRkRMRUZCT1VKRUxFTkJRVEpETEZGQlFWRXNSMEU0UW14RUluMD0iLCJpbXBvcnQgeyBhZGQsIGRlbCB9IGZyb20gXCIuL3NldF9vcGVyYXRpb25zXCI7XG52YXIgTXVsdGltYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXVsdGltYXAoKSB7XG4gICAgICAgIHRoaXMudmFsdWVzQnlLZXkgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNdWx0aW1hcC5wcm90b3R5cGUsIFwidmFsdWVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2V0cyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXNCeUtleS52YWx1ZXMoKSk7XG4gICAgICAgICAgICByZXR1cm4gc2V0cy5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlcywgc2V0KSB7IHJldHVybiB2YWx1ZXMuY29uY2F0KEFycmF5LmZyb20oc2V0KSk7IH0sIFtdKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE11bHRpbWFwLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2V0cyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXNCeUtleS52YWx1ZXMoKSk7XG4gICAgICAgICAgICByZXR1cm4gc2V0cy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHNldCkgeyByZXR1cm4gc2l6ZSArIHNldC5zaXplOyB9LCAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTXVsdGltYXAucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGFkZCh0aGlzLnZhbHVlc0J5S2V5LCBrZXksIHZhbHVlKTtcbiAgICB9O1xuICAgIE11bHRpbWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBkZWwodGhpcy52YWx1ZXNCeUtleSwga2V5LCB2YWx1ZSk7XG4gICAgfTtcbiAgICBNdWx0aW1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzQnlLZXkuZ2V0KGtleSk7XG4gICAgICAgIHJldHVybiB2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMuaGFzKHZhbHVlKTtcbiAgICB9O1xuICAgIE11bHRpbWFwLnByb3RvdHlwZS5oYXNLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc0J5S2V5LmhhcyhrZXkpO1xuICAgIH07XG4gICAgTXVsdGltYXAucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzZXRzID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlc0J5S2V5LnZhbHVlcygpKTtcbiAgICAgICAgcmV0dXJuIHNldHMuc29tZShmdW5jdGlvbiAoc2V0KSB7IHJldHVybiBzZXQuaGFzKHZhbHVlKTsgfSk7XG4gICAgfTtcbiAgICBNdWx0aW1hcC5wcm90b3R5cGUuZ2V0VmFsdWVzRm9yS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXNCeUtleS5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcyA/IEFycmF5LmZyb20odmFsdWVzKSA6IFtdO1xuICAgIH07XG4gICAgTXVsdGltYXAucHJvdG90eXBlLmdldEtleXNGb3JWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnZhbHVlc0J5S2V5KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfYVswXSwgdmFsdWVzID0gX2FbMV07XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLmhhcyh2YWx1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IF9hWzBdLCB2YWx1ZXMgPSBfYVsxXTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE11bHRpbWFwO1xufSgpKTtcbmV4cG9ydCB7IE11bHRpbWFwIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liWFZzZEdsdFlYQXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmJYVnNkR2x0WVhBdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUU3hyUWtGQmEwSXNRMEZCUVR0QlFVVXpRenRKUVVkRk8xRkJRMFVzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRWRCUVVjc1JVRkJZU3hEUVVGQk8wbEJRM3BETEVOQlFVTTdTVUZGUkN4elFrRkJTU3cwUWtGQlRUdGhRVUZXTzFsQlEwVXNTVUZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVUU3V1VGRGJFUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU3l4UFFVRkJMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVFNVFpeERRVUU0UWl4RlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGQk8xRkJReTlGTEVOQlFVTTdPenRQUVVGQk8wbEJSVVFzYzBKQlFVa3NNRUpCUVVrN1lVRkJVanRaUVVORkxFbEJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkJPMWxCUTJ4RUxFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVXNzVDBGQlFTeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJaaXhEUVVGbExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVRTdVVUZEZGtRc1EwRkJRenM3TzA5QlFVRTdTVUZGUkN4elFrRkJSeXhIUVVGSUxGVkJRVWtzUjBGQlRTeEZRVUZGTEV0QlFWRTdVVUZEYkVJc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGQk8wbEJRMjVETEVOQlFVTTdTVUZGUkN4NVFrRkJUU3hIUVVGT0xGVkJRVThzUjBGQlRTeEZRVUZGTEV0QlFWRTdVVUZEY2tJc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGQk8wbEJRMjVETEVOQlFVTTdTVUZGUkN4elFrRkJSeXhIUVVGSUxGVkJRVWtzUjBGQlRTeEZRVUZGTEV0QlFWRTdVVUZEYkVJc1NVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3VVVGRGVFTXNUMEZCVHl4TlFVRk5MRWxCUVVrc1NVRkJTU3hKUVVGSkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVFN1NVRkROVU1zUTBGQlF6dEpRVVZFTEhsQ1FVRk5MRWRCUVU0c1ZVRkJUeXhIUVVGTk8xRkJRMWdzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdEpRVU5zUXl4RFFVRkRPMGxCUlVRc01rSkJRVkVzUjBGQlVpeFZRVUZUTEV0QlFWRTdVVUZEWml4SlFVRk5MRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlFUdFJRVU5zUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlFTeEhRVUZITEVsQlFVa3NUMEZCUVN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZrTEVOQlFXTXNRMEZCUXl4RFFVRkJPMGxCUTNwRExFTkJRVU03U1VGRlJDeHJRMEZCWlN4SFFVRm1MRlZCUVdkQ0xFZEJRVTA3VVVGRGNFSXNTVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1VVRkRlRU1zVDBGQlR5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRVHRKUVVONlF5eERRVUZETzBsQlJVUXNhME5CUVdVc1IwRkJaaXhWUVVGblFpeExRVUZSTzFGQlEzUkNMRTlCUVU4c1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMkZCUTJoRExFMUJRVTBzUTBGQlF5eFZRVUZETEVWQlFXRTdaMEpCUVZvc1YwRkJSeXhGUVVGRkxHTkJRVTA3V1VGQlRTeFBRVUZCTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRV3BDTEVOQlFXbENMRU5CUVVNN1lVRkROVU1zUjBGQlJ5eERRVUZETEZWQlFVTXNSVUZCWVR0blFrRkJXaXhYUVVGSExFVkJRVVVzWTBGQlRUdFpRVUZOTEU5QlFVRXNSMEZCUnp0UlFVRklMRU5CUVVjc1EwRkJReXhEUVVGQk8wbEJRMmhETEVOQlFVTTdTVUZEU0N4bFFVRkRPMEZCUVVRc1EwRkJReXhCUVdwRVJDeEpRV2xFUXlKOSIsImV4cG9ydCBmdW5jdGlvbiBhZGQobWFwLCBrZXksIHZhbHVlKSB7XG4gICAgZmV0Y2gobWFwLCBrZXkpLmFkZCh2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsKG1hcCwga2V5LCB2YWx1ZSkge1xuICAgIGZldGNoKG1hcCwga2V5KS5kZWxldGUodmFsdWUpO1xuICAgIHBydW5lKG1hcCwga2V5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaChtYXAsIGtleSkge1xuICAgIHZhciB2YWx1ZXMgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKCF2YWx1ZXMpIHtcbiAgICAgICAgdmFsdWVzID0gbmV3IFNldCgpO1xuICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShtYXAsIGtleSkge1xuICAgIHZhciB2YWx1ZXMgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKHZhbHVlcyAhPSBudWxsICYmIHZhbHVlcy5zaXplID09IDApIHtcbiAgICAgICAgbWFwLmRlbGV0ZShrZXkpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMyVjBYMjl3WlhKaGRHbHZibk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjMlYwWDI5d1pYSmhkR2x2Ym5NdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeGpRVUZ2UWl4SFFVRnRRaXhGUVVGRkxFZEJRVTBzUlVGQlJTeExRVUZSTzBsQlF6ZEVMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8wRkJRelZDTEVOQlFVTTdRVUZGUkN4TlFVRk5MR05CUVc5Q0xFZEJRVzFDTEVWQlFVVXNSMEZCVFN4RlFVRkZMRXRCUVZFN1NVRkROMFFzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdTVUZETjBJc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUVR0QlFVTnFRaXhEUVVGRE8wRkJSVVFzVFVGQlRTeG5Ra0ZCYzBJc1IwRkJiVUlzUlVGQlJTeEhRVUZOTzBsQlEzSkVMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1NVRkRla0lzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0UlFVTllMRTFCUVUwc1IwRkJSeXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZCTzFGQlEyeENMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkJPMHRCUTNKQ08wbEJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVRTdRVUZEWml4RFFVRkRPMEZCUlVRc1RVRkJUU3huUWtGQmMwSXNSMEZCYlVJc1JVRkJSU3hIUVVGTk8wbEJRM0pFTEVsQlFVMHNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdTVUZETTBJc1NVRkJTU3hOUVVGTkxFbEJRVWtzU1VGQlNTeEpRVUZKTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRk8xRkJRM1JETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3UzBGRGFFSTdRVUZEU0N4RFFVRkRJbjA9IiwiZXhwb3J0ICogZnJvbSBcIi4vc3JjL2F0dHJpYnV0ZV9vYnNlcnZlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL2VsZW1lbnRfb2JzZXJ2ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90b2tlbl9saXN0X29ic2VydmVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdmFsdWVfbGlzdF9vYnNlcnZlclwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hqUVVGakxEQkNRVUV3UWl4RFFVRkJPMEZCUTNoRExHTkJRV01zZDBKQlFYZENMRU5CUVVFN1FVRkRkRU1zWTBGQll5d3lRa0ZCTWtJc1EwRkJRVHRCUVVONlF5eGpRVUZqTERKQ1FVRXlRaXhEUVVGQkluMD0iLCJpbXBvcnQgeyBFbGVtZW50T2JzZXJ2ZXIgfSBmcm9tIFwiLi9lbGVtZW50X29ic2VydmVyXCI7XG52YXIgQXR0cmlidXRlT2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXR0cmlidXRlT2JzZXJ2ZXIoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgZGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlTmFtZTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLmVsZW1lbnRPYnNlcnZlciA9IG5ldyBFbGVtZW50T2JzZXJ2ZXIoZWxlbWVudCwgdGhpcyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUsIFwiZWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudE9ic2VydmVyLmVsZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUsIFwic2VsZWN0b3JcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIltcIiArIHRoaXMuYXR0cmlidXRlTmFtZSArIFwiXVwiO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyLnN0YXJ0KCk7XG4gICAgfTtcbiAgICBBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50T2JzZXJ2ZXIuc3RvcCgpO1xuICAgIH07XG4gICAgQXR0cmlidXRlT2JzZXJ2ZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudE9ic2VydmVyLnJlZnJlc2goKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUsIFwic3RhcnRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudE9ic2VydmVyLnN0YXJ0ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIEVsZW1lbnQgb2JzZXJ2ZXIgZGVsZWdhdGVcbiAgICBBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUubWF0Y2hFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMuYXR0cmlidXRlTmFtZSk7XG4gICAgfTtcbiAgICBBdHRyaWJ1dGVPYnNlcnZlci5wcm90b3R5cGUubWF0Y2hFbGVtZW50c0luVHJlZSA9IGZ1bmN0aW9uICh0cmVlKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHRoaXMubWF0Y2hFbGVtZW50KHRyZWUpID8gW3RyZWVdIDogW107XG4gICAgICAgIHZhciBtYXRjaGVzID0gQXJyYXkuZnJvbSh0cmVlLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3RvcikpO1xuICAgICAgICByZXR1cm4gbWF0Y2guY29uY2F0KG1hdGNoZXMpO1xuICAgIH07XG4gICAgQXR0cmlidXRlT2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRNYXRjaGVkID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUoZWxlbWVudCwgdGhpcy5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXR0cmlidXRlT2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRVbm1hdGNoZWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5lbGVtZW50VW5tYXRjaGVkQXR0cmlidXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRVbm1hdGNoZWRBdHRyaWJ1dGUoZWxlbWVudCwgdGhpcy5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXR0cmlidXRlT2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRBdHRyaWJ1dGVDaGFuZ2VkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGUuZWxlbWVudEF0dHJpYnV0ZVZhbHVlQ2hhbmdlZCAmJiB0aGlzLmF0dHJpYnV0ZU5hbWUgPT0gYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50QXR0cmlidXRlVmFsdWVDaGFuZ2VkKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQXR0cmlidXRlT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgQXR0cmlidXRlT2JzZXJ2ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYUjBjbWxpZFhSbFgyOWljMlZ5ZG1WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJGMGRISnBZblYwWlY5dlluTmxjblpsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFVkJRVVVzWlVGQlpTeEZRVUV5UWl4TlFVRk5MRzlDUVVGdlFpeERRVUZCTzBGQlVUZEZPMGxCVFVVc01rSkJRVmtzVDBGQlowSXNSVUZCUlN4aFFVRnhRaXhGUVVGRkxGRkJRVzFETzFGQlEzUkdMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzWVVGQllTeERRVUZCTzFGQlEyeERMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZCTzFGQlJYaENMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzU1VGQlNTeGxRVUZsTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGQk8wbEJRek5FTEVOQlFVTTdTVUZGUkN4elFrRkJTU3h6UTBGQlR6dGhRVUZZTzFsQlEwVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFOUJRVThzUTBGQlFUdFJRVU55UXl4RFFVRkRPenM3VDBGQlFUdEpRVVZFTEhOQ1FVRkpMSFZEUVVGUk8yRkJRVm83V1VGRFJTeFBRVUZQTEUxQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1RVRkJSeXhEUVVGQk8xRkJRMnhETEVOQlFVTTdPenRQUVVGQk8wbEJSVVFzYVVOQlFVc3NSMEZCVER0UlFVTkZMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVRTdTVUZET1VJc1EwRkJRenRKUVVWRUxHZERRVUZKTEVkQlFVbzdVVUZEUlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZCTzBsQlF6ZENMRU5CUVVNN1NVRkZSQ3h0UTBGQlR5eEhRVUZRTzFGQlEwVXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlFUdEpRVU5vUXl4RFFVRkRPMGxCUlVRc2MwSkJRVWtzYzBOQlFVODdZVUZCV0R0WlFVTkZMRTlCUVU4c1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVRTdVVUZEY2tNc1EwRkJRenM3TzA5QlFVRTdTVUZGUkN3MFFrRkJORUk3U1VGRk5VSXNkME5CUVZrc1IwRkJXaXhWUVVGaExFOUJRV2RDTzFGQlF6TkNMRTlCUVU4c1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVFN1NVRkRha1FzUTBGQlF6dEpRVVZFTEN0RFFVRnRRaXhIUVVGdVFpeFZRVUZ2UWl4SlFVRmhPMUZCUXk5Q0xFbEJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlFUdFJRVU51UkN4SlFVRk5MRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRVHRSUVVOb1JTeFBRVUZQTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVUU3U1VGRE9VSXNRMEZCUXp0SlFVVkVMREJEUVVGakxFZEJRV1FzVlVGQlpTeFBRVUZuUWp0UlFVTTNRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNkVUpCUVhWQ0xFVkJRVVU3V1VGRGVrTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZCTzFOQlEyNUZPMGxCUTBnc1EwRkJRenRKUVVWRUxEUkRRVUZuUWl4SFFVRm9RaXhWUVVGcFFpeFBRVUZuUWp0UlFVTXZRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNlVUpCUVhsQ0xFVkJRVVU3V1VGRE0wTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZCTzFOQlEzSkZPMGxCUTBnc1EwRkJRenRKUVVWRUxHMUVRVUYxUWl4SFFVRjJRaXhWUVVGM1FpeFBRVUZuUWl4RlFVRkZMR0ZCUVhGQ08xRkJRemRFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXcwUWtGQk5FSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hKUVVGSkxHRkJRV0VzUlVGQlJUdFpRVU55Uml4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExEUkNRVUUwUWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hoUVVGaExFTkJRVU1zUTBGQlFUdFRRVU51UlR0SlFVTklMRU5CUVVNN1NVRkRTQ3gzUWtGQlF6dEJRVUZFTEVOQlFVTXNRVUZzUlVRc1NVRnJSVU1pZlE9PSIsInZhciBFbGVtZW50T2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRWxlbWVudE9ic2VydmVyKGVsZW1lbnQsIGRlbGVnYXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBuZXcgU2V0O1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7IHJldHVybiBfdGhpcy5wcm9jZXNzTXV0YXRpb25zKG11dGF0aW9ucyk7IH0pO1xuICAgIH1cbiAgICBFbGVtZW50T2JzZXJ2ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG5ldyBTZXQodGhpcy5tYXRjaEVsZW1lbnRzSW5UcmVlKCkpO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IEFycmF5LmZyb20odGhpcy5lbGVtZW50cyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IEFycmF5LmZyb20obWF0Y2hlcyk7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfY1tfYl07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBNdXRhdGlvbiByZWNvcmQgcHJvY2Vzc2luZ1xuICAgIEVsZW1lbnRPYnNlcnZlci5wcm90b3R5cGUucHJvY2Vzc011dGF0aW9ucyA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBtdXRhdGlvbnNfMSA9IG11dGF0aW9uczsgX2kgPCBtdXRhdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb24gPSBtdXRhdGlvbnNfMVtfaV07XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb24obXV0YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBFbGVtZW50T2JzZXJ2ZXIucHJvdG90eXBlLnByb2Nlc3NNdXRhdGlvbiA9IGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PSBcImF0dHJpYnV0ZXNcIikge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQXR0cmlidXRlQ2hhbmdlKG11dGF0aW9uLnRhcmdldCwgbXV0YXRpb24uYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobXV0YXRpb24udHlwZSA9PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZW1vdmVkTm9kZXMobXV0YXRpb24ucmVtb3ZlZE5vZGVzKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0FkZGVkTm9kZXMobXV0YXRpb24uYWRkZWROb2Rlcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEVsZW1lbnRPYnNlcnZlci5wcm90b3R5cGUucHJvY2Vzc0F0dHJpYnV0ZUNoYW5nZSA9IGZ1bmN0aW9uIChub2RlLCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gbm9kZTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5lbGVtZW50QXR0cmlidXRlQ2hhbmdlZCAmJiB0aGlzLm1hdGNoRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGUuZWxlbWVudEF0dHJpYnV0ZUNoYW5nZWQoZWxlbWVudCwgYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tYXRjaEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5wcm9jZXNzUmVtb3ZlZE5vZGVzID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKG5vZGVzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRGcm9tTm9kZShub2RlKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVHJlZShlbGVtZW50LCB0aGlzLnJlbW92ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBFbGVtZW50T2JzZXJ2ZXIucHJvdG90eXBlLnByb2Nlc3NBZGRlZE5vZGVzID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKG5vZGVzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRGcm9tTm9kZShub2RlKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHRoaXMuZWxlbWVudElzQWN0aXZlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVHJlZShlbGVtZW50LCB0aGlzLmFkZEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBFbGVtZW50IG1hdGNoaW5nXG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5tYXRjaEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5tYXRjaEVsZW1lbnQoZWxlbWVudCk7XG4gICAgfTtcbiAgICBFbGVtZW50T2JzZXJ2ZXIucHJvdG90eXBlLm1hdGNoRWxlbWVudHNJblRyZWUgPSBmdW5jdGlvbiAodHJlZSkge1xuICAgICAgICBpZiAodHJlZSA9PT0gdm9pZCAwKSB7IHRyZWUgPSB0aGlzLmVsZW1lbnQ7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUubWF0Y2hFbGVtZW50c0luVHJlZSh0cmVlKTtcbiAgICB9O1xuICAgIEVsZW1lbnRPYnNlcnZlci5wcm90b3R5cGUucHJvY2Vzc1RyZWUgPSBmdW5jdGlvbiAodHJlZSwgcHJvY2Vzc29yKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLm1hdGNoRWxlbWVudHNJblRyZWUodHJlZSk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IF9hW19pXTtcbiAgICAgICAgICAgIHByb2Nlc3Nvci5jYWxsKHRoaXMsIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFbGVtZW50T2JzZXJ2ZXIucHJvdG90eXBlLmVsZW1lbnRGcm9tTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5lbGVtZW50SXNBY3RpdmUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5pc0Nvbm5lY3RlZCAhPSB0aGlzLmVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY29udGFpbnMoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEVsZW1lbnQgdHJhY2tpbmdcbiAgICBFbGVtZW50T2JzZXJ2ZXIucHJvdG90eXBlLmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50SXNBY3RpdmUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZS5lbGVtZW50TWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRNYXRjaGVkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgRWxlbWVudE9ic2VydmVyLnByb3RvdHlwZS5yZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbGVnYXRlLmVsZW1lbnRVbm1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmVsZW1lbnRVbm1hdGNoZWQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBFbGVtZW50T2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgRWxlbWVudE9ic2VydmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laV3hsYldWdWRGOXZZbk5sY25abGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5bGJHVnRaVzUwWDI5aWMyVnlkbVZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFWTkJPMGxCVVVVc2VVSkJRVmtzVDBGQlowSXNSVUZCUlN4UlFVRnBRenRSUVVFdlJDeHBRa0ZQUXp0UlFVNURMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZCTzFGQlEzUkNMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZCTzFGQlEzQkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZCTzFGQlJYaENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVRTdVVUZEZGtJc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SFFVRkhMRWxCUVVrc1owSkJRV2RDTEVOQlFVTXNWVUZCUXl4VFFVRlRMRWxCUVVzc1QwRkJRU3hMUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRV2hETEVOQlFXZERMRU5CUVVNc1EwRkJRVHRKUVVNdlJpeERRVUZETzBsQlJVUXNLMEpCUVVzc1IwRkJURHRSUVVORkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUTJwQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkJPMWxCUTI1Q0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlFUdFpRVU5xUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVUU3VTBGRFpqdEpRVU5JTEVOQlFVTTdTVUZGUkN3NFFrRkJTU3hIUVVGS08xRkJRMFVzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUTJoQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlFUdFpRVU51UXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVFN1dVRkRiRU1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVFN1UwRkRja0k3U1VGRFNDeERRVUZETzBsQlJVUXNhVU5CUVU4c1IwRkJVRHRSUVVORkxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTm9RaXhKUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXl4RFFVRkJPMWxCUlc1RUxFdEJRWE5DTEZWQlFYbENMRVZCUVhwQ0xFdEJRVUVzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRWHBDTEdOQlFYbENMRVZCUVhwQ0xFbEJRWGxDTEVWQlFVVTdaMEpCUVRWRExFbEJRVTBzVDBGQlR5eFRRVUZCTzJkQ1FVTm9RaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHR2UWtGRGVrSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdHBRa0ZETlVJN1lVRkRSanRaUVVWRUxFdEJRWE5DTEZWQlFXMUNMRVZCUVc1Q0xFdEJRVUVzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJia0lzWTBGQmJVSXNSVUZCYmtJc1NVRkJiVUlzUlVGQlJUdG5Ra0ZCZEVNc1NVRkJUU3hQUVVGUExGTkJRVUU3WjBKQlEyaENMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdZVUZEZWtJN1UwRkRSanRKUVVOSUxFTkJRVU03U1VGRlJDdzJRa0ZCTmtJN1NVRkZja0lzTUVOQlFXZENMRWRCUVhoQ0xGVkJRWGxDTEZOQlFUSkNPMUZCUTJ4RUxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTm9RaXhMUVVGMVFpeFZRVUZUTEVWQlFWUXNkVUpCUVZNc1JVRkJWQ3gxUWtGQlV5eEZRVUZVTEVsQlFWTXNSVUZCUlR0blFrRkJOMElzU1VGQlRTeFJRVUZSTEd0Q1FVRkJPMmRDUVVOcVFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGQk8yRkJReTlDTzFOQlEwWTdTVUZEU0N4RFFVRkRPMGxCUlU4c2VVTkJRV1VzUjBGQmRrSXNWVUZCZDBJc1VVRkJkMEk3VVVGRE9VTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hKUVVGSkxGbEJRVmtzUlVGQlJUdFpRVU5xUXl4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hSUVVGUkxFTkJRVU1zWVVGQll5eERRVUZETEVOQlFVRTdVMEZEZEVVN1lVRkJUU3hKUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVsQlFVa3NWMEZCVnl4RlFVRkZPMWxCUTNaRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVRTdXVUZETDBNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlFUdFRRVU0xUXp0SlFVTklMRU5CUVVNN1NVRkZUeXhuUkVGQmMwSXNSMEZCT1VJc1ZVRkJLMElzU1VGQlZTeEZRVUZGTEdGQlFYRkNPMUZCUXpsRUxFbEJRVTBzVDBGQlR5eEhRVUZITEVsQlFXVXNRMEZCUVR0UlFVTXZRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8xbEJRemxDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXgxUWtGQmRVSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzJkQ1FVTjJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFOUJRVThzUlVGQlJTeGhRVUZoTEVOQlFVTXNRMEZCUVR0aFFVTTVSRHRwUWtGQlRUdG5Ra0ZEVEN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZCTzJGQlF6VkNPMU5CUTBZN1lVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1dVRkRja01zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRUUVVONlFqdEpRVU5JTEVOQlFVTTdTVUZGVHl3MlEwRkJiVUlzUjBGQk0wSXNWVUZCTkVJc1MwRkJaVHRSUVVONlF5eExRVUZ0UWl4VlFVRnBRaXhGUVVGcVFpeExRVUZCTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRV3BDTEdOQlFXbENMRVZCUVdwQ0xFbEJRV2xDTEVWQlFVVTdXVUZCYWtNc1NVRkJUU3hKUVVGSkxGTkJRVUU3V1VGRFlpeEpRVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZCTzFsQlF6RkRMRWxCUVVrc1QwRkJUeXhGUVVGRk8yZENRVU5ZTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUVR0aFFVTTVRenRUUVVOR08wbEJRMGdzUTBGQlF6dEpRVVZQTERKRFFVRnBRaXhIUVVGNlFpeFZRVUV3UWl4TFFVRmxPMUZCUTNaRExFdEJRVzFDTEZWQlFXbENMRVZCUVdwQ0xFdEJRVUVzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJha0lzWTBGQmFVSXNSVUZCYWtJc1NVRkJhVUlzUlVGQlJUdFpRVUZxUXl4SlFVRk5MRWxCUVVrc1UwRkJRVHRaUVVOaUxFbEJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVUU3V1VGRE1VTXNTVUZCU1N4UFFVRlBMRWxCUVVrc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0blFrRkROVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZCTzJGQlF6TkRPMU5CUTBZN1NVRkRTQ3hEUVVGRE8wbEJSVVFzYlVKQlFXMUNPMGxCUlZnc2MwTkJRVmtzUjBGQmNFSXNWVUZCY1VJc1QwRkJaMEk3VVVGRGJrTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUVR0SlFVTTFReXhEUVVGRE8wbEJSVThzTmtOQlFXMUNMRWRCUVROQ0xGVkJRVFJDTEVsQlFUUkNPMUZCUVRWQ0xIRkNRVUZCTEVWQlFVRXNUMEZCWjBJc1NVRkJTU3hEUVVGRExFOUJRVTg3VVVGRGRFUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGQk8wbEJRMmhFTEVOQlFVTTdTVUZGVHl4eFEwRkJWeXhIUVVGdVFpeFZRVUZ2UWl4SlFVRmhMRVZCUVVVc1UwRkJjVU03VVVGRGRFVXNTMEZCYzBJc1ZVRkJPRUlzUlVGQk9VSXNTMEZCUVN4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVRsQ0xHTkJRVGhDTEVWQlFUbENMRWxCUVRoQ0xFVkJRVVU3V1VGQmFrUXNTVUZCVFN4UFFVRlBMRk5CUVVFN1dVRkRhRUlzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3VTBGRE9VSTdTVUZEU0N4RFFVRkRPMGxCUlU4c2VVTkJRV1VzUjBGQmRrSXNWVUZCZDBJc1NVRkJWVHRSUVVOb1F5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJUdFpRVU4wUXl4UFFVRlBMRWxCUVdVc1EwRkJRVHRUUVVOMlFqdEpRVU5JTEVOQlFVTTdTVUZGVHl4NVEwRkJaU3hIUVVGMlFpeFZRVUYzUWl4UFFVRm5RanRSUVVOMFF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4WFFVRlhMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVTdXVUZEYmtRc1QwRkJUeXhMUVVGTExFTkJRVUU3VTBGRFlqdGhRVUZOTzFsQlEwd3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUVR0VFFVTjBRenRKUVVOSUxFTkJRVU03U1VGRlJDeHRRa0ZCYlVJN1NVRkZXQ3h2UTBGQlZTeEhRVUZzUWl4VlFVRnRRaXhQUVVGblFqdFJRVU5xUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVN1dVRkRMMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8yZENRVU5xUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUVR0blFrRkRNVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1JVRkJSVHR2UWtGRGFFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdhVUpCUTNSRE8yRkJRMFk3VTBGRFJqdEpRVU5JTEVOQlFVTTdTVUZGVHl4MVEwRkJZU3hIUVVGeVFpeFZRVUZ6UWl4UFFVRm5RanRSUVVOd1F5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTzFsQlF6bENMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkJPMWxCUXpkQ0xFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUlVGQlJUdG5Ra0ZEYkVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdGhRVU40UXp0VFFVTkdPMGxCUTBnc1EwRkJRenRKUVVOSUxITkNRVUZETzBGQlFVUXNRMEZCUXl4QlFYUktSQ3hKUVhOS1F5SjkiLCJpbXBvcnQgeyBBdHRyaWJ1dGVPYnNlcnZlciB9IGZyb20gXCIuL2F0dHJpYnV0ZV9vYnNlcnZlclwiO1xuaW1wb3J0IHsgTXVsdGltYXAgfSBmcm9tIFwiQHN0aW11bHVzL211bHRpbWFwXCI7XG52YXIgVG9rZW5MaXN0T2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9rZW5MaXN0T2JzZXJ2ZXIoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgZGVsZWdhdGUpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVPYnNlcnZlciA9IG5ldyBBdHRyaWJ1dGVPYnNlcnZlcihlbGVtZW50LCBhdHRyaWJ1dGVOYW1lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLnRva2Vuc0J5RWxlbWVudCA9IG5ldyBNdWx0aW1hcDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZSwgXCJzdGFydGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5zdGFydGVkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBUb2tlbkxpc3RPYnNlcnZlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIuc3RhcnQoKTtcbiAgICB9O1xuICAgIFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyLnN0b3AoKTtcbiAgICB9O1xuICAgIFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZU9ic2VydmVyLnJlZnJlc2goKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUb2tlbkxpc3RPYnNlcnZlci5wcm90b3R5cGUsIFwiZWxlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlT2JzZXJ2ZXIuZWxlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZSwgXCJhdHRyaWJ1dGVOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVPYnNlcnZlci5hdHRyaWJ1dGVOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyBBdHRyaWJ1dGUgb2JzZXJ2ZXIgZGVsZWdhdGVcbiAgICBUb2tlbkxpc3RPYnNlcnZlci5wcm90b3R5cGUuZWxlbWVudE1hdGNoZWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnRva2Vuc01hdGNoZWQodGhpcy5yZWFkVG9rZW5zRm9yRWxlbWVudChlbGVtZW50KSk7XG4gICAgfTtcbiAgICBUb2tlbkxpc3RPYnNlcnZlci5wcm90b3R5cGUuZWxlbWVudEF0dHJpYnV0ZVZhbHVlQ2hhbmdlZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucmVmcmVzaFRva2Vuc0ZvckVsZW1lbnQoZWxlbWVudCksIHVubWF0Y2hlZFRva2VucyA9IF9hWzBdLCBtYXRjaGVkVG9rZW5zID0gX2FbMV07XG4gICAgICAgIHRoaXMudG9rZW5zVW5tYXRjaGVkKHVubWF0Y2hlZFRva2Vucyk7XG4gICAgICAgIHRoaXMudG9rZW5zTWF0Y2hlZChtYXRjaGVkVG9rZW5zKTtcbiAgICB9O1xuICAgIFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZS5lbGVtZW50VW5tYXRjaGVkQXR0cmlidXRlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy50b2tlbnNVbm1hdGNoZWQodGhpcy50b2tlbnNCeUVsZW1lbnQuZ2V0VmFsdWVzRm9yS2V5KGVsZW1lbnQpKTtcbiAgICB9O1xuICAgIFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZS50b2tlbnNNYXRjaGVkID0gZnVuY3Rpb24gKHRva2Vucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0b2tlbnMuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHsgcmV0dXJuIF90aGlzLnRva2VuTWF0Y2hlZCh0b2tlbik7IH0pO1xuICAgIH07XG4gICAgVG9rZW5MaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnRva2Vuc1VubWF0Y2hlZCA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7IHJldHVybiBfdGhpcy50b2tlblVubWF0Y2hlZCh0b2tlbik7IH0pO1xuICAgIH07XG4gICAgVG9rZW5MaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnRva2VuTWF0Y2hlZCA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLnRva2VuTWF0Y2hlZCh0b2tlbik7XG4gICAgICAgIHRoaXMudG9rZW5zQnlFbGVtZW50LmFkZCh0b2tlbi5lbGVtZW50LCB0b2tlbik7XG4gICAgfTtcbiAgICBUb2tlbkxpc3RPYnNlcnZlci5wcm90b3R5cGUudG9rZW5Vbm1hdGNoZWQgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS50b2tlblVubWF0Y2hlZCh0b2tlbik7XG4gICAgICAgIHRoaXMudG9rZW5zQnlFbGVtZW50LmRlbGV0ZSh0b2tlbi5lbGVtZW50LCB0b2tlbik7XG4gICAgfTtcbiAgICBUb2tlbkxpc3RPYnNlcnZlci5wcm90b3R5cGUucmVmcmVzaFRva2Vuc0ZvckVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgcHJldmlvdXNUb2tlbnMgPSB0aGlzLnRva2Vuc0J5RWxlbWVudC5nZXRWYWx1ZXNGb3JLZXkoZWxlbWVudCk7XG4gICAgICAgIHZhciBjdXJyZW50VG9rZW5zID0gdGhpcy5yZWFkVG9rZW5zRm9yRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgdmFyIGZpcnN0RGlmZmVyaW5nSW5kZXggPSB6aXAocHJldmlvdXNUb2tlbnMsIGN1cnJlbnRUb2tlbnMpXG4gICAgICAgICAgICAuZmluZEluZGV4KGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVG9rZW4gPSBfYVswXSwgY3VycmVudFRva2VuID0gX2FbMV07XG4gICAgICAgICAgICByZXR1cm4gIXRva2Vuc0FyZUVxdWFsKHByZXZpb3VzVG9rZW4sIGN1cnJlbnRUb2tlbik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmlyc3REaWZmZXJpbmdJbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIFtbXSwgW11dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtwcmV2aW91c1Rva2Vucy5zbGljZShmaXJzdERpZmZlcmluZ0luZGV4KSwgY3VycmVudFRva2Vucy5zbGljZShmaXJzdERpZmZlcmluZ0luZGV4KV07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuTGlzdE9ic2VydmVyLnByb3RvdHlwZS5yZWFkVG9rZW5zRm9yRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gdGhpcy5hdHRyaWJ1dGVOYW1lO1xuICAgICAgICB2YXIgdG9rZW5TdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSB8fCBcIlwiO1xuICAgICAgICByZXR1cm4gcGFyc2VUb2tlblN0cmluZyh0b2tlblN0cmluZywgZWxlbWVudCwgYXR0cmlidXRlTmFtZSk7XG4gICAgfTtcbiAgICByZXR1cm4gVG9rZW5MaXN0T2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgVG9rZW5MaXN0T2JzZXJ2ZXIgfTtcbmZ1bmN0aW9uIHBhcnNlVG9rZW5TdHJpbmcodG9rZW5TdHJpbmcsIGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICByZXR1cm4gdG9rZW5TdHJpbmcudHJpbSgpLnNwbGl0KC9cXHMrLykuZmlsdGVyKGZ1bmN0aW9uIChjb250ZW50KSB7IHJldHVybiBjb250ZW50Lmxlbmd0aDsgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoY29udGVudCwgaW5kZXgpIHsgcmV0dXJuICh7IGVsZW1lbnQ6IGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZU5hbWUsIGNvbnRlbnQ6IGNvbnRlbnQsIGluZGV4OiBpbmRleCB9KTsgfSk7XG59XG5mdW5jdGlvbiB6aXAobGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5tYXgobGVmdC5sZW5ndGgsIHJpZ2h0Lmxlbmd0aCk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGxlbmd0aCB9LCBmdW5jdGlvbiAoXywgaW5kZXgpIHsgcmV0dXJuIFtsZWZ0W2luZGV4XSwgcmlnaHRbaW5kZXhdXTsgfSk7XG59XG5mdW5jdGlvbiB0b2tlbnNBcmVFcXVhbChsZWZ0LCByaWdodCkge1xuICAgIHJldHVybiBsZWZ0ICYmIHJpZ2h0ICYmIGxlZnQuaW5kZXggPT0gcmlnaHQuaW5kZXggJiYgbGVmdC5jb250ZW50ID09IHJpZ2h0LmNvbnRlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkRzlyWlc1ZmJHbHpkRjl2WW5ObGNuWmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OTBiMnRsYmw5c2FYTjBYMjlpYzJWeWRtVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzUlVGQlJTeHBRa0ZCYVVJc1JVRkJOa0lzVFVGQlRTeHpRa0ZCYzBJc1EwRkJRVHRCUVVOdVJpeFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc2IwSkJRVzlDTEVOQlFVRTdRVUZqTjBNN1NVRkxSU3d5UWtGQldTeFBRVUZuUWl4RlFVRkZMR0ZCUVhGQ0xFVkJRVVVzVVVGQmJVTTdVVUZEZEVZc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4SFFVRkhMRWxCUVVrc2FVSkJRV2xDTEVOQlFVTXNUMEZCVHl4RlFVRkZMR0ZCUVdFc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlFUdFJRVU0xUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlFUdFJRVU40UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZCTzBsQlEzSkRMRU5CUVVNN1NVRkZSQ3h6UWtGQlNTeHpRMEZCVHp0aFFVRllPMWxCUTBVc1QwRkJUeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1QwRkJUeXhEUVVGQk8xRkJRM1pETEVOQlFVTTdPenRQUVVGQk8wbEJSVVFzYVVOQlFVc3NSMEZCVER0UlFVTkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRVHRKUVVOb1F5eERRVUZETzBsQlJVUXNaME5CUVVrc1IwRkJTanRSUVVORkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlFUdEpRVU12UWl4RFFVRkRPMGxCUlVRc2JVTkJRVThzUjBGQlVEdFJRVU5GTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUVR0SlFVTnNReXhEUVVGRE8wbEJSVVFzYzBKQlFVa3NjME5CUVU4N1lVRkJXRHRaUVVORkxFOUJRVThzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFOUJRVThzUTBGQlFUdFJRVU4yUXl4RFFVRkRPenM3VDBGQlFUdEpRVVZFTEhOQ1FVRkpMRFJEUVVGaE8yRkJRV3BDTzFsQlEwVXNUMEZCVHl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNZVUZCWVN4RFFVRkJPMUZCUXpkRExFTkJRVU03T3p0UFFVRkJPMGxCUlVRc09FSkJRVGhDTzBsQlJUbENMRzFFUVVGMVFpeEhRVUYyUWl4VlFVRjNRaXhQUVVGblFqdFJRVU4wUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZCTzBsQlEzaEVMRU5CUVVNN1NVRkZSQ3gzUkVGQk5FSXNSMEZCTlVJc1ZVRkJOa0lzVDBGQlowSTdVVUZEY2tNc1NVRkJRU3d3UTBGQmQwVXNSVUZCZGtVc2RVSkJRV1VzUlVGQlJTeHhRa0ZCWVN4RFFVRjVRenRSUVVNNVJTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGQk8xRkJRM0pETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVUU3U1VGRGJrTXNRMEZCUXp0SlFVVkVMSEZFUVVGNVFpeEhRVUY2UWl4VlFVRXdRaXhQUVVGblFqdFJRVU40UXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVUU3U1VGRGNrVXNRMEZCUXp0SlFVVlBMSGxEUVVGaExFZEJRWEpDTEZWQlFYTkNMRTFCUVdVN1VVRkJja01zYVVKQlJVTTdVVUZFUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVUVzUzBGQlN5eEpRVUZKTEU5QlFVRXNTMEZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQmVFSXNRMEZCZDBJc1EwRkJReXhEUVVGQk8wbEJRMjVFTEVOQlFVTTdTVUZGVHl3eVEwRkJaU3hIUVVGMlFpeFZRVUYzUWl4TlFVRmxPMUZCUVhaRExHbENRVVZETzFGQlJFTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGQkxFdEJRVXNzU1VGQlNTeFBRVUZCTEV0QlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVEZDTEVOQlFUQkNMRU5CUVVNc1EwRkJRVHRKUVVOeVJDeERRVUZETzBsQlJVOHNkME5CUVZrc1IwRkJjRUlzVlVGQmNVSXNTMEZCV1R0UlFVTXZRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRVHRSUVVOcVF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkJPMGxCUTJoRUxFTkJRVU03U1VGRlR5d3dRMEZCWXl4SFFVRjBRaXhWUVVGMVFpeExRVUZaTzFGQlEycERMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkJPMUZCUTI1RExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVRTdTVUZEYmtRc1EwRkJRenRKUVVWUExHMUVRVUYxUWl4SFFVRXZRaXhWUVVGblF5eFBRVUZuUWp0UlFVTTVReXhKUVVGTkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMR1ZCUVdVc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdFJRVU53UlN4SlFVRk5MR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVUU3VVVGRGVFUXNTVUZCVFN4dFFrRkJiVUlzUjBGQlJ5eEhRVUZITEVOQlFVTXNZMEZCWXl4RlFVRkZMR0ZCUVdFc1EwRkJRenRoUVVNelJDeFRRVUZUTEVOQlFVTXNWVUZCUXl4RlFVRTJRanRuUWtGQk5VSXNjVUpCUVdFc1JVRkJSU3h2UWtGQldUdFpRVUZOTEU5QlFVRXNRMEZCUXl4alFVRmpMRU5CUVVNc1lVRkJZU3hGUVVGRkxGbEJRVmtzUTBGQlF6dFJRVUUxUXl4RFFVRTBReXhEUVVGRExFTkJRVUU3VVVGRk4wWXNTVUZCU1N4dFFrRkJiVUlzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlR0WlFVTTNRaXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkJPMU5CUTJoQ08yRkJRVTA3V1VGRFRDeFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RlFVRkZMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJReXhEUVVGQk8xTkJRemRHTzBsQlEwZ3NRMEZCUXp0SlFVVlBMR2RFUVVGdlFpeEhRVUUxUWl4VlFVRTJRaXhQUVVGblFqdFJRVU16UXl4SlFVRk5MR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZCTzFGQlEzaERMRWxCUVUwc1YwRkJWeXhIUVVGSExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGQk8xRkJRemRFTEU5QlFVOHNaMEpCUVdkQ0xFTkJRVU1zVjBGQlZ5eEZRVUZGTEU5QlFVOHNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJRVHRKUVVNNVJDeERRVUZETzBsQlEwZ3NkMEpCUVVNN1FVRkJSQ3hEUVVGRExFRkJka1pFTEVsQmRVWkRPenRCUVVWRUxEQkNRVUV3UWl4WFFVRnRRaXhGUVVGRkxFOUJRV2RDTEVWQlFVVXNZVUZCY1VJN1NVRkRjRVlzVDBGQlR5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRkJMRTlCUVU4c1NVRkJTU3hQUVVGQkxFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFXUXNRMEZCWXl4RFFVRkRPMU5CUTNKRkxFZEJRVWNzUTBGQlF5eFZRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRWxCUVVzc1QwRkJRU3hEUVVGRExFVkJRVVVzVDBGQlR5eFRRVUZCTEVWQlFVVXNZVUZCWVN4bFFVRkJMRVZCUVVVc1QwRkJUeXhUUVVGQkxFVkJRVVVzUzBGQlN5eFBRVUZCTEVWQlFVVXNRMEZCUXl4RlFVRTFReXhEUVVFMFF5eERRVUZETEVOQlFVRTdRVUZETVVVc1EwRkJRenRCUVVWRUxHRkJRVzFDTEVsQlFWTXNSVUZCUlN4TFFVRlZPMGxCUTNSRExFbEJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVFN1NVRkRiRVFzVDBGQlR5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1RVRkJUU3hSUVVGQkxFVkJRVVVzUlVGQlJTeFZRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRWxCUVVzc1QwRkJRU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVmNzUlVGQmNrTXNRMEZCY1VNc1EwRkJReXhEUVVGQk8wRkJRM0JHTEVOQlFVTTdRVUZGUkN4M1FrRkJkMElzU1VGQldTeEZRVUZGTEV0QlFXRTdTVUZEYWtRc1QwRkJUeXhKUVVGSkxFbEJRVWtzUzBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1MwRkJTeXhEUVVGRExFdEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVUU3UVVGRGNFWXNRMEZCUXlKOSIsImltcG9ydCB7IFRva2VuTGlzdE9ic2VydmVyIH0gZnJvbSBcIi4vdG9rZW5fbGlzdF9vYnNlcnZlclwiO1xudmFyIFZhbHVlTGlzdE9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZhbHVlTGlzdE9ic2VydmVyKGVsZW1lbnQsIGF0dHJpYnV0ZU5hbWUsIGRlbGVnYXRlKSB7XG4gICAgICAgIHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIgPSBuZXcgVG9rZW5MaXN0T2JzZXJ2ZXIoZWxlbWVudCwgYXR0cmlidXRlTmFtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5wYXJzZVJlc3VsdHNCeVRva2VuID0gbmV3IFdlYWtNYXA7XG4gICAgICAgIHRoaXMudmFsdWVzQnlUb2tlbkJ5RWxlbWVudCA9IG5ldyBXZWFrTWFwO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLCBcInN0YXJ0ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2VuTGlzdE9ic2VydmVyLnN0YXJ0ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFZhbHVlTGlzdE9ic2VydmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50b2tlbkxpc3RPYnNlcnZlci5zdGFydCgpO1xuICAgIH07XG4gICAgVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIuc3RvcCgpO1xuICAgIH07XG4gICAgVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG9rZW5MaXN0T2JzZXJ2ZXIucmVmcmVzaCgpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZhbHVlTGlzdE9ic2VydmVyLnByb3RvdHlwZSwgXCJlbGVtZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbkxpc3RPYnNlcnZlci5lbGVtZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLCBcImF0dHJpYnV0ZU5hbWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2VuTGlzdE9ic2VydmVyLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFZhbHVlTGlzdE9ic2VydmVyLnByb3RvdHlwZS50b2tlbk1hdGNoZWQgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0b2tlbi5lbGVtZW50O1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmZldGNoUGFyc2VSZXN1bHRGb3JUb2tlbih0b2tlbikudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mZXRjaFZhbHVlc0J5VG9rZW5Gb3JFbGVtZW50KGVsZW1lbnQpLnNldCh0b2tlbiwgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50TWF0Y2hlZFZhbHVlKGVsZW1lbnQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnRva2VuVW5tYXRjaGVkID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdG9rZW4uZWxlbWVudDtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5mZXRjaFBhcnNlUmVzdWx0Rm9yVG9rZW4odG9rZW4pLnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hWYWx1ZXNCeVRva2VuRm9yRWxlbWVudChlbGVtZW50KS5kZWxldGUodG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lbGVtZW50VW5tYXRjaGVkVmFsdWUoZWxlbWVudCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWYWx1ZUxpc3RPYnNlcnZlci5wcm90b3R5cGUuZmV0Y2hQYXJzZVJlc3VsdEZvclRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHZhciBwYXJzZVJlc3VsdCA9IHRoaXMucGFyc2VSZXN1bHRzQnlUb2tlbi5nZXQodG9rZW4pO1xuICAgICAgICBpZiAoIXBhcnNlUmVzdWx0KSB7XG4gICAgICAgICAgICBwYXJzZVJlc3VsdCA9IHRoaXMucGFyc2VUb2tlbih0b2tlbik7XG4gICAgICAgICAgICB0aGlzLnBhcnNlUmVzdWx0c0J5VG9rZW4uc2V0KHRva2VuLCBwYXJzZVJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlUmVzdWx0O1xuICAgIH07XG4gICAgVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLmZldGNoVmFsdWVzQnlUb2tlbkZvckVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgdmFsdWVzQnlUb2tlbiA9IHRoaXMudmFsdWVzQnlUb2tlbkJ5RWxlbWVudC5nZXQoZWxlbWVudCk7XG4gICAgICAgIGlmICghdmFsdWVzQnlUb2tlbikge1xuICAgICAgICAgICAgdmFsdWVzQnlUb2tlbiA9IG5ldyBNYXA7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc0J5VG9rZW5CeUVsZW1lbnQuc2V0KGVsZW1lbnQsIHZhbHVlc0J5VG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXNCeVRva2VuO1xuICAgIH07XG4gICAgVmFsdWVMaXN0T2JzZXJ2ZXIucHJvdG90eXBlLnBhcnNlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZGVsZWdhdGUucGFyc2VWYWx1ZUZvclRva2VuKHRva2VuKTtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBWYWx1ZUxpc3RPYnNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBWYWx1ZUxpc3RPYnNlcnZlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZG1Gc2RXVmZiR2x6ZEY5dlluTmxjblpsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTkyWVd4MVpWOXNhWE4wWDI5aWMyVnlkbVZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c1JVRkJVeXhwUWtGQmFVSXNSVUZCTmtJc1RVRkJUU3gxUWtGQmRVSXNRMEZCUVR0QlFXRXpSanRKUVUxRkxESkNRVUZaTEU5QlFXZENMRVZCUVVVc1lVRkJjVUlzUlVGQlJTeFJRVUZ6UXp0UlFVTjZSaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hwUWtGQmFVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1lVRkJZU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZCTzFGQlF6VkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZCTzFGQlEzaENMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSMEZCUnl4SlFVRkpMRTlCUVU4c1EwRkJRVHRSUVVOMFF5eEpRVUZKTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVRTdTVUZETTBNc1EwRkJRenRKUVVWRUxITkNRVUZKTEhORFFVRlBPMkZCUVZnN1dVRkRSU3hQUVVGUExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhQUVVGUExFTkJRVUU3VVVGRGRrTXNRMEZCUXpzN08wOUJRVUU3U1VGRlJDeHBRMEZCU3l4SFFVRk1PMUZCUTBVc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGQk8wbEJRMmhETEVOQlFVTTdTVUZGUkN4blEwRkJTU3hIUVVGS08xRkJRMFVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZCTzBsQlF5OUNMRU5CUVVNN1NVRkZSQ3h0UTBGQlR5eEhRVUZRTzFGQlEwVXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkJPMGxCUTJ4RExFTkJRVU03U1VGRlJDeHpRa0ZCU1N4elEwRkJUenRoUVVGWU8xbEJRMFVzVDBGQlR5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVDBGQlR5eERRVUZCTzFGQlEzWkRMRU5CUVVNN096dFBRVUZCTzBsQlJVUXNjMEpCUVVrc05FTkJRV0U3WVVGQmFrSTdXVUZEUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4aFFVRmhMRU5CUVVFN1VVRkROME1zUTBGQlF6czdPMDlCUVVFN1NVRkZSQ3gzUTBGQldTeEhRVUZhTEZWQlFXRXNTMEZCV1R0UlFVTm1MRWxCUVVFc2RVSkJRVThzUTBGQlZUdFJRVU5xUWl4SlFVRkJMR3RFUVVGTExFTkJRWGxETzFGQlEzUkVMRWxCUVVrc1MwRkJTeXhGUVVGRk8xbEJRMVFzU1VGQlNTeERRVUZETERSQ1FVRTBRaXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVUU3V1VGRE5VUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVUU3VTBGRGJFUTdTVUZEU0N4RFFVRkRPMGxCUlVRc01FTkJRV01zUjBGQlpDeFZRVUZsTEV0QlFWazdVVUZEYWtJc1NVRkJRU3gxUWtGQlR5eERRVUZWTzFGQlEycENMRWxCUVVFc2EwUkJRVXNzUTBGQmVVTTdVVUZEZEVRc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFZDeEpRVUZKTEVOQlFVTXNORUpCUVRSQ0xFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8xbEJRM2hFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGQk8xTkJRM0JFTzBsQlEwZ3NRMEZCUXp0SlFVVlBMRzlFUVVGM1FpeEhRVUZvUXl4VlFVRnBReXhMUVVGWk8xRkJRek5ETEVsQlFVa3NWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VVVGRGNrUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOb1FpeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlFUdFpRVU53UXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlFUdFRRVU5xUkR0UlFVTkVMRTlCUVU4c1YwRkJWeXhEUVVGQk8wbEJRM0JDTEVOQlFVTTdTVUZGVHl4M1JFRkJORUlzUjBGQmNFTXNWVUZCY1VNc1QwRkJaMEk3VVVGRGJrUXNTVUZCU1N4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdFJRVU0xUkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8xbEJRMnhDTEdGQlFXRXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJRVHRaUVVOMlFpeEpRVUZKTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJRVHRUUVVONFJEdFJRVU5FTEU5QlFVOHNZVUZCWVN4RFFVRkJPMGxCUTNSQ0xFTkJRVU03U1VGRlR5eHpRMEZCVlN4SFFVRnNRaXhWUVVGdFFpeExRVUZaTzFGQlF6ZENMRWxCUVVrN1dVRkRSaXhKUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkJPMWxCUTNKRUxFOUJRVThzUlVGQlJTeExRVUZMTEU5QlFVRXNSVUZCUlN4RFFVRkJPMU5CUTJwQ08xRkJRVU1zVDBGQlR5eExRVUZMTEVWQlFVVTdXVUZEWkN4UFFVRlBMRVZCUVVVc1MwRkJTeXhQUVVGQkxFVkJRVVVzUTBGQlFUdFRRVU5xUWp0SlFVTklMRU5CUVVNN1NVRkRTQ3gzUWtGQlF6dEJRVUZFTEVOQlFVTXNRVUZxUmtRc1NVRnBSa01pZlE9PSIsImV4cG9ydCBmdW5jdGlvbiBkZWZpbml0aW9uc0Zyb21Db250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dC5rZXlzKClcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBkZWZpbml0aW9uRm9yTW9kdWxlV2l0aENvbnRleHRBbmRLZXkoY29udGV4dCwga2V5KTsgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9KTtcbn1cbmZ1bmN0aW9uIGRlZmluaXRpb25Gb3JNb2R1bGVXaXRoQ29udGV4dEFuZEtleShjb250ZXh0LCBrZXkpIHtcbiAgICB2YXIgaWRlbnRpZmllciA9IGlkZW50aWZpZXJGb3JDb250ZXh0S2V5KGtleSk7XG4gICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25Gb3JNb2R1bGVBbmRJZGVudGlmaWVyKGNvbnRleHQoa2V5KSwgaWRlbnRpZmllcik7XG4gICAgfVxufVxuZnVuY3Rpb24gZGVmaW5pdGlvbkZvck1vZHVsZUFuZElkZW50aWZpZXIobW9kdWxlLCBpZGVudGlmaWVyKSB7XG4gICAgdmFyIGNvbnRyb2xsZXJDb25zdHJ1Y3RvciA9IG1vZHVsZS5kZWZhdWx0O1xuICAgIGlmICh0eXBlb2YgY29udHJvbGxlckNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4geyBpZGVudGlmaWVyOiBpZGVudGlmaWVyLCBjb250cm9sbGVyQ29uc3RydWN0b3I6IGNvbnRyb2xsZXJDb25zdHJ1Y3RvciB9O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyRm9yQ29udGV4dEtleShrZXkpIHtcbiAgICB2YXIgbG9naWNhbE5hbWUgPSAoa2V5Lm1hdGNoKC9eKD86XFwuXFwvKT8oLispKD86W18tXWNvbnRyb2xsZXJcXC4uKz8pJC8pIHx8IFtdKVsxXTtcbiAgICBpZiAobG9naWNhbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGxvZ2ljYWxOYW1lLnJlcGxhY2UoL18vZywgXCItXCIpLnJlcGxhY2UoL1xcLy9nLCBcIi0tXCIpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTlwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZQUVN4TlFVRk5MR2xEUVVGcFF5eFBRVUV3UXp0SlFVTXZSU3hQUVVGUExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVTdVMEZEYkVJc1IwRkJSeXhEUVVGRExGVkJRVUVzUjBGQlJ5eEpRVUZKTEU5QlFVRXNiME5CUVc5RExFTkJRVU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRnNSQ3hEUVVGclJDeERRVUZETzFOQlF6bEVMRTFCUVUwc1EwRkJReXhWUVVGQkxFdEJRVXNzU1VGQlNTeFBRVUZCTEV0QlFVc3NSVUZCVEN4RFFVRkxMRU5CUVdsQ0xFTkJRVUU3UVVGRE0wTXNRMEZCUXp0QlFVVkVMRGhEUVVFNFF5eFBRVUV3UXl4RlFVRkZMRWRCUVZjN1NVRkRia2NzU1VGQlRTeFZRVUZWTEVkQlFVY3NkVUpCUVhWQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdTVUZETDBNc1NVRkJTU3hWUVVGVkxFVkJRVVU3VVVGRFpDeFBRVUZQTEdkRFFVRm5ReXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRVHRMUVVOc1JUdEJRVU5JTEVOQlFVTTdRVUZGUkN3d1EwRkJNRU1zVFVGQmQwSXNSVUZCUlN4VlFVRnJRanRKUVVOd1JpeEpRVUZOTEhGQ1FVRnhRaXhIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVRTdTVUZETlVNc1NVRkJTU3hQUVVGUExIRkNRVUZ4UWl4SlFVRkpMRlZCUVZVc1JVRkJSVHRSUVVNNVF5eFBRVUZQTEVWQlFVVXNWVUZCVlN4WlFVRkJMRVZCUVVVc2NVSkJRWEZDTEhWQ1FVRkJMRVZCUVVVc1EwRkJRVHRMUVVNM1F6dEJRVU5JTEVOQlFVTTdRVUZGUkN4TlFVRk5MR3REUVVGclF5eEhRVUZYTzBsQlEycEVMRWxCUVUwc1YwRkJWeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4M1EwRkJkME1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGQk8wbEJRMnhHTEVsQlFVa3NWMEZCVnl4RlFVRkZPMUZCUTJZc1QwRkJUeXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkJPMHRCUXpORU8wRkJRMGdzUTBGQlF5SjkiLCJleHBvcnQgKiBmcm9tIFwiQHN0aW11bHVzL2NvcmVcIlxuIiwiZXhwb3J0ICogZnJvbSBcIkBzdGltdWx1cy93ZWJwYWNrLWhlbHBlcnNcIlxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2NhbGlicmF0aW9uc19jb250cm9sbGVyLmpzXCI6IFwiLi9wYWNrcy9zcmMvY29udHJvbGxlcnMvY2FsaWJyYXRpb25zX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2ZpbGV2aWV3X2NvbnRyb2xsZXIuanNcIjogXCIuL3BhY2tzL3NyYy9jb250cm9sbGVycy9maWxldmlld19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9wYWNrYWdlc19jb250cm9sbGVyLmpzXCI6IFwiLi9wYWNrcy9zcmMvY29udHJvbGxlcnMvcGFja2FnZXNfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vcHJvY2Vzc2VzX2NvbnRyb2xsZXIuanNcIjogXCIuL3BhY2tzL3NyYy9jb250cm9sbGVycy9wcm9jZXNzZXNfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vc3lzdGVtX2NvbnRyb2xsZXIuanNcIjogXCIuL3BhY2tzL3NyYy9jb250cm9sbGVycy9zeXN0ZW1fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3BhY2tzL3NyYy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmpzJFwiOyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwic3RpbXVsdXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXG4gIHN0YXRpYyBnZXQgdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25uZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiW0RJU1RdIENhbGlicmF0aW9ucyBjb250cm9sbGVyIGNvbm5lY3RlZFwiKTtcbiAgfVxuXG4gIGxvYWRBbGxDYW1lcmEoKSB7XG4gICAgY29uc29sZS5sb2coXCJMb2FkIGFsbCBjYW1lcmFcIik7XG4gIH1cblxuICBsb2FkQWxsUHJvamVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZCBhbGwgcHJvamVjdG9yXCIpO1xuICB9XG5cbiAgbG9hZENhbGlicmF0aW9uKGV2ZW50KSB7XG4gICAgbGV0IGZpbGUgPSBldmVudC50YXJnZXQuZGF0YXNldC5maWxlO1xuICAgIGxldCBvdXRwdXQgPSBldmVudC50YXJnZXQuZGF0YXNldC5vdXRwdXQ7XG4gICAgbGV0IHR5cGUgPSAgZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZTtcblxuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo0NTY3L3NlcnZpY2UvbG9hZF9jb25maWd1cmF0aW9uP2ZpbGU9JHtmaWxlfSZvdXRwdXQ9JHtvdXRwdXR9JnR5cGU9JHt0eXBlfWApXG4gICAgLnRoZW4oIChyZXNwb25zZSkgPT4ge1xuICAgICAgbGV0IG5vdGljZVN1YyA9IG5ldyBQTm90aWZ5KHtcbiAgICAgICAgdGl0bGU6ICdDYWxpYnJhdGlvbiBsb2FkZWQnLFxuICAgICAgICB0ZXh0OiBgPHN0cm9uZz5TdWNjZWVkIHdpdGggbWVzc2FnZTwvc3Ryb25nPjogPGJyLz4gJHtyZXNwb25zZS5kYXRhfWAsXG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgc3R5bGluZzogJ2ZvbnRhd2Vzb21lJyxcbiAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgIHN0aWNrZXI6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbm90aWNlU3VjLmdldCgpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBub3RpY2VTdWMucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCggKGVycm9yKSA9PiB7XG4gICAgICBsZXQgbm90aWNlRXJyID0gbmV3IFBOb3RpZnkoe1xuICAgICAgICB0aXRsZTogJ0NhbGlicmF0aW9uIG5vdCBsb2FkZWQnLFxuICAgICAgICB0ZXh0OiBgU29ycnkgISA8YnIvPiBXZSBhcmUgdW5hYmxlIHRvIGxvYWQgdGhlIGNhbGlicmF0aW9uIGZpbGUgPHN0cm9uZz4ke2ZpbGV9PC9zdHJvbmc+LiA8YnIvPiAke2Vycm9yfWAsXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIHN0eWxpbmc6ICdmb250YXdlc29tZScsXG4gICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICBzdGlja2VyOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG5vdGljZUVyci5nZXQoKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgbm90aWNlRXJyLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwic3RpbXVsdXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXG4gIHN0YXRpYyBnZXQgdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gWydsaXN0JywgJ2NhbGliaW5wdXQnLCAnY2FsaWJrZXknLCAnY2FsaWJpbnB1dGljb24nXTtcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJbRElTVF0gRmlsZSB2aWV3IGNvbnRyb2xsZXIgY29ubmVjdGVkXCIpO1xuICAgIHRoaXMuY2FsaWJpbnB1dFRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbG9hZCgpO1xuICAgIH0sIDYwMDAwKVxuICB9XG5cbiAgYXN5bmMgcmVsb2FkICgpICB7XG4gICAgbGV0IGNhbGlicmF0aW9uRmlsZXNMaXN0ID0gYXdhaXQgdGhpcy5nZXRDYWxpYnJhdGlvbnNGaWxlc0xpc3QoKTtcbiAgICBsZXQgbWFya2VyYm9hcmRGaWxlc0xpc3QgPSBhd2FpdCB0aGlzLmdldE1hcmtlcmJvYXJkc0ZpbGVzTGlzdCgpO1xuXG4gICAgaWYgKGNhbGlicmF0aW9uRmlsZXNMaXN0LmRhdGEpIHtcbiAgICAgIHRoaXMubGlzdFRhcmdldC5pbm5lckhUTUwgPSBjYWxpYnJhdGlvbkZpbGVzTGlzdC5kYXRhO1xuICAgIH1cbiAgICBpZiAobWFya2VyYm9hcmRGaWxlc0xpc3QuZGF0YSkge1xuICAgICAgdGhpcy5saXN0VGFyZ2V0LmlubmVySFRNTCArPSBtYXJrZXJib2FyZEZpbGVzTGlzdC5kYXRhO1xuICAgIH1cbiAgfVxuXG4gIGZpbGVDbGlja2VkKGV2ZW50KSB7XG4gICAgbGV0IGZpbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmlsZTtcbiAgICB0aGlzLnR5cGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZTtcbiAgICB0aGlzLmNhbGliaW5wdXRUYXJnZXQudmFsdWUgPSBmaWxlO1xuICAgIHRoaXMuY2FsaWJpbnB1dFRhcmdldC5jbGFzc0xpc3QuYWRkKCd0ZXh0LXN1Y2Nlc3MnKTtcbiAgICB0aGlzLmNhbGliaW5wdXRpY29uVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ljb24tY2hlY2ttYXJrLWNpcmNsZScpO1xuXG4gIH1cblxuICBsb2FkRmlsZShldmVudCkge1xuICAgIGxldCBjRmlsZSA9IHRoaXMuY2FsaWJpbnB1dFRhcmdldC52YWx1ZTtcbiAgICBsZXQgY0tleSA9IHRoaXMuY2FsaWJrZXlUYXJnZXQudmFsdWU7XG4gICAgaWYgKGNGaWxlID09IFwiXCIgfHwgY0tleSA9PSBcIlwiIHx8IHRoaXMudHlwZSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVE9ETzogRG8gdGhpcyBzZXJ2ZXIgc2lkZVxuICAgIGxldCBvcHRUeXBlID0gXCJcIjtcbiAgICBsZXQgdHlwZUZvbGRlciA9IFwiY2FsaWJyYXRpb25cIlxuICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJjYWxpYnJhdGlvblwiOlxuICAgICAgICBvcHRUeXBlID0gXCItcGRcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicHJvamVjdG9yXCI6XG4gICAgICAgIG9wdFR5cGUgPSBcIi1wZCAtcHJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicG9zZVwiOlxuICAgICAgICBvcHRUeXBlID0gXCItbVwiOyAvL1RPRE86IC1pIG9ubHkgaWYgaW52ZXJ0ZWQgY2hlY2tib3ggY2hlY2tlZFxuICAgICAgICBpZiAoZmFsc2UpXG4gICAgICAgICAgb3B0VHlwZSArPSBcIiAtaVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtYXJrZXJib2FyZFwiOlxuICAgICAgICB0eXBlRm9sZGVyID0gXCJtYXJrZXJib2FyZHNcIlxuICAgICAgICBvcHRUeXBlID0gXCItbWJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvcHRUeXBlID0gXCItcGRcIlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NDU2Ny9zZXJ2aWNlL2xvYWRfY29uZmlndXJhdGlvbj9maWxlPWRhdGEvJHt0eXBlRm9sZGVyfS8ke2NGaWxlfSZvdXRwdXQ9JHtjS2V5fSZ0eXBlPSR7b3B0VHlwZX1gKVxuICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcbiAgICAgIHN1Y2Nlc3NOb3RpZignQ2FsaWJyYXRpb24gbG9hZGVkJywgYDxzdHJvbmc+U3VjY2VlZCB3aXRoIG1lc3NhZ2U8L3N0cm9uZz46IDxici8+ICR7cmVzcG9uc2UuZGF0YX1gKTtcbiAgICB9KVxuICAgIC5jYXRjaCggKGVycm9yKSA9PiB7XG4gICAgICBlcnJvck5vdGlmKCdDYWxpYnJhdGlvbiBub3QgbG9hZGVkJywgYFNvcnJ5ICEgPGJyLz4gV2UgYXJlIHVuYWJsZSB0byBsb2FkIHRoZSBjYWxpYnJhdGlvbiBmaWxlIDxzdHJvbmc+JHtjRmlsZX08L3N0cm9uZz4uIDxici8+ICR7ZXJyb3J9YCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBnZXRNYXJrZXJib2FyZHNGaWxlc0xpc3QgKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjQ1Njcvc3lzdGVtL2ZpbGVzL21hcmtlcmJvYXJkcy9saXN0Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRDYWxpYnJhdGlvbnNGaWxlc0xpc3QgKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjQ1Njcvc3lzdGVtL2ZpbGVzL2NhbGlicmF0aW9ucy9saXN0Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwic3RpbXVsdXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgZ2V0IHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIFsgXCJsaXN0XCIgXVxuICB9XG5cbiAgY29ubmVjdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIltESVNUXSBQYWNrYWdlcyBjb250cm9sbGVyIGNvbm5lY3RlZFwiKTtcbiAgICB0aGlzLnJlbG9hZCgpO1xuICB9XG5cbiAgcmVsb2FkKCkge1xuICAgIHRoaXMuYmxvY2soKSAvLyBQbGF5cyBhbiBhbmltYXRpb25cbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDU2Ny9zeXN0ZW0vcGFja2FnZXMnKVxuICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMubGlzdFRhcmdldC5pbm5lckhUTUwgPSByZXNwb25zZS5kYXRhO1xuICAgICAgJChcIiNwYWNrYWdlcy10YWJsZVwiKS5ib290c3RyYXBUYWJsZSgpO1xuICAgIH0pXG4gICAgLmNhdGNoKCAoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxuICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICB0aGlzLnVuYmxvY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGJsb2NrKCkge1xuICAgICQodGhpcy5lbGVtZW50KS5ibG9jayh7XG4gICAgICBtZXNzYWdlOiAnPGkgY2xhc3M9XCJpY29uLXNwaW5uZXIyIHNwaW5uZXJcIj48L2k+JyxcbiAgICAgIG92ZXJsYXlDU1M6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgICAgY3Vyc29yOiAnd2FpdCcsXG4gICAgICAgICdib3gtc2hhZG93JzogJzAgMCAwIDFweCAjZGRkJ1xuICAgICAgfSxcbiAgICAgIGNzczoge1xuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ25vbmUnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1bmJsb2NrKCl7XG4gICAgJCh0aGlzLmVsZW1lbnQpLnVuYmxvY2soKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJzdGltdWx1c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG5cbiAgc3RhdGljIGdldCB0YXJnZXRzKCkge1xuICAgIHJldHVybiBbIFwibGlzdFwiLCBcInN0YXR1c1wiIF1cbiAgfVxuXG4gIGNvbm5lY3QoKXtcbiAgICBjb25zb2xlLmxvZyhcIltESVNUXSBQcm9jZXNzIHN0aW11bHVzIGNvbm5lY3RlZFwiKTtcbiAgICB0aGlzLnJlbG9hZCgpO1xuICB9XG5cbiAgcmVsb2FkKCkge1xuICAgIHRoaXMuYmxvY2soKTtcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDU2Ny9zZXJ2aWNlL2luZm8vYWxsJylcbiAgICAudGhlbiggKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmxpc3RUYXJnZXQuaW5uZXJIVE1MID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICQoJyNwcm9jZXNzLXRhYmxlJykuYm9vdHN0cmFwVGFibGUoKTtcbiAgICB9KVxuICAgIC5jYXRjaCggKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnVuYmxvY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGJsb2NrKCkge1xuICAgICQodGhpcy5lbGVtZW50KS5ibG9jayh7XG4gICAgICBtZXNzYWdlOiAnPGkgY2xhc3M9XCJpY29uLXNwaW5uZXIyIHNwaW5uZXJcIj48L2k+JyxcbiAgICAgIG92ZXJsYXlDU1M6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgICAgY3Vyc29yOiAnd2FpdCcsXG4gICAgICAgICdib3gtc2hhZG93JzogJzAgMCAwIDFweCAjZGRkJ1xuICAgICAgfSxcbiAgICAgIGNzczoge1xuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ25vbmUnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1bmJsb2NrKCkge1xuICAgICQodGhpcy5lbGVtZW50KS51bmJsb2NrKCk7XG4gIH1cblxuICBzZXJ2aWNlKGV2ZW50KSB7XG4gICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQuZGF0YXNldC5uYW1lO1xuICAgIGxldCBhY3Rpb24gPSBldmVudC50YXJnZXQuZGF0YXNldC5uZXh0YWN0aW9uO1xuICAgIC8vdGhpcy5ibG9jaygpO1xuXG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjQ1Njcvc2VydmljZS8nICsgbmFtZSArICcvJyArIGFjdGlvbilcbiAgICAudGhlbiggKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzdWNjZXNzTm90aWYoJ1NlcnZpY2UnLCAnPHN0cm9uZz4nICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkgKyAnPC9zdHJvbmc+IHN1Y2Nlc3NmdWxseSA8c3Ryb25nPicgKyBhY3Rpb24gKyAnZWQuIDwvc3Ryb25nPicpO1xuICAgIH0pXG4gICAgLmNhdGNoICggKGVycm9yKSA9PiB7XG4gICAgICBlcnJvck5vdGlmKCdTZXJ2aWNlJywgJ09vcHMgISA8L2JyPiA8c3Ryb25nPicgKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSArICc8L3N0cm9uZz4gZmFpbGVkIHRvIDxzdHJvbmc+JyArIGFjdGlvbiArICc8L3N0cm9uZz4uJyk7XG4gICAgfSlcbiAgICAudGhlbiAoICgpID0+IHtcbiAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwic3RpbXVsdXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXG4gIHN0YXRpYyBnZXQgdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gWyBcImNwdVwiLCBcImNwdXByb2dyZXNzXCIsIFwicmFtXCIsIFwicmFtcHJvZ3Jlc3NcIiwgXCJkaXNrXCIsIFwiZGlza3Byb2dyZXNzXCIgXVxuICB9XG5cbiAgY29ubmVjdCgpe1xuICAgIGNvbnNvbGUubG9nKFwiW0RJU1RdIFN5c3RlbSBzdGltdWx1cyBjb25uZWN0ZWRcIik7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgICBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgICAgdGhpcy5yZWxvYWQoKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHJlbG9hZCgpIHtcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDU2Ny9zeXN0ZW0vc3RhdHVzJylcbiAgICAudGhlbiggKHJlc3BvbnNlKSA9PiB7XG4gICAgICBsZXQgdmFsdWVzID0gcmVzcG9uc2UuZGF0YS5zcGxpdChcIlxcblwiKTtcbiAgICAgIGxldCBjcHUgPSB2YWx1ZXNbMF07XG4gICAgICBsZXQgcmFtID0gdmFsdWVzWzFdLnNwbGl0KCc7Jyk7XG4gICAgICBsZXQgZGlzayA9IHZhbHVlc1syXS5zcGxpdCgnOycpO1xuICAgICAgdGhpcy5jcHVUYXJnZXQuaW5uZXJIVE1MID0gYCR7Y3B1fSVgO1xuICAgICAgdGhpcy5yYW1UYXJnZXQuaW5uZXJIVE1MID0gYCR7cGFyc2VJbnQocmFtWzBdLzEwMDApfS8ke3BhcnNlSW50KHJhbVsxXS8xMDAwKX0gTUJgXG4gICAgICB0aGlzLmRpc2tUYXJnZXQuaW5uZXJIVE1MID0gYCR7cGFyc2VJbnQoZGlza1swXSl9LyR7cGFyc2VJbnQoZGlza1sxXSl9IEdCYDtcbiAgICAgIHRoaXMuY3B1cHJvZ3Jlc3NUYXJnZXQuc3R5bGUud2lkdGggPSBgJHtwYXJzZUludChjcHUpfSVgO1xuICAgICAgdGhpcy5yYW1wcm9ncmVzc1RhcmdldC5zdHlsZS53aWR0aCA9IGAke3BhcnNlSW50KHJhbVsyXSl9JWA7XG4gICAgICB0aGlzLmRpc2twcm9ncmVzc1RhcmdldC5zdHlsZS53aWR0aCA9IGAke3BhcnNlSW50KGRpc2tbMl0pfSVgO1xuICAgICAgLy8kKCcjcHJvY2Vzcy10YWJsZScpLmJvb3RzdHJhcFRhYmxlKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gXCJzdGltdWx1c1wiXG5pbXBvcnQgeyBkZWZpbml0aW9uc0Zyb21Db250ZXh0IH0gZnJvbSBcInN0aW11bHVzL3dlYnBhY2staGVscGVyc1wiXG5cbmNvbnN0IGFwcGxpY2F0aW9uID0gQXBwbGljYXRpb24uc3RhcnQoKVxuY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIi4vY29udHJvbGxlcnNcIiwgdHJ1ZSwgL1xcLmpzJC8pXG5hcHBsaWNhdGlvbi5sb2FkKGRlZmluaXRpb25zRnJvbUNvbnRleHQoY29udGV4dCkpXG4iXSwic291cmNlUm9vdCI6IiJ9