(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1gqn":function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},"2+8J":function(e,t,n){},"9lTW":function(e,t,n){"use strict";(function(t){var r=n("6qGY");function o(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,o=0,i=Math.min(n,r);o<i;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0}function i(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var a=n("MCLT"),l=Object.prototype.hasOwnProperty,c=Array.prototype.slice,u="foo"===function(){}.name;function s(e){return Object.prototype.toString.call(e)}function f(e){return!i(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var p=e.exports=w,d=/\s*function\s+([^\(\s]*)\s*/;function h(e){if(a.isFunction(e)){if(u)return e.name;var t=e.toString().match(d);return t&&t[1]}}function m(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function y(e){if(u||!a.isFunction(e))return a.inspect(e);var t=h(e);return"[Function"+(t?": "+t:"")+"]"}function g(e,t,n,r,o){throw new p.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:o})}function w(e,t){e||g(e,!0,t,"==",p.ok)}function b(e,t,n,r){if(e===t)return!0;if(i(e)&&i(t))return 0===o(e,t);if(a.isDate(e)&&a.isDate(t))return e.getTime()===t.getTime();if(a.isRegExp(e)&&a.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(f(e)&&f(t)&&s(e)===s(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===o(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(i(e)!==i(t))return!1;var l=(r=r||{actual:[],expected:[]}).actual.indexOf(e);return-1!==l&&l===r.expected.indexOf(t)||(r.actual.push(e),r.expected.push(t),function(e,t,n,r){if(null==e||null==t)return!1;if(a.isPrimitive(e)||a.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var o=v(e),i=v(t);if(o&&!i||!o&&i)return!1;if(o)return e=c.call(e),t=c.call(t),b(e,t,n);var l,u,s=S(e),f=S(t);if(s.length!==f.length)return!1;for(s.sort(),f.sort(),u=s.length-1;u>=0;u--)if(s[u]!==f[u])return!1;for(u=s.length-1;u>=0;u--)if(l=s[u],!b(e[l],t[l],n,r))return!1;return!0}(e,t,n,r))}return n?e===t:e==t}function v(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function E(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(n){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function O(e,t,n,r){var o;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=function(e){var t;try{e()}catch(n){t=n}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!o&&g(o,n,"Missing expected exception"+r);var i="string"==typeof r,l=!e&&o&&!n;if((!e&&a.isError(o)&&i&&E(o,n)||l)&&g(o,n,"Got unwanted exception"+r),e&&o&&n&&!E(o,n)||!e&&o)throw o}p.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=m(y((t=this).actual),128)+" "+t.operator+" "+m(y(t.expected),128),this.generatedMessage=!0);var n=e.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var o=r.stack,i=h(n),a=o.indexOf("\n"+i);if(a>=0){var l=o.indexOf("\n",a+1);o=o.substring(l+1)}this.stack=o}}},a.inherits(p.AssertionError,Error),p.fail=g,p.ok=w,p.equal=function(e,t,n){e!=t&&g(e,t,n,"==",p.equal)},p.notEqual=function(e,t,n){e==t&&g(e,t,n,"!=",p.notEqual)},p.deepEqual=function(e,t,n){b(e,t,!1)||g(e,t,n,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(e,t,n){b(e,t,!0)||g(e,t,n,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(e,t,n){b(e,t,!1)&&g(e,t,n,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function e(t,n,r){b(t,n,!0)&&g(t,n,r,"notDeepStrictEqual",e)},p.strictEqual=function(e,t,n){e!==t&&g(e,t,n,"===",p.strictEqual)},p.notStrictEqual=function(e,t,n){e===t&&g(e,t,n,"!==",p.notStrictEqual)},p.throws=function(e,t,n){O(!0,e,t,n)},p.doesNotThrow=function(e,t,n){O(!1,e,t,n)},p.ifError=function(e){if(e)throw e},p.strict=r((function e(t,n){t||g(t,!0,n,"==",e)}),p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var S=Object.keys||function(e){var t=[];for(var n in e)l.call(e,n)&&t.push(n);return t}}).call(this,n("yLpj"))},AoQJ:function(e,t,n){},KKCa:function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},MCLT:function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!g(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(l(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}})),c=r[n];n<i;c=r[++n])m(c)||!v(c)?a+=" "+c:a+=" "+l(c);return a},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,a={};function l(e,n){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),w(r.showHidden)&&(r.showHidden=!1),w(r.depth)&&(r.depth=2),w(r.colors)&&(r.colors=!1),w(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),s(r,e,r.depth)}function c(e,t){var n=l.styles[t];return n?"["+l.colors[n][0]+"m"+e+"["+l.colors[n][1]+"m":e}function u(e,t){return e}function s(e,n,r){if(e.customInspect&&n&&S(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return g(o)||(o=s(e,o,r)),o}var i=function(e,t){if(w(t))return e.stylize("undefined","undefined");if(g(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(y(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(m(t))return e.stylize("null","null")}(e,n);if(i)return i;var a=Object.keys(n),l=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),O(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return f(n);if(0===a.length){if(S(n)){var c=n.name?": "+n.name:"";return e.stylize("[Function"+c+"]","special")}if(b(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(E(n))return e.stylize(Date.prototype.toString.call(n),"date");if(O(n))return f(n)}var u,v="",j=!1,k=["{","}"];(d(n)&&(j=!0,k=["[","]"]),S(n))&&(v=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(v=" "+RegExp.prototype.toString.call(n)),E(n)&&(v=" "+Date.prototype.toUTCString.call(n)),O(n)&&(v=" "+f(n)),0!==a.length||j&&0!=n.length?r<0?b(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),u=j?function(e,t,n,r,o){for(var i=[],a=0,l=t.length;a<l;++a)z(t,String(a))?i.push(p(e,t,n,r,String(a),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))})),i}(e,n,r,l,a):a.map((function(t){return p(e,n,r,l,t,j)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(u,v,k)):k[0]+v+k[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,i){var a,l,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?l=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(l=e.stylize("[Setter]","special")),z(r,o)||(a="["+o+"]"),l||(e.seen.indexOf(c.value)<0?(l=m(n)?s(e,c.value,null):s(e,c.value,n-1)).indexOf("\n")>-1&&(l=i?l.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+l.split("\n").map((function(e){return"   "+e})).join("\n")):l=e.stylize("[Circular]","special")),w(a)){if(i&&o.match(/^\d+$/))return l;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+l}function d(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function m(e){return null===e}function y(e){return"number"==typeof e}function g(e){return"string"==typeof e}function w(e){return void 0===e}function b(e){return v(e)&&"[object RegExp]"===j(e)}function v(e){return"object"==typeof e&&null!==e}function E(e){return v(e)&&"[object Date]"===j(e)}function O(e){return v(e)&&("[object Error]"===j(e)||e instanceof Error)}function S(e){return"function"==typeof e}function j(e){return Object.prototype.toString.call(e)}function k(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(w(i)&&(i={}.NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;a[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else a[n]=function(){};return a[n]},t.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=h,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=y,t.isString=g,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=w,t.isRegExp=b,t.isObject=v,t.isDate=E,t.isError=O,t.isFunction=S,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n("1gqn");var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function N(){var e=new Date,t=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":");return[e.getDate(),x[e.getMonth()],t].join(" ")}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",N(),t.format.apply(t,arguments))},t.inherits=n("KKCa"),t._extend=function(e,t){if(!t||!v(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var C="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function P(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(C&&e[C]){var t;if("function"!=typeof(t=e[C]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,C,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(a){n(a)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),C&&Object.defineProperty(t,C,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=C,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,a=function(){return o.apply(i,arguments)};t.apply(this,n).then((function(t){e.nextTick(a,null,t)}),(function(t){e.nextTick(P,t,a)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n("8oxB"))},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},alRN:function(e,t,n){},uG8V:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return $}));var r=n("q1tI"),o=n.n(r),i=n("TJpk"),a=n.n(i),l=n("/MKj"),c=n("Wbzz"),u=n("IP2g"),s=n("wHSu");function f(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var p,d=n("TSYQ"),h=n.n(d),m=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},g=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))},w=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(l){i=[6,l],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},E=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},O=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function S(e,t,n){var r=t.height,o=t.width,i=b(t,["height","width"]),a=y({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),n(l))}catch(e){console.error(e)}}),1e3);return l}var j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,l=void 0===a?"windowCenter":a,c=n.windowWidth,u=void 0===c?550:c;S(e,y({height:i,width:u},"windowCenter"===l?E(u,i):O(u,i)),r)},t.handleClick=function(e){return g(t,void 0,void 0,(function(){var t,n,r,o,i,a,l,c,u,s;return w(this,(function(f){switch(f.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,l=t.openShareDialogOnClick,c=t.opts,u=o(a,c),r?[2]:(e.preventDefault(),n?(s=n(),v(s)?[4,s]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return l&&this.openShareDialog(u),i&&i(e,u),[2]}}))}))},t}return m(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,a=e.forwardedRef,l=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),u=e.style,s=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,b(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=h()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=y(y(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),r&&i);return o.a.createElement("button",y({},s,{"aria-label":s["aria-label"]||l,className:f,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),k=function(){return(k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var x=function(e,t,n,i){function a(r,a){var l=n(r),c=k({},r);return Object.keys(l).forEach((function(e){delete c[e]})),o.a.createElement(j,k({},i,c,{forwardedRef:a,networkName:e,networkLink:t,opts:n(r)}))}return a.displayName="ShareButton-"+e,Object(r.forwardRef)(a)};var N=x("email",(function(e,t){var n=t.subject,r=t.body,o=t.separator;return"mailto:"+f({subject:n,body:r?r+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),z=function(){return(z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function P(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,i=t.iconFillColor,a=t.round,l=t.size,c=C(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",z({viewBox:"0 0 64 64",width:l,height:l},c),a?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.a.createElement("path",{d:e.path,fill:i}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var q=P({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"}),D=n("9lTW"),A=n.n(D);var H=x("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return A()(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+f({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),T=P({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var F=x("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,i=void 0===o?[]:o,a=t.related,l=void 0===a?[]:a;return A()(e,"twitter.url"),A()(Array.isArray(i),"twitter.hashtags is not an array"),A()(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+f({url:e,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),I=P({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var M=x("linkedin",(function(e,t){var n=t.title,r=t.summary,o=t.source;return A()(e,"linkedin.url"),"https://linkedin.com/shareArticle"+f({url:e,mini:"true",title:n,summary:r,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),B=P({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var R=x("reddit",(function(e,t){var n=t.title;return A()(e,"reddit.url"),"https://www.reddit.com/submit"+f({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),_=P({color:"#5f99cf",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"});var L=x("pocket",(function(e,t){var n=t.title;return A()(e,"pocket.url"),"https://getpocket.com/save"+f({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:500,windowHeight:500}),U=P({color:"#EF3F56",networkName:"pocket",path:"M41.084 29.065l-7.528 7.882a2.104 2.104 0 0 1-1.521.666 2.106 2.106 0 0 1-1.522-.666l-7.528-7.882c-.876-.914-.902-2.43-.065-3.384.84-.955 2.228-.987 3.1-.072l6.015 6.286 6.022-6.286c.88-.918 2.263-.883 3.102.071.841.938.82 2.465-.06 3.383l-.015.002zm6.777-10.976C47.463 16.84 46.361 16 45.14 16H18.905c-1.2 0-2.289.82-2.716 2.044-.125.363-.189.743-.189 1.125v10.539l.112 2.096c.464 4.766 2.73 8.933 6.243 11.838.06.053.125.102.19.153l.04.033c1.882 1.499 3.986 2.514 6.259 3.014a14.662 14.662 0 0 0 6.13.052c.118-.042.235-.065.353-.087.03 0 .065-.022.098-.042a15.395 15.395 0 0 0 6.011-2.945l.039-.045.18-.153c3.502-2.902 5.765-7.072 6.248-11.852L48 29.674v-10.52c0-.366-.041-.728-.161-1.08l.022.015z"}),W=n("DzJC"),V=n.n(W),J=(n("AoQJ"),n("alRN"),n("VXBa")),G=(n("2+8J"),function(e){var t=e.toc,n=e.isOutside;return r.createElement("div",{className:"toc "+(n?"outside":"inside"),dangerouslySetInnerHTML:{__html:t}})}),Y=n("H8eV"),K=n("obyI"),Q=n.n(K),$="545143749";t.default=function(e){var t,o="undefined"==typeof window,i=e.data,f=e.location,p=e.pageContext,d=Object(l.c)((function(e){return e.isMobile})),h=Object(r.useState)([]),m=h[0],y=h[1],g=Object(r.useState)(!1),w=g[0],b=g[1],v=Object(r.useState)(),E=v[0],O=v[1],S=i.markdownRemark,j=S.frontmatter,k=S.html,x=S.tableOfContents,z=S.fields,C=j.title,P=j.description,D=j.featuredImage,A=j.date,W=j.tags,K=j.update;1===Number(null===(t=K)||void 0===t?void 0:t.split(",")[1])&&(K=null);var $=z.slug,X=p.series,Z=Q.a.enablePostOfContents,ee=(Q.a.disqusShortname,Q.a.enableSocialShare),te=Z&&""!==x,ne=ee,re=W.map((function(e){return r.createElement("li",{key:e,className:"blog-post-tag"},r.createElement(c.Link,{to:"/tags#"+e},"#"+e))})),oe=X.map((function(e){return r.createElement("li",{key:e.slug+"-series-"+e.num,className:"series-item "+($===e.slug?"current-series":"")},r.createElement(c.Link,{to:e.slug},r.createElement("span",null,e.title),r.createElement("div",{className:"icon-wrap"},$===e.slug?r.createElement(u.a,{icon:s.c}):null)))}));return Object(r.useEffect)((function(){if(d){var e=document.querySelector(".ad");if(e){var t=window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight;e.style.maxWidth=t+"px",e.style.display="flex",e.style.justifyContent="flex-end"}}}),[d]),Object(r.useEffect)((function(){var e=function(){if(m){var e=m.filter((function(e){return e<window.pageYOffset})).length-1,t=document.querySelectorAll(".toc.outside li a");for(var n in Array.from(t))parseInt(n,10)===e?t[n].style.opacity="1":t[n].style.opacity="0.4"}};return te&&document.addEventListener("scroll",e),function(){te&&document.removeEventListener("scroll",e)}}),[m]),Object(r.useEffect)((function(){var e,t,o=null!==(e=null===(t=document.querySelector(".blog-post"))||void 0===t?void 0:t.getBoundingClientRect().top)&&void 0!==e?e:0,i=function(){return document.removeEventListener("scroll",a)},a=V()((function(){var e,t,a,l=null!==(e=null===(t=document.querySelector(".blog-post"))||void 0===t?void 0:t.getBoundingClientRect().height)&&void 0!==e?e:1/0;window.scrollY+1.75*window.innerHeight-o>l&&(a=r.lazy((function(){return n.e(13).then(n.bind(null,"cor7"))})),O(r.createElement(a,{slug:$,title:C})),i())}),250);a(),document.addEventListener("scroll",a);var l=Array.from(document.querySelectorAll("h2, h3")),c=window.innerHeight<500?100:Math.floor(window.innerHeight/5),u=l.map((function(e){return e.offsetTop-c}));return y(u),function(){return i()}}),[]),r.createElement(r.Fragment,null,r.createElement(a.a,null,r.createElement("script",{type:"application/ld+json"},'\n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "datePublished": "'+new Date(A).toISOString()+'",\n  '+(K?'"dateModified": "'+new Date(K).toISOString()+'",':"")+'\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "'+Q.a.siteUrl+'"\n  },\n  "author": {\n    "@type": "Person",\n    "name": "'+Q.a.name+'"\n  },\n  "headline": "'+C+'",\n  '+(Q.a.profileImageFileName?'"publisher": {\n    "@type" : "organization",\n    "name" : "'+Q.a.name+'",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "'+Q.a.siteUrl+n("a2qD")("./"+Q.a.profileImageFileName)+'"\n    }\n  },\n  "image": ["'+Q.a.siteUrl+n("a2qD")("./"+Q.a.profileImageFileName)+'"]':'"publisher": {\n    "@type" : "organization",\n    "name" : "'+Q.a.name+'"\n  },\n  "image": []')+"\n}\n")),r.createElement(Y.a,{title:C,description:P,pathname:f.pathname,ogImage:D.publicURL,ogType:"article"}),r.createElement(J.a,null,r.createElement("div",{className:"blog-post-container"},r.createElement("div",{className:"blog-post"},r.createElement("h1",{className:"blog-post-title"},C),r.createElement("div",{className:"blog-post-info"},r.createElement("div",{className:"date-wrap"},r.createElement("span",{className:"write-date"},A),K?r.createElement(r.Fragment,null,r.createElement("span",null,"("),r.createElement("span",{className:"update-date"},"Last updated: "+K),r.createElement("span",null,")")):null),W.length&&"undefined"!==W[0]?r.createElement(r.Fragment,null,r.createElement("span",{className:"dot"},"·"),r.createElement("ul",{className:"blog-post-tag-list"},re)):null,te?r.createElement("div",{className:"blog-post-inside-toc"},r.createElement("div",{className:"toc-button",role:"button",onClick:function(){b((function(e){return!e}))}},r.createElement(u.a,{icon:s.h}))):null),te?r.createElement("div",{className:"inside-toc-wrap",style:{display:w?"flex":"none"}},r.createElement(G,{isOutside:!1,toc:x})):null,X.length>1?r.createElement(r.Fragment,null,r.createElement("div",{className:"series"},r.createElement("div",{className:"series-head"},r.createElement("span",{className:"head"},"Post Series"),r.createElement("div",{className:"icon-wrap"},r.createElement(u.a,{icon:s.f}))),r.createElement("ul",{className:"series-list"},oe))):null,r.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:k}})),ne?r.createElement("div",{className:"social-share"},r.createElement("ul",null,r.createElement("li",{className:"social-share-item email"},r.createElement(N,{url:Q.a.siteUrl+$},r.createElement(q,{size:24,round:!0}))),r.createElement("li",{className:"social-share-item facebook"},r.createElement(H,{url:Q.a.siteUrl+$},r.createElement(T,{size:24,round:!0}))),r.createElement("li",{className:"social-share-item twitter"},r.createElement(F,{url:Q.a.siteUrl+$},r.createElement(I,{size:24,round:!0}))),r.createElement("li",{className:"social-share-item linkedin"},r.createElement(M,{url:Q.a.siteUrl+$},r.createElement(B,{size:24,round:!0}))),r.createElement("li",{className:"social-share-item reddit"},r.createElement(R,{url:Q.a.siteUrl+$},r.createElement(_,{size:24,round:!0}))),r.createElement("li",{className:"social-share-item pocket"},r.createElement(L,{url:Q.a.siteUrl+$},r.createElement(U,{size:24,round:!0}))))):null,r.createElement(r.Fragment,null,o?null:r.createElement(r.Suspense,{fallback:r.createElement(r.Fragment,null)},E))),te?r.createElement(G,{isOutside:!0,toc:x}):null))}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-9b43bc82a66a030b7432.js.map