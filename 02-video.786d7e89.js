parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zU8P":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3];function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=void 0!==e&&"[object global]"==={}.toString.call(e);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function a(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function u(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function c(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function l(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(u(r))return"https://vimeo.com/".concat(r);if(c(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var f=void 0!==Array.prototype.indexOf,d="undefined"!=typeof window&&void 0!==window.postMessage;if(!(o||f&&d))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function v(e,t){return e(t={exports:{}},t.exports),t.exports}!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id","_WeakMap"+"_"+i()+"."+i()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",function(e){if(n(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)}),r(e.prototype,"get",function(e){if(n(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),r(e.prototype,"has",function(e){if(n(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),r(e.prototype,"set",function(e,t){if(n(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(r(e,this._id,[e,t]),this)}),r(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:h);var m=v(function(e){var t,n,r;r=function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(m){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)c(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function c(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(m){n.reject(m)}}function l(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function s(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then(function(e){n(o,e)},r)}(o)}function f(e){this.def=e,this.triggered=!1}function d(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function h(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new d(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t}),t.chain.push(r),0!==t.state&&i(u,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){(function e(t){var n,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(n=a(t))?i(function(){var o=new f(r);try{n.call(t,function(){e.apply(o,arguments)},function(){l.apply(o,arguments)})}catch(m){l.call(o,m)}}):(r.msg=t,r.state=1,r.chain.length>0&&i(u,r))}catch(m){l.call(new f(r),m)}}}).call(t,e)},function(e){l.call(t,e)})}catch(m){l.call(t,m)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var v=e({},"constructor",h,!1);return h.prototype=v,e(v,"__NPO__",0,!1),e(h,"resolve",function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),e(h,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),e(h,"all",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;s(t,e,function(e,t){i[e]=t,++a===o&&n(i)},r)})}),e(h,"race",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");s(t,e,function(e,t){n(t)},r)})}),h},(n=h)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])}),p=new WeakMap;function y(e,t,n){var r=p.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),p.set(e.element,r)}function g(e,t){return(p.get(e.element)||{})[t]||[]}function w(e,t,n){var r=p.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],p.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),p.set(e.element,r),r[t]&&0===r[t].length}function b(e,t){var n=g(e,t);if(n.length<1)return!1;var r=n.shift();return w(e,t,r),r}function k(e,t){var n=p.get(e);p.set(t,n),p.delete(e)}function E(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function T(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function P(e,t){var n,r=[];if((t=E(t)).event){if("error"===t.event)g(e,t.data.method).forEach(function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),w(e,t.data.method,n)});r=g(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=b(e,t.method);o&&(r.push(o),n=t.value)}r.forEach(function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(r){}})}var _=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _.reduce(function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t},t)}function F(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise(function(r,o){if(!c(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return F(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(i){o(i)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()})}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach(function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=M(e);N(s(t),t,e).then(function(t){return F(t,e)}).catch(n)}catch(r){n(r)}})}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;window.addEventListener("message",function(t){if(c(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}})}}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;window.addEventListener("message",function(t){if(c(t.origin)){var n=E(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;l(i.src)&&a&&new I(i).callMethod("appendVideoMetadata",window.location.href)}}})}}function A(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise(function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)})},exit:function(){return new Promise(function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()})},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}var S=new WeakMap,q=new WeakMap,O={},I=function(){function e(n){var r=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t(this,e),window.jQuery&&n instanceof jQuery&&(n.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),n=n[0]),"undefined"!=typeof document&&"string"==typeof n&&(n=document.getElementById(n)),!a(n))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==n.nodeName){var i=n.querySelector("iframe");i&&(n=i)}if("IFRAME"===n.nodeName&&!c(n.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(S.has(n))return S.get(n);this._window=n.ownerDocument.defaultView,this.element=n,this.origin="*";var u=new m(function(e,t){if(r._onMessage=function(n){if(c(n.origin)&&r.element.contentWindow===n.source){"*"===r.origin&&(r.origin=n.origin);var o=E(n.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var i=new Error(o.data.message);return i.name=o.data.name,void t(i)}var a=o&&"ready"===o.event,u=o&&"ping"===o.method;if(a||u)return r.element.setAttribute("data-ready","true"),void e();P(r,o)}},r._window.addEventListener("message",r._onMessage),"IFRAME"!==r.element.nodeName){var i=M(n,o);N(s(i),i,n).then(function(e){var t=F(e,n);return r.element=t,r._originalElement=n,k(n,t),S.set(r.element,r),e}).catch(t)}});if(q.set(this,u),S.set(this.element,this),"IFRAME"===this.element.nodeName&&T(this,"ping"),O.isEnabled){var l=function(){return O.exit()};this.fullscreenchangeHandler=function(){O.isFullscreen?y(r,"event:exitFullscreen",l):w(r,"event:exitFullscreen",l),r.ready().then(function(){T(r,"fullscreenchange",O.isFullscreen)})},O.on("fullscreenchange",this.fullscreenchangeHandler)}return this}return r(e,[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new m(function(r,o){return t.ready().then(function(){y(t,e,{resolve:r,reject:o}),T(t,e,n)}).catch(o)})}},{key:"get",value:function(e){var t=this;return new m(function(n,r){return e=i(e,"get"),t.ready().then(function(){y(t,e,{resolve:n,reject:r}),T(t,e)}).catch(r)})}},{key:"set",value:function(e,t){var n=this;return new m(function(r,o){if(e=i(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then(function(){y(n,e,{resolve:r,reject:o}),T(n,e,t)}).catch(o)})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===g(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),y(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");w(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=q.get(this)||new m(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return m.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return O.isEnabled?O.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return O.isEnabled?O.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return O.isEnabled?m.resolve(O.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new m(function(t){if(q.delete(e),S.delete(e.element),e._originalElement&&(S.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),O.isEnabled&&O.off("fullscreenchange",e.fullscreenchangeHandler),t()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}]),e}();o||(O=A(),x(),C(),j());var V=I;exports.default=V;
},{}],"FNyO":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],n="Expected a function",e=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),v=Object.prototype,p=v.toString,y=Math.max,d=Math.min,m=function(){return s.Date.now()};function b(t,e,i){var r,o,u,f,a,c,l=0,s=!1,v=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function b(n){var e=r,i=o;return r=o=void 0,l=n,f=t.apply(i,e)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||v&&t-l>=u}function h(){var t=m();if(g(t))return x(t);a=setTimeout(h,function(t){var n=e-(t-c);return v?d(n,u-(t-l)):n}(t))}function x(t){return a=void 0,p&&r?b(t):(r=o=void 0,f)}function T(){var t=m(),n=g(t);if(r=arguments,o=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(h,e),s?b(t):f}(c);if(v)return a=setTimeout(h,e),b(c)}return void 0===a&&(a=setTimeout(h,e)),f}return e=O(e)||0,j(i)&&(s=!!i.leading,u=(v="maxWait"in i)?y(O(i.maxWait)||0,e):u,p="trailing"in i?!!i.trailing:p),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},T.flush=function(){return void 0===a?f:x(m())},T}function g(t,e,i){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(n);return j(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),b(t,e,{leading:r,maxWait:e,trailing:o})}function j(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){return!!t&&"object"==typeof t}function x(t){return"symbol"==typeof t||h(t)&&p.call(t)==i}function O(t){if("number"==typeof t)return t;if(x(t))return e;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?a(t.slice(2),i?2:8):o.test(t)?e:+t}module.exports=g;
},{}],"iiAF":[function(require,module,exports) {
"use strict";var e=o(require("@vimeo/player")),t=o(require("lodash.throttle"));function o(e){return e&&e.__esModule?e:{default:e}}var r=document.querySelector("iframe"),a=new e.default(r),l="videoplayer-current-time",s=function(e){console.log("просмотр видео на",parseInt(e.seconds),"секунде"),localStorage.setItem(l,JSON.stringify(e.seconds))};a.on("timeupdate",(0,t.default)(s,1e3)),JSON.parse(localStorage.getItem(l))?(console.log("проигрывание начнеться с",parseInt(JSON.parse(localStorage.getItem(l)))),a.setCurrentTime(JSON.parse(localStorage.getItem(l)))):console.log("У нас нет сохраненого времени");
},{"@vimeo/player":"zU8P","lodash.throttle":"FNyO"}]},{},["iiAF"], null)
//# sourceMappingURL=/goit-js-hw-08/02-video.786d7e89.js.map