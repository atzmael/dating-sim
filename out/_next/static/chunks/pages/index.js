_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/inkjs/dist/ink-es2015.js":
/*!***********************************************!*\
  !*** ./node_modules/inkjs/dist/ink-es2015.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,(function(t){"use strict";class e{constructor(){if(this._components=[],this._componentsString=null,this._isRelative=!1,"string"==typeof arguments[0]){let t=arguments[0];this.componentsString=t}else if(arguments[0]instanceof e.Component&&arguments[1]instanceof e){let t=arguments[0],e=arguments[1];this._components.push(t),this._components=this._components.concat(e._components)}else if(arguments[0]instanceof Array){let t=arguments[0],e=!!arguments[1];this._components=this._components.concat(t),this._isRelative=e}}get isRelative(){return this._isRelative}get componentCount(){return this._components.length}get head(){return this._components.length>0?this._components[0]:null}get tail(){if(this._components.length>=2){let t=this._components.slice(1,this._components.length);return new e(t)}return e.self}get length(){return this._components.length}get lastComponent(){let t=this._components.length-1;return t>=0?this._components[t]:null}get containsNamedComponent(){for(let t=0,e=this._components.length;t<e;t++)if(!this._components[t].isIndex)return!0;return!1}static get self(){let t=new e;return t._isRelative=!0,t}GetComponent(t){return this._components[t]}PathByAppendingPath(t){let n=new e,i=0;for(let e=0;e<t._components.length&&t._components[e].isParent;++e)i++;for(let t=0;t<this._components.length-i;++t)n._components.push(this._components[t]);for(let e=i;e<t._components.length;++e)n._components.push(t._components[e]);return n}get componentsString(){return null==this._componentsString&&(this._componentsString=this._components.join("."),this.isRelative&&(this._componentsString="."+this._componentsString)),this._componentsString}set componentsString(t){if(this._components.length=0,this._componentsString=t,null==this._componentsString||""==this._componentsString)return;"."==this._componentsString[0]&&(this._isRelative=!0,this._componentsString=this._componentsString.substring(1));let n=this._componentsString.split(".");for(let t of n)/^(\-|\+)?([0-9]+|Infinity)$/.test(t)?this._components.push(new e.Component(parseInt(t))):this._components.push(new e.Component(t))}toString(){return this.componentsString}Equals(t){if(null==t)return!1;if(t._components.length!=this._components.length)return!1;if(t.isRelative!=this.isRelative)return!1;for(let e=0,n=t._components.length;e<n;e++)if(!t._components[e].Equals(this._components[e]))return!1;return!0}PathByAppendingComponent(t){let n=new e;return n._components.push.apply(n._components,this._components),n._components.push(t),n}}var n,i,r;function a(t,e){return t instanceof e?h(t):null}function s(t,e){if(t instanceof e)return h(t);throw new Error(`${t} is not of type ${e}`)}function l(t){return t.hasValidName&&t.name?t:null}function o(t){return void 0===t?null:t}function u(t){return"object"==typeof t&&"function"==typeof t.Equals}function h(t,e){return t}e.parentId="^",function(t){class e{constructor(t){this.index=-1,this.name=null,"string"==typeof t?this.name=t:this.index=t}get isIndex(){return this.index>=0}get isParent(){return this.name==t.parentId}static ToParent(){return new e(t.parentId)}toString(){return this.isIndex?this.index.toString():this.name}Equals(t){return null!=t&&t.isIndex==this.isIndex&&(this.isIndex?this.index==t.index:this.name==t.name)}}t.Component=e}(e||(e={})),function(t){function e(t,e){if(!t)throw void 0!==e&&console.warn(e),console.trace&&console.trace(),new Error("")}t.AssertType=function(t,n,i){e(t instanceof n,i)},t.Assert=e}(n||(n={}));class c extends Error{}function d(t){throw new c(t+" is null or undefined")}class p{constructor(){this.parent=null,this._debugMetadata=null,this._path=null}get debugMetadata(){return null===this._debugMetadata&&this.parent?this.parent.debugMetadata:this._debugMetadata}set debugMetadata(t){this._debugMetadata=t}get ownDebugMetadata(){return this._debugMetadata}DebugLineNumberOfPath(t){if(null===t)return null;let e=this.rootContentContainer;if(e){let n=e.ContentAtPath(t).obj;if(n){let t=n.debugMetadata;if(null!==t)return t.startLineNumber}}return null}get path(){if(null==this._path)if(null==this.parent)this._path=new e;else{let t=[],n=this,i=a(n.parent,N);for(;null!==i;){let r=l(n);null!=r&&r.hasValidName?t.unshift(new e.Component(r.name)):t.unshift(new e.Component(i.content.indexOf(n))),n=i,i=a(i.parent,N)}this._path=new e(t)}return this._path}ResolvePath(t){if(null===t)return d("path");if(t.isRelative){let e=a(this,N);return null===e&&(n.Assert(null!==this.parent,"Can't resolve relative path because we don't have a parent"),e=a(this.parent,N),n.Assert(null!==e,"Expected parent to be a container"),n.Assert(t.GetComponent(0).isParent),t=t.tail),null===e?d("nearestContainer"):e.ContentAtPath(t)}{let e=this.rootContentContainer;return null===e?d("contentContainer"):e.ContentAtPath(t)}}ConvertPathToRelative(t){let n=this.path,i=Math.min(t.length,n.length),r=-1;for(let e=0;e<i;++e){let i=n.GetComponent(e),a=t.GetComponent(e);if(!i.Equals(a))break;r=e}if(-1==r)return t;let a=n.componentCount-1-r,s=[];for(let t=0;t<a;++t)s.push(e.Component.ToParent());for(let e=r+1;e<t.componentCount;++e)s.push(t.GetComponent(e));return new e(s,!0)}CompactPathString(t){let e=null,n=null;if(t.isRelative)n=t.componentsString,e=this.path.PathByAppendingPath(t).componentsString;else{n=this.ConvertPathToRelative(t).componentsString,e=t.componentsString}return n.length<e.length?n:e}get rootContentContainer(){let t=this;for(;t.parent;)t=t.parent;return a(t,N)}Copy(){throw Error("Not Implemented: Doesn't support copying")}SetChild(t,e,n){t[e]&&(t[e]=null),t[e]=n,t[e]&&(t[e].parent=this)}}class m{constructor(t){t=void 0!==t?t.toString():"",this.string=t}get Length(){return this.string.length}Append(t){null!==t&&(this.string+=t)}AppendLine(t){void 0!==t&&this.Append(t),this.string+="\n"}AppendFormat(t,...e){this.string+=t.replace(/{(\d+)}/g,(t,n)=>void 0!==e[n]?e[n]:t)}toString(){return this.string}}class f{constructor(){if(this.originName=null,this.itemName=null,void 0!==arguments[1]){let t=arguments[0],e=arguments[1];this.originName=t,this.itemName=e}else if(arguments[0]){let t=arguments[0].toString().split(".");this.originName=t[0],this.itemName=t[1]}}static get Null(){return new f(null,null)}get isNull(){return null==this.originName&&null==this.itemName}get fullName(){return(null!==this.originName?this.originName:"?")+"."+this.itemName}toString(){return this.fullName}Equals(t){if(t instanceof f){let e=t;return e.itemName==this.itemName&&e.originName==this.originName}return!1}copy(){return new f(this.originName,this.itemName)}serialized(){return JSON.stringify({originName:this.originName,itemName:this.itemName})}static fromSerializedKey(t){let e=JSON.parse(t);if(!f.isLikeInkListItem(e))return f.Null;let n=e;return new f(n.originName,n.itemName)}static isLikeInkListItem(t){return"object"==typeof t&&(!(!t.hasOwnProperty("originName")||!t.hasOwnProperty("itemName"))&&(("string"==typeof t.originName||null===typeof t.originName)&&("string"==typeof t.itemName||null===typeof t.itemName)))}}class g extends Map{constructor(){if(super(arguments[0]instanceof g?arguments[0]:[]),this.origins=null,this._originNames=[],arguments[0]instanceof g){let t=arguments[0];t._originNames&&(this._originNames=t._originNames.slice())}else if("string"==typeof arguments[0]){let t=arguments[0],e=arguments[1];this.SetInitialOriginName(t);let n=e.listDefinitions.TryListGetDefinition(t,null);if(!n.exists)throw new Error("InkList origin could not be found in story when constructing new list: "+t);this.origins=[n.result]}else if("object"==typeof arguments[0]&&arguments[0].hasOwnProperty("Key")&&arguments[0].hasOwnProperty("Value")){let t=arguments[0];this.Add(t.Key,t.Value)}}AddItem(t){if(t instanceof f){let e=t;if(null==e.originName)return void this.AddItem(e.itemName);if(null===this.origins)return d("this.origins");for(let t of this.origins)if(t.name==e.originName){let n=t.TryGetValueForItem(e,0);if(n.exists)return void this.Add(e,n.result);throw new Error("Could not add the item "+e+" to this list because it doesn't exist in the original list definition in ink.")}throw new Error("Failed to add item to list because the item was from a new list definition that wasn't previously known to this list. Only items from previously known lists can be used, so that the int value can be found.")}{let e=t,n=null;if(null===this.origins)return d("this.origins");for(let t of this.origins){if(null===e)return d("itemName");if(t.ContainsItemWithName(e)){if(null!=n)throw new Error("Could not add the item "+e+" to this list because it could come from either "+t.name+" or "+n.name);n=t}}if(null==n)throw new Error("Could not add the item "+e+" to this list because it isn't known to any list definitions previously associated with this list.");let i=new f(n.name,e),r=n.ValueForItem(i);this.Add(i,r)}}ContainsItemNamed(t){for(let[e]of this){if(f.fromSerializedKey(e).itemName==t)return!0}return!1}ContainsKey(t){return this.has(t.serialized())}Add(t,e){let n=t.serialized();if(this.has(n))throw new Error("The Map already contains an entry for "+t);this.set(n,e)}Remove(t){return this.delete(t.serialized())}get Count(){return this.size}get originOfMaxItem(){if(null==this.origins)return null;let t=this.maxItem.Key.originName,e=null;return this.origins.every(n=>n.name!=t||(e=n,!1)),e}get originNames(){if(this.Count>0){null==this._originNames&&this.Count>0?this._originNames=[]:(this._originNames||(this._originNames=[]),this._originNames.length=0);for(let[t]of this){let e=f.fromSerializedKey(t);if(null===e.originName)return d("item.originName");this._originNames.push(e.originName)}}return this._originNames}SetInitialOriginName(t){this._originNames=[t]}SetInitialOriginNames(t){this._originNames=null==t?null:t.slice()}get maxItem(){let t={Key:f.Null,Value:0};for(let[e,n]of this){let i=f.fromSerializedKey(e);(t.Key.isNull||n>t.Value)&&(t={Key:i,Value:n})}return t}get minItem(){let t={Key:f.Null,Value:0};for(let[e,n]of this){let i=f.fromSerializedKey(e);(t.Key.isNull||n<t.Value)&&(t={Key:i,Value:n})}return t}get inverse(){let t=new g;if(null!=this.origins)for(let e of this.origins)for(let[n,i]of e.items){let e=f.fromSerializedKey(n);this.ContainsKey(e)||t.Add(e,i)}return t}get all(){let t=new g;if(null!=this.origins)for(let e of this.origins)for(let[n,i]of e.items){let e=f.fromSerializedKey(n);t.set(e.serialized(),i)}return t}Union(t){let e=new g(this);for(let[n,i]of t)e.set(n,i);return e}Intersect(t){let e=new g;for(let[n,i]of this)t.has(n)&&e.set(n,i);return e}Without(t){let e=new g(this);for(let[n]of t)e.delete(n);return e}Contains(t){for(let[e]of t)if(!this.has(e))return!1;return!0}GreaterThan(t){return 0!=this.Count&&(0==t.Count||this.minItem.Value>t.maxItem.Value)}GreaterThanOrEquals(t){return 0!=this.Count&&(0==t.Count||this.minItem.Value>=t.minItem.Value&&this.maxItem.Value>=t.maxItem.Value)}LessThan(t){return 0!=t.Count&&(0==this.Count||this.maxItem.Value<t.minItem.Value)}LessThanOrEquals(t){return 0!=t.Count&&(0==this.Count||this.maxItem.Value<=t.maxItem.Value&&this.minItem.Value<=t.minItem.Value)}MaxAsList(){return this.Count>0?new g(this.maxItem):new g}MinAsList(){return this.Count>0?new g(this.minItem):new g}ListWithSubRange(t,e){if(0==this.Count)return new g;let n=this.orderedItems,i=0,r=Number.MAX_SAFE_INTEGER;Number.isInteger(t)?i=t:t instanceof g&&t.Count>0&&(i=t.minItem.Value),Number.isInteger(e)?r=e:t instanceof g&&t.Count>0&&(r=e.maxItem.Value);let a=new g;a.SetInitialOriginNames(this.originNames);for(let t of n)t.Value>=i&&t.Value<=r&&a.Add(t.Key,t.Value);return a}Equals(t){if(t instanceof g==!1)return!1;if(t.Count!=this.Count)return!1;for(let[e]of this)if(!t.has(e))return!1;return!0}get orderedItems(){let t=new Array;for(let[e,n]of this){let i=f.fromSerializedKey(e);t.push({Key:i,Value:n})}return t.sort((t,e)=>null===t.Key.originName?d("x.Key.originName"):null===e.Key.originName?d("y.Key.originName"):t.Value==e.Value?t.Key.originName.localeCompare(e.Key.originName):t.Value<e.Value?-1:t.Value>e.Value?1:0),t}toString(){let t=this.orderedItems,e=new m;for(let n=0;n<t.length;n++){n>0&&e.Append(", ");let i=t[n].Key;if(null===i.itemName)return d("item.itemName");e.Append(i.itemName)}return e.toString()}valueOf(){return NaN}}class S extends Error{constructor(t){super(t),this.useEndLineNumber=!1,this.message=t,this.name="StoryException"}}function y(t,e,n){if(null===t)return{result:n,exists:!1};let i=t.get(e);return void 0===i?{result:n,exists:!1}:{result:i,exists:!0}}class C extends p{static Create(t,n){if(n){if(n===i.Int&&Number.isInteger(Number(t)))return new b(Number(t));if(n===i.Float&&!isNaN(t))return new _(Number(t))}if("boolean"==typeof t){t=!!t?1:0}return"string"==typeof t?new T(String(t)):Number.isInteger(Number(t))?new b(Number(t)):isNaN(t)?t instanceof e?new P(s(t,e)):t instanceof g?new O(s(t,g)):null:new _(Number(t))}Copy(){return s(C.Create(this),p)}BadCastException(t){return new S("Can't cast "+this.valueObject+" from "+this.valueType+" to "+t)}}class v extends C{constructor(t){super(),this.value=t}get valueObject(){return this.value}toString(){return null===this.value?d("Value.value"):this.value.toString()}}class b extends v{constructor(t){super(t||0)}get isTruthy(){return 0!=this.value}get valueType(){return i.Int}Cast(t){if(null===this.value)return d("Value.value");if(t==this.valueType)return this;if(t==i.Float)return new _(this.value);if(t==i.String)return new T(""+this.value);throw this.BadCastException(t)}}class _ extends v{constructor(t){super(t||0)}get isTruthy(){return 0!=this.value}get valueType(){return i.Float}Cast(t){if(null===this.value)return d("Value.value");if(t==this.valueType)return this;if(t==i.Int)return new b(this.value);if(t==i.String)return new T(""+this.value);throw this.BadCastException(t)}}class T extends v{constructor(t){if(super(t||""),this._isNewline="\n"==this.value,this._isInlineWhitespace=!0,null===this.value)return d("Value.value");this.value.length>0&&this.value.split("").every(t=>" "==t||"\t"==t||(this._isInlineWhitespace=!1,!1))}get valueType(){return i.String}get isTruthy(){return null===this.value?d("Value.value"):this.value.length>0}get isNewline(){return this._isNewline}get isInlineWhitespace(){return this._isInlineWhitespace}get isNonWhitespace(){return!this.isNewline&&!this.isInlineWhitespace}Cast(t){if(t==this.valueType)return this;if(t==i.Int){let e=function(t,e=0){let n=parseInt(t);return Number.isNaN(n)?{result:e,exists:!1}:{result:n,exists:!0}}(this.value);if(e.exists)return new b(e.result);throw this.BadCastException(t)}if(t==i.Float){let e=function(t,e=0){let n=parseFloat(t);return Number.isNaN(n)?{result:e,exists:!1}:{result:n,exists:!0}}(this.value);if(e.exists)return new _(e.result);throw this.BadCastException(t)}throw this.BadCastException(t)}}class P extends v{constructor(t){super(t)}get valueType(){return i.DivertTarget}get targetPath(){return null===this.value?d("Value.value"):this.value}set targetPath(t){this.value=t}get isTruthy(){throw new Error("Shouldn't be checking the truthiness of a divert target")}Cast(t){if(t==this.valueType)return this;throw this.BadCastException(t)}toString(){return"DivertTargetValue("+this.targetPath+")"}}class w extends v{constructor(t,e=-1){super(t),this._contextIndex=e}get contextIndex(){return this._contextIndex}set contextIndex(t){this._contextIndex=t}get variableName(){return null===this.value?d("Value.value"):this.value}set variableName(t){this.value=t}get valueType(){return i.VariablePointer}get isTruthy(){throw new Error("Shouldn't be checking the truthiness of a variable pointer")}Cast(t){if(t==this.valueType)return this;throw this.BadCastException(t)}toString(){return"VariablePointerValue("+this.variableName+")"}Copy(){return new w(this.variableName,this.contextIndex)}}class O extends v{get isTruthy(){return null===this.value?d("this.value"):this.value.Count>0}get valueType(){return i.List}Cast(t){if(null===this.value)return d("Value.value");if(t==i.Int){let t=this.value.maxItem;return t.Key.isNull?new b(0):new b(t.Value)}if(t==i.Float){let t=this.value.maxItem;return t.Key.isNull?new _(0):new _(t.Value)}if(t==i.String){let t=this.value.maxItem;return t.Key.isNull?new T(""):new T(t.Key.toString())}if(t==this.valueType)return this;throw this.BadCastException(t)}constructor(t,e){super(null),t||e?t instanceof g?this.value=new g(t):t instanceof f&&"number"==typeof e&&(this.value=new g({Key:t,Value:e})):this.value=new g}static RetainListOriginsForAssignment(t,e){let n=a(t,O),i=a(e,O);return i&&null===i.value?d("newList.value"):n&&null===n.value?d("oldList.value"):void(n&&i&&0==i.value.Count&&i.value.SetInitialOriginNames(n.value.originNames))}}!function(t){t[t.Int=0]="Int",t[t.Float=1]="Float",t[t.List=2]="List",t[t.String=3]="String",t[t.DivertTarget=4]="DivertTarget",t[t.VariablePointer=5]="VariablePointer"}(i||(i={}));class E{constructor(){this.obj=null,this.approximate=!1}get correctObj(){return this.approximate?null:this.obj}get container(){return this.obj instanceof N?this.obj:null}copy(){let t=new E;return t.obj=this.obj,t.approximate=this.approximate,t}}class N extends p{constructor(){super(...arguments),this.name="",this._content=[],this.namedContent=new Map,this.visitsShouldBeCounted=!1,this.turnIndexShouldBeCounted=!1,this.countingAtStartOnly=!1,this._pathToFirstLeafContent=null}get hasValidName(){return null!=this.name&&this.name.length>0}get content(){return this._content}set content(t){this.AddContent(t)}get namedOnlyContent(){let t=new Map;for(let[e,n]of this.namedContent){let i=s(n,p);t.set(e,i)}for(let e of this.content){let n=l(e);null!=n&&n.hasValidName&&t.delete(n.name)}return 0==t.size&&(t=null),t}set namedOnlyContent(t){let e=this.namedOnlyContent;if(null!=e)for(let[t]of e)this.namedContent.delete(t);if(null!=t)for(let[,e]of t){let t=l(e);null!=t&&this.AddToNamedContentOnly(t)}}get countFlags(){let t=0;return this.visitsShouldBeCounted&&(t|=N.CountFlags.Visits),this.turnIndexShouldBeCounted&&(t|=N.CountFlags.Turns),this.countingAtStartOnly&&(t|=N.CountFlags.CountStartOnly),t==N.CountFlags.CountStartOnly&&(t=0),t}set countFlags(t){let e=t;(e&N.CountFlags.Visits)>0&&(this.visitsShouldBeCounted=!0),(e&N.CountFlags.Turns)>0&&(this.turnIndexShouldBeCounted=!0),(e&N.CountFlags.CountStartOnly)>0&&(this.countingAtStartOnly=!0)}get pathToFirstLeafContent(){return null==this._pathToFirstLeafContent&&(this._pathToFirstLeafContent=this.path.PathByAppendingPath(this.internalPathToFirstLeafContent)),this._pathToFirstLeafContent}get internalPathToFirstLeafContent(){let t=[],n=this;for(;n instanceof N;)n.content.length>0&&(t.push(new e.Component(0)),n=n.content[0]);return new e(t)}AddContent(t){if(t instanceof Array){let e=t;for(let t of e)this.AddContent(t)}else{let e=t;if(this._content.push(e),e.parent)throw new Error("content is already in "+e.parent);e.parent=this,this.TryAddNamedContent(e)}}TryAddNamedContent(t){let e=l(t);null!=e&&e.hasValidName&&this.AddToNamedContentOnly(e)}AddToNamedContentOnly(t){n.AssertType(t,p,"Can only add Runtime.Objects to a Runtime.Container"),s(t,p).parent=this,this.namedContent.set(t.name,t)}ContentAtPath(t,e=0,n=-1){-1==n&&(n=t.length);let i=new E;i.approximate=!1;let r=this,s=this;for(let l=e;l<n;++l){let e=t.GetComponent(l);if(null==r){i.approximate=!0;break}let n=r.ContentWithPathComponent(e);if(null==n){i.approximate=!0;break}s=n,r=a(n,N)}return i.obj=s,i}InsertContent(t,e){if(this.content[e]=t,t.parent)throw new Error("content is already in "+t.parent);t.parent=this,this.TryAddNamedContent(t)}AddContentsOfContainer(t){this.content=this.content.concat(t.content);for(let e of t.content)e.parent=this,this.TryAddNamedContent(e)}ContentWithPathComponent(t){if(t.isIndex)return t.index>=0&&t.index<this.content.length?this.content[t.index]:null;if(t.isParent)return this.parent;{if(null===t.name)return d("component.name");let e=y(this.namedContent,t.name,null);return e.exists?s(e.result,p):null}}BuildStringOfHierarchy(){let t;if(0==arguments.length)return t=new m,this.BuildStringOfHierarchy(t,0,null),t.toString();t=arguments[0];let e=arguments[1],i=arguments[2];function r(){for(let n=0;n<4*e;++n)t.Append(" ")}r(),t.Append("["),this.hasValidName&&t.AppendFormat(" ({0})",this.name),this==i&&t.Append("  <---"),t.AppendLine(),e++;for(let n=0;n<this.content.length;++n){let a=this.content[n];if(a instanceof N){a.BuildStringOfHierarchy(t,e,i)}else r(),a instanceof T?(t.Append('"'),t.Append(a.toString().replace("\n","\\n")),t.Append('"')):t.Append(a.toString());n!=this.content.length-1&&t.Append(","),a instanceof N||a!=i||t.Append("  <---"),t.AppendLine()}let a=new Map;for(let[t,e]of this.namedContent)this.content.indexOf(s(e,p))>=0||a.set(t,e);if(a.size>0){r(),t.AppendLine("-- named: --");for(let[,r]of a){n.AssertType(r,N,"Can only print out named Containers"),r.BuildStringOfHierarchy(t,e,i),t.AppendLine()}}e--,r(),t.Append("]")}}!function(t){let e;!function(t){t[t.Visits=1]="Visits",t[t.Turns=2]="Turns",t[t.CountStartOnly=4]="CountStartOnly"}(e=t.CountFlags||(t.CountFlags={}))}(N||(N={}));class x extends p{toString(){return"Glue"}}class A extends p{constructor(t=A.CommandType.NotSet){super(),this._commandType=t}get commandType(){return this._commandType}Copy(){return new A(this.commandType)}static EvalStart(){return new A(A.CommandType.EvalStart)}static EvalOutput(){return new A(A.CommandType.EvalOutput)}static EvalEnd(){return new A(A.CommandType.EvalEnd)}static Duplicate(){return new A(A.CommandType.Duplicate)}static PopEvaluatedValue(){return new A(A.CommandType.PopEvaluatedValue)}static PopFunction(){return new A(A.CommandType.PopFunction)}static PopTunnel(){return new A(A.CommandType.PopTunnel)}static BeginString(){return new A(A.CommandType.BeginString)}static EndString(){return new A(A.CommandType.EndString)}static NoOp(){return new A(A.CommandType.NoOp)}static ChoiceCount(){return new A(A.CommandType.ChoiceCount)}static Turns(){return new A(A.CommandType.Turns)}static TurnsSince(){return new A(A.CommandType.TurnsSince)}static ReadCount(){return new A(A.CommandType.ReadCount)}static Random(){return new A(A.CommandType.Random)}static SeedRandom(){return new A(A.CommandType.SeedRandom)}static VisitIndex(){return new A(A.CommandType.VisitIndex)}static SequenceShuffleIndex(){return new A(A.CommandType.SequenceShuffleIndex)}static StartThread(){return new A(A.CommandType.StartThread)}static Done(){return new A(A.CommandType.Done)}static End(){return new A(A.CommandType.End)}static ListFromInt(){return new A(A.CommandType.ListFromInt)}static ListRange(){return new A(A.CommandType.ListRange)}static ListRandom(){return new A(A.CommandType.ListRandom)}toString(){return this.commandType.toString()}}!function(t){let e;!function(t){t[t.NotSet=-1]="NotSet",t[t.EvalStart=0]="EvalStart",t[t.EvalOutput=1]="EvalOutput",t[t.EvalEnd=2]="EvalEnd",t[t.Duplicate=3]="Duplicate",t[t.PopEvaluatedValue=4]="PopEvaluatedValue",t[t.PopFunction=5]="PopFunction",t[t.PopTunnel=6]="PopTunnel",t[t.BeginString=7]="BeginString",t[t.EndString=8]="EndString",t[t.NoOp=9]="NoOp",t[t.ChoiceCount=10]="ChoiceCount",t[t.Turns=11]="Turns",t[t.TurnsSince=12]="TurnsSince",t[t.Random=13]="Random",t[t.SeedRandom=14]="SeedRandom",t[t.VisitIndex=15]="VisitIndex",t[t.SequenceShuffleIndex=16]="SequenceShuffleIndex",t[t.StartThread=17]="StartThread",t[t.Done=18]="Done",t[t.End=19]="End",t[t.ListFromInt=20]="ListFromInt",t[t.ListRange=21]="ListRange",t[t.ListRandom=22]="ListRandom",t[t.ReadCount=23]="ReadCount",t[t.TOTAL_VALUES=24]="TOTAL_VALUES"}(e=t.CommandType||(t.CommandType={}))}(A||(A={})),function(t){t[t.Tunnel=0]="Tunnel",t[t.Function=1]="Function",t[t.FunctionEvaluationFromGame=2]="FunctionEvaluationFromGame"}(r||(r={}));class I{constructor(){this.container=null,this.index=-1,2===arguments.length&&(this.container=arguments[0],this.index=arguments[1])}Resolve(){return this.index<0?this.container:null==this.container?null:0==this.container.content.length?this.container:this.index>=this.container.content.length?null:this.container.content[this.index]}get isNull(){return null==this.container}get path(){return this.isNull?null:this.index>=0?this.container.path.PathByAppendingComponent(new e.Component(this.index)):this.container.path}toString(){return this.container?"Ink Pointer -> "+this.container.path.toString()+" -- index "+this.index:"Ink Pointer (null)"}copy(){return new I(this.container,this.index)}static StartOf(t){return new I(t,0)}static get Null(){return new I(null,-1)}}class k extends p{constructor(t){super(),this._targetPath=null,this._targetPointer=I.Null,this.variableDivertName=null,this.pushesToStack=!1,this.stackPushType=0,this.isExternal=!1,this.externalArgs=0,this.isConditional=!1,this.pushesToStack=!1,void 0!==t&&(this.pushesToStack=!0,this.stackPushType=t)}get targetPath(){if(null!=this._targetPath&&this._targetPath.isRelative){let t=this.targetPointer.Resolve();t&&(this._targetPath=t.path)}return this._targetPath}set targetPath(t){this._targetPath=t,this._targetPointer=I.Null}get targetPointer(){if(this._targetPointer.isNull){let t=this.ResolvePath(this._targetPath).obj;if(null===this._targetPath)return d("this._targetPath");if(null===this._targetPath.lastComponent)return d("this._targetPath.lastComponent");if(this._targetPath.lastComponent.isIndex){if(null===t)return d("targetObj");this._targetPointer.container=t.parent instanceof N?t.parent:null,this._targetPointer.index=this._targetPath.lastComponent.index}else this._targetPointer=I.StartOf(t instanceof N?t:null)}return this._targetPointer.copy()}get targetPathString(){return null==this.targetPath?null:this.CompactPathString(this.targetPath)}set targetPathString(t){this.targetPath=null==t?null:new e(t)}get hasVariableTarget(){return null!=this.variableDivertName}Equals(t){let e=t;return e instanceof k&&this.hasVariableTarget==e.hasVariableTarget&&(this.hasVariableTarget?this.variableDivertName==e.variableDivertName:null===this.targetPath?d("this.targetPath"):this.targetPath.Equals(e.targetPath))}toString(){if(this.hasVariableTarget)return"Divert(variable: "+this.variableDivertName+")";if(null==this.targetPath)return"Divert(null)";{let t=new m,e=this.targetPath.toString();return t.Append("Divert"),this.isConditional&&t.Append("?"),this.pushesToStack&&(this.stackPushType==r.Function?t.Append(" function"):t.Append(" tunnel")),t.Append(" -> "),t.Append(this.targetPathString),t.Append(" ("),t.Append(e),t.Append(")"),t.toString()}}}class W extends p{constructor(t=!0){super(),this._pathOnChoice=null,this.hasCondition=!1,this.hasStartContent=!1,this.hasChoiceOnlyContent=!1,this.isInvisibleDefault=!1,this.onceOnly=!0,this.onceOnly=t}get pathOnChoice(){if(null!=this._pathOnChoice&&this._pathOnChoice.isRelative){let t=this.choiceTarget;t&&(this._pathOnChoice=t.path)}return this._pathOnChoice}set pathOnChoice(t){this._pathOnChoice=t}get choiceTarget(){return null===this._pathOnChoice?d("ChoicePoint._pathOnChoice"):this.ResolvePath(this._pathOnChoice).container}get pathStringOnChoice(){return null===this.pathOnChoice?d("ChoicePoint.pathOnChoice"):this.CompactPathString(this.pathOnChoice)}set pathStringOnChoice(t){this.pathOnChoice=new e(t)}get flags(){let t=0;return this.hasCondition&&(t|=1),this.hasStartContent&&(t|=2),this.hasChoiceOnlyContent&&(t|=4),this.isInvisibleDefault&&(t|=8),this.onceOnly&&(t|=16),t}set flags(t){this.hasCondition=(1&t)>0,this.hasStartContent=(2&t)>0,this.hasChoiceOnlyContent=(4&t)>0,this.isInvisibleDefault=(8&t)>0,this.onceOnly=(16&t)>0}toString(){if(null===this.pathOnChoice)return d("ChoicePoint.pathOnChoice");return"Choice: -> "+this.pathOnChoice.toString()}}class F extends p{constructor(t=null){super(),this.pathForCount=null,this.name=t}get containerForCount(){return null===this.pathForCount?null:this.ResolvePath(this.pathForCount).container}get pathStringForCount(){return null===this.pathForCount?null:this.CompactPathString(this.pathForCount)}set pathStringForCount(t){this.pathForCount=null===t?null:new e(t)}toString(){if(null!=this.name)return"var("+this.name+")";return"read_count("+this.pathStringForCount+")"}}class V extends p{constructor(t,e){super(),this.variableName=t||null,this.isNewDeclaration=!!e,this.isGlobal=!1}toString(){return"VarAssign to "+this.variableName}}class L extends p{}class R extends p{constructor(){if(super(),this._name=null,this._numberOfParameters=0,this._prototype=null,this._isPrototype=!1,this._operationFuncs=null,0===arguments.length)R.GenerateNativeFunctionsIfNecessary();else if(1===arguments.length){let t=arguments[0];R.GenerateNativeFunctionsIfNecessary(),this.name=t}else if(2===arguments.length){let t=arguments[0],e=arguments[1];this._isPrototype=!0,this.name=t,this.numberOfParameters=e}}static CallWithName(t){return new R(t)}static CallExistsWithName(t){return this.GenerateNativeFunctionsIfNecessary(),this._nativeFunctions.get(t)}get name(){return null===this._name?d("NativeFunctionCall._name"):this._name}set name(t){this._name=t,this._isPrototype||(null===R._nativeFunctions?d("NativeFunctionCall._nativeFunctions"):this._prototype=R._nativeFunctions.get(this._name)||null)}get numberOfParameters(){return this._prototype?this._prototype.numberOfParameters:this._numberOfParameters}set numberOfParameters(t){this._numberOfParameters=t}Call(t){if(this._prototype)return this._prototype.Call(t);if(this.numberOfParameters!=t.length)throw new Error("Unexpected number of parameters");let e=!1;for(let n of t){if(n instanceof L)throw new S('Attempting to perform operation on a void value. Did you forget to "return" a value from a function you called here?');n instanceof O&&(e=!0)}if(2==t.length&&e)return this.CallBinaryListOperation(t);let n=this.CoerceValuesToSingleType(t),r=n[0].valueType;return r==i.Int||r==i.Float||r==i.String||r==i.DivertTarget||r==i.List?this.CallType(n):null}CallType(t){let e=s(t[0],v),n=e.valueType,r=e,a=t.length;if(2==a||1==a){if(null===this._operationFuncs)return d("NativeFunctionCall._operationFuncs");let l=this._operationFuncs.get(n);if(!l){const t=i[n];throw new S("Cannot perform operation "+this.name+" on "+t)}if(2==a){let e=s(t[1],v),n=l;if(null===r.value||null===e.value)return d("NativeFunctionCall.Call BinaryOp values");let i=n(r.value,e.value);return v.Create(i)}{let t=l;if(null===r.value)return d("NativeFunctionCall.Call UnaryOp value");let n=t(r.value);return this.name===R.Int?v.Create(n,i.Int):this.name===R.Float?v.Create(n,i.Float):v.Create(n,e.valueType)}}throw new Error("Unexpected number of parameters to NativeFunctionCall: "+t.length)}CallBinaryListOperation(t){if(("+"==this.name||"-"==this.name)&&t[0]instanceof O&&t[1]instanceof b)return this.CallListIncrementOperation(t);let e=s(t[0],v),n=s(t[1],v);if(!("&&"!=this.name&&"||"!=this.name||e.valueType==i.List&&n.valueType==i.List)){if(null===this._operationFuncs)return d("NativeFunctionCall._operationFuncs");let t=this._operationFuncs.get(i.Int);if(null===t)return d("NativeFunctionCall.CallBinaryListOperation op");let r=t(e.isTruthy?1:0,n.isTruthy?1:0);return new b(r)}if(e.valueType==i.List&&n.valueType==i.List)return this.CallType([e,n]);throw new S("Can not call use "+this.name+" operation on "+i[e.valueType]+" and "+i[n.valueType])}CallListIncrementOperation(t){let e=s(t[0],O),n=s(t[1],b),r=new g;if(null===e.value)return d("NativeFunctionCall.CallListIncrementOperation listVal.value");for(let[t,a]of e.value){let s=f.fromSerializedKey(t);if(null===this._operationFuncs)return d("NativeFunctionCall._operationFuncs");let l=this._operationFuncs.get(i.Int);if(null===n.value)return d("NativeFunctionCall.CallListIncrementOperation intVal.value");let o=l(a,n.value),u=null;if(null===e.value.origins)return d("NativeFunctionCall.CallListIncrementOperation listVal.value.origins");for(let t of e.value.origins)if(t.name==s.originName){u=t;break}if(null!=u){let t=u.TryGetItemWithValue(o,f.Null);t.exists&&r.Add(t.result,o)}}return new O(r)}CoerceValuesToSingleType(t){let e=i.Int,n=null;for(let r of t){let t=s(r,v);t.valueType>e&&(e=t.valueType),t.valueType==i.List&&(n=a(t,O))}let r=[];if(i[e]==i[i.List])for(let e of t){let t=s(e,v);if(t.valueType==i.List)r.push(t);else{if(t.valueType!=i.Int){const e=i[t.valueType];throw new S("Cannot mix Lists and "+e+" values in this operation")}{let e=parseInt(t.valueObject);if(n=s(n,O),null===n.value)return d("NativeFunctionCall.CoerceValuesToSingleType specialCaseList.value");let i=n.value.originOfMaxItem;if(null===i)return d("NativeFunctionCall.CoerceValuesToSingleType list");let a=i.TryGetItemWithValue(e,f.Null);if(!a.exists)throw new S("Could not find List item with the value "+e+" in "+i.name);{let t=new O(a.result,e);r.push(t)}}}}else for(let n of t){let t=s(n,v).Cast(e);r.push(t)}return r}static Identity(t){return t}static GenerateNativeFunctionsIfNecessary(){if(null==this._nativeFunctions){this._nativeFunctions=new Map,this.AddIntBinaryOp(this.Add,(t,e)=>t+e),this.AddIntBinaryOp(this.Subtract,(t,e)=>t-e),this.AddIntBinaryOp(this.Multiply,(t,e)=>t*e),this.AddIntBinaryOp(this.Divide,(t,e)=>Math.floor(t/e)),this.AddIntBinaryOp(this.Mod,(t,e)=>t%e),this.AddIntUnaryOp(this.Negate,t=>-t),this.AddIntBinaryOp(this.Equal,(t,e)=>t==e?1:0),this.AddIntBinaryOp(this.Greater,(t,e)=>t>e?1:0),this.AddIntBinaryOp(this.Less,(t,e)=>t<e?1:0),this.AddIntBinaryOp(this.GreaterThanOrEquals,(t,e)=>t>=e?1:0),this.AddIntBinaryOp(this.LessThanOrEquals,(t,e)=>t<=e?1:0),this.AddIntBinaryOp(this.NotEquals,(t,e)=>t!=e?1:0),this.AddIntUnaryOp(this.Not,t=>0==t?1:0),this.AddIntBinaryOp(this.And,(t,e)=>0!=t&&0!=e?1:0),this.AddIntBinaryOp(this.Or,(t,e)=>0!=t||0!=e?1:0),this.AddIntBinaryOp(this.Max,(t,e)=>Math.max(t,e)),this.AddIntBinaryOp(this.Min,(t,e)=>Math.min(t,e)),this.AddIntBinaryOp(this.Pow,(t,e)=>Math.pow(t,e)),this.AddIntUnaryOp(this.Floor,R.Identity),this.AddIntUnaryOp(this.Ceiling,R.Identity),this.AddIntUnaryOp(this.Int,R.Identity),this.AddIntUnaryOp(this.Float,t=>t),this.AddFloatBinaryOp(this.Add,(t,e)=>t+e),this.AddFloatBinaryOp(this.Subtract,(t,e)=>t-e),this.AddFloatBinaryOp(this.Multiply,(t,e)=>t*e),this.AddFloatBinaryOp(this.Divide,(t,e)=>t/e),this.AddFloatBinaryOp(this.Mod,(t,e)=>t%e),this.AddFloatUnaryOp(this.Negate,t=>-t),this.AddFloatBinaryOp(this.Equal,(t,e)=>t==e?1:0),this.AddFloatBinaryOp(this.Greater,(t,e)=>t>e?1:0),this.AddFloatBinaryOp(this.Less,(t,e)=>t<e?1:0),this.AddFloatBinaryOp(this.GreaterThanOrEquals,(t,e)=>t>=e?1:0),this.AddFloatBinaryOp(this.LessThanOrEquals,(t,e)=>t<=e?1:0),this.AddFloatBinaryOp(this.NotEquals,(t,e)=>t!=e?1:0),this.AddFloatUnaryOp(this.Not,t=>0==t?1:0),this.AddFloatBinaryOp(this.And,(t,e)=>0!=t&&0!=e?1:0),this.AddFloatBinaryOp(this.Or,(t,e)=>0!=t||0!=e?1:0),this.AddFloatBinaryOp(this.Max,(t,e)=>Math.max(t,e)),this.AddFloatBinaryOp(this.Min,(t,e)=>Math.min(t,e)),this.AddFloatBinaryOp(this.Pow,(t,e)=>Math.pow(t,e)),this.AddFloatUnaryOp(this.Floor,t=>Math.floor(t)),this.AddFloatUnaryOp(this.Ceiling,t=>Math.ceil(t)),this.AddFloatUnaryOp(this.Int,t=>Math.floor(t)),this.AddFloatUnaryOp(this.Float,R.Identity),this.AddStringBinaryOp(this.Add,(t,e)=>t+e),this.AddStringBinaryOp(this.Equal,(t,e)=>t===e?1:0),this.AddStringBinaryOp(this.NotEquals,(t,e)=>t!==e?1:0),this.AddStringBinaryOp(this.Has,(t,e)=>t.includes(e)?1:0),this.AddStringBinaryOp(this.Hasnt,(t,e)=>t.includes(e)?0:1),this.AddListBinaryOp(this.Add,(t,e)=>t.Union(e)),this.AddListBinaryOp(this.Subtract,(t,e)=>t.Without(e)),this.AddListBinaryOp(this.Has,(t,e)=>t.Contains(e)?1:0),this.AddListBinaryOp(this.Hasnt,(t,e)=>t.Contains(e)?0:1),this.AddListBinaryOp(this.Intersect,(t,e)=>t.Intersect(e)),this.AddListBinaryOp(this.Equal,(t,e)=>t.Equals(e)?1:0),this.AddListBinaryOp(this.Greater,(t,e)=>t.GreaterThan(e)?1:0),this.AddListBinaryOp(this.Less,(t,e)=>t.LessThan(e)?1:0),this.AddListBinaryOp(this.GreaterThanOrEquals,(t,e)=>t.GreaterThanOrEquals(e)?1:0),this.AddListBinaryOp(this.LessThanOrEquals,(t,e)=>t.LessThanOrEquals(e)?1:0),this.AddListBinaryOp(this.NotEquals,(t,e)=>t.Equals(e)?0:1),this.AddListBinaryOp(this.And,(t,e)=>t.Count>0&&e.Count>0?1:0),this.AddListBinaryOp(this.Or,(t,e)=>t.Count>0||e.Count>0?1:0),this.AddListUnaryOp(this.Not,t=>0==t.Count?1:0),this.AddListUnaryOp(this.Invert,t=>t.inverse),this.AddListUnaryOp(this.All,t=>t.all),this.AddListUnaryOp(this.ListMin,t=>t.MinAsList()),this.AddListUnaryOp(this.ListMax,t=>t.MaxAsList()),this.AddListUnaryOp(this.Count,t=>t.Count),this.AddListUnaryOp(this.ValueOfList,t=>t.maxItem.Value);let t=(t,e)=>t.Equals(e)?1:0,e=(t,e)=>t.Equals(e)?0:1;this.AddOpToNativeFunc(this.Equal,2,i.DivertTarget,t),this.AddOpToNativeFunc(this.NotEquals,2,i.DivertTarget,e)}}AddOpFuncForType(t,e){null==this._operationFuncs&&(this._operationFuncs=new Map),this._operationFuncs.set(t,e)}static AddOpToNativeFunc(t,e,n,i){if(null===this._nativeFunctions)return d("NativeFunctionCall._nativeFunctions");let r=this._nativeFunctions.get(t);r||(r=new R(t,e),this._nativeFunctions.set(t,r)),r.AddOpFuncForType(n,i)}static AddIntBinaryOp(t,e){this.AddOpToNativeFunc(t,2,i.Int,e)}static AddIntUnaryOp(t,e){this.AddOpToNativeFunc(t,1,i.Int,e)}static AddFloatBinaryOp(t,e){this.AddOpToNativeFunc(t,2,i.Float,e)}static AddFloatUnaryOp(t,e){this.AddOpToNativeFunc(t,1,i.Float,e)}static AddStringBinaryOp(t,e){this.AddOpToNativeFunc(t,2,i.String,e)}static AddListBinaryOp(t,e){this.AddOpToNativeFunc(t,2,i.List,e)}static AddListUnaryOp(t,e){this.AddOpToNativeFunc(t,1,i.List,e)}toString(){return'Native "'+this.name+'"'}}R.Add="+",R.Subtract="-",R.Divide="/",R.Multiply="*",R.Mod="%",R.Negate="_",R.Equal="==",R.Greater=">",R.Less="<",R.GreaterThanOrEquals=">=",R.LessThanOrEquals="<=",R.NotEquals="!=",R.Not="!",R.And="&&",R.Or="||",R.Min="MIN",R.Max="MAX",R.Pow="POW",R.Floor="FLOOR",R.Ceiling="CEILING",R.Int="INT",R.Float="FLOAT",R.Has="?",R.Hasnt="!?",R.Intersect="^",R.ListMin="LIST_MIN",R.ListMax="LIST_MAX",R.All="LIST_ALL",R.Count="LIST_COUNT",R.ValueOfList="LIST_VALUE",R.Invert="LIST_INVERT",R._nativeFunctions=null;class j extends p{constructor(t){super(),this.text=t.toString()||""}toString(){return"# "+this.text}}class D extends p{constructor(){super(...arguments),this.text="",this.index=0,this.threadAtGeneration=null,this.sourcePath="",this.targetPath=null,this.isInvisibleDefault=!1,this.originalThreadIndex=0}get pathStringOnChoice(){return null===this.targetPath?d("Choice.targetPath"):this.targetPath.toString()}set pathStringOnChoice(t){this.targetPath=new e(t)}}class G{constructor(t,e){this._name=t||"",this._items=null,this._itemNameToValues=e||new Map}get name(){return this._name}get items(){if(null==this._items){this._items=new Map;for(let[t,e]of this._itemNameToValues){let n=new f(this.name,t);this._items.set(n.serialized(),e)}}return this._items}ValueForItem(t){if(!t.itemName)return 0;let e=this._itemNameToValues.get(t.itemName);return void 0!==e?e:0}ContainsItem(t){return!!t.itemName&&(t.originName==this.name&&this._itemNameToValues.has(t.itemName))}ContainsItemWithName(t){return this._itemNameToValues.has(t)}TryGetItemWithValue(t,e){for(let[e,n]of this._itemNameToValues)if(n==t)return{result:new f(this.name,e),exists:!0};return{result:f.Null,exists:!1}}TryGetValueForItem(t,e){if(!t.itemName)return{result:0,exists:!1};let n=this._itemNameToValues.get(t.itemName);return n?{result:n,exists:!0}:{result:0,exists:!1}}}class B{constructor(t){this._lists=new Map,this._allUnambiguousListValueCache=new Map;for(let e of t){this._lists.set(e.name,e);for(let[t,n]of e.items){let e=f.fromSerializedKey(t),i=new O(e,n);if(!e.itemName)throw new Error("item.itemName is null or undefined.");this._allUnambiguousListValueCache.set(e.itemName,i),this._allUnambiguousListValueCache.set(e.fullName,i)}}}get lists(){let t=[];for(let[,e]of this._lists)t.push(e);return t}TryListGetDefinition(t,e){if(null===t)return{result:e,exists:!1};let n=this._lists.get(t);return n?{result:n,exists:!0}:{result:e,exists:!1}}FindSingleItemListWithName(t){if(null===t)return d("name");let e=this._allUnambiguousListValueCache.get(t);return void 0!==e?e:null}}class M{static JArrayToRuntimeObjList(t,e=!1){let n=t.length;e&&n--;let i=[];for(let e=0;e<n;e++){let n=t[e],r=this.JTokenToRuntimeObject(n);if(null===r)return d("runtimeObj");i.push(r)}return i}static WriteDictionaryRuntimeObjs(t,e){t.WriteObjectStart();for(let[n,i]of e)t.WritePropertyStart(n),this.WriteRuntimeObject(t,i),t.WritePropertyEnd();t.WriteObjectEnd()}static WriteListRuntimeObjs(t,e){t.WriteArrayStart();for(let n of e)this.WriteRuntimeObject(t,n);t.WriteArrayEnd()}static WriteIntDictionary(t,e){t.WriteObjectStart();for(let[n,i]of e)t.WriteIntProperty(n,i);t.WriteObjectEnd()}static WriteRuntimeObject(t,e){let n=a(e,N);if(n)return void this.WriteRuntimeContainer(t,n);let i=a(e,k);if(i){let e,n="->";return i.isExternal?n="x()":i.pushesToStack&&(i.stackPushType==r.Function?n="f()":i.stackPushType==r.Tunnel&&(n="->t->")),e=i.hasVariableTarget?i.variableDivertName:i.targetPathString,t.WriteObjectStart(),t.WriteProperty(n,e),i.hasVariableTarget&&t.WriteProperty("var",!0),i.isConditional&&t.WriteProperty("c",!0),i.externalArgs>0&&t.WriteIntProperty("exArgs",i.externalArgs),void t.WriteObjectEnd()}let s=a(e,W);if(s)return t.WriteObjectStart(),t.WriteProperty("*",s.pathStringOnChoice),t.WriteIntProperty("flg",s.flags),void t.WriteObjectEnd();let l=a(e,b);if(l)return void t.WriteInt(l.value);let o=a(e,_);if(o)return void t.WriteFloat(o.value);let u=a(e,T);if(u)return void(u.isNewline?t.Write("\n",!1):(t.WriteStringStart(),t.WriteStringInner("^"),t.WriteStringInner(u.value),t.WriteStringEnd()));let h=a(e,O);if(h)return void this.WriteInkList(t,h);let c=a(e,P);if(c)return t.WriteObjectStart(),null===c.value?d("divTargetVal.value"):(t.WriteProperty("^->",c.value.componentsString),void t.WriteObjectEnd());let p=a(e,w);if(p)return t.WriteObjectStart(),t.WriteProperty("^var",p.value),t.WriteIntProperty("ci",p.contextIndex),void t.WriteObjectEnd();if(a(e,x))return void t.Write("<>");let m=a(e,A);if(m)return void t.Write(M._controlCommandNames[m.commandType]);let f=a(e,R);if(f){let e=f.name;return"^"==e&&(e="L^"),void t.Write(e)}let g=a(e,F);if(g){t.WriteObjectStart();let e=g.pathStringForCount;return null!=e?t.WriteProperty("CNT?",e):t.WriteProperty("VAR?",g.name),void t.WriteObjectEnd()}let S=a(e,V);if(S){t.WriteObjectStart();let e=S.isGlobal?"VAR=":"temp=";return t.WriteProperty(e,S.variableName),S.isNewDeclaration||t.WriteProperty("re",!0),void t.WriteObjectEnd()}if(a(e,L))return void t.Write("void");let y=a(e,j);if(y)return t.WriteObjectStart(),t.WriteProperty("#",y.text),void t.WriteObjectEnd();let C=a(e,D);if(!C)throw new Error("Failed to convert runtime object to Json token: "+e);this.WriteChoice(t,C)}static JObjectToDictionaryRuntimeObjs(t){let e=new Map;for(let n in t)if(t.hasOwnProperty(n)){let i=this.JTokenToRuntimeObject(t[n]);if(null===i)return d("inkObject");e.set(n,i)}return e}static JObjectToIntDictionary(t){let e=new Map;for(let n in t)t.hasOwnProperty(n)&&e.set(n,parseInt(t[n]));return e}static JTokenToRuntimeObject(t){if("number"==typeof t&&!isNaN(t))return v.Create(t);if("string"==typeof t){let e=t.toString(),n=e[0];if("^"==n)return new T(e.substring(1));if("\n"==n&&1==e.length)return new T("\n");if("<>"==e)return new x;for(let t=0;t<M._controlCommandNames.length;++t){if(e==M._controlCommandNames[t])return new A(t)}if("L^"==e&&(e="^"),R.CallExistsWithName(e))return R.CallWithName(e);if("->->"==e)return A.PopTunnel();if("~ret"==e)return A.PopFunction();if("void"==e)return new L}if("object"==typeof t&&!Array.isArray(t)){let n,i=t;if(i["^->"])return n=i["^->"],new P(new e(n.toString()));if(i["^var"]){n=i["^var"];let t=new w(n.toString());return"ci"in i&&(n=i.ci,t.contextIndex=parseInt(n)),t}let a=!1,s=!1,l=r.Function,o=!1;if((n=i["->"])?a=!0:(n=i["f()"])?(a=!0,s=!0,l=r.Function):(n=i["->t->"])?(a=!0,s=!0,l=r.Tunnel):(n=i["x()"])&&(a=!0,o=!0,s=!1,l=r.Function),a){let t=new k;t.pushesToStack=s,t.stackPushType=l,t.isExternal=o;let e=n.toString();return(n=i.var)?t.variableDivertName=e:t.targetPathString=e,t.isConditional=!!i.c,o&&(n=i.exArgs)&&(t.externalArgs=parseInt(n)),t}if(n=i["*"]){let t=new W;return t.pathStringOnChoice=n.toString(),(n=i.flg)&&(t.flags=parseInt(n)),t}if(n=i["VAR?"])return new F(n.toString());if(n=i["CNT?"]){let t=new F;return t.pathStringForCount=n.toString(),t}let u=!1,h=!1;if((n=i["VAR="])?(u=!0,h=!0):(n=i["temp="])&&(u=!0,h=!1),u){let t=n.toString(),e=!i.re,r=new V(t,e);return r.isGlobal=h,r}if(void 0!==i["#"])return n=i["#"],new j(n.toString());if(n=i.list){let t=n,e=new g;if(n=i.origins){let t=n;e.SetInitialOriginNames(t)}for(let n in t)if(t.hasOwnProperty(n)){let i=t[n],r=new f(n),a=parseInt(i);e.Add(r,a)}return new O(e)}if(null!=i.originalChoicePath)return this.JObjectToChoice(i)}if(Array.isArray(t))return this.JArrayToContainer(t);if(null==t)return null;throw new Error("Failed to convert token to runtime object: "+JSON.stringify(t))}static WriteRuntimeContainer(t,e,n=!1){if(t.WriteArrayStart(),null===e)return d("container");for(let n of e.content)this.WriteRuntimeObject(t,n);let i=e.namedOnlyContent,r=e.countFlags,s=null!=e.name&&!n,l=null!=i||r>0||s;if(l&&t.WriteObjectStart(),null!=i)for(let[e,n]of i){let i=e,r=a(n,N);t.WritePropertyStart(i),this.WriteRuntimeContainer(t,r,!0),t.WritePropertyEnd()}s&&t.WriteProperty("#n",e.name),l?t.WriteObjectEnd():t.WriteNull(),t.WriteArrayEnd()}static JArrayToContainer(t){let e=new N;e.content=this.JArrayToRuntimeObjList(t,!0);let n=t[t.length-1];if(null!=n){let t=new Map;for(let i in n)if("#f"==i)e.countFlags=parseInt(n[i]);else if("#n"==i)e.name=n[i].toString();else{let e=this.JTokenToRuntimeObject(n[i]),r=a(e,N);r&&(r.name=i),t.set(i,e)}e.namedOnlyContent=t}return e}static JObjectToChoice(t){let e=new D;return e.text=t.text.toString(),e.index=parseInt(t.index),e.sourcePath=t.originalChoicePath.toString(),e.originalThreadIndex=parseInt(t.originalThreadIndex),e.pathStringOnChoice=t.targetPath.toString(),e}static WriteChoice(t,e){t.WriteObjectStart(),t.WriteProperty("text",e.text),t.WriteIntProperty("index",e.index),t.WriteProperty("originalChoicePath",e.sourcePath),t.WriteIntProperty("originalThreadIndex",e.originalThreadIndex),t.WriteProperty("targetPath",e.pathStringOnChoice),t.WriteObjectEnd()}static WriteInkList(t,e){let n=e.value;if(null===n)return d("rawList");t.WriteObjectStart(),t.WritePropertyStart("list"),t.WriteObjectStart();for(let[e,i]of n){let n=f.fromSerializedKey(e),r=i;if(null===n.itemName)return d("item.itemName");t.WritePropertyNameStart(),t.WritePropertyNameInner(n.originName?n.originName:"?"),t.WritePropertyNameInner("."),t.WritePropertyNameInner(n.itemName),t.WritePropertyNameEnd(),t.Write(r),t.WritePropertyEnd()}if(t.WriteObjectEnd(),t.WritePropertyEnd(),0==n.Count&&null!=n.originNames&&n.originNames.length>0){t.WritePropertyStart("origins"),t.WriteArrayStart();for(let e of n.originNames)t.Write(e);t.WriteArrayEnd(),t.WritePropertyEnd()}t.WriteObjectEnd()}static ListDefinitionsToJToken(t){let e={};for(let n of t.lists){let t={};for(let[e,i]of n.items){let n=f.fromSerializedKey(e);if(null===n.itemName)return d("item.itemName");t[n.itemName]=i}e[n.name]=t}return e}static JTokenToListDefinitions(t){let e=t,n=[];for(let t in e)if(e.hasOwnProperty(t)){let i=t.toString(),r=e[t],a=new Map;for(let n in r)if(e.hasOwnProperty(t)){let t=r[n];a.set(n,parseInt(t))}let s=new G(i,a);n.push(s)}return new B(n)}}M._controlCommandNames=(()=>{let t=[];t[A.CommandType.EvalStart]="ev",t[A.CommandType.EvalOutput]="out",t[A.CommandType.EvalEnd]="/ev",t[A.CommandType.Duplicate]="du",t[A.CommandType.PopEvaluatedValue]="pop",t[A.CommandType.PopFunction]="~ret",t[A.CommandType.PopTunnel]="->->",t[A.CommandType.BeginString]="str",t[A.CommandType.EndString]="/str",t[A.CommandType.NoOp]="nop",t[A.CommandType.ChoiceCount]="choiceCnt",t[A.CommandType.Turns]="turn",t[A.CommandType.TurnsSince]="turns",t[A.CommandType.ReadCount]="readc",t[A.CommandType.Random]="rnd",t[A.CommandType.SeedRandom]="srnd",t[A.CommandType.VisitIndex]="visit",t[A.CommandType.SequenceShuffleIndex]="seq",t[A.CommandType.StartThread]="thread",t[A.CommandType.Done]="done",t[A.CommandType.End]="end",t[A.CommandType.ListFromInt]="listInt",t[A.CommandType.ListRange]="range",t[A.CommandType.ListRandom]="lrnd";for(let e=0;e<A.CommandType.TOTAL_VALUES;++e)if(null==t[e])throw new Error("Control command not accounted for in serialisation");return t})();class q{constructor(){if(this._threadCounter=0,this._startOfRoot=I.Null,arguments[0]instanceof X){let t=arguments[0];this._startOfRoot=I.StartOf(t.rootContentContainer),this.Reset()}else{let t=arguments[0];this._threads=[];for(let e of t._threads)this._threads.push(e.Copy());this._threadCounter=t._threadCounter,this._startOfRoot=t._startOfRoot}}get elements(){return this.callStack}get depth(){return this.elements.length}get currentElement(){let t=this._threads[this._threads.length-1].callstack;return t[t.length-1]}get currentElementIndex(){return this.callStack.length-1}get currentThread(){return this._threads[this._threads.length-1]}set currentThread(t){n.Assert(1==this._threads.length,"Shouldn't be directly setting the current thread when we have a stack of them"),this._threads.length=0,this._threads.push(t)}get canPop(){return this.callStack.length>1}Reset(){this._threads=[],this._threads.push(new q.Thread),this._threads[0].callstack.push(new q.Element(r.Tunnel,this._startOfRoot))}SetJsonToken(t,e){this._threads.length=0;let n=t.threads;for(let t of n){let n=t,i=new q.Thread(n,e);this._threads.push(i)}this._threadCounter=parseInt(t.threadCounter),this._startOfRoot=I.StartOf(e.rootContentContainer)}WriteJson(t){t.WriteObject(t=>{t.WritePropertyStart("threads"),t.WriteArrayStart();for(let e of this._threads)e.WriteJson(t);t.WriteArrayEnd(),t.WritePropertyEnd(),t.WritePropertyStart("threadCounter"),t.WriteInt(this._threadCounter),t.WritePropertyEnd()})}PushThread(){let t=this.currentThread.Copy();this._threadCounter++,t.threadIndex=this._threadCounter,this._threads.push(t)}ForkThread(){let t=this.currentThread.Copy();return this._threadCounter++,t.threadIndex=this._threadCounter,t}PopThread(){if(!this.canPopThread)throw new Error("Can't pop thread");this._threads.splice(this._threads.indexOf(this.currentThread),1)}get canPopThread(){return this._threads.length>1&&!this.elementIsEvaluateFromGame}get elementIsEvaluateFromGame(){return this.currentElement.type==r.FunctionEvaluationFromGame}Push(t,e=0,n=0){let i=new q.Element(t,this.currentElement.currentPointer,!1);i.evaluationStackHeightWhenPushed=e,i.functionStartInOutputStream=n,this.callStack.push(i)}CanPop(t=null){return!!this.canPop&&(null==t||this.currentElement.type==t)}Pop(t=null){if(!this.CanPop(t))throw new Error("Mismatched push/pop in Callstack");this.callStack.pop()}GetTemporaryVariableWithName(t,e=-1){-1==e&&(e=this.currentElementIndex+1);let n=y(this.callStack[e-1].temporaryVariables,t,null);return n.exists?n.result:null}SetTemporaryVariable(t,e,n,i=-1){-1==i&&(i=this.currentElementIndex+1);let r=this.callStack[i-1];if(!n&&!r.temporaryVariables.get(t))throw new S("Could not find temporary variable to set: "+t);let a=y(r.temporaryVariables,t,null);a.exists&&O.RetainListOriginsForAssignment(a.result,e),r.temporaryVariables.set(t,e)}ContextForVariableNamed(t){return this.currentElement.temporaryVariables.get(t)?this.currentElementIndex+1:0}ThreadWithIndex(t){let e=this._threads.filter(e=>{if(e.threadIndex==t)return e});return e.length>0?e[0]:null}get callStack(){return this.currentThread.callstack}get callStackTrace(){let t=new m;for(let e=0;e<this._threads.length;e++){let n=this._threads[e],i=e==this._threads.length-1;t.AppendFormat("=== THREAD {0}/{1} {2}===\n",e+1,this._threads.length,i?"(current) ":"");for(let e=0;e<n.callstack.length;e++){n.callstack[e].type==r.Function?t.Append("  [FUNCTION] "):t.Append("  [TUNNEL] ");let i=n.callstack[e].currentPointer;if(!i.isNull){if(t.Append("<SOMEWHERE IN "),null===i.container)return d("pointer.container");t.Append(i.container.path.toString()),t.AppendLine(">")}}}return t.toString()}}!function(t){class n{constructor(t,e,n=!1){this.evaluationStackHeightWhenPushed=0,this.functionStartInOutputStream=0,this.currentPointer=e.copy(),this.inExpressionEvaluation=n,this.temporaryVariables=new Map,this.type=t}Copy(){let t=new n(this.type,this.currentPointer,this.inExpressionEvaluation);return t.temporaryVariables=new Map(this.temporaryVariables),t.evaluationStackHeightWhenPushed=this.evaluationStackHeightWhenPushed,t.functionStartInOutputStream=this.functionStartInOutputStream,t}}t.Element=n;class i{constructor(){if(this.threadIndex=0,this.previousPointer=I.Null,this.callstack=[],arguments[0]&&arguments[1]){let t=arguments[0],i=arguments[1];this.threadIndex=parseInt(t.threadIndex);let r=t.callstack;for(let t of r){let r,a=t,s=parseInt(a.type),l=I.Null,o=a.cPath;if(void 0!==o){r=o.toString();let t=i.ContentAtPath(new e(r));if(l.container=t.container,l.index=parseInt(a.idx),null==t.obj)throw new Error("When loading state, internal story location couldn't be found: "+r+". Has the story changed since this save data was created?");if(t.approximate){if(null===l.container)return d("pointer.container");i.Warning("When loading state, exact internal story location couldn't be found: '"+r+"', so it was approximated to '"+l.container.path.toString()+"' to recover. Has the story changed since this save data was created?")}}let u=!!a.exp,h=new n(s,l,u),c=a.temp;void 0!==c?h.temporaryVariables=M.JObjectToDictionaryRuntimeObjs(c):h.temporaryVariables.clear(),this.callstack.push(h)}let a=t.previousContentObject;if(void 0!==a){let t=new e(a.toString());this.previousPointer=i.PointerAtPath(t)}}}Copy(){let t=new i;t.threadIndex=this.threadIndex;for(let e of this.callstack)t.callstack.push(e.Copy());return t.previousPointer=this.previousPointer.copy(),t}WriteJson(t){t.WriteObjectStart(),t.WritePropertyStart("callstack"),t.WriteArrayStart();for(let e of this.callstack){if(t.WriteObjectStart(),!e.currentPointer.isNull){if(null===e.currentPointer.container)return d("el.currentPointer.container");t.WriteProperty("cPath",e.currentPointer.container.path.componentsString),t.WriteIntProperty("idx",e.currentPointer.index)}t.WriteProperty("exp",e.inExpressionEvaluation),t.WriteIntProperty("type",e.type),e.temporaryVariables.size>0&&(t.WritePropertyStart("temp"),M.WriteDictionaryRuntimeObjs(t,e.temporaryVariables),t.WritePropertyEnd()),t.WriteObjectEnd()}if(t.WriteArrayEnd(),t.WritePropertyEnd(),t.WriteIntProperty("threadIndex",this.threadIndex),!this.previousPointer.isNull){let e=this.previousPointer.Resolve();if(null===e)return d("this.previousPointer.Resolve()");t.WriteProperty("previousContentObject",e.path.toString())}t.WriteObjectEnd()}}t.Thread=i}(q||(q={}));class J{constructor(t,e){this.variableChangedEventCallbacks=[],this.patch=null,this._batchObservingVariableChanges=!1,this._defaultGlobalVariables=new Map,this._changedVariablesForBatchObs=new Set,this._globalVariables=new Map,this._callStack=t,this._listDefsOrigin=e;try{return new Proxy(this,{get:(t,e)=>e in t?t[e]:t.$(e),set:(t,e,n)=>(e in t?t[e]=n:t.$(e,n),!0)})}catch(t){}}variableChangedEvent(t,e){for(let n of this.variableChangedEventCallbacks)n(t,e)}get batchObservingVariableChanges(){return this._batchObservingVariableChanges}set batchObservingVariableChanges(t){if(this._batchObservingVariableChanges=t,t)this._changedVariablesForBatchObs=new Set;else if(null!=this._changedVariablesForBatchObs){for(let t of this._changedVariablesForBatchObs){let e=this._globalVariables.get(t);e?this.variableChangedEvent(t,e):d("currentValue")}this._changedVariablesForBatchObs=null}}get callStack(){return this._callStack}set callStack(t){this._callStack=t}$(t,e){if(void 0===e){let e=null;return null!==this.patch&&(e=this.patch.TryGetGlobal(t,null),e.exists)?e.result.valueObject:(e=this._globalVariables.get(t),void 0===e&&(e=this._defaultGlobalVariables.get(t)),void 0!==e?e.valueObject:null)}{if(void 0===this._defaultGlobalVariables.get(t))throw new S("Cannot assign to a variable ("+t+") that hasn't been declared in the story");let n=v.Create(e);if(null==n)throw new S(null==e?"Cannot pass null to VariableState":"Invalid value passed to VariableState: "+e.toString());this.SetGlobal(t,n)}}ApplyPatch(){if(null===this.patch)return d("this.patch");for(let[t,e]of this.patch.globals)this._globalVariables.set(t,e);if(null!==this._changedVariablesForBatchObs)for(let t of this.patch.changedVariables)this._changedVariablesForBatchObs.add(t);this.patch=null}SetJsonToken(t){this._globalVariables.clear();for(let[e,n]of this._defaultGlobalVariables){let i=t[e];if(void 0!==i){let t=M.JTokenToRuntimeObject(i);if(null===t)return d("tokenInkObject");this._globalVariables.set(e,t)}else this._globalVariables.set(e,n)}}WriteJson(t){t.WriteObjectStart();for(let[e,n]of this._globalVariables){let i=e,r=n;if(J.dontSaveDefaultValues&&this._defaultGlobalVariables.has(i)){let t=this._defaultGlobalVariables.get(i);if(this.RuntimeObjectsEqual(r,t))continue}t.WritePropertyStart(i),M.WriteRuntimeObject(t,r),t.WritePropertyEnd()}t.WriteObjectEnd()}RuntimeObjectsEqual(t,e){if(null===t)return d("obj1");if(null===e)return d("obj2");if(t.constructor!==e.constructor)return!1;let n=a(t,b);if(null!==n)return n.value===s(e,b).value;let i=a(t,_);if(null!==i)return i.value===s(e,_).value;let r=a(t,v),l=a(e,v);if(null!==r&&null!==l)return u(r.valueObject)&&u(l.valueObject)?r.valueObject.Equals(l.valueObject):r.valueObject===l.valueObject;throw new Error("FastRoughDefinitelyEquals: Unsupported runtime object type: "+t.constructor.name)}GetVariableWithName(t,e=-1){let n=this.GetRawVariableWithName(t,e),i=a(n,w);return null!==i&&(n=this.ValueAtVariablePointer(i)),n}TryGetDefaultVariableValue(t){let e=y(this._defaultGlobalVariables,t,null);return e.exists?e.result:null}GlobalVariableExistsWithName(t){return this._globalVariables.has(t)||null!==this._defaultGlobalVariables&&this._defaultGlobalVariables.has(t)}GetRawVariableWithName(t,e){let n=null;if(0==e||-1==e){let e=null;if(null!==this.patch&&(e=this.patch.TryGetGlobal(t,null),e.exists))return e.result;if(e=y(this._globalVariables,t,null),e.exists)return e.result;if(null!==this._defaultGlobalVariables&&(e=y(this._defaultGlobalVariables,t,null),e.exists))return e.result;if(null===this._listDefsOrigin)return d("VariablesState._listDefsOrigin");let n=this._listDefsOrigin.FindSingleItemListWithName(t);if(n)return n}return n=this._callStack.GetTemporaryVariableWithName(t,e),n}ValueAtVariablePointer(t){return this.GetVariableWithName(t.variableName,t.contextIndex)}Assign(t,e){let n=t.variableName;if(null===n)return d("name");let i=-1,r=!1;if(r=t.isNewDeclaration?t.isGlobal:this.GlobalVariableExistsWithName(n),t.isNewDeclaration){let t=a(e,w);if(null!==t){e=this.ResolveVariablePointer(t)}}else{let t=null;do{t=a(this.GetRawVariableWithName(n,i),w),null!=t&&(n=t.variableName,i=t.contextIndex,r=0==i)}while(null!=t)}r?this.SetGlobal(n,e):this._callStack.SetTemporaryVariable(n,e,t.isNewDeclaration,i)}SnapshotDefaultGlobals(){this._defaultGlobalVariables=new Map(this._globalVariables)}RetainListOriginsForAssignment(t,e){let n=s(t,O),i=s(e,O);n.value&&i.value&&0==i.value.Count&&i.value.SetInitialOriginNames(n.value.originNames)}SetGlobal(t,e){let n=null;if(null===this.patch&&(n=y(this._globalVariables,t,null)),null!==this.patch&&(n=this.patch.TryGetGlobal(t,null),n.exists||(n=y(this._globalVariables,t,null))),O.RetainListOriginsForAssignment(n.result,e),null===t)return d("variableName");if(null!==this.patch?this.patch.SetGlobal(t,e):this._globalVariables.set(t,e),null!==this.variableChangedEvent&&null!==n&&e!==n.result)if(this.batchObservingVariableChanges){if(null===this._changedVariablesForBatchObs)return d("this._changedVariablesForBatchObs");null!==this.patch?this.patch.AddChangedVariable(t):null!==this._changedVariablesForBatchObs&&this._changedVariablesForBatchObs.add(t)}else this.variableChangedEvent(t,e)}ResolveVariablePointer(t){let e=t.contextIndex;-1==e&&(e=this.GetContextIndexOfVariableNamed(t.variableName));let n=a(this.GetRawVariableWithName(t.variableName,e),w);return null!=n?n:new w(t.variableName,e)}GetContextIndexOfVariableNamed(t){return this.GlobalVariableExistsWithName(t)?0:this._callStack.currentElementIndex}ObserveVariableChange(t){this.variableChangedEventCallbacks.push(t)}}J.dontSaveDefaultValues=!0;class K{constructor(t){this.seed=t%2147483647,this.seed<=0&&(this.seed+=2147483646)}next(){return this.seed=16807*this.seed%2147483647}nextFloat(){return(this.next()-1)/2147483646}}class U{constructor(){if(this._changedVariables=new Set,this._visitCounts=new Map,this._turnIndices=new Map,1===arguments.length&&null!==arguments[0]){let t=arguments[0];this._globals=new Map(t._globals),this._changedVariables=new Set(t._changedVariables),this._visitCounts=new Map(t._visitCounts),this._turnIndices=new Map(t._turnIndices)}else this._globals=new Map,this._changedVariables=new Set,this._visitCounts=new Map,this._turnIndices=new Map}get globals(){return this._globals}get changedVariables(){return this._changedVariables}get visitCounts(){return this._visitCounts}get turnIndices(){return this._turnIndices}TryGetGlobal(t,e){return null!==t&&this._globals.has(t)?{result:this._globals.get(t),exists:!0}:{result:e,exists:!1}}SetGlobal(t,e){this._globals.set(t,e)}AddChangedVariable(t){return this._changedVariables.add(t)}TryGetVisitCount(t,e){return this._visitCounts.has(t)?{result:this._visitCounts.get(t),exists:!0}:{result:e,exists:!1}}SetVisitCount(t,e){this._visitCounts.set(t,e)}SetTurnIndex(t,e){this._turnIndices.set(t,e)}TryGetTurnIndex(t,e){return this._turnIndices.has(t)?{result:this._turnIndices.get(t),exists:!0}:{result:e,exists:!1}}}class z{static TextToDictionary(t){return new z.Reader(t).ToDictionary()}static TextToArray(t){return new z.Reader(t).ToArray()}}!function(t){t.Reader=class{constructor(t){this._rootObject=JSON.parse(t)}ToDictionary(){return this._rootObject}ToArray(){return this._rootObject}};class e{constructor(){this._currentPropertyName=null,this._currentString=null,this._stateStack=[],this._collectionStack=[],this._propertyNameStack=[],this._jsonObject=null}WriteObject(t){this.WriteObjectStart(),t(this),this.WriteObjectEnd()}WriteObjectStart(){this.StartNewObject(!0);let e={};if(this.state===t.Writer.State.Property){this.Assert(null!==this.currentCollection),this.Assert(null!==this.currentPropertyName);let t=this._propertyNameStack.pop();this.currentCollection[t]=e,this._collectionStack.push(e)}else this.state===t.Writer.State.Array?(this.Assert(null!==this.currentCollection),this.currentCollection.push(e),this._collectionStack.push(e)):(this.Assert(this.state===t.Writer.State.None),this._jsonObject=e,this._collectionStack.push(e));this._stateStack.push(new t.Writer.StateElement(t.Writer.State.Object))}WriteObjectEnd(){this.Assert(this.state===t.Writer.State.Object),this._collectionStack.pop(),this._stateStack.pop()}WriteProperty(t,e){if(this.WritePropertyStart(t),arguments[1]instanceof Function){(0,arguments[1])(this)}else{let t=arguments[1];this.Write(t)}this.WritePropertyEnd()}WriteIntProperty(t,e){this.WritePropertyStart(t),this.WriteInt(e),this.WritePropertyEnd()}WriteFloatProperty(t,e){this.WritePropertyStart(t),this.WriteFloat(e),this.WritePropertyEnd()}WritePropertyStart(e){this.Assert(this.state===t.Writer.State.Object),this._propertyNameStack.push(e),this.IncrementChildCount(),this._stateStack.push(new t.Writer.StateElement(t.Writer.State.Property))}WritePropertyEnd(){this.Assert(this.state===t.Writer.State.Property),this.Assert(1===this.childCount),this._stateStack.pop()}WritePropertyNameStart(){this.Assert(this.state===t.Writer.State.Object),this.IncrementChildCount(),this._currentPropertyName="",this._stateStack.push(new t.Writer.StateElement(t.Writer.State.Property)),this._stateStack.push(new t.Writer.StateElement(t.Writer.State.PropertyName))}WritePropertyNameEnd(){this.Assert(this.state===t.Writer.State.PropertyName),this.Assert(null!==this._currentPropertyName),this._propertyNameStack.push(this._currentPropertyName),this._currentPropertyName=null,this._stateStack.pop()}WritePropertyNameInner(e){this.Assert(this.state===t.Writer.State.PropertyName),this.Assert(null!==this._currentPropertyName),this._currentPropertyName+=e}WriteArrayStart(){this.StartNewObject(!0);let e=[];if(this.state===t.Writer.State.Property){this.Assert(null!==this.currentCollection),this.Assert(null!==this.currentPropertyName);let t=this._propertyNameStack.pop();this.currentCollection[t]=e,this._collectionStack.push(e)}else this.state===t.Writer.State.Array?(this.Assert(null!==this.currentCollection),this.currentCollection.push(e),this._collectionStack.push(e)):(this.Assert(this.state===t.Writer.State.None),this._jsonObject=e,this._collectionStack.push(e));this._stateStack.push(new t.Writer.StateElement(t.Writer.State.Array))}WriteArrayEnd(){this.Assert(this.state===t.Writer.State.Array),this._collectionStack.pop(),this._stateStack.pop()}Write(t,e=!0){null!==t?(this.StartNewObject(!1),this._addToCurrentObject(t)):console.error("Warning: trying to write a null string")}WriteInt(t){null!==t&&(this.StartNewObject(!1),this._addToCurrentObject(Math.floor(t)))}WriteFloat(t){null!==t&&(this.StartNewObject(!1),t==Number.POSITIVE_INFINITY?this._addToCurrentObject(34e37):t==Number.NEGATIVE_INFINITY?this._addToCurrentObject(-34e37):isNaN(t)?this._addToCurrentObject(0):this._addToCurrentObject(t))}WriteNull(){this.StartNewObject(!1),this._addToCurrentObject(null)}WriteStringStart(){this.StartNewObject(!1),this._currentString="",this._stateStack.push(new t.Writer.StateElement(t.Writer.State.String))}WriteStringEnd(){this.Assert(this.state==t.Writer.State.String),this._stateStack.pop(),this._addToCurrentObject(this._currentString),this._currentString=null}WriteStringInner(e,n=!0){this.Assert(this.state===t.Writer.State.String),null!==e?this._currentString+=e:console.error("Warning: trying to write a null string")}ToString(){return null===this._jsonObject?"":JSON.stringify(this._jsonObject)}StartNewObject(e){e?this.Assert(this.state===t.Writer.State.None||this.state===t.Writer.State.Property||this.state===t.Writer.State.Array):this.Assert(this.state===t.Writer.State.Property||this.state===t.Writer.State.Array),this.state===t.Writer.State.Property&&this.Assert(0===this.childCount),this.state!==t.Writer.State.Array&&this.state!==t.Writer.State.Property||this.IncrementChildCount()}get state(){return this._stateStack.length>0?this._stateStack[this._stateStack.length-1].type:t.Writer.State.None}get childCount(){return this._stateStack.length>0?this._stateStack[this._stateStack.length-1].childCount:0}get currentCollection(){return this._collectionStack.length>0?this._collectionStack[this._collectionStack.length-1]:null}get currentPropertyName(){return this._propertyNameStack.length>0?this._propertyNameStack[this._propertyNameStack.length-1]:null}IncrementChildCount(){this.Assert(this._stateStack.length>0);let t=this._stateStack.pop();t.childCount++,this._stateStack.push(t)}Assert(t){if(!t)throw Error("Assert failed while writing JSON")}_addToCurrentObject(e){this.Assert(null!==this.currentCollection),this.state===t.Writer.State.Array?(this.Assert(Array.isArray(this.currentCollection)),this.currentCollection.push(e)):this.state===t.Writer.State.Property&&(this.Assert(!Array.isArray(this.currentCollection)),this.Assert(null!==this.currentPropertyName),this.currentCollection[this.currentPropertyName]=e,this._propertyNameStack.pop())}}t.Writer=e,function(e){let n;!function(t){t[t.None=0]="None",t[t.Object=1]="Object",t[t.Array=2]="Array",t[t.Property=3]="Property",t[t.PropertyName=4]="PropertyName",t[t.String=5]="String"}(n=e.State||(e.State={}));e.StateElement=class{constructor(e){this.type=t.Writer.State.None,this.childCount=0,this.type=e}}}(e=t.Writer||(t.Writer={}))}(z||(z={}));class H{constructor(t){this.kInkSaveStateVersion=8,this.kMinCompatibleLoadVersion=8,this._currentErrors=null,this._currentWarnings=null,this.divertedPointer=I.Null,this._currentTurnIndex=0,this.storySeed=0,this.previousRandom=0,this.didSafeExit=!1,this._currentText=null,this._currentTags=null,this._outputStreamTextDirty=!0,this._outputStreamTagsDirty=!0,this._patch=null,this.story=t,this._outputStream=[],this.OutputStreamDirty(),this._evaluationStack=[],this.callStack=new q(t),this._variablesState=new J(this.callStack,t.listDefinitions),this._visitCounts=new Map,this._turnIndices=new Map,this.currentTurnIndex=-1;let e=(new Date).getTime();this.storySeed=new K(e).next()%100,this.previousRandom=0,this._currentChoices=[],this.GoToStart()}ToJson(t=!1){let e=new z.Writer;return this.WriteJson(e),e.ToString()}toJson(t=!1){return this.ToJson(t)}LoadJson(t){let e=z.TextToDictionary(t);this.LoadJsonObj(e)}VisitCountAtPathString(t){let n;if(null!==this._patch){let i=this.story.ContentAtPath(new e(t)).container;if(null===i)throw new Error("Content at path not found: "+t);if(n=this._patch.TryGetVisitCount(i,0),n.exists)return n.result}return n=y(this._visitCounts,t,null),n.exists?n.result:0}VisitCountForContainer(t){if(null===t)return d("container");if(!t.visitsShouldBeCounted)return this.story.Error("Read count for target ("+t.name+" - on "+t.debugMetadata+") unknown. The story may need to be compiled with countAllVisits flag (-c)."),0;if(null!==this._patch){let e=this._patch.TryGetVisitCount(t,0);if(e.exists)return e.result}let e=t.path.toString(),n=y(this._visitCounts,e,null);return n.exists?n.result:0}IncrementVisitCountForContainer(t){if(null!==this._patch){let e=this.VisitCountForContainer(t);return e++,void this._patch.SetVisitCount(t,e)}let e=t.path.toString(),n=y(this._visitCounts,e,null);n.exists?this._visitCounts.set(e,n.result+1):this._visitCounts.set(e,1)}RecordTurnIndexVisitToContainer(t){if(null!==this._patch)return void this._patch.SetTurnIndex(t,this.currentTurnIndex);let e=t.path.toString();this._turnIndices.set(e,this.currentTurnIndex)}TurnsSinceForContainer(t){if(t.turnIndexShouldBeCounted||this.story.Error("TURNS_SINCE() for target ("+t.name+" - on "+t.debugMetadata+") unknown. The story may need to be compiled with countAllVisits flag (-c)."),null!==this._patch){let e=this._patch.TryGetTurnIndex(t,0);if(e.exists)return this.currentTurnIndex-e.result}let e=t.path.toString(),n=y(this._turnIndices,e,0);return n.exists?this.currentTurnIndex-n.result:-1}get callstackDepth(){return this.callStack.depth}get outputStream(){return this._outputStream}get currentChoices(){return this.canContinue?[]:this._currentChoices}get generatedChoices(){return this._currentChoices}get currentErrors(){return this._currentErrors}get currentWarnings(){return this._currentWarnings}get variablesState(){return this._variablesState}set variablesState(t){this._variablesState=t}get evaluationStack(){return this._evaluationStack}get visitCounts(){return this._visitCounts}get turnIndices(){return this._turnIndices}get currentTurnIndex(){return this._currentTurnIndex}set currentTurnIndex(t){this._currentTurnIndex=t}get currentPathString(){let t=this.currentPointer;return t.isNull?null:null===t.path?d("pointer.path"):t.path.toString()}get currentPointer(){return this.callStack.currentElement.currentPointer.copy()}set currentPointer(t){this.callStack.currentElement.currentPointer=t.copy()}get previousPointer(){return this.callStack.currentThread.previousPointer.copy()}set previousPointer(t){this.callStack.currentThread.previousPointer=t.copy()}get canContinue(){return!this.currentPointer.isNull&&!this.hasError}get hasError(){return null!=this.currentErrors&&this.currentErrors.length>0}get hasWarning(){return null!=this.currentWarnings&&this.currentWarnings.length>0}get currentText(){if(this._outputStreamTextDirty){let t=new m;for(let e of this._outputStream){let n=a(e,T);null!==n&&t.Append(n.value)}this._currentText=this.CleanOutputWhitespace(t.toString()),this._outputStreamTextDirty=!1}return this._currentText}CleanOutputWhitespace(t){let e=new m,n=-1,i=0;for(let r=0;r<t.length;r++){let a=t.charAt(r),s=" "==a||"\t"==a;s&&-1==n&&(n=r),s||("\n"!=a&&n>0&&n!=i&&e.Append(" "),n=-1),"\n"==a&&(i=r+1),s||e.Append(a)}return e.toString()}get currentTags(){if(this._outputStreamTagsDirty){this._currentTags=[];for(let t of this._outputStream){let e=a(t,j);null!==e&&this._currentTags.push(e.text)}this._outputStreamTagsDirty=!1}return this._currentTags}get inExpressionEvaluation(){return this.callStack.currentElement.inExpressionEvaluation}set inExpressionEvaluation(t){this.callStack.currentElement.inExpressionEvaluation=t}GoToStart(){this.callStack.currentElement.currentPointer=I.StartOf(this.story.mainContentContainer)}CopyAndStartPatching(){let t=new H(this.story);return t._patch=new U(this._patch),t.outputStream.push.apply(t.outputStream,this._outputStream),t.OutputStreamDirty(),t._currentChoices.push.apply(t._currentChoices,this._currentChoices),this.hasError&&(t._currentErrors=[],t._currentErrors.push.apply(t._currentErrors,this.currentErrors||[])),this.hasWarning&&(t._currentWarnings=[],t._currentWarnings.push.apply(t._currentWarnings,this.currentWarnings||[])),t.callStack=new q(this.callStack),t.variablesState=this.variablesState,t.variablesState.callStack=t.callStack,t.variablesState.patch=t._patch,t.evaluationStack.push.apply(t.evaluationStack,this.evaluationStack),this.divertedPointer.isNull||(t.divertedPointer=this.divertedPointer.copy()),t.previousPointer=this.previousPointer.copy(),t._visitCounts=this._visitCounts,t._turnIndices=this._turnIndices,t.currentTurnIndex=this.currentTurnIndex,t.storySeed=this.storySeed,t.previousRandom=this.previousRandom,t.didSafeExit=this.didSafeExit,t}RestoreAfterPatch(){this.variablesState.callStack=this.callStack,this.variablesState.patch=this._patch}ApplyAnyPatch(){if(null!==this._patch){this.variablesState.ApplyPatch();for(let[t,e]of this._patch.visitCounts)this.ApplyCountChanges(t,e,!0);for(let[t,e]of this._patch.turnIndices)this.ApplyCountChanges(t,e,!1);this._patch=null}}ApplyCountChanges(t,e,n){(n?this._visitCounts:this._turnIndices).set(t.path.toString(),e)}WriteJson(t){t.WriteObjectStart();let e=!1;for(let n of this._currentChoices){if(null===n.threadAtGeneration)return d("c.threadAtGeneration");n.originalThreadIndex=n.threadAtGeneration.threadIndex,null===this.callStack.ThreadWithIndex(n.originalThreadIndex)&&(e||(e=!0,t.WritePropertyStart("choiceThreads"),t.WriteObjectStart()),t.WritePropertyStart(n.originalThreadIndex),n.threadAtGeneration.WriteJson(t),t.WritePropertyEnd())}if(e&&(t.WriteObjectEnd(),t.WritePropertyEnd()),t.WriteProperty("callstackThreads",t=>this.callStack.WriteJson(t)),t.WriteProperty("variablesState",t=>this.variablesState.WriteJson(t)),t.WriteProperty("evalStack",t=>M.WriteListRuntimeObjs(t,this.evaluationStack)),t.WriteProperty("outputStream",t=>M.WriteListRuntimeObjs(t,this._outputStream)),t.WriteProperty("currentChoices",t=>{t.WriteArrayStart();for(let e of this._currentChoices)M.WriteChoice(t,e);t.WriteArrayEnd()}),!this.divertedPointer.isNull){if(null===this.divertedPointer.path)return d("divertedPointer");t.WriteProperty("currentDivertTarget",this.divertedPointer.path.componentsString)}t.WriteProperty("visitCounts",t=>M.WriteIntDictionary(t,this._visitCounts)),t.WriteProperty("turnIndices",t=>M.WriteIntDictionary(t,this._turnIndices)),t.WriteIntProperty("turnIdx",this.currentTurnIndex),t.WriteIntProperty("storySeed",this.storySeed),t.WriteIntProperty("previousRandom",this.previousRandom),t.WriteIntProperty("inkSaveVersion",this.kInkSaveStateVersion),t.WriteIntProperty("inkFormatVersion",X.inkVersionCurrent),t.WriteObjectEnd()}LoadJsonObj(t){let n=t,i=n.inkSaveVersion;if(null==i)throw new S("ink save format incorrect, can't load.");if(parseInt(i)<this.kMinCompatibleLoadVersion)throw new S("Ink save format isn't compatible with the current version (saw '"+i+"', but minimum is "+this.kMinCompatibleLoadVersion+"), so can't load.");this.callStack.SetJsonToken(n.callstackThreads,this.story),this.variablesState.SetJsonToken(n.variablesState),this._evaluationStack=M.JArrayToRuntimeObjList(n.evalStack),this._outputStream=M.JArrayToRuntimeObjList(n.outputStream),this.OutputStreamDirty(),this._currentChoices=M.JArrayToRuntimeObjList(n.currentChoices);let r=n.currentDivertTarget;if(null!=r){let t=new e(r.toString());this.divertedPointer=this.story.PointerAtPath(t)}this._visitCounts=M.JObjectToIntDictionary(n.visitCounts),this._turnIndices=M.JObjectToIntDictionary(n.turnIndices),this.currentTurnIndex=parseInt(n.turnIdx),this.storySeed=parseInt(n.storySeed),this.previousRandom=parseInt(n.previousRandom);let a=n.choiceThreads;for(let t of this._currentChoices){let e=this.callStack.ThreadWithIndex(t.originalThreadIndex);if(null!=e)t.threadAtGeneration=e.Copy();else{let e=a[t.originalThreadIndex.toString()];t.threadAtGeneration=new q.Thread(e,this.story)}}}ResetErrors(){this._currentErrors=null,this._currentWarnings=null}ResetOutput(t=null){this._outputStream.length=0,null!==t&&this._outputStream.push.apply(this._outputStream,t),this.OutputStreamDirty()}PushToOutputStream(t){let e=a(t,T);if(null!==e){let t=this.TrySplittingHeadTailWhitespace(e);if(null!==t){for(let e of t)this.PushToOutputStreamIndividual(e);return void this.OutputStreamDirty()}}this.PushToOutputStreamIndividual(t),this.OutputStreamDirty()}PopFromOutputStream(t){this.outputStream.splice(this.outputStream.length-t,t),this.OutputStreamDirty()}TrySplittingHeadTailWhitespace(t){let e=t.value;if(null===e)return d("single.value");let n=-1,i=-1;for(let t=0;t<e.length;++t){let r=e[t];if("\n"!=r){if(" "==r||"\t"==r)continue;break}-1==n&&(n=t),i=t}let r=-1,a=-1;for(let t=0;t<e.length;++t){let n=e[t];if("\n"!=n){if(" "==n||"\t"==n)continue;break}-1==r&&(r=t),a=t}if(-1==n&&-1==r)return null;let s=[],l=0,o=e.length;if(-1!=n){if(n>0){let t=new T(e.substring(0,n));s.push(t)}s.push(new T("\n")),l=i+1}if(-1!=r&&(o=a),o>l){let t=e.substring(l,o-l);s.push(new T(t))}if(-1!=r&&a>i&&(s.push(new T("\n")),r<e.length-1)){let t=e.length-r-1,n=new T(e.substring(r+1,t));s.push(n)}return s}PushToOutputStreamIndividual(t){let e=a(t,x),n=a(t,T),i=!0;if(e)this.TrimNewlinesFromOutputStream(),i=!0;else if(n){let t=-1,e=this.callStack.currentElement;e.type==r.Function&&(t=e.functionStartInOutputStream);let a=-1;for(let e=this._outputStream.length-1;e>=0;e--){let n=this._outputStream[e],i=n instanceof A?n:null;if(null!=(n instanceof x?n:null)){a=e;break}if(null!=i&&i.commandType==A.CommandType.BeginString){e>=t&&(t=-1);break}}let s=-1;if(s=-1!=a&&-1!=t?Math.min(t,a):-1!=a?a:t,-1!=s){if(n.isNewline)i=!1;else if(n.isNonWhitespace&&(a>-1&&this.RemoveExistingGlue(),t>-1)){let t=this.callStack.elements;for(let e=t.length-1;e>=0;e--){let n=t[e];if(n.type!=r.Function)break;n.functionStartInOutputStream=-1}}}else n.isNewline&&(!this.outputStreamEndsInNewline&&this.outputStreamContainsContent||(i=!1))}if(i){if(null===t)return d("obj");this._outputStream.push(t),this.OutputStreamDirty()}}TrimNewlinesFromOutputStream(){let t=-1,e=this._outputStream.length-1;for(;e>=0;){let n=this._outputStream[e],i=a(n,A),r=a(n,T);if(null!=i||null!=r&&r.isNonWhitespace)break;null!=r&&r.isNewline&&(t=e),e--}if(t>=0)for(e=t;e<this._outputStream.length;){a(this._outputStream[e],T)?this._outputStream.splice(e,1):e++}this.OutputStreamDirty()}RemoveExistingGlue(){for(let t=this._outputStream.length-1;t>=0;t--){let e=this._outputStream[t];if(e instanceof x)this._outputStream.splice(t,1);else if(e instanceof A)break}this.OutputStreamDirty()}get outputStreamEndsInNewline(){if(this._outputStream.length>0)for(let t=this._outputStream.length-1;t>=0;t--){if(this._outputStream[t]instanceof A)break;let e=this._outputStream[t];if(e instanceof T){if(e.isNewline)return!0;if(e.isNonWhitespace)break}}return!1}get outputStreamContainsContent(){for(let t=0;t<this._outputStream.length;t++)if(this._outputStream[t]instanceof T)return!0;return!1}get inStringEvaluation(){for(let t=this._outputStream.length-1;t>=0;t--){let e=a(this._outputStream[t],A);if(e instanceof A&&e.commandType==A.CommandType.BeginString)return!0}return!1}PushEvaluationStack(t){let e=a(t,O);if(e){let t=e.value;if(null===t)return d("rawList");if(null!=t.originNames){t.origins||(t.origins=[]),t.origins.length=0;for(let e of t.originNames){if(null===this.story.listDefinitions)return d("StoryState.story.listDefinitions");let n=this.story.listDefinitions.TryListGetDefinition(e,null);if(null===n.result)return d("StoryState def.result");t.origins.indexOf(n.result)<0&&t.origins.push(n.result)}}}if(null===t)return d("obj");this.evaluationStack.push(t)}PopEvaluationStack(t){if(void 0===t){return o(this.evaluationStack.pop())}if(t>this.evaluationStack.length)throw new Error("trying to pop too many objects");return o(this.evaluationStack.splice(this.evaluationStack.length-t,t))}PeekEvaluationStack(){return this.evaluationStack[this.evaluationStack.length-1]}ForceEnd(){this.callStack.Reset(),this._currentChoices.length=0,this.currentPointer=I.Null,this.previousPointer=I.Null,this.didSafeExit=!0}TrimWhitespaceFromFunctionEnd(){n.Assert(this.callStack.currentElement.type==r.Function);let t=this.callStack.currentElement.functionStartInOutputStream;-1==t&&(t=0);for(let e=this._outputStream.length-1;e>=t;e--){let t=this._outputStream[e],n=a(t,T),i=a(t,A);if(null!=n){if(i)break;if(!n.isNewline&&!n.isInlineWhitespace)break;this._outputStream.splice(e,1),this.OutputStreamDirty()}}}PopCallStack(t=null){this.callStack.currentElement.type==r.Function&&this.TrimWhitespaceFromFunctionEnd(),this.callStack.Pop(t)}SetChosenPath(t,e){this._currentChoices.length=0;let n=this.story.PointerAtPath(t);n.isNull||-1!=n.index||(n.index=0),this.currentPointer=n,e&&this.currentTurnIndex++}StartFunctionEvaluationFromGame(t,e){this.callStack.Push(r.FunctionEvaluationFromGame,this.evaluationStack.length),this.callStack.currentElement.currentPointer=I.StartOf(t),this.PassArgumentsToEvaluationStack(e)}PassArgumentsToEvaluationStack(t){if(null!=t)for(let e=0;e<t.length;e++){if("number"!=typeof t[e]&&"string"!=typeof t[e])throw new Error("ink arguments when calling EvaluateFunction / ChoosePathStringWithParameters  must be int, float or string");this.PushEvaluationStack(v.Create(t[e]))}}TryExitFunctionEvaluationFromGame(){return this.callStack.currentElement.type==r.FunctionEvaluationFromGame&&(this.currentPointer=I.Null,this.didSafeExit=!0,!0)}CompleteFunctionEvaluationFromGame(){if(this.callStack.currentElement.type!=r.FunctionEvaluationFromGame)throw new S("Expected external function evaluation to be complete. Stack trace: "+this.callStack.callStackTrace);let t=this.callStack.currentElement.evaluationStackHeightWhenPushed,e=null;for(;this.evaluationStack.length>t;){let t=this.PopEvaluationStack();null===e&&(e=t)}if(this.PopCallStack(r.FunctionEvaluationFromGame),e){if(e instanceof L)return null;let t=s(e,v);return t.valueType==i.DivertTarget?t.valueObject.toString():t.valueObject}return null}AddError(t,e){e?(null==this._currentWarnings&&(this._currentWarnings=[]),this._currentWarnings.push(t)):(null==this._currentErrors&&(this._currentErrors=[]),this._currentErrors.push(t))}OutputStreamDirty(){this._outputStreamTextDirty=!0,this._outputStreamTagsDirty=!0}}class ${constructor(){this.startTime=void 0}get ElapsedMilliseconds(){return void 0===this.startTime?0:(new Date).getTime()-this.startTime}Start(){this.startTime=(new Date).getTime()}Stop(){this.startTime=void 0}}Number.isInteger||(Number.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&t>-9007199254740992&&t<9007199254740992&&Math.floor(t)===t});class X extends p{constructor(){let t;super(),this.inkVersionMinimumCompatible=18,this._prevContainers=[],this.allowExternalFunctionFallbacks=!1,this._listDefinitions=null,this._variableObservers=null,this._hasValidatedExternals=!1,this._temporaryEvaluationContainer=null,this._asyncContinueActive=!1,this._stateSnapshotAtLastNewline=null,this._recursiveContinueCount=0,this._asyncSaving=!1,this._profiler=null;let e=null,n=null;if(arguments[0]instanceof N)t=arguments[0],void 0!==arguments[1]&&(e=arguments[1]),this._mainContentContainer=t;else if("string"==typeof arguments[0]){let t=arguments[0];n=z.TextToDictionary(t)}else n=arguments[0];if(null!=e&&(this._listDefinitions=new B(e)),this._externals=new Map,null!==n){let t=n,e=t.inkVersion;if(null==e)throw new Error("ink version number not found. Are you sure it's a valid .ink.json file?");let i=parseInt(e);if(i>X.inkVersionCurrent)throw new Error("Version of ink used to build story was newer than the current version of the engine");if(i<this.inkVersionMinimumCompatible)throw new Error("Version of ink used to build story is too old to be loaded by this version of the engine");i!=X.inkVersionCurrent&&console.warn("WARNING: Version of ink used to build story doesn't match current version of engine. Non-critical, but recommend synchronising.");let r,a=t.root;if(null==a)throw new Error("Root node for ink not found. Are you sure it's a valid .ink.json file?");(r=t.listDefs)&&(this._listDefinitions=M.JTokenToListDefinitions(r)),this._mainContentContainer=s(M.JTokenToRuntimeObject(a),N),this.ResetState()}}get currentChoices(){let t=[];if(null===this._state)return d("this._state");for(let e of this._state.currentChoices)e.isInvisibleDefault||(e.index=t.length,t.push(e));return t}get currentText(){return this.IfAsyncWeCant("call currentText since it's a work in progress"),this.state.currentText}get currentTags(){return this.IfAsyncWeCant("call currentTags since it's a work in progress"),this.state.currentTags}get currentErrors(){return this.state.currentErrors}get currentWarnings(){return this.state.currentWarnings}get hasError(){return this.state.hasError}get hasWarning(){return this.state.hasWarning}get variablesState(){return this.state.variablesState}get listDefinitions(){return this._listDefinitions}get state(){return this._state}StartProfiling(){}EndProfiling(){}ToJson(t){let e=!1;if(t||(e=!0,t=new z.Writer),t.WriteObjectStart(),t.WriteIntProperty("inkVersion",X.inkVersionCurrent),t.WriteProperty("root",t=>M.WriteRuntimeContainer(t,this._mainContentContainer)),null!=this._listDefinitions){t.WritePropertyStart("listDefs"),t.WriteObjectStart();for(let e of this._listDefinitions.lists){t.WritePropertyStart(e.name),t.WriteObjectStart();for(let[n,i]of e.items){let e=f.fromSerializedKey(n),r=i;t.WriteIntProperty(e.itemName,r)}t.WriteObjectEnd(),t.WritePropertyEnd()}t.WriteObjectEnd(),t.WritePropertyEnd()}if(t.WriteObjectEnd(),e)return t.ToString()}ResetState(){this.IfAsyncWeCant("ResetState"),this._state=new H(this),this._state.variablesState.ObserveVariableChange(this.VariableStateDidChangeEvent.bind(this)),this.ResetGlobals()}ResetErrors(){if(null===this._state)return d("this._state");this._state.ResetErrors()}ResetCallstack(){if(this.IfAsyncWeCant("ResetCallstack"),null===this._state)return d("this._state");this._state.ForceEnd()}ResetGlobals(){if(this._mainContentContainer.namedContent.get("global decl")){let t=this.state.currentPointer.copy();this.ChoosePath(new e("global decl"),!1),this.ContinueInternal(),this.state.currentPointer=t}this.state.variablesState.SnapshotDefaultGlobals()}Continue(){return this.ContinueAsync(0),this.currentText}get canContinue(){return this.state.canContinue}get asyncContinueComplete(){return!this._asyncContinueActive}ContinueAsync(t){this._hasValidatedExternals||this.ValidateExternalBindings(),this.ContinueInternal(t)}ContinueInternal(t=0){null!=this._profiler&&this._profiler.PreContinue();let e=t>0;if(this._recursiveContinueCount++,!this._asyncContinueActive){if(this._asyncContinueActive=e,!this.canContinue)throw new S("Can't continue - should check canContinue before calling Continue");this._state.didSafeExit=!1,this._state.ResetOutput(),1==this._recursiveContinueCount&&(this._state.variablesState.batchObservingVariableChanges=!0)}let n=new $;n.Start();let i=!1;do{try{i=this.ContinueSingleStep()}catch(t){if(!(t instanceof S))throw t;this.AddError(t.message,void 0,t.useEndLineNumber);break}if(i)break;if(this._asyncContinueActive&&n.ElapsedMilliseconds>t)break}while(this.canContinue);n.Stop(),!i&&this.canContinue||(null!==this._stateSnapshotAtLastNewline&&this.RestoreStateSnapshot(),this.canContinue||(this.state.callStack.canPopThread&&this.AddError("Thread available to pop, threads should always be flat by the end of evaluation?"),0!=this.state.generatedChoices.length||this.state.didSafeExit||null!=this._temporaryEvaluationContainer||(this.state.callStack.CanPop(r.Tunnel)?this.AddError("unexpectedly reached end of content. Do you need a '->->' to return from a tunnel?"):this.state.callStack.CanPop(r.Function)?this.AddError("unexpectedly reached end of content. Do you need a '~ return'?"):this.state.callStack.canPop?this.AddError("unexpectedly reached end of content for unknown reason. Please debug compiler!"):this.AddError("ran out of content. Do you need a '-> DONE' or '-> END'?"))),this.state.didSafeExit=!1,1==this._recursiveContinueCount&&(this._state.variablesState.batchObservingVariableChanges=!1),this._asyncContinueActive=!1),this._recursiveContinueCount--,null!=this._profiler&&this._profiler.PostContinue()}ContinueSingleStep(){if(null!=this._profiler&&this._profiler.PreStep(),this.Step(),null!=this._profiler&&this._profiler.PostStep(),this.canContinue||this.state.callStack.elementIsEvaluateFromGame||this.TryFollowDefaultInvisibleChoice(),null!=this._profiler&&this._profiler.PreSnapshot(),!this.state.inStringEvaluation){if(null!==this._stateSnapshotAtLastNewline){if(null===this._stateSnapshotAtLastNewline.currentTags)return d("this._stateAtLastNewline.currentTags");if(null===this.state.currentTags)return d("this.state.currentTags");let t=this.CalculateNewlineOutputStateChange(this._stateSnapshotAtLastNewline.currentText,this.state.currentText,this._stateSnapshotAtLastNewline.currentTags.length,this.state.currentTags.length);if(t==X.OutputStateChange.ExtendedBeyondNewline)return this.RestoreStateSnapshot(),!0;t==X.OutputStateChange.NewlineRemoved&&this.DiscardSnapshot()}this.state.outputStreamEndsInNewline&&(this.canContinue?null==this._stateSnapshotAtLastNewline&&this.StateSnapshot():this.DiscardSnapshot())}return null!=this._profiler&&this._profiler.PostSnapshot(),!1}CalculateNewlineOutputStateChange(t,e,n,i){if(null===t)return d("prevText");if(null===e)return d("currText");let r=e.length>=t.length&&"\n"==e.charAt(t.length-1);if(n==i&&t.length==e.length&&r)return X.OutputStateChange.NoChange;if(!r)return X.OutputStateChange.NewlineRemoved;if(i>n)return X.OutputStateChange.ExtendedBeyondNewline;for(let n=t.length;n<e.length;n++){let t=e.charAt(n);if(" "!=t&&"\t"!=t)return X.OutputStateChange.ExtendedBeyondNewline}return X.OutputStateChange.NoChange}ContinueMaximally(){this.IfAsyncWeCant("ContinueMaximally");let t=new m;for(;this.canContinue;)t.Append(this.Continue());return t.toString()}ContentAtPath(t){return this.mainContentContainer.ContentAtPath(t)}KnotContainerWithName(t){let e=this.mainContentContainer.namedContent.get(t);return e instanceof N?e:null}PointerAtPath(t){if(0==t.length)return I.Null;let e=new I,n=t.length,i=null;return null===t.lastComponent?d("path.lastComponent"):(t.lastComponent.isIndex?(n=t.length-1,i=this.mainContentContainer.ContentAtPath(t,void 0,n),e.container=i.container,e.index=t.lastComponent.index):(i=this.mainContentContainer.ContentAtPath(t),e.container=i.container,e.index=-1),null==i.obj||i.obj==this.mainContentContainer&&n>0?this.Error("Failed to find content at path '"+t+"', and no approximation of it was possible."):i.approximate&&this.Warning("Failed to find content at path '"+t+"', so it was approximated to: '"+i.obj.path+"'."),e)}StateSnapshot(){this._stateSnapshotAtLastNewline=this._state,this._state=this._state.CopyAndStartPatching()}RestoreStateSnapshot(){null===this._stateSnapshotAtLastNewline&&d("_stateSnapshotAtLastNewline"),this._stateSnapshotAtLastNewline.RestoreAfterPatch(),this._state=this._stateSnapshotAtLastNewline,this._stateSnapshotAtLastNewline=null,this._asyncSaving||this._state.ApplyAnyPatch()}DiscardSnapshot(){this._asyncSaving||this._state.ApplyAnyPatch(),this._stateSnapshotAtLastNewline=null}CopyStateForBackgroundThreadSave(){if(this.IfAsyncWeCant("start saving on a background thread"),this._asyncSaving)throw new Error("Story is already in background saving mode, can't call CopyStateForBackgroundThreadSave again!");let t=this._state;return this._state=this._state.CopyAndStartPatching(),this._asyncSaving=!0,t}BackgroundSaveComplete(){null===this._stateSnapshotAtLastNewline&&this._state.ApplyAnyPatch(),this._asyncSaving=!1}Step(){let t=!0,e=this.state.currentPointer.copy();if(e.isNull)return;let n=a(e.Resolve(),N);for(;n&&(this.VisitContainer(n,!0),0!=n.content.length);)e=I.StartOf(n),n=a(e.Resolve(),N);this.state.currentPointer=e.copy(),null!=this._profiler&&this._profiler.Step(this.state.callStack);let i=e.Resolve(),r=this.PerformLogicAndFlowControl(i);if(this.state.currentPointer.isNull)return;r&&(t=!1);let s=a(i,W);if(s){let e=this.ProcessChoice(s);e&&this.state.generatedChoices.push(e),i=null,t=!1}if(i instanceof N&&(t=!1),t){let t=a(i,w);if(t&&-1==t.contextIndex){let e=this.state.callStack.ContextForVariableNamed(t.variableName);i=new w(t.variableName,e)}this.state.inExpressionEvaluation?this.state.PushEvaluationStack(i):this.state.PushToOutputStream(i)}this.NextContent();let l=a(i,A);l&&l.commandType==A.CommandType.StartThread&&this.state.callStack.PushThread()}VisitContainer(t,e){t.countingAtStartOnly&&!e||(t.visitsShouldBeCounted&&this.state.IncrementVisitCountForContainer(t),t.turnIndexShouldBeCounted&&this.state.RecordTurnIndexVisitToContainer(t))}VisitChangedContainersDueToDivert(){let t=this.state.previousPointer.copy(),e=this.state.currentPointer.copy();if(e.isNull||-1==e.index)return;if(this._prevContainers.length=0,!t.isNull){let e=a(t.Resolve(),N)||a(t.container,N);for(;e;)this._prevContainers.push(e),e=a(e.parent,N)}let n=e.Resolve();if(null==n)return;let i=a(n.parent,N);for(;i&&(this._prevContainers.indexOf(i)<0||i.countingAtStartOnly);){let t=i.content.length>0&&n==i.content[0];this.VisitContainer(i,t),n=i,i=a(i.parent,N)}}ProcessChoice(t){let e=!0;if(t.hasCondition){let t=this.state.PopEvaluationStack();this.IsTruthy(t)||(e=!1)}let n="",i="";if(t.hasChoiceOnlyContent){i=s(this.state.PopEvaluationStack(),T).value||""}if(t.hasStartContent){n=s(this.state.PopEvaluationStack(),T).value||""}if(t.onceOnly){this.state.VisitCountForContainer(t.choiceTarget)>0&&(e=!1)}if(!e)return null;let r=new D;return r.targetPath=t.pathOnChoice,r.sourcePath=t.path.toString(),r.isInvisibleDefault=t.isInvisibleDefault,r.threadAtGeneration=this.state.callStack.ForkThread(),r.text=(n+i).replace(/^[ \t]+|[ \t]+$/g,""),r}IsTruthy(t){if(t instanceof v){let e=t;if(e instanceof P){let t=e;return this.Error("Shouldn't use a divert target (to "+t.targetPath+") as a conditional value. Did you intend a function call 'likeThis()' or a read count check 'likeThis'? (no arrows)"),!1}return e.isTruthy}return!1}PerformLogicAndFlowControl(t){if(null==t)return!1;if(t instanceof k){let e=t;if(e.isConditional){let t=this.state.PopEvaluationStack();if(!this.IsTruthy(t))return!0}if(e.hasVariableTarget){let t=e.variableDivertName,n=this.state.variablesState.GetVariableWithName(t);if(null==n)this.Error("Tried to divert using a target from a variable that could not be found ("+t+")");else if(!(n instanceof P)){let e=a(n,b),i="Tried to divert to a target from a variable, but the variable ("+t+") didn't contain a divert target, it ";e instanceof b&&0==e.value?i+="was empty/null (the value 0).":i+="contained '"+n+"'.",this.Error(i)}let i=s(n,P);this.state.divertedPointer=this.PointerAtPath(i.targetPath)}else{if(e.isExternal)return this.CallExternalFunction(e.targetPathString,e.externalArgs),!0;this.state.divertedPointer=e.targetPointer.copy()}return e.pushesToStack&&this.state.callStack.Push(e.stackPushType,void 0,this.state.outputStream.length),this.state.divertedPointer.isNull&&!e.isExternal&&(e&&e.debugMetadata&&null!=e.debugMetadata.sourceName?this.Error("Divert target doesn't exist: "+e.debugMetadata.sourceName):this.Error("Divert resolution failed: "+e)),!0}if(t instanceof A){let e=t;switch(e.commandType){case A.CommandType.EvalStart:this.Assert(!1===this.state.inExpressionEvaluation,"Already in expression evaluation?"),this.state.inExpressionEvaluation=!0;break;case A.CommandType.EvalEnd:this.Assert(!0===this.state.inExpressionEvaluation,"Not in expression evaluation mode"),this.state.inExpressionEvaluation=!1;break;case A.CommandType.EvalOutput:if(this.state.evaluationStack.length>0){let t=this.state.PopEvaluationStack();if(!(t instanceof L)){let e=new T(t.toString());this.state.PushToOutputStream(e)}}break;case A.CommandType.NoOp:break;case A.CommandType.Duplicate:this.state.PushEvaluationStack(this.state.PeekEvaluationStack());break;case A.CommandType.PopEvaluatedValue:this.state.PopEvaluationStack();break;case A.CommandType.PopFunction:case A.CommandType.PopTunnel:let t=e.commandType==A.CommandType.PopFunction?r.Function:r.Tunnel,n=null;if(t==r.Tunnel){let t=this.state.PopEvaluationStack();n=a(t,P),null===n&&this.Assert(t instanceof L,"Expected void if ->-> doesn't override target")}if(this.state.TryExitFunctionEvaluationFromGame())break;if(this.state.callStack.currentElement.type==t&&this.state.callStack.canPop)this.state.PopCallStack(),n&&(this.state.divertedPointer=this.PointerAtPath(n.targetPath));else{let e=new Map;e.set(r.Function,"function return statement (~ return)"),e.set(r.Tunnel,"tunnel onwards statement (->->)");let n=e.get(this.state.callStack.currentElement.type);this.state.callStack.canPop||(n="end of flow (-> END or choice)");let i="Found "+e.get(t)+", when expected "+n;this.Error(i)}break;case A.CommandType.BeginString:this.state.PushToOutputStream(e),this.Assert(!0===this.state.inExpressionEvaluation,"Expected to be in an expression when evaluating a string"),this.state.inExpressionEvaluation=!1;break;case A.CommandType.EndString:let i=[],l=0;for(let t=this.state.outputStream.length-1;t>=0;--t){let e=this.state.outputStream[t];l++;let n=a(e,A);if(n&&n.commandType==A.CommandType.BeginString)break;e instanceof T&&i.push(e)}this.state.PopFromOutputStream(l),i=i.reverse();let o=new m;for(let t of i)o.Append(t.toString());this.state.inExpressionEvaluation=!0,this.state.PushEvaluationStack(new T(o.toString()));break;case A.CommandType.ChoiceCount:let u=this.state.generatedChoices.length;this.state.PushEvaluationStack(new b(u));break;case A.CommandType.Turns:this.state.PushEvaluationStack(new b(this.state.currentTurnIndex+1));break;case A.CommandType.TurnsSince:case A.CommandType.ReadCount:let h=this.state.PopEvaluationStack();if(!(h instanceof P)){let t="";h instanceof b&&(t=". Did you accidentally pass a read count ('knot_name') instead of a target ('-> knot_name')?"),this.Error("TURNS_SINCE / READ_COUNT expected a divert target (knot, stitch, label name), but saw "+h+t);break}let c,p=s(h,P),y=a(this.ContentAtPath(p.targetPath).correctObj,N);null!=y?c=e.commandType==A.CommandType.TurnsSince?this.state.TurnsSinceForContainer(y):this.state.VisitCountForContainer(y):(c=e.commandType==A.CommandType.TurnsSince?-1:0,this.Warning("Failed to find container for "+e.toString()+" lookup at "+p.targetPath.toString())),this.state.PushEvaluationStack(new b(c));break;case A.CommandType.Random:{let t=a(this.state.PopEvaluationStack(),b),e=a(this.state.PopEvaluationStack(),b);if(null==e||e instanceof b==!1)return this.Error("Invalid value for minimum parameter of RANDOM(min, max)");if(null==t||e instanceof b==!1)return this.Error("Invalid value for maximum parameter of RANDOM(min, max)");if(null===t.value)return d("maxInt.value");if(null===e.value)return d("minInt.value");let n=t.value-e.value+1;n<=0&&this.Error("RANDOM was called with minimum as "+e.value+" and maximum as "+t.value+". The maximum must be larger");let i=this.state.storySeed+this.state.previousRandom,r=new K(i).next(),s=r%n+e.value;this.state.PushEvaluationStack(new b(s)),this.state.previousRandom=r;break}case A.CommandType.SeedRandom:let C=a(this.state.PopEvaluationStack(),b);if(null==C||C instanceof b==!1)return this.Error("Invalid value passed to SEED_RANDOM");if(null===C.value)return d("minInt.value");this.state.storySeed=C.value,this.state.previousRandom=0,this.state.PushEvaluationStack(new L);break;case A.CommandType.VisitIndex:let _=this.state.VisitCountForContainer(this.state.currentPointer.container)-1;this.state.PushEvaluationStack(new b(_));break;case A.CommandType.SequenceShuffleIndex:let w=this.NextSequenceShuffleIndex();this.state.PushEvaluationStack(new b(w));break;case A.CommandType.StartThread:break;case A.CommandType.Done:this.state.callStack.canPopThread?this.state.callStack.PopThread():(this.state.didSafeExit=!0,this.state.currentPointer=I.Null);break;case A.CommandType.End:this.state.ForceEnd();break;case A.CommandType.ListFromInt:let E=a(this.state.PopEvaluationStack(),b),x=s(this.state.PopEvaluationStack(),T);if(null===E)throw new S("Passed non-integer when creating a list element from a numerical value.");let k=null;if(null===this.listDefinitions)return d("this.listDefinitions");let W=this.listDefinitions.TryListGetDefinition(x.value,null);if(!W.exists)throw new S("Failed to find LIST called "+x.value);{if(null===E.value)return d("minInt.value");let t=W.result.TryGetItemWithValue(E.value,f.Null);t.exists&&(k=new O(t.result,E.value))}null==k&&(k=new O),this.state.PushEvaluationStack(k);break;case A.CommandType.ListRange:let F=a(this.state.PopEvaluationStack(),v),V=a(this.state.PopEvaluationStack(),v),R=a(this.state.PopEvaluationStack(),O);if(null===R||null===V||null===F)throw new S("Expected list, minimum and maximum for LIST_RANGE");if(null===R.value)return d("targetList.value");let j=R.value.ListWithSubRange(V.valueObject,F.valueObject);this.state.PushEvaluationStack(new O(j));break;case A.CommandType.ListRandom:{let t=this.state.PopEvaluationStack();if(null===t)throw new S("Expected list for LIST_RANDOM");let e=t.value,n=null;if(null===e)throw d("list");if(0==e.Count)n=new g;else{let t=this.state.storySeed+this.state.previousRandom,i=new K(t).next(),r=i%e.Count,a=e.entries();for(let t=0;t<=r-1;t++)a.next();let s=a.next().value,l={Key:f.fromSerializedKey(s[0]),Value:s[1]};if(null===l.Key.originName)return d("randomItem.Key.originName");n=new g(l.Key.originName,this),n.Add(l.Key,l.Value),this.state.previousRandom=i}this.state.PushEvaluationStack(new O(n));break}default:this.Error("unhandled ControlCommand: "+e)}return!0}if(t instanceof V){let e=t,n=this.state.PopEvaluationStack();return this.state.variablesState.Assign(e,n),!0}if(t instanceof F){let e=t,n=null;if(null!=e.pathForCount){let t=e.containerForCount,i=this.state.VisitCountForContainer(t);n=new b(i)}else n=this.state.variablesState.GetVariableWithName(e.name),null==n&&(this.Warning("Variable not found: '"+e.name+"'. Using default value of 0 (false). This can happen with temporary variables if the declaration hasn't yet been hit. Globals are always given a default value on load if a value doesn't exist in the save state."),n=new b(0));return this.state.PushEvaluationStack(n),!0}if(t instanceof R){let e=t,n=this.state.PopEvaluationStack(e.numberOfParameters),i=e.Call(n);return this.state.PushEvaluationStack(i),!0}return!1}ChoosePathString(t,n=!0,i=[]){if(this.IfAsyncWeCant("call ChoosePathString right now"),n)this.ResetCallstack();else if(this.state.callStack.currentElement.type==r.Function){let e="",n=this.state.callStack.currentElement.currentPointer.container;throw null!=n&&(e="("+n.path.toString()+") "),new Error("Story was running a function "+e+"when you called ChoosePathString("+t+") - this is almost certainly not not what you want! Full stack trace: \n"+this.state.callStack.callStackTrace)}this.state.PassArgumentsToEvaluationStack(i),this.ChoosePath(new e(t))}IfAsyncWeCant(t){if(this._asyncContinueActive)throw new Error("Can't "+t+". Story is in the middle of a ContinueAsync(). Make more ContinueAsync() calls or a single Continue() call beforehand.")}ChoosePath(t,e=!0){this.state.SetChosenPath(t,e),this.VisitChangedContainersDueToDivert()}ChooseChoiceIndex(t){t=t;let e=this.currentChoices;this.Assert(t>=0&&t<e.length,"choice out of range");let n=e[t];return null===n.threadAtGeneration?d("choiceToChoose.threadAtGeneration"):null===n.targetPath?d("choiceToChoose.targetPath"):(this.state.callStack.currentThread=n.threadAtGeneration,void this.ChoosePath(n.targetPath))}HasFunction(t){try{return null!=this.KnotContainerWithName(t)}catch(t){return!1}}EvaluateFunction(t,e=[],n=!1){if(this.IfAsyncWeCant("evaluate a function"),null==t)throw new Error("Function is null");if(""==t||""==t.trim())throw new Error("Function is empty or white space.");let i=this.KnotContainerWithName(t);if(null==i)throw new Error("Function doesn't exist: '"+t+"'");let r=[];r.push.apply(r,this.state.outputStream),this._state.ResetOutput(),this.state.StartFunctionEvaluationFromGame(i,e);let a=new m;for(;this.canContinue;)a.Append(this.Continue());let s=a.toString();this._state.ResetOutput(r);let l=this.state.CompleteFunctionEvaluationFromGame();return n?{returned:l,output:s}:l}EvaluateExpression(t){let e=this.state.callStack.elements.length;this.state.callStack.Push(r.Tunnel),this._temporaryEvaluationContainer=t,this.state.GoToStart();let n=this.state.evaluationStack.length;return this.Continue(),this._temporaryEvaluationContainer=null,this.state.callStack.elements.length>e&&this.state.PopCallStack(),this.state.evaluationStack.length>n?this.state.PopEvaluationStack():null}CallExternalFunction(t,e){if(null===t)return d("funcName");let n=this._externals.get(t),i=null;if(!(void 0!==n)){if(this.allowExternalFunctionFallbacks)return i=this.KnotContainerWithName(t),this.Assert(null!==i,"Trying to call EXTERNAL function '"+t+"' which has not been bound, and fallback ink function could not be found."),this.state.callStack.Push(r.Function,void 0,this.state.outputStream.length),void(this.state.divertedPointer=I.StartOf(i));this.Assert(!1,"Trying to call EXTERNAL function '"+t+"' which has not been bound (and ink fallbacks disabled).")}let a=[];for(let t=0;t<e;++t){let t=s(this.state.PopEvaluationStack(),v).valueObject;a.push(t)}a.reverse();let l=n(a),o=null;null!=l?(o=v.Create(l),this.Assert(null!==o,"Could not create ink value from returned object of type "+typeof l)):o=new L,this.state.PushEvaluationStack(o)}BindExternalFunctionGeneral(t,e){this.IfAsyncWeCant("bind an external function"),this.Assert(!this._externals.has(t),"Function '"+t+"' has already been bound."),this._externals.set(t,e)}TryCoerce(t){return t}BindExternalFunction(t,e){this.Assert(null!=e,"Can't bind a null function"),this.BindExternalFunctionGeneral(t,t=>{this.Assert(t.length>=e.length,"External function expected "+e.length+" arguments");let n=[];for(let e=0,i=t.length;e<i;e++)n[e]=this.TryCoerce(t[e]);return e.apply(null,n)})}UnbindExternalFunction(t){this.IfAsyncWeCant("unbind an external a function"),this.Assert(this._externals.has(t),"Function '"+t+"' has not been bound."),this._externals.delete(t)}ValidateExternalBindings(){let t=null,e=null,n=arguments[1]||new Set;if(arguments[0]instanceof N&&(t=arguments[0]),arguments[0]instanceof p&&(e=arguments[0]),null===t&&null===e)if(this.ValidateExternalBindings(this._mainContentContainer,n),this._hasValidatedExternals=!0,0==n.size)this._hasValidatedExternals=!0;else{let t="Error: Missing function binding for external";t+=n.size>1?"s":"",t+=": '",t+=Array.from(n).join("', '"),t+="' ",t+=this.allowExternalFunctionFallbacks?", and no fallback ink function found.":" (ink fallbacks disabled)",this.Error(t)}else if(null!=t){for(let e of t.content){let t=e;null!=t&&t.hasValidName||this.ValidateExternalBindings(e,n)}for(let[,e]of t.namedContent)this.ValidateExternalBindings(a(e,p),n)}else if(null!=e){let t=a(e,k);if(t&&t.isExternal){let e=t.targetPathString;if(null===e)return d("name");if(!this._externals.has(e))if(this.allowExternalFunctionFallbacks){this.mainContentContainer.namedContent.has(e)||n.add(e)}else n.add(e)}}}ObserveVariable(t,e){if(this.IfAsyncWeCant("observe a new variable"),null===this._variableObservers&&(this._variableObservers=new Map),!this.state.variablesState.GlobalVariableExistsWithName(t))throw new S("Cannot observe variable '"+t+"' because it wasn't declared in the ink story.");this._variableObservers.has(t)?this._variableObservers.get(t).push(e):this._variableObservers.set(t,[e])}ObserveVariables(t,e){for(let n=0,i=t.length;n<i;n++)this.ObserveVariable(t[n],e[n])}RemoveVariableObserver(t,e){if(this.IfAsyncWeCant("remove a variable observer"),null!==this._variableObservers)if(void 0!==e){if(this._variableObservers.has(e)){let n=this._variableObservers.get(e);null!==t?n.splice(n.indexOf(t),1):this._variableObservers.delete(e)}}else if(null!==t){let e=this._variableObservers.keys();for(let n of e){let e=this._variableObservers.get(n);e.splice(e.indexOf(t),1)}}}VariableStateDidChangeEvent(t,e){if(null===this._variableObservers)return;let n=this._variableObservers.get(t);if(void 0!==n){if(!(e instanceof v))throw new Error("Tried to get the value of a variable that isn't a standard type");let i=s(e,v);for(let e of n)e(t,i.valueObject)}}get globalTags(){return this.TagsAtStartOfFlowContainerWithPathString("")}TagsForContentAtPath(t){return this.TagsAtStartOfFlowContainerWithPathString(t)}TagsAtStartOfFlowContainerWithPathString(t){let n=new e(t),i=this.ContentAtPath(n).container;if(null===i)return d("flowContainer");for(;;){let t=i.content[0];if(!(t instanceof N))break;i=t}let r=null;for(let t of i.content){let e=a(t,j);if(!e)break;null==r&&(r=[]),r.push(e.text)}return r}BuildStringOfHierarchy(){let t=new m;return this.mainContentContainer.BuildStringOfHierarchy(t,0,this.state.currentPointer.Resolve()),t.toString()}BuildStringOfContainer(t){let e=new m;return t.BuildStringOfHierarchy(e,0,this.state.currentPointer.Resolve()),e.toString()}NextContent(){if(this.state.previousPointer=this.state.currentPointer.copy(),!this.state.divertedPointer.isNull&&(this.state.currentPointer=this.state.divertedPointer.copy(),this.state.divertedPointer=I.Null,this.VisitChangedContainersDueToDivert(),!this.state.currentPointer.isNull))return;if(!this.IncrementContentPointer()){let t=!1;this.state.callStack.CanPop(r.Function)?(this.state.PopCallStack(r.Function),this.state.inExpressionEvaluation&&this.state.PushEvaluationStack(new L),t=!0):this.state.callStack.canPopThread?(this.state.callStack.PopThread(),t=!0):this.state.TryExitFunctionEvaluationFromGame(),t&&!this.state.currentPointer.isNull&&this.NextContent()}}IncrementContentPointer(){let t=!0,e=this.state.callStack.currentElement.currentPointer.copy();if(e.index++,null===e.container)return d("pointer.container");for(;e.index>=e.container.content.length;){t=!1;let n=a(e.container.parent,N);if(n instanceof N==!1)break;let i=n.content.indexOf(e.container);if(-1==i)break;if(e=new I(n,i),e.index++,t=!0,null===e.container)return d("pointer.container")}return t||(e=I.Null),this.state.callStack.currentElement.currentPointer=e.copy(),t}TryFollowDefaultInvisibleChoice(){let t=this._state.currentChoices,e=t.filter(t=>t.isInvisibleDefault);if(0==e.length||t.length>e.length)return!1;let n=e[0];return null===n.targetPath?d("choice.targetPath"):null===n.threadAtGeneration?d("choice.threadAtGeneration"):(this.state.callStack.currentThread=n.threadAtGeneration,this.ChoosePath(n.targetPath,!1),!0)}NextSequenceShuffleIndex(){let t=a(this.state.PopEvaluationStack(),b);if(!(t instanceof b))return this.Error("expected number of elements in sequence for shuffle index"),0;let e=this.state.currentPointer.container;if(null===e)return d("seqContainer");if(null===t.value)return d("numElementsIntVal.value");let n=t.value,i=s(this.state.PopEvaluationStack(),b).value;if(null===i)return d("seqCount");let r=i/n,l=i%n,o=e.path.toString(),u=0;for(let t=0,e=o.length;t<e;t++)u+=o.charCodeAt(t)||0;let h=u+r+this.state.storySeed,c=new K(Math.floor(h)),p=[];for(let t=0;t<n;++t)p.push(t);for(let t=0;t<=l;++t){let e=c.next()%p.length,n=p[e];if(p.splice(e,1),t==l)return n}throw new Error("Should never reach here")}Error(t,e=!1){let n=new S(t);throw n.useEndLineNumber=e,n}Warning(t){this.AddError(t,!0)}AddError(t,e=!1,n=!1){let i=this.currentDebugMetadata,r=e?"WARNING":"ERROR";if(null!=i){let e=n?i.endLineNumber:i.startLineNumber;t="RUNTIME "+r+": '"+i.fileName+"' line "+e+": "+t}else t=this.state.currentPointer.isNull?"RUNTIME "+r+": "+t:"RUNTIME "+r+": ("+this.state.currentPointer+"): "+t;this.state.AddError(t,e),e||this.state.ForceEnd()}Assert(t,e=null){if(0==t)throw null==e&&(e="Story assert"),new Error(e+" "+this.currentDebugMetadata)}get currentDebugMetadata(){let t,e=this.state.currentPointer;if(!e.isNull&&null!==e.Resolve()&&(t=e.Resolve().debugMetadata,null!==t))return t;for(let n=this.state.callStack.elements.length-1;n>=0;--n)if(e=this.state.callStack.elements[n].currentPointer,!e.isNull&&null!==e.Resolve()&&(t=e.Resolve().debugMetadata,null!==t))return t;for(let e=this.state.outputStream.length-1;e>=0;--e){if(t=this.state.outputStream[e].debugMetadata,null!==t)return t}return null}get mainContentContainer(){return this._temporaryEvaluationContainer?this._temporaryEvaluationContainer:this._mainContentContainer}}X.inkVersionCurrent=19,function(t){let e;!function(t){t[t.NoChange=0]="NoChange",t[t.ExtendedBeyondNewline=1]="ExtendedBeyondNewline",t[t.NewlineRemoved=2]="NewlineRemoved"}(e=t.OutputStateChange||(t.OutputStateChange={}))}(X||(X={})),t.InkList=g,t.Story=X,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=ink-es2015.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmael%5CDocuments%5CCours%5Cmini-projet-2%5Capp%5Cpages%5Cindex.js!./":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmael%5CDocuments%5CCours%5Cmini-projet-2%5Capp%5Cpages%5Cindex.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inkjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inkjs */ "./node_modules/inkjs/dist/ink-es2015.js");
/* harmony import */ var inkjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inkjs__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\mael\\Documents\\Cours\\mini-projet-2\\app\\pages\\index.js",
    _s = $RefreshSig$();




function Home() {
  _s();

  // In lifecycle vars
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      story = _useState[0],
      setStory = _useState[1]; // Static vars


  var globalTags = null; // DOM elements

  var storyContainer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var outerScrollContainer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var customContinueStory = function customContinueStory() {
    if (null !== story && story.canContinue) {
      console.log("can continu");
      story.Continue();
    }
  };

  var continueStory = function continueStory(firstTime) {
    var paragraphIndex = 0;
    var delay = 1000.0; // Don't over-scroll past new content

    var previousBottomEdge = firstTime ? 0 : contentBottomEdgeY(); // Generate story text - loop through available content

    while (story.canContinue) {
      // Get ink to generate the next paragraph
      var paragraphText = story.Continue();
      var tags = story.currentTags; // Any special tags included with this line

      var customClasses = [];

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]; // Detect tags of the form "X: Y". Currently used for IMAGE and CLASS but could be
        // customised to be used for other things too.

        var splitTag = splitPropertyTag(tag); // IMAGE: src

        if (splitTag && splitTag.property == "IMAGE") {
          var imageElement = document.createElement('img');
          imageElement.src = splitTag.val;
          storyContainer.current.appendChild(imageElement);
          showAfter(delay, imageElement);
          delay += 200.0;
        } // CLASS: className
        else if (splitTag && splitTag.property == "CLASS") {
            customClasses.push(splitTag.val);
          } // CLEAR - removes all existing content.
          // RESTART - clears everything and restarts the story from the beginning
          else if (tag == "CLEAR" || tag == "RESTART") {
              removeAll("p");
              removeAll("img"); // Comment out this line if you want to leave the header visible when clearing

              setVisible(".header", false);

              if (tag == "RESTART") {
                restart();
                return;
              }
            }
      } // Create paragraph element (initially hidden)


      var paragraphElement = document.createElement('p');
      paragraphElement.innerHTML = paragraphText;
      storyContainer.current.appendChild(paragraphElement); // Add any custom classes derived from ink tags

      for (var i = 0; i < customClasses.length; i++) {
        paragraphElement.classList.add(customClasses[i]);
      } // Fade in paragraph after a short delay


      showAfter(delay, paragraphElement);
      delay += 200.0;
    } // Create HTML choices from ink choices


    story.currentChoices.forEach(function (choice) {
      // Create paragraph with anchor element
      var choiceParagraphElement = document.createElement('p');
      choiceParagraphElement.classList.add("choice");
      choiceParagraphElement.innerHTML = "<button class=\"answer\"><span>".concat(choice.text, "</span></button>");
      storyContainer.current.appendChild(choiceParagraphElement); // Fade choice in after a short delay

      showAfter(delay, choiceParagraphElement);
      delay += 200.0; // Click on choice

      var choiceAnchorEl = choiceParagraphElement.querySelectorAll("button.answer")[0];
      choiceAnchorEl.addEventListener("click", function (event) {
        // Don't follow <a> link
        event.preventDefault(); // Remove all existing choices

        removeAll("p.choice"); // Tell the story where to go next

        story.ChooseChoiceIndex(choice.index); // Aaand loop

        continueStory();
      });
    }); // Extend height to fit
    // We do this manually so that removing elements and creating new ones doesn't
    // cause the height (and therefore scroll) to jump backwards temporarily.

    storyContainer.current.style.height = contentBottomEdgeY() + "px";
    if (!firstTime) scrollDown(previousBottomEdge);
  };

  var restart = function restart() {
    story.ResetState();
    setVisible(".header", true);
    continueStory(true);
    outerScrollContainer.current.scrollTo(0, 0);
  }; // Fades in an element after a specified delay


  var showAfter = function showAfter(delay, el) {
    el.classList.add("hide");
    setTimeout(function () {
      el.classList.remove("hide");
    }, delay);
  }; // Scrolls the page down, but no further than the bottom edge of what you could
  // see previously, so it doesn't go too far.


  function scrollDown(previousBottomEdge) {
    // Line up top of screen with the bottom of where the previous content ended
    var target = previousBottomEdge; // Can't go further than the very bottom of the page

    var limit = outerScrollContainer.current.scrollHeight - outerScrollContainer.current.clientHeight;
    if (target > limit) target = limit;
    var start = outerScrollContainer.current.scrollTop;
    var dist = target - start;
    var duration = 300 + 300 * dist / 100;
    var startTime = null;

    function step(time) {
      if (startTime == null) startTime = time;
      var t = (time - startTime) / duration;
      var lerp = 3 * t * t - 2 * t * t * t; // ease in/out

      outerScrollContainer.current.scrollTo(0, (1.0 - lerp) * start + lerp * target);
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  } // The Y coordinate of the bottom end of all the story content, used
  // for growing the container, and deciding how far to scroll.


  function contentBottomEdgeY() {
    var bottomElement = storyContainer.current.lastElementChild;
    return bottomElement ? bottomElement.offsetTop + bottomElement.offsetHeight : 0;
  } // Remove all elements that match the given selector. Used for removing choices after
  // you've picked one, as well as for the CLEAR and RESTART tags.


  function removeAll(selector) {
    var allElements = storyContainer.current.querySelectorAll(selector);

    for (var i = 0; i < allElements.length; i++) {
      var el = allElements[i];
      el.parentNode.removeChild(el);
    }
  } // Used for hiding and showing the header when you CLEAR or RESTART the story respectively.


  function setVisible(selector, visible) {
    var allElements = storyContainer.current.querySelectorAll(selector);

    for (var i = 0; i < allElements.length; i++) {
      var el = allElements[i];
      if (!visible) el.classList.add("invisible");else el.classList.remove("invisible");
    }
  } // Helper for parsing out tags of the form:
  //  # PROPERTY: value
  // e.g. IMAGE: source path


  function splitPropertyTag(tag) {
    var propertySplitIdx = tag.indexOf(":");

    if (propertySplitIdx != null) {
      var property = tag.substr(0, propertySplitIdx).trim();
      var val = tag.substr(propertySplitIdx + 1).trim();
      return {
        property: property,
        val: val
      };
    }

    return null;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetch("story1.json").then(function (response) {
      console.log("Story file found");
      return response.text();
    }).then(function (storyContent) {
      console.log("Story file loaded");
      var newStory = new inkjs__WEBPACK_IMPORTED_MODULE_3__["Story"](storyContent);
      console.log("New ink story created");
      setStory(newStory);
    });
  }, []); // After story is loaded

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (null !== story) {
      continueStory();
    }
  }, [story]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Dating Sim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Dating Sim"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "outerContainer",
        ref: outerScrollContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "story",
          ref: storyContainer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 244,
    columnNumber: 9
  }, this);
}

_s(Home, "bBrRHsu/hFrdZrgnmQ8CAWNO0pk=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cmael%5CDocuments%5CCours%5Cmini-projet-2%5Capp%5Cpages%5Cindex.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmtqcy9kaXN0L2luay1lczIwMTUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFtcFN0YXRlQ29udGV4dCIsIlJlYWN0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsImlzSW5BbXBNb2RlIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiaW5BbXBNb2RlIiwiaGVhZCIsImNoaWxkIiwibGlzdCIsImZyYWdtZW50TGlzdCIsIk1FVEFUWVBFUyIsImtleXMiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJrZXkiLCJpIiwibGVuIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwiaGVhZEVsZW1lbnQiLCJkZWZhdWx0SGVhZCIsInByb3BzIiwidW5pcXVlIiwiYyIsInByb2Nlc3MiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZCIsImlzU2VydmVyIiwiY29uc3RydWN0b3IiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIkNvbXBvbmVudCIsIkhvbWUiLCJ1c2VTdGF0ZSIsInN0b3J5Iiwic2V0U3RvcnkiLCJnbG9iYWxUYWdzIiwic3RvcnlDb250YWluZXIiLCJ1c2VSZWYiLCJvdXRlclNjcm9sbENvbnRhaW5lciIsImN1c3RvbUNvbnRpbnVlU3RvcnkiLCJjYW5Db250aW51ZSIsImNvbnNvbGUiLCJsb2ciLCJDb250aW51ZSIsImNvbnRpbnVlU3RvcnkiLCJmaXJzdFRpbWUiLCJwYXJhZ3JhcGhJbmRleCIsImRlbGF5IiwicHJldmlvdXNCb3R0b21FZGdlIiwiY29udGVudEJvdHRvbUVkZ2VZIiwicGFyYWdyYXBoVGV4dCIsImN1cnJlbnRUYWdzIiwiY3VzdG9tQ2xhc3NlcyIsImxlbmd0aCIsInRhZyIsInNwbGl0VGFnIiwic3BsaXRQcm9wZXJ0eVRhZyIsInByb3BlcnR5IiwiaW1hZ2VFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwidmFsIiwiY3VycmVudCIsImFwcGVuZENoaWxkIiwic2hvd0FmdGVyIiwicHVzaCIsInJlbW92ZUFsbCIsInNldFZpc2libGUiLCJyZXN0YXJ0IiwicGFyYWdyYXBoRWxlbWVudCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRDaG9pY2VzIiwiZm9yRWFjaCIsImNob2ljZSIsImNob2ljZVBhcmFncmFwaEVsZW1lbnQiLCJ0ZXh0IiwiY2hvaWNlQW5jaG9yRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJDaG9vc2VDaG9pY2VJbmRleCIsImluZGV4Iiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxEb3duIiwiUmVzZXRTdGF0ZSIsInNjcm9sbFRvIiwiZWwiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidGFyZ2V0IiwibGltaXQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdGFydCIsInNjcm9sbFRvcCIsImRpc3QiLCJkdXJhdGlvbiIsInN0YXJ0VGltZSIsInN0ZXAiLCJ0aW1lIiwidCIsImxlcnAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJib3R0b21FbGVtZW50IiwibGFzdEVsZW1lbnRDaGlsZCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsInNlbGVjdG9yIiwiYWxsRWxlbWVudHMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ2aXNpYmxlIiwicHJvcGVydHlTcGxpdElkeCIsImluZGV4T2YiLCJzdWJzdHIiLCJ0cmltIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdG9yeUNvbnRlbnQiLCJuZXdTdG9yeSIsImlua3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNWQSx1QkFBdUIsbUJBQU8sQ0FBQyxxRkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ1BBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsMkI7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDSkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQsNEJBQTRCLG1CQUFPLENBQUMsK0ZB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QUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QVcsUUFBUTtBQUNuQixZQUFZLGFBQWE7QUFDekI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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QUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUdJO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFnQyxXQUFHLEVBQUVLLG9CQUFyQztBQUFBLCtCQUNJO0FBQUssWUFBRSxFQUFDLE9BQVI7QUFBZ0IsYUFBRyxFQUFFRjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0dBNVB1QkwsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9lKGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSxlKTplKCh0PXR8fHNlbGYpLmlua2pzPXt9KX0odGhpcywoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7Y2xhc3MgZXtjb25zdHJ1Y3Rvcigpe2lmKHRoaXMuX2NvbXBvbmVudHM9W10sdGhpcy5fY29tcG9uZW50c1N0cmluZz1udWxsLHRoaXMuX2lzUmVsYXRpdmU9ITEsXCJzdHJpbmdcIj09dHlwZW9mIGFyZ3VtZW50c1swXSl7bGV0IHQ9YXJndW1lbnRzWzBdO3RoaXMuY29tcG9uZW50c1N0cmluZz10fWVsc2UgaWYoYXJndW1lbnRzWzBdaW5zdGFuY2VvZiBlLkNvbXBvbmVudCYmYXJndW1lbnRzWzFdaW5zdGFuY2VvZiBlKXtsZXQgdD1hcmd1bWVudHNbMF0sZT1hcmd1bWVudHNbMV07dGhpcy5fY29tcG9uZW50cy5wdXNoKHQpLHRoaXMuX2NvbXBvbmVudHM9dGhpcy5fY29tcG9uZW50cy5jb25jYXQoZS5fY29tcG9uZW50cyl9ZWxzZSBpZihhcmd1bWVudHNbMF1pbnN0YW5jZW9mIEFycmF5KXtsZXQgdD1hcmd1bWVudHNbMF0sZT0hIWFyZ3VtZW50c1sxXTt0aGlzLl9jb21wb25lbnRzPXRoaXMuX2NvbXBvbmVudHMuY29uY2F0KHQpLHRoaXMuX2lzUmVsYXRpdmU9ZX19Z2V0IGlzUmVsYXRpdmUoKXtyZXR1cm4gdGhpcy5faXNSZWxhdGl2ZX1nZXQgY29tcG9uZW50Q291bnQoKXtyZXR1cm4gdGhpcy5fY29tcG9uZW50cy5sZW5ndGh9Z2V0IGhlYWQoKXtyZXR1cm4gdGhpcy5fY29tcG9uZW50cy5sZW5ndGg+MD90aGlzLl9jb21wb25lbnRzWzBdOm51bGx9Z2V0IHRhaWwoKXtpZih0aGlzLl9jb21wb25lbnRzLmxlbmd0aD49Mil7bGV0IHQ9dGhpcy5fY29tcG9uZW50cy5zbGljZSgxLHRoaXMuX2NvbXBvbmVudHMubGVuZ3RoKTtyZXR1cm4gbmV3IGUodCl9cmV0dXJuIGUuc2VsZn1nZXQgbGVuZ3RoKCl7cmV0dXJuIHRoaXMuX2NvbXBvbmVudHMubGVuZ3RofWdldCBsYXN0Q29tcG9uZW50KCl7bGV0IHQ9dGhpcy5fY29tcG9uZW50cy5sZW5ndGgtMTtyZXR1cm4gdD49MD90aGlzLl9jb21wb25lbnRzW3RdOm51bGx9Z2V0IGNvbnRhaW5zTmFtZWRDb21wb25lbnQoKXtmb3IobGV0IHQ9MCxlPXRoaXMuX2NvbXBvbmVudHMubGVuZ3RoO3Q8ZTt0KyspaWYoIXRoaXMuX2NvbXBvbmVudHNbdF0uaXNJbmRleClyZXR1cm4hMDtyZXR1cm4hMX1zdGF0aWMgZ2V0IHNlbGYoKXtsZXQgdD1uZXcgZTtyZXR1cm4gdC5faXNSZWxhdGl2ZT0hMCx0fUdldENvbXBvbmVudCh0KXtyZXR1cm4gdGhpcy5fY29tcG9uZW50c1t0XX1QYXRoQnlBcHBlbmRpbmdQYXRoKHQpe2xldCBuPW5ldyBlLGk9MDtmb3IobGV0IGU9MDtlPHQuX2NvbXBvbmVudHMubGVuZ3RoJiZ0Ll9jb21wb25lbnRzW2VdLmlzUGFyZW50OysrZSlpKys7Zm9yKGxldCB0PTA7dDx0aGlzLl9jb21wb25lbnRzLmxlbmd0aC1pOysrdCluLl9jb21wb25lbnRzLnB1c2godGhpcy5fY29tcG9uZW50c1t0XSk7Zm9yKGxldCBlPWk7ZTx0Ll9jb21wb25lbnRzLmxlbmd0aDsrK2Upbi5fY29tcG9uZW50cy5wdXNoKHQuX2NvbXBvbmVudHNbZV0pO3JldHVybiBufWdldCBjb21wb25lbnRzU3RyaW5nKCl7cmV0dXJuIG51bGw9PXRoaXMuX2NvbXBvbmVudHNTdHJpbmcmJih0aGlzLl9jb21wb25lbnRzU3RyaW5nPXRoaXMuX2NvbXBvbmVudHMuam9pbihcIi5cIiksdGhpcy5pc1JlbGF0aXZlJiYodGhpcy5fY29tcG9uZW50c1N0cmluZz1cIi5cIit0aGlzLl9jb21wb25lbnRzU3RyaW5nKSksdGhpcy5fY29tcG9uZW50c1N0cmluZ31zZXQgY29tcG9uZW50c1N0cmluZyh0KXtpZih0aGlzLl9jb21wb25lbnRzLmxlbmd0aD0wLHRoaXMuX2NvbXBvbmVudHNTdHJpbmc9dCxudWxsPT10aGlzLl9jb21wb25lbnRzU3RyaW5nfHxcIlwiPT10aGlzLl9jb21wb25lbnRzU3RyaW5nKXJldHVybjtcIi5cIj09dGhpcy5fY29tcG9uZW50c1N0cmluZ1swXSYmKHRoaXMuX2lzUmVsYXRpdmU9ITAsdGhpcy5fY29tcG9uZW50c1N0cmluZz10aGlzLl9jb21wb25lbnRzU3RyaW5nLnN1YnN0cmluZygxKSk7bGV0IG49dGhpcy5fY29tcG9uZW50c1N0cmluZy5zcGxpdChcIi5cIik7Zm9yKGxldCB0IG9mIG4pL14oXFwtfFxcKyk/KFswLTldK3xJbmZpbml0eSkkLy50ZXN0KHQpP3RoaXMuX2NvbXBvbmVudHMucHVzaChuZXcgZS5Db21wb25lbnQocGFyc2VJbnQodCkpKTp0aGlzLl9jb21wb25lbnRzLnB1c2gobmV3IGUuQ29tcG9uZW50KHQpKX10b1N0cmluZygpe3JldHVybiB0aGlzLmNvbXBvbmVudHNTdHJpbmd9RXF1YWxzKHQpe2lmKG51bGw9PXQpcmV0dXJuITE7aWYodC5fY29tcG9uZW50cy5sZW5ndGghPXRoaXMuX2NvbXBvbmVudHMubGVuZ3RoKXJldHVybiExO2lmKHQuaXNSZWxhdGl2ZSE9dGhpcy5pc1JlbGF0aXZlKXJldHVybiExO2ZvcihsZXQgZT0wLG49dC5fY29tcG9uZW50cy5sZW5ndGg7ZTxuO2UrKylpZighdC5fY29tcG9uZW50c1tlXS5FcXVhbHModGhpcy5fY29tcG9uZW50c1tlXSkpcmV0dXJuITE7cmV0dXJuITB9UGF0aEJ5QXBwZW5kaW5nQ29tcG9uZW50KHQpe2xldCBuPW5ldyBlO3JldHVybiBuLl9jb21wb25lbnRzLnB1c2guYXBwbHkobi5fY29tcG9uZW50cyx0aGlzLl9jb21wb25lbnRzKSxuLl9jb21wb25lbnRzLnB1c2godCksbn19dmFyIG4saSxyO2Z1bmN0aW9uIGEodCxlKXtyZXR1cm4gdCBpbnN0YW5jZW9mIGU/aCh0KTpudWxsfWZ1bmN0aW9uIHModCxlKXtpZih0IGluc3RhbmNlb2YgZSlyZXR1cm4gaCh0KTt0aHJvdyBuZXcgRXJyb3IoYCR7dH0gaXMgbm90IG9mIHR5cGUgJHtlfWApfWZ1bmN0aW9uIGwodCl7cmV0dXJuIHQuaGFzVmFsaWROYW1lJiZ0Lm5hbWU/dDpudWxsfWZ1bmN0aW9uIG8odCl7cmV0dXJuIHZvaWQgMD09PXQ/bnVsbDp0fWZ1bmN0aW9uIHUodCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuRXF1YWxzfWZ1bmN0aW9uIGgodCxlKXtyZXR1cm4gdH1lLnBhcmVudElkPVwiXlwiLGZ1bmN0aW9uKHQpe2NsYXNzIGV7Y29uc3RydWN0b3IodCl7dGhpcy5pbmRleD0tMSx0aGlzLm5hbWU9bnVsbCxcInN0cmluZ1wiPT10eXBlb2YgdD90aGlzLm5hbWU9dDp0aGlzLmluZGV4PXR9Z2V0IGlzSW5kZXgoKXtyZXR1cm4gdGhpcy5pbmRleD49MH1nZXQgaXNQYXJlbnQoKXtyZXR1cm4gdGhpcy5uYW1lPT10LnBhcmVudElkfXN0YXRpYyBUb1BhcmVudCgpe3JldHVybiBuZXcgZSh0LnBhcmVudElkKX10b1N0cmluZygpe3JldHVybiB0aGlzLmlzSW5kZXg/dGhpcy5pbmRleC50b1N0cmluZygpOnRoaXMubmFtZX1FcXVhbHModCl7cmV0dXJuIG51bGwhPXQmJnQuaXNJbmRleD09dGhpcy5pc0luZGV4JiYodGhpcy5pc0luZGV4P3RoaXMuaW5kZXg9PXQuaW5kZXg6dGhpcy5uYW1lPT10Lm5hbWUpfX10LkNvbXBvbmVudD1lfShlfHwoZT17fSkpLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXtpZighdCl0aHJvdyB2b2lkIDAhPT1lJiZjb25zb2xlLndhcm4oZSksY29uc29sZS50cmFjZSYmY29uc29sZS50cmFjZSgpLG5ldyBFcnJvcihcIlwiKX10LkFzc2VydFR5cGU9ZnVuY3Rpb24odCxuLGkpe2UodCBpbnN0YW5jZW9mIG4saSl9LHQuQXNzZXJ0PWV9KG58fChuPXt9KSk7Y2xhc3MgYyBleHRlbmRzIEVycm9ye31mdW5jdGlvbiBkKHQpe3Rocm93IG5ldyBjKHQrXCIgaXMgbnVsbCBvciB1bmRlZmluZWRcIil9Y2xhc3MgcHtjb25zdHJ1Y3Rvcigpe3RoaXMucGFyZW50PW51bGwsdGhpcy5fZGVidWdNZXRhZGF0YT1udWxsLHRoaXMuX3BhdGg9bnVsbH1nZXQgZGVidWdNZXRhZGF0YSgpe3JldHVybiBudWxsPT09dGhpcy5fZGVidWdNZXRhZGF0YSYmdGhpcy5wYXJlbnQ/dGhpcy5wYXJlbnQuZGVidWdNZXRhZGF0YTp0aGlzLl9kZWJ1Z01ldGFkYXRhfXNldCBkZWJ1Z01ldGFkYXRhKHQpe3RoaXMuX2RlYnVnTWV0YWRhdGE9dH1nZXQgb3duRGVidWdNZXRhZGF0YSgpe3JldHVybiB0aGlzLl9kZWJ1Z01ldGFkYXRhfURlYnVnTGluZU51bWJlck9mUGF0aCh0KXtpZihudWxsPT09dClyZXR1cm4gbnVsbDtsZXQgZT10aGlzLnJvb3RDb250ZW50Q29udGFpbmVyO2lmKGUpe2xldCBuPWUuQ29udGVudEF0UGF0aCh0KS5vYmo7aWYobil7bGV0IHQ9bi5kZWJ1Z01ldGFkYXRhO2lmKG51bGwhPT10KXJldHVybiB0LnN0YXJ0TGluZU51bWJlcn19cmV0dXJuIG51bGx9Z2V0IHBhdGgoKXtpZihudWxsPT10aGlzLl9wYXRoKWlmKG51bGw9PXRoaXMucGFyZW50KXRoaXMuX3BhdGg9bmV3IGU7ZWxzZXtsZXQgdD1bXSxuPXRoaXMsaT1hKG4ucGFyZW50LE4pO2Zvcig7bnVsbCE9PWk7KXtsZXQgcj1sKG4pO251bGwhPXImJnIuaGFzVmFsaWROYW1lP3QudW5zaGlmdChuZXcgZS5Db21wb25lbnQoci5uYW1lKSk6dC51bnNoaWZ0KG5ldyBlLkNvbXBvbmVudChpLmNvbnRlbnQuaW5kZXhPZihuKSkpLG49aSxpPWEoaS5wYXJlbnQsTil9dGhpcy5fcGF0aD1uZXcgZSh0KX1yZXR1cm4gdGhpcy5fcGF0aH1SZXNvbHZlUGF0aCh0KXtpZihudWxsPT09dClyZXR1cm4gZChcInBhdGhcIik7aWYodC5pc1JlbGF0aXZlKXtsZXQgZT1hKHRoaXMsTik7cmV0dXJuIG51bGw9PT1lJiYobi5Bc3NlcnQobnVsbCE9PXRoaXMucGFyZW50LFwiQ2FuJ3QgcmVzb2x2ZSByZWxhdGl2ZSBwYXRoIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhIHBhcmVudFwiKSxlPWEodGhpcy5wYXJlbnQsTiksbi5Bc3NlcnQobnVsbCE9PWUsXCJFeHBlY3RlZCBwYXJlbnQgdG8gYmUgYSBjb250YWluZXJcIiksbi5Bc3NlcnQodC5HZXRDb21wb25lbnQoMCkuaXNQYXJlbnQpLHQ9dC50YWlsKSxudWxsPT09ZT9kKFwibmVhcmVzdENvbnRhaW5lclwiKTplLkNvbnRlbnRBdFBhdGgodCl9e2xldCBlPXRoaXMucm9vdENvbnRlbnRDb250YWluZXI7cmV0dXJuIG51bGw9PT1lP2QoXCJjb250ZW50Q29udGFpbmVyXCIpOmUuQ29udGVudEF0UGF0aCh0KX19Q29udmVydFBhdGhUb1JlbGF0aXZlKHQpe2xldCBuPXRoaXMucGF0aCxpPU1hdGgubWluKHQubGVuZ3RoLG4ubGVuZ3RoKSxyPS0xO2ZvcihsZXQgZT0wO2U8aTsrK2Upe2xldCBpPW4uR2V0Q29tcG9uZW50KGUpLGE9dC5HZXRDb21wb25lbnQoZSk7aWYoIWkuRXF1YWxzKGEpKWJyZWFrO3I9ZX1pZigtMT09cilyZXR1cm4gdDtsZXQgYT1uLmNvbXBvbmVudENvdW50LTEtcixzPVtdO2ZvcihsZXQgdD0wO3Q8YTsrK3Qpcy5wdXNoKGUuQ29tcG9uZW50LlRvUGFyZW50KCkpO2ZvcihsZXQgZT1yKzE7ZTx0LmNvbXBvbmVudENvdW50OysrZSlzLnB1c2godC5HZXRDb21wb25lbnQoZSkpO3JldHVybiBuZXcgZShzLCEwKX1Db21wYWN0UGF0aFN0cmluZyh0KXtsZXQgZT1udWxsLG49bnVsbDtpZih0LmlzUmVsYXRpdmUpbj10LmNvbXBvbmVudHNTdHJpbmcsZT10aGlzLnBhdGguUGF0aEJ5QXBwZW5kaW5nUGF0aCh0KS5jb21wb25lbnRzU3RyaW5nO2Vsc2V7bj10aGlzLkNvbnZlcnRQYXRoVG9SZWxhdGl2ZSh0KS5jb21wb25lbnRzU3RyaW5nLGU9dC5jb21wb25lbnRzU3RyaW5nfXJldHVybiBuLmxlbmd0aDxlLmxlbmd0aD9uOmV9Z2V0IHJvb3RDb250ZW50Q29udGFpbmVyKCl7bGV0IHQ9dGhpcztmb3IoO3QucGFyZW50Oyl0PXQucGFyZW50O3JldHVybiBhKHQsTil9Q29weSgpe3Rocm93IEVycm9yKFwiTm90IEltcGxlbWVudGVkOiBEb2Vzbid0IHN1cHBvcnQgY29weWluZ1wiKX1TZXRDaGlsZCh0LGUsbil7dFtlXSYmKHRbZV09bnVsbCksdFtlXT1uLHRbZV0mJih0W2VdLnBhcmVudD10aGlzKX19Y2xhc3MgbXtjb25zdHJ1Y3Rvcih0KXt0PXZvaWQgMCE9PXQ/dC50b1N0cmluZygpOlwiXCIsdGhpcy5zdHJpbmc9dH1nZXQgTGVuZ3RoKCl7cmV0dXJuIHRoaXMuc3RyaW5nLmxlbmd0aH1BcHBlbmQodCl7bnVsbCE9PXQmJih0aGlzLnN0cmluZys9dCl9QXBwZW5kTGluZSh0KXt2b2lkIDAhPT10JiZ0aGlzLkFwcGVuZCh0KSx0aGlzLnN0cmluZys9XCJcXG5cIn1BcHBlbmRGb3JtYXQodCwuLi5lKXt0aGlzLnN0cmluZys9dC5yZXBsYWNlKC97KFxcZCspfS9nLCh0LG4pPT52b2lkIDAhPT1lW25dP2Vbbl06dCl9dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5zdHJpbmd9fWNsYXNzIGZ7Y29uc3RydWN0b3IoKXtpZih0aGlzLm9yaWdpbk5hbWU9bnVsbCx0aGlzLml0ZW1OYW1lPW51bGwsdm9pZCAwIT09YXJndW1lbnRzWzFdKXtsZXQgdD1hcmd1bWVudHNbMF0sZT1hcmd1bWVudHNbMV07dGhpcy5vcmlnaW5OYW1lPXQsdGhpcy5pdGVtTmFtZT1lfWVsc2UgaWYoYXJndW1lbnRzWzBdKXtsZXQgdD1hcmd1bWVudHNbMF0udG9TdHJpbmcoKS5zcGxpdChcIi5cIik7dGhpcy5vcmlnaW5OYW1lPXRbMF0sdGhpcy5pdGVtTmFtZT10WzFdfX1zdGF0aWMgZ2V0IE51bGwoKXtyZXR1cm4gbmV3IGYobnVsbCxudWxsKX1nZXQgaXNOdWxsKCl7cmV0dXJuIG51bGw9PXRoaXMub3JpZ2luTmFtZSYmbnVsbD09dGhpcy5pdGVtTmFtZX1nZXQgZnVsbE5hbWUoKXtyZXR1cm4obnVsbCE9PXRoaXMub3JpZ2luTmFtZT90aGlzLm9yaWdpbk5hbWU6XCI/XCIpK1wiLlwiK3RoaXMuaXRlbU5hbWV9dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5mdWxsTmFtZX1FcXVhbHModCl7aWYodCBpbnN0YW5jZW9mIGYpe2xldCBlPXQ7cmV0dXJuIGUuaXRlbU5hbWU9PXRoaXMuaXRlbU5hbWUmJmUub3JpZ2luTmFtZT09dGhpcy5vcmlnaW5OYW1lfXJldHVybiExfWNvcHkoKXtyZXR1cm4gbmV3IGYodGhpcy5vcmlnaW5OYW1lLHRoaXMuaXRlbU5hbWUpfXNlcmlhbGl6ZWQoKXtyZXR1cm4gSlNPTi5zdHJpbmdpZnkoe29yaWdpbk5hbWU6dGhpcy5vcmlnaW5OYW1lLGl0ZW1OYW1lOnRoaXMuaXRlbU5hbWV9KX1zdGF0aWMgZnJvbVNlcmlhbGl6ZWRLZXkodCl7bGV0IGU9SlNPTi5wYXJzZSh0KTtpZighZi5pc0xpa2VJbmtMaXN0SXRlbShlKSlyZXR1cm4gZi5OdWxsO2xldCBuPWU7cmV0dXJuIG5ldyBmKG4ub3JpZ2luTmFtZSxuLml0ZW1OYW1lKX1zdGF0aWMgaXNMaWtlSW5rTGlzdEl0ZW0odCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQmJighKCF0Lmhhc093blByb3BlcnR5KFwib3JpZ2luTmFtZVwiKXx8IXQuaGFzT3duUHJvcGVydHkoXCJpdGVtTmFtZVwiKSkmJigoXCJzdHJpbmdcIj09dHlwZW9mIHQub3JpZ2luTmFtZXx8bnVsbD09PXR5cGVvZiB0Lm9yaWdpbk5hbWUpJiYoXCJzdHJpbmdcIj09dHlwZW9mIHQuaXRlbU5hbWV8fG51bGw9PT10eXBlb2YgdC5pdGVtTmFtZSkpKX19Y2xhc3MgZyBleHRlbmRzIE1hcHtjb25zdHJ1Y3Rvcigpe2lmKHN1cGVyKGFyZ3VtZW50c1swXWluc3RhbmNlb2YgZz9hcmd1bWVudHNbMF06W10pLHRoaXMub3JpZ2lucz1udWxsLHRoaXMuX29yaWdpbk5hbWVzPVtdLGFyZ3VtZW50c1swXWluc3RhbmNlb2YgZyl7bGV0IHQ9YXJndW1lbnRzWzBdO3QuX29yaWdpbk5hbWVzJiYodGhpcy5fb3JpZ2luTmFtZXM9dC5fb3JpZ2luTmFtZXMuc2xpY2UoKSl9ZWxzZSBpZihcInN0cmluZ1wiPT10eXBlb2YgYXJndW1lbnRzWzBdKXtsZXQgdD1hcmd1bWVudHNbMF0sZT1hcmd1bWVudHNbMV07dGhpcy5TZXRJbml0aWFsT3JpZ2luTmFtZSh0KTtsZXQgbj1lLmxpc3REZWZpbml0aW9ucy5UcnlMaXN0R2V0RGVmaW5pdGlvbih0LG51bGwpO2lmKCFuLmV4aXN0cyl0aHJvdyBuZXcgRXJyb3IoXCJJbmtMaXN0IG9yaWdpbiBjb3VsZCBub3QgYmUgZm91bmQgaW4gc3Rvcnkgd2hlbiBjb25zdHJ1Y3RpbmcgbmV3IGxpc3Q6IFwiK3QpO3RoaXMub3JpZ2lucz1bbi5yZXN1bHRdfWVsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdLmhhc093blByb3BlcnR5KFwiS2V5XCIpJiZhcmd1bWVudHNbMF0uaGFzT3duUHJvcGVydHkoXCJWYWx1ZVwiKSl7bGV0IHQ9YXJndW1lbnRzWzBdO3RoaXMuQWRkKHQuS2V5LHQuVmFsdWUpfX1BZGRJdGVtKHQpe2lmKHQgaW5zdGFuY2VvZiBmKXtsZXQgZT10O2lmKG51bGw9PWUub3JpZ2luTmFtZSlyZXR1cm4gdm9pZCB0aGlzLkFkZEl0ZW0oZS5pdGVtTmFtZSk7aWYobnVsbD09PXRoaXMub3JpZ2lucylyZXR1cm4gZChcInRoaXMub3JpZ2luc1wiKTtmb3IobGV0IHQgb2YgdGhpcy5vcmlnaW5zKWlmKHQubmFtZT09ZS5vcmlnaW5OYW1lKXtsZXQgbj10LlRyeUdldFZhbHVlRm9ySXRlbShlLDApO2lmKG4uZXhpc3RzKXJldHVybiB2b2lkIHRoaXMuQWRkKGUsbi5yZXN1bHQpO3Rocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBhZGQgdGhlIGl0ZW0gXCIrZStcIiB0byB0aGlzIGxpc3QgYmVjYXVzZSBpdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBvcmlnaW5hbCBsaXN0IGRlZmluaXRpb24gaW4gaW5rLlwiKX10aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gYWRkIGl0ZW0gdG8gbGlzdCBiZWNhdXNlIHRoZSBpdGVtIHdhcyBmcm9tIGEgbmV3IGxpc3QgZGVmaW5pdGlvbiB0aGF0IHdhc24ndCBwcmV2aW91c2x5IGtub3duIHRvIHRoaXMgbGlzdC4gT25seSBpdGVtcyBmcm9tIHByZXZpb3VzbHkga25vd24gbGlzdHMgY2FuIGJlIHVzZWQsIHNvIHRoYXQgdGhlIGludCB2YWx1ZSBjYW4gYmUgZm91bmQuXCIpfXtsZXQgZT10LG49bnVsbDtpZihudWxsPT09dGhpcy5vcmlnaW5zKXJldHVybiBkKFwidGhpcy5vcmlnaW5zXCIpO2ZvcihsZXQgdCBvZiB0aGlzLm9yaWdpbnMpe2lmKG51bGw9PT1lKXJldHVybiBkKFwiaXRlbU5hbWVcIik7aWYodC5Db250YWluc0l0ZW1XaXRoTmFtZShlKSl7aWYobnVsbCE9bil0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgYWRkIHRoZSBpdGVtIFwiK2UrXCIgdG8gdGhpcyBsaXN0IGJlY2F1c2UgaXQgY291bGQgY29tZSBmcm9tIGVpdGhlciBcIit0Lm5hbWUrXCIgb3IgXCIrbi5uYW1lKTtuPXR9fWlmKG51bGw9PW4pdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGFkZCB0aGUgaXRlbSBcIitlK1wiIHRvIHRoaXMgbGlzdCBiZWNhdXNlIGl0IGlzbid0IGtub3duIHRvIGFueSBsaXN0IGRlZmluaXRpb25zIHByZXZpb3VzbHkgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbGlzdC5cIik7bGV0IGk9bmV3IGYobi5uYW1lLGUpLHI9bi5WYWx1ZUZvckl0ZW0oaSk7dGhpcy5BZGQoaSxyKX19Q29udGFpbnNJdGVtTmFtZWQodCl7Zm9yKGxldFtlXW9mIHRoaXMpe2lmKGYuZnJvbVNlcmlhbGl6ZWRLZXkoZSkuaXRlbU5hbWU9PXQpcmV0dXJuITB9cmV0dXJuITF9Q29udGFpbnNLZXkodCl7cmV0dXJuIHRoaXMuaGFzKHQuc2VyaWFsaXplZCgpKX1BZGQodCxlKXtsZXQgbj10LnNlcmlhbGl6ZWQoKTtpZih0aGlzLmhhcyhuKSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgTWFwIGFscmVhZHkgY29udGFpbnMgYW4gZW50cnkgZm9yIFwiK3QpO3RoaXMuc2V0KG4sZSl9UmVtb3ZlKHQpe3JldHVybiB0aGlzLmRlbGV0ZSh0LnNlcmlhbGl6ZWQoKSl9Z2V0IENvdW50KCl7cmV0dXJuIHRoaXMuc2l6ZX1nZXQgb3JpZ2luT2ZNYXhJdGVtKCl7aWYobnVsbD09dGhpcy5vcmlnaW5zKXJldHVybiBudWxsO2xldCB0PXRoaXMubWF4SXRlbS5LZXkub3JpZ2luTmFtZSxlPW51bGw7cmV0dXJuIHRoaXMub3JpZ2lucy5ldmVyeShuPT5uLm5hbWUhPXR8fChlPW4sITEpKSxlfWdldCBvcmlnaW5OYW1lcygpe2lmKHRoaXMuQ291bnQ+MCl7bnVsbD09dGhpcy5fb3JpZ2luTmFtZXMmJnRoaXMuQ291bnQ+MD90aGlzLl9vcmlnaW5OYW1lcz1bXToodGhpcy5fb3JpZ2luTmFtZXN8fCh0aGlzLl9vcmlnaW5OYW1lcz1bXSksdGhpcy5fb3JpZ2luTmFtZXMubGVuZ3RoPTApO2ZvcihsZXRbdF1vZiB0aGlzKXtsZXQgZT1mLmZyb21TZXJpYWxpemVkS2V5KHQpO2lmKG51bGw9PT1lLm9yaWdpbk5hbWUpcmV0dXJuIGQoXCJpdGVtLm9yaWdpbk5hbWVcIik7dGhpcy5fb3JpZ2luTmFtZXMucHVzaChlLm9yaWdpbk5hbWUpfX1yZXR1cm4gdGhpcy5fb3JpZ2luTmFtZXN9U2V0SW5pdGlhbE9yaWdpbk5hbWUodCl7dGhpcy5fb3JpZ2luTmFtZXM9W3RdfVNldEluaXRpYWxPcmlnaW5OYW1lcyh0KXt0aGlzLl9vcmlnaW5OYW1lcz1udWxsPT10P251bGw6dC5zbGljZSgpfWdldCBtYXhJdGVtKCl7bGV0IHQ9e0tleTpmLk51bGwsVmFsdWU6MH07Zm9yKGxldFtlLG5db2YgdGhpcyl7bGV0IGk9Zi5mcm9tU2VyaWFsaXplZEtleShlKTsodC5LZXkuaXNOdWxsfHxuPnQuVmFsdWUpJiYodD17S2V5OmksVmFsdWU6bn0pfXJldHVybiB0fWdldCBtaW5JdGVtKCl7bGV0IHQ9e0tleTpmLk51bGwsVmFsdWU6MH07Zm9yKGxldFtlLG5db2YgdGhpcyl7bGV0IGk9Zi5mcm9tU2VyaWFsaXplZEtleShlKTsodC5LZXkuaXNOdWxsfHxuPHQuVmFsdWUpJiYodD17S2V5OmksVmFsdWU6bn0pfXJldHVybiB0fWdldCBpbnZlcnNlKCl7bGV0IHQ9bmV3IGc7aWYobnVsbCE9dGhpcy5vcmlnaW5zKWZvcihsZXQgZSBvZiB0aGlzLm9yaWdpbnMpZm9yKGxldFtuLGldb2YgZS5pdGVtcyl7bGV0IGU9Zi5mcm9tU2VyaWFsaXplZEtleShuKTt0aGlzLkNvbnRhaW5zS2V5KGUpfHx0LkFkZChlLGkpfXJldHVybiB0fWdldCBhbGwoKXtsZXQgdD1uZXcgZztpZihudWxsIT10aGlzLm9yaWdpbnMpZm9yKGxldCBlIG9mIHRoaXMub3JpZ2lucylmb3IobGV0W24saV1vZiBlLml0ZW1zKXtsZXQgZT1mLmZyb21TZXJpYWxpemVkS2V5KG4pO3Quc2V0KGUuc2VyaWFsaXplZCgpLGkpfXJldHVybiB0fVVuaW9uKHQpe2xldCBlPW5ldyBnKHRoaXMpO2ZvcihsZXRbbixpXW9mIHQpZS5zZXQobixpKTtyZXR1cm4gZX1JbnRlcnNlY3QodCl7bGV0IGU9bmV3IGc7Zm9yKGxldFtuLGldb2YgdGhpcyl0LmhhcyhuKSYmZS5zZXQobixpKTtyZXR1cm4gZX1XaXRob3V0KHQpe2xldCBlPW5ldyBnKHRoaXMpO2ZvcihsZXRbbl1vZiB0KWUuZGVsZXRlKG4pO3JldHVybiBlfUNvbnRhaW5zKHQpe2ZvcihsZXRbZV1vZiB0KWlmKCF0aGlzLmhhcyhlKSlyZXR1cm4hMTtyZXR1cm4hMH1HcmVhdGVyVGhhbih0KXtyZXR1cm4gMCE9dGhpcy5Db3VudCYmKDA9PXQuQ291bnR8fHRoaXMubWluSXRlbS5WYWx1ZT50Lm1heEl0ZW0uVmFsdWUpfUdyZWF0ZXJUaGFuT3JFcXVhbHModCl7cmV0dXJuIDAhPXRoaXMuQ291bnQmJigwPT10LkNvdW50fHx0aGlzLm1pbkl0ZW0uVmFsdWU+PXQubWluSXRlbS5WYWx1ZSYmdGhpcy5tYXhJdGVtLlZhbHVlPj10Lm1heEl0ZW0uVmFsdWUpfUxlc3NUaGFuKHQpe3JldHVybiAwIT10LkNvdW50JiYoMD09dGhpcy5Db3VudHx8dGhpcy5tYXhJdGVtLlZhbHVlPHQubWluSXRlbS5WYWx1ZSl9TGVzc1RoYW5PckVxdWFscyh0KXtyZXR1cm4gMCE9dC5Db3VudCYmKDA9PXRoaXMuQ291bnR8fHRoaXMubWF4SXRlbS5WYWx1ZTw9dC5tYXhJdGVtLlZhbHVlJiZ0aGlzLm1pbkl0ZW0uVmFsdWU8PXQubWluSXRlbS5WYWx1ZSl9TWF4QXNMaXN0KCl7cmV0dXJuIHRoaXMuQ291bnQ+MD9uZXcgZyh0aGlzLm1heEl0ZW0pOm5ldyBnfU1pbkFzTGlzdCgpe3JldHVybiB0aGlzLkNvdW50PjA/bmV3IGcodGhpcy5taW5JdGVtKTpuZXcgZ31MaXN0V2l0aFN1YlJhbmdlKHQsZSl7aWYoMD09dGhpcy5Db3VudClyZXR1cm4gbmV3IGc7bGV0IG49dGhpcy5vcmRlcmVkSXRlbXMsaT0wLHI9TnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7TnVtYmVyLmlzSW50ZWdlcih0KT9pPXQ6dCBpbnN0YW5jZW9mIGcmJnQuQ291bnQ+MCYmKGk9dC5taW5JdGVtLlZhbHVlKSxOdW1iZXIuaXNJbnRlZ2VyKGUpP3I9ZTp0IGluc3RhbmNlb2YgZyYmdC5Db3VudD4wJiYocj1lLm1heEl0ZW0uVmFsdWUpO2xldCBhPW5ldyBnO2EuU2V0SW5pdGlhbE9yaWdpbk5hbWVzKHRoaXMub3JpZ2luTmFtZXMpO2ZvcihsZXQgdCBvZiBuKXQuVmFsdWU+PWkmJnQuVmFsdWU8PXImJmEuQWRkKHQuS2V5LHQuVmFsdWUpO3JldHVybiBhfUVxdWFscyh0KXtpZih0IGluc3RhbmNlb2YgZz09ITEpcmV0dXJuITE7aWYodC5Db3VudCE9dGhpcy5Db3VudClyZXR1cm4hMTtmb3IobGV0W2Vdb2YgdGhpcylpZighdC5oYXMoZSkpcmV0dXJuITE7cmV0dXJuITB9Z2V0IG9yZGVyZWRJdGVtcygpe2xldCB0PW5ldyBBcnJheTtmb3IobGV0W2Usbl1vZiB0aGlzKXtsZXQgaT1mLmZyb21TZXJpYWxpemVkS2V5KGUpO3QucHVzaCh7S2V5OmksVmFsdWU6bn0pfXJldHVybiB0LnNvcnQoKHQsZSk9Pm51bGw9PT10LktleS5vcmlnaW5OYW1lP2QoXCJ4LktleS5vcmlnaW5OYW1lXCIpOm51bGw9PT1lLktleS5vcmlnaW5OYW1lP2QoXCJ5LktleS5vcmlnaW5OYW1lXCIpOnQuVmFsdWU9PWUuVmFsdWU/dC5LZXkub3JpZ2luTmFtZS5sb2NhbGVDb21wYXJlKGUuS2V5Lm9yaWdpbk5hbWUpOnQuVmFsdWU8ZS5WYWx1ZT8tMTp0LlZhbHVlPmUuVmFsdWU/MTowKSx0fXRvU3RyaW5nKCl7bGV0IHQ9dGhpcy5vcmRlcmVkSXRlbXMsZT1uZXcgbTtmb3IobGV0IG49MDtuPHQubGVuZ3RoO24rKyl7bj4wJiZlLkFwcGVuZChcIiwgXCIpO2xldCBpPXRbbl0uS2V5O2lmKG51bGw9PT1pLml0ZW1OYW1lKXJldHVybiBkKFwiaXRlbS5pdGVtTmFtZVwiKTtlLkFwcGVuZChpLml0ZW1OYW1lKX1yZXR1cm4gZS50b1N0cmluZygpfXZhbHVlT2YoKXtyZXR1cm4gTmFOfX1jbGFzcyBTIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IodCl7c3VwZXIodCksdGhpcy51c2VFbmRMaW5lTnVtYmVyPSExLHRoaXMubWVzc2FnZT10LHRoaXMubmFtZT1cIlN0b3J5RXhjZXB0aW9uXCJ9fWZ1bmN0aW9uIHkodCxlLG4pe2lmKG51bGw9PT10KXJldHVybntyZXN1bHQ6bixleGlzdHM6ITF9O2xldCBpPXQuZ2V0KGUpO3JldHVybiB2b2lkIDA9PT1pP3tyZXN1bHQ6bixleGlzdHM6ITF9OntyZXN1bHQ6aSxleGlzdHM6ITB9fWNsYXNzIEMgZXh0ZW5kcyBwe3N0YXRpYyBDcmVhdGUodCxuKXtpZihuKXtpZihuPT09aS5JbnQmJk51bWJlci5pc0ludGVnZXIoTnVtYmVyKHQpKSlyZXR1cm4gbmV3IGIoTnVtYmVyKHQpKTtpZihuPT09aS5GbG9hdCYmIWlzTmFOKHQpKXJldHVybiBuZXcgXyhOdW1iZXIodCkpfWlmKFwiYm9vbGVhblwiPT10eXBlb2YgdCl7dD0hIXQ/MTowfXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P25ldyBUKFN0cmluZyh0KSk6TnVtYmVyLmlzSW50ZWdlcihOdW1iZXIodCkpP25ldyBiKE51bWJlcih0KSk6aXNOYU4odCk/dCBpbnN0YW5jZW9mIGU/bmV3IFAocyh0LGUpKTp0IGluc3RhbmNlb2YgZz9uZXcgTyhzKHQsZykpOm51bGw6bmV3IF8oTnVtYmVyKHQpKX1Db3B5KCl7cmV0dXJuIHMoQy5DcmVhdGUodGhpcykscCl9QmFkQ2FzdEV4Y2VwdGlvbih0KXtyZXR1cm4gbmV3IFMoXCJDYW4ndCBjYXN0IFwiK3RoaXMudmFsdWVPYmplY3QrXCIgZnJvbSBcIit0aGlzLnZhbHVlVHlwZStcIiB0byBcIit0KX19Y2xhc3MgdiBleHRlbmRzIEN7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLnZhbHVlPXR9Z2V0IHZhbHVlT2JqZWN0KCl7cmV0dXJuIHRoaXMudmFsdWV9dG9TdHJpbmcoKXtyZXR1cm4gbnVsbD09PXRoaXMudmFsdWU/ZChcIlZhbHVlLnZhbHVlXCIpOnRoaXMudmFsdWUudG9TdHJpbmcoKX19Y2xhc3MgYiBleHRlbmRzIHZ7Y29uc3RydWN0b3IodCl7c3VwZXIodHx8MCl9Z2V0IGlzVHJ1dGh5KCl7cmV0dXJuIDAhPXRoaXMudmFsdWV9Z2V0IHZhbHVlVHlwZSgpe3JldHVybiBpLkludH1DYXN0KHQpe2lmKG51bGw9PT10aGlzLnZhbHVlKXJldHVybiBkKFwiVmFsdWUudmFsdWVcIik7aWYodD09dGhpcy52YWx1ZVR5cGUpcmV0dXJuIHRoaXM7aWYodD09aS5GbG9hdClyZXR1cm4gbmV3IF8odGhpcy52YWx1ZSk7aWYodD09aS5TdHJpbmcpcmV0dXJuIG5ldyBUKFwiXCIrdGhpcy52YWx1ZSk7dGhyb3cgdGhpcy5CYWRDYXN0RXhjZXB0aW9uKHQpfX1jbGFzcyBfIGV4dGVuZHMgdntjb25zdHJ1Y3Rvcih0KXtzdXBlcih0fHwwKX1nZXQgaXNUcnV0aHkoKXtyZXR1cm4gMCE9dGhpcy52YWx1ZX1nZXQgdmFsdWVUeXBlKCl7cmV0dXJuIGkuRmxvYXR9Q2FzdCh0KXtpZihudWxsPT09dGhpcy52YWx1ZSlyZXR1cm4gZChcIlZhbHVlLnZhbHVlXCIpO2lmKHQ9PXRoaXMudmFsdWVUeXBlKXJldHVybiB0aGlzO2lmKHQ9PWkuSW50KXJldHVybiBuZXcgYih0aGlzLnZhbHVlKTtpZih0PT1pLlN0cmluZylyZXR1cm4gbmV3IFQoXCJcIit0aGlzLnZhbHVlKTt0aHJvdyB0aGlzLkJhZENhc3RFeGNlcHRpb24odCl9fWNsYXNzIFQgZXh0ZW5kcyB2e2NvbnN0cnVjdG9yKHQpe2lmKHN1cGVyKHR8fFwiXCIpLHRoaXMuX2lzTmV3bGluZT1cIlxcblwiPT10aGlzLnZhbHVlLHRoaXMuX2lzSW5saW5lV2hpdGVzcGFjZT0hMCxudWxsPT09dGhpcy52YWx1ZSlyZXR1cm4gZChcIlZhbHVlLnZhbHVlXCIpO3RoaXMudmFsdWUubGVuZ3RoPjAmJnRoaXMudmFsdWUuc3BsaXQoXCJcIikuZXZlcnkodD0+XCIgXCI9PXR8fFwiXFx0XCI9PXR8fCh0aGlzLl9pc0lubGluZVdoaXRlc3BhY2U9ITEsITEpKX1nZXQgdmFsdWVUeXBlKCl7cmV0dXJuIGkuU3RyaW5nfWdldCBpc1RydXRoeSgpe3JldHVybiBudWxsPT09dGhpcy52YWx1ZT9kKFwiVmFsdWUudmFsdWVcIik6dGhpcy52YWx1ZS5sZW5ndGg+MH1nZXQgaXNOZXdsaW5lKCl7cmV0dXJuIHRoaXMuX2lzTmV3bGluZX1nZXQgaXNJbmxpbmVXaGl0ZXNwYWNlKCl7cmV0dXJuIHRoaXMuX2lzSW5saW5lV2hpdGVzcGFjZX1nZXQgaXNOb25XaGl0ZXNwYWNlKCl7cmV0dXJuIXRoaXMuaXNOZXdsaW5lJiYhdGhpcy5pc0lubGluZVdoaXRlc3BhY2V9Q2FzdCh0KXtpZih0PT10aGlzLnZhbHVlVHlwZSlyZXR1cm4gdGhpcztpZih0PT1pLkludCl7bGV0IGU9ZnVuY3Rpb24odCxlPTApe2xldCBuPXBhcnNlSW50KHQpO3JldHVybiBOdW1iZXIuaXNOYU4obik/e3Jlc3VsdDplLGV4aXN0czohMX06e3Jlc3VsdDpuLGV4aXN0czohMH19KHRoaXMudmFsdWUpO2lmKGUuZXhpc3RzKXJldHVybiBuZXcgYihlLnJlc3VsdCk7dGhyb3cgdGhpcy5CYWRDYXN0RXhjZXB0aW9uKHQpfWlmKHQ9PWkuRmxvYXQpe2xldCBlPWZ1bmN0aW9uKHQsZT0wKXtsZXQgbj1wYXJzZUZsb2F0KHQpO3JldHVybiBOdW1iZXIuaXNOYU4obik/e3Jlc3VsdDplLGV4aXN0czohMX06e3Jlc3VsdDpuLGV4aXN0czohMH19KHRoaXMudmFsdWUpO2lmKGUuZXhpc3RzKXJldHVybiBuZXcgXyhlLnJlc3VsdCk7dGhyb3cgdGhpcy5CYWRDYXN0RXhjZXB0aW9uKHQpfXRocm93IHRoaXMuQmFkQ2FzdEV4Y2VwdGlvbih0KX19Y2xhc3MgUCBleHRlbmRzIHZ7Y29uc3RydWN0b3IodCl7c3VwZXIodCl9Z2V0IHZhbHVlVHlwZSgpe3JldHVybiBpLkRpdmVydFRhcmdldH1nZXQgdGFyZ2V0UGF0aCgpe3JldHVybiBudWxsPT09dGhpcy52YWx1ZT9kKFwiVmFsdWUudmFsdWVcIik6dGhpcy52YWx1ZX1zZXQgdGFyZ2V0UGF0aCh0KXt0aGlzLnZhbHVlPXR9Z2V0IGlzVHJ1dGh5KCl7dGhyb3cgbmV3IEVycm9yKFwiU2hvdWxkbid0IGJlIGNoZWNraW5nIHRoZSB0cnV0aGluZXNzIG9mIGEgZGl2ZXJ0IHRhcmdldFwiKX1DYXN0KHQpe2lmKHQ9PXRoaXMudmFsdWVUeXBlKXJldHVybiB0aGlzO3Rocm93IHRoaXMuQmFkQ2FzdEV4Y2VwdGlvbih0KX10b1N0cmluZygpe3JldHVyblwiRGl2ZXJ0VGFyZ2V0VmFsdWUoXCIrdGhpcy50YXJnZXRQYXRoK1wiKVwifX1jbGFzcyB3IGV4dGVuZHMgdntjb25zdHJ1Y3Rvcih0LGU9LTEpe3N1cGVyKHQpLHRoaXMuX2NvbnRleHRJbmRleD1lfWdldCBjb250ZXh0SW5kZXgoKXtyZXR1cm4gdGhpcy5fY29udGV4dEluZGV4fXNldCBjb250ZXh0SW5kZXgodCl7dGhpcy5fY29udGV4dEluZGV4PXR9Z2V0IHZhcmlhYmxlTmFtZSgpe3JldHVybiBudWxsPT09dGhpcy52YWx1ZT9kKFwiVmFsdWUudmFsdWVcIik6dGhpcy52YWx1ZX1zZXQgdmFyaWFibGVOYW1lKHQpe3RoaXMudmFsdWU9dH1nZXQgdmFsdWVUeXBlKCl7cmV0dXJuIGkuVmFyaWFibGVQb2ludGVyfWdldCBpc1RydXRoeSgpe3Rocm93IG5ldyBFcnJvcihcIlNob3VsZG4ndCBiZSBjaGVja2luZyB0aGUgdHJ1dGhpbmVzcyBvZiBhIHZhcmlhYmxlIHBvaW50ZXJcIil9Q2FzdCh0KXtpZih0PT10aGlzLnZhbHVlVHlwZSlyZXR1cm4gdGhpczt0aHJvdyB0aGlzLkJhZENhc3RFeGNlcHRpb24odCl9dG9TdHJpbmcoKXtyZXR1cm5cIlZhcmlhYmxlUG9pbnRlclZhbHVlKFwiK3RoaXMudmFyaWFibGVOYW1lK1wiKVwifUNvcHkoKXtyZXR1cm4gbmV3IHcodGhpcy52YXJpYWJsZU5hbWUsdGhpcy5jb250ZXh0SW5kZXgpfX1jbGFzcyBPIGV4dGVuZHMgdntnZXQgaXNUcnV0aHkoKXtyZXR1cm4gbnVsbD09PXRoaXMudmFsdWU/ZChcInRoaXMudmFsdWVcIik6dGhpcy52YWx1ZS5Db3VudD4wfWdldCB2YWx1ZVR5cGUoKXtyZXR1cm4gaS5MaXN0fUNhc3QodCl7aWYobnVsbD09PXRoaXMudmFsdWUpcmV0dXJuIGQoXCJWYWx1ZS52YWx1ZVwiKTtpZih0PT1pLkludCl7bGV0IHQ9dGhpcy52YWx1ZS5tYXhJdGVtO3JldHVybiB0LktleS5pc051bGw/bmV3IGIoMCk6bmV3IGIodC5WYWx1ZSl9aWYodD09aS5GbG9hdCl7bGV0IHQ9dGhpcy52YWx1ZS5tYXhJdGVtO3JldHVybiB0LktleS5pc051bGw/bmV3IF8oMCk6bmV3IF8odC5WYWx1ZSl9aWYodD09aS5TdHJpbmcpe2xldCB0PXRoaXMudmFsdWUubWF4SXRlbTtyZXR1cm4gdC5LZXkuaXNOdWxsP25ldyBUKFwiXCIpOm5ldyBUKHQuS2V5LnRvU3RyaW5nKCkpfWlmKHQ9PXRoaXMudmFsdWVUeXBlKXJldHVybiB0aGlzO3Rocm93IHRoaXMuQmFkQ2FzdEV4Y2VwdGlvbih0KX1jb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKG51bGwpLHR8fGU/dCBpbnN0YW5jZW9mIGc/dGhpcy52YWx1ZT1uZXcgZyh0KTp0IGluc3RhbmNlb2YgZiYmXCJudW1iZXJcIj09dHlwZW9mIGUmJih0aGlzLnZhbHVlPW5ldyBnKHtLZXk6dCxWYWx1ZTplfSkpOnRoaXMudmFsdWU9bmV3IGd9c3RhdGljIFJldGFpbkxpc3RPcmlnaW5zRm9yQXNzaWdubWVudCh0LGUpe2xldCBuPWEodCxPKSxpPWEoZSxPKTtyZXR1cm4gaSYmbnVsbD09PWkudmFsdWU/ZChcIm5ld0xpc3QudmFsdWVcIik6biYmbnVsbD09PW4udmFsdWU/ZChcIm9sZExpc3QudmFsdWVcIik6dm9pZChuJiZpJiYwPT1pLnZhbHVlLkNvdW50JiZpLnZhbHVlLlNldEluaXRpYWxPcmlnaW5OYW1lcyhuLnZhbHVlLm9yaWdpbk5hbWVzKSl9fSFmdW5jdGlvbih0KXt0W3QuSW50PTBdPVwiSW50XCIsdFt0LkZsb2F0PTFdPVwiRmxvYXRcIix0W3QuTGlzdD0yXT1cIkxpc3RcIix0W3QuU3RyaW5nPTNdPVwiU3RyaW5nXCIsdFt0LkRpdmVydFRhcmdldD00XT1cIkRpdmVydFRhcmdldFwiLHRbdC5WYXJpYWJsZVBvaW50ZXI9NV09XCJWYXJpYWJsZVBvaW50ZXJcIn0oaXx8KGk9e30pKTtjbGFzcyBFe2NvbnN0cnVjdG9yKCl7dGhpcy5vYmo9bnVsbCx0aGlzLmFwcHJveGltYXRlPSExfWdldCBjb3JyZWN0T2JqKCl7cmV0dXJuIHRoaXMuYXBwcm94aW1hdGU/bnVsbDp0aGlzLm9ian1nZXQgY29udGFpbmVyKCl7cmV0dXJuIHRoaXMub2JqIGluc3RhbmNlb2YgTj90aGlzLm9iajpudWxsfWNvcHkoKXtsZXQgdD1uZXcgRTtyZXR1cm4gdC5vYmo9dGhpcy5vYmosdC5hcHByb3hpbWF0ZT10aGlzLmFwcHJveGltYXRlLHR9fWNsYXNzIE4gZXh0ZW5kcyBwe2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLm5hbWU9XCJcIix0aGlzLl9jb250ZW50PVtdLHRoaXMubmFtZWRDb250ZW50PW5ldyBNYXAsdGhpcy52aXNpdHNTaG91bGRCZUNvdW50ZWQ9ITEsdGhpcy50dXJuSW5kZXhTaG91bGRCZUNvdW50ZWQ9ITEsdGhpcy5jb3VudGluZ0F0U3RhcnRPbmx5PSExLHRoaXMuX3BhdGhUb0ZpcnN0TGVhZkNvbnRlbnQ9bnVsbH1nZXQgaGFzVmFsaWROYW1lKCl7cmV0dXJuIG51bGwhPXRoaXMubmFtZSYmdGhpcy5uYW1lLmxlbmd0aD4wfWdldCBjb250ZW50KCl7cmV0dXJuIHRoaXMuX2NvbnRlbnR9c2V0IGNvbnRlbnQodCl7dGhpcy5BZGRDb250ZW50KHQpfWdldCBuYW1lZE9ubHlDb250ZW50KCl7bGV0IHQ9bmV3IE1hcDtmb3IobGV0W2Usbl1vZiB0aGlzLm5hbWVkQ29udGVudCl7bGV0IGk9cyhuLHApO3Quc2V0KGUsaSl9Zm9yKGxldCBlIG9mIHRoaXMuY29udGVudCl7bGV0IG49bChlKTtudWxsIT1uJiZuLmhhc1ZhbGlkTmFtZSYmdC5kZWxldGUobi5uYW1lKX1yZXR1cm4gMD09dC5zaXplJiYodD1udWxsKSx0fXNldCBuYW1lZE9ubHlDb250ZW50KHQpe2xldCBlPXRoaXMubmFtZWRPbmx5Q29udGVudDtpZihudWxsIT1lKWZvcihsZXRbdF1vZiBlKXRoaXMubmFtZWRDb250ZW50LmRlbGV0ZSh0KTtpZihudWxsIT10KWZvcihsZXRbLGVdb2YgdCl7bGV0IHQ9bChlKTtudWxsIT10JiZ0aGlzLkFkZFRvTmFtZWRDb250ZW50T25seSh0KX19Z2V0IGNvdW50RmxhZ3MoKXtsZXQgdD0wO3JldHVybiB0aGlzLnZpc2l0c1Nob3VsZEJlQ291bnRlZCYmKHR8PU4uQ291bnRGbGFncy5WaXNpdHMpLHRoaXMudHVybkluZGV4U2hvdWxkQmVDb3VudGVkJiYodHw9Ti5Db3VudEZsYWdzLlR1cm5zKSx0aGlzLmNvdW50aW5nQXRTdGFydE9ubHkmJih0fD1OLkNvdW50RmxhZ3MuQ291bnRTdGFydE9ubHkpLHQ9PU4uQ291bnRGbGFncy5Db3VudFN0YXJ0T25seSYmKHQ9MCksdH1zZXQgY291bnRGbGFncyh0KXtsZXQgZT10OyhlJk4uQ291bnRGbGFncy5WaXNpdHMpPjAmJih0aGlzLnZpc2l0c1Nob3VsZEJlQ291bnRlZD0hMCksKGUmTi5Db3VudEZsYWdzLlR1cm5zKT4wJiYodGhpcy50dXJuSW5kZXhTaG91bGRCZUNvdW50ZWQ9ITApLChlJk4uQ291bnRGbGFncy5Db3VudFN0YXJ0T25seSk+MCYmKHRoaXMuY291bnRpbmdBdFN0YXJ0T25seT0hMCl9Z2V0IHBhdGhUb0ZpcnN0TGVhZkNvbnRlbnQoKXtyZXR1cm4gbnVsbD09dGhpcy5fcGF0aFRvRmlyc3RMZWFmQ29udGVudCYmKHRoaXMuX3BhdGhUb0ZpcnN0TGVhZkNvbnRlbnQ9dGhpcy5wYXRoLlBhdGhCeUFwcGVuZGluZ1BhdGgodGhpcy5pbnRlcm5hbFBhdGhUb0ZpcnN0TGVhZkNvbnRlbnQpKSx0aGlzLl9wYXRoVG9GaXJzdExlYWZDb250ZW50fWdldCBpbnRlcm5hbFBhdGhUb0ZpcnN0TGVhZkNvbnRlbnQoKXtsZXQgdD1bXSxuPXRoaXM7Zm9yKDtuIGluc3RhbmNlb2YgTjspbi5jb250ZW50Lmxlbmd0aD4wJiYodC5wdXNoKG5ldyBlLkNvbXBvbmVudCgwKSksbj1uLmNvbnRlbnRbMF0pO3JldHVybiBuZXcgZSh0KX1BZGRDb250ZW50KHQpe2lmKHQgaW5zdGFuY2VvZiBBcnJheSl7bGV0IGU9dDtmb3IobGV0IHQgb2YgZSl0aGlzLkFkZENvbnRlbnQodCl9ZWxzZXtsZXQgZT10O2lmKHRoaXMuX2NvbnRlbnQucHVzaChlKSxlLnBhcmVudCl0aHJvdyBuZXcgRXJyb3IoXCJjb250ZW50IGlzIGFscmVhZHkgaW4gXCIrZS5wYXJlbnQpO2UucGFyZW50PXRoaXMsdGhpcy5UcnlBZGROYW1lZENvbnRlbnQoZSl9fVRyeUFkZE5hbWVkQ29udGVudCh0KXtsZXQgZT1sKHQpO251bGwhPWUmJmUuaGFzVmFsaWROYW1lJiZ0aGlzLkFkZFRvTmFtZWRDb250ZW50T25seShlKX1BZGRUb05hbWVkQ29udGVudE9ubHkodCl7bi5Bc3NlcnRUeXBlKHQscCxcIkNhbiBvbmx5IGFkZCBSdW50aW1lLk9iamVjdHMgdG8gYSBSdW50aW1lLkNvbnRhaW5lclwiKSxzKHQscCkucGFyZW50PXRoaXMsdGhpcy5uYW1lZENvbnRlbnQuc2V0KHQubmFtZSx0KX1Db250ZW50QXRQYXRoKHQsZT0wLG49LTEpey0xPT1uJiYobj10Lmxlbmd0aCk7bGV0IGk9bmV3IEU7aS5hcHByb3hpbWF0ZT0hMTtsZXQgcj10aGlzLHM9dGhpcztmb3IobGV0IGw9ZTtsPG47KytsKXtsZXQgZT10LkdldENvbXBvbmVudChsKTtpZihudWxsPT1yKXtpLmFwcHJveGltYXRlPSEwO2JyZWFrfWxldCBuPXIuQ29udGVudFdpdGhQYXRoQ29tcG9uZW50KGUpO2lmKG51bGw9PW4pe2kuYXBwcm94aW1hdGU9ITA7YnJlYWt9cz1uLHI9YShuLE4pfXJldHVybiBpLm9iaj1zLGl9SW5zZXJ0Q29udGVudCh0LGUpe2lmKHRoaXMuY29udGVudFtlXT10LHQucGFyZW50KXRocm93IG5ldyBFcnJvcihcImNvbnRlbnQgaXMgYWxyZWFkeSBpbiBcIit0LnBhcmVudCk7dC5wYXJlbnQ9dGhpcyx0aGlzLlRyeUFkZE5hbWVkQ29udGVudCh0KX1BZGRDb250ZW50c09mQ29udGFpbmVyKHQpe3RoaXMuY29udGVudD10aGlzLmNvbnRlbnQuY29uY2F0KHQuY29udGVudCk7Zm9yKGxldCBlIG9mIHQuY29udGVudCllLnBhcmVudD10aGlzLHRoaXMuVHJ5QWRkTmFtZWRDb250ZW50KGUpfUNvbnRlbnRXaXRoUGF0aENvbXBvbmVudCh0KXtpZih0LmlzSW5kZXgpcmV0dXJuIHQuaW5kZXg+PTAmJnQuaW5kZXg8dGhpcy5jb250ZW50Lmxlbmd0aD90aGlzLmNvbnRlbnRbdC5pbmRleF06bnVsbDtpZih0LmlzUGFyZW50KXJldHVybiB0aGlzLnBhcmVudDt7aWYobnVsbD09PXQubmFtZSlyZXR1cm4gZChcImNvbXBvbmVudC5uYW1lXCIpO2xldCBlPXkodGhpcy5uYW1lZENvbnRlbnQsdC5uYW1lLG51bGwpO3JldHVybiBlLmV4aXN0cz9zKGUucmVzdWx0LHApOm51bGx9fUJ1aWxkU3RyaW5nT2ZIaWVyYXJjaHkoKXtsZXQgdDtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiB0PW5ldyBtLHRoaXMuQnVpbGRTdHJpbmdPZkhpZXJhcmNoeSh0LDAsbnVsbCksdC50b1N0cmluZygpO3Q9YXJndW1lbnRzWzBdO2xldCBlPWFyZ3VtZW50c1sxXSxpPWFyZ3VtZW50c1syXTtmdW5jdGlvbiByKCl7Zm9yKGxldCBuPTA7bjw0KmU7KytuKXQuQXBwZW5kKFwiIFwiKX1yKCksdC5BcHBlbmQoXCJbXCIpLHRoaXMuaGFzVmFsaWROYW1lJiZ0LkFwcGVuZEZvcm1hdChcIiAoezB9KVwiLHRoaXMubmFtZSksdGhpcz09aSYmdC5BcHBlbmQoXCIgIDwtLS1cIiksdC5BcHBlbmRMaW5lKCksZSsrO2ZvcihsZXQgbj0wO248dGhpcy5jb250ZW50Lmxlbmd0aDsrK24pe2xldCBhPXRoaXMuY29udGVudFtuXTtpZihhIGluc3RhbmNlb2YgTil7YS5CdWlsZFN0cmluZ09mSGllcmFyY2h5KHQsZSxpKX1lbHNlIHIoKSxhIGluc3RhbmNlb2YgVD8odC5BcHBlbmQoJ1wiJyksdC5BcHBlbmQoYS50b1N0cmluZygpLnJlcGxhY2UoXCJcXG5cIixcIlxcXFxuXCIpKSx0LkFwcGVuZCgnXCInKSk6dC5BcHBlbmQoYS50b1N0cmluZygpKTtuIT10aGlzLmNvbnRlbnQubGVuZ3RoLTEmJnQuQXBwZW5kKFwiLFwiKSxhIGluc3RhbmNlb2YgTnx8YSE9aXx8dC5BcHBlbmQoXCIgIDwtLS1cIiksdC5BcHBlbmRMaW5lKCl9bGV0IGE9bmV3IE1hcDtmb3IobGV0W3QsZV1vZiB0aGlzLm5hbWVkQ29udGVudCl0aGlzLmNvbnRlbnQuaW5kZXhPZihzKGUscCkpPj0wfHxhLnNldCh0LGUpO2lmKGEuc2l6ZT4wKXtyKCksdC5BcHBlbmRMaW5lKFwiLS0gbmFtZWQ6IC0tXCIpO2ZvcihsZXRbLHJdb2YgYSl7bi5Bc3NlcnRUeXBlKHIsTixcIkNhbiBvbmx5IHByaW50IG91dCBuYW1lZCBDb250YWluZXJzXCIpLHIuQnVpbGRTdHJpbmdPZkhpZXJhcmNoeSh0LGUsaSksdC5BcHBlbmRMaW5lKCl9fWUtLSxyKCksdC5BcHBlbmQoXCJdXCIpfX0hZnVuY3Rpb24odCl7bGV0IGU7IWZ1bmN0aW9uKHQpe3RbdC5WaXNpdHM9MV09XCJWaXNpdHNcIix0W3QuVHVybnM9Ml09XCJUdXJuc1wiLHRbdC5Db3VudFN0YXJ0T25seT00XT1cIkNvdW50U3RhcnRPbmx5XCJ9KGU9dC5Db3VudEZsYWdzfHwodC5Db3VudEZsYWdzPXt9KSl9KE58fChOPXt9KSk7Y2xhc3MgeCBleHRlbmRzIHB7dG9TdHJpbmcoKXtyZXR1cm5cIkdsdWVcIn19Y2xhc3MgQSBleHRlbmRzIHB7Y29uc3RydWN0b3IodD1BLkNvbW1hbmRUeXBlLk5vdFNldCl7c3VwZXIoKSx0aGlzLl9jb21tYW5kVHlwZT10fWdldCBjb21tYW5kVHlwZSgpe3JldHVybiB0aGlzLl9jb21tYW5kVHlwZX1Db3B5KCl7cmV0dXJuIG5ldyBBKHRoaXMuY29tbWFuZFR5cGUpfXN0YXRpYyBFdmFsU3RhcnQoKXtyZXR1cm4gbmV3IEEoQS5Db21tYW5kVHlwZS5FdmFsU3RhcnQpfXN0YXRpYyBFdmFsT3V0cHV0KCl7cmV0dXJuIG5ldyBBKEEuQ29tbWFuZFR5cGUuRXZhbE91dHB1dCl9c3RhdGljIEV2YWxFbmQoKXtyZXR1cm4gbmV3IEEoQS5Db21tYW5kVHlwZS5FdmFsRW5kKX1zdGF0aWMgRHVwbGljYXRlKCl7cmV0dXJuIG5ldyBBKEEuQ29tbWFuZFR5cGUuRHVwbGljYXRlKX1zdGF0aWMgUG9wRXZhbHVhdGVkVmFsdWUoKXtyZXR1cm4gbmV3IEEoQS5Db21tYW5kVHlwZS5Qb3BFdmFsdWF0ZWRWYWx1ZSl9c3RhdGljIFBvcEZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBBKEEuQ29tbWFuZFR5cGUuUG9wRnVuY3Rpb24pfXN0YXRpYyBQb3BUdW5uZWwoKXtyZXR1cm4gbmV3IEEoQS5Db21tYW5kVHlwZS5Qb3BUdW5uZWwpfXN0YXRpYyBCZWdpblN0cmluZygpe3JldHVybiBuZXcgQShBLkNvbW1hbmRUeXBlLkJlZ2luU3RyaW5nKX1zdGF0aWMgRW5kU3RyaW5nKCl7cmV0dXJuIG5ldyBBKEEuQ29tbWFuZFR5cGUuRW5kU3RyaW5nKX1zdGF0aWMgTm9PcCgpe3JldHVybiBuZXcgQShBLkNvbW1hbmRUeXBlLk5vT3ApfXN0YXRpYyBDaG9pY2VDb3VudCgpe3JldHVybiBuZXcgQShBLkNvbW1hbmRUeXBlLkNob2ljZUNvdW50KX1zdGF0aWMgVHVybnMoKXtyZXR1cm4gbmV3IEEoQS5Db21tYW5kVHlwZS5UdXJucyl9c3RhdGljIFR1cm5zU2luY2UoKXtyZXR1cm4gbmV3IEEoQS5Db21tYW5kVHlwZS5UdXJuc1NpbmNlKX1zdGF0aWMgUmVhZENvdW50KCl7cmV0dXJuIG5ldyBBKEEuQ29tbWFuZFR5cGUuUmVhZENvdW50KX1zdGF0aWMgUmFuZG9tKCl7cmV0dXJuIG5ldyBBKEEuQ29tbWFuZFR5cGUuUmFuZG9tKX1zdGF0aWMgU2VlZFJhbmRvbSgpe3JldHVybiBuZXcgQShBLkNvbW1hbmRUeXBlLlNlZWRSYW5kb20pfXN0YXRpYyBWaXNpdEluZGV4KCl7cmV0dXJuIG5ldyBBKEEuQ29tbWFuZFR5cGUuVmlzaXRJbmRleCl9c3RhdGljIFNlcXVlbmNlU2h1ZmZsZUluZGV4KCl7cmV0dXJuIG5ldyBBKEEuQ29tbWFuZFR5cGUuU2VxdWVuY2VTaHVmZmxlSW5kZXgpfXN0YXRpYyBTdGFydFRocmVhZCgpe3JldHVybiBuZXcgQShBLkNvbW1hbmRUeXBlLlN0YXJ0VGhyZWFkKX1zdGF0aWMgRG9uZSgpe3JldHVybiBuZXcgQShBLkNvbW1hbmRUeXBlLkRvbmUpfXN0YXRpYyBFbmQoKXtyZXR1cm4gbmV3IEEoQS5Db21tYW5kVHlwZS5FbmQpfXN0YXRpYyBMaXN0RnJvbUludCgpe3JldHVybiBuZXcgQShBLkNvbW1hbmRUeXBlLkxpc3RGcm9tSW50KX1zdGF0aWMgTGlzdFJhbmdlKCl7cmV0dXJuIG5ldyBBKEEuQ29tbWFuZFR5cGUuTGlzdFJhbmdlKX1zdGF0aWMgTGlzdFJhbmRvbSgpe3JldHVybiBuZXcgQShBLkNvbW1hbmRUeXBlLkxpc3RSYW5kb20pfXRvU3RyaW5nKCl7cmV0dXJuIHRoaXMuY29tbWFuZFR5cGUudG9TdHJpbmcoKX19IWZ1bmN0aW9uKHQpe2xldCBlOyFmdW5jdGlvbih0KXt0W3QuTm90U2V0PS0xXT1cIk5vdFNldFwiLHRbdC5FdmFsU3RhcnQ9MF09XCJFdmFsU3RhcnRcIix0W3QuRXZhbE91dHB1dD0xXT1cIkV2YWxPdXRwdXRcIix0W3QuRXZhbEVuZD0yXT1cIkV2YWxFbmRcIix0W3QuRHVwbGljYXRlPTNdPVwiRHVwbGljYXRlXCIsdFt0LlBvcEV2YWx1YXRlZFZhbHVlPTRdPVwiUG9wRXZhbHVhdGVkVmFsdWVcIix0W3QuUG9wRnVuY3Rpb249NV09XCJQb3BGdW5jdGlvblwiLHRbdC5Qb3BUdW5uZWw9Nl09XCJQb3BUdW5uZWxcIix0W3QuQmVnaW5TdHJpbmc9N109XCJCZWdpblN0cmluZ1wiLHRbdC5FbmRTdHJpbmc9OF09XCJFbmRTdHJpbmdcIix0W3QuTm9PcD05XT1cIk5vT3BcIix0W3QuQ2hvaWNlQ291bnQ9MTBdPVwiQ2hvaWNlQ291bnRcIix0W3QuVHVybnM9MTFdPVwiVHVybnNcIix0W3QuVHVybnNTaW5jZT0xMl09XCJUdXJuc1NpbmNlXCIsdFt0LlJhbmRvbT0xM109XCJSYW5kb21cIix0W3QuU2VlZFJhbmRvbT0xNF09XCJTZWVkUmFuZG9tXCIsdFt0LlZpc2l0SW5kZXg9MTVdPVwiVmlzaXRJbmRleFwiLHRbdC5TZXF1ZW5jZVNodWZmbGVJbmRleD0xNl09XCJTZXF1ZW5jZVNodWZmbGVJbmRleFwiLHRbdC5TdGFydFRocmVhZD0xN109XCJTdGFydFRocmVhZFwiLHRbdC5Eb25lPTE4XT1cIkRvbmVcIix0W3QuRW5kPTE5XT1cIkVuZFwiLHRbdC5MaXN0RnJvbUludD0yMF09XCJMaXN0RnJvbUludFwiLHRbdC5MaXN0UmFuZ2U9MjFdPVwiTGlzdFJhbmdlXCIsdFt0Lkxpc3RSYW5kb209MjJdPVwiTGlzdFJhbmRvbVwiLHRbdC5SZWFkQ291bnQ9MjNdPVwiUmVhZENvdW50XCIsdFt0LlRPVEFMX1ZBTFVFUz0yNF09XCJUT1RBTF9WQUxVRVNcIn0oZT10LkNvbW1hbmRUeXBlfHwodC5Db21tYW5kVHlwZT17fSkpfShBfHwoQT17fSkpLGZ1bmN0aW9uKHQpe3RbdC5UdW5uZWw9MF09XCJUdW5uZWxcIix0W3QuRnVuY3Rpb249MV09XCJGdW5jdGlvblwiLHRbdC5GdW5jdGlvbkV2YWx1YXRpb25Gcm9tR2FtZT0yXT1cIkZ1bmN0aW9uRXZhbHVhdGlvbkZyb21HYW1lXCJ9KHJ8fChyPXt9KSk7Y2xhc3MgSXtjb25zdHJ1Y3Rvcigpe3RoaXMuY29udGFpbmVyPW51bGwsdGhpcy5pbmRleD0tMSwyPT09YXJndW1lbnRzLmxlbmd0aCYmKHRoaXMuY29udGFpbmVyPWFyZ3VtZW50c1swXSx0aGlzLmluZGV4PWFyZ3VtZW50c1sxXSl9UmVzb2x2ZSgpe3JldHVybiB0aGlzLmluZGV4PDA/dGhpcy5jb250YWluZXI6bnVsbD09dGhpcy5jb250YWluZXI/bnVsbDowPT10aGlzLmNvbnRhaW5lci5jb250ZW50Lmxlbmd0aD90aGlzLmNvbnRhaW5lcjp0aGlzLmluZGV4Pj10aGlzLmNvbnRhaW5lci5jb250ZW50Lmxlbmd0aD9udWxsOnRoaXMuY29udGFpbmVyLmNvbnRlbnRbdGhpcy5pbmRleF19Z2V0IGlzTnVsbCgpe3JldHVybiBudWxsPT10aGlzLmNvbnRhaW5lcn1nZXQgcGF0aCgpe3JldHVybiB0aGlzLmlzTnVsbD9udWxsOnRoaXMuaW5kZXg+PTA/dGhpcy5jb250YWluZXIucGF0aC5QYXRoQnlBcHBlbmRpbmdDb21wb25lbnQobmV3IGUuQ29tcG9uZW50KHRoaXMuaW5kZXgpKTp0aGlzLmNvbnRhaW5lci5wYXRofXRvU3RyaW5nKCl7cmV0dXJuIHRoaXMuY29udGFpbmVyP1wiSW5rIFBvaW50ZXIgLT4gXCIrdGhpcy5jb250YWluZXIucGF0aC50b1N0cmluZygpK1wiIC0tIGluZGV4IFwiK3RoaXMuaW5kZXg6XCJJbmsgUG9pbnRlciAobnVsbClcIn1jb3B5KCl7cmV0dXJuIG5ldyBJKHRoaXMuY29udGFpbmVyLHRoaXMuaW5kZXgpfXN0YXRpYyBTdGFydE9mKHQpe3JldHVybiBuZXcgSSh0LDApfXN0YXRpYyBnZXQgTnVsbCgpe3JldHVybiBuZXcgSShudWxsLC0xKX19Y2xhc3MgayBleHRlbmRzIHB7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLl90YXJnZXRQYXRoPW51bGwsdGhpcy5fdGFyZ2V0UG9pbnRlcj1JLk51bGwsdGhpcy52YXJpYWJsZURpdmVydE5hbWU9bnVsbCx0aGlzLnB1c2hlc1RvU3RhY2s9ITEsdGhpcy5zdGFja1B1c2hUeXBlPTAsdGhpcy5pc0V4dGVybmFsPSExLHRoaXMuZXh0ZXJuYWxBcmdzPTAsdGhpcy5pc0NvbmRpdGlvbmFsPSExLHRoaXMucHVzaGVzVG9TdGFjaz0hMSx2b2lkIDAhPT10JiYodGhpcy5wdXNoZXNUb1N0YWNrPSEwLHRoaXMuc3RhY2tQdXNoVHlwZT10KX1nZXQgdGFyZ2V0UGF0aCgpe2lmKG51bGwhPXRoaXMuX3RhcmdldFBhdGgmJnRoaXMuX3RhcmdldFBhdGguaXNSZWxhdGl2ZSl7bGV0IHQ9dGhpcy50YXJnZXRQb2ludGVyLlJlc29sdmUoKTt0JiYodGhpcy5fdGFyZ2V0UGF0aD10LnBhdGgpfXJldHVybiB0aGlzLl90YXJnZXRQYXRofXNldCB0YXJnZXRQYXRoKHQpe3RoaXMuX3RhcmdldFBhdGg9dCx0aGlzLl90YXJnZXRQb2ludGVyPUkuTnVsbH1nZXQgdGFyZ2V0UG9pbnRlcigpe2lmKHRoaXMuX3RhcmdldFBvaW50ZXIuaXNOdWxsKXtsZXQgdD10aGlzLlJlc29sdmVQYXRoKHRoaXMuX3RhcmdldFBhdGgpLm9iajtpZihudWxsPT09dGhpcy5fdGFyZ2V0UGF0aClyZXR1cm4gZChcInRoaXMuX3RhcmdldFBhdGhcIik7aWYobnVsbD09PXRoaXMuX3RhcmdldFBhdGgubGFzdENvbXBvbmVudClyZXR1cm4gZChcInRoaXMuX3RhcmdldFBhdGgubGFzdENvbXBvbmVudFwiKTtpZih0aGlzLl90YXJnZXRQYXRoLmxhc3RDb21wb25lbnQuaXNJbmRleCl7aWYobnVsbD09PXQpcmV0dXJuIGQoXCJ0YXJnZXRPYmpcIik7dGhpcy5fdGFyZ2V0UG9pbnRlci5jb250YWluZXI9dC5wYXJlbnQgaW5zdGFuY2VvZiBOP3QucGFyZW50Om51bGwsdGhpcy5fdGFyZ2V0UG9pbnRlci5pbmRleD10aGlzLl90YXJnZXRQYXRoLmxhc3RDb21wb25lbnQuaW5kZXh9ZWxzZSB0aGlzLl90YXJnZXRQb2ludGVyPUkuU3RhcnRPZih0IGluc3RhbmNlb2YgTj90Om51bGwpfXJldHVybiB0aGlzLl90YXJnZXRQb2ludGVyLmNvcHkoKX1nZXQgdGFyZ2V0UGF0aFN0cmluZygpe3JldHVybiBudWxsPT10aGlzLnRhcmdldFBhdGg/bnVsbDp0aGlzLkNvbXBhY3RQYXRoU3RyaW5nKHRoaXMudGFyZ2V0UGF0aCl9c2V0IHRhcmdldFBhdGhTdHJpbmcodCl7dGhpcy50YXJnZXRQYXRoPW51bGw9PXQ/bnVsbDpuZXcgZSh0KX1nZXQgaGFzVmFyaWFibGVUYXJnZXQoKXtyZXR1cm4gbnVsbCE9dGhpcy52YXJpYWJsZURpdmVydE5hbWV9RXF1YWxzKHQpe2xldCBlPXQ7cmV0dXJuIGUgaW5zdGFuY2VvZiBrJiZ0aGlzLmhhc1ZhcmlhYmxlVGFyZ2V0PT1lLmhhc1ZhcmlhYmxlVGFyZ2V0JiYodGhpcy5oYXNWYXJpYWJsZVRhcmdldD90aGlzLnZhcmlhYmxlRGl2ZXJ0TmFtZT09ZS52YXJpYWJsZURpdmVydE5hbWU6bnVsbD09PXRoaXMudGFyZ2V0UGF0aD9kKFwidGhpcy50YXJnZXRQYXRoXCIpOnRoaXMudGFyZ2V0UGF0aC5FcXVhbHMoZS50YXJnZXRQYXRoKSl9dG9TdHJpbmcoKXtpZih0aGlzLmhhc1ZhcmlhYmxlVGFyZ2V0KXJldHVyblwiRGl2ZXJ0KHZhcmlhYmxlOiBcIit0aGlzLnZhcmlhYmxlRGl2ZXJ0TmFtZStcIilcIjtpZihudWxsPT10aGlzLnRhcmdldFBhdGgpcmV0dXJuXCJEaXZlcnQobnVsbClcIjt7bGV0IHQ9bmV3IG0sZT10aGlzLnRhcmdldFBhdGgudG9TdHJpbmcoKTtyZXR1cm4gdC5BcHBlbmQoXCJEaXZlcnRcIiksdGhpcy5pc0NvbmRpdGlvbmFsJiZ0LkFwcGVuZChcIj9cIiksdGhpcy5wdXNoZXNUb1N0YWNrJiYodGhpcy5zdGFja1B1c2hUeXBlPT1yLkZ1bmN0aW9uP3QuQXBwZW5kKFwiIGZ1bmN0aW9uXCIpOnQuQXBwZW5kKFwiIHR1bm5lbFwiKSksdC5BcHBlbmQoXCIgLT4gXCIpLHQuQXBwZW5kKHRoaXMudGFyZ2V0UGF0aFN0cmluZyksdC5BcHBlbmQoXCIgKFwiKSx0LkFwcGVuZChlKSx0LkFwcGVuZChcIilcIiksdC50b1N0cmluZygpfX19Y2xhc3MgVyBleHRlbmRzIHB7Y29uc3RydWN0b3IodD0hMCl7c3VwZXIoKSx0aGlzLl9wYXRoT25DaG9pY2U9bnVsbCx0aGlzLmhhc0NvbmRpdGlvbj0hMSx0aGlzLmhhc1N0YXJ0Q29udGVudD0hMSx0aGlzLmhhc0Nob2ljZU9ubHlDb250ZW50PSExLHRoaXMuaXNJbnZpc2libGVEZWZhdWx0PSExLHRoaXMub25jZU9ubHk9ITAsdGhpcy5vbmNlT25seT10fWdldCBwYXRoT25DaG9pY2UoKXtpZihudWxsIT10aGlzLl9wYXRoT25DaG9pY2UmJnRoaXMuX3BhdGhPbkNob2ljZS5pc1JlbGF0aXZlKXtsZXQgdD10aGlzLmNob2ljZVRhcmdldDt0JiYodGhpcy5fcGF0aE9uQ2hvaWNlPXQucGF0aCl9cmV0dXJuIHRoaXMuX3BhdGhPbkNob2ljZX1zZXQgcGF0aE9uQ2hvaWNlKHQpe3RoaXMuX3BhdGhPbkNob2ljZT10fWdldCBjaG9pY2VUYXJnZXQoKXtyZXR1cm4gbnVsbD09PXRoaXMuX3BhdGhPbkNob2ljZT9kKFwiQ2hvaWNlUG9pbnQuX3BhdGhPbkNob2ljZVwiKTp0aGlzLlJlc29sdmVQYXRoKHRoaXMuX3BhdGhPbkNob2ljZSkuY29udGFpbmVyfWdldCBwYXRoU3RyaW5nT25DaG9pY2UoKXtyZXR1cm4gbnVsbD09PXRoaXMucGF0aE9uQ2hvaWNlP2QoXCJDaG9pY2VQb2ludC5wYXRoT25DaG9pY2VcIik6dGhpcy5Db21wYWN0UGF0aFN0cmluZyh0aGlzLnBhdGhPbkNob2ljZSl9c2V0IHBhdGhTdHJpbmdPbkNob2ljZSh0KXt0aGlzLnBhdGhPbkNob2ljZT1uZXcgZSh0KX1nZXQgZmxhZ3MoKXtsZXQgdD0wO3JldHVybiB0aGlzLmhhc0NvbmRpdGlvbiYmKHR8PTEpLHRoaXMuaGFzU3RhcnRDb250ZW50JiYodHw9MiksdGhpcy5oYXNDaG9pY2VPbmx5Q29udGVudCYmKHR8PTQpLHRoaXMuaXNJbnZpc2libGVEZWZhdWx0JiYodHw9OCksdGhpcy5vbmNlT25seSYmKHR8PTE2KSx0fXNldCBmbGFncyh0KXt0aGlzLmhhc0NvbmRpdGlvbj0oMSZ0KT4wLHRoaXMuaGFzU3RhcnRDb250ZW50PSgyJnQpPjAsdGhpcy5oYXNDaG9pY2VPbmx5Q29udGVudD0oNCZ0KT4wLHRoaXMuaXNJbnZpc2libGVEZWZhdWx0PSg4JnQpPjAsdGhpcy5vbmNlT25seT0oMTYmdCk+MH10b1N0cmluZygpe2lmKG51bGw9PT10aGlzLnBhdGhPbkNob2ljZSlyZXR1cm4gZChcIkNob2ljZVBvaW50LnBhdGhPbkNob2ljZVwiKTtyZXR1cm5cIkNob2ljZTogLT4gXCIrdGhpcy5wYXRoT25DaG9pY2UudG9TdHJpbmcoKX19Y2xhc3MgRiBleHRlbmRzIHB7Y29uc3RydWN0b3IodD1udWxsKXtzdXBlcigpLHRoaXMucGF0aEZvckNvdW50PW51bGwsdGhpcy5uYW1lPXR9Z2V0IGNvbnRhaW5lckZvckNvdW50KCl7cmV0dXJuIG51bGw9PT10aGlzLnBhdGhGb3JDb3VudD9udWxsOnRoaXMuUmVzb2x2ZVBhdGgodGhpcy5wYXRoRm9yQ291bnQpLmNvbnRhaW5lcn1nZXQgcGF0aFN0cmluZ0ZvckNvdW50KCl7cmV0dXJuIG51bGw9PT10aGlzLnBhdGhGb3JDb3VudD9udWxsOnRoaXMuQ29tcGFjdFBhdGhTdHJpbmcodGhpcy5wYXRoRm9yQ291bnQpfXNldCBwYXRoU3RyaW5nRm9yQ291bnQodCl7dGhpcy5wYXRoRm9yQ291bnQ9bnVsbD09PXQ/bnVsbDpuZXcgZSh0KX10b1N0cmluZygpe2lmKG51bGwhPXRoaXMubmFtZSlyZXR1cm5cInZhcihcIit0aGlzLm5hbWUrXCIpXCI7cmV0dXJuXCJyZWFkX2NvdW50KFwiK3RoaXMucGF0aFN0cmluZ0ZvckNvdW50K1wiKVwifX1jbGFzcyBWIGV4dGVuZHMgcHtjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKCksdGhpcy52YXJpYWJsZU5hbWU9dHx8bnVsbCx0aGlzLmlzTmV3RGVjbGFyYXRpb249ISFlLHRoaXMuaXNHbG9iYWw9ITF9dG9TdHJpbmcoKXtyZXR1cm5cIlZhckFzc2lnbiB0byBcIit0aGlzLnZhcmlhYmxlTmFtZX19Y2xhc3MgTCBleHRlbmRzIHB7fWNsYXNzIFIgZXh0ZW5kcyBwe2NvbnN0cnVjdG9yKCl7aWYoc3VwZXIoKSx0aGlzLl9uYW1lPW51bGwsdGhpcy5fbnVtYmVyT2ZQYXJhbWV0ZXJzPTAsdGhpcy5fcHJvdG90eXBlPW51bGwsdGhpcy5faXNQcm90b3R5cGU9ITEsdGhpcy5fb3BlcmF0aW9uRnVuY3M9bnVsbCwwPT09YXJndW1lbnRzLmxlbmd0aClSLkdlbmVyYXRlTmF0aXZlRnVuY3Rpb25zSWZOZWNlc3NhcnkoKTtlbHNlIGlmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXtsZXQgdD1hcmd1bWVudHNbMF07Ui5HZW5lcmF0ZU5hdGl2ZUZ1bmN0aW9uc0lmTmVjZXNzYXJ5KCksdGhpcy5uYW1lPXR9ZWxzZSBpZigyPT09YXJndW1lbnRzLmxlbmd0aCl7bGV0IHQ9YXJndW1lbnRzWzBdLGU9YXJndW1lbnRzWzFdO3RoaXMuX2lzUHJvdG90eXBlPSEwLHRoaXMubmFtZT10LHRoaXMubnVtYmVyT2ZQYXJhbWV0ZXJzPWV9fXN0YXRpYyBDYWxsV2l0aE5hbWUodCl7cmV0dXJuIG5ldyBSKHQpfXN0YXRpYyBDYWxsRXhpc3RzV2l0aE5hbWUodCl7cmV0dXJuIHRoaXMuR2VuZXJhdGVOYXRpdmVGdW5jdGlvbnNJZk5lY2Vzc2FyeSgpLHRoaXMuX25hdGl2ZUZ1bmN0aW9ucy5nZXQodCl9Z2V0IG5hbWUoKXtyZXR1cm4gbnVsbD09PXRoaXMuX25hbWU/ZChcIk5hdGl2ZUZ1bmN0aW9uQ2FsbC5fbmFtZVwiKTp0aGlzLl9uYW1lfXNldCBuYW1lKHQpe3RoaXMuX25hbWU9dCx0aGlzLl9pc1Byb3RvdHlwZXx8KG51bGw9PT1SLl9uYXRpdmVGdW5jdGlvbnM/ZChcIk5hdGl2ZUZ1bmN0aW9uQ2FsbC5fbmF0aXZlRnVuY3Rpb25zXCIpOnRoaXMuX3Byb3RvdHlwZT1SLl9uYXRpdmVGdW5jdGlvbnMuZ2V0KHRoaXMuX25hbWUpfHxudWxsKX1nZXQgbnVtYmVyT2ZQYXJhbWV0ZXJzKCl7cmV0dXJuIHRoaXMuX3Byb3RvdHlwZT90aGlzLl9wcm90b3R5cGUubnVtYmVyT2ZQYXJhbWV0ZXJzOnRoaXMuX251bWJlck9mUGFyYW1ldGVyc31zZXQgbnVtYmVyT2ZQYXJhbWV0ZXJzKHQpe3RoaXMuX251bWJlck9mUGFyYW1ldGVycz10fUNhbGwodCl7aWYodGhpcy5fcHJvdG90eXBlKXJldHVybiB0aGlzLl9wcm90b3R5cGUuQ2FsbCh0KTtpZih0aGlzLm51bWJlck9mUGFyYW1ldGVycyE9dC5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiKTtsZXQgZT0hMTtmb3IobGV0IG4gb2YgdCl7aWYobiBpbnN0YW5jZW9mIEwpdGhyb3cgbmV3IFMoJ0F0dGVtcHRpbmcgdG8gcGVyZm9ybSBvcGVyYXRpb24gb24gYSB2b2lkIHZhbHVlLiBEaWQgeW91IGZvcmdldCB0byBcInJldHVyblwiIGEgdmFsdWUgZnJvbSBhIGZ1bmN0aW9uIHlvdSBjYWxsZWQgaGVyZT8nKTtuIGluc3RhbmNlb2YgTyYmKGU9ITApfWlmKDI9PXQubGVuZ3RoJiZlKXJldHVybiB0aGlzLkNhbGxCaW5hcnlMaXN0T3BlcmF0aW9uKHQpO2xldCBuPXRoaXMuQ29lcmNlVmFsdWVzVG9TaW5nbGVUeXBlKHQpLHI9blswXS52YWx1ZVR5cGU7cmV0dXJuIHI9PWkuSW50fHxyPT1pLkZsb2F0fHxyPT1pLlN0cmluZ3x8cj09aS5EaXZlcnRUYXJnZXR8fHI9PWkuTGlzdD90aGlzLkNhbGxUeXBlKG4pOm51bGx9Q2FsbFR5cGUodCl7bGV0IGU9cyh0WzBdLHYpLG49ZS52YWx1ZVR5cGUscj1lLGE9dC5sZW5ndGg7aWYoMj09YXx8MT09YSl7aWYobnVsbD09PXRoaXMuX29wZXJhdGlvbkZ1bmNzKXJldHVybiBkKFwiTmF0aXZlRnVuY3Rpb25DYWxsLl9vcGVyYXRpb25GdW5jc1wiKTtsZXQgbD10aGlzLl9vcGVyYXRpb25GdW5jcy5nZXQobik7aWYoIWwpe2NvbnN0IHQ9aVtuXTt0aHJvdyBuZXcgUyhcIkNhbm5vdCBwZXJmb3JtIG9wZXJhdGlvbiBcIit0aGlzLm5hbWUrXCIgb24gXCIrdCl9aWYoMj09YSl7bGV0IGU9cyh0WzFdLHYpLG49bDtpZihudWxsPT09ci52YWx1ZXx8bnVsbD09PWUudmFsdWUpcmV0dXJuIGQoXCJOYXRpdmVGdW5jdGlvbkNhbGwuQ2FsbCBCaW5hcnlPcCB2YWx1ZXNcIik7bGV0IGk9bihyLnZhbHVlLGUudmFsdWUpO3JldHVybiB2LkNyZWF0ZShpKX17bGV0IHQ9bDtpZihudWxsPT09ci52YWx1ZSlyZXR1cm4gZChcIk5hdGl2ZUZ1bmN0aW9uQ2FsbC5DYWxsIFVuYXJ5T3AgdmFsdWVcIik7bGV0IG49dChyLnZhbHVlKTtyZXR1cm4gdGhpcy5uYW1lPT09Ui5JbnQ/di5DcmVhdGUobixpLkludCk6dGhpcy5uYW1lPT09Ui5GbG9hdD92LkNyZWF0ZShuLGkuRmxvYXQpOnYuQ3JlYXRlKG4sZS52YWx1ZVR5cGUpfX10aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHRvIE5hdGl2ZUZ1bmN0aW9uQ2FsbDogXCIrdC5sZW5ndGgpfUNhbGxCaW5hcnlMaXN0T3BlcmF0aW9uKHQpe2lmKChcIitcIj09dGhpcy5uYW1lfHxcIi1cIj09dGhpcy5uYW1lKSYmdFswXWluc3RhbmNlb2YgTyYmdFsxXWluc3RhbmNlb2YgYilyZXR1cm4gdGhpcy5DYWxsTGlzdEluY3JlbWVudE9wZXJhdGlvbih0KTtsZXQgZT1zKHRbMF0sdiksbj1zKHRbMV0sdik7aWYoIShcIiYmXCIhPXRoaXMubmFtZSYmXCJ8fFwiIT10aGlzLm5hbWV8fGUudmFsdWVUeXBlPT1pLkxpc3QmJm4udmFsdWVUeXBlPT1pLkxpc3QpKXtpZihudWxsPT09dGhpcy5fb3BlcmF0aW9uRnVuY3MpcmV0dXJuIGQoXCJOYXRpdmVGdW5jdGlvbkNhbGwuX29wZXJhdGlvbkZ1bmNzXCIpO2xldCB0PXRoaXMuX29wZXJhdGlvbkZ1bmNzLmdldChpLkludCk7aWYobnVsbD09PXQpcmV0dXJuIGQoXCJOYXRpdmVGdW5jdGlvbkNhbGwuQ2FsbEJpbmFyeUxpc3RPcGVyYXRpb24gb3BcIik7bGV0IHI9dChlLmlzVHJ1dGh5PzE6MCxuLmlzVHJ1dGh5PzE6MCk7cmV0dXJuIG5ldyBiKHIpfWlmKGUudmFsdWVUeXBlPT1pLkxpc3QmJm4udmFsdWVUeXBlPT1pLkxpc3QpcmV0dXJuIHRoaXMuQ2FsbFR5cGUoW2Usbl0pO3Rocm93IG5ldyBTKFwiQ2FuIG5vdCBjYWxsIHVzZSBcIit0aGlzLm5hbWUrXCIgb3BlcmF0aW9uIG9uIFwiK2lbZS52YWx1ZVR5cGVdK1wiIGFuZCBcIitpW24udmFsdWVUeXBlXSl9Q2FsbExpc3RJbmNyZW1lbnRPcGVyYXRpb24odCl7bGV0IGU9cyh0WzBdLE8pLG49cyh0WzFdLGIpLHI9bmV3IGc7aWYobnVsbD09PWUudmFsdWUpcmV0dXJuIGQoXCJOYXRpdmVGdW5jdGlvbkNhbGwuQ2FsbExpc3RJbmNyZW1lbnRPcGVyYXRpb24gbGlzdFZhbC52YWx1ZVwiKTtmb3IobGV0W3QsYV1vZiBlLnZhbHVlKXtsZXQgcz1mLmZyb21TZXJpYWxpemVkS2V5KHQpO2lmKG51bGw9PT10aGlzLl9vcGVyYXRpb25GdW5jcylyZXR1cm4gZChcIk5hdGl2ZUZ1bmN0aW9uQ2FsbC5fb3BlcmF0aW9uRnVuY3NcIik7bGV0IGw9dGhpcy5fb3BlcmF0aW9uRnVuY3MuZ2V0KGkuSW50KTtpZihudWxsPT09bi52YWx1ZSlyZXR1cm4gZChcIk5hdGl2ZUZ1bmN0aW9uQ2FsbC5DYWxsTGlzdEluY3JlbWVudE9wZXJhdGlvbiBpbnRWYWwudmFsdWVcIik7bGV0IG89bChhLG4udmFsdWUpLHU9bnVsbDtpZihudWxsPT09ZS52YWx1ZS5vcmlnaW5zKXJldHVybiBkKFwiTmF0aXZlRnVuY3Rpb25DYWxsLkNhbGxMaXN0SW5jcmVtZW50T3BlcmF0aW9uIGxpc3RWYWwudmFsdWUub3JpZ2luc1wiKTtmb3IobGV0IHQgb2YgZS52YWx1ZS5vcmlnaW5zKWlmKHQubmFtZT09cy5vcmlnaW5OYW1lKXt1PXQ7YnJlYWt9aWYobnVsbCE9dSl7bGV0IHQ9dS5UcnlHZXRJdGVtV2l0aFZhbHVlKG8sZi5OdWxsKTt0LmV4aXN0cyYmci5BZGQodC5yZXN1bHQsbyl9fXJldHVybiBuZXcgTyhyKX1Db2VyY2VWYWx1ZXNUb1NpbmdsZVR5cGUodCl7bGV0IGU9aS5JbnQsbj1udWxsO2ZvcihsZXQgciBvZiB0KXtsZXQgdD1zKHIsdik7dC52YWx1ZVR5cGU+ZSYmKGU9dC52YWx1ZVR5cGUpLHQudmFsdWVUeXBlPT1pLkxpc3QmJihuPWEodCxPKSl9bGV0IHI9W107aWYoaVtlXT09aVtpLkxpc3RdKWZvcihsZXQgZSBvZiB0KXtsZXQgdD1zKGUsdik7aWYodC52YWx1ZVR5cGU9PWkuTGlzdClyLnB1c2godCk7ZWxzZXtpZih0LnZhbHVlVHlwZSE9aS5JbnQpe2NvbnN0IGU9aVt0LnZhbHVlVHlwZV07dGhyb3cgbmV3IFMoXCJDYW5ub3QgbWl4IExpc3RzIGFuZCBcIitlK1wiIHZhbHVlcyBpbiB0aGlzIG9wZXJhdGlvblwiKX17bGV0IGU9cGFyc2VJbnQodC52YWx1ZU9iamVjdCk7aWYobj1zKG4sTyksbnVsbD09PW4udmFsdWUpcmV0dXJuIGQoXCJOYXRpdmVGdW5jdGlvbkNhbGwuQ29lcmNlVmFsdWVzVG9TaW5nbGVUeXBlIHNwZWNpYWxDYXNlTGlzdC52YWx1ZVwiKTtsZXQgaT1uLnZhbHVlLm9yaWdpbk9mTWF4SXRlbTtpZihudWxsPT09aSlyZXR1cm4gZChcIk5hdGl2ZUZ1bmN0aW9uQ2FsbC5Db2VyY2VWYWx1ZXNUb1NpbmdsZVR5cGUgbGlzdFwiKTtsZXQgYT1pLlRyeUdldEl0ZW1XaXRoVmFsdWUoZSxmLk51bGwpO2lmKCFhLmV4aXN0cyl0aHJvdyBuZXcgUyhcIkNvdWxkIG5vdCBmaW5kIExpc3QgaXRlbSB3aXRoIHRoZSB2YWx1ZSBcIitlK1wiIGluIFwiK2kubmFtZSk7e2xldCB0PW5ldyBPKGEucmVzdWx0LGUpO3IucHVzaCh0KX19fX1lbHNlIGZvcihsZXQgbiBvZiB0KXtsZXQgdD1zKG4sdikuQ2FzdChlKTtyLnB1c2godCl9cmV0dXJuIHJ9c3RhdGljIElkZW50aXR5KHQpe3JldHVybiB0fXN0YXRpYyBHZW5lcmF0ZU5hdGl2ZUZ1bmN0aW9uc0lmTmVjZXNzYXJ5KCl7aWYobnVsbD09dGhpcy5fbmF0aXZlRnVuY3Rpb25zKXt0aGlzLl9uYXRpdmVGdW5jdGlvbnM9bmV3IE1hcCx0aGlzLkFkZEludEJpbmFyeU9wKHRoaXMuQWRkLCh0LGUpPT50K2UpLHRoaXMuQWRkSW50QmluYXJ5T3AodGhpcy5TdWJ0cmFjdCwodCxlKT0+dC1lKSx0aGlzLkFkZEludEJpbmFyeU9wKHRoaXMuTXVsdGlwbHksKHQsZSk9PnQqZSksdGhpcy5BZGRJbnRCaW5hcnlPcCh0aGlzLkRpdmlkZSwodCxlKT0+TWF0aC5mbG9vcih0L2UpKSx0aGlzLkFkZEludEJpbmFyeU9wKHRoaXMuTW9kLCh0LGUpPT50JWUpLHRoaXMuQWRkSW50VW5hcnlPcCh0aGlzLk5lZ2F0ZSx0PT4tdCksdGhpcy5BZGRJbnRCaW5hcnlPcCh0aGlzLkVxdWFsLCh0LGUpPT50PT1lPzE6MCksdGhpcy5BZGRJbnRCaW5hcnlPcCh0aGlzLkdyZWF0ZXIsKHQsZSk9PnQ+ZT8xOjApLHRoaXMuQWRkSW50QmluYXJ5T3AodGhpcy5MZXNzLCh0LGUpPT50PGU/MTowKSx0aGlzLkFkZEludEJpbmFyeU9wKHRoaXMuR3JlYXRlclRoYW5PckVxdWFscywodCxlKT0+dD49ZT8xOjApLHRoaXMuQWRkSW50QmluYXJ5T3AodGhpcy5MZXNzVGhhbk9yRXF1YWxzLCh0LGUpPT50PD1lPzE6MCksdGhpcy5BZGRJbnRCaW5hcnlPcCh0aGlzLk5vdEVxdWFscywodCxlKT0+dCE9ZT8xOjApLHRoaXMuQWRkSW50VW5hcnlPcCh0aGlzLk5vdCx0PT4wPT10PzE6MCksdGhpcy5BZGRJbnRCaW5hcnlPcCh0aGlzLkFuZCwodCxlKT0+MCE9dCYmMCE9ZT8xOjApLHRoaXMuQWRkSW50QmluYXJ5T3AodGhpcy5PciwodCxlKT0+MCE9dHx8MCE9ZT8xOjApLHRoaXMuQWRkSW50QmluYXJ5T3AodGhpcy5NYXgsKHQsZSk9Pk1hdGgubWF4KHQsZSkpLHRoaXMuQWRkSW50QmluYXJ5T3AodGhpcy5NaW4sKHQsZSk9Pk1hdGgubWluKHQsZSkpLHRoaXMuQWRkSW50QmluYXJ5T3AodGhpcy5Qb3csKHQsZSk9Pk1hdGgucG93KHQsZSkpLHRoaXMuQWRkSW50VW5hcnlPcCh0aGlzLkZsb29yLFIuSWRlbnRpdHkpLHRoaXMuQWRkSW50VW5hcnlPcCh0aGlzLkNlaWxpbmcsUi5JZGVudGl0eSksdGhpcy5BZGRJbnRVbmFyeU9wKHRoaXMuSW50LFIuSWRlbnRpdHkpLHRoaXMuQWRkSW50VW5hcnlPcCh0aGlzLkZsb2F0LHQ9PnQpLHRoaXMuQWRkRmxvYXRCaW5hcnlPcCh0aGlzLkFkZCwodCxlKT0+dCtlKSx0aGlzLkFkZEZsb2F0QmluYXJ5T3AodGhpcy5TdWJ0cmFjdCwodCxlKT0+dC1lKSx0aGlzLkFkZEZsb2F0QmluYXJ5T3AodGhpcy5NdWx0aXBseSwodCxlKT0+dCplKSx0aGlzLkFkZEZsb2F0QmluYXJ5T3AodGhpcy5EaXZpZGUsKHQsZSk9PnQvZSksdGhpcy5BZGRGbG9hdEJpbmFyeU9wKHRoaXMuTW9kLCh0LGUpPT50JWUpLHRoaXMuQWRkRmxvYXRVbmFyeU9wKHRoaXMuTmVnYXRlLHQ9Pi10KSx0aGlzLkFkZEZsb2F0QmluYXJ5T3AodGhpcy5FcXVhbCwodCxlKT0+dD09ZT8xOjApLHRoaXMuQWRkRmxvYXRCaW5hcnlPcCh0aGlzLkdyZWF0ZXIsKHQsZSk9PnQ+ZT8xOjApLHRoaXMuQWRkRmxvYXRCaW5hcnlPcCh0aGlzLkxlc3MsKHQsZSk9PnQ8ZT8xOjApLHRoaXMuQWRkRmxvYXRCaW5hcnlPcCh0aGlzLkdyZWF0ZXJUaGFuT3JFcXVhbHMsKHQsZSk9PnQ+PWU/MTowKSx0aGlzLkFkZEZsb2F0QmluYXJ5T3AodGhpcy5MZXNzVGhhbk9yRXF1YWxzLCh0LGUpPT50PD1lPzE6MCksdGhpcy5BZGRGbG9hdEJpbmFyeU9wKHRoaXMuTm90RXF1YWxzLCh0LGUpPT50IT1lPzE6MCksdGhpcy5BZGRGbG9hdFVuYXJ5T3AodGhpcy5Ob3QsdD0+MD09dD8xOjApLHRoaXMuQWRkRmxvYXRCaW5hcnlPcCh0aGlzLkFuZCwodCxlKT0+MCE9dCYmMCE9ZT8xOjApLHRoaXMuQWRkRmxvYXRCaW5hcnlPcCh0aGlzLk9yLCh0LGUpPT4wIT10fHwwIT1lPzE6MCksdGhpcy5BZGRGbG9hdEJpbmFyeU9wKHRoaXMuTWF4LCh0LGUpPT5NYXRoLm1heCh0LGUpKSx0aGlzLkFkZEZsb2F0QmluYXJ5T3AodGhpcy5NaW4sKHQsZSk9Pk1hdGgubWluKHQsZSkpLHRoaXMuQWRkRmxvYXRCaW5hcnlPcCh0aGlzLlBvdywodCxlKT0+TWF0aC5wb3codCxlKSksdGhpcy5BZGRGbG9hdFVuYXJ5T3AodGhpcy5GbG9vcix0PT5NYXRoLmZsb29yKHQpKSx0aGlzLkFkZEZsb2F0VW5hcnlPcCh0aGlzLkNlaWxpbmcsdD0+TWF0aC5jZWlsKHQpKSx0aGlzLkFkZEZsb2F0VW5hcnlPcCh0aGlzLkludCx0PT5NYXRoLmZsb29yKHQpKSx0aGlzLkFkZEZsb2F0VW5hcnlPcCh0aGlzLkZsb2F0LFIuSWRlbnRpdHkpLHRoaXMuQWRkU3RyaW5nQmluYXJ5T3AodGhpcy5BZGQsKHQsZSk9PnQrZSksdGhpcy5BZGRTdHJpbmdCaW5hcnlPcCh0aGlzLkVxdWFsLCh0LGUpPT50PT09ZT8xOjApLHRoaXMuQWRkU3RyaW5nQmluYXJ5T3AodGhpcy5Ob3RFcXVhbHMsKHQsZSk9PnQhPT1lPzE6MCksdGhpcy5BZGRTdHJpbmdCaW5hcnlPcCh0aGlzLkhhcywodCxlKT0+dC5pbmNsdWRlcyhlKT8xOjApLHRoaXMuQWRkU3RyaW5nQmluYXJ5T3AodGhpcy5IYXNudCwodCxlKT0+dC5pbmNsdWRlcyhlKT8wOjEpLHRoaXMuQWRkTGlzdEJpbmFyeU9wKHRoaXMuQWRkLCh0LGUpPT50LlVuaW9uKGUpKSx0aGlzLkFkZExpc3RCaW5hcnlPcCh0aGlzLlN1YnRyYWN0LCh0LGUpPT50LldpdGhvdXQoZSkpLHRoaXMuQWRkTGlzdEJpbmFyeU9wKHRoaXMuSGFzLCh0LGUpPT50LkNvbnRhaW5zKGUpPzE6MCksdGhpcy5BZGRMaXN0QmluYXJ5T3AodGhpcy5IYXNudCwodCxlKT0+dC5Db250YWlucyhlKT8wOjEpLHRoaXMuQWRkTGlzdEJpbmFyeU9wKHRoaXMuSW50ZXJzZWN0LCh0LGUpPT50LkludGVyc2VjdChlKSksdGhpcy5BZGRMaXN0QmluYXJ5T3AodGhpcy5FcXVhbCwodCxlKT0+dC5FcXVhbHMoZSk/MTowKSx0aGlzLkFkZExpc3RCaW5hcnlPcCh0aGlzLkdyZWF0ZXIsKHQsZSk9PnQuR3JlYXRlclRoYW4oZSk/MTowKSx0aGlzLkFkZExpc3RCaW5hcnlPcCh0aGlzLkxlc3MsKHQsZSk9PnQuTGVzc1RoYW4oZSk/MTowKSx0aGlzLkFkZExpc3RCaW5hcnlPcCh0aGlzLkdyZWF0ZXJUaGFuT3JFcXVhbHMsKHQsZSk9PnQuR3JlYXRlclRoYW5PckVxdWFscyhlKT8xOjApLHRoaXMuQWRkTGlzdEJpbmFyeU9wKHRoaXMuTGVzc1RoYW5PckVxdWFscywodCxlKT0+dC5MZXNzVGhhbk9yRXF1YWxzKGUpPzE6MCksdGhpcy5BZGRMaXN0QmluYXJ5T3AodGhpcy5Ob3RFcXVhbHMsKHQsZSk9PnQuRXF1YWxzKGUpPzA6MSksdGhpcy5BZGRMaXN0QmluYXJ5T3AodGhpcy5BbmQsKHQsZSk9PnQuQ291bnQ+MCYmZS5Db3VudD4wPzE6MCksdGhpcy5BZGRMaXN0QmluYXJ5T3AodGhpcy5PciwodCxlKT0+dC5Db3VudD4wfHxlLkNvdW50PjA/MTowKSx0aGlzLkFkZExpc3RVbmFyeU9wKHRoaXMuTm90LHQ9PjA9PXQuQ291bnQ/MTowKSx0aGlzLkFkZExpc3RVbmFyeU9wKHRoaXMuSW52ZXJ0LHQ9PnQuaW52ZXJzZSksdGhpcy5BZGRMaXN0VW5hcnlPcCh0aGlzLkFsbCx0PT50LmFsbCksdGhpcy5BZGRMaXN0VW5hcnlPcCh0aGlzLkxpc3RNaW4sdD0+dC5NaW5Bc0xpc3QoKSksdGhpcy5BZGRMaXN0VW5hcnlPcCh0aGlzLkxpc3RNYXgsdD0+dC5NYXhBc0xpc3QoKSksdGhpcy5BZGRMaXN0VW5hcnlPcCh0aGlzLkNvdW50LHQ9PnQuQ291bnQpLHRoaXMuQWRkTGlzdFVuYXJ5T3AodGhpcy5WYWx1ZU9mTGlzdCx0PT50Lm1heEl0ZW0uVmFsdWUpO2xldCB0PSh0LGUpPT50LkVxdWFscyhlKT8xOjAsZT0odCxlKT0+dC5FcXVhbHMoZSk/MDoxO3RoaXMuQWRkT3BUb05hdGl2ZUZ1bmModGhpcy5FcXVhbCwyLGkuRGl2ZXJ0VGFyZ2V0LHQpLHRoaXMuQWRkT3BUb05hdGl2ZUZ1bmModGhpcy5Ob3RFcXVhbHMsMixpLkRpdmVydFRhcmdldCxlKX19QWRkT3BGdW5jRm9yVHlwZSh0LGUpe251bGw9PXRoaXMuX29wZXJhdGlvbkZ1bmNzJiYodGhpcy5fb3BlcmF0aW9uRnVuY3M9bmV3IE1hcCksdGhpcy5fb3BlcmF0aW9uRnVuY3Muc2V0KHQsZSl9c3RhdGljIEFkZE9wVG9OYXRpdmVGdW5jKHQsZSxuLGkpe2lmKG51bGw9PT10aGlzLl9uYXRpdmVGdW5jdGlvbnMpcmV0dXJuIGQoXCJOYXRpdmVGdW5jdGlvbkNhbGwuX25hdGl2ZUZ1bmN0aW9uc1wiKTtsZXQgcj10aGlzLl9uYXRpdmVGdW5jdGlvbnMuZ2V0KHQpO3J8fChyPW5ldyBSKHQsZSksdGhpcy5fbmF0aXZlRnVuY3Rpb25zLnNldCh0LHIpKSxyLkFkZE9wRnVuY0ZvclR5cGUobixpKX1zdGF0aWMgQWRkSW50QmluYXJ5T3AodCxlKXt0aGlzLkFkZE9wVG9OYXRpdmVGdW5jKHQsMixpLkludCxlKX1zdGF0aWMgQWRkSW50VW5hcnlPcCh0LGUpe3RoaXMuQWRkT3BUb05hdGl2ZUZ1bmModCwxLGkuSW50LGUpfXN0YXRpYyBBZGRGbG9hdEJpbmFyeU9wKHQsZSl7dGhpcy5BZGRPcFRvTmF0aXZlRnVuYyh0LDIsaS5GbG9hdCxlKX1zdGF0aWMgQWRkRmxvYXRVbmFyeU9wKHQsZSl7dGhpcy5BZGRPcFRvTmF0aXZlRnVuYyh0LDEsaS5GbG9hdCxlKX1zdGF0aWMgQWRkU3RyaW5nQmluYXJ5T3AodCxlKXt0aGlzLkFkZE9wVG9OYXRpdmVGdW5jKHQsMixpLlN0cmluZyxlKX1zdGF0aWMgQWRkTGlzdEJpbmFyeU9wKHQsZSl7dGhpcy5BZGRPcFRvTmF0aXZlRnVuYyh0LDIsaS5MaXN0LGUpfXN0YXRpYyBBZGRMaXN0VW5hcnlPcCh0LGUpe3RoaXMuQWRkT3BUb05hdGl2ZUZ1bmModCwxLGkuTGlzdCxlKX10b1N0cmluZygpe3JldHVybidOYXRpdmUgXCInK3RoaXMubmFtZSsnXCInfX1SLkFkZD1cIitcIixSLlN1YnRyYWN0PVwiLVwiLFIuRGl2aWRlPVwiL1wiLFIuTXVsdGlwbHk9XCIqXCIsUi5Nb2Q9XCIlXCIsUi5OZWdhdGU9XCJfXCIsUi5FcXVhbD1cIj09XCIsUi5HcmVhdGVyPVwiPlwiLFIuTGVzcz1cIjxcIixSLkdyZWF0ZXJUaGFuT3JFcXVhbHM9XCI+PVwiLFIuTGVzc1RoYW5PckVxdWFscz1cIjw9XCIsUi5Ob3RFcXVhbHM9XCIhPVwiLFIuTm90PVwiIVwiLFIuQW5kPVwiJiZcIixSLk9yPVwifHxcIixSLk1pbj1cIk1JTlwiLFIuTWF4PVwiTUFYXCIsUi5Qb3c9XCJQT1dcIixSLkZsb29yPVwiRkxPT1JcIixSLkNlaWxpbmc9XCJDRUlMSU5HXCIsUi5JbnQ9XCJJTlRcIixSLkZsb2F0PVwiRkxPQVRcIixSLkhhcz1cIj9cIixSLkhhc250PVwiIT9cIixSLkludGVyc2VjdD1cIl5cIixSLkxpc3RNaW49XCJMSVNUX01JTlwiLFIuTGlzdE1heD1cIkxJU1RfTUFYXCIsUi5BbGw9XCJMSVNUX0FMTFwiLFIuQ291bnQ9XCJMSVNUX0NPVU5UXCIsUi5WYWx1ZU9mTGlzdD1cIkxJU1RfVkFMVUVcIixSLkludmVydD1cIkxJU1RfSU5WRVJUXCIsUi5fbmF0aXZlRnVuY3Rpb25zPW51bGw7Y2xhc3MgaiBleHRlbmRzIHB7Y29uc3RydWN0b3IodCl7c3VwZXIoKSx0aGlzLnRleHQ9dC50b1N0cmluZygpfHxcIlwifXRvU3RyaW5nKCl7cmV0dXJuXCIjIFwiK3RoaXMudGV4dH19Y2xhc3MgRCBleHRlbmRzIHB7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMudGV4dD1cIlwiLHRoaXMuaW5kZXg9MCx0aGlzLnRocmVhZEF0R2VuZXJhdGlvbj1udWxsLHRoaXMuc291cmNlUGF0aD1cIlwiLHRoaXMudGFyZ2V0UGF0aD1udWxsLHRoaXMuaXNJbnZpc2libGVEZWZhdWx0PSExLHRoaXMub3JpZ2luYWxUaHJlYWRJbmRleD0wfWdldCBwYXRoU3RyaW5nT25DaG9pY2UoKXtyZXR1cm4gbnVsbD09PXRoaXMudGFyZ2V0UGF0aD9kKFwiQ2hvaWNlLnRhcmdldFBhdGhcIik6dGhpcy50YXJnZXRQYXRoLnRvU3RyaW5nKCl9c2V0IHBhdGhTdHJpbmdPbkNob2ljZSh0KXt0aGlzLnRhcmdldFBhdGg9bmV3IGUodCl9fWNsYXNzIEd7Y29uc3RydWN0b3IodCxlKXt0aGlzLl9uYW1lPXR8fFwiXCIsdGhpcy5faXRlbXM9bnVsbCx0aGlzLl9pdGVtTmFtZVRvVmFsdWVzPWV8fG5ldyBNYXB9Z2V0IG5hbWUoKXtyZXR1cm4gdGhpcy5fbmFtZX1nZXQgaXRlbXMoKXtpZihudWxsPT10aGlzLl9pdGVtcyl7dGhpcy5faXRlbXM9bmV3IE1hcDtmb3IobGV0W3QsZV1vZiB0aGlzLl9pdGVtTmFtZVRvVmFsdWVzKXtsZXQgbj1uZXcgZih0aGlzLm5hbWUsdCk7dGhpcy5faXRlbXMuc2V0KG4uc2VyaWFsaXplZCgpLGUpfX1yZXR1cm4gdGhpcy5faXRlbXN9VmFsdWVGb3JJdGVtKHQpe2lmKCF0Lml0ZW1OYW1lKXJldHVybiAwO2xldCBlPXRoaXMuX2l0ZW1OYW1lVG9WYWx1ZXMuZ2V0KHQuaXRlbU5hbWUpO3JldHVybiB2b2lkIDAhPT1lP2U6MH1Db250YWluc0l0ZW0odCl7cmV0dXJuISF0Lml0ZW1OYW1lJiYodC5vcmlnaW5OYW1lPT10aGlzLm5hbWUmJnRoaXMuX2l0ZW1OYW1lVG9WYWx1ZXMuaGFzKHQuaXRlbU5hbWUpKX1Db250YWluc0l0ZW1XaXRoTmFtZSh0KXtyZXR1cm4gdGhpcy5faXRlbU5hbWVUb1ZhbHVlcy5oYXModCl9VHJ5R2V0SXRlbVdpdGhWYWx1ZSh0LGUpe2ZvcihsZXRbZSxuXW9mIHRoaXMuX2l0ZW1OYW1lVG9WYWx1ZXMpaWYobj09dClyZXR1cm57cmVzdWx0Om5ldyBmKHRoaXMubmFtZSxlKSxleGlzdHM6ITB9O3JldHVybntyZXN1bHQ6Zi5OdWxsLGV4aXN0czohMX19VHJ5R2V0VmFsdWVGb3JJdGVtKHQsZSl7aWYoIXQuaXRlbU5hbWUpcmV0dXJue3Jlc3VsdDowLGV4aXN0czohMX07bGV0IG49dGhpcy5faXRlbU5hbWVUb1ZhbHVlcy5nZXQodC5pdGVtTmFtZSk7cmV0dXJuIG4/e3Jlc3VsdDpuLGV4aXN0czohMH06e3Jlc3VsdDowLGV4aXN0czohMX19fWNsYXNzIEJ7Y29uc3RydWN0b3IodCl7dGhpcy5fbGlzdHM9bmV3IE1hcCx0aGlzLl9hbGxVbmFtYmlndW91c0xpc3RWYWx1ZUNhY2hlPW5ldyBNYXA7Zm9yKGxldCBlIG9mIHQpe3RoaXMuX2xpc3RzLnNldChlLm5hbWUsZSk7Zm9yKGxldFt0LG5db2YgZS5pdGVtcyl7bGV0IGU9Zi5mcm9tU2VyaWFsaXplZEtleSh0KSxpPW5ldyBPKGUsbik7aWYoIWUuaXRlbU5hbWUpdGhyb3cgbmV3IEVycm9yKFwiaXRlbS5pdGVtTmFtZSBpcyBudWxsIG9yIHVuZGVmaW5lZC5cIik7dGhpcy5fYWxsVW5hbWJpZ3VvdXNMaXN0VmFsdWVDYWNoZS5zZXQoZS5pdGVtTmFtZSxpKSx0aGlzLl9hbGxVbmFtYmlndW91c0xpc3RWYWx1ZUNhY2hlLnNldChlLmZ1bGxOYW1lLGkpfX19Z2V0IGxpc3RzKCl7bGV0IHQ9W107Zm9yKGxldFssZV1vZiB0aGlzLl9saXN0cyl0LnB1c2goZSk7cmV0dXJuIHR9VHJ5TGlzdEdldERlZmluaXRpb24odCxlKXtpZihudWxsPT09dClyZXR1cm57cmVzdWx0OmUsZXhpc3RzOiExfTtsZXQgbj10aGlzLl9saXN0cy5nZXQodCk7cmV0dXJuIG4/e3Jlc3VsdDpuLGV4aXN0czohMH06e3Jlc3VsdDplLGV4aXN0czohMX19RmluZFNpbmdsZUl0ZW1MaXN0V2l0aE5hbWUodCl7aWYobnVsbD09PXQpcmV0dXJuIGQoXCJuYW1lXCIpO2xldCBlPXRoaXMuX2FsbFVuYW1iaWd1b3VzTGlzdFZhbHVlQ2FjaGUuZ2V0KHQpO3JldHVybiB2b2lkIDAhPT1lP2U6bnVsbH19Y2xhc3MgTXtzdGF0aWMgSkFycmF5VG9SdW50aW1lT2JqTGlzdCh0LGU9ITEpe2xldCBuPXQubGVuZ3RoO2UmJm4tLTtsZXQgaT1bXTtmb3IobGV0IGU9MDtlPG47ZSsrKXtsZXQgbj10W2VdLHI9dGhpcy5KVG9rZW5Ub1J1bnRpbWVPYmplY3Qobik7aWYobnVsbD09PXIpcmV0dXJuIGQoXCJydW50aW1lT2JqXCIpO2kucHVzaChyKX1yZXR1cm4gaX1zdGF0aWMgV3JpdGVEaWN0aW9uYXJ5UnVudGltZU9ianModCxlKXt0LldyaXRlT2JqZWN0U3RhcnQoKTtmb3IobGV0W24saV1vZiBlKXQuV3JpdGVQcm9wZXJ0eVN0YXJ0KG4pLHRoaXMuV3JpdGVSdW50aW1lT2JqZWN0KHQsaSksdC5Xcml0ZVByb3BlcnR5RW5kKCk7dC5Xcml0ZU9iamVjdEVuZCgpfXN0YXRpYyBXcml0ZUxpc3RSdW50aW1lT2Jqcyh0LGUpe3QuV3JpdGVBcnJheVN0YXJ0KCk7Zm9yKGxldCBuIG9mIGUpdGhpcy5Xcml0ZVJ1bnRpbWVPYmplY3QodCxuKTt0LldyaXRlQXJyYXlFbmQoKX1zdGF0aWMgV3JpdGVJbnREaWN0aW9uYXJ5KHQsZSl7dC5Xcml0ZU9iamVjdFN0YXJ0KCk7Zm9yKGxldFtuLGldb2YgZSl0LldyaXRlSW50UHJvcGVydHkobixpKTt0LldyaXRlT2JqZWN0RW5kKCl9c3RhdGljIFdyaXRlUnVudGltZU9iamVjdCh0LGUpe2xldCBuPWEoZSxOKTtpZihuKXJldHVybiB2b2lkIHRoaXMuV3JpdGVSdW50aW1lQ29udGFpbmVyKHQsbik7bGV0IGk9YShlLGspO2lmKGkpe2xldCBlLG49XCItPlwiO3JldHVybiBpLmlzRXh0ZXJuYWw/bj1cIngoKVwiOmkucHVzaGVzVG9TdGFjayYmKGkuc3RhY2tQdXNoVHlwZT09ci5GdW5jdGlvbj9uPVwiZigpXCI6aS5zdGFja1B1c2hUeXBlPT1yLlR1bm5lbCYmKG49XCItPnQtPlwiKSksZT1pLmhhc1ZhcmlhYmxlVGFyZ2V0P2kudmFyaWFibGVEaXZlcnROYW1lOmkudGFyZ2V0UGF0aFN0cmluZyx0LldyaXRlT2JqZWN0U3RhcnQoKSx0LldyaXRlUHJvcGVydHkobixlKSxpLmhhc1ZhcmlhYmxlVGFyZ2V0JiZ0LldyaXRlUHJvcGVydHkoXCJ2YXJcIiwhMCksaS5pc0NvbmRpdGlvbmFsJiZ0LldyaXRlUHJvcGVydHkoXCJjXCIsITApLGkuZXh0ZXJuYWxBcmdzPjAmJnQuV3JpdGVJbnRQcm9wZXJ0eShcImV4QXJnc1wiLGkuZXh0ZXJuYWxBcmdzKSx2b2lkIHQuV3JpdGVPYmplY3RFbmQoKX1sZXQgcz1hKGUsVyk7aWYocylyZXR1cm4gdC5Xcml0ZU9iamVjdFN0YXJ0KCksdC5Xcml0ZVByb3BlcnR5KFwiKlwiLHMucGF0aFN0cmluZ09uQ2hvaWNlKSx0LldyaXRlSW50UHJvcGVydHkoXCJmbGdcIixzLmZsYWdzKSx2b2lkIHQuV3JpdGVPYmplY3RFbmQoKTtsZXQgbD1hKGUsYik7aWYobClyZXR1cm4gdm9pZCB0LldyaXRlSW50KGwudmFsdWUpO2xldCBvPWEoZSxfKTtpZihvKXJldHVybiB2b2lkIHQuV3JpdGVGbG9hdChvLnZhbHVlKTtsZXQgdT1hKGUsVCk7aWYodSlyZXR1cm4gdm9pZCh1LmlzTmV3bGluZT90LldyaXRlKFwiXFxuXCIsITEpOih0LldyaXRlU3RyaW5nU3RhcnQoKSx0LldyaXRlU3RyaW5nSW5uZXIoXCJeXCIpLHQuV3JpdGVTdHJpbmdJbm5lcih1LnZhbHVlKSx0LldyaXRlU3RyaW5nRW5kKCkpKTtsZXQgaD1hKGUsTyk7aWYoaClyZXR1cm4gdm9pZCB0aGlzLldyaXRlSW5rTGlzdCh0LGgpO2xldCBjPWEoZSxQKTtpZihjKXJldHVybiB0LldyaXRlT2JqZWN0U3RhcnQoKSxudWxsPT09Yy52YWx1ZT9kKFwiZGl2VGFyZ2V0VmFsLnZhbHVlXCIpOih0LldyaXRlUHJvcGVydHkoXCJeLT5cIixjLnZhbHVlLmNvbXBvbmVudHNTdHJpbmcpLHZvaWQgdC5Xcml0ZU9iamVjdEVuZCgpKTtsZXQgcD1hKGUsdyk7aWYocClyZXR1cm4gdC5Xcml0ZU9iamVjdFN0YXJ0KCksdC5Xcml0ZVByb3BlcnR5KFwiXnZhclwiLHAudmFsdWUpLHQuV3JpdGVJbnRQcm9wZXJ0eShcImNpXCIscC5jb250ZXh0SW5kZXgpLHZvaWQgdC5Xcml0ZU9iamVjdEVuZCgpO2lmKGEoZSx4KSlyZXR1cm4gdm9pZCB0LldyaXRlKFwiPD5cIik7bGV0IG09YShlLEEpO2lmKG0pcmV0dXJuIHZvaWQgdC5Xcml0ZShNLl9jb250cm9sQ29tbWFuZE5hbWVzW20uY29tbWFuZFR5cGVdKTtsZXQgZj1hKGUsUik7aWYoZil7bGV0IGU9Zi5uYW1lO3JldHVyblwiXlwiPT1lJiYoZT1cIkxeXCIpLHZvaWQgdC5Xcml0ZShlKX1sZXQgZz1hKGUsRik7aWYoZyl7dC5Xcml0ZU9iamVjdFN0YXJ0KCk7bGV0IGU9Zy5wYXRoU3RyaW5nRm9yQ291bnQ7cmV0dXJuIG51bGwhPWU/dC5Xcml0ZVByb3BlcnR5KFwiQ05UP1wiLGUpOnQuV3JpdGVQcm9wZXJ0eShcIlZBUj9cIixnLm5hbWUpLHZvaWQgdC5Xcml0ZU9iamVjdEVuZCgpfWxldCBTPWEoZSxWKTtpZihTKXt0LldyaXRlT2JqZWN0U3RhcnQoKTtsZXQgZT1TLmlzR2xvYmFsP1wiVkFSPVwiOlwidGVtcD1cIjtyZXR1cm4gdC5Xcml0ZVByb3BlcnR5KGUsUy52YXJpYWJsZU5hbWUpLFMuaXNOZXdEZWNsYXJhdGlvbnx8dC5Xcml0ZVByb3BlcnR5KFwicmVcIiwhMCksdm9pZCB0LldyaXRlT2JqZWN0RW5kKCl9aWYoYShlLEwpKXJldHVybiB2b2lkIHQuV3JpdGUoXCJ2b2lkXCIpO2xldCB5PWEoZSxqKTtpZih5KXJldHVybiB0LldyaXRlT2JqZWN0U3RhcnQoKSx0LldyaXRlUHJvcGVydHkoXCIjXCIseS50ZXh0KSx2b2lkIHQuV3JpdGVPYmplY3RFbmQoKTtsZXQgQz1hKGUsRCk7aWYoIUMpdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNvbnZlcnQgcnVudGltZSBvYmplY3QgdG8gSnNvbiB0b2tlbjogXCIrZSk7dGhpcy5Xcml0ZUNob2ljZSh0LEMpfXN0YXRpYyBKT2JqZWN0VG9EaWN0aW9uYXJ5UnVudGltZU9ianModCl7bGV0IGU9bmV3IE1hcDtmb3IobGV0IG4gaW4gdClpZih0Lmhhc093blByb3BlcnR5KG4pKXtsZXQgaT10aGlzLkpUb2tlblRvUnVudGltZU9iamVjdCh0W25dKTtpZihudWxsPT09aSlyZXR1cm4gZChcImlua09iamVjdFwiKTtlLnNldChuLGkpfXJldHVybiBlfXN0YXRpYyBKT2JqZWN0VG9JbnREaWN0aW9uYXJ5KHQpe2xldCBlPW5ldyBNYXA7Zm9yKGxldCBuIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShuKSYmZS5zZXQobixwYXJzZUludCh0W25dKSk7cmV0dXJuIGV9c3RhdGljIEpUb2tlblRvUnVudGltZU9iamVjdCh0KXtpZihcIm51bWJlclwiPT10eXBlb2YgdCYmIWlzTmFOKHQpKXJldHVybiB2LkNyZWF0ZSh0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7bGV0IGU9dC50b1N0cmluZygpLG49ZVswXTtpZihcIl5cIj09bilyZXR1cm4gbmV3IFQoZS5zdWJzdHJpbmcoMSkpO2lmKFwiXFxuXCI9PW4mJjE9PWUubGVuZ3RoKXJldHVybiBuZXcgVChcIlxcblwiKTtpZihcIjw+XCI9PWUpcmV0dXJuIG5ldyB4O2ZvcihsZXQgdD0wO3Q8TS5fY29udHJvbENvbW1hbmROYW1lcy5sZW5ndGg7Kyt0KXtpZihlPT1NLl9jb250cm9sQ29tbWFuZE5hbWVzW3RdKXJldHVybiBuZXcgQSh0KX1pZihcIkxeXCI9PWUmJihlPVwiXlwiKSxSLkNhbGxFeGlzdHNXaXRoTmFtZShlKSlyZXR1cm4gUi5DYWxsV2l0aE5hbWUoZSk7aWYoXCItPi0+XCI9PWUpcmV0dXJuIEEuUG9wVHVubmVsKCk7aWYoXCJ+cmV0XCI9PWUpcmV0dXJuIEEuUG9wRnVuY3Rpb24oKTtpZihcInZvaWRcIj09ZSlyZXR1cm4gbmV3IEx9aWYoXCJvYmplY3RcIj09dHlwZW9mIHQmJiFBcnJheS5pc0FycmF5KHQpKXtsZXQgbixpPXQ7aWYoaVtcIl4tPlwiXSlyZXR1cm4gbj1pW1wiXi0+XCJdLG5ldyBQKG5ldyBlKG4udG9TdHJpbmcoKSkpO2lmKGlbXCJedmFyXCJdKXtuPWlbXCJedmFyXCJdO2xldCB0PW5ldyB3KG4udG9TdHJpbmcoKSk7cmV0dXJuXCJjaVwiaW4gaSYmKG49aS5jaSx0LmNvbnRleHRJbmRleD1wYXJzZUludChuKSksdH1sZXQgYT0hMSxzPSExLGw9ci5GdW5jdGlvbixvPSExO2lmKChuPWlbXCItPlwiXSk/YT0hMDoobj1pW1wiZigpXCJdKT8oYT0hMCxzPSEwLGw9ci5GdW5jdGlvbik6KG49aVtcIi0+dC0+XCJdKT8oYT0hMCxzPSEwLGw9ci5UdW5uZWwpOihuPWlbXCJ4KClcIl0pJiYoYT0hMCxvPSEwLHM9ITEsbD1yLkZ1bmN0aW9uKSxhKXtsZXQgdD1uZXcgazt0LnB1c2hlc1RvU3RhY2s9cyx0LnN0YWNrUHVzaFR5cGU9bCx0LmlzRXh0ZXJuYWw9bztsZXQgZT1uLnRvU3RyaW5nKCk7cmV0dXJuKG49aS52YXIpP3QudmFyaWFibGVEaXZlcnROYW1lPWU6dC50YXJnZXRQYXRoU3RyaW5nPWUsdC5pc0NvbmRpdGlvbmFsPSEhaS5jLG8mJihuPWkuZXhBcmdzKSYmKHQuZXh0ZXJuYWxBcmdzPXBhcnNlSW50KG4pKSx0fWlmKG49aVtcIipcIl0pe2xldCB0PW5ldyBXO3JldHVybiB0LnBhdGhTdHJpbmdPbkNob2ljZT1uLnRvU3RyaW5nKCksKG49aS5mbGcpJiYodC5mbGFncz1wYXJzZUludChuKSksdH1pZihuPWlbXCJWQVI/XCJdKXJldHVybiBuZXcgRihuLnRvU3RyaW5nKCkpO2lmKG49aVtcIkNOVD9cIl0pe2xldCB0PW5ldyBGO3JldHVybiB0LnBhdGhTdHJpbmdGb3JDb3VudD1uLnRvU3RyaW5nKCksdH1sZXQgdT0hMSxoPSExO2lmKChuPWlbXCJWQVI9XCJdKT8odT0hMCxoPSEwKToobj1pW1widGVtcD1cIl0pJiYodT0hMCxoPSExKSx1KXtsZXQgdD1uLnRvU3RyaW5nKCksZT0haS5yZSxyPW5ldyBWKHQsZSk7cmV0dXJuIHIuaXNHbG9iYWw9aCxyfWlmKHZvaWQgMCE9PWlbXCIjXCJdKXJldHVybiBuPWlbXCIjXCJdLG5ldyBqKG4udG9TdHJpbmcoKSk7aWYobj1pLmxpc3Qpe2xldCB0PW4sZT1uZXcgZztpZihuPWkub3JpZ2lucyl7bGV0IHQ9bjtlLlNldEluaXRpYWxPcmlnaW5OYW1lcyh0KX1mb3IobGV0IG4gaW4gdClpZih0Lmhhc093blByb3BlcnR5KG4pKXtsZXQgaT10W25dLHI9bmV3IGYobiksYT1wYXJzZUludChpKTtlLkFkZChyLGEpfXJldHVybiBuZXcgTyhlKX1pZihudWxsIT1pLm9yaWdpbmFsQ2hvaWNlUGF0aClyZXR1cm4gdGhpcy5KT2JqZWN0VG9DaG9pY2UoaSl9aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdGhpcy5KQXJyYXlUb0NvbnRhaW5lcih0KTtpZihudWxsPT10KXJldHVybiBudWxsO3Rocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjb252ZXJ0IHRva2VuIHRvIHJ1bnRpbWUgb2JqZWN0OiBcIitKU09OLnN0cmluZ2lmeSh0KSl9c3RhdGljIFdyaXRlUnVudGltZUNvbnRhaW5lcih0LGUsbj0hMSl7aWYodC5Xcml0ZUFycmF5U3RhcnQoKSxudWxsPT09ZSlyZXR1cm4gZChcImNvbnRhaW5lclwiKTtmb3IobGV0IG4gb2YgZS5jb250ZW50KXRoaXMuV3JpdGVSdW50aW1lT2JqZWN0KHQsbik7bGV0IGk9ZS5uYW1lZE9ubHlDb250ZW50LHI9ZS5jb3VudEZsYWdzLHM9bnVsbCE9ZS5uYW1lJiYhbixsPW51bGwhPWl8fHI+MHx8cztpZihsJiZ0LldyaXRlT2JqZWN0U3RhcnQoKSxudWxsIT1pKWZvcihsZXRbZSxuXW9mIGkpe2xldCBpPWUscj1hKG4sTik7dC5Xcml0ZVByb3BlcnR5U3RhcnQoaSksdGhpcy5Xcml0ZVJ1bnRpbWVDb250YWluZXIodCxyLCEwKSx0LldyaXRlUHJvcGVydHlFbmQoKX1zJiZ0LldyaXRlUHJvcGVydHkoXCIjblwiLGUubmFtZSksbD90LldyaXRlT2JqZWN0RW5kKCk6dC5Xcml0ZU51bGwoKSx0LldyaXRlQXJyYXlFbmQoKX1zdGF0aWMgSkFycmF5VG9Db250YWluZXIodCl7bGV0IGU9bmV3IE47ZS5jb250ZW50PXRoaXMuSkFycmF5VG9SdW50aW1lT2JqTGlzdCh0LCEwKTtsZXQgbj10W3QubGVuZ3RoLTFdO2lmKG51bGwhPW4pe2xldCB0PW5ldyBNYXA7Zm9yKGxldCBpIGluIG4paWYoXCIjZlwiPT1pKWUuY291bnRGbGFncz1wYXJzZUludChuW2ldKTtlbHNlIGlmKFwiI25cIj09aSllLm5hbWU9bltpXS50b1N0cmluZygpO2Vsc2V7bGV0IGU9dGhpcy5KVG9rZW5Ub1J1bnRpbWVPYmplY3QobltpXSkscj1hKGUsTik7ciYmKHIubmFtZT1pKSx0LnNldChpLGUpfWUubmFtZWRPbmx5Q29udGVudD10fXJldHVybiBlfXN0YXRpYyBKT2JqZWN0VG9DaG9pY2UodCl7bGV0IGU9bmV3IEQ7cmV0dXJuIGUudGV4dD10LnRleHQudG9TdHJpbmcoKSxlLmluZGV4PXBhcnNlSW50KHQuaW5kZXgpLGUuc291cmNlUGF0aD10Lm9yaWdpbmFsQ2hvaWNlUGF0aC50b1N0cmluZygpLGUub3JpZ2luYWxUaHJlYWRJbmRleD1wYXJzZUludCh0Lm9yaWdpbmFsVGhyZWFkSW5kZXgpLGUucGF0aFN0cmluZ09uQ2hvaWNlPXQudGFyZ2V0UGF0aC50b1N0cmluZygpLGV9c3RhdGljIFdyaXRlQ2hvaWNlKHQsZSl7dC5Xcml0ZU9iamVjdFN0YXJ0KCksdC5Xcml0ZVByb3BlcnR5KFwidGV4dFwiLGUudGV4dCksdC5Xcml0ZUludFByb3BlcnR5KFwiaW5kZXhcIixlLmluZGV4KSx0LldyaXRlUHJvcGVydHkoXCJvcmlnaW5hbENob2ljZVBhdGhcIixlLnNvdXJjZVBhdGgpLHQuV3JpdGVJbnRQcm9wZXJ0eShcIm9yaWdpbmFsVGhyZWFkSW5kZXhcIixlLm9yaWdpbmFsVGhyZWFkSW5kZXgpLHQuV3JpdGVQcm9wZXJ0eShcInRhcmdldFBhdGhcIixlLnBhdGhTdHJpbmdPbkNob2ljZSksdC5Xcml0ZU9iamVjdEVuZCgpfXN0YXRpYyBXcml0ZUlua0xpc3QodCxlKXtsZXQgbj1lLnZhbHVlO2lmKG51bGw9PT1uKXJldHVybiBkKFwicmF3TGlzdFwiKTt0LldyaXRlT2JqZWN0U3RhcnQoKSx0LldyaXRlUHJvcGVydHlTdGFydChcImxpc3RcIiksdC5Xcml0ZU9iamVjdFN0YXJ0KCk7Zm9yKGxldFtlLGldb2Ygbil7bGV0IG49Zi5mcm9tU2VyaWFsaXplZEtleShlKSxyPWk7aWYobnVsbD09PW4uaXRlbU5hbWUpcmV0dXJuIGQoXCJpdGVtLml0ZW1OYW1lXCIpO3QuV3JpdGVQcm9wZXJ0eU5hbWVTdGFydCgpLHQuV3JpdGVQcm9wZXJ0eU5hbWVJbm5lcihuLm9yaWdpbk5hbWU/bi5vcmlnaW5OYW1lOlwiP1wiKSx0LldyaXRlUHJvcGVydHlOYW1lSW5uZXIoXCIuXCIpLHQuV3JpdGVQcm9wZXJ0eU5hbWVJbm5lcihuLml0ZW1OYW1lKSx0LldyaXRlUHJvcGVydHlOYW1lRW5kKCksdC5Xcml0ZShyKSx0LldyaXRlUHJvcGVydHlFbmQoKX1pZih0LldyaXRlT2JqZWN0RW5kKCksdC5Xcml0ZVByb3BlcnR5RW5kKCksMD09bi5Db3VudCYmbnVsbCE9bi5vcmlnaW5OYW1lcyYmbi5vcmlnaW5OYW1lcy5sZW5ndGg+MCl7dC5Xcml0ZVByb3BlcnR5U3RhcnQoXCJvcmlnaW5zXCIpLHQuV3JpdGVBcnJheVN0YXJ0KCk7Zm9yKGxldCBlIG9mIG4ub3JpZ2luTmFtZXMpdC5Xcml0ZShlKTt0LldyaXRlQXJyYXlFbmQoKSx0LldyaXRlUHJvcGVydHlFbmQoKX10LldyaXRlT2JqZWN0RW5kKCl9c3RhdGljIExpc3REZWZpbml0aW9uc1RvSlRva2VuKHQpe2xldCBlPXt9O2ZvcihsZXQgbiBvZiB0Lmxpc3RzKXtsZXQgdD17fTtmb3IobGV0W2UsaV1vZiBuLml0ZW1zKXtsZXQgbj1mLmZyb21TZXJpYWxpemVkS2V5KGUpO2lmKG51bGw9PT1uLml0ZW1OYW1lKXJldHVybiBkKFwiaXRlbS5pdGVtTmFtZVwiKTt0W24uaXRlbU5hbWVdPWl9ZVtuLm5hbWVdPXR9cmV0dXJuIGV9c3RhdGljIEpUb2tlblRvTGlzdERlZmluaXRpb25zKHQpe2xldCBlPXQsbj1bXTtmb3IobGV0IHQgaW4gZSlpZihlLmhhc093blByb3BlcnR5KHQpKXtsZXQgaT10LnRvU3RyaW5nKCkscj1lW3RdLGE9bmV3IE1hcDtmb3IobGV0IG4gaW4gcilpZihlLmhhc093blByb3BlcnR5KHQpKXtsZXQgdD1yW25dO2Euc2V0KG4scGFyc2VJbnQodCkpfWxldCBzPW5ldyBHKGksYSk7bi5wdXNoKHMpfXJldHVybiBuZXcgQihuKX19TS5fY29udHJvbENvbW1hbmROYW1lcz0oKCk9PntsZXQgdD1bXTt0W0EuQ29tbWFuZFR5cGUuRXZhbFN0YXJ0XT1cImV2XCIsdFtBLkNvbW1hbmRUeXBlLkV2YWxPdXRwdXRdPVwib3V0XCIsdFtBLkNvbW1hbmRUeXBlLkV2YWxFbmRdPVwiL2V2XCIsdFtBLkNvbW1hbmRUeXBlLkR1cGxpY2F0ZV09XCJkdVwiLHRbQS5Db21tYW5kVHlwZS5Qb3BFdmFsdWF0ZWRWYWx1ZV09XCJwb3BcIix0W0EuQ29tbWFuZFR5cGUuUG9wRnVuY3Rpb25dPVwifnJldFwiLHRbQS5Db21tYW5kVHlwZS5Qb3BUdW5uZWxdPVwiLT4tPlwiLHRbQS5Db21tYW5kVHlwZS5CZWdpblN0cmluZ109XCJzdHJcIix0W0EuQ29tbWFuZFR5cGUuRW5kU3RyaW5nXT1cIi9zdHJcIix0W0EuQ29tbWFuZFR5cGUuTm9PcF09XCJub3BcIix0W0EuQ29tbWFuZFR5cGUuQ2hvaWNlQ291bnRdPVwiY2hvaWNlQ250XCIsdFtBLkNvbW1hbmRUeXBlLlR1cm5zXT1cInR1cm5cIix0W0EuQ29tbWFuZFR5cGUuVHVybnNTaW5jZV09XCJ0dXJuc1wiLHRbQS5Db21tYW5kVHlwZS5SZWFkQ291bnRdPVwicmVhZGNcIix0W0EuQ29tbWFuZFR5cGUuUmFuZG9tXT1cInJuZFwiLHRbQS5Db21tYW5kVHlwZS5TZWVkUmFuZG9tXT1cInNybmRcIix0W0EuQ29tbWFuZFR5cGUuVmlzaXRJbmRleF09XCJ2aXNpdFwiLHRbQS5Db21tYW5kVHlwZS5TZXF1ZW5jZVNodWZmbGVJbmRleF09XCJzZXFcIix0W0EuQ29tbWFuZFR5cGUuU3RhcnRUaHJlYWRdPVwidGhyZWFkXCIsdFtBLkNvbW1hbmRUeXBlLkRvbmVdPVwiZG9uZVwiLHRbQS5Db21tYW5kVHlwZS5FbmRdPVwiZW5kXCIsdFtBLkNvbW1hbmRUeXBlLkxpc3RGcm9tSW50XT1cImxpc3RJbnRcIix0W0EuQ29tbWFuZFR5cGUuTGlzdFJhbmdlXT1cInJhbmdlXCIsdFtBLkNvbW1hbmRUeXBlLkxpc3RSYW5kb21dPVwibHJuZFwiO2ZvcihsZXQgZT0wO2U8QS5Db21tYW5kVHlwZS5UT1RBTF9WQUxVRVM7KytlKWlmKG51bGw9PXRbZV0pdGhyb3cgbmV3IEVycm9yKFwiQ29udHJvbCBjb21tYW5kIG5vdCBhY2NvdW50ZWQgZm9yIGluIHNlcmlhbGlzYXRpb25cIik7cmV0dXJuIHR9KSgpO2NsYXNzIHF7Y29uc3RydWN0b3IoKXtpZih0aGlzLl90aHJlYWRDb3VudGVyPTAsdGhpcy5fc3RhcnRPZlJvb3Q9SS5OdWxsLGFyZ3VtZW50c1swXWluc3RhbmNlb2YgWCl7bGV0IHQ9YXJndW1lbnRzWzBdO3RoaXMuX3N0YXJ0T2ZSb290PUkuU3RhcnRPZih0LnJvb3RDb250ZW50Q29udGFpbmVyKSx0aGlzLlJlc2V0KCl9ZWxzZXtsZXQgdD1hcmd1bWVudHNbMF07dGhpcy5fdGhyZWFkcz1bXTtmb3IobGV0IGUgb2YgdC5fdGhyZWFkcyl0aGlzLl90aHJlYWRzLnB1c2goZS5Db3B5KCkpO3RoaXMuX3RocmVhZENvdW50ZXI9dC5fdGhyZWFkQ291bnRlcix0aGlzLl9zdGFydE9mUm9vdD10Ll9zdGFydE9mUm9vdH19Z2V0IGVsZW1lbnRzKCl7cmV0dXJuIHRoaXMuY2FsbFN0YWNrfWdldCBkZXB0aCgpe3JldHVybiB0aGlzLmVsZW1lbnRzLmxlbmd0aH1nZXQgY3VycmVudEVsZW1lbnQoKXtsZXQgdD10aGlzLl90aHJlYWRzW3RoaXMuX3RocmVhZHMubGVuZ3RoLTFdLmNhbGxzdGFjaztyZXR1cm4gdFt0Lmxlbmd0aC0xXX1nZXQgY3VycmVudEVsZW1lbnRJbmRleCgpe3JldHVybiB0aGlzLmNhbGxTdGFjay5sZW5ndGgtMX1nZXQgY3VycmVudFRocmVhZCgpe3JldHVybiB0aGlzLl90aHJlYWRzW3RoaXMuX3RocmVhZHMubGVuZ3RoLTFdfXNldCBjdXJyZW50VGhyZWFkKHQpe24uQXNzZXJ0KDE9PXRoaXMuX3RocmVhZHMubGVuZ3RoLFwiU2hvdWxkbid0IGJlIGRpcmVjdGx5IHNldHRpbmcgdGhlIGN1cnJlbnQgdGhyZWFkIHdoZW4gd2UgaGF2ZSBhIHN0YWNrIG9mIHRoZW1cIiksdGhpcy5fdGhyZWFkcy5sZW5ndGg9MCx0aGlzLl90aHJlYWRzLnB1c2godCl9Z2V0IGNhblBvcCgpe3JldHVybiB0aGlzLmNhbGxTdGFjay5sZW5ndGg+MX1SZXNldCgpe3RoaXMuX3RocmVhZHM9W10sdGhpcy5fdGhyZWFkcy5wdXNoKG5ldyBxLlRocmVhZCksdGhpcy5fdGhyZWFkc1swXS5jYWxsc3RhY2sucHVzaChuZXcgcS5FbGVtZW50KHIuVHVubmVsLHRoaXMuX3N0YXJ0T2ZSb290KSl9U2V0SnNvblRva2VuKHQsZSl7dGhpcy5fdGhyZWFkcy5sZW5ndGg9MDtsZXQgbj10LnRocmVhZHM7Zm9yKGxldCB0IG9mIG4pe2xldCBuPXQsaT1uZXcgcS5UaHJlYWQobixlKTt0aGlzLl90aHJlYWRzLnB1c2goaSl9dGhpcy5fdGhyZWFkQ291bnRlcj1wYXJzZUludCh0LnRocmVhZENvdW50ZXIpLHRoaXMuX3N0YXJ0T2ZSb290PUkuU3RhcnRPZihlLnJvb3RDb250ZW50Q29udGFpbmVyKX1Xcml0ZUpzb24odCl7dC5Xcml0ZU9iamVjdCh0PT57dC5Xcml0ZVByb3BlcnR5U3RhcnQoXCJ0aHJlYWRzXCIpLHQuV3JpdGVBcnJheVN0YXJ0KCk7Zm9yKGxldCBlIG9mIHRoaXMuX3RocmVhZHMpZS5Xcml0ZUpzb24odCk7dC5Xcml0ZUFycmF5RW5kKCksdC5Xcml0ZVByb3BlcnR5RW5kKCksdC5Xcml0ZVByb3BlcnR5U3RhcnQoXCJ0aHJlYWRDb3VudGVyXCIpLHQuV3JpdGVJbnQodGhpcy5fdGhyZWFkQ291bnRlciksdC5Xcml0ZVByb3BlcnR5RW5kKCl9KX1QdXNoVGhyZWFkKCl7bGV0IHQ9dGhpcy5jdXJyZW50VGhyZWFkLkNvcHkoKTt0aGlzLl90aHJlYWRDb3VudGVyKyssdC50aHJlYWRJbmRleD10aGlzLl90aHJlYWRDb3VudGVyLHRoaXMuX3RocmVhZHMucHVzaCh0KX1Gb3JrVGhyZWFkKCl7bGV0IHQ9dGhpcy5jdXJyZW50VGhyZWFkLkNvcHkoKTtyZXR1cm4gdGhpcy5fdGhyZWFkQ291bnRlcisrLHQudGhyZWFkSW5kZXg9dGhpcy5fdGhyZWFkQ291bnRlcix0fVBvcFRocmVhZCgpe2lmKCF0aGlzLmNhblBvcFRocmVhZCl0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBwb3AgdGhyZWFkXCIpO3RoaXMuX3RocmVhZHMuc3BsaWNlKHRoaXMuX3RocmVhZHMuaW5kZXhPZih0aGlzLmN1cnJlbnRUaHJlYWQpLDEpfWdldCBjYW5Qb3BUaHJlYWQoKXtyZXR1cm4gdGhpcy5fdGhyZWFkcy5sZW5ndGg+MSYmIXRoaXMuZWxlbWVudElzRXZhbHVhdGVGcm9tR2FtZX1nZXQgZWxlbWVudElzRXZhbHVhdGVGcm9tR2FtZSgpe3JldHVybiB0aGlzLmN1cnJlbnRFbGVtZW50LnR5cGU9PXIuRnVuY3Rpb25FdmFsdWF0aW9uRnJvbUdhbWV9UHVzaCh0LGU9MCxuPTApe2xldCBpPW5ldyBxLkVsZW1lbnQodCx0aGlzLmN1cnJlbnRFbGVtZW50LmN1cnJlbnRQb2ludGVyLCExKTtpLmV2YWx1YXRpb25TdGFja0hlaWdodFdoZW5QdXNoZWQ9ZSxpLmZ1bmN0aW9uU3RhcnRJbk91dHB1dFN0cmVhbT1uLHRoaXMuY2FsbFN0YWNrLnB1c2goaSl9Q2FuUG9wKHQ9bnVsbCl7cmV0dXJuISF0aGlzLmNhblBvcCYmKG51bGw9PXR8fHRoaXMuY3VycmVudEVsZW1lbnQudHlwZT09dCl9UG9wKHQ9bnVsbCl7aWYoIXRoaXMuQ2FuUG9wKHQpKXRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgcHVzaC9wb3AgaW4gQ2FsbHN0YWNrXCIpO3RoaXMuY2FsbFN0YWNrLnBvcCgpfUdldFRlbXBvcmFyeVZhcmlhYmxlV2l0aE5hbWUodCxlPS0xKXstMT09ZSYmKGU9dGhpcy5jdXJyZW50RWxlbWVudEluZGV4KzEpO2xldCBuPXkodGhpcy5jYWxsU3RhY2tbZS0xXS50ZW1wb3JhcnlWYXJpYWJsZXMsdCxudWxsKTtyZXR1cm4gbi5leGlzdHM/bi5yZXN1bHQ6bnVsbH1TZXRUZW1wb3JhcnlWYXJpYWJsZSh0LGUsbixpPS0xKXstMT09aSYmKGk9dGhpcy5jdXJyZW50RWxlbWVudEluZGV4KzEpO2xldCByPXRoaXMuY2FsbFN0YWNrW2ktMV07aWYoIW4mJiFyLnRlbXBvcmFyeVZhcmlhYmxlcy5nZXQodCkpdGhyb3cgbmV3IFMoXCJDb3VsZCBub3QgZmluZCB0ZW1wb3JhcnkgdmFyaWFibGUgdG8gc2V0OiBcIit0KTtsZXQgYT15KHIudGVtcG9yYXJ5VmFyaWFibGVzLHQsbnVsbCk7YS5leGlzdHMmJk8uUmV0YWluTGlzdE9yaWdpbnNGb3JBc3NpZ25tZW50KGEucmVzdWx0LGUpLHIudGVtcG9yYXJ5VmFyaWFibGVzLnNldCh0LGUpfUNvbnRleHRGb3JWYXJpYWJsZU5hbWVkKHQpe3JldHVybiB0aGlzLmN1cnJlbnRFbGVtZW50LnRlbXBvcmFyeVZhcmlhYmxlcy5nZXQodCk/dGhpcy5jdXJyZW50RWxlbWVudEluZGV4KzE6MH1UaHJlYWRXaXRoSW5kZXgodCl7bGV0IGU9dGhpcy5fdGhyZWFkcy5maWx0ZXIoZT0+e2lmKGUudGhyZWFkSW5kZXg9PXQpcmV0dXJuIGV9KTtyZXR1cm4gZS5sZW5ndGg+MD9lWzBdOm51bGx9Z2V0IGNhbGxTdGFjaygpe3JldHVybiB0aGlzLmN1cnJlbnRUaHJlYWQuY2FsbHN0YWNrfWdldCBjYWxsU3RhY2tUcmFjZSgpe2xldCB0PW5ldyBtO2ZvcihsZXQgZT0wO2U8dGhpcy5fdGhyZWFkcy5sZW5ndGg7ZSsrKXtsZXQgbj10aGlzLl90aHJlYWRzW2VdLGk9ZT09dGhpcy5fdGhyZWFkcy5sZW5ndGgtMTt0LkFwcGVuZEZvcm1hdChcIj09PSBUSFJFQUQgezB9L3sxfSB7Mn09PT1cXG5cIixlKzEsdGhpcy5fdGhyZWFkcy5sZW5ndGgsaT9cIihjdXJyZW50KSBcIjpcIlwiKTtmb3IobGV0IGU9MDtlPG4uY2FsbHN0YWNrLmxlbmd0aDtlKyspe24uY2FsbHN0YWNrW2VdLnR5cGU9PXIuRnVuY3Rpb24/dC5BcHBlbmQoXCIgIFtGVU5DVElPTl0gXCIpOnQuQXBwZW5kKFwiICBbVFVOTkVMXSBcIik7bGV0IGk9bi5jYWxsc3RhY2tbZV0uY3VycmVudFBvaW50ZXI7aWYoIWkuaXNOdWxsKXtpZih0LkFwcGVuZChcIjxTT01FV0hFUkUgSU4gXCIpLG51bGw9PT1pLmNvbnRhaW5lcilyZXR1cm4gZChcInBvaW50ZXIuY29udGFpbmVyXCIpO3QuQXBwZW5kKGkuY29udGFpbmVyLnBhdGgudG9TdHJpbmcoKSksdC5BcHBlbmRMaW5lKFwiPlwiKX19fXJldHVybiB0LnRvU3RyaW5nKCl9fSFmdW5jdGlvbih0KXtjbGFzcyBue2NvbnN0cnVjdG9yKHQsZSxuPSExKXt0aGlzLmV2YWx1YXRpb25TdGFja0hlaWdodFdoZW5QdXNoZWQ9MCx0aGlzLmZ1bmN0aW9uU3RhcnRJbk91dHB1dFN0cmVhbT0wLHRoaXMuY3VycmVudFBvaW50ZXI9ZS5jb3B5KCksdGhpcy5pbkV4cHJlc3Npb25FdmFsdWF0aW9uPW4sdGhpcy50ZW1wb3JhcnlWYXJpYWJsZXM9bmV3IE1hcCx0aGlzLnR5cGU9dH1Db3B5KCl7bGV0IHQ9bmV3IG4odGhpcy50eXBlLHRoaXMuY3VycmVudFBvaW50ZXIsdGhpcy5pbkV4cHJlc3Npb25FdmFsdWF0aW9uKTtyZXR1cm4gdC50ZW1wb3JhcnlWYXJpYWJsZXM9bmV3IE1hcCh0aGlzLnRlbXBvcmFyeVZhcmlhYmxlcyksdC5ldmFsdWF0aW9uU3RhY2tIZWlnaHRXaGVuUHVzaGVkPXRoaXMuZXZhbHVhdGlvblN0YWNrSGVpZ2h0V2hlblB1c2hlZCx0LmZ1bmN0aW9uU3RhcnRJbk91dHB1dFN0cmVhbT10aGlzLmZ1bmN0aW9uU3RhcnRJbk91dHB1dFN0cmVhbSx0fX10LkVsZW1lbnQ9bjtjbGFzcyBpe2NvbnN0cnVjdG9yKCl7aWYodGhpcy50aHJlYWRJbmRleD0wLHRoaXMucHJldmlvdXNQb2ludGVyPUkuTnVsbCx0aGlzLmNhbGxzdGFjaz1bXSxhcmd1bWVudHNbMF0mJmFyZ3VtZW50c1sxXSl7bGV0IHQ9YXJndW1lbnRzWzBdLGk9YXJndW1lbnRzWzFdO3RoaXMudGhyZWFkSW5kZXg9cGFyc2VJbnQodC50aHJlYWRJbmRleCk7bGV0IHI9dC5jYWxsc3RhY2s7Zm9yKGxldCB0IG9mIHIpe2xldCByLGE9dCxzPXBhcnNlSW50KGEudHlwZSksbD1JLk51bGwsbz1hLmNQYXRoO2lmKHZvaWQgMCE9PW8pe3I9by50b1N0cmluZygpO2xldCB0PWkuQ29udGVudEF0UGF0aChuZXcgZShyKSk7aWYobC5jb250YWluZXI9dC5jb250YWluZXIsbC5pbmRleD1wYXJzZUludChhLmlkeCksbnVsbD09dC5vYmopdGhyb3cgbmV3IEVycm9yKFwiV2hlbiBsb2FkaW5nIHN0YXRlLCBpbnRlcm5hbCBzdG9yeSBsb2NhdGlvbiBjb3VsZG4ndCBiZSBmb3VuZDogXCIrcitcIi4gSGFzIHRoZSBzdG9yeSBjaGFuZ2VkIHNpbmNlIHRoaXMgc2F2ZSBkYXRhIHdhcyBjcmVhdGVkP1wiKTtpZih0LmFwcHJveGltYXRlKXtpZihudWxsPT09bC5jb250YWluZXIpcmV0dXJuIGQoXCJwb2ludGVyLmNvbnRhaW5lclwiKTtpLldhcm5pbmcoXCJXaGVuIGxvYWRpbmcgc3RhdGUsIGV4YWN0IGludGVybmFsIHN0b3J5IGxvY2F0aW9uIGNvdWxkbid0IGJlIGZvdW5kOiAnXCIrcitcIicsIHNvIGl0IHdhcyBhcHByb3hpbWF0ZWQgdG8gJ1wiK2wuY29udGFpbmVyLnBhdGgudG9TdHJpbmcoKStcIicgdG8gcmVjb3Zlci4gSGFzIHRoZSBzdG9yeSBjaGFuZ2VkIHNpbmNlIHRoaXMgc2F2ZSBkYXRhIHdhcyBjcmVhdGVkP1wiKX19bGV0IHU9ISFhLmV4cCxoPW5ldyBuKHMsbCx1KSxjPWEudGVtcDt2b2lkIDAhPT1jP2gudGVtcG9yYXJ5VmFyaWFibGVzPU0uSk9iamVjdFRvRGljdGlvbmFyeVJ1bnRpbWVPYmpzKGMpOmgudGVtcG9yYXJ5VmFyaWFibGVzLmNsZWFyKCksdGhpcy5jYWxsc3RhY2sucHVzaChoKX1sZXQgYT10LnByZXZpb3VzQ29udGVudE9iamVjdDtpZih2b2lkIDAhPT1hKXtsZXQgdD1uZXcgZShhLnRvU3RyaW5nKCkpO3RoaXMucHJldmlvdXNQb2ludGVyPWkuUG9pbnRlckF0UGF0aCh0KX19fUNvcHkoKXtsZXQgdD1uZXcgaTt0LnRocmVhZEluZGV4PXRoaXMudGhyZWFkSW5kZXg7Zm9yKGxldCBlIG9mIHRoaXMuY2FsbHN0YWNrKXQuY2FsbHN0YWNrLnB1c2goZS5Db3B5KCkpO3JldHVybiB0LnByZXZpb3VzUG9pbnRlcj10aGlzLnByZXZpb3VzUG9pbnRlci5jb3B5KCksdH1Xcml0ZUpzb24odCl7dC5Xcml0ZU9iamVjdFN0YXJ0KCksdC5Xcml0ZVByb3BlcnR5U3RhcnQoXCJjYWxsc3RhY2tcIiksdC5Xcml0ZUFycmF5U3RhcnQoKTtmb3IobGV0IGUgb2YgdGhpcy5jYWxsc3RhY2spe2lmKHQuV3JpdGVPYmplY3RTdGFydCgpLCFlLmN1cnJlbnRQb2ludGVyLmlzTnVsbCl7aWYobnVsbD09PWUuY3VycmVudFBvaW50ZXIuY29udGFpbmVyKXJldHVybiBkKFwiZWwuY3VycmVudFBvaW50ZXIuY29udGFpbmVyXCIpO3QuV3JpdGVQcm9wZXJ0eShcImNQYXRoXCIsZS5jdXJyZW50UG9pbnRlci5jb250YWluZXIucGF0aC5jb21wb25lbnRzU3RyaW5nKSx0LldyaXRlSW50UHJvcGVydHkoXCJpZHhcIixlLmN1cnJlbnRQb2ludGVyLmluZGV4KX10LldyaXRlUHJvcGVydHkoXCJleHBcIixlLmluRXhwcmVzc2lvbkV2YWx1YXRpb24pLHQuV3JpdGVJbnRQcm9wZXJ0eShcInR5cGVcIixlLnR5cGUpLGUudGVtcG9yYXJ5VmFyaWFibGVzLnNpemU+MCYmKHQuV3JpdGVQcm9wZXJ0eVN0YXJ0KFwidGVtcFwiKSxNLldyaXRlRGljdGlvbmFyeVJ1bnRpbWVPYmpzKHQsZS50ZW1wb3JhcnlWYXJpYWJsZXMpLHQuV3JpdGVQcm9wZXJ0eUVuZCgpKSx0LldyaXRlT2JqZWN0RW5kKCl9aWYodC5Xcml0ZUFycmF5RW5kKCksdC5Xcml0ZVByb3BlcnR5RW5kKCksdC5Xcml0ZUludFByb3BlcnR5KFwidGhyZWFkSW5kZXhcIix0aGlzLnRocmVhZEluZGV4KSwhdGhpcy5wcmV2aW91c1BvaW50ZXIuaXNOdWxsKXtsZXQgZT10aGlzLnByZXZpb3VzUG9pbnRlci5SZXNvbHZlKCk7aWYobnVsbD09PWUpcmV0dXJuIGQoXCJ0aGlzLnByZXZpb3VzUG9pbnRlci5SZXNvbHZlKClcIik7dC5Xcml0ZVByb3BlcnR5KFwicHJldmlvdXNDb250ZW50T2JqZWN0XCIsZS5wYXRoLnRvU3RyaW5nKCkpfXQuV3JpdGVPYmplY3RFbmQoKX19dC5UaHJlYWQ9aX0ocXx8KHE9e30pKTtjbGFzcyBKe2NvbnN0cnVjdG9yKHQsZSl7dGhpcy52YXJpYWJsZUNoYW5nZWRFdmVudENhbGxiYWNrcz1bXSx0aGlzLnBhdGNoPW51bGwsdGhpcy5fYmF0Y2hPYnNlcnZpbmdWYXJpYWJsZUNoYW5nZXM9ITEsdGhpcy5fZGVmYXVsdEdsb2JhbFZhcmlhYmxlcz1uZXcgTWFwLHRoaXMuX2NoYW5nZWRWYXJpYWJsZXNGb3JCYXRjaE9icz1uZXcgU2V0LHRoaXMuX2dsb2JhbFZhcmlhYmxlcz1uZXcgTWFwLHRoaXMuX2NhbGxTdGFjaz10LHRoaXMuX2xpc3REZWZzT3JpZ2luPWU7dHJ5e3JldHVybiBuZXcgUHJveHkodGhpcyx7Z2V0Oih0LGUpPT5lIGluIHQ/dFtlXTp0LiQoZSksc2V0Oih0LGUsbik9PihlIGluIHQ/dFtlXT1uOnQuJChlLG4pLCEwKX0pfWNhdGNoKHQpe319dmFyaWFibGVDaGFuZ2VkRXZlbnQodCxlKXtmb3IobGV0IG4gb2YgdGhpcy52YXJpYWJsZUNoYW5nZWRFdmVudENhbGxiYWNrcyluKHQsZSl9Z2V0IGJhdGNoT2JzZXJ2aW5nVmFyaWFibGVDaGFuZ2VzKCl7cmV0dXJuIHRoaXMuX2JhdGNoT2JzZXJ2aW5nVmFyaWFibGVDaGFuZ2VzfXNldCBiYXRjaE9ic2VydmluZ1ZhcmlhYmxlQ2hhbmdlcyh0KXtpZih0aGlzLl9iYXRjaE9ic2VydmluZ1ZhcmlhYmxlQ2hhbmdlcz10LHQpdGhpcy5fY2hhbmdlZFZhcmlhYmxlc0ZvckJhdGNoT2JzPW5ldyBTZXQ7ZWxzZSBpZihudWxsIT10aGlzLl9jaGFuZ2VkVmFyaWFibGVzRm9yQmF0Y2hPYnMpe2ZvcihsZXQgdCBvZiB0aGlzLl9jaGFuZ2VkVmFyaWFibGVzRm9yQmF0Y2hPYnMpe2xldCBlPXRoaXMuX2dsb2JhbFZhcmlhYmxlcy5nZXQodCk7ZT90aGlzLnZhcmlhYmxlQ2hhbmdlZEV2ZW50KHQsZSk6ZChcImN1cnJlbnRWYWx1ZVwiKX10aGlzLl9jaGFuZ2VkVmFyaWFibGVzRm9yQmF0Y2hPYnM9bnVsbH19Z2V0IGNhbGxTdGFjaygpe3JldHVybiB0aGlzLl9jYWxsU3RhY2t9c2V0IGNhbGxTdGFjayh0KXt0aGlzLl9jYWxsU3RhY2s9dH0kKHQsZSl7aWYodm9pZCAwPT09ZSl7bGV0IGU9bnVsbDtyZXR1cm4gbnVsbCE9PXRoaXMucGF0Y2gmJihlPXRoaXMucGF0Y2guVHJ5R2V0R2xvYmFsKHQsbnVsbCksZS5leGlzdHMpP2UucmVzdWx0LnZhbHVlT2JqZWN0OihlPXRoaXMuX2dsb2JhbFZhcmlhYmxlcy5nZXQodCksdm9pZCAwPT09ZSYmKGU9dGhpcy5fZGVmYXVsdEdsb2JhbFZhcmlhYmxlcy5nZXQodCkpLHZvaWQgMCE9PWU/ZS52YWx1ZU9iamVjdDpudWxsKX17aWYodm9pZCAwPT09dGhpcy5fZGVmYXVsdEdsb2JhbFZhcmlhYmxlcy5nZXQodCkpdGhyb3cgbmV3IFMoXCJDYW5ub3QgYXNzaWduIHRvIGEgdmFyaWFibGUgKFwiK3QrXCIpIHRoYXQgaGFzbid0IGJlZW4gZGVjbGFyZWQgaW4gdGhlIHN0b3J5XCIpO2xldCBuPXYuQ3JlYXRlKGUpO2lmKG51bGw9PW4pdGhyb3cgbmV3IFMobnVsbD09ZT9cIkNhbm5vdCBwYXNzIG51bGwgdG8gVmFyaWFibGVTdGF0ZVwiOlwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgdG8gVmFyaWFibGVTdGF0ZTogXCIrZS50b1N0cmluZygpKTt0aGlzLlNldEdsb2JhbCh0LG4pfX1BcHBseVBhdGNoKCl7aWYobnVsbD09PXRoaXMucGF0Y2gpcmV0dXJuIGQoXCJ0aGlzLnBhdGNoXCIpO2ZvcihsZXRbdCxlXW9mIHRoaXMucGF0Y2guZ2xvYmFscyl0aGlzLl9nbG9iYWxWYXJpYWJsZXMuc2V0KHQsZSk7aWYobnVsbCE9PXRoaXMuX2NoYW5nZWRWYXJpYWJsZXNGb3JCYXRjaE9icylmb3IobGV0IHQgb2YgdGhpcy5wYXRjaC5jaGFuZ2VkVmFyaWFibGVzKXRoaXMuX2NoYW5nZWRWYXJpYWJsZXNGb3JCYXRjaE9icy5hZGQodCk7dGhpcy5wYXRjaD1udWxsfVNldEpzb25Ub2tlbih0KXt0aGlzLl9nbG9iYWxWYXJpYWJsZXMuY2xlYXIoKTtmb3IobGV0W2Usbl1vZiB0aGlzLl9kZWZhdWx0R2xvYmFsVmFyaWFibGVzKXtsZXQgaT10W2VdO2lmKHZvaWQgMCE9PWkpe2xldCB0PU0uSlRva2VuVG9SdW50aW1lT2JqZWN0KGkpO2lmKG51bGw9PT10KXJldHVybiBkKFwidG9rZW5JbmtPYmplY3RcIik7dGhpcy5fZ2xvYmFsVmFyaWFibGVzLnNldChlLHQpfWVsc2UgdGhpcy5fZ2xvYmFsVmFyaWFibGVzLnNldChlLG4pfX1Xcml0ZUpzb24odCl7dC5Xcml0ZU9iamVjdFN0YXJ0KCk7Zm9yKGxldFtlLG5db2YgdGhpcy5fZ2xvYmFsVmFyaWFibGVzKXtsZXQgaT1lLHI9bjtpZihKLmRvbnRTYXZlRGVmYXVsdFZhbHVlcyYmdGhpcy5fZGVmYXVsdEdsb2JhbFZhcmlhYmxlcy5oYXMoaSkpe2xldCB0PXRoaXMuX2RlZmF1bHRHbG9iYWxWYXJpYWJsZXMuZ2V0KGkpO2lmKHRoaXMuUnVudGltZU9iamVjdHNFcXVhbChyLHQpKWNvbnRpbnVlfXQuV3JpdGVQcm9wZXJ0eVN0YXJ0KGkpLE0uV3JpdGVSdW50aW1lT2JqZWN0KHQsciksdC5Xcml0ZVByb3BlcnR5RW5kKCl9dC5Xcml0ZU9iamVjdEVuZCgpfVJ1bnRpbWVPYmplY3RzRXF1YWwodCxlKXtpZihudWxsPT09dClyZXR1cm4gZChcIm9iajFcIik7aWYobnVsbD09PWUpcmV0dXJuIGQoXCJvYmoyXCIpO2lmKHQuY29uc3RydWN0b3IhPT1lLmNvbnN0cnVjdG9yKXJldHVybiExO2xldCBuPWEodCxiKTtpZihudWxsIT09bilyZXR1cm4gbi52YWx1ZT09PXMoZSxiKS52YWx1ZTtsZXQgaT1hKHQsXyk7aWYobnVsbCE9PWkpcmV0dXJuIGkudmFsdWU9PT1zKGUsXykudmFsdWU7bGV0IHI9YSh0LHYpLGw9YShlLHYpO2lmKG51bGwhPT1yJiZudWxsIT09bClyZXR1cm4gdShyLnZhbHVlT2JqZWN0KSYmdShsLnZhbHVlT2JqZWN0KT9yLnZhbHVlT2JqZWN0LkVxdWFscyhsLnZhbHVlT2JqZWN0KTpyLnZhbHVlT2JqZWN0PT09bC52YWx1ZU9iamVjdDt0aHJvdyBuZXcgRXJyb3IoXCJGYXN0Um91Z2hEZWZpbml0ZWx5RXF1YWxzOiBVbnN1cHBvcnRlZCBydW50aW1lIG9iamVjdCB0eXBlOiBcIit0LmNvbnN0cnVjdG9yLm5hbWUpfUdldFZhcmlhYmxlV2l0aE5hbWUodCxlPS0xKXtsZXQgbj10aGlzLkdldFJhd1ZhcmlhYmxlV2l0aE5hbWUodCxlKSxpPWEobix3KTtyZXR1cm4gbnVsbCE9PWkmJihuPXRoaXMuVmFsdWVBdFZhcmlhYmxlUG9pbnRlcihpKSksbn1UcnlHZXREZWZhdWx0VmFyaWFibGVWYWx1ZSh0KXtsZXQgZT15KHRoaXMuX2RlZmF1bHRHbG9iYWxWYXJpYWJsZXMsdCxudWxsKTtyZXR1cm4gZS5leGlzdHM/ZS5yZXN1bHQ6bnVsbH1HbG9iYWxWYXJpYWJsZUV4aXN0c1dpdGhOYW1lKHQpe3JldHVybiB0aGlzLl9nbG9iYWxWYXJpYWJsZXMuaGFzKHQpfHxudWxsIT09dGhpcy5fZGVmYXVsdEdsb2JhbFZhcmlhYmxlcyYmdGhpcy5fZGVmYXVsdEdsb2JhbFZhcmlhYmxlcy5oYXModCl9R2V0UmF3VmFyaWFibGVXaXRoTmFtZSh0LGUpe2xldCBuPW51bGw7aWYoMD09ZXx8LTE9PWUpe2xldCBlPW51bGw7aWYobnVsbCE9PXRoaXMucGF0Y2gmJihlPXRoaXMucGF0Y2guVHJ5R2V0R2xvYmFsKHQsbnVsbCksZS5leGlzdHMpKXJldHVybiBlLnJlc3VsdDtpZihlPXkodGhpcy5fZ2xvYmFsVmFyaWFibGVzLHQsbnVsbCksZS5leGlzdHMpcmV0dXJuIGUucmVzdWx0O2lmKG51bGwhPT10aGlzLl9kZWZhdWx0R2xvYmFsVmFyaWFibGVzJiYoZT15KHRoaXMuX2RlZmF1bHRHbG9iYWxWYXJpYWJsZXMsdCxudWxsKSxlLmV4aXN0cykpcmV0dXJuIGUucmVzdWx0O2lmKG51bGw9PT10aGlzLl9saXN0RGVmc09yaWdpbilyZXR1cm4gZChcIlZhcmlhYmxlc1N0YXRlLl9saXN0RGVmc09yaWdpblwiKTtsZXQgbj10aGlzLl9saXN0RGVmc09yaWdpbi5GaW5kU2luZ2xlSXRlbUxpc3RXaXRoTmFtZSh0KTtpZihuKXJldHVybiBufXJldHVybiBuPXRoaXMuX2NhbGxTdGFjay5HZXRUZW1wb3JhcnlWYXJpYWJsZVdpdGhOYW1lKHQsZSksbn1WYWx1ZUF0VmFyaWFibGVQb2ludGVyKHQpe3JldHVybiB0aGlzLkdldFZhcmlhYmxlV2l0aE5hbWUodC52YXJpYWJsZU5hbWUsdC5jb250ZXh0SW5kZXgpfUFzc2lnbih0LGUpe2xldCBuPXQudmFyaWFibGVOYW1lO2lmKG51bGw9PT1uKXJldHVybiBkKFwibmFtZVwiKTtsZXQgaT0tMSxyPSExO2lmKHI9dC5pc05ld0RlY2xhcmF0aW9uP3QuaXNHbG9iYWw6dGhpcy5HbG9iYWxWYXJpYWJsZUV4aXN0c1dpdGhOYW1lKG4pLHQuaXNOZXdEZWNsYXJhdGlvbil7bGV0IHQ9YShlLHcpO2lmKG51bGwhPT10KXtlPXRoaXMuUmVzb2x2ZVZhcmlhYmxlUG9pbnRlcih0KX19ZWxzZXtsZXQgdD1udWxsO2Rve3Q9YSh0aGlzLkdldFJhd1ZhcmlhYmxlV2l0aE5hbWUobixpKSx3KSxudWxsIT10JiYobj10LnZhcmlhYmxlTmFtZSxpPXQuY29udGV4dEluZGV4LHI9MD09aSl9d2hpbGUobnVsbCE9dCl9cj90aGlzLlNldEdsb2JhbChuLGUpOnRoaXMuX2NhbGxTdGFjay5TZXRUZW1wb3JhcnlWYXJpYWJsZShuLGUsdC5pc05ld0RlY2xhcmF0aW9uLGkpfVNuYXBzaG90RGVmYXVsdEdsb2JhbHMoKXt0aGlzLl9kZWZhdWx0R2xvYmFsVmFyaWFibGVzPW5ldyBNYXAodGhpcy5fZ2xvYmFsVmFyaWFibGVzKX1SZXRhaW5MaXN0T3JpZ2luc0ZvckFzc2lnbm1lbnQodCxlKXtsZXQgbj1zKHQsTyksaT1zKGUsTyk7bi52YWx1ZSYmaS52YWx1ZSYmMD09aS52YWx1ZS5Db3VudCYmaS52YWx1ZS5TZXRJbml0aWFsT3JpZ2luTmFtZXMobi52YWx1ZS5vcmlnaW5OYW1lcyl9U2V0R2xvYmFsKHQsZSl7bGV0IG49bnVsbDtpZihudWxsPT09dGhpcy5wYXRjaCYmKG49eSh0aGlzLl9nbG9iYWxWYXJpYWJsZXMsdCxudWxsKSksbnVsbCE9PXRoaXMucGF0Y2gmJihuPXRoaXMucGF0Y2guVHJ5R2V0R2xvYmFsKHQsbnVsbCksbi5leGlzdHN8fChuPXkodGhpcy5fZ2xvYmFsVmFyaWFibGVzLHQsbnVsbCkpKSxPLlJldGFpbkxpc3RPcmlnaW5zRm9yQXNzaWdubWVudChuLnJlc3VsdCxlKSxudWxsPT09dClyZXR1cm4gZChcInZhcmlhYmxlTmFtZVwiKTtpZihudWxsIT09dGhpcy5wYXRjaD90aGlzLnBhdGNoLlNldEdsb2JhbCh0LGUpOnRoaXMuX2dsb2JhbFZhcmlhYmxlcy5zZXQodCxlKSxudWxsIT09dGhpcy52YXJpYWJsZUNoYW5nZWRFdmVudCYmbnVsbCE9PW4mJmUhPT1uLnJlc3VsdClpZih0aGlzLmJhdGNoT2JzZXJ2aW5nVmFyaWFibGVDaGFuZ2VzKXtpZihudWxsPT09dGhpcy5fY2hhbmdlZFZhcmlhYmxlc0ZvckJhdGNoT2JzKXJldHVybiBkKFwidGhpcy5fY2hhbmdlZFZhcmlhYmxlc0ZvckJhdGNoT2JzXCIpO251bGwhPT10aGlzLnBhdGNoP3RoaXMucGF0Y2guQWRkQ2hhbmdlZFZhcmlhYmxlKHQpOm51bGwhPT10aGlzLl9jaGFuZ2VkVmFyaWFibGVzRm9yQmF0Y2hPYnMmJnRoaXMuX2NoYW5nZWRWYXJpYWJsZXNGb3JCYXRjaE9icy5hZGQodCl9ZWxzZSB0aGlzLnZhcmlhYmxlQ2hhbmdlZEV2ZW50KHQsZSl9UmVzb2x2ZVZhcmlhYmxlUG9pbnRlcih0KXtsZXQgZT10LmNvbnRleHRJbmRleDstMT09ZSYmKGU9dGhpcy5HZXRDb250ZXh0SW5kZXhPZlZhcmlhYmxlTmFtZWQodC52YXJpYWJsZU5hbWUpKTtsZXQgbj1hKHRoaXMuR2V0UmF3VmFyaWFibGVXaXRoTmFtZSh0LnZhcmlhYmxlTmFtZSxlKSx3KTtyZXR1cm4gbnVsbCE9bj9uOm5ldyB3KHQudmFyaWFibGVOYW1lLGUpfUdldENvbnRleHRJbmRleE9mVmFyaWFibGVOYW1lZCh0KXtyZXR1cm4gdGhpcy5HbG9iYWxWYXJpYWJsZUV4aXN0c1dpdGhOYW1lKHQpPzA6dGhpcy5fY2FsbFN0YWNrLmN1cnJlbnRFbGVtZW50SW5kZXh9T2JzZXJ2ZVZhcmlhYmxlQ2hhbmdlKHQpe3RoaXMudmFyaWFibGVDaGFuZ2VkRXZlbnRDYWxsYmFja3MucHVzaCh0KX19Si5kb250U2F2ZURlZmF1bHRWYWx1ZXM9ITA7Y2xhc3MgS3tjb25zdHJ1Y3Rvcih0KXt0aGlzLnNlZWQ9dCUyMTQ3NDgzNjQ3LHRoaXMuc2VlZDw9MCYmKHRoaXMuc2VlZCs9MjE0NzQ4MzY0Nil9bmV4dCgpe3JldHVybiB0aGlzLnNlZWQ9MTY4MDcqdGhpcy5zZWVkJTIxNDc0ODM2NDd9bmV4dEZsb2F0KCl7cmV0dXJuKHRoaXMubmV4dCgpLTEpLzIxNDc0ODM2NDZ9fWNsYXNzIFV7Y29uc3RydWN0b3IoKXtpZih0aGlzLl9jaGFuZ2VkVmFyaWFibGVzPW5ldyBTZXQsdGhpcy5fdmlzaXRDb3VudHM9bmV3IE1hcCx0aGlzLl90dXJuSW5kaWNlcz1uZXcgTWFwLDE9PT1hcmd1bWVudHMubGVuZ3RoJiZudWxsIT09YXJndW1lbnRzWzBdKXtsZXQgdD1hcmd1bWVudHNbMF07dGhpcy5fZ2xvYmFscz1uZXcgTWFwKHQuX2dsb2JhbHMpLHRoaXMuX2NoYW5nZWRWYXJpYWJsZXM9bmV3IFNldCh0Ll9jaGFuZ2VkVmFyaWFibGVzKSx0aGlzLl92aXNpdENvdW50cz1uZXcgTWFwKHQuX3Zpc2l0Q291bnRzKSx0aGlzLl90dXJuSW5kaWNlcz1uZXcgTWFwKHQuX3R1cm5JbmRpY2VzKX1lbHNlIHRoaXMuX2dsb2JhbHM9bmV3IE1hcCx0aGlzLl9jaGFuZ2VkVmFyaWFibGVzPW5ldyBTZXQsdGhpcy5fdmlzaXRDb3VudHM9bmV3IE1hcCx0aGlzLl90dXJuSW5kaWNlcz1uZXcgTWFwfWdldCBnbG9iYWxzKCl7cmV0dXJuIHRoaXMuX2dsb2JhbHN9Z2V0IGNoYW5nZWRWYXJpYWJsZXMoKXtyZXR1cm4gdGhpcy5fY2hhbmdlZFZhcmlhYmxlc31nZXQgdmlzaXRDb3VudHMoKXtyZXR1cm4gdGhpcy5fdmlzaXRDb3VudHN9Z2V0IHR1cm5JbmRpY2VzKCl7cmV0dXJuIHRoaXMuX3R1cm5JbmRpY2VzfVRyeUdldEdsb2JhbCh0LGUpe3JldHVybiBudWxsIT09dCYmdGhpcy5fZ2xvYmFscy5oYXModCk/e3Jlc3VsdDp0aGlzLl9nbG9iYWxzLmdldCh0KSxleGlzdHM6ITB9OntyZXN1bHQ6ZSxleGlzdHM6ITF9fVNldEdsb2JhbCh0LGUpe3RoaXMuX2dsb2JhbHMuc2V0KHQsZSl9QWRkQ2hhbmdlZFZhcmlhYmxlKHQpe3JldHVybiB0aGlzLl9jaGFuZ2VkVmFyaWFibGVzLmFkZCh0KX1UcnlHZXRWaXNpdENvdW50KHQsZSl7cmV0dXJuIHRoaXMuX3Zpc2l0Q291bnRzLmhhcyh0KT97cmVzdWx0OnRoaXMuX3Zpc2l0Q291bnRzLmdldCh0KSxleGlzdHM6ITB9OntyZXN1bHQ6ZSxleGlzdHM6ITF9fVNldFZpc2l0Q291bnQodCxlKXt0aGlzLl92aXNpdENvdW50cy5zZXQodCxlKX1TZXRUdXJuSW5kZXgodCxlKXt0aGlzLl90dXJuSW5kaWNlcy5zZXQodCxlKX1UcnlHZXRUdXJuSW5kZXgodCxlKXtyZXR1cm4gdGhpcy5fdHVybkluZGljZXMuaGFzKHQpP3tyZXN1bHQ6dGhpcy5fdHVybkluZGljZXMuZ2V0KHQpLGV4aXN0czohMH06e3Jlc3VsdDplLGV4aXN0czohMX19fWNsYXNzIHp7c3RhdGljIFRleHRUb0RpY3Rpb25hcnkodCl7cmV0dXJuIG5ldyB6LlJlYWRlcih0KS5Ub0RpY3Rpb25hcnkoKX1zdGF0aWMgVGV4dFRvQXJyYXkodCl7cmV0dXJuIG5ldyB6LlJlYWRlcih0KS5Ub0FycmF5KCl9fSFmdW5jdGlvbih0KXt0LlJlYWRlcj1jbGFzc3tjb25zdHJ1Y3Rvcih0KXt0aGlzLl9yb290T2JqZWN0PUpTT04ucGFyc2UodCl9VG9EaWN0aW9uYXJ5KCl7cmV0dXJuIHRoaXMuX3Jvb3RPYmplY3R9VG9BcnJheSgpe3JldHVybiB0aGlzLl9yb290T2JqZWN0fX07Y2xhc3MgZXtjb25zdHJ1Y3Rvcigpe3RoaXMuX2N1cnJlbnRQcm9wZXJ0eU5hbWU9bnVsbCx0aGlzLl9jdXJyZW50U3RyaW5nPW51bGwsdGhpcy5fc3RhdGVTdGFjaz1bXSx0aGlzLl9jb2xsZWN0aW9uU3RhY2s9W10sdGhpcy5fcHJvcGVydHlOYW1lU3RhY2s9W10sdGhpcy5fanNvbk9iamVjdD1udWxsfVdyaXRlT2JqZWN0KHQpe3RoaXMuV3JpdGVPYmplY3RTdGFydCgpLHQodGhpcyksdGhpcy5Xcml0ZU9iamVjdEVuZCgpfVdyaXRlT2JqZWN0U3RhcnQoKXt0aGlzLlN0YXJ0TmV3T2JqZWN0KCEwKTtsZXQgZT17fTtpZih0aGlzLnN0YXRlPT09dC5Xcml0ZXIuU3RhdGUuUHJvcGVydHkpe3RoaXMuQXNzZXJ0KG51bGwhPT10aGlzLmN1cnJlbnRDb2xsZWN0aW9uKSx0aGlzLkFzc2VydChudWxsIT09dGhpcy5jdXJyZW50UHJvcGVydHlOYW1lKTtsZXQgdD10aGlzLl9wcm9wZXJ0eU5hbWVTdGFjay5wb3AoKTt0aGlzLmN1cnJlbnRDb2xsZWN0aW9uW3RdPWUsdGhpcy5fY29sbGVjdGlvblN0YWNrLnB1c2goZSl9ZWxzZSB0aGlzLnN0YXRlPT09dC5Xcml0ZXIuU3RhdGUuQXJyYXk/KHRoaXMuQXNzZXJ0KG51bGwhPT10aGlzLmN1cnJlbnRDb2xsZWN0aW9uKSx0aGlzLmN1cnJlbnRDb2xsZWN0aW9uLnB1c2goZSksdGhpcy5fY29sbGVjdGlvblN0YWNrLnB1c2goZSkpOih0aGlzLkFzc2VydCh0aGlzLnN0YXRlPT09dC5Xcml0ZXIuU3RhdGUuTm9uZSksdGhpcy5fanNvbk9iamVjdD1lLHRoaXMuX2NvbGxlY3Rpb25TdGFjay5wdXNoKGUpKTt0aGlzLl9zdGF0ZVN0YWNrLnB1c2gobmV3IHQuV3JpdGVyLlN0YXRlRWxlbWVudCh0LldyaXRlci5TdGF0ZS5PYmplY3QpKX1Xcml0ZU9iamVjdEVuZCgpe3RoaXMuQXNzZXJ0KHRoaXMuc3RhdGU9PT10LldyaXRlci5TdGF0ZS5PYmplY3QpLHRoaXMuX2NvbGxlY3Rpb25TdGFjay5wb3AoKSx0aGlzLl9zdGF0ZVN0YWNrLnBvcCgpfVdyaXRlUHJvcGVydHkodCxlKXtpZih0aGlzLldyaXRlUHJvcGVydHlTdGFydCh0KSxhcmd1bWVudHNbMV1pbnN0YW5jZW9mIEZ1bmN0aW9uKXsoMCxhcmd1bWVudHNbMV0pKHRoaXMpfWVsc2V7bGV0IHQ9YXJndW1lbnRzWzFdO3RoaXMuV3JpdGUodCl9dGhpcy5Xcml0ZVByb3BlcnR5RW5kKCl9V3JpdGVJbnRQcm9wZXJ0eSh0LGUpe3RoaXMuV3JpdGVQcm9wZXJ0eVN0YXJ0KHQpLHRoaXMuV3JpdGVJbnQoZSksdGhpcy5Xcml0ZVByb3BlcnR5RW5kKCl9V3JpdGVGbG9hdFByb3BlcnR5KHQsZSl7dGhpcy5Xcml0ZVByb3BlcnR5U3RhcnQodCksdGhpcy5Xcml0ZUZsb2F0KGUpLHRoaXMuV3JpdGVQcm9wZXJ0eUVuZCgpfVdyaXRlUHJvcGVydHlTdGFydChlKXt0aGlzLkFzc2VydCh0aGlzLnN0YXRlPT09dC5Xcml0ZXIuU3RhdGUuT2JqZWN0KSx0aGlzLl9wcm9wZXJ0eU5hbWVTdGFjay5wdXNoKGUpLHRoaXMuSW5jcmVtZW50Q2hpbGRDb3VudCgpLHRoaXMuX3N0YXRlU3RhY2sucHVzaChuZXcgdC5Xcml0ZXIuU3RhdGVFbGVtZW50KHQuV3JpdGVyLlN0YXRlLlByb3BlcnR5KSl9V3JpdGVQcm9wZXJ0eUVuZCgpe3RoaXMuQXNzZXJ0KHRoaXMuc3RhdGU9PT10LldyaXRlci5TdGF0ZS5Qcm9wZXJ0eSksdGhpcy5Bc3NlcnQoMT09PXRoaXMuY2hpbGRDb3VudCksdGhpcy5fc3RhdGVTdGFjay5wb3AoKX1Xcml0ZVByb3BlcnR5TmFtZVN0YXJ0KCl7dGhpcy5Bc3NlcnQodGhpcy5zdGF0ZT09PXQuV3JpdGVyLlN0YXRlLk9iamVjdCksdGhpcy5JbmNyZW1lbnRDaGlsZENvdW50KCksdGhpcy5fY3VycmVudFByb3BlcnR5TmFtZT1cIlwiLHRoaXMuX3N0YXRlU3RhY2sucHVzaChuZXcgdC5Xcml0ZXIuU3RhdGVFbGVtZW50KHQuV3JpdGVyLlN0YXRlLlByb3BlcnR5KSksdGhpcy5fc3RhdGVTdGFjay5wdXNoKG5ldyB0LldyaXRlci5TdGF0ZUVsZW1lbnQodC5Xcml0ZXIuU3RhdGUuUHJvcGVydHlOYW1lKSl9V3JpdGVQcm9wZXJ0eU5hbWVFbmQoKXt0aGlzLkFzc2VydCh0aGlzLnN0YXRlPT09dC5Xcml0ZXIuU3RhdGUuUHJvcGVydHlOYW1lKSx0aGlzLkFzc2VydChudWxsIT09dGhpcy5fY3VycmVudFByb3BlcnR5TmFtZSksdGhpcy5fcHJvcGVydHlOYW1lU3RhY2sucHVzaCh0aGlzLl9jdXJyZW50UHJvcGVydHlOYW1lKSx0aGlzLl9jdXJyZW50UHJvcGVydHlOYW1lPW51bGwsdGhpcy5fc3RhdGVTdGFjay5wb3AoKX1Xcml0ZVByb3BlcnR5TmFtZUlubmVyKGUpe3RoaXMuQXNzZXJ0KHRoaXMuc3RhdGU9PT10LldyaXRlci5TdGF0ZS5Qcm9wZXJ0eU5hbWUpLHRoaXMuQXNzZXJ0KG51bGwhPT10aGlzLl9jdXJyZW50UHJvcGVydHlOYW1lKSx0aGlzLl9jdXJyZW50UHJvcGVydHlOYW1lKz1lfVdyaXRlQXJyYXlTdGFydCgpe3RoaXMuU3RhcnROZXdPYmplY3QoITApO2xldCBlPVtdO2lmKHRoaXMuc3RhdGU9PT10LldyaXRlci5TdGF0ZS5Qcm9wZXJ0eSl7dGhpcy5Bc3NlcnQobnVsbCE9PXRoaXMuY3VycmVudENvbGxlY3Rpb24pLHRoaXMuQXNzZXJ0KG51bGwhPT10aGlzLmN1cnJlbnRQcm9wZXJ0eU5hbWUpO2xldCB0PXRoaXMuX3Byb3BlcnR5TmFtZVN0YWNrLnBvcCgpO3RoaXMuY3VycmVudENvbGxlY3Rpb25bdF09ZSx0aGlzLl9jb2xsZWN0aW9uU3RhY2sucHVzaChlKX1lbHNlIHRoaXMuc3RhdGU9PT10LldyaXRlci5TdGF0ZS5BcnJheT8odGhpcy5Bc3NlcnQobnVsbCE9PXRoaXMuY3VycmVudENvbGxlY3Rpb24pLHRoaXMuY3VycmVudENvbGxlY3Rpb24ucHVzaChlKSx0aGlzLl9jb2xsZWN0aW9uU3RhY2sucHVzaChlKSk6KHRoaXMuQXNzZXJ0KHRoaXMuc3RhdGU9PT10LldyaXRlci5TdGF0ZS5Ob25lKSx0aGlzLl9qc29uT2JqZWN0PWUsdGhpcy5fY29sbGVjdGlvblN0YWNrLnB1c2goZSkpO3RoaXMuX3N0YXRlU3RhY2sucHVzaChuZXcgdC5Xcml0ZXIuU3RhdGVFbGVtZW50KHQuV3JpdGVyLlN0YXRlLkFycmF5KSl9V3JpdGVBcnJheUVuZCgpe3RoaXMuQXNzZXJ0KHRoaXMuc3RhdGU9PT10LldyaXRlci5TdGF0ZS5BcnJheSksdGhpcy5fY29sbGVjdGlvblN0YWNrLnBvcCgpLHRoaXMuX3N0YXRlU3RhY2sucG9wKCl9V3JpdGUodCxlPSEwKXtudWxsIT09dD8odGhpcy5TdGFydE5ld09iamVjdCghMSksdGhpcy5fYWRkVG9DdXJyZW50T2JqZWN0KHQpKTpjb25zb2xlLmVycm9yKFwiV2FybmluZzogdHJ5aW5nIHRvIHdyaXRlIGEgbnVsbCBzdHJpbmdcIil9V3JpdGVJbnQodCl7bnVsbCE9PXQmJih0aGlzLlN0YXJ0TmV3T2JqZWN0KCExKSx0aGlzLl9hZGRUb0N1cnJlbnRPYmplY3QoTWF0aC5mbG9vcih0KSkpfVdyaXRlRmxvYXQodCl7bnVsbCE9PXQmJih0aGlzLlN0YXJ0TmV3T2JqZWN0KCExKSx0PT1OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk/dGhpcy5fYWRkVG9DdXJyZW50T2JqZWN0KDM0ZTM3KTp0PT1OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk/dGhpcy5fYWRkVG9DdXJyZW50T2JqZWN0KC0zNGUzNyk6aXNOYU4odCk/dGhpcy5fYWRkVG9DdXJyZW50T2JqZWN0KDApOnRoaXMuX2FkZFRvQ3VycmVudE9iamVjdCh0KSl9V3JpdGVOdWxsKCl7dGhpcy5TdGFydE5ld09iamVjdCghMSksdGhpcy5fYWRkVG9DdXJyZW50T2JqZWN0KG51bGwpfVdyaXRlU3RyaW5nU3RhcnQoKXt0aGlzLlN0YXJ0TmV3T2JqZWN0KCExKSx0aGlzLl9jdXJyZW50U3RyaW5nPVwiXCIsdGhpcy5fc3RhdGVTdGFjay5wdXNoKG5ldyB0LldyaXRlci5TdGF0ZUVsZW1lbnQodC5Xcml0ZXIuU3RhdGUuU3RyaW5nKSl9V3JpdGVTdHJpbmdFbmQoKXt0aGlzLkFzc2VydCh0aGlzLnN0YXRlPT10LldyaXRlci5TdGF0ZS5TdHJpbmcpLHRoaXMuX3N0YXRlU3RhY2sucG9wKCksdGhpcy5fYWRkVG9DdXJyZW50T2JqZWN0KHRoaXMuX2N1cnJlbnRTdHJpbmcpLHRoaXMuX2N1cnJlbnRTdHJpbmc9bnVsbH1Xcml0ZVN0cmluZ0lubmVyKGUsbj0hMCl7dGhpcy5Bc3NlcnQodGhpcy5zdGF0ZT09PXQuV3JpdGVyLlN0YXRlLlN0cmluZyksbnVsbCE9PWU/dGhpcy5fY3VycmVudFN0cmluZys9ZTpjb25zb2xlLmVycm9yKFwiV2FybmluZzogdHJ5aW5nIHRvIHdyaXRlIGEgbnVsbCBzdHJpbmdcIil9VG9TdHJpbmcoKXtyZXR1cm4gbnVsbD09PXRoaXMuX2pzb25PYmplY3Q/XCJcIjpKU09OLnN0cmluZ2lmeSh0aGlzLl9qc29uT2JqZWN0KX1TdGFydE5ld09iamVjdChlKXtlP3RoaXMuQXNzZXJ0KHRoaXMuc3RhdGU9PT10LldyaXRlci5TdGF0ZS5Ob25lfHx0aGlzLnN0YXRlPT09dC5Xcml0ZXIuU3RhdGUuUHJvcGVydHl8fHRoaXMuc3RhdGU9PT10LldyaXRlci5TdGF0ZS5BcnJheSk6dGhpcy5Bc3NlcnQodGhpcy5zdGF0ZT09PXQuV3JpdGVyLlN0YXRlLlByb3BlcnR5fHx0aGlzLnN0YXRlPT09dC5Xcml0ZXIuU3RhdGUuQXJyYXkpLHRoaXMuc3RhdGU9PT10LldyaXRlci5TdGF0ZS5Qcm9wZXJ0eSYmdGhpcy5Bc3NlcnQoMD09PXRoaXMuY2hpbGRDb3VudCksdGhpcy5zdGF0ZSE9PXQuV3JpdGVyLlN0YXRlLkFycmF5JiZ0aGlzLnN0YXRlIT09dC5Xcml0ZXIuU3RhdGUuUHJvcGVydHl8fHRoaXMuSW5jcmVtZW50Q2hpbGRDb3VudCgpfWdldCBzdGF0ZSgpe3JldHVybiB0aGlzLl9zdGF0ZVN0YWNrLmxlbmd0aD4wP3RoaXMuX3N0YXRlU3RhY2tbdGhpcy5fc3RhdGVTdGFjay5sZW5ndGgtMV0udHlwZTp0LldyaXRlci5TdGF0ZS5Ob25lfWdldCBjaGlsZENvdW50KCl7cmV0dXJuIHRoaXMuX3N0YXRlU3RhY2subGVuZ3RoPjA/dGhpcy5fc3RhdGVTdGFja1t0aGlzLl9zdGF0ZVN0YWNrLmxlbmd0aC0xXS5jaGlsZENvdW50OjB9Z2V0IGN1cnJlbnRDb2xsZWN0aW9uKCl7cmV0dXJuIHRoaXMuX2NvbGxlY3Rpb25TdGFjay5sZW5ndGg+MD90aGlzLl9jb2xsZWN0aW9uU3RhY2tbdGhpcy5fY29sbGVjdGlvblN0YWNrLmxlbmd0aC0xXTpudWxsfWdldCBjdXJyZW50UHJvcGVydHlOYW1lKCl7cmV0dXJuIHRoaXMuX3Byb3BlcnR5TmFtZVN0YWNrLmxlbmd0aD4wP3RoaXMuX3Byb3BlcnR5TmFtZVN0YWNrW3RoaXMuX3Byb3BlcnR5TmFtZVN0YWNrLmxlbmd0aC0xXTpudWxsfUluY3JlbWVudENoaWxkQ291bnQoKXt0aGlzLkFzc2VydCh0aGlzLl9zdGF0ZVN0YWNrLmxlbmd0aD4wKTtsZXQgdD10aGlzLl9zdGF0ZVN0YWNrLnBvcCgpO3QuY2hpbGRDb3VudCsrLHRoaXMuX3N0YXRlU3RhY2sucHVzaCh0KX1Bc3NlcnQodCl7aWYoIXQpdGhyb3cgRXJyb3IoXCJBc3NlcnQgZmFpbGVkIHdoaWxlIHdyaXRpbmcgSlNPTlwiKX1fYWRkVG9DdXJyZW50T2JqZWN0KGUpe3RoaXMuQXNzZXJ0KG51bGwhPT10aGlzLmN1cnJlbnRDb2xsZWN0aW9uKSx0aGlzLnN0YXRlPT09dC5Xcml0ZXIuU3RhdGUuQXJyYXk/KHRoaXMuQXNzZXJ0KEFycmF5LmlzQXJyYXkodGhpcy5jdXJyZW50Q29sbGVjdGlvbikpLHRoaXMuY3VycmVudENvbGxlY3Rpb24ucHVzaChlKSk6dGhpcy5zdGF0ZT09PXQuV3JpdGVyLlN0YXRlLlByb3BlcnR5JiYodGhpcy5Bc3NlcnQoIUFycmF5LmlzQXJyYXkodGhpcy5jdXJyZW50Q29sbGVjdGlvbikpLHRoaXMuQXNzZXJ0KG51bGwhPT10aGlzLmN1cnJlbnRQcm9wZXJ0eU5hbWUpLHRoaXMuY3VycmVudENvbGxlY3Rpb25bdGhpcy5jdXJyZW50UHJvcGVydHlOYW1lXT1lLHRoaXMuX3Byb3BlcnR5TmFtZVN0YWNrLnBvcCgpKX19dC5Xcml0ZXI9ZSxmdW5jdGlvbihlKXtsZXQgbjshZnVuY3Rpb24odCl7dFt0Lk5vbmU9MF09XCJOb25lXCIsdFt0Lk9iamVjdD0xXT1cIk9iamVjdFwiLHRbdC5BcnJheT0yXT1cIkFycmF5XCIsdFt0LlByb3BlcnR5PTNdPVwiUHJvcGVydHlcIix0W3QuUHJvcGVydHlOYW1lPTRdPVwiUHJvcGVydHlOYW1lXCIsdFt0LlN0cmluZz01XT1cIlN0cmluZ1wifShuPWUuU3RhdGV8fChlLlN0YXRlPXt9KSk7ZS5TdGF0ZUVsZW1lbnQ9Y2xhc3N7Y29uc3RydWN0b3IoZSl7dGhpcy50eXBlPXQuV3JpdGVyLlN0YXRlLk5vbmUsdGhpcy5jaGlsZENvdW50PTAsdGhpcy50eXBlPWV9fX0oZT10LldyaXRlcnx8KHQuV3JpdGVyPXt9KSl9KHp8fCh6PXt9KSk7Y2xhc3MgSHtjb25zdHJ1Y3Rvcih0KXt0aGlzLmtJbmtTYXZlU3RhdGVWZXJzaW9uPTgsdGhpcy5rTWluQ29tcGF0aWJsZUxvYWRWZXJzaW9uPTgsdGhpcy5fY3VycmVudEVycm9ycz1udWxsLHRoaXMuX2N1cnJlbnRXYXJuaW5ncz1udWxsLHRoaXMuZGl2ZXJ0ZWRQb2ludGVyPUkuTnVsbCx0aGlzLl9jdXJyZW50VHVybkluZGV4PTAsdGhpcy5zdG9yeVNlZWQ9MCx0aGlzLnByZXZpb3VzUmFuZG9tPTAsdGhpcy5kaWRTYWZlRXhpdD0hMSx0aGlzLl9jdXJyZW50VGV4dD1udWxsLHRoaXMuX2N1cnJlbnRUYWdzPW51bGwsdGhpcy5fb3V0cHV0U3RyZWFtVGV4dERpcnR5PSEwLHRoaXMuX291dHB1dFN0cmVhbVRhZ3NEaXJ0eT0hMCx0aGlzLl9wYXRjaD1udWxsLHRoaXMuc3Rvcnk9dCx0aGlzLl9vdXRwdXRTdHJlYW09W10sdGhpcy5PdXRwdXRTdHJlYW1EaXJ0eSgpLHRoaXMuX2V2YWx1YXRpb25TdGFjaz1bXSx0aGlzLmNhbGxTdGFjaz1uZXcgcSh0KSx0aGlzLl92YXJpYWJsZXNTdGF0ZT1uZXcgSih0aGlzLmNhbGxTdGFjayx0Lmxpc3REZWZpbml0aW9ucyksdGhpcy5fdmlzaXRDb3VudHM9bmV3IE1hcCx0aGlzLl90dXJuSW5kaWNlcz1uZXcgTWFwLHRoaXMuY3VycmVudFR1cm5JbmRleD0tMTtsZXQgZT0obmV3IERhdGUpLmdldFRpbWUoKTt0aGlzLnN0b3J5U2VlZD1uZXcgSyhlKS5uZXh0KCklMTAwLHRoaXMucHJldmlvdXNSYW5kb209MCx0aGlzLl9jdXJyZW50Q2hvaWNlcz1bXSx0aGlzLkdvVG9TdGFydCgpfVRvSnNvbih0PSExKXtsZXQgZT1uZXcgei5Xcml0ZXI7cmV0dXJuIHRoaXMuV3JpdGVKc29uKGUpLGUuVG9TdHJpbmcoKX10b0pzb24odD0hMSl7cmV0dXJuIHRoaXMuVG9Kc29uKHQpfUxvYWRKc29uKHQpe2xldCBlPXouVGV4dFRvRGljdGlvbmFyeSh0KTt0aGlzLkxvYWRKc29uT2JqKGUpfVZpc2l0Q291bnRBdFBhdGhTdHJpbmcodCl7bGV0IG47aWYobnVsbCE9PXRoaXMuX3BhdGNoKXtsZXQgaT10aGlzLnN0b3J5LkNvbnRlbnRBdFBhdGgobmV3IGUodCkpLmNvbnRhaW5lcjtpZihudWxsPT09aSl0aHJvdyBuZXcgRXJyb3IoXCJDb250ZW50IGF0IHBhdGggbm90IGZvdW5kOiBcIit0KTtpZihuPXRoaXMuX3BhdGNoLlRyeUdldFZpc2l0Q291bnQoaSwwKSxuLmV4aXN0cylyZXR1cm4gbi5yZXN1bHR9cmV0dXJuIG49eSh0aGlzLl92aXNpdENvdW50cyx0LG51bGwpLG4uZXhpc3RzP24ucmVzdWx0OjB9VmlzaXRDb3VudEZvckNvbnRhaW5lcih0KXtpZihudWxsPT09dClyZXR1cm4gZChcImNvbnRhaW5lclwiKTtpZighdC52aXNpdHNTaG91bGRCZUNvdW50ZWQpcmV0dXJuIHRoaXMuc3RvcnkuRXJyb3IoXCJSZWFkIGNvdW50IGZvciB0YXJnZXQgKFwiK3QubmFtZStcIiAtIG9uIFwiK3QuZGVidWdNZXRhZGF0YStcIikgdW5rbm93bi4gVGhlIHN0b3J5IG1heSBuZWVkIHRvIGJlIGNvbXBpbGVkIHdpdGggY291bnRBbGxWaXNpdHMgZmxhZyAoLWMpLlwiKSwwO2lmKG51bGwhPT10aGlzLl9wYXRjaCl7bGV0IGU9dGhpcy5fcGF0Y2guVHJ5R2V0VmlzaXRDb3VudCh0LDApO2lmKGUuZXhpc3RzKXJldHVybiBlLnJlc3VsdH1sZXQgZT10LnBhdGgudG9TdHJpbmcoKSxuPXkodGhpcy5fdmlzaXRDb3VudHMsZSxudWxsKTtyZXR1cm4gbi5leGlzdHM/bi5yZXN1bHQ6MH1JbmNyZW1lbnRWaXNpdENvdW50Rm9yQ29udGFpbmVyKHQpe2lmKG51bGwhPT10aGlzLl9wYXRjaCl7bGV0IGU9dGhpcy5WaXNpdENvdW50Rm9yQ29udGFpbmVyKHQpO3JldHVybiBlKyssdm9pZCB0aGlzLl9wYXRjaC5TZXRWaXNpdENvdW50KHQsZSl9bGV0IGU9dC5wYXRoLnRvU3RyaW5nKCksbj15KHRoaXMuX3Zpc2l0Q291bnRzLGUsbnVsbCk7bi5leGlzdHM/dGhpcy5fdmlzaXRDb3VudHMuc2V0KGUsbi5yZXN1bHQrMSk6dGhpcy5fdmlzaXRDb3VudHMuc2V0KGUsMSl9UmVjb3JkVHVybkluZGV4VmlzaXRUb0NvbnRhaW5lcih0KXtpZihudWxsIT09dGhpcy5fcGF0Y2gpcmV0dXJuIHZvaWQgdGhpcy5fcGF0Y2guU2V0VHVybkluZGV4KHQsdGhpcy5jdXJyZW50VHVybkluZGV4KTtsZXQgZT10LnBhdGgudG9TdHJpbmcoKTt0aGlzLl90dXJuSW5kaWNlcy5zZXQoZSx0aGlzLmN1cnJlbnRUdXJuSW5kZXgpfVR1cm5zU2luY2VGb3JDb250YWluZXIodCl7aWYodC50dXJuSW5kZXhTaG91bGRCZUNvdW50ZWR8fHRoaXMuc3RvcnkuRXJyb3IoXCJUVVJOU19TSU5DRSgpIGZvciB0YXJnZXQgKFwiK3QubmFtZStcIiAtIG9uIFwiK3QuZGVidWdNZXRhZGF0YStcIikgdW5rbm93bi4gVGhlIHN0b3J5IG1heSBuZWVkIHRvIGJlIGNvbXBpbGVkIHdpdGggY291bnRBbGxWaXNpdHMgZmxhZyAoLWMpLlwiKSxudWxsIT09dGhpcy5fcGF0Y2gpe2xldCBlPXRoaXMuX3BhdGNoLlRyeUdldFR1cm5JbmRleCh0LDApO2lmKGUuZXhpc3RzKXJldHVybiB0aGlzLmN1cnJlbnRUdXJuSW5kZXgtZS5yZXN1bHR9bGV0IGU9dC5wYXRoLnRvU3RyaW5nKCksbj15KHRoaXMuX3R1cm5JbmRpY2VzLGUsMCk7cmV0dXJuIG4uZXhpc3RzP3RoaXMuY3VycmVudFR1cm5JbmRleC1uLnJlc3VsdDotMX1nZXQgY2FsbHN0YWNrRGVwdGgoKXtyZXR1cm4gdGhpcy5jYWxsU3RhY2suZGVwdGh9Z2V0IG91dHB1dFN0cmVhbSgpe3JldHVybiB0aGlzLl9vdXRwdXRTdHJlYW19Z2V0IGN1cnJlbnRDaG9pY2VzKCl7cmV0dXJuIHRoaXMuY2FuQ29udGludWU/W106dGhpcy5fY3VycmVudENob2ljZXN9Z2V0IGdlbmVyYXRlZENob2ljZXMoKXtyZXR1cm4gdGhpcy5fY3VycmVudENob2ljZXN9Z2V0IGN1cnJlbnRFcnJvcnMoKXtyZXR1cm4gdGhpcy5fY3VycmVudEVycm9yc31nZXQgY3VycmVudFdhcm5pbmdzKCl7cmV0dXJuIHRoaXMuX2N1cnJlbnRXYXJuaW5nc31nZXQgdmFyaWFibGVzU3RhdGUoKXtyZXR1cm4gdGhpcy5fdmFyaWFibGVzU3RhdGV9c2V0IHZhcmlhYmxlc1N0YXRlKHQpe3RoaXMuX3ZhcmlhYmxlc1N0YXRlPXR9Z2V0IGV2YWx1YXRpb25TdGFjaygpe3JldHVybiB0aGlzLl9ldmFsdWF0aW9uU3RhY2t9Z2V0IHZpc2l0Q291bnRzKCl7cmV0dXJuIHRoaXMuX3Zpc2l0Q291bnRzfWdldCB0dXJuSW5kaWNlcygpe3JldHVybiB0aGlzLl90dXJuSW5kaWNlc31nZXQgY3VycmVudFR1cm5JbmRleCgpe3JldHVybiB0aGlzLl9jdXJyZW50VHVybkluZGV4fXNldCBjdXJyZW50VHVybkluZGV4KHQpe3RoaXMuX2N1cnJlbnRUdXJuSW5kZXg9dH1nZXQgY3VycmVudFBhdGhTdHJpbmcoKXtsZXQgdD10aGlzLmN1cnJlbnRQb2ludGVyO3JldHVybiB0LmlzTnVsbD9udWxsOm51bGw9PT10LnBhdGg/ZChcInBvaW50ZXIucGF0aFwiKTp0LnBhdGgudG9TdHJpbmcoKX1nZXQgY3VycmVudFBvaW50ZXIoKXtyZXR1cm4gdGhpcy5jYWxsU3RhY2suY3VycmVudEVsZW1lbnQuY3VycmVudFBvaW50ZXIuY29weSgpfXNldCBjdXJyZW50UG9pbnRlcih0KXt0aGlzLmNhbGxTdGFjay5jdXJyZW50RWxlbWVudC5jdXJyZW50UG9pbnRlcj10LmNvcHkoKX1nZXQgcHJldmlvdXNQb2ludGVyKCl7cmV0dXJuIHRoaXMuY2FsbFN0YWNrLmN1cnJlbnRUaHJlYWQucHJldmlvdXNQb2ludGVyLmNvcHkoKX1zZXQgcHJldmlvdXNQb2ludGVyKHQpe3RoaXMuY2FsbFN0YWNrLmN1cnJlbnRUaHJlYWQucHJldmlvdXNQb2ludGVyPXQuY29weSgpfWdldCBjYW5Db250aW51ZSgpe3JldHVybiF0aGlzLmN1cnJlbnRQb2ludGVyLmlzTnVsbCYmIXRoaXMuaGFzRXJyb3J9Z2V0IGhhc0Vycm9yKCl7cmV0dXJuIG51bGwhPXRoaXMuY3VycmVudEVycm9ycyYmdGhpcy5jdXJyZW50RXJyb3JzLmxlbmd0aD4wfWdldCBoYXNXYXJuaW5nKCl7cmV0dXJuIG51bGwhPXRoaXMuY3VycmVudFdhcm5pbmdzJiZ0aGlzLmN1cnJlbnRXYXJuaW5ncy5sZW5ndGg+MH1nZXQgY3VycmVudFRleHQoKXtpZih0aGlzLl9vdXRwdXRTdHJlYW1UZXh0RGlydHkpe2xldCB0PW5ldyBtO2ZvcihsZXQgZSBvZiB0aGlzLl9vdXRwdXRTdHJlYW0pe2xldCBuPWEoZSxUKTtudWxsIT09biYmdC5BcHBlbmQobi52YWx1ZSl9dGhpcy5fY3VycmVudFRleHQ9dGhpcy5DbGVhbk91dHB1dFdoaXRlc3BhY2UodC50b1N0cmluZygpKSx0aGlzLl9vdXRwdXRTdHJlYW1UZXh0RGlydHk9ITF9cmV0dXJuIHRoaXMuX2N1cnJlbnRUZXh0fUNsZWFuT3V0cHV0V2hpdGVzcGFjZSh0KXtsZXQgZT1uZXcgbSxuPS0xLGk9MDtmb3IobGV0IHI9MDtyPHQubGVuZ3RoO3IrKyl7bGV0IGE9dC5jaGFyQXQocikscz1cIiBcIj09YXx8XCJcXHRcIj09YTtzJiYtMT09biYmKG49ciksc3x8KFwiXFxuXCIhPWEmJm4+MCYmbiE9aSYmZS5BcHBlbmQoXCIgXCIpLG49LTEpLFwiXFxuXCI9PWEmJihpPXIrMSksc3x8ZS5BcHBlbmQoYSl9cmV0dXJuIGUudG9TdHJpbmcoKX1nZXQgY3VycmVudFRhZ3MoKXtpZih0aGlzLl9vdXRwdXRTdHJlYW1UYWdzRGlydHkpe3RoaXMuX2N1cnJlbnRUYWdzPVtdO2ZvcihsZXQgdCBvZiB0aGlzLl9vdXRwdXRTdHJlYW0pe2xldCBlPWEodCxqKTtudWxsIT09ZSYmdGhpcy5fY3VycmVudFRhZ3MucHVzaChlLnRleHQpfXRoaXMuX291dHB1dFN0cmVhbVRhZ3NEaXJ0eT0hMX1yZXR1cm4gdGhpcy5fY3VycmVudFRhZ3N9Z2V0IGluRXhwcmVzc2lvbkV2YWx1YXRpb24oKXtyZXR1cm4gdGhpcy5jYWxsU3RhY2suY3VycmVudEVsZW1lbnQuaW5FeHByZXNzaW9uRXZhbHVhdGlvbn1zZXQgaW5FeHByZXNzaW9uRXZhbHVhdGlvbih0KXt0aGlzLmNhbGxTdGFjay5jdXJyZW50RWxlbWVudC5pbkV4cHJlc3Npb25FdmFsdWF0aW9uPXR9R29Ub1N0YXJ0KCl7dGhpcy5jYWxsU3RhY2suY3VycmVudEVsZW1lbnQuY3VycmVudFBvaW50ZXI9SS5TdGFydE9mKHRoaXMuc3RvcnkubWFpbkNvbnRlbnRDb250YWluZXIpfUNvcHlBbmRTdGFydFBhdGNoaW5nKCl7bGV0IHQ9bmV3IEgodGhpcy5zdG9yeSk7cmV0dXJuIHQuX3BhdGNoPW5ldyBVKHRoaXMuX3BhdGNoKSx0Lm91dHB1dFN0cmVhbS5wdXNoLmFwcGx5KHQub3V0cHV0U3RyZWFtLHRoaXMuX291dHB1dFN0cmVhbSksdC5PdXRwdXRTdHJlYW1EaXJ0eSgpLHQuX2N1cnJlbnRDaG9pY2VzLnB1c2guYXBwbHkodC5fY3VycmVudENob2ljZXMsdGhpcy5fY3VycmVudENob2ljZXMpLHRoaXMuaGFzRXJyb3ImJih0Ll9jdXJyZW50RXJyb3JzPVtdLHQuX2N1cnJlbnRFcnJvcnMucHVzaC5hcHBseSh0Ll9jdXJyZW50RXJyb3JzLHRoaXMuY3VycmVudEVycm9yc3x8W10pKSx0aGlzLmhhc1dhcm5pbmcmJih0Ll9jdXJyZW50V2FybmluZ3M9W10sdC5fY3VycmVudFdhcm5pbmdzLnB1c2guYXBwbHkodC5fY3VycmVudFdhcm5pbmdzLHRoaXMuY3VycmVudFdhcm5pbmdzfHxbXSkpLHQuY2FsbFN0YWNrPW5ldyBxKHRoaXMuY2FsbFN0YWNrKSx0LnZhcmlhYmxlc1N0YXRlPXRoaXMudmFyaWFibGVzU3RhdGUsdC52YXJpYWJsZXNTdGF0ZS5jYWxsU3RhY2s9dC5jYWxsU3RhY2ssdC52YXJpYWJsZXNTdGF0ZS5wYXRjaD10Ll9wYXRjaCx0LmV2YWx1YXRpb25TdGFjay5wdXNoLmFwcGx5KHQuZXZhbHVhdGlvblN0YWNrLHRoaXMuZXZhbHVhdGlvblN0YWNrKSx0aGlzLmRpdmVydGVkUG9pbnRlci5pc051bGx8fCh0LmRpdmVydGVkUG9pbnRlcj10aGlzLmRpdmVydGVkUG9pbnRlci5jb3B5KCkpLHQucHJldmlvdXNQb2ludGVyPXRoaXMucHJldmlvdXNQb2ludGVyLmNvcHkoKSx0Ll92aXNpdENvdW50cz10aGlzLl92aXNpdENvdW50cyx0Ll90dXJuSW5kaWNlcz10aGlzLl90dXJuSW5kaWNlcyx0LmN1cnJlbnRUdXJuSW5kZXg9dGhpcy5jdXJyZW50VHVybkluZGV4LHQuc3RvcnlTZWVkPXRoaXMuc3RvcnlTZWVkLHQucHJldmlvdXNSYW5kb209dGhpcy5wcmV2aW91c1JhbmRvbSx0LmRpZFNhZmVFeGl0PXRoaXMuZGlkU2FmZUV4aXQsdH1SZXN0b3JlQWZ0ZXJQYXRjaCgpe3RoaXMudmFyaWFibGVzU3RhdGUuY2FsbFN0YWNrPXRoaXMuY2FsbFN0YWNrLHRoaXMudmFyaWFibGVzU3RhdGUucGF0Y2g9dGhpcy5fcGF0Y2h9QXBwbHlBbnlQYXRjaCgpe2lmKG51bGwhPT10aGlzLl9wYXRjaCl7dGhpcy52YXJpYWJsZXNTdGF0ZS5BcHBseVBhdGNoKCk7Zm9yKGxldFt0LGVdb2YgdGhpcy5fcGF0Y2gudmlzaXRDb3VudHMpdGhpcy5BcHBseUNvdW50Q2hhbmdlcyh0LGUsITApO2ZvcihsZXRbdCxlXW9mIHRoaXMuX3BhdGNoLnR1cm5JbmRpY2VzKXRoaXMuQXBwbHlDb3VudENoYW5nZXModCxlLCExKTt0aGlzLl9wYXRjaD1udWxsfX1BcHBseUNvdW50Q2hhbmdlcyh0LGUsbil7KG4/dGhpcy5fdmlzaXRDb3VudHM6dGhpcy5fdHVybkluZGljZXMpLnNldCh0LnBhdGgudG9TdHJpbmcoKSxlKX1Xcml0ZUpzb24odCl7dC5Xcml0ZU9iamVjdFN0YXJ0KCk7bGV0IGU9ITE7Zm9yKGxldCBuIG9mIHRoaXMuX2N1cnJlbnRDaG9pY2VzKXtpZihudWxsPT09bi50aHJlYWRBdEdlbmVyYXRpb24pcmV0dXJuIGQoXCJjLnRocmVhZEF0R2VuZXJhdGlvblwiKTtuLm9yaWdpbmFsVGhyZWFkSW5kZXg9bi50aHJlYWRBdEdlbmVyYXRpb24udGhyZWFkSW5kZXgsbnVsbD09PXRoaXMuY2FsbFN0YWNrLlRocmVhZFdpdGhJbmRleChuLm9yaWdpbmFsVGhyZWFkSW5kZXgpJiYoZXx8KGU9ITAsdC5Xcml0ZVByb3BlcnR5U3RhcnQoXCJjaG9pY2VUaHJlYWRzXCIpLHQuV3JpdGVPYmplY3RTdGFydCgpKSx0LldyaXRlUHJvcGVydHlTdGFydChuLm9yaWdpbmFsVGhyZWFkSW5kZXgpLG4udGhyZWFkQXRHZW5lcmF0aW9uLldyaXRlSnNvbih0KSx0LldyaXRlUHJvcGVydHlFbmQoKSl9aWYoZSYmKHQuV3JpdGVPYmplY3RFbmQoKSx0LldyaXRlUHJvcGVydHlFbmQoKSksdC5Xcml0ZVByb3BlcnR5KFwiY2FsbHN0YWNrVGhyZWFkc1wiLHQ9PnRoaXMuY2FsbFN0YWNrLldyaXRlSnNvbih0KSksdC5Xcml0ZVByb3BlcnR5KFwidmFyaWFibGVzU3RhdGVcIix0PT50aGlzLnZhcmlhYmxlc1N0YXRlLldyaXRlSnNvbih0KSksdC5Xcml0ZVByb3BlcnR5KFwiZXZhbFN0YWNrXCIsdD0+TS5Xcml0ZUxpc3RSdW50aW1lT2Jqcyh0LHRoaXMuZXZhbHVhdGlvblN0YWNrKSksdC5Xcml0ZVByb3BlcnR5KFwib3V0cHV0U3RyZWFtXCIsdD0+TS5Xcml0ZUxpc3RSdW50aW1lT2Jqcyh0LHRoaXMuX291dHB1dFN0cmVhbSkpLHQuV3JpdGVQcm9wZXJ0eShcImN1cnJlbnRDaG9pY2VzXCIsdD0+e3QuV3JpdGVBcnJheVN0YXJ0KCk7Zm9yKGxldCBlIG9mIHRoaXMuX2N1cnJlbnRDaG9pY2VzKU0uV3JpdGVDaG9pY2UodCxlKTt0LldyaXRlQXJyYXlFbmQoKX0pLCF0aGlzLmRpdmVydGVkUG9pbnRlci5pc051bGwpe2lmKG51bGw9PT10aGlzLmRpdmVydGVkUG9pbnRlci5wYXRoKXJldHVybiBkKFwiZGl2ZXJ0ZWRQb2ludGVyXCIpO3QuV3JpdGVQcm9wZXJ0eShcImN1cnJlbnREaXZlcnRUYXJnZXRcIix0aGlzLmRpdmVydGVkUG9pbnRlci5wYXRoLmNvbXBvbmVudHNTdHJpbmcpfXQuV3JpdGVQcm9wZXJ0eShcInZpc2l0Q291bnRzXCIsdD0+TS5Xcml0ZUludERpY3Rpb25hcnkodCx0aGlzLl92aXNpdENvdW50cykpLHQuV3JpdGVQcm9wZXJ0eShcInR1cm5JbmRpY2VzXCIsdD0+TS5Xcml0ZUludERpY3Rpb25hcnkodCx0aGlzLl90dXJuSW5kaWNlcykpLHQuV3JpdGVJbnRQcm9wZXJ0eShcInR1cm5JZHhcIix0aGlzLmN1cnJlbnRUdXJuSW5kZXgpLHQuV3JpdGVJbnRQcm9wZXJ0eShcInN0b3J5U2VlZFwiLHRoaXMuc3RvcnlTZWVkKSx0LldyaXRlSW50UHJvcGVydHkoXCJwcmV2aW91c1JhbmRvbVwiLHRoaXMucHJldmlvdXNSYW5kb20pLHQuV3JpdGVJbnRQcm9wZXJ0eShcImlua1NhdmVWZXJzaW9uXCIsdGhpcy5rSW5rU2F2ZVN0YXRlVmVyc2lvbiksdC5Xcml0ZUludFByb3BlcnR5KFwiaW5rRm9ybWF0VmVyc2lvblwiLFguaW5rVmVyc2lvbkN1cnJlbnQpLHQuV3JpdGVPYmplY3RFbmQoKX1Mb2FkSnNvbk9iaih0KXtsZXQgbj10LGk9bi5pbmtTYXZlVmVyc2lvbjtpZihudWxsPT1pKXRocm93IG5ldyBTKFwiaW5rIHNhdmUgZm9ybWF0IGluY29ycmVjdCwgY2FuJ3QgbG9hZC5cIik7aWYocGFyc2VJbnQoaSk8dGhpcy5rTWluQ29tcGF0aWJsZUxvYWRWZXJzaW9uKXRocm93IG5ldyBTKFwiSW5rIHNhdmUgZm9ybWF0IGlzbid0IGNvbXBhdGlibGUgd2l0aCB0aGUgY3VycmVudCB2ZXJzaW9uIChzYXcgJ1wiK2krXCInLCBidXQgbWluaW11bSBpcyBcIit0aGlzLmtNaW5Db21wYXRpYmxlTG9hZFZlcnNpb24rXCIpLCBzbyBjYW4ndCBsb2FkLlwiKTt0aGlzLmNhbGxTdGFjay5TZXRKc29uVG9rZW4obi5jYWxsc3RhY2tUaHJlYWRzLHRoaXMuc3RvcnkpLHRoaXMudmFyaWFibGVzU3RhdGUuU2V0SnNvblRva2VuKG4udmFyaWFibGVzU3RhdGUpLHRoaXMuX2V2YWx1YXRpb25TdGFjaz1NLkpBcnJheVRvUnVudGltZU9iakxpc3Qobi5ldmFsU3RhY2spLHRoaXMuX291dHB1dFN0cmVhbT1NLkpBcnJheVRvUnVudGltZU9iakxpc3Qobi5vdXRwdXRTdHJlYW0pLHRoaXMuT3V0cHV0U3RyZWFtRGlydHkoKSx0aGlzLl9jdXJyZW50Q2hvaWNlcz1NLkpBcnJheVRvUnVudGltZU9iakxpc3Qobi5jdXJyZW50Q2hvaWNlcyk7bGV0IHI9bi5jdXJyZW50RGl2ZXJ0VGFyZ2V0O2lmKG51bGwhPXIpe2xldCB0PW5ldyBlKHIudG9TdHJpbmcoKSk7dGhpcy5kaXZlcnRlZFBvaW50ZXI9dGhpcy5zdG9yeS5Qb2ludGVyQXRQYXRoKHQpfXRoaXMuX3Zpc2l0Q291bnRzPU0uSk9iamVjdFRvSW50RGljdGlvbmFyeShuLnZpc2l0Q291bnRzKSx0aGlzLl90dXJuSW5kaWNlcz1NLkpPYmplY3RUb0ludERpY3Rpb25hcnkobi50dXJuSW5kaWNlcyksdGhpcy5jdXJyZW50VHVybkluZGV4PXBhcnNlSW50KG4udHVybklkeCksdGhpcy5zdG9yeVNlZWQ9cGFyc2VJbnQobi5zdG9yeVNlZWQpLHRoaXMucHJldmlvdXNSYW5kb209cGFyc2VJbnQobi5wcmV2aW91c1JhbmRvbSk7bGV0IGE9bi5jaG9pY2VUaHJlYWRzO2ZvcihsZXQgdCBvZiB0aGlzLl9jdXJyZW50Q2hvaWNlcyl7bGV0IGU9dGhpcy5jYWxsU3RhY2suVGhyZWFkV2l0aEluZGV4KHQub3JpZ2luYWxUaHJlYWRJbmRleCk7aWYobnVsbCE9ZSl0LnRocmVhZEF0R2VuZXJhdGlvbj1lLkNvcHkoKTtlbHNle2xldCBlPWFbdC5vcmlnaW5hbFRocmVhZEluZGV4LnRvU3RyaW5nKCldO3QudGhyZWFkQXRHZW5lcmF0aW9uPW5ldyBxLlRocmVhZChlLHRoaXMuc3RvcnkpfX19UmVzZXRFcnJvcnMoKXt0aGlzLl9jdXJyZW50RXJyb3JzPW51bGwsdGhpcy5fY3VycmVudFdhcm5pbmdzPW51bGx9UmVzZXRPdXRwdXQodD1udWxsKXt0aGlzLl9vdXRwdXRTdHJlYW0ubGVuZ3RoPTAsbnVsbCE9PXQmJnRoaXMuX291dHB1dFN0cmVhbS5wdXNoLmFwcGx5KHRoaXMuX291dHB1dFN0cmVhbSx0KSx0aGlzLk91dHB1dFN0cmVhbURpcnR5KCl9UHVzaFRvT3V0cHV0U3RyZWFtKHQpe2xldCBlPWEodCxUKTtpZihudWxsIT09ZSl7bGV0IHQ9dGhpcy5UcnlTcGxpdHRpbmdIZWFkVGFpbFdoaXRlc3BhY2UoZSk7aWYobnVsbCE9PXQpe2ZvcihsZXQgZSBvZiB0KXRoaXMuUHVzaFRvT3V0cHV0U3RyZWFtSW5kaXZpZHVhbChlKTtyZXR1cm4gdm9pZCB0aGlzLk91dHB1dFN0cmVhbURpcnR5KCl9fXRoaXMuUHVzaFRvT3V0cHV0U3RyZWFtSW5kaXZpZHVhbCh0KSx0aGlzLk91dHB1dFN0cmVhbURpcnR5KCl9UG9wRnJvbU91dHB1dFN0cmVhbSh0KXt0aGlzLm91dHB1dFN0cmVhbS5zcGxpY2UodGhpcy5vdXRwdXRTdHJlYW0ubGVuZ3RoLXQsdCksdGhpcy5PdXRwdXRTdHJlYW1EaXJ0eSgpfVRyeVNwbGl0dGluZ0hlYWRUYWlsV2hpdGVzcGFjZSh0KXtsZXQgZT10LnZhbHVlO2lmKG51bGw9PT1lKXJldHVybiBkKFwic2luZ2xlLnZhbHVlXCIpO2xldCBuPS0xLGk9LTE7Zm9yKGxldCB0PTA7dDxlLmxlbmd0aDsrK3Qpe2xldCByPWVbdF07aWYoXCJcXG5cIiE9cil7aWYoXCIgXCI9PXJ8fFwiXFx0XCI9PXIpY29udGludWU7YnJlYWt9LTE9PW4mJihuPXQpLGk9dH1sZXQgcj0tMSxhPS0xO2ZvcihsZXQgdD0wO3Q8ZS5sZW5ndGg7Kyt0KXtsZXQgbj1lW3RdO2lmKFwiXFxuXCIhPW4pe2lmKFwiIFwiPT1ufHxcIlxcdFwiPT1uKWNvbnRpbnVlO2JyZWFrfS0xPT1yJiYocj10KSxhPXR9aWYoLTE9PW4mJi0xPT1yKXJldHVybiBudWxsO2xldCBzPVtdLGw9MCxvPWUubGVuZ3RoO2lmKC0xIT1uKXtpZihuPjApe2xldCB0PW5ldyBUKGUuc3Vic3RyaW5nKDAsbikpO3MucHVzaCh0KX1zLnB1c2gobmV3IFQoXCJcXG5cIikpLGw9aSsxfWlmKC0xIT1yJiYobz1hKSxvPmwpe2xldCB0PWUuc3Vic3RyaW5nKGwsby1sKTtzLnB1c2gobmV3IFQodCkpfWlmKC0xIT1yJiZhPmkmJihzLnB1c2gobmV3IFQoXCJcXG5cIikpLHI8ZS5sZW5ndGgtMSkpe2xldCB0PWUubGVuZ3RoLXItMSxuPW5ldyBUKGUuc3Vic3RyaW5nKHIrMSx0KSk7cy5wdXNoKG4pfXJldHVybiBzfVB1c2hUb091dHB1dFN0cmVhbUluZGl2aWR1YWwodCl7bGV0IGU9YSh0LHgpLG49YSh0LFQpLGk9ITA7aWYoZSl0aGlzLlRyaW1OZXdsaW5lc0Zyb21PdXRwdXRTdHJlYW0oKSxpPSEwO2Vsc2UgaWYobil7bGV0IHQ9LTEsZT10aGlzLmNhbGxTdGFjay5jdXJyZW50RWxlbWVudDtlLnR5cGU9PXIuRnVuY3Rpb24mJih0PWUuZnVuY3Rpb25TdGFydEluT3V0cHV0U3RyZWFtKTtsZXQgYT0tMTtmb3IobGV0IGU9dGhpcy5fb3V0cHV0U3RyZWFtLmxlbmd0aC0xO2U+PTA7ZS0tKXtsZXQgbj10aGlzLl9vdXRwdXRTdHJlYW1bZV0saT1uIGluc3RhbmNlb2YgQT9uOm51bGw7aWYobnVsbCE9KG4gaW5zdGFuY2VvZiB4P246bnVsbCkpe2E9ZTticmVha31pZihudWxsIT1pJiZpLmNvbW1hbmRUeXBlPT1BLkNvbW1hbmRUeXBlLkJlZ2luU3RyaW5nKXtlPj10JiYodD0tMSk7YnJlYWt9fWxldCBzPS0xO2lmKHM9LTEhPWEmJi0xIT10P01hdGgubWluKHQsYSk6LTEhPWE/YTp0LC0xIT1zKXtpZihuLmlzTmV3bGluZSlpPSExO2Vsc2UgaWYobi5pc05vbldoaXRlc3BhY2UmJihhPi0xJiZ0aGlzLlJlbW92ZUV4aXN0aW5nR2x1ZSgpLHQ+LTEpKXtsZXQgdD10aGlzLmNhbGxTdGFjay5lbGVtZW50cztmb3IobGV0IGU9dC5sZW5ndGgtMTtlPj0wO2UtLSl7bGV0IG49dFtlXTtpZihuLnR5cGUhPXIuRnVuY3Rpb24pYnJlYWs7bi5mdW5jdGlvblN0YXJ0SW5PdXRwdXRTdHJlYW09LTF9fX1lbHNlIG4uaXNOZXdsaW5lJiYoIXRoaXMub3V0cHV0U3RyZWFtRW5kc0luTmV3bGluZSYmdGhpcy5vdXRwdXRTdHJlYW1Db250YWluc0NvbnRlbnR8fChpPSExKSl9aWYoaSl7aWYobnVsbD09PXQpcmV0dXJuIGQoXCJvYmpcIik7dGhpcy5fb3V0cHV0U3RyZWFtLnB1c2godCksdGhpcy5PdXRwdXRTdHJlYW1EaXJ0eSgpfX1UcmltTmV3bGluZXNGcm9tT3V0cHV0U3RyZWFtKCl7bGV0IHQ9LTEsZT10aGlzLl9vdXRwdXRTdHJlYW0ubGVuZ3RoLTE7Zm9yKDtlPj0wOyl7bGV0IG49dGhpcy5fb3V0cHV0U3RyZWFtW2VdLGk9YShuLEEpLHI9YShuLFQpO2lmKG51bGwhPWl8fG51bGwhPXImJnIuaXNOb25XaGl0ZXNwYWNlKWJyZWFrO251bGwhPXImJnIuaXNOZXdsaW5lJiYodD1lKSxlLS19aWYodD49MClmb3IoZT10O2U8dGhpcy5fb3V0cHV0U3RyZWFtLmxlbmd0aDspe2EodGhpcy5fb3V0cHV0U3RyZWFtW2VdLFQpP3RoaXMuX291dHB1dFN0cmVhbS5zcGxpY2UoZSwxKTplKyt9dGhpcy5PdXRwdXRTdHJlYW1EaXJ0eSgpfVJlbW92ZUV4aXN0aW5nR2x1ZSgpe2ZvcihsZXQgdD10aGlzLl9vdXRwdXRTdHJlYW0ubGVuZ3RoLTE7dD49MDt0LS0pe2xldCBlPXRoaXMuX291dHB1dFN0cmVhbVt0XTtpZihlIGluc3RhbmNlb2YgeCl0aGlzLl9vdXRwdXRTdHJlYW0uc3BsaWNlKHQsMSk7ZWxzZSBpZihlIGluc3RhbmNlb2YgQSlicmVha310aGlzLk91dHB1dFN0cmVhbURpcnR5KCl9Z2V0IG91dHB1dFN0cmVhbUVuZHNJbk5ld2xpbmUoKXtpZih0aGlzLl9vdXRwdXRTdHJlYW0ubGVuZ3RoPjApZm9yKGxldCB0PXRoaXMuX291dHB1dFN0cmVhbS5sZW5ndGgtMTt0Pj0wO3QtLSl7aWYodGhpcy5fb3V0cHV0U3RyZWFtW3RdaW5zdGFuY2VvZiBBKWJyZWFrO2xldCBlPXRoaXMuX291dHB1dFN0cmVhbVt0XTtpZihlIGluc3RhbmNlb2YgVCl7aWYoZS5pc05ld2xpbmUpcmV0dXJuITA7aWYoZS5pc05vbldoaXRlc3BhY2UpYnJlYWt9fXJldHVybiExfWdldCBvdXRwdXRTdHJlYW1Db250YWluc0NvbnRlbnQoKXtmb3IobGV0IHQ9MDt0PHRoaXMuX291dHB1dFN0cmVhbS5sZW5ndGg7dCsrKWlmKHRoaXMuX291dHB1dFN0cmVhbVt0XWluc3RhbmNlb2YgVClyZXR1cm4hMDtyZXR1cm4hMX1nZXQgaW5TdHJpbmdFdmFsdWF0aW9uKCl7Zm9yKGxldCB0PXRoaXMuX291dHB1dFN0cmVhbS5sZW5ndGgtMTt0Pj0wO3QtLSl7bGV0IGU9YSh0aGlzLl9vdXRwdXRTdHJlYW1bdF0sQSk7aWYoZSBpbnN0YW5jZW9mIEEmJmUuY29tbWFuZFR5cGU9PUEuQ29tbWFuZFR5cGUuQmVnaW5TdHJpbmcpcmV0dXJuITB9cmV0dXJuITF9UHVzaEV2YWx1YXRpb25TdGFjayh0KXtsZXQgZT1hKHQsTyk7aWYoZSl7bGV0IHQ9ZS52YWx1ZTtpZihudWxsPT09dClyZXR1cm4gZChcInJhd0xpc3RcIik7aWYobnVsbCE9dC5vcmlnaW5OYW1lcyl7dC5vcmlnaW5zfHwodC5vcmlnaW5zPVtdKSx0Lm9yaWdpbnMubGVuZ3RoPTA7Zm9yKGxldCBlIG9mIHQub3JpZ2luTmFtZXMpe2lmKG51bGw9PT10aGlzLnN0b3J5Lmxpc3REZWZpbml0aW9ucylyZXR1cm4gZChcIlN0b3J5U3RhdGUuc3RvcnkubGlzdERlZmluaXRpb25zXCIpO2xldCBuPXRoaXMuc3RvcnkubGlzdERlZmluaXRpb25zLlRyeUxpc3RHZXREZWZpbml0aW9uKGUsbnVsbCk7aWYobnVsbD09PW4ucmVzdWx0KXJldHVybiBkKFwiU3RvcnlTdGF0ZSBkZWYucmVzdWx0XCIpO3Qub3JpZ2lucy5pbmRleE9mKG4ucmVzdWx0KTwwJiZ0Lm9yaWdpbnMucHVzaChuLnJlc3VsdCl9fX1pZihudWxsPT09dClyZXR1cm4gZChcIm9ialwiKTt0aGlzLmV2YWx1YXRpb25TdGFjay5wdXNoKHQpfVBvcEV2YWx1YXRpb25TdGFjayh0KXtpZih2b2lkIDA9PT10KXtyZXR1cm4gbyh0aGlzLmV2YWx1YXRpb25TdGFjay5wb3AoKSl9aWYodD50aGlzLmV2YWx1YXRpb25TdGFjay5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwidHJ5aW5nIHRvIHBvcCB0b28gbWFueSBvYmplY3RzXCIpO3JldHVybiBvKHRoaXMuZXZhbHVhdGlvblN0YWNrLnNwbGljZSh0aGlzLmV2YWx1YXRpb25TdGFjay5sZW5ndGgtdCx0KSl9UGVla0V2YWx1YXRpb25TdGFjaygpe3JldHVybiB0aGlzLmV2YWx1YXRpb25TdGFja1t0aGlzLmV2YWx1YXRpb25TdGFjay5sZW5ndGgtMV19Rm9yY2VFbmQoKXt0aGlzLmNhbGxTdGFjay5SZXNldCgpLHRoaXMuX2N1cnJlbnRDaG9pY2VzLmxlbmd0aD0wLHRoaXMuY3VycmVudFBvaW50ZXI9SS5OdWxsLHRoaXMucHJldmlvdXNQb2ludGVyPUkuTnVsbCx0aGlzLmRpZFNhZmVFeGl0PSEwfVRyaW1XaGl0ZXNwYWNlRnJvbUZ1bmN0aW9uRW5kKCl7bi5Bc3NlcnQodGhpcy5jYWxsU3RhY2suY3VycmVudEVsZW1lbnQudHlwZT09ci5GdW5jdGlvbik7bGV0IHQ9dGhpcy5jYWxsU3RhY2suY3VycmVudEVsZW1lbnQuZnVuY3Rpb25TdGFydEluT3V0cHV0U3RyZWFtOy0xPT10JiYodD0wKTtmb3IobGV0IGU9dGhpcy5fb3V0cHV0U3RyZWFtLmxlbmd0aC0xO2U+PXQ7ZS0tKXtsZXQgdD10aGlzLl9vdXRwdXRTdHJlYW1bZV0sbj1hKHQsVCksaT1hKHQsQSk7aWYobnVsbCE9bil7aWYoaSlicmVhaztpZighbi5pc05ld2xpbmUmJiFuLmlzSW5saW5lV2hpdGVzcGFjZSlicmVhazt0aGlzLl9vdXRwdXRTdHJlYW0uc3BsaWNlKGUsMSksdGhpcy5PdXRwdXRTdHJlYW1EaXJ0eSgpfX19UG9wQ2FsbFN0YWNrKHQ9bnVsbCl7dGhpcy5jYWxsU3RhY2suY3VycmVudEVsZW1lbnQudHlwZT09ci5GdW5jdGlvbiYmdGhpcy5UcmltV2hpdGVzcGFjZUZyb21GdW5jdGlvbkVuZCgpLHRoaXMuY2FsbFN0YWNrLlBvcCh0KX1TZXRDaG9zZW5QYXRoKHQsZSl7dGhpcy5fY3VycmVudENob2ljZXMubGVuZ3RoPTA7bGV0IG49dGhpcy5zdG9yeS5Qb2ludGVyQXRQYXRoKHQpO24uaXNOdWxsfHwtMSE9bi5pbmRleHx8KG4uaW5kZXg9MCksdGhpcy5jdXJyZW50UG9pbnRlcj1uLGUmJnRoaXMuY3VycmVudFR1cm5JbmRleCsrfVN0YXJ0RnVuY3Rpb25FdmFsdWF0aW9uRnJvbUdhbWUodCxlKXt0aGlzLmNhbGxTdGFjay5QdXNoKHIuRnVuY3Rpb25FdmFsdWF0aW9uRnJvbUdhbWUsdGhpcy5ldmFsdWF0aW9uU3RhY2subGVuZ3RoKSx0aGlzLmNhbGxTdGFjay5jdXJyZW50RWxlbWVudC5jdXJyZW50UG9pbnRlcj1JLlN0YXJ0T2YodCksdGhpcy5QYXNzQXJndW1lbnRzVG9FdmFsdWF0aW9uU3RhY2soZSl9UGFzc0FyZ3VtZW50c1RvRXZhbHVhdGlvblN0YWNrKHQpe2lmKG51bGwhPXQpZm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDtlKyspe2lmKFwibnVtYmVyXCIhPXR5cGVvZiB0W2VdJiZcInN0cmluZ1wiIT10eXBlb2YgdFtlXSl0aHJvdyBuZXcgRXJyb3IoXCJpbmsgYXJndW1lbnRzIHdoZW4gY2FsbGluZyBFdmFsdWF0ZUZ1bmN0aW9uIC8gQ2hvb3NlUGF0aFN0cmluZ1dpdGhQYXJhbWV0ZXJzICBtdXN0IGJlIGludCwgZmxvYXQgb3Igc3RyaW5nXCIpO3RoaXMuUHVzaEV2YWx1YXRpb25TdGFjayh2LkNyZWF0ZSh0W2VdKSl9fVRyeUV4aXRGdW5jdGlvbkV2YWx1YXRpb25Gcm9tR2FtZSgpe3JldHVybiB0aGlzLmNhbGxTdGFjay5jdXJyZW50RWxlbWVudC50eXBlPT1yLkZ1bmN0aW9uRXZhbHVhdGlvbkZyb21HYW1lJiYodGhpcy5jdXJyZW50UG9pbnRlcj1JLk51bGwsdGhpcy5kaWRTYWZlRXhpdD0hMCwhMCl9Q29tcGxldGVGdW5jdGlvbkV2YWx1YXRpb25Gcm9tR2FtZSgpe2lmKHRoaXMuY2FsbFN0YWNrLmN1cnJlbnRFbGVtZW50LnR5cGUhPXIuRnVuY3Rpb25FdmFsdWF0aW9uRnJvbUdhbWUpdGhyb3cgbmV3IFMoXCJFeHBlY3RlZCBleHRlcm5hbCBmdW5jdGlvbiBldmFsdWF0aW9uIHRvIGJlIGNvbXBsZXRlLiBTdGFjayB0cmFjZTogXCIrdGhpcy5jYWxsU3RhY2suY2FsbFN0YWNrVHJhY2UpO2xldCB0PXRoaXMuY2FsbFN0YWNrLmN1cnJlbnRFbGVtZW50LmV2YWx1YXRpb25TdGFja0hlaWdodFdoZW5QdXNoZWQsZT1udWxsO2Zvcig7dGhpcy5ldmFsdWF0aW9uU3RhY2subGVuZ3RoPnQ7KXtsZXQgdD10aGlzLlBvcEV2YWx1YXRpb25TdGFjaygpO251bGw9PT1lJiYoZT10KX1pZih0aGlzLlBvcENhbGxTdGFjayhyLkZ1bmN0aW9uRXZhbHVhdGlvbkZyb21HYW1lKSxlKXtpZihlIGluc3RhbmNlb2YgTClyZXR1cm4gbnVsbDtsZXQgdD1zKGUsdik7cmV0dXJuIHQudmFsdWVUeXBlPT1pLkRpdmVydFRhcmdldD90LnZhbHVlT2JqZWN0LnRvU3RyaW5nKCk6dC52YWx1ZU9iamVjdH1yZXR1cm4gbnVsbH1BZGRFcnJvcih0LGUpe2U/KG51bGw9PXRoaXMuX2N1cnJlbnRXYXJuaW5ncyYmKHRoaXMuX2N1cnJlbnRXYXJuaW5ncz1bXSksdGhpcy5fY3VycmVudFdhcm5pbmdzLnB1c2godCkpOihudWxsPT10aGlzLl9jdXJyZW50RXJyb3JzJiYodGhpcy5fY3VycmVudEVycm9ycz1bXSksdGhpcy5fY3VycmVudEVycm9ycy5wdXNoKHQpKX1PdXRwdXRTdHJlYW1EaXJ0eSgpe3RoaXMuX291dHB1dFN0cmVhbVRleHREaXJ0eT0hMCx0aGlzLl9vdXRwdXRTdHJlYW1UYWdzRGlydHk9ITB9fWNsYXNzICR7Y29uc3RydWN0b3IoKXt0aGlzLnN0YXJ0VGltZT12b2lkIDB9Z2V0IEVsYXBzZWRNaWxsaXNlY29uZHMoKXtyZXR1cm4gdm9pZCAwPT09dGhpcy5zdGFydFRpbWU/MDoobmV3IERhdGUpLmdldFRpbWUoKS10aGlzLnN0YXJ0VGltZX1TdGFydCgpe3RoaXMuc3RhcnRUaW1lPShuZXcgRGF0ZSkuZ2V0VGltZSgpfVN0b3AoKXt0aGlzLnN0YXJ0VGltZT12b2lkIDB9fU51bWJlci5pc0ludGVnZXJ8fChOdW1iZXIuaXNJbnRlZ2VyPWZ1bmN0aW9uKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0JiZpc0Zpbml0ZSh0KSYmdD4tOTAwNzE5OTI1NDc0MDk5MiYmdDw5MDA3MTk5MjU0NzQwOTkyJiZNYXRoLmZsb29yKHQpPT09dH0pO2NsYXNzIFggZXh0ZW5kcyBwe2NvbnN0cnVjdG9yKCl7bGV0IHQ7c3VwZXIoKSx0aGlzLmlua1ZlcnNpb25NaW5pbXVtQ29tcGF0aWJsZT0xOCx0aGlzLl9wcmV2Q29udGFpbmVycz1bXSx0aGlzLmFsbG93RXh0ZXJuYWxGdW5jdGlvbkZhbGxiYWNrcz0hMSx0aGlzLl9saXN0RGVmaW5pdGlvbnM9bnVsbCx0aGlzLl92YXJpYWJsZU9ic2VydmVycz1udWxsLHRoaXMuX2hhc1ZhbGlkYXRlZEV4dGVybmFscz0hMSx0aGlzLl90ZW1wb3JhcnlFdmFsdWF0aW9uQ29udGFpbmVyPW51bGwsdGhpcy5fYXN5bmNDb250aW51ZUFjdGl2ZT0hMSx0aGlzLl9zdGF0ZVNuYXBzaG90QXRMYXN0TmV3bGluZT1udWxsLHRoaXMuX3JlY3Vyc2l2ZUNvbnRpbnVlQ291bnQ9MCx0aGlzLl9hc3luY1NhdmluZz0hMSx0aGlzLl9wcm9maWxlcj1udWxsO2xldCBlPW51bGwsbj1udWxsO2lmKGFyZ3VtZW50c1swXWluc3RhbmNlb2YgTil0PWFyZ3VtZW50c1swXSx2b2lkIDAhPT1hcmd1bWVudHNbMV0mJihlPWFyZ3VtZW50c1sxXSksdGhpcy5fbWFpbkNvbnRlbnRDb250YWluZXI9dDtlbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiBhcmd1bWVudHNbMF0pe2xldCB0PWFyZ3VtZW50c1swXTtuPXouVGV4dFRvRGljdGlvbmFyeSh0KX1lbHNlIG49YXJndW1lbnRzWzBdO2lmKG51bGwhPWUmJih0aGlzLl9saXN0RGVmaW5pdGlvbnM9bmV3IEIoZSkpLHRoaXMuX2V4dGVybmFscz1uZXcgTWFwLG51bGwhPT1uKXtsZXQgdD1uLGU9dC5pbmtWZXJzaW9uO2lmKG51bGw9PWUpdGhyb3cgbmV3IEVycm9yKFwiaW5rIHZlcnNpb24gbnVtYmVyIG5vdCBmb3VuZC4gQXJlIHlvdSBzdXJlIGl0J3MgYSB2YWxpZCAuaW5rLmpzb24gZmlsZT9cIik7bGV0IGk9cGFyc2VJbnQoZSk7aWYoaT5YLmlua1ZlcnNpb25DdXJyZW50KXRocm93IG5ldyBFcnJvcihcIlZlcnNpb24gb2YgaW5rIHVzZWQgdG8gYnVpbGQgc3Rvcnkgd2FzIG5ld2VyIHRoYW4gdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgZW5naW5lXCIpO2lmKGk8dGhpcy5pbmtWZXJzaW9uTWluaW11bUNvbXBhdGlibGUpdGhyb3cgbmV3IEVycm9yKFwiVmVyc2lvbiBvZiBpbmsgdXNlZCB0byBidWlsZCBzdG9yeSBpcyB0b28gb2xkIHRvIGJlIGxvYWRlZCBieSB0aGlzIHZlcnNpb24gb2YgdGhlIGVuZ2luZVwiKTtpIT1YLmlua1ZlcnNpb25DdXJyZW50JiZjb25zb2xlLndhcm4oXCJXQVJOSU5HOiBWZXJzaW9uIG9mIGluayB1c2VkIHRvIGJ1aWxkIHN0b3J5IGRvZXNuJ3QgbWF0Y2ggY3VycmVudCB2ZXJzaW9uIG9mIGVuZ2luZS4gTm9uLWNyaXRpY2FsLCBidXQgcmVjb21tZW5kIHN5bmNocm9uaXNpbmcuXCIpO2xldCByLGE9dC5yb290O2lmKG51bGw9PWEpdGhyb3cgbmV3IEVycm9yKFwiUm9vdCBub2RlIGZvciBpbmsgbm90IGZvdW5kLiBBcmUgeW91IHN1cmUgaXQncyBhIHZhbGlkIC5pbmsuanNvbiBmaWxlP1wiKTsocj10Lmxpc3REZWZzKSYmKHRoaXMuX2xpc3REZWZpbml0aW9ucz1NLkpUb2tlblRvTGlzdERlZmluaXRpb25zKHIpKSx0aGlzLl9tYWluQ29udGVudENvbnRhaW5lcj1zKE0uSlRva2VuVG9SdW50aW1lT2JqZWN0KGEpLE4pLHRoaXMuUmVzZXRTdGF0ZSgpfX1nZXQgY3VycmVudENob2ljZXMoKXtsZXQgdD1bXTtpZihudWxsPT09dGhpcy5fc3RhdGUpcmV0dXJuIGQoXCJ0aGlzLl9zdGF0ZVwiKTtmb3IobGV0IGUgb2YgdGhpcy5fc3RhdGUuY3VycmVudENob2ljZXMpZS5pc0ludmlzaWJsZURlZmF1bHR8fChlLmluZGV4PXQubGVuZ3RoLHQucHVzaChlKSk7cmV0dXJuIHR9Z2V0IGN1cnJlbnRUZXh0KCl7cmV0dXJuIHRoaXMuSWZBc3luY1dlQ2FudChcImNhbGwgY3VycmVudFRleHQgc2luY2UgaXQncyBhIHdvcmsgaW4gcHJvZ3Jlc3NcIiksdGhpcy5zdGF0ZS5jdXJyZW50VGV4dH1nZXQgY3VycmVudFRhZ3MoKXtyZXR1cm4gdGhpcy5JZkFzeW5jV2VDYW50KFwiY2FsbCBjdXJyZW50VGFncyBzaW5jZSBpdCdzIGEgd29yayBpbiBwcm9ncmVzc1wiKSx0aGlzLnN0YXRlLmN1cnJlbnRUYWdzfWdldCBjdXJyZW50RXJyb3JzKCl7cmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudEVycm9yc31nZXQgY3VycmVudFdhcm5pbmdzKCl7cmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudFdhcm5pbmdzfWdldCBoYXNFcnJvcigpe3JldHVybiB0aGlzLnN0YXRlLmhhc0Vycm9yfWdldCBoYXNXYXJuaW5nKCl7cmV0dXJuIHRoaXMuc3RhdGUuaGFzV2FybmluZ31nZXQgdmFyaWFibGVzU3RhdGUoKXtyZXR1cm4gdGhpcy5zdGF0ZS52YXJpYWJsZXNTdGF0ZX1nZXQgbGlzdERlZmluaXRpb25zKCl7cmV0dXJuIHRoaXMuX2xpc3REZWZpbml0aW9uc31nZXQgc3RhdGUoKXtyZXR1cm4gdGhpcy5fc3RhdGV9U3RhcnRQcm9maWxpbmcoKXt9RW5kUHJvZmlsaW5nKCl7fVRvSnNvbih0KXtsZXQgZT0hMTtpZih0fHwoZT0hMCx0PW5ldyB6LldyaXRlciksdC5Xcml0ZU9iamVjdFN0YXJ0KCksdC5Xcml0ZUludFByb3BlcnR5KFwiaW5rVmVyc2lvblwiLFguaW5rVmVyc2lvbkN1cnJlbnQpLHQuV3JpdGVQcm9wZXJ0eShcInJvb3RcIix0PT5NLldyaXRlUnVudGltZUNvbnRhaW5lcih0LHRoaXMuX21haW5Db250ZW50Q29udGFpbmVyKSksbnVsbCE9dGhpcy5fbGlzdERlZmluaXRpb25zKXt0LldyaXRlUHJvcGVydHlTdGFydChcImxpc3REZWZzXCIpLHQuV3JpdGVPYmplY3RTdGFydCgpO2ZvcihsZXQgZSBvZiB0aGlzLl9saXN0RGVmaW5pdGlvbnMubGlzdHMpe3QuV3JpdGVQcm9wZXJ0eVN0YXJ0KGUubmFtZSksdC5Xcml0ZU9iamVjdFN0YXJ0KCk7Zm9yKGxldFtuLGldb2YgZS5pdGVtcyl7bGV0IGU9Zi5mcm9tU2VyaWFsaXplZEtleShuKSxyPWk7dC5Xcml0ZUludFByb3BlcnR5KGUuaXRlbU5hbWUscil9dC5Xcml0ZU9iamVjdEVuZCgpLHQuV3JpdGVQcm9wZXJ0eUVuZCgpfXQuV3JpdGVPYmplY3RFbmQoKSx0LldyaXRlUHJvcGVydHlFbmQoKX1pZih0LldyaXRlT2JqZWN0RW5kKCksZSlyZXR1cm4gdC5Ub1N0cmluZygpfVJlc2V0U3RhdGUoKXt0aGlzLklmQXN5bmNXZUNhbnQoXCJSZXNldFN0YXRlXCIpLHRoaXMuX3N0YXRlPW5ldyBIKHRoaXMpLHRoaXMuX3N0YXRlLnZhcmlhYmxlc1N0YXRlLk9ic2VydmVWYXJpYWJsZUNoYW5nZSh0aGlzLlZhcmlhYmxlU3RhdGVEaWRDaGFuZ2VFdmVudC5iaW5kKHRoaXMpKSx0aGlzLlJlc2V0R2xvYmFscygpfVJlc2V0RXJyb3JzKCl7aWYobnVsbD09PXRoaXMuX3N0YXRlKXJldHVybiBkKFwidGhpcy5fc3RhdGVcIik7dGhpcy5fc3RhdGUuUmVzZXRFcnJvcnMoKX1SZXNldENhbGxzdGFjaygpe2lmKHRoaXMuSWZBc3luY1dlQ2FudChcIlJlc2V0Q2FsbHN0YWNrXCIpLG51bGw9PT10aGlzLl9zdGF0ZSlyZXR1cm4gZChcInRoaXMuX3N0YXRlXCIpO3RoaXMuX3N0YXRlLkZvcmNlRW5kKCl9UmVzZXRHbG9iYWxzKCl7aWYodGhpcy5fbWFpbkNvbnRlbnRDb250YWluZXIubmFtZWRDb250ZW50LmdldChcImdsb2JhbCBkZWNsXCIpKXtsZXQgdD10aGlzLnN0YXRlLmN1cnJlbnRQb2ludGVyLmNvcHkoKTt0aGlzLkNob29zZVBhdGgobmV3IGUoXCJnbG9iYWwgZGVjbFwiKSwhMSksdGhpcy5Db250aW51ZUludGVybmFsKCksdGhpcy5zdGF0ZS5jdXJyZW50UG9pbnRlcj10fXRoaXMuc3RhdGUudmFyaWFibGVzU3RhdGUuU25hcHNob3REZWZhdWx0R2xvYmFscygpfUNvbnRpbnVlKCl7cmV0dXJuIHRoaXMuQ29udGludWVBc3luYygwKSx0aGlzLmN1cnJlbnRUZXh0fWdldCBjYW5Db250aW51ZSgpe3JldHVybiB0aGlzLnN0YXRlLmNhbkNvbnRpbnVlfWdldCBhc3luY0NvbnRpbnVlQ29tcGxldGUoKXtyZXR1cm4hdGhpcy5fYXN5bmNDb250aW51ZUFjdGl2ZX1Db250aW51ZUFzeW5jKHQpe3RoaXMuX2hhc1ZhbGlkYXRlZEV4dGVybmFsc3x8dGhpcy5WYWxpZGF0ZUV4dGVybmFsQmluZGluZ3MoKSx0aGlzLkNvbnRpbnVlSW50ZXJuYWwodCl9Q29udGludWVJbnRlcm5hbCh0PTApe251bGwhPXRoaXMuX3Byb2ZpbGVyJiZ0aGlzLl9wcm9maWxlci5QcmVDb250aW51ZSgpO2xldCBlPXQ+MDtpZih0aGlzLl9yZWN1cnNpdmVDb250aW51ZUNvdW50KyssIXRoaXMuX2FzeW5jQ29udGludWVBY3RpdmUpe2lmKHRoaXMuX2FzeW5jQ29udGludWVBY3RpdmU9ZSwhdGhpcy5jYW5Db250aW51ZSl0aHJvdyBuZXcgUyhcIkNhbid0IGNvbnRpbnVlIC0gc2hvdWxkIGNoZWNrIGNhbkNvbnRpbnVlIGJlZm9yZSBjYWxsaW5nIENvbnRpbnVlXCIpO3RoaXMuX3N0YXRlLmRpZFNhZmVFeGl0PSExLHRoaXMuX3N0YXRlLlJlc2V0T3V0cHV0KCksMT09dGhpcy5fcmVjdXJzaXZlQ29udGludWVDb3VudCYmKHRoaXMuX3N0YXRlLnZhcmlhYmxlc1N0YXRlLmJhdGNoT2JzZXJ2aW5nVmFyaWFibGVDaGFuZ2VzPSEwKX1sZXQgbj1uZXcgJDtuLlN0YXJ0KCk7bGV0IGk9ITE7ZG97dHJ5e2k9dGhpcy5Db250aW51ZVNpbmdsZVN0ZXAoKX1jYXRjaCh0KXtpZighKHQgaW5zdGFuY2VvZiBTKSl0aHJvdyB0O3RoaXMuQWRkRXJyb3IodC5tZXNzYWdlLHZvaWQgMCx0LnVzZUVuZExpbmVOdW1iZXIpO2JyZWFrfWlmKGkpYnJlYWs7aWYodGhpcy5fYXN5bmNDb250aW51ZUFjdGl2ZSYmbi5FbGFwc2VkTWlsbGlzZWNvbmRzPnQpYnJlYWt9d2hpbGUodGhpcy5jYW5Db250aW51ZSk7bi5TdG9wKCksIWkmJnRoaXMuY2FuQ29udGludWV8fChudWxsIT09dGhpcy5fc3RhdGVTbmFwc2hvdEF0TGFzdE5ld2xpbmUmJnRoaXMuUmVzdG9yZVN0YXRlU25hcHNob3QoKSx0aGlzLmNhbkNvbnRpbnVlfHwodGhpcy5zdGF0ZS5jYWxsU3RhY2suY2FuUG9wVGhyZWFkJiZ0aGlzLkFkZEVycm9yKFwiVGhyZWFkIGF2YWlsYWJsZSB0byBwb3AsIHRocmVhZHMgc2hvdWxkIGFsd2F5cyBiZSBmbGF0IGJ5IHRoZSBlbmQgb2YgZXZhbHVhdGlvbj9cIiksMCE9dGhpcy5zdGF0ZS5nZW5lcmF0ZWRDaG9pY2VzLmxlbmd0aHx8dGhpcy5zdGF0ZS5kaWRTYWZlRXhpdHx8bnVsbCE9dGhpcy5fdGVtcG9yYXJ5RXZhbHVhdGlvbkNvbnRhaW5lcnx8KHRoaXMuc3RhdGUuY2FsbFN0YWNrLkNhblBvcChyLlR1bm5lbCk/dGhpcy5BZGRFcnJvcihcInVuZXhwZWN0ZWRseSByZWFjaGVkIGVuZCBvZiBjb250ZW50LiBEbyB5b3UgbmVlZCBhICctPi0+JyB0byByZXR1cm4gZnJvbSBhIHR1bm5lbD9cIik6dGhpcy5zdGF0ZS5jYWxsU3RhY2suQ2FuUG9wKHIuRnVuY3Rpb24pP3RoaXMuQWRkRXJyb3IoXCJ1bmV4cGVjdGVkbHkgcmVhY2hlZCBlbmQgb2YgY29udGVudC4gRG8geW91IG5lZWQgYSAnfiByZXR1cm4nP1wiKTp0aGlzLnN0YXRlLmNhbGxTdGFjay5jYW5Qb3A/dGhpcy5BZGRFcnJvcihcInVuZXhwZWN0ZWRseSByZWFjaGVkIGVuZCBvZiBjb250ZW50IGZvciB1bmtub3duIHJlYXNvbi4gUGxlYXNlIGRlYnVnIGNvbXBpbGVyIVwiKTp0aGlzLkFkZEVycm9yKFwicmFuIG91dCBvZiBjb250ZW50LiBEbyB5b3UgbmVlZCBhICctPiBET05FJyBvciAnLT4gRU5EJz9cIikpKSx0aGlzLnN0YXRlLmRpZFNhZmVFeGl0PSExLDE9PXRoaXMuX3JlY3Vyc2l2ZUNvbnRpbnVlQ291bnQmJih0aGlzLl9zdGF0ZS52YXJpYWJsZXNTdGF0ZS5iYXRjaE9ic2VydmluZ1ZhcmlhYmxlQ2hhbmdlcz0hMSksdGhpcy5fYXN5bmNDb250aW51ZUFjdGl2ZT0hMSksdGhpcy5fcmVjdXJzaXZlQ29udGludWVDb3VudC0tLG51bGwhPXRoaXMuX3Byb2ZpbGVyJiZ0aGlzLl9wcm9maWxlci5Qb3N0Q29udGludWUoKX1Db250aW51ZVNpbmdsZVN0ZXAoKXtpZihudWxsIT10aGlzLl9wcm9maWxlciYmdGhpcy5fcHJvZmlsZXIuUHJlU3RlcCgpLHRoaXMuU3RlcCgpLG51bGwhPXRoaXMuX3Byb2ZpbGVyJiZ0aGlzLl9wcm9maWxlci5Qb3N0U3RlcCgpLHRoaXMuY2FuQ29udGludWV8fHRoaXMuc3RhdGUuY2FsbFN0YWNrLmVsZW1lbnRJc0V2YWx1YXRlRnJvbUdhbWV8fHRoaXMuVHJ5Rm9sbG93RGVmYXVsdEludmlzaWJsZUNob2ljZSgpLG51bGwhPXRoaXMuX3Byb2ZpbGVyJiZ0aGlzLl9wcm9maWxlci5QcmVTbmFwc2hvdCgpLCF0aGlzLnN0YXRlLmluU3RyaW5nRXZhbHVhdGlvbil7aWYobnVsbCE9PXRoaXMuX3N0YXRlU25hcHNob3RBdExhc3ROZXdsaW5lKXtpZihudWxsPT09dGhpcy5fc3RhdGVTbmFwc2hvdEF0TGFzdE5ld2xpbmUuY3VycmVudFRhZ3MpcmV0dXJuIGQoXCJ0aGlzLl9zdGF0ZUF0TGFzdE5ld2xpbmUuY3VycmVudFRhZ3NcIik7aWYobnVsbD09PXRoaXMuc3RhdGUuY3VycmVudFRhZ3MpcmV0dXJuIGQoXCJ0aGlzLnN0YXRlLmN1cnJlbnRUYWdzXCIpO2xldCB0PXRoaXMuQ2FsY3VsYXRlTmV3bGluZU91dHB1dFN0YXRlQ2hhbmdlKHRoaXMuX3N0YXRlU25hcHNob3RBdExhc3ROZXdsaW5lLmN1cnJlbnRUZXh0LHRoaXMuc3RhdGUuY3VycmVudFRleHQsdGhpcy5fc3RhdGVTbmFwc2hvdEF0TGFzdE5ld2xpbmUuY3VycmVudFRhZ3MubGVuZ3RoLHRoaXMuc3RhdGUuY3VycmVudFRhZ3MubGVuZ3RoKTtpZih0PT1YLk91dHB1dFN0YXRlQ2hhbmdlLkV4dGVuZGVkQmV5b25kTmV3bGluZSlyZXR1cm4gdGhpcy5SZXN0b3JlU3RhdGVTbmFwc2hvdCgpLCEwO3Q9PVguT3V0cHV0U3RhdGVDaGFuZ2UuTmV3bGluZVJlbW92ZWQmJnRoaXMuRGlzY2FyZFNuYXBzaG90KCl9dGhpcy5zdGF0ZS5vdXRwdXRTdHJlYW1FbmRzSW5OZXdsaW5lJiYodGhpcy5jYW5Db250aW51ZT9udWxsPT10aGlzLl9zdGF0ZVNuYXBzaG90QXRMYXN0TmV3bGluZSYmdGhpcy5TdGF0ZVNuYXBzaG90KCk6dGhpcy5EaXNjYXJkU25hcHNob3QoKSl9cmV0dXJuIG51bGwhPXRoaXMuX3Byb2ZpbGVyJiZ0aGlzLl9wcm9maWxlci5Qb3N0U25hcHNob3QoKSwhMX1DYWxjdWxhdGVOZXdsaW5lT3V0cHV0U3RhdGVDaGFuZ2UodCxlLG4saSl7aWYobnVsbD09PXQpcmV0dXJuIGQoXCJwcmV2VGV4dFwiKTtpZihudWxsPT09ZSlyZXR1cm4gZChcImN1cnJUZXh0XCIpO2xldCByPWUubGVuZ3RoPj10Lmxlbmd0aCYmXCJcXG5cIj09ZS5jaGFyQXQodC5sZW5ndGgtMSk7aWYobj09aSYmdC5sZW5ndGg9PWUubGVuZ3RoJiZyKXJldHVybiBYLk91dHB1dFN0YXRlQ2hhbmdlLk5vQ2hhbmdlO2lmKCFyKXJldHVybiBYLk91dHB1dFN0YXRlQ2hhbmdlLk5ld2xpbmVSZW1vdmVkO2lmKGk+bilyZXR1cm4gWC5PdXRwdXRTdGF0ZUNoYW5nZS5FeHRlbmRlZEJleW9uZE5ld2xpbmU7Zm9yKGxldCBuPXQubGVuZ3RoO248ZS5sZW5ndGg7bisrKXtsZXQgdD1lLmNoYXJBdChuKTtpZihcIiBcIiE9dCYmXCJcXHRcIiE9dClyZXR1cm4gWC5PdXRwdXRTdGF0ZUNoYW5nZS5FeHRlbmRlZEJleW9uZE5ld2xpbmV9cmV0dXJuIFguT3V0cHV0U3RhdGVDaGFuZ2UuTm9DaGFuZ2V9Q29udGludWVNYXhpbWFsbHkoKXt0aGlzLklmQXN5bmNXZUNhbnQoXCJDb250aW51ZU1heGltYWxseVwiKTtsZXQgdD1uZXcgbTtmb3IoO3RoaXMuY2FuQ29udGludWU7KXQuQXBwZW5kKHRoaXMuQ29udGludWUoKSk7cmV0dXJuIHQudG9TdHJpbmcoKX1Db250ZW50QXRQYXRoKHQpe3JldHVybiB0aGlzLm1haW5Db250ZW50Q29udGFpbmVyLkNvbnRlbnRBdFBhdGgodCl9S25vdENvbnRhaW5lcldpdGhOYW1lKHQpe2xldCBlPXRoaXMubWFpbkNvbnRlbnRDb250YWluZXIubmFtZWRDb250ZW50LmdldCh0KTtyZXR1cm4gZSBpbnN0YW5jZW9mIE4/ZTpudWxsfVBvaW50ZXJBdFBhdGgodCl7aWYoMD09dC5sZW5ndGgpcmV0dXJuIEkuTnVsbDtsZXQgZT1uZXcgSSxuPXQubGVuZ3RoLGk9bnVsbDtyZXR1cm4gbnVsbD09PXQubGFzdENvbXBvbmVudD9kKFwicGF0aC5sYXN0Q29tcG9uZW50XCIpOih0Lmxhc3RDb21wb25lbnQuaXNJbmRleD8obj10Lmxlbmd0aC0xLGk9dGhpcy5tYWluQ29udGVudENvbnRhaW5lci5Db250ZW50QXRQYXRoKHQsdm9pZCAwLG4pLGUuY29udGFpbmVyPWkuY29udGFpbmVyLGUuaW5kZXg9dC5sYXN0Q29tcG9uZW50LmluZGV4KTooaT10aGlzLm1haW5Db250ZW50Q29udGFpbmVyLkNvbnRlbnRBdFBhdGgodCksZS5jb250YWluZXI9aS5jb250YWluZXIsZS5pbmRleD0tMSksbnVsbD09aS5vYmp8fGkub2JqPT10aGlzLm1haW5Db250ZW50Q29udGFpbmVyJiZuPjA/dGhpcy5FcnJvcihcIkZhaWxlZCB0byBmaW5kIGNvbnRlbnQgYXQgcGF0aCAnXCIrdCtcIicsIGFuZCBubyBhcHByb3hpbWF0aW9uIG9mIGl0IHdhcyBwb3NzaWJsZS5cIik6aS5hcHByb3hpbWF0ZSYmdGhpcy5XYXJuaW5nKFwiRmFpbGVkIHRvIGZpbmQgY29udGVudCBhdCBwYXRoICdcIit0K1wiJywgc28gaXQgd2FzIGFwcHJveGltYXRlZCB0bzogJ1wiK2kub2JqLnBhdGgrXCInLlwiKSxlKX1TdGF0ZVNuYXBzaG90KCl7dGhpcy5fc3RhdGVTbmFwc2hvdEF0TGFzdE5ld2xpbmU9dGhpcy5fc3RhdGUsdGhpcy5fc3RhdGU9dGhpcy5fc3RhdGUuQ29weUFuZFN0YXJ0UGF0Y2hpbmcoKX1SZXN0b3JlU3RhdGVTbmFwc2hvdCgpe251bGw9PT10aGlzLl9zdGF0ZVNuYXBzaG90QXRMYXN0TmV3bGluZSYmZChcIl9zdGF0ZVNuYXBzaG90QXRMYXN0TmV3bGluZVwiKSx0aGlzLl9zdGF0ZVNuYXBzaG90QXRMYXN0TmV3bGluZS5SZXN0b3JlQWZ0ZXJQYXRjaCgpLHRoaXMuX3N0YXRlPXRoaXMuX3N0YXRlU25hcHNob3RBdExhc3ROZXdsaW5lLHRoaXMuX3N0YXRlU25hcHNob3RBdExhc3ROZXdsaW5lPW51bGwsdGhpcy5fYXN5bmNTYXZpbmd8fHRoaXMuX3N0YXRlLkFwcGx5QW55UGF0Y2goKX1EaXNjYXJkU25hcHNob3QoKXt0aGlzLl9hc3luY1NhdmluZ3x8dGhpcy5fc3RhdGUuQXBwbHlBbnlQYXRjaCgpLHRoaXMuX3N0YXRlU25hcHNob3RBdExhc3ROZXdsaW5lPW51bGx9Q29weVN0YXRlRm9yQmFja2dyb3VuZFRocmVhZFNhdmUoKXtpZih0aGlzLklmQXN5bmNXZUNhbnQoXCJzdGFydCBzYXZpbmcgb24gYSBiYWNrZ3JvdW5kIHRocmVhZFwiKSx0aGlzLl9hc3luY1NhdmluZyl0aHJvdyBuZXcgRXJyb3IoXCJTdG9yeSBpcyBhbHJlYWR5IGluIGJhY2tncm91bmQgc2F2aW5nIG1vZGUsIGNhbid0IGNhbGwgQ29weVN0YXRlRm9yQmFja2dyb3VuZFRocmVhZFNhdmUgYWdhaW4hXCIpO2xldCB0PXRoaXMuX3N0YXRlO3JldHVybiB0aGlzLl9zdGF0ZT10aGlzLl9zdGF0ZS5Db3B5QW5kU3RhcnRQYXRjaGluZygpLHRoaXMuX2FzeW5jU2F2aW5nPSEwLHR9QmFja2dyb3VuZFNhdmVDb21wbGV0ZSgpe251bGw9PT10aGlzLl9zdGF0ZVNuYXBzaG90QXRMYXN0TmV3bGluZSYmdGhpcy5fc3RhdGUuQXBwbHlBbnlQYXRjaCgpLHRoaXMuX2FzeW5jU2F2aW5nPSExfVN0ZXAoKXtsZXQgdD0hMCxlPXRoaXMuc3RhdGUuY3VycmVudFBvaW50ZXIuY29weSgpO2lmKGUuaXNOdWxsKXJldHVybjtsZXQgbj1hKGUuUmVzb2x2ZSgpLE4pO2Zvcig7biYmKHRoaXMuVmlzaXRDb250YWluZXIobiwhMCksMCE9bi5jb250ZW50Lmxlbmd0aCk7KWU9SS5TdGFydE9mKG4pLG49YShlLlJlc29sdmUoKSxOKTt0aGlzLnN0YXRlLmN1cnJlbnRQb2ludGVyPWUuY29weSgpLG51bGwhPXRoaXMuX3Byb2ZpbGVyJiZ0aGlzLl9wcm9maWxlci5TdGVwKHRoaXMuc3RhdGUuY2FsbFN0YWNrKTtsZXQgaT1lLlJlc29sdmUoKSxyPXRoaXMuUGVyZm9ybUxvZ2ljQW5kRmxvd0NvbnRyb2woaSk7aWYodGhpcy5zdGF0ZS5jdXJyZW50UG9pbnRlci5pc051bGwpcmV0dXJuO3ImJih0PSExKTtsZXQgcz1hKGksVyk7aWYocyl7bGV0IGU9dGhpcy5Qcm9jZXNzQ2hvaWNlKHMpO2UmJnRoaXMuc3RhdGUuZ2VuZXJhdGVkQ2hvaWNlcy5wdXNoKGUpLGk9bnVsbCx0PSExfWlmKGkgaW5zdGFuY2VvZiBOJiYodD0hMSksdCl7bGV0IHQ9YShpLHcpO2lmKHQmJi0xPT10LmNvbnRleHRJbmRleCl7bGV0IGU9dGhpcy5zdGF0ZS5jYWxsU3RhY2suQ29udGV4dEZvclZhcmlhYmxlTmFtZWQodC52YXJpYWJsZU5hbWUpO2k9bmV3IHcodC52YXJpYWJsZU5hbWUsZSl9dGhpcy5zdGF0ZS5pbkV4cHJlc3Npb25FdmFsdWF0aW9uP3RoaXMuc3RhdGUuUHVzaEV2YWx1YXRpb25TdGFjayhpKTp0aGlzLnN0YXRlLlB1c2hUb091dHB1dFN0cmVhbShpKX10aGlzLk5leHRDb250ZW50KCk7bGV0IGw9YShpLEEpO2wmJmwuY29tbWFuZFR5cGU9PUEuQ29tbWFuZFR5cGUuU3RhcnRUaHJlYWQmJnRoaXMuc3RhdGUuY2FsbFN0YWNrLlB1c2hUaHJlYWQoKX1WaXNpdENvbnRhaW5lcih0LGUpe3QuY291bnRpbmdBdFN0YXJ0T25seSYmIWV8fCh0LnZpc2l0c1Nob3VsZEJlQ291bnRlZCYmdGhpcy5zdGF0ZS5JbmNyZW1lbnRWaXNpdENvdW50Rm9yQ29udGFpbmVyKHQpLHQudHVybkluZGV4U2hvdWxkQmVDb3VudGVkJiZ0aGlzLnN0YXRlLlJlY29yZFR1cm5JbmRleFZpc2l0VG9Db250YWluZXIodCkpfVZpc2l0Q2hhbmdlZENvbnRhaW5lcnNEdWVUb0RpdmVydCgpe2xldCB0PXRoaXMuc3RhdGUucHJldmlvdXNQb2ludGVyLmNvcHkoKSxlPXRoaXMuc3RhdGUuY3VycmVudFBvaW50ZXIuY29weSgpO2lmKGUuaXNOdWxsfHwtMT09ZS5pbmRleClyZXR1cm47aWYodGhpcy5fcHJldkNvbnRhaW5lcnMubGVuZ3RoPTAsIXQuaXNOdWxsKXtsZXQgZT1hKHQuUmVzb2x2ZSgpLE4pfHxhKHQuY29udGFpbmVyLE4pO2Zvcig7ZTspdGhpcy5fcHJldkNvbnRhaW5lcnMucHVzaChlKSxlPWEoZS5wYXJlbnQsTil9bGV0IG49ZS5SZXNvbHZlKCk7aWYobnVsbD09bilyZXR1cm47bGV0IGk9YShuLnBhcmVudCxOKTtmb3IoO2kmJih0aGlzLl9wcmV2Q29udGFpbmVycy5pbmRleE9mKGkpPDB8fGkuY291bnRpbmdBdFN0YXJ0T25seSk7KXtsZXQgdD1pLmNvbnRlbnQubGVuZ3RoPjAmJm49PWkuY29udGVudFswXTt0aGlzLlZpc2l0Q29udGFpbmVyKGksdCksbj1pLGk9YShpLnBhcmVudCxOKX19UHJvY2Vzc0Nob2ljZSh0KXtsZXQgZT0hMDtpZih0Lmhhc0NvbmRpdGlvbil7bGV0IHQ9dGhpcy5zdGF0ZS5Qb3BFdmFsdWF0aW9uU3RhY2soKTt0aGlzLklzVHJ1dGh5KHQpfHwoZT0hMSl9bGV0IG49XCJcIixpPVwiXCI7aWYodC5oYXNDaG9pY2VPbmx5Q29udGVudCl7aT1zKHRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCksVCkudmFsdWV8fFwiXCJ9aWYodC5oYXNTdGFydENvbnRlbnQpe249cyh0aGlzLnN0YXRlLlBvcEV2YWx1YXRpb25TdGFjaygpLFQpLnZhbHVlfHxcIlwifWlmKHQub25jZU9ubHkpe3RoaXMuc3RhdGUuVmlzaXRDb3VudEZvckNvbnRhaW5lcih0LmNob2ljZVRhcmdldCk+MCYmKGU9ITEpfWlmKCFlKXJldHVybiBudWxsO2xldCByPW5ldyBEO3JldHVybiByLnRhcmdldFBhdGg9dC5wYXRoT25DaG9pY2Usci5zb3VyY2VQYXRoPXQucGF0aC50b1N0cmluZygpLHIuaXNJbnZpc2libGVEZWZhdWx0PXQuaXNJbnZpc2libGVEZWZhdWx0LHIudGhyZWFkQXRHZW5lcmF0aW9uPXRoaXMuc3RhdGUuY2FsbFN0YWNrLkZvcmtUaHJlYWQoKSxyLnRleHQ9KG4raSkucmVwbGFjZSgvXlsgXFx0XSt8WyBcXHRdKyQvZyxcIlwiKSxyfUlzVHJ1dGh5KHQpe2lmKHQgaW5zdGFuY2VvZiB2KXtsZXQgZT10O2lmKGUgaW5zdGFuY2VvZiBQKXtsZXQgdD1lO3JldHVybiB0aGlzLkVycm9yKFwiU2hvdWxkbid0IHVzZSBhIGRpdmVydCB0YXJnZXQgKHRvIFwiK3QudGFyZ2V0UGF0aCtcIikgYXMgYSBjb25kaXRpb25hbCB2YWx1ZS4gRGlkIHlvdSBpbnRlbmQgYSBmdW5jdGlvbiBjYWxsICdsaWtlVGhpcygpJyBvciBhIHJlYWQgY291bnQgY2hlY2sgJ2xpa2VUaGlzJz8gKG5vIGFycm93cylcIiksITF9cmV0dXJuIGUuaXNUcnV0aHl9cmV0dXJuITF9UGVyZm9ybUxvZ2ljQW5kRmxvd0NvbnRyb2wodCl7aWYobnVsbD09dClyZXR1cm4hMTtpZih0IGluc3RhbmNlb2Ygayl7bGV0IGU9dDtpZihlLmlzQ29uZGl0aW9uYWwpe2xldCB0PXRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCk7aWYoIXRoaXMuSXNUcnV0aHkodCkpcmV0dXJuITB9aWYoZS5oYXNWYXJpYWJsZVRhcmdldCl7bGV0IHQ9ZS52YXJpYWJsZURpdmVydE5hbWUsbj10aGlzLnN0YXRlLnZhcmlhYmxlc1N0YXRlLkdldFZhcmlhYmxlV2l0aE5hbWUodCk7aWYobnVsbD09bil0aGlzLkVycm9yKFwiVHJpZWQgdG8gZGl2ZXJ0IHVzaW5nIGEgdGFyZ2V0IGZyb20gYSB2YXJpYWJsZSB0aGF0IGNvdWxkIG5vdCBiZSBmb3VuZCAoXCIrdCtcIilcIik7ZWxzZSBpZighKG4gaW5zdGFuY2VvZiBQKSl7bGV0IGU9YShuLGIpLGk9XCJUcmllZCB0byBkaXZlcnQgdG8gYSB0YXJnZXQgZnJvbSBhIHZhcmlhYmxlLCBidXQgdGhlIHZhcmlhYmxlIChcIit0K1wiKSBkaWRuJ3QgY29udGFpbiBhIGRpdmVydCB0YXJnZXQsIGl0IFwiO2UgaW5zdGFuY2VvZiBiJiYwPT1lLnZhbHVlP2krPVwid2FzIGVtcHR5L251bGwgKHRoZSB2YWx1ZSAwKS5cIjppKz1cImNvbnRhaW5lZCAnXCIrbitcIicuXCIsdGhpcy5FcnJvcihpKX1sZXQgaT1zKG4sUCk7dGhpcy5zdGF0ZS5kaXZlcnRlZFBvaW50ZXI9dGhpcy5Qb2ludGVyQXRQYXRoKGkudGFyZ2V0UGF0aCl9ZWxzZXtpZihlLmlzRXh0ZXJuYWwpcmV0dXJuIHRoaXMuQ2FsbEV4dGVybmFsRnVuY3Rpb24oZS50YXJnZXRQYXRoU3RyaW5nLGUuZXh0ZXJuYWxBcmdzKSwhMDt0aGlzLnN0YXRlLmRpdmVydGVkUG9pbnRlcj1lLnRhcmdldFBvaW50ZXIuY29weSgpfXJldHVybiBlLnB1c2hlc1RvU3RhY2smJnRoaXMuc3RhdGUuY2FsbFN0YWNrLlB1c2goZS5zdGFja1B1c2hUeXBlLHZvaWQgMCx0aGlzLnN0YXRlLm91dHB1dFN0cmVhbS5sZW5ndGgpLHRoaXMuc3RhdGUuZGl2ZXJ0ZWRQb2ludGVyLmlzTnVsbCYmIWUuaXNFeHRlcm5hbCYmKGUmJmUuZGVidWdNZXRhZGF0YSYmbnVsbCE9ZS5kZWJ1Z01ldGFkYXRhLnNvdXJjZU5hbWU/dGhpcy5FcnJvcihcIkRpdmVydCB0YXJnZXQgZG9lc24ndCBleGlzdDogXCIrZS5kZWJ1Z01ldGFkYXRhLnNvdXJjZU5hbWUpOnRoaXMuRXJyb3IoXCJEaXZlcnQgcmVzb2x1dGlvbiBmYWlsZWQ6IFwiK2UpKSwhMH1pZih0IGluc3RhbmNlb2YgQSl7bGV0IGU9dDtzd2l0Y2goZS5jb21tYW5kVHlwZSl7Y2FzZSBBLkNvbW1hbmRUeXBlLkV2YWxTdGFydDp0aGlzLkFzc2VydCghMT09PXRoaXMuc3RhdGUuaW5FeHByZXNzaW9uRXZhbHVhdGlvbixcIkFscmVhZHkgaW4gZXhwcmVzc2lvbiBldmFsdWF0aW9uP1wiKSx0aGlzLnN0YXRlLmluRXhwcmVzc2lvbkV2YWx1YXRpb249ITA7YnJlYWs7Y2FzZSBBLkNvbW1hbmRUeXBlLkV2YWxFbmQ6dGhpcy5Bc3NlcnQoITA9PT10aGlzLnN0YXRlLmluRXhwcmVzc2lvbkV2YWx1YXRpb24sXCJOb3QgaW4gZXhwcmVzc2lvbiBldmFsdWF0aW9uIG1vZGVcIiksdGhpcy5zdGF0ZS5pbkV4cHJlc3Npb25FdmFsdWF0aW9uPSExO2JyZWFrO2Nhc2UgQS5Db21tYW5kVHlwZS5FdmFsT3V0cHV0OmlmKHRoaXMuc3RhdGUuZXZhbHVhdGlvblN0YWNrLmxlbmd0aD4wKXtsZXQgdD10aGlzLnN0YXRlLlBvcEV2YWx1YXRpb25TdGFjaygpO2lmKCEodCBpbnN0YW5jZW9mIEwpKXtsZXQgZT1uZXcgVCh0LnRvU3RyaW5nKCkpO3RoaXMuc3RhdGUuUHVzaFRvT3V0cHV0U3RyZWFtKGUpfX1icmVhaztjYXNlIEEuQ29tbWFuZFR5cGUuTm9PcDpicmVhaztjYXNlIEEuQ29tbWFuZFR5cGUuRHVwbGljYXRlOnRoaXMuc3RhdGUuUHVzaEV2YWx1YXRpb25TdGFjayh0aGlzLnN0YXRlLlBlZWtFdmFsdWF0aW9uU3RhY2soKSk7YnJlYWs7Y2FzZSBBLkNvbW1hbmRUeXBlLlBvcEV2YWx1YXRlZFZhbHVlOnRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCk7YnJlYWs7Y2FzZSBBLkNvbW1hbmRUeXBlLlBvcEZ1bmN0aW9uOmNhc2UgQS5Db21tYW5kVHlwZS5Qb3BUdW5uZWw6bGV0IHQ9ZS5jb21tYW5kVHlwZT09QS5Db21tYW5kVHlwZS5Qb3BGdW5jdGlvbj9yLkZ1bmN0aW9uOnIuVHVubmVsLG49bnVsbDtpZih0PT1yLlR1bm5lbCl7bGV0IHQ9dGhpcy5zdGF0ZS5Qb3BFdmFsdWF0aW9uU3RhY2soKTtuPWEodCxQKSxudWxsPT09biYmdGhpcy5Bc3NlcnQodCBpbnN0YW5jZW9mIEwsXCJFeHBlY3RlZCB2b2lkIGlmIC0+LT4gZG9lc24ndCBvdmVycmlkZSB0YXJnZXRcIil9aWYodGhpcy5zdGF0ZS5UcnlFeGl0RnVuY3Rpb25FdmFsdWF0aW9uRnJvbUdhbWUoKSlicmVhaztpZih0aGlzLnN0YXRlLmNhbGxTdGFjay5jdXJyZW50RWxlbWVudC50eXBlPT10JiZ0aGlzLnN0YXRlLmNhbGxTdGFjay5jYW5Qb3ApdGhpcy5zdGF0ZS5Qb3BDYWxsU3RhY2soKSxuJiYodGhpcy5zdGF0ZS5kaXZlcnRlZFBvaW50ZXI9dGhpcy5Qb2ludGVyQXRQYXRoKG4udGFyZ2V0UGF0aCkpO2Vsc2V7bGV0IGU9bmV3IE1hcDtlLnNldChyLkZ1bmN0aW9uLFwiZnVuY3Rpb24gcmV0dXJuIHN0YXRlbWVudCAofiByZXR1cm4pXCIpLGUuc2V0KHIuVHVubmVsLFwidHVubmVsIG9ud2FyZHMgc3RhdGVtZW50ICgtPi0+KVwiKTtsZXQgbj1lLmdldCh0aGlzLnN0YXRlLmNhbGxTdGFjay5jdXJyZW50RWxlbWVudC50eXBlKTt0aGlzLnN0YXRlLmNhbGxTdGFjay5jYW5Qb3B8fChuPVwiZW5kIG9mIGZsb3cgKC0+IEVORCBvciBjaG9pY2UpXCIpO2xldCBpPVwiRm91bmQgXCIrZS5nZXQodCkrXCIsIHdoZW4gZXhwZWN0ZWQgXCIrbjt0aGlzLkVycm9yKGkpfWJyZWFrO2Nhc2UgQS5Db21tYW5kVHlwZS5CZWdpblN0cmluZzp0aGlzLnN0YXRlLlB1c2hUb091dHB1dFN0cmVhbShlKSx0aGlzLkFzc2VydCghMD09PXRoaXMuc3RhdGUuaW5FeHByZXNzaW9uRXZhbHVhdGlvbixcIkV4cGVjdGVkIHRvIGJlIGluIGFuIGV4cHJlc3Npb24gd2hlbiBldmFsdWF0aW5nIGEgc3RyaW5nXCIpLHRoaXMuc3RhdGUuaW5FeHByZXNzaW9uRXZhbHVhdGlvbj0hMTticmVhaztjYXNlIEEuQ29tbWFuZFR5cGUuRW5kU3RyaW5nOmxldCBpPVtdLGw9MDtmb3IobGV0IHQ9dGhpcy5zdGF0ZS5vdXRwdXRTdHJlYW0ubGVuZ3RoLTE7dD49MDstLXQpe2xldCBlPXRoaXMuc3RhdGUub3V0cHV0U3RyZWFtW3RdO2wrKztsZXQgbj1hKGUsQSk7aWYobiYmbi5jb21tYW5kVHlwZT09QS5Db21tYW5kVHlwZS5CZWdpblN0cmluZylicmVhaztlIGluc3RhbmNlb2YgVCYmaS5wdXNoKGUpfXRoaXMuc3RhdGUuUG9wRnJvbU91dHB1dFN0cmVhbShsKSxpPWkucmV2ZXJzZSgpO2xldCBvPW5ldyBtO2ZvcihsZXQgdCBvZiBpKW8uQXBwZW5kKHQudG9TdHJpbmcoKSk7dGhpcy5zdGF0ZS5pbkV4cHJlc3Npb25FdmFsdWF0aW9uPSEwLHRoaXMuc3RhdGUuUHVzaEV2YWx1YXRpb25TdGFjayhuZXcgVChvLnRvU3RyaW5nKCkpKTticmVhaztjYXNlIEEuQ29tbWFuZFR5cGUuQ2hvaWNlQ291bnQ6bGV0IHU9dGhpcy5zdGF0ZS5nZW5lcmF0ZWRDaG9pY2VzLmxlbmd0aDt0aGlzLnN0YXRlLlB1c2hFdmFsdWF0aW9uU3RhY2sobmV3IGIodSkpO2JyZWFrO2Nhc2UgQS5Db21tYW5kVHlwZS5UdXJuczp0aGlzLnN0YXRlLlB1c2hFdmFsdWF0aW9uU3RhY2sobmV3IGIodGhpcy5zdGF0ZS5jdXJyZW50VHVybkluZGV4KzEpKTticmVhaztjYXNlIEEuQ29tbWFuZFR5cGUuVHVybnNTaW5jZTpjYXNlIEEuQ29tbWFuZFR5cGUuUmVhZENvdW50OmxldCBoPXRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCk7aWYoIShoIGluc3RhbmNlb2YgUCkpe2xldCB0PVwiXCI7aCBpbnN0YW5jZW9mIGImJih0PVwiLiBEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgcmVhZCBjb3VudCAoJ2tub3RfbmFtZScpIGluc3RlYWQgb2YgYSB0YXJnZXQgKCctPiBrbm90X25hbWUnKT9cIiksdGhpcy5FcnJvcihcIlRVUk5TX1NJTkNFIC8gUkVBRF9DT1VOVCBleHBlY3RlZCBhIGRpdmVydCB0YXJnZXQgKGtub3QsIHN0aXRjaCwgbGFiZWwgbmFtZSksIGJ1dCBzYXcgXCIraCt0KTticmVha31sZXQgYyxwPXMoaCxQKSx5PWEodGhpcy5Db250ZW50QXRQYXRoKHAudGFyZ2V0UGF0aCkuY29ycmVjdE9iaixOKTtudWxsIT15P2M9ZS5jb21tYW5kVHlwZT09QS5Db21tYW5kVHlwZS5UdXJuc1NpbmNlP3RoaXMuc3RhdGUuVHVybnNTaW5jZUZvckNvbnRhaW5lcih5KTp0aGlzLnN0YXRlLlZpc2l0Q291bnRGb3JDb250YWluZXIoeSk6KGM9ZS5jb21tYW5kVHlwZT09QS5Db21tYW5kVHlwZS5UdXJuc1NpbmNlPy0xOjAsdGhpcy5XYXJuaW5nKFwiRmFpbGVkIHRvIGZpbmQgY29udGFpbmVyIGZvciBcIitlLnRvU3RyaW5nKCkrXCIgbG9va3VwIGF0IFwiK3AudGFyZ2V0UGF0aC50b1N0cmluZygpKSksdGhpcy5zdGF0ZS5QdXNoRXZhbHVhdGlvblN0YWNrKG5ldyBiKGMpKTticmVhaztjYXNlIEEuQ29tbWFuZFR5cGUuUmFuZG9tOntsZXQgdD1hKHRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCksYiksZT1hKHRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCksYik7aWYobnVsbD09ZXx8ZSBpbnN0YW5jZW9mIGI9PSExKXJldHVybiB0aGlzLkVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgbWluaW11bSBwYXJhbWV0ZXIgb2YgUkFORE9NKG1pbiwgbWF4KVwiKTtpZihudWxsPT10fHxlIGluc3RhbmNlb2YgYj09ITEpcmV0dXJuIHRoaXMuRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBtYXhpbXVtIHBhcmFtZXRlciBvZiBSQU5ET00obWluLCBtYXgpXCIpO2lmKG51bGw9PT10LnZhbHVlKXJldHVybiBkKFwibWF4SW50LnZhbHVlXCIpO2lmKG51bGw9PT1lLnZhbHVlKXJldHVybiBkKFwibWluSW50LnZhbHVlXCIpO2xldCBuPXQudmFsdWUtZS52YWx1ZSsxO248PTAmJnRoaXMuRXJyb3IoXCJSQU5ET00gd2FzIGNhbGxlZCB3aXRoIG1pbmltdW0gYXMgXCIrZS52YWx1ZStcIiBhbmQgbWF4aW11bSBhcyBcIit0LnZhbHVlK1wiLiBUaGUgbWF4aW11bSBtdXN0IGJlIGxhcmdlclwiKTtsZXQgaT10aGlzLnN0YXRlLnN0b3J5U2VlZCt0aGlzLnN0YXRlLnByZXZpb3VzUmFuZG9tLHI9bmV3IEsoaSkubmV4dCgpLHM9ciVuK2UudmFsdWU7dGhpcy5zdGF0ZS5QdXNoRXZhbHVhdGlvblN0YWNrKG5ldyBiKHMpKSx0aGlzLnN0YXRlLnByZXZpb3VzUmFuZG9tPXI7YnJlYWt9Y2FzZSBBLkNvbW1hbmRUeXBlLlNlZWRSYW5kb206bGV0IEM9YSh0aGlzLnN0YXRlLlBvcEV2YWx1YXRpb25TdGFjaygpLGIpO2lmKG51bGw9PUN8fEMgaW5zdGFuY2VvZiBiPT0hMSlyZXR1cm4gdGhpcy5FcnJvcihcIkludmFsaWQgdmFsdWUgcGFzc2VkIHRvIFNFRURfUkFORE9NXCIpO2lmKG51bGw9PT1DLnZhbHVlKXJldHVybiBkKFwibWluSW50LnZhbHVlXCIpO3RoaXMuc3RhdGUuc3RvcnlTZWVkPUMudmFsdWUsdGhpcy5zdGF0ZS5wcmV2aW91c1JhbmRvbT0wLHRoaXMuc3RhdGUuUHVzaEV2YWx1YXRpb25TdGFjayhuZXcgTCk7YnJlYWs7Y2FzZSBBLkNvbW1hbmRUeXBlLlZpc2l0SW5kZXg6bGV0IF89dGhpcy5zdGF0ZS5WaXNpdENvdW50Rm9yQ29udGFpbmVyKHRoaXMuc3RhdGUuY3VycmVudFBvaW50ZXIuY29udGFpbmVyKS0xO3RoaXMuc3RhdGUuUHVzaEV2YWx1YXRpb25TdGFjayhuZXcgYihfKSk7YnJlYWs7Y2FzZSBBLkNvbW1hbmRUeXBlLlNlcXVlbmNlU2h1ZmZsZUluZGV4OmxldCB3PXRoaXMuTmV4dFNlcXVlbmNlU2h1ZmZsZUluZGV4KCk7dGhpcy5zdGF0ZS5QdXNoRXZhbHVhdGlvblN0YWNrKG5ldyBiKHcpKTticmVhaztjYXNlIEEuQ29tbWFuZFR5cGUuU3RhcnRUaHJlYWQ6YnJlYWs7Y2FzZSBBLkNvbW1hbmRUeXBlLkRvbmU6dGhpcy5zdGF0ZS5jYWxsU3RhY2suY2FuUG9wVGhyZWFkP3RoaXMuc3RhdGUuY2FsbFN0YWNrLlBvcFRocmVhZCgpOih0aGlzLnN0YXRlLmRpZFNhZmVFeGl0PSEwLHRoaXMuc3RhdGUuY3VycmVudFBvaW50ZXI9SS5OdWxsKTticmVhaztjYXNlIEEuQ29tbWFuZFR5cGUuRW5kOnRoaXMuc3RhdGUuRm9yY2VFbmQoKTticmVhaztjYXNlIEEuQ29tbWFuZFR5cGUuTGlzdEZyb21JbnQ6bGV0IEU9YSh0aGlzLnN0YXRlLlBvcEV2YWx1YXRpb25TdGFjaygpLGIpLHg9cyh0aGlzLnN0YXRlLlBvcEV2YWx1YXRpb25TdGFjaygpLFQpO2lmKG51bGw9PT1FKXRocm93IG5ldyBTKFwiUGFzc2VkIG5vbi1pbnRlZ2VyIHdoZW4gY3JlYXRpbmcgYSBsaXN0IGVsZW1lbnQgZnJvbSBhIG51bWVyaWNhbCB2YWx1ZS5cIik7bGV0IGs9bnVsbDtpZihudWxsPT09dGhpcy5saXN0RGVmaW5pdGlvbnMpcmV0dXJuIGQoXCJ0aGlzLmxpc3REZWZpbml0aW9uc1wiKTtsZXQgVz10aGlzLmxpc3REZWZpbml0aW9ucy5UcnlMaXN0R2V0RGVmaW5pdGlvbih4LnZhbHVlLG51bGwpO2lmKCFXLmV4aXN0cyl0aHJvdyBuZXcgUyhcIkZhaWxlZCB0byBmaW5kIExJU1QgY2FsbGVkIFwiK3gudmFsdWUpO3tpZihudWxsPT09RS52YWx1ZSlyZXR1cm4gZChcIm1pbkludC52YWx1ZVwiKTtsZXQgdD1XLnJlc3VsdC5UcnlHZXRJdGVtV2l0aFZhbHVlKEUudmFsdWUsZi5OdWxsKTt0LmV4aXN0cyYmKGs9bmV3IE8odC5yZXN1bHQsRS52YWx1ZSkpfW51bGw9PWsmJihrPW5ldyBPKSx0aGlzLnN0YXRlLlB1c2hFdmFsdWF0aW9uU3RhY2soayk7YnJlYWs7Y2FzZSBBLkNvbW1hbmRUeXBlLkxpc3RSYW5nZTpsZXQgRj1hKHRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCksdiksVj1hKHRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCksdiksUj1hKHRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCksTyk7aWYobnVsbD09PVJ8fG51bGw9PT1WfHxudWxsPT09Ril0aHJvdyBuZXcgUyhcIkV4cGVjdGVkIGxpc3QsIG1pbmltdW0gYW5kIG1heGltdW0gZm9yIExJU1RfUkFOR0VcIik7aWYobnVsbD09PVIudmFsdWUpcmV0dXJuIGQoXCJ0YXJnZXRMaXN0LnZhbHVlXCIpO2xldCBqPVIudmFsdWUuTGlzdFdpdGhTdWJSYW5nZShWLnZhbHVlT2JqZWN0LEYudmFsdWVPYmplY3QpO3RoaXMuc3RhdGUuUHVzaEV2YWx1YXRpb25TdGFjayhuZXcgTyhqKSk7YnJlYWs7Y2FzZSBBLkNvbW1hbmRUeXBlLkxpc3RSYW5kb206e2xldCB0PXRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCk7aWYobnVsbD09PXQpdGhyb3cgbmV3IFMoXCJFeHBlY3RlZCBsaXN0IGZvciBMSVNUX1JBTkRPTVwiKTtsZXQgZT10LnZhbHVlLG49bnVsbDtpZihudWxsPT09ZSl0aHJvdyBkKFwibGlzdFwiKTtpZigwPT1lLkNvdW50KW49bmV3IGc7ZWxzZXtsZXQgdD10aGlzLnN0YXRlLnN0b3J5U2VlZCt0aGlzLnN0YXRlLnByZXZpb3VzUmFuZG9tLGk9bmV3IEsodCkubmV4dCgpLHI9aSVlLkNvdW50LGE9ZS5lbnRyaWVzKCk7Zm9yKGxldCB0PTA7dDw9ci0xO3QrKylhLm5leHQoKTtsZXQgcz1hLm5leHQoKS52YWx1ZSxsPXtLZXk6Zi5mcm9tU2VyaWFsaXplZEtleShzWzBdKSxWYWx1ZTpzWzFdfTtpZihudWxsPT09bC5LZXkub3JpZ2luTmFtZSlyZXR1cm4gZChcInJhbmRvbUl0ZW0uS2V5Lm9yaWdpbk5hbWVcIik7bj1uZXcgZyhsLktleS5vcmlnaW5OYW1lLHRoaXMpLG4uQWRkKGwuS2V5LGwuVmFsdWUpLHRoaXMuc3RhdGUucHJldmlvdXNSYW5kb209aX10aGlzLnN0YXRlLlB1c2hFdmFsdWF0aW9uU3RhY2sobmV3IE8obikpO2JyZWFrfWRlZmF1bHQ6dGhpcy5FcnJvcihcInVuaGFuZGxlZCBDb250cm9sQ29tbWFuZDogXCIrZSl9cmV0dXJuITB9aWYodCBpbnN0YW5jZW9mIFYpe2xldCBlPXQsbj10aGlzLnN0YXRlLlBvcEV2YWx1YXRpb25TdGFjaygpO3JldHVybiB0aGlzLnN0YXRlLnZhcmlhYmxlc1N0YXRlLkFzc2lnbihlLG4pLCEwfWlmKHQgaW5zdGFuY2VvZiBGKXtsZXQgZT10LG49bnVsbDtpZihudWxsIT1lLnBhdGhGb3JDb3VudCl7bGV0IHQ9ZS5jb250YWluZXJGb3JDb3VudCxpPXRoaXMuc3RhdGUuVmlzaXRDb3VudEZvckNvbnRhaW5lcih0KTtuPW5ldyBiKGkpfWVsc2Ugbj10aGlzLnN0YXRlLnZhcmlhYmxlc1N0YXRlLkdldFZhcmlhYmxlV2l0aE5hbWUoZS5uYW1lKSxudWxsPT1uJiYodGhpcy5XYXJuaW5nKFwiVmFyaWFibGUgbm90IGZvdW5kOiAnXCIrZS5uYW1lK1wiJy4gVXNpbmcgZGVmYXVsdCB2YWx1ZSBvZiAwIChmYWxzZSkuIFRoaXMgY2FuIGhhcHBlbiB3aXRoIHRlbXBvcmFyeSB2YXJpYWJsZXMgaWYgdGhlIGRlY2xhcmF0aW9uIGhhc24ndCB5ZXQgYmVlbiBoaXQuIEdsb2JhbHMgYXJlIGFsd2F5cyBnaXZlbiBhIGRlZmF1bHQgdmFsdWUgb24gbG9hZCBpZiBhIHZhbHVlIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHNhdmUgc3RhdGUuXCIpLG49bmV3IGIoMCkpO3JldHVybiB0aGlzLnN0YXRlLlB1c2hFdmFsdWF0aW9uU3RhY2sobiksITB9aWYodCBpbnN0YW5jZW9mIFIpe2xldCBlPXQsbj10aGlzLnN0YXRlLlBvcEV2YWx1YXRpb25TdGFjayhlLm51bWJlck9mUGFyYW1ldGVycyksaT1lLkNhbGwobik7cmV0dXJuIHRoaXMuc3RhdGUuUHVzaEV2YWx1YXRpb25TdGFjayhpKSwhMH1yZXR1cm4hMX1DaG9vc2VQYXRoU3RyaW5nKHQsbj0hMCxpPVtdKXtpZih0aGlzLklmQXN5bmNXZUNhbnQoXCJjYWxsIENob29zZVBhdGhTdHJpbmcgcmlnaHQgbm93XCIpLG4pdGhpcy5SZXNldENhbGxzdGFjaygpO2Vsc2UgaWYodGhpcy5zdGF0ZS5jYWxsU3RhY2suY3VycmVudEVsZW1lbnQudHlwZT09ci5GdW5jdGlvbil7bGV0IGU9XCJcIixuPXRoaXMuc3RhdGUuY2FsbFN0YWNrLmN1cnJlbnRFbGVtZW50LmN1cnJlbnRQb2ludGVyLmNvbnRhaW5lcjt0aHJvdyBudWxsIT1uJiYoZT1cIihcIituLnBhdGgudG9TdHJpbmcoKStcIikgXCIpLG5ldyBFcnJvcihcIlN0b3J5IHdhcyBydW5uaW5nIGEgZnVuY3Rpb24gXCIrZStcIndoZW4geW91IGNhbGxlZCBDaG9vc2VQYXRoU3RyaW5nKFwiK3QrXCIpIC0gdGhpcyBpcyBhbG1vc3QgY2VydGFpbmx5IG5vdCBub3Qgd2hhdCB5b3Ugd2FudCEgRnVsbCBzdGFjayB0cmFjZTogXFxuXCIrdGhpcy5zdGF0ZS5jYWxsU3RhY2suY2FsbFN0YWNrVHJhY2UpfXRoaXMuc3RhdGUuUGFzc0FyZ3VtZW50c1RvRXZhbHVhdGlvblN0YWNrKGkpLHRoaXMuQ2hvb3NlUGF0aChuZXcgZSh0KSl9SWZBc3luY1dlQ2FudCh0KXtpZih0aGlzLl9hc3luY0NvbnRpbnVlQWN0aXZlKXRocm93IG5ldyBFcnJvcihcIkNhbid0IFwiK3QrXCIuIFN0b3J5IGlzIGluIHRoZSBtaWRkbGUgb2YgYSBDb250aW51ZUFzeW5jKCkuIE1ha2UgbW9yZSBDb250aW51ZUFzeW5jKCkgY2FsbHMgb3IgYSBzaW5nbGUgQ29udGludWUoKSBjYWxsIGJlZm9yZWhhbmQuXCIpfUNob29zZVBhdGgodCxlPSEwKXt0aGlzLnN0YXRlLlNldENob3NlblBhdGgodCxlKSx0aGlzLlZpc2l0Q2hhbmdlZENvbnRhaW5lcnNEdWVUb0RpdmVydCgpfUNob29zZUNob2ljZUluZGV4KHQpe3Q9dDtsZXQgZT10aGlzLmN1cnJlbnRDaG9pY2VzO3RoaXMuQXNzZXJ0KHQ+PTAmJnQ8ZS5sZW5ndGgsXCJjaG9pY2Ugb3V0IG9mIHJhbmdlXCIpO2xldCBuPWVbdF07cmV0dXJuIG51bGw9PT1uLnRocmVhZEF0R2VuZXJhdGlvbj9kKFwiY2hvaWNlVG9DaG9vc2UudGhyZWFkQXRHZW5lcmF0aW9uXCIpOm51bGw9PT1uLnRhcmdldFBhdGg/ZChcImNob2ljZVRvQ2hvb3NlLnRhcmdldFBhdGhcIik6KHRoaXMuc3RhdGUuY2FsbFN0YWNrLmN1cnJlbnRUaHJlYWQ9bi50aHJlYWRBdEdlbmVyYXRpb24sdm9pZCB0aGlzLkNob29zZVBhdGgobi50YXJnZXRQYXRoKSl9SGFzRnVuY3Rpb24odCl7dHJ5e3JldHVybiBudWxsIT10aGlzLktub3RDb250YWluZXJXaXRoTmFtZSh0KX1jYXRjaCh0KXtyZXR1cm4hMX19RXZhbHVhdGVGdW5jdGlvbih0LGU9W10sbj0hMSl7aWYodGhpcy5JZkFzeW5jV2VDYW50KFwiZXZhbHVhdGUgYSBmdW5jdGlvblwiKSxudWxsPT10KXRocm93IG5ldyBFcnJvcihcIkZ1bmN0aW9uIGlzIG51bGxcIik7aWYoXCJcIj09dHx8XCJcIj09dC50cmltKCkpdGhyb3cgbmV3IEVycm9yKFwiRnVuY3Rpb24gaXMgZW1wdHkgb3Igd2hpdGUgc3BhY2UuXCIpO2xldCBpPXRoaXMuS25vdENvbnRhaW5lcldpdGhOYW1lKHQpO2lmKG51bGw9PWkpdGhyb3cgbmV3IEVycm9yKFwiRnVuY3Rpb24gZG9lc24ndCBleGlzdDogJ1wiK3QrXCInXCIpO2xldCByPVtdO3IucHVzaC5hcHBseShyLHRoaXMuc3RhdGUub3V0cHV0U3RyZWFtKSx0aGlzLl9zdGF0ZS5SZXNldE91dHB1dCgpLHRoaXMuc3RhdGUuU3RhcnRGdW5jdGlvbkV2YWx1YXRpb25Gcm9tR2FtZShpLGUpO2xldCBhPW5ldyBtO2Zvcig7dGhpcy5jYW5Db250aW51ZTspYS5BcHBlbmQodGhpcy5Db250aW51ZSgpKTtsZXQgcz1hLnRvU3RyaW5nKCk7dGhpcy5fc3RhdGUuUmVzZXRPdXRwdXQocik7bGV0IGw9dGhpcy5zdGF0ZS5Db21wbGV0ZUZ1bmN0aW9uRXZhbHVhdGlvbkZyb21HYW1lKCk7cmV0dXJuIG4/e3JldHVybmVkOmwsb3V0cHV0OnN9Omx9RXZhbHVhdGVFeHByZXNzaW9uKHQpe2xldCBlPXRoaXMuc3RhdGUuY2FsbFN0YWNrLmVsZW1lbnRzLmxlbmd0aDt0aGlzLnN0YXRlLmNhbGxTdGFjay5QdXNoKHIuVHVubmVsKSx0aGlzLl90ZW1wb3JhcnlFdmFsdWF0aW9uQ29udGFpbmVyPXQsdGhpcy5zdGF0ZS5Hb1RvU3RhcnQoKTtsZXQgbj10aGlzLnN0YXRlLmV2YWx1YXRpb25TdGFjay5sZW5ndGg7cmV0dXJuIHRoaXMuQ29udGludWUoKSx0aGlzLl90ZW1wb3JhcnlFdmFsdWF0aW9uQ29udGFpbmVyPW51bGwsdGhpcy5zdGF0ZS5jYWxsU3RhY2suZWxlbWVudHMubGVuZ3RoPmUmJnRoaXMuc3RhdGUuUG9wQ2FsbFN0YWNrKCksdGhpcy5zdGF0ZS5ldmFsdWF0aW9uU3RhY2subGVuZ3RoPm4/dGhpcy5zdGF0ZS5Qb3BFdmFsdWF0aW9uU3RhY2soKTpudWxsfUNhbGxFeHRlcm5hbEZ1bmN0aW9uKHQsZSl7aWYobnVsbD09PXQpcmV0dXJuIGQoXCJmdW5jTmFtZVwiKTtsZXQgbj10aGlzLl9leHRlcm5hbHMuZ2V0KHQpLGk9bnVsbDtpZighKHZvaWQgMCE9PW4pKXtpZih0aGlzLmFsbG93RXh0ZXJuYWxGdW5jdGlvbkZhbGxiYWNrcylyZXR1cm4gaT10aGlzLktub3RDb250YWluZXJXaXRoTmFtZSh0KSx0aGlzLkFzc2VydChudWxsIT09aSxcIlRyeWluZyB0byBjYWxsIEVYVEVSTkFMIGZ1bmN0aW9uICdcIit0K1wiJyB3aGljaCBoYXMgbm90IGJlZW4gYm91bmQsIGFuZCBmYWxsYmFjayBpbmsgZnVuY3Rpb24gY291bGQgbm90IGJlIGZvdW5kLlwiKSx0aGlzLnN0YXRlLmNhbGxTdGFjay5QdXNoKHIuRnVuY3Rpb24sdm9pZCAwLHRoaXMuc3RhdGUub3V0cHV0U3RyZWFtLmxlbmd0aCksdm9pZCh0aGlzLnN0YXRlLmRpdmVydGVkUG9pbnRlcj1JLlN0YXJ0T2YoaSkpO3RoaXMuQXNzZXJ0KCExLFwiVHJ5aW5nIHRvIGNhbGwgRVhURVJOQUwgZnVuY3Rpb24gJ1wiK3QrXCInIHdoaWNoIGhhcyBub3QgYmVlbiBib3VuZCAoYW5kIGluayBmYWxsYmFja3MgZGlzYWJsZWQpLlwiKX1sZXQgYT1bXTtmb3IobGV0IHQ9MDt0PGU7Kyt0KXtsZXQgdD1zKHRoaXMuc3RhdGUuUG9wRXZhbHVhdGlvblN0YWNrKCksdikudmFsdWVPYmplY3Q7YS5wdXNoKHQpfWEucmV2ZXJzZSgpO2xldCBsPW4oYSksbz1udWxsO251bGwhPWw/KG89di5DcmVhdGUobCksdGhpcy5Bc3NlcnQobnVsbCE9PW8sXCJDb3VsZCBub3QgY3JlYXRlIGluayB2YWx1ZSBmcm9tIHJldHVybmVkIG9iamVjdCBvZiB0eXBlIFwiK3R5cGVvZiBsKSk6bz1uZXcgTCx0aGlzLnN0YXRlLlB1c2hFdmFsdWF0aW9uU3RhY2sobyl9QmluZEV4dGVybmFsRnVuY3Rpb25HZW5lcmFsKHQsZSl7dGhpcy5JZkFzeW5jV2VDYW50KFwiYmluZCBhbiBleHRlcm5hbCBmdW5jdGlvblwiKSx0aGlzLkFzc2VydCghdGhpcy5fZXh0ZXJuYWxzLmhhcyh0KSxcIkZ1bmN0aW9uICdcIit0K1wiJyBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kLlwiKSx0aGlzLl9leHRlcm5hbHMuc2V0KHQsZSl9VHJ5Q29lcmNlKHQpe3JldHVybiB0fUJpbmRFeHRlcm5hbEZ1bmN0aW9uKHQsZSl7dGhpcy5Bc3NlcnQobnVsbCE9ZSxcIkNhbid0IGJpbmQgYSBudWxsIGZ1bmN0aW9uXCIpLHRoaXMuQmluZEV4dGVybmFsRnVuY3Rpb25HZW5lcmFsKHQsdD0+e3RoaXMuQXNzZXJ0KHQubGVuZ3RoPj1lLmxlbmd0aCxcIkV4dGVybmFsIGZ1bmN0aW9uIGV4cGVjdGVkIFwiK2UubGVuZ3RoK1wiIGFyZ3VtZW50c1wiKTtsZXQgbj1bXTtmb3IobGV0IGU9MCxpPXQubGVuZ3RoO2U8aTtlKyspbltlXT10aGlzLlRyeUNvZXJjZSh0W2VdKTtyZXR1cm4gZS5hcHBseShudWxsLG4pfSl9VW5iaW5kRXh0ZXJuYWxGdW5jdGlvbih0KXt0aGlzLklmQXN5bmNXZUNhbnQoXCJ1bmJpbmQgYW4gZXh0ZXJuYWwgYSBmdW5jdGlvblwiKSx0aGlzLkFzc2VydCh0aGlzLl9leHRlcm5hbHMuaGFzKHQpLFwiRnVuY3Rpb24gJ1wiK3QrXCInIGhhcyBub3QgYmVlbiBib3VuZC5cIiksdGhpcy5fZXh0ZXJuYWxzLmRlbGV0ZSh0KX1WYWxpZGF0ZUV4dGVybmFsQmluZGluZ3MoKXtsZXQgdD1udWxsLGU9bnVsbCxuPWFyZ3VtZW50c1sxXXx8bmV3IFNldDtpZihhcmd1bWVudHNbMF1pbnN0YW5jZW9mIE4mJih0PWFyZ3VtZW50c1swXSksYXJndW1lbnRzWzBdaW5zdGFuY2VvZiBwJiYoZT1hcmd1bWVudHNbMF0pLG51bGw9PT10JiZudWxsPT09ZSlpZih0aGlzLlZhbGlkYXRlRXh0ZXJuYWxCaW5kaW5ncyh0aGlzLl9tYWluQ29udGVudENvbnRhaW5lcixuKSx0aGlzLl9oYXNWYWxpZGF0ZWRFeHRlcm5hbHM9ITAsMD09bi5zaXplKXRoaXMuX2hhc1ZhbGlkYXRlZEV4dGVybmFscz0hMDtlbHNle2xldCB0PVwiRXJyb3I6IE1pc3NpbmcgZnVuY3Rpb24gYmluZGluZyBmb3IgZXh0ZXJuYWxcIjt0Kz1uLnNpemU+MT9cInNcIjpcIlwiLHQrPVwiOiAnXCIsdCs9QXJyYXkuZnJvbShuKS5qb2luKFwiJywgJ1wiKSx0Kz1cIicgXCIsdCs9dGhpcy5hbGxvd0V4dGVybmFsRnVuY3Rpb25GYWxsYmFja3M/XCIsIGFuZCBubyBmYWxsYmFjayBpbmsgZnVuY3Rpb24gZm91bmQuXCI6XCIgKGluayBmYWxsYmFja3MgZGlzYWJsZWQpXCIsdGhpcy5FcnJvcih0KX1lbHNlIGlmKG51bGwhPXQpe2ZvcihsZXQgZSBvZiB0LmNvbnRlbnQpe2xldCB0PWU7bnVsbCE9dCYmdC5oYXNWYWxpZE5hbWV8fHRoaXMuVmFsaWRhdGVFeHRlcm5hbEJpbmRpbmdzKGUsbil9Zm9yKGxldFssZV1vZiB0Lm5hbWVkQ29udGVudCl0aGlzLlZhbGlkYXRlRXh0ZXJuYWxCaW5kaW5ncyhhKGUscCksbil9ZWxzZSBpZihudWxsIT1lKXtsZXQgdD1hKGUsayk7aWYodCYmdC5pc0V4dGVybmFsKXtsZXQgZT10LnRhcmdldFBhdGhTdHJpbmc7aWYobnVsbD09PWUpcmV0dXJuIGQoXCJuYW1lXCIpO2lmKCF0aGlzLl9leHRlcm5hbHMuaGFzKGUpKWlmKHRoaXMuYWxsb3dFeHRlcm5hbEZ1bmN0aW9uRmFsbGJhY2tzKXt0aGlzLm1haW5Db250ZW50Q29udGFpbmVyLm5hbWVkQ29udGVudC5oYXMoZSl8fG4uYWRkKGUpfWVsc2Ugbi5hZGQoZSl9fX1PYnNlcnZlVmFyaWFibGUodCxlKXtpZih0aGlzLklmQXN5bmNXZUNhbnQoXCJvYnNlcnZlIGEgbmV3IHZhcmlhYmxlXCIpLG51bGw9PT10aGlzLl92YXJpYWJsZU9ic2VydmVycyYmKHRoaXMuX3ZhcmlhYmxlT2JzZXJ2ZXJzPW5ldyBNYXApLCF0aGlzLnN0YXRlLnZhcmlhYmxlc1N0YXRlLkdsb2JhbFZhcmlhYmxlRXhpc3RzV2l0aE5hbWUodCkpdGhyb3cgbmV3IFMoXCJDYW5ub3Qgb2JzZXJ2ZSB2YXJpYWJsZSAnXCIrdCtcIicgYmVjYXVzZSBpdCB3YXNuJ3QgZGVjbGFyZWQgaW4gdGhlIGluayBzdG9yeS5cIik7dGhpcy5fdmFyaWFibGVPYnNlcnZlcnMuaGFzKHQpP3RoaXMuX3ZhcmlhYmxlT2JzZXJ2ZXJzLmdldCh0KS5wdXNoKGUpOnRoaXMuX3ZhcmlhYmxlT2JzZXJ2ZXJzLnNldCh0LFtlXSl9T2JzZXJ2ZVZhcmlhYmxlcyh0LGUpe2ZvcihsZXQgbj0wLGk9dC5sZW5ndGg7bjxpO24rKyl0aGlzLk9ic2VydmVWYXJpYWJsZSh0W25dLGVbbl0pfVJlbW92ZVZhcmlhYmxlT2JzZXJ2ZXIodCxlKXtpZih0aGlzLklmQXN5bmNXZUNhbnQoXCJyZW1vdmUgYSB2YXJpYWJsZSBvYnNlcnZlclwiKSxudWxsIT09dGhpcy5fdmFyaWFibGVPYnNlcnZlcnMpaWYodm9pZCAwIT09ZSl7aWYodGhpcy5fdmFyaWFibGVPYnNlcnZlcnMuaGFzKGUpKXtsZXQgbj10aGlzLl92YXJpYWJsZU9ic2VydmVycy5nZXQoZSk7bnVsbCE9PXQ/bi5zcGxpY2Uobi5pbmRleE9mKHQpLDEpOnRoaXMuX3ZhcmlhYmxlT2JzZXJ2ZXJzLmRlbGV0ZShlKX19ZWxzZSBpZihudWxsIT09dCl7bGV0IGU9dGhpcy5fdmFyaWFibGVPYnNlcnZlcnMua2V5cygpO2ZvcihsZXQgbiBvZiBlKXtsZXQgZT10aGlzLl92YXJpYWJsZU9ic2VydmVycy5nZXQobik7ZS5zcGxpY2UoZS5pbmRleE9mKHQpLDEpfX19VmFyaWFibGVTdGF0ZURpZENoYW5nZUV2ZW50KHQsZSl7aWYobnVsbD09PXRoaXMuX3ZhcmlhYmxlT2JzZXJ2ZXJzKXJldHVybjtsZXQgbj10aGlzLl92YXJpYWJsZU9ic2VydmVycy5nZXQodCk7aWYodm9pZCAwIT09bil7aWYoIShlIGluc3RhbmNlb2YgdikpdGhyb3cgbmV3IEVycm9yKFwiVHJpZWQgdG8gZ2V0IHRoZSB2YWx1ZSBvZiBhIHZhcmlhYmxlIHRoYXQgaXNuJ3QgYSBzdGFuZGFyZCB0eXBlXCIpO2xldCBpPXMoZSx2KTtmb3IobGV0IGUgb2YgbillKHQsaS52YWx1ZU9iamVjdCl9fWdldCBnbG9iYWxUYWdzKCl7cmV0dXJuIHRoaXMuVGFnc0F0U3RhcnRPZkZsb3dDb250YWluZXJXaXRoUGF0aFN0cmluZyhcIlwiKX1UYWdzRm9yQ29udGVudEF0UGF0aCh0KXtyZXR1cm4gdGhpcy5UYWdzQXRTdGFydE9mRmxvd0NvbnRhaW5lcldpdGhQYXRoU3RyaW5nKHQpfVRhZ3NBdFN0YXJ0T2ZGbG93Q29udGFpbmVyV2l0aFBhdGhTdHJpbmcodCl7bGV0IG49bmV3IGUodCksaT10aGlzLkNvbnRlbnRBdFBhdGgobikuY29udGFpbmVyO2lmKG51bGw9PT1pKXJldHVybiBkKFwiZmxvd0NvbnRhaW5lclwiKTtmb3IoOzspe2xldCB0PWkuY29udGVudFswXTtpZighKHQgaW5zdGFuY2VvZiBOKSlicmVhaztpPXR9bGV0IHI9bnVsbDtmb3IobGV0IHQgb2YgaS5jb250ZW50KXtsZXQgZT1hKHQsaik7aWYoIWUpYnJlYWs7bnVsbD09ciYmKHI9W10pLHIucHVzaChlLnRleHQpfXJldHVybiByfUJ1aWxkU3RyaW5nT2ZIaWVyYXJjaHkoKXtsZXQgdD1uZXcgbTtyZXR1cm4gdGhpcy5tYWluQ29udGVudENvbnRhaW5lci5CdWlsZFN0cmluZ09mSGllcmFyY2h5KHQsMCx0aGlzLnN0YXRlLmN1cnJlbnRQb2ludGVyLlJlc29sdmUoKSksdC50b1N0cmluZygpfUJ1aWxkU3RyaW5nT2ZDb250YWluZXIodCl7bGV0IGU9bmV3IG07cmV0dXJuIHQuQnVpbGRTdHJpbmdPZkhpZXJhcmNoeShlLDAsdGhpcy5zdGF0ZS5jdXJyZW50UG9pbnRlci5SZXNvbHZlKCkpLGUudG9TdHJpbmcoKX1OZXh0Q29udGVudCgpe2lmKHRoaXMuc3RhdGUucHJldmlvdXNQb2ludGVyPXRoaXMuc3RhdGUuY3VycmVudFBvaW50ZXIuY29weSgpLCF0aGlzLnN0YXRlLmRpdmVydGVkUG9pbnRlci5pc051bGwmJih0aGlzLnN0YXRlLmN1cnJlbnRQb2ludGVyPXRoaXMuc3RhdGUuZGl2ZXJ0ZWRQb2ludGVyLmNvcHkoKSx0aGlzLnN0YXRlLmRpdmVydGVkUG9pbnRlcj1JLk51bGwsdGhpcy5WaXNpdENoYW5nZWRDb250YWluZXJzRHVlVG9EaXZlcnQoKSwhdGhpcy5zdGF0ZS5jdXJyZW50UG9pbnRlci5pc051bGwpKXJldHVybjtpZighdGhpcy5JbmNyZW1lbnRDb250ZW50UG9pbnRlcigpKXtsZXQgdD0hMTt0aGlzLnN0YXRlLmNhbGxTdGFjay5DYW5Qb3Aoci5GdW5jdGlvbik/KHRoaXMuc3RhdGUuUG9wQ2FsbFN0YWNrKHIuRnVuY3Rpb24pLHRoaXMuc3RhdGUuaW5FeHByZXNzaW9uRXZhbHVhdGlvbiYmdGhpcy5zdGF0ZS5QdXNoRXZhbHVhdGlvblN0YWNrKG5ldyBMKSx0PSEwKTp0aGlzLnN0YXRlLmNhbGxTdGFjay5jYW5Qb3BUaHJlYWQ/KHRoaXMuc3RhdGUuY2FsbFN0YWNrLlBvcFRocmVhZCgpLHQ9ITApOnRoaXMuc3RhdGUuVHJ5RXhpdEZ1bmN0aW9uRXZhbHVhdGlvbkZyb21HYW1lKCksdCYmIXRoaXMuc3RhdGUuY3VycmVudFBvaW50ZXIuaXNOdWxsJiZ0aGlzLk5leHRDb250ZW50KCl9fUluY3JlbWVudENvbnRlbnRQb2ludGVyKCl7bGV0IHQ9ITAsZT10aGlzLnN0YXRlLmNhbGxTdGFjay5jdXJyZW50RWxlbWVudC5jdXJyZW50UG9pbnRlci5jb3B5KCk7aWYoZS5pbmRleCsrLG51bGw9PT1lLmNvbnRhaW5lcilyZXR1cm4gZChcInBvaW50ZXIuY29udGFpbmVyXCIpO2Zvcig7ZS5pbmRleD49ZS5jb250YWluZXIuY29udGVudC5sZW5ndGg7KXt0PSExO2xldCBuPWEoZS5jb250YWluZXIucGFyZW50LE4pO2lmKG4gaW5zdGFuY2VvZiBOPT0hMSlicmVhaztsZXQgaT1uLmNvbnRlbnQuaW5kZXhPZihlLmNvbnRhaW5lcik7aWYoLTE9PWkpYnJlYWs7aWYoZT1uZXcgSShuLGkpLGUuaW5kZXgrKyx0PSEwLG51bGw9PT1lLmNvbnRhaW5lcilyZXR1cm4gZChcInBvaW50ZXIuY29udGFpbmVyXCIpfXJldHVybiB0fHwoZT1JLk51bGwpLHRoaXMuc3RhdGUuY2FsbFN0YWNrLmN1cnJlbnRFbGVtZW50LmN1cnJlbnRQb2ludGVyPWUuY29weSgpLHR9VHJ5Rm9sbG93RGVmYXVsdEludmlzaWJsZUNob2ljZSgpe2xldCB0PXRoaXMuX3N0YXRlLmN1cnJlbnRDaG9pY2VzLGU9dC5maWx0ZXIodD0+dC5pc0ludmlzaWJsZURlZmF1bHQpO2lmKDA9PWUubGVuZ3RofHx0Lmxlbmd0aD5lLmxlbmd0aClyZXR1cm4hMTtsZXQgbj1lWzBdO3JldHVybiBudWxsPT09bi50YXJnZXRQYXRoP2QoXCJjaG9pY2UudGFyZ2V0UGF0aFwiKTpudWxsPT09bi50aHJlYWRBdEdlbmVyYXRpb24/ZChcImNob2ljZS50aHJlYWRBdEdlbmVyYXRpb25cIik6KHRoaXMuc3RhdGUuY2FsbFN0YWNrLmN1cnJlbnRUaHJlYWQ9bi50aHJlYWRBdEdlbmVyYXRpb24sdGhpcy5DaG9vc2VQYXRoKG4udGFyZ2V0UGF0aCwhMSksITApfU5leHRTZXF1ZW5jZVNodWZmbGVJbmRleCgpe2xldCB0PWEodGhpcy5zdGF0ZS5Qb3BFdmFsdWF0aW9uU3RhY2soKSxiKTtpZighKHQgaW5zdGFuY2VvZiBiKSlyZXR1cm4gdGhpcy5FcnJvcihcImV4cGVjdGVkIG51bWJlciBvZiBlbGVtZW50cyBpbiBzZXF1ZW5jZSBmb3Igc2h1ZmZsZSBpbmRleFwiKSwwO2xldCBlPXRoaXMuc3RhdGUuY3VycmVudFBvaW50ZXIuY29udGFpbmVyO2lmKG51bGw9PT1lKXJldHVybiBkKFwic2VxQ29udGFpbmVyXCIpO2lmKG51bGw9PT10LnZhbHVlKXJldHVybiBkKFwibnVtRWxlbWVudHNJbnRWYWwudmFsdWVcIik7bGV0IG49dC52YWx1ZSxpPXModGhpcy5zdGF0ZS5Qb3BFdmFsdWF0aW9uU3RhY2soKSxiKS52YWx1ZTtpZihudWxsPT09aSlyZXR1cm4gZChcInNlcUNvdW50XCIpO2xldCByPWkvbixsPWklbixvPWUucGF0aC50b1N0cmluZygpLHU9MDtmb3IobGV0IHQ9MCxlPW8ubGVuZ3RoO3Q8ZTt0KyspdSs9by5jaGFyQ29kZUF0KHQpfHwwO2xldCBoPXUrcit0aGlzLnN0YXRlLnN0b3J5U2VlZCxjPW5ldyBLKE1hdGguZmxvb3IoaCkpLHA9W107Zm9yKGxldCB0PTA7dDxuOysrdClwLnB1c2godCk7Zm9yKGxldCB0PTA7dDw9bDsrK3Qpe2xldCBlPWMubmV4dCgpJXAubGVuZ3RoLG49cFtlXTtpZihwLnNwbGljZShlLDEpLHQ9PWwpcmV0dXJuIG59dGhyb3cgbmV3IEVycm9yKFwiU2hvdWxkIG5ldmVyIHJlYWNoIGhlcmVcIil9RXJyb3IodCxlPSExKXtsZXQgbj1uZXcgUyh0KTt0aHJvdyBuLnVzZUVuZExpbmVOdW1iZXI9ZSxufVdhcm5pbmcodCl7dGhpcy5BZGRFcnJvcih0LCEwKX1BZGRFcnJvcih0LGU9ITEsbj0hMSl7bGV0IGk9dGhpcy5jdXJyZW50RGVidWdNZXRhZGF0YSxyPWU/XCJXQVJOSU5HXCI6XCJFUlJPUlwiO2lmKG51bGwhPWkpe2xldCBlPW4/aS5lbmRMaW5lTnVtYmVyOmkuc3RhcnRMaW5lTnVtYmVyO3Q9XCJSVU5USU1FIFwiK3IrXCI6ICdcIitpLmZpbGVOYW1lK1wiJyBsaW5lIFwiK2UrXCI6IFwiK3R9ZWxzZSB0PXRoaXMuc3RhdGUuY3VycmVudFBvaW50ZXIuaXNOdWxsP1wiUlVOVElNRSBcIityK1wiOiBcIit0OlwiUlVOVElNRSBcIityK1wiOiAoXCIrdGhpcy5zdGF0ZS5jdXJyZW50UG9pbnRlcitcIik6IFwiK3Q7dGhpcy5zdGF0ZS5BZGRFcnJvcih0LGUpLGV8fHRoaXMuc3RhdGUuRm9yY2VFbmQoKX1Bc3NlcnQodCxlPW51bGwpe2lmKDA9PXQpdGhyb3cgbnVsbD09ZSYmKGU9XCJTdG9yeSBhc3NlcnRcIiksbmV3IEVycm9yKGUrXCIgXCIrdGhpcy5jdXJyZW50RGVidWdNZXRhZGF0YSl9Z2V0IGN1cnJlbnREZWJ1Z01ldGFkYXRhKCl7bGV0IHQsZT10aGlzLnN0YXRlLmN1cnJlbnRQb2ludGVyO2lmKCFlLmlzTnVsbCYmbnVsbCE9PWUuUmVzb2x2ZSgpJiYodD1lLlJlc29sdmUoKS5kZWJ1Z01ldGFkYXRhLG51bGwhPT10KSlyZXR1cm4gdDtmb3IobGV0IG49dGhpcy5zdGF0ZS5jYWxsU3RhY2suZWxlbWVudHMubGVuZ3RoLTE7bj49MDstLW4paWYoZT10aGlzLnN0YXRlLmNhbGxTdGFjay5lbGVtZW50c1tuXS5jdXJyZW50UG9pbnRlciwhZS5pc051bGwmJm51bGwhPT1lLlJlc29sdmUoKSYmKHQ9ZS5SZXNvbHZlKCkuZGVidWdNZXRhZGF0YSxudWxsIT09dCkpcmV0dXJuIHQ7Zm9yKGxldCBlPXRoaXMuc3RhdGUub3V0cHV0U3RyZWFtLmxlbmd0aC0xO2U+PTA7LS1lKXtpZih0PXRoaXMuc3RhdGUub3V0cHV0U3RyZWFtW2VdLmRlYnVnTWV0YWRhdGEsbnVsbCE9PXQpcmV0dXJuIHR9cmV0dXJuIG51bGx9Z2V0IG1haW5Db250ZW50Q29udGFpbmVyKCl7cmV0dXJuIHRoaXMuX3RlbXBvcmFyeUV2YWx1YXRpb25Db250YWluZXI/dGhpcy5fdGVtcG9yYXJ5RXZhbHVhdGlvbkNvbnRhaW5lcjp0aGlzLl9tYWluQ29udGVudENvbnRhaW5lcn19WC5pbmtWZXJzaW9uQ3VycmVudD0xOSxmdW5jdGlvbih0KXtsZXQgZTshZnVuY3Rpb24odCl7dFt0Lk5vQ2hhbmdlPTBdPVwiTm9DaGFuZ2VcIix0W3QuRXh0ZW5kZWRCZXlvbmROZXdsaW5lPTFdPVwiRXh0ZW5kZWRCZXlvbmROZXdsaW5lXCIsdFt0Lk5ld2xpbmVSZW1vdmVkPTJdPVwiTmV3bGluZVJlbW92ZWRcIn0oZT10Lk91dHB1dFN0YXRlQ2hhbmdlfHwodC5PdXRwdXRTdGF0ZUNoYW5nZT17fSkpfShYfHwoWD17fSkpLHQuSW5rTGlzdD1nLHQuU3Rvcnk9WCxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluay1lczIwMTUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXG1hZWxcXFxcRG9jdW1lbnRzXFxcXENvdXJzXFxcXG1pbmktcHJvamV0LTJcXFxcYXBwXFxcXHBhZ2VzXFxcXGluZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBBbXBTdGF0ZUNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8YW55PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEFtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdBbXBTdGF0ZUNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJbkFtcE1vZGUoe1xuICBhbXBGaXJzdCA9IGZhbHNlLFxuICBoeWJyaWQgPSBmYWxzZSxcbiAgaGFzUXVlcnkgPSBmYWxzZSxcbn0gPSB7fSk6IGJvb2xlYW4ge1xuICByZXR1cm4gYW1wRmlyc3QgfHwgKGh5YnJpZCAmJiBoYXNRdWVyeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFtcCgpOiBib29sZWFuIHtcbiAgLy8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xuICByZXR1cm4gaXNJbkFtcE1vZGUoUmVhY3QudXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgSGVhZE1hbmFnZXJDb250ZXh0OiBSZWFjdC5Db250ZXh0PHtcbiAgdXBkYXRlSGVhZD86IChzdGF0ZTogYW55KSA9PiB2b2lkXG4gIG1vdW50ZWRJbnN0YW5jZXM/OiBhbnlcbn0+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgSGVhZE1hbmFnZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0hlYWRNYW5hZ2VyQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRWZmZWN0IGZyb20gJy4vc2lkZS1lZmZlY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuaW1wb3J0IHsgSGVhZE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnLi9oZWFkLW1hbmFnZXItY29udGV4dCdcbmltcG9ydCB7IGlzSW5BbXBNb2RlIH0gZnJvbSAnLi9hbXAnXG5cbnR5cGUgV2l0aEluQW1wTW9kZSA9IHtcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlID0gZmFsc2UpOiBKU1guRWxlbWVudFtdIHtcbiAgY29uc3QgaGVhZCA9IFs8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPl1cbiAgaWYgKCFpbkFtcE1vZGUpIHtcbiAgICBoZWFkLnB1c2goPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIC8+KVxuICB9XG4gIHJldHVybiBoZWFkXG59XG5cbmZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQoXG4gIGxpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgY2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbik6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiB7XG4gIC8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbGlzdFxuICB9XG4gIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgaWYgKGNoaWxkLnR5cGUgPT09IFJlYWN0LkZyYWdtZW50KSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KFxuICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKFxuICAgICAgICAoXG4gICAgICAgICAgZnJhZ21lbnRMaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgICAgICAgZnJhZ21lbnRDaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuICAgICAgICApOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4gPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdudW1iZXInXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3QuY29uY2F0KGZyYWdtZW50Q2hpbGQpXG4gICAgICAgIH0sXG4gICAgICAgIFtdXG4gICAgICApXG4gICAgKVxuICB9XG4gIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZClcbn1cblxuY29uc3QgTUVUQVRZUEVTID0gWyduYW1lJywgJ2h0dHBFcXVpdicsICdjaGFyU2V0JywgJ2l0ZW1Qcm9wJ11cblxuLypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovXG5mdW5jdGlvbiB1bmlxdWUoKSB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0KClcbiAgY29uc3QgdGFncyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YUNhdGVnb3JpZXM6IHsgW21ldGF0eXBlOiBzdHJpbmddOiBTZXQ8c3RyaW5nPiB9ID0ge31cblxuICByZXR1cm4gKGg6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgbGV0IGlzVW5pcXVlID0gdHJ1ZVxuXG4gICAgaWYgKGgua2V5ICYmIHR5cGVvZiBoLmtleSAhPT0gJ251bWJlcicgJiYgaC5rZXkuaW5kZXhPZignJCcpID4gMCkge1xuICAgICAgY29uc3Qga2V5ID0gaC5rZXkuc2xpY2UoaC5rZXkuaW5kZXhPZignJCcpICsgMSlcbiAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMuYWRkKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG4gICAgc3dpdGNoIChoLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgIGNhc2UgJ2Jhc2UnOlxuICAgICAgICBpZiAodGFncy5oYXMoaC50eXBlKSkge1xuICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21ldGEnOlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gTUVUQVRZUEVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV1cbiAgICAgICAgICBpZiAoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKSBjb250aW51ZVxuXG4gICAgICAgICAgaWYgKG1ldGF0eXBlID09PSAnY2hhclNldCcpIHtcbiAgICAgICAgICAgIGlmIChtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSkge1xuICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXRhVHlwZXMuYWRkKG1ldGF0eXBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGgucHJvcHNbbWV0YXR5cGVdXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdIHx8IG5ldyBTZXQoKVxuICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSlcbiAgICAgICAgICAgICAgbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdID0gY2F0ZWdvcmllc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiBpc1VuaXF1ZVxuICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBoZWFkRWxlbWVudHMgTGlzdCBvZiBtdWx0aXBsZSA8SGVhZD4gaW5zdGFuY2VzXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoXG4gIGhlYWRFbGVtZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBwcm9wczogV2l0aEluQW1wTW9kZVxuKSB7XG4gIHJldHVybiBoZWFkRWxlbWVudHNcbiAgICAucmVkdWNlKFxuICAgICAgKGxpc3Q6IFJlYWN0LlJlYWN0Q2hpbGRbXSwgaGVhZEVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KFxuICAgICAgICAgIGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pXG4gICAgICB9LFxuICAgICAgW11cbiAgICApXG4gICAgLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LCBbXSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKVxuICAgIC5maWx0ZXIodW5pcXVlKCkpXG4gICAgLnJldmVyc2UoKVxuICAgIC5tYXAoKGM6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGMua2V5IHx8IGlcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiYgIXByb3BzLmluQW1wTW9kZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgICAvLyBUT0RPKHByYXRlZWtiaEApOiBSZXBsYWNlIHRoaXMgd2l0aCBjb25zdCBmcm9tIGBjb25zdGFudHNgIHdoZW4gdGhlIHRyZWUgc2hha2luZyB3b3Jrcy5cbiAgICAgICAgICBbJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJ10uc29tZSgodXJsKSA9PlxuICAgICAgICAgICAgYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWRcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIHsga2V5IH0pXG4gICAgfSlcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqL1xuZnVuY3Rpb24gSGVhZCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IGFtcFN0YXRlID0gdXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpXG4gIGNvbnN0IGhlYWRNYW5hZ2VyID0gdXNlQ29udGV4dChIZWFkTWFuYWdlckNvbnRleHQpXG4gIHJldHVybiAoXG4gICAgPEVmZmVjdFxuICAgICAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU9e3JlZHVjZUNvbXBvbmVudHN9XG4gICAgICBoZWFkTWFuYWdlcj17aGVhZE1hbmFnZXJ9XG4gICAgICBpbkFtcE1vZGU9e2lzSW5BbXBNb2RlKGFtcFN0YXRlKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9FZmZlY3Q+XG4gIClcbn1cblxuLy8gVE9ETzogUmVtb3ZlIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2VcbkhlYWQucmV3aW5kID0gKCkgPT4ge31cblxuZXhwb3J0IGRlZmF1bHQgSGVhZFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbnR5cGUgU3RhdGUgPSBKU1guRWxlbWVudFtdIHwgdW5kZWZpbmVkXG5cbnR5cGUgU2lkZUVmZmVjdFByb3BzID0ge1xuICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogPFQ+KFxuICAgIGNvbXBvbmVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICBwcm9wczogVFxuICApID0+IFN0YXRlXG4gIGhhbmRsZVN0YXRlQ2hhbmdlPzogKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZFxuICBoZWFkTWFuYWdlcjogYW55XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQ8U2lkZUVmZmVjdFByb3BzPiB7XG4gIHByaXZhdGUgX2hhc0hlYWRNYW5hZ2VyOiBib29sZWFuXG5cbiAgZW1pdENoYW5nZSA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIudXBkYXRlSGVhZChcbiAgICAgICAgdGhpcy5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShcbiAgICAgICAgICBbLi4udGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXSxcbiAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5faGFzSGVhZE1hbmFnZXIgPVxuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlciAmJiB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNcblxuICAgIGlmIChpc1NlcnZlciAmJiB0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjFcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjFcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNy4wLjEnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IDB4ZWFjYztcbmV4cG9ydHMuUHJvZmlsZXIgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbmV4cG9ydHMuU3VzcGVuc2UgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBleHBvcnRzLlN0cmljdE1vZGUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIGV4cG9ydHMuUHJvZmlsZXIgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBleHBvcnRzLlN1c3BlbnNlID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiAwXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcbiAge1xuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgfVxufVxuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAge1xuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICAgIH1cbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG5cblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudEV4dHJhU3RhY2tGcmFtZSkge1xuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICghKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIgKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcblxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgZXhwb3J0cy5Qcm9maWxlcjpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBleHBvcnRzLlN0cmljdE1vZGU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IEEgZWxlbWVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIHZhciBfY2hpbGQgPSBjaGlsZHJlbjtcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XG5cbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XG5cbiAgICAgIGlmIChjaGlsZEtleSAhPSBudWxsKSB7XG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XG4gICAgICB9XG5cbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgfVxuXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGl0ZXJhYmxlQ2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlQ2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBFcnJvciggXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIiApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cbiAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XG4gICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRFeHBvcnQgPSBtb2R1bGVPYmplY3QuZGVmYXVsdDtcblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cblxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZXNvbHZlZC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBkZWZhdWx0RXhwb3J0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgcmV0dXJuIHBheWxvYWQuX3Jlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBwYXlsb2FkID0ge1xuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmIChyZW5kZXIuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gZXhwb3J0cy5Qcm9maWxlciB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBleHBvcnRzLlN0cmljdE1vZGUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdXNwZW5zZSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAodHlwZS5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICBpZiAodW5zdGFibGVfb2JzZXJ2ZWRCaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yKCd1c2VDb250ZXh0KCkgc2Vjb25kIGFyZ3VtZW50IGlzIHJlc2VydmVkIGZvciBmdXR1cmUgJyArICd1c2UgaW4gUmVhY3QuIFBhc3NpbmcgaXQgaXMgbm90IHN1cHBvcnRlZC4gJyArICdZb3UgcGFzc2VkOiAlcy4lcycsIHVuc3RhYmxlX29ic2VydmVkQml0cywgdHlwZW9mIHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMl0pID8gJ1xcblxcbkRpZCB5b3UgY2FsbCBhcnJheS5tYXAodXNlQ29udGV4dCk/ICcgKyAnQ2FsbGluZyBIb29rcyBpbnNpZGUgYSBsb29wIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnTGVhcm4gbW9yZSBhdCBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcnVsZXMtb2YtaG9va3MnIDogJycpO1xuICAgIH0gLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuXG5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG57XG5cbiAgdHJ5IHtcbiAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5cbiAgICBuZXcgTWFwKFtbZnJvemVuT2JqZWN0LCBudWxsXV0pO1xuICAgIG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3ICovXG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgKiBhcyBpbmt5IGZyb20gJ2lua2pzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAgIC8vIEluIGxpZmVjeWNsZSB2YXJzXG4gICAgY29uc3QgW3N0b3J5LCBzZXRTdG9yeV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8vIFN0YXRpYyB2YXJzXG4gICAgbGV0IGdsb2JhbFRhZ3MgPSBudWxsO1xuXG4gICAgLy8gRE9NIGVsZW1lbnRzXG4gICAgY29uc3Qgc3RvcnlDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgb3V0ZXJTY3JvbGxDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBjdXN0b21Db250aW51ZVN0b3J5ID0gKCkgPT4ge1xuICAgICAgICBpZiAobnVsbCAhPT0gc3RvcnkgJiYgc3RvcnkuY2FuQ29udGludWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FuIGNvbnRpbnVcIik7XG4gICAgICAgICAgICBzdG9yeS5Db250aW51ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGludWVTdG9yeSA9IChmaXJzdFRpbWUpID0+IHtcblxuICAgICAgICB2YXIgcGFyYWdyYXBoSW5kZXggPSAwO1xuICAgICAgICB2YXIgZGVsYXkgPSAxMDAwLjA7XG5cbiAgICAgICAgLy8gRG9uJ3Qgb3Zlci1zY3JvbGwgcGFzdCBuZXcgY29udGVudFxuICAgICAgICB2YXIgcHJldmlvdXNCb3R0b21FZGdlID0gZmlyc3RUaW1lID8gMCA6IGNvbnRlbnRCb3R0b21FZGdlWSgpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIHN0b3J5IHRleHQgLSBsb29wIHRocm91Z2ggYXZhaWxhYmxlIGNvbnRlbnRcbiAgICAgICAgd2hpbGUgKHN0b3J5LmNhbkNvbnRpbnVlKSB7XG5cbiAgICAgICAgICAgIC8vIEdldCBpbmsgdG8gZ2VuZXJhdGUgdGhlIG5leHQgcGFyYWdyYXBoXG4gICAgICAgICAgICB2YXIgcGFyYWdyYXBoVGV4dCA9IHN0b3J5LkNvbnRpbnVlKCk7XG4gICAgICAgICAgICB2YXIgdGFncyA9IHN0b3J5LmN1cnJlbnRUYWdzO1xuXG4gICAgICAgICAgICAvLyBBbnkgc3BlY2lhbCB0YWdzIGluY2x1ZGVkIHdpdGggdGhpcyBsaW5lXG4gICAgICAgICAgICB2YXIgY3VzdG9tQ2xhc3NlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhZyA9IHRhZ3NbaV07XG5cbiAgICAgICAgICAgICAgICAvLyBEZXRlY3QgdGFncyBvZiB0aGUgZm9ybSBcIlg6IFlcIi4gQ3VycmVudGx5IHVzZWQgZm9yIElNQUdFIGFuZCBDTEFTUyBidXQgY291bGQgYmVcbiAgICAgICAgICAgICAgICAvLyBjdXN0b21pc2VkIHRvIGJlIHVzZWQgZm9yIG90aGVyIHRoaW5ncyB0b28uXG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0VGFnID0gc3BsaXRQcm9wZXJ0eVRhZyh0YWcpO1xuXG4gICAgICAgICAgICAgICAgLy8gSU1BR0U6IHNyY1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdFRhZyAmJiBzcGxpdFRhZy5wcm9wZXJ0eSA9PSBcIklNQUdFXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gc3BsaXRUYWcudmFsO1xuICAgICAgICAgICAgICAgICAgICBzdG9yeUNvbnRhaW5lci5jdXJyZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2hvd0FmdGVyKGRlbGF5LCBpbWFnZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBkZWxheSArPSAyMDAuMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDTEFTUzogY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3BsaXRUYWcgJiYgc3BsaXRUYWcucHJvcGVydHkgPT0gXCJDTEFTU1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzZXMucHVzaChzcGxpdFRhZy52YWwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENMRUFSIC0gcmVtb3ZlcyBhbGwgZXhpc3RpbmcgY29udGVudC5cbiAgICAgICAgICAgICAgICAvLyBSRVNUQVJUIC0gY2xlYXJzIGV2ZXJ5dGhpbmcgYW5kIHJlc3RhcnRzIHRoZSBzdG9yeSBmcm9tIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YWcgPT0gXCJDTEVBUlwiIHx8IHRhZyA9PSBcIlJFU1RBUlRcIikge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVBbGwoXCJwXCIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVBbGwoXCJpbWdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBvdXQgdGhpcyBsaW5lIGlmIHlvdSB3YW50IHRvIGxlYXZlIHRoZSBoZWFkZXIgdmlzaWJsZSB3aGVuIGNsZWFyaW5nXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCIuaGVhZGVyXCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGFnID09IFwiUkVTVEFSVFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBwYXJhZ3JhcGggZWxlbWVudCAoaW5pdGlhbGx5IGhpZGRlbilcbiAgICAgICAgICAgIHZhciBwYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcGFyYWdyYXBoRWxlbWVudC5pbm5lckhUTUwgPSBwYXJhZ3JhcGhUZXh0O1xuICAgICAgICAgICAgc3RvcnlDb250YWluZXIuY3VycmVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGhFbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gQWRkIGFueSBjdXN0b20gY2xhc3NlcyBkZXJpdmVkIGZyb20gaW5rIHRhZ3NcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VzdG9tQ2xhc3Nlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhFbGVtZW50LmNsYXNzTGlzdC5hZGQoY3VzdG9tQ2xhc3Nlc1tpXSk7XG5cbiAgICAgICAgICAgIC8vIEZhZGUgaW4gcGFyYWdyYXBoIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgICAgICAgIHNob3dBZnRlcihkZWxheSwgcGFyYWdyYXBoRWxlbWVudCk7XG4gICAgICAgICAgICBkZWxheSArPSAyMDAuMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBIVE1MIGNob2ljZXMgZnJvbSBpbmsgY2hvaWNlc1xuICAgICAgICBzdG9yeS5jdXJyZW50Q2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UpIHtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBhcmFncmFwaCB3aXRoIGFuY2hvciBlbGVtZW50XG4gICAgICAgICAgICB2YXIgY2hvaWNlUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNob2ljZVBhcmFncmFwaEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNob2ljZVwiKTtcbiAgICAgICAgICAgIGNob2ljZVBhcmFncmFwaEVsZW1lbnQuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJhbnN3ZXJcIj48c3Bhbj4ke2Nob2ljZS50ZXh0fTwvc3Bhbj48L2J1dHRvbj5gXG4gICAgICAgICAgICBzdG9yeUNvbnRhaW5lci5jdXJyZW50LmFwcGVuZENoaWxkKGNob2ljZVBhcmFncmFwaEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBGYWRlIGNob2ljZSBpbiBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgICAgICBzaG93QWZ0ZXIoZGVsYXksIGNob2ljZVBhcmFncmFwaEVsZW1lbnQpO1xuICAgICAgICAgICAgZGVsYXkgKz0gMjAwLjA7XG5cbiAgICAgICAgICAgIC8vIENsaWNrIG9uIGNob2ljZVxuICAgICAgICAgICAgdmFyIGNob2ljZUFuY2hvckVsID0gY2hvaWNlUGFyYWdyYXBoRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uLmFuc3dlclwiKVswXTtcbiAgICAgICAgICAgIGNob2ljZUFuY2hvckVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICAgICAgICAgIC8vIERvbid0IGZvbGxvdyA8YT4gbGlua1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGV4aXN0aW5nIGNob2ljZXNcbiAgICAgICAgICAgICAgICByZW1vdmVBbGwoXCJwLmNob2ljZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIFRlbGwgdGhlIHN0b3J5IHdoZXJlIHRvIGdvIG5leHRcbiAgICAgICAgICAgICAgICBzdG9yeS5DaG9vc2VDaG9pY2VJbmRleChjaG9pY2UuaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWFhbmQgbG9vcFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlU3RvcnkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFeHRlbmQgaGVpZ2h0IHRvIGZpdFxuICAgICAgICAvLyBXZSBkbyB0aGlzIG1hbnVhbGx5IHNvIHRoYXQgcmVtb3ZpbmcgZWxlbWVudHMgYW5kIGNyZWF0aW5nIG5ldyBvbmVzIGRvZXNuJ3RcbiAgICAgICAgLy8gY2F1c2UgdGhlIGhlaWdodCAoYW5kIHRoZXJlZm9yZSBzY3JvbGwpIHRvIGp1bXAgYmFja3dhcmRzIHRlbXBvcmFyaWx5LlxuICAgICAgICBzdG9yeUNvbnRhaW5lci5jdXJyZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRCb3R0b21FZGdlWSgpICsgXCJweFwiO1xuXG4gICAgICAgIGlmICghZmlyc3RUaW1lKVxuICAgICAgICAgICAgc2Nyb2xsRG93bihwcmV2aW91c0JvdHRvbUVkZ2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIHN0b3J5LlJlc2V0U3RhdGUoKTtcblxuICAgICAgICBzZXRWaXNpYmxlKFwiLmhlYWRlclwiLCB0cnVlKTtcblxuICAgICAgICBjb250aW51ZVN0b3J5KHRydWUpO1xuXG4gICAgICAgIG91dGVyU2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgLy8gRmFkZXMgaW4gYW4gZWxlbWVudCBhZnRlciBhIHNwZWNpZmllZCBkZWxheVxuICAgIGNvbnN0IHNob3dBZnRlciA9IChkZWxheSwgZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLy8gU2Nyb2xscyB0aGUgcGFnZSBkb3duLCBidXQgbm8gZnVydGhlciB0aGFuIHRoZSBib3R0b20gZWRnZSBvZiB3aGF0IHlvdSBjb3VsZFxuICAgIC8vIHNlZSBwcmV2aW91c2x5LCBzbyBpdCBkb2Vzbid0IGdvIHRvbyBmYXIuXG4gICAgZnVuY3Rpb24gc2Nyb2xsRG93bihwcmV2aW91c0JvdHRvbUVkZ2UpIHtcblxuICAgICAgICAvLyBMaW5lIHVwIHRvcCBvZiBzY3JlZW4gd2l0aCB0aGUgYm90dG9tIG9mIHdoZXJlIHRoZSBwcmV2aW91cyBjb250ZW50IGVuZGVkXG4gICAgICAgIHZhciB0YXJnZXQgPSBwcmV2aW91c0JvdHRvbUVkZ2U7XG5cbiAgICAgICAgLy8gQ2FuJ3QgZ28gZnVydGhlciB0aGFuIHRoZSB2ZXJ5IGJvdHRvbSBvZiB0aGUgcGFnZVxuICAgICAgICB2YXIgbGltaXQgPSBvdXRlclNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbEhlaWdodCAtIG91dGVyU2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAodGFyZ2V0ID4gbGltaXQpIHRhcmdldCA9IGxpbWl0O1xuXG4gICAgICAgIHZhciBzdGFydCA9IG91dGVyU2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsVG9wO1xuXG4gICAgICAgIHZhciBkaXN0ID0gdGFyZ2V0IC0gc3RhcnQ7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDMwMCArIDMwMCAqIGRpc3QgLyAxMDA7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWUpIHtcbiAgICAgICAgICAgIGlmIChzdGFydFRpbWUgPT0gbnVsbCkgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgICAgICAgIHZhciB0ID0gKHRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb247XG4gICAgICAgICAgICB2YXIgbGVycCA9IDMgKiB0ICogdCAtIDIgKiB0ICogdCAqIHQ7IC8vIGVhc2UgaW4vb3V0XG4gICAgICAgICAgICBvdXRlclNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbFRvKDAsICgxLjAgLSBsZXJwKSAqIHN0YXJ0ICsgbGVycCAqIHRhcmdldCk7XG4gICAgICAgICAgICBpZiAodCA8IDEpIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfVxuXG4gICAgLy8gVGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIGVuZCBvZiBhbGwgdGhlIHN0b3J5IGNvbnRlbnQsIHVzZWRcbiAgICAvLyBmb3IgZ3Jvd2luZyB0aGUgY29udGFpbmVyLCBhbmQgZGVjaWRpbmcgaG93IGZhciB0byBzY3JvbGwuXG4gICAgZnVuY3Rpb24gY29udGVudEJvdHRvbUVkZ2VZKCkge1xuICAgICAgICB2YXIgYm90dG9tRWxlbWVudCA9IHN0b3J5Q29udGFpbmVyLmN1cnJlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgcmV0dXJuIGJvdHRvbUVsZW1lbnQgPyBib3R0b21FbGVtZW50Lm9mZnNldFRvcCArIGJvdHRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMDtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIGVsZW1lbnRzIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHNlbGVjdG9yLiBVc2VkIGZvciByZW1vdmluZyBjaG9pY2VzIGFmdGVyXG4gICAgLy8geW91J3ZlIHBpY2tlZCBvbmUsIGFzIHdlbGwgYXMgZm9yIHRoZSBDTEVBUiBhbmQgUkVTVEFSVCB0YWdzLlxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbChzZWxlY3Rvcikge1xuICAgICAgICB2YXIgYWxsRWxlbWVudHMgPSBzdG9yeUNvbnRhaW5lci5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBhbGxFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXNlZCBmb3IgaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBoZWFkZXIgd2hlbiB5b3UgQ0xFQVIgb3IgUkVTVEFSVCB0aGUgc3RvcnkgcmVzcGVjdGl2ZWx5LlxuICAgIGZ1bmN0aW9uIHNldFZpc2libGUoc2VsZWN0b3IsIHZpc2libGUpIHtcbiAgICAgICAgdmFyIGFsbEVsZW1lbnRzID0gc3RvcnlDb250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVsID0gYWxsRWxlbWVudHNbaV07XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGVscGVyIGZvciBwYXJzaW5nIG91dCB0YWdzIG9mIHRoZSBmb3JtOlxuICAgIC8vICAjIFBST1BFUlRZOiB2YWx1ZVxuICAgIC8vIGUuZy4gSU1BR0U6IHNvdXJjZSBwYXRoXG4gICAgZnVuY3Rpb24gc3BsaXRQcm9wZXJ0eVRhZyh0YWcpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5U3BsaXRJZHggPSB0YWcuaW5kZXhPZihcIjpcIik7XG4gICAgICAgIGlmIChwcm9wZXJ0eVNwbGl0SWR4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHRhZy5zdWJzdHIoMCwgcHJvcGVydHlTcGxpdElkeCkudHJpbSgpO1xuICAgICAgICAgICAgdmFyIHZhbCA9IHRhZy5zdWJzdHIocHJvcGVydHlTcGxpdElkeCArIDEpLnRyaW0oKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgICAgICAgICAgIHZhbDogdmFsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goXCJzdG9yeTEuanNvblwiKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdG9yeSBmaWxlIGZvdW5kXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN0b3J5Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RvcnkgZmlsZSBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1N0b3J5ID0gbmV3IGlua3kuU3Rvcnkoc3RvcnlDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBpbmsgc3RvcnkgY3JlYXRlZFwiKVxuICAgICAgICAgICAgICAgIHNldFN0b3J5KG5ld1N0b3J5KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sIFtdKVxuXG4gICAgLy8gQWZ0ZXIgc3RvcnkgaXMgbG9hZGVkXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG51bGwgIT09IHN0b3J5KSB7XG4gICAgICAgICAgICBjb250aW51ZVN0b3J5KCk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RvcnldKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5EYXRpbmcgU2ltPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPGgxPkRhdGluZyBTaW08L2gxPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRlckNvbnRhaW5lclwiIHJlZj17b3V0ZXJTY3JvbGxDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3RvcnlcIiByZWY9e3N0b3J5Q29udGFpbmVyfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=