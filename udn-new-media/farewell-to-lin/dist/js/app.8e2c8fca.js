(function(e){function t(t){for(var o,a,l=t[0],s=t[1],d=t[2],u=0,p=[];u<l.length;u++)a=l[u],i[a]&&p.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);c&&c(t);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d26":function(e,t,n){"use strict";var o=n("5592"),i=n.n(o);i.a},"26e7":function(e,t,n){"use strict";var o=n("e84c"),i=n.n(o);i.a},2856:function(e,t,n){},"2b57":function(e,t,n){},4071:function(e,t,n){"use strict";var o=n("d21b"),i=n.n(o);i.a},"4ca7":function(e,t,n){e.exports=n.p+"media/mobile_video.7ef4abb2.mp4"},5592:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Cover"),n("OpeningLine"),n("Youtube"),n("PhotoScrollPage")],1)},r=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("article",{staticClass:"cover",on:{"~mousewheel":function(t){return e.dancerMove(t)},"~DOMMouseScroll":function(t){return e.dancerMove(t)},"~touchmove":function(t){return e.dancerMove(t)}}},[o("video",{staticClass:"cover__video",attrs:{id:"cover__video","data-object-fit":"cover",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[e.isMobileSize?o("source",{attrs:{src:n("4ca7"),type:"video/mp4"}}):o("source",{attrs:{src:n("adb3"),type:"video/mp4"}})])])},l=[],s={name:"Cover",data(){return{windowWidth:window.innerWidth,isDancerMove:!1,isCoverPromptExist:!0,isCoverFadeOut:!1,isCoverTitleFadeIn:!1,isCoverTitleMove:!1}},created(){window.addEventListener("resize",this.resizeHandler)},computed:{isMobileSize(){return this.windowWidth<576}},methods:{resizeHandler(){this.windowWidth=window.innerWidth},dancerClass(e){const t={"dancer-move":this.isDancerMove};return t[`dancer${e}`]=!0,t[`dancer${e}-move`]=this.isDancerMove&&4!==e&&5!==e,t},dancerMove(){this.isCoverPromptExist=!1,this.isDancerMove=!0},dancerMoveEnd(){this.isDancerMove&&(this.isCoverFadeOut=!0)},coverFadeOutEnd(){this.isCoverTitleFadeIn=!0},coverTitleFadeInEnd(){this.isCoverTitleMove=!0},subtitleMoveEnd(){this.$root.$el.style.overflow="initial"}}},d=s,c=(n("0d26"),n("2877")),u=Object(c["a"])(d,a,l,!1,null,null,null);u.options.__file="Cover.vue";var p=u.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"opening-line"},[n("p",[e._v("去年雲門舞集創辦人、藝術總監林懷民宣布將於2019年底退休，為社會投下震撼彈。在驚訝與不捨之後，大家更關注林懷民以及雲門舞集的下一步，連林懷民本人都笑說：「好像我說要退休之後，大家對我更好奇了。」")]),n("p",[n("br")]),n("p",[e._v("回首雲門舞集一路走來，成立在1973年、台灣退出聯合國後隔年，林懷民帶領雲門舞集與台灣併肩走過45年光陰，創作出無數作品，不只是台灣在國際舞台上最亮麗的文化名片，更帶給許多台灣人一段寧靜、快樂的觀舞時光。")]),n("p",[n("br")]),n("p",[e._v("一直以來，林懷民作品風格的多變，都與他感受到的台灣息息相關。他口中退休前的最後一齣舞作《關於島嶼》，裡面同時有著和諧與衝突、挫敗與希望，是他對當今台灣的印象，以及感受到的氛圍。他自稱這是他的「懺悔錄」，問他懺悔何來，他字字沉重：")]),n("p",[n("br")]),n("q",[e._v("「台灣的今天，都是我們的共業，是我們眼睜睜讓這些事發生。」")]),n("p",[n("br")]),n("p",[e._v("對於這塊孕育雲門舞集的土地，他有滿懷的情感與憂心，日前林懷民接受《聯合晚報》與新媒體中心專訪，暢談他眼中的台灣變化、雲門歷程與內心感懷。")])])}],h={name:"OpeningLine"},m=h,b=(n("26e7"),Object(c["a"])(m,f,v,!1,null,"62b5d202",null));b.options.__file="OpeningLine.vue";var w=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"youtube"})},g=[],_={name:"Youtube"},C=_,S=(n("4071"),Object(c["a"])(C,y,g,!1,null,"687f2e9a",null));S.options.__file="Youtube.vue";var O=S.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("div",{staticClass:"photo"}),n("div",{staticClass:"content"})])}],M={name:"PhotoScrollPage"},P=M,j=(n("77b6"),Object(c["a"])(P,x,E,!1,null,"5dafaa82",null));j.options.__file="PhotoScrollPage.vue";var L=j.exports,Y={name:"app",components:{Cover:p,OpeningLine:w,Youtube:O,PhotoScrollPage:L},data(){return{bodyClass:document.body.classList,startScrollTime:new Date,pageScrollY:0}},created(){window.addEventListener("load",this.loadHandler),window.addEventListener("beforeunload",this.beforeunloadHandler),window.addEventListener("resize",this.resizeHandler),window.addEventListener("mousewheel",this.pageScroll),window.addEventListener("DOMMouseScroll",this.pageScroll)},methods:{loadHandler(){window.innerWidth>=576&&this.bodyClass.add("hidden")},beforeunloadHandler(){window.scrollTo({top:0,behavior:"instant"})},resizeHandler(){window.innerWidth<576?(this.bodyClass.remove("hidden"),this.$el.style.transform="translateY(0vh)"):(0===window.pageYOffset&&this.bodyClass.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}))},pageScroll(e){if(window.innerWidth<576||window.pageYOffset>0)return;const t=new Date;if(t-this.startScrollTime<800)return;const n=-e.wheelDelta||e.detail;if(n>0){if(-200===this.pageScrollY)this.bodyClass.remove("hidden");else if(-300===this.pageScrollY)return;this.pageScrollY-=100}else{if(0===this.pageScrollY)return;if(!(window.pageYOffset<=0))return;this.bodyClass.add("hidden"),this.pageScrollY+=100}this.$el.style.transform=`translateY(${this.pageScrollY}vh)`,this.startScrollTime=t}}},T=Y,$=(n("5c0b"),Object(c["a"])(T,i,r,!1,null,null,null));$.options.__file="App.vue";var D=$.exports;n("fa6d"),n("2b57");n("8386"),o["a"].config.productionTip=!1,new o["a"]({render:e=>e(D)}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("2856"),i=n.n(o);i.a},"77b6":function(e,t,n){"use strict";var o=n("b2a8"),i=n.n(o);i.a},8386:function(e,t,n){"use strict";n.r(t);n("4917");!function(){if("undefined"!=typeof window){var e=window.navigator.userAgent.match(/Edge\/(\d{2})\./),t=!!e&&parseInt(e[1],10)>=16;if("objectFit"in document.documentElement.style!=0&&!t)return void(window.objectFitPolyfill=function(){return!1});var n=function(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("position"),o=t.getPropertyValue("overflow"),i=t.getPropertyValue("display");n&&"static"!==n||(e.style.position="relative"),"hidden"!==o&&(e.style.overflow="hidden"),i&&"inline"!==i||(e.style.display="block"),0===e.clientHeight&&(e.style.height="100%"),-1===e.className.indexOf("object-fit-polyfill")&&(e.className=e.className+" object-fit-polyfill")},o=function(e){var t=window.getComputedStyle(e,null),n={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var o in n)t.getPropertyValue(o)!==n[o]&&(e.style[o]=n[o])},i=function(e){var t=e.parentNode;n(t),o(e),e.style.position="absolute",e.style.height="100%",e.style.width="auto",e.clientWidth>t.clientWidth?(e.style.top="0",e.style.marginTop="0",e.style.left="50%",e.style.marginLeft=e.clientWidth/-2+"px"):(e.style.width="100%",e.style.height="auto",e.style.left="0",e.style.marginLeft="0",e.style.top="50%",e.style.marginTop=e.clientHeight/-2+"px")},r=function(e){if(void 0===e)e=document.querySelectorAll("[data-object-fit]");else if(e&&e.nodeName)e=[e];else{if("object"!=typeof e||!e.length||!e[0].nodeName)return!1;e=e}for(var n=0;n<e.length;n++)if(e[n].nodeName){var o=e[n].nodeName.toLowerCase();"img"!==o||t?"video"===o&&(e[n].readyState>0?i(e[n]):e[n].addEventListener("loadedmetadata",function(){i(this)})):e[n].complete?i(e[n]):e[n].addEventListener("load",function(){i(this)})}return!0};document.addEventListener("DOMContentLoaded",function(){r()}),window.addEventListener("resize",function(){r()}),window.objectFitPolyfill=r}}()},adb3:function(e,t,n){e.exports=n.p+"media/web_video.be94dad0.mp4"},b2a8:function(e,t,n){},d21b:function(e,t,n){},e84c:function(e,t,n){}});
//# sourceMappingURL=app.8e2c8fca.js.map