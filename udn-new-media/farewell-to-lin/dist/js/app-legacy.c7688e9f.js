(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)s=r[u],o[s]&&p.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);_&&_(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var _=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0138":function(t,e,n){},"0283":function(t,e,n){},"0d26":function(t,e,n){"use strict";var a=n("5592"),o=n.n(a);o.a},1081:function(t,e,n){"use strict";var a=n("11bf"),o=n.n(a);o.a},"11bf":function(t,e,n){},"1c54":function(t,e,n){"use strict";var a=n("70a3"),o=n.n(a);o.a},2569:function(t,e,n){"use strict";var a=n("7ea1"),o=n.n(a);o.a},2856:function(t,e,n){},"2b57":function(t,e,n){},3101:function(t,e,n){t.exports=n.p+"img/mob_wanderers.21c8f787.jpg"},"4ca7":function(t,e,n){t.exports=n.p+"media/mobile_video.7ef4abb2.mp4"},5592:function(t,e,n){},5640:function(t,e,n){t.exports=n.p+"img/web_legacy.da4c3bf3.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ProgressBar"),n("HeadBar"),n("div",{ref:"pageContent",staticClass:"page-content",style:t.pageTransform}),n("div",{ref:"scrollContent",staticClass:"scroll-content"},[n("ContentLight"),n("FinalScene",[n("Youtube",{attrs:{youtubeID:t.youtubeID("third")}})],1),n("div")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar",style:{width:t.progress+"%"}})])},r=[],c={name:"ProgressBar",created:function(){window.addEventListener("scroll",this.progressBarGrow)},data:function(){return{progress:0}},methods:{progressBarGrow:function(){var t=this.$root.cacheWindow.pageYOffset,e=this.$root.cacheHTML.scrollHeight-this.$root.cacheHTML.clientHeight;this.progress=(t/e*100).toFixed(2)}}},l=c,_=(n("dee8"),n("2877")),u=Object(_["a"])(l,s,r,!1,null,null,null);u.options.__file="ProgressBar.vue";var p=u.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header-bar"},[n("svg",{staticClass:"header-bar__icon-udn",class:{active:t.isListOpen},attrs:{viewBox:"0 0 272.1 266.5"}},[n("path",{attrs:{d:"M105.4,155.2c1.4-2.2-.3-7.2-1.7-8.1s-3.9-4.4-7.1-1.6-4.2,5.2-6.2,6-4.6,2.3-4.6,2.3a5,5,0,0,0-3.5,6.7c1.2,3.1,8.3,10.8,11,12.6s7.5-1.1,8.5-4.7S104,157.3,105.4,155.2Z"}}),n("path",{attrs:{d:"M87.9,224.8c-3.4,2-12.6,10.7-21.1,19.1a130.2,130.2,0,0,0,15.6,8.4c5.7-6.5,11.1-13.1,13.2-17.3C99.3,227.2,91.9,222.5,87.9,224.8Z"}}),n("path",{attrs:{d:"M67.5,183.2c-5-4.3-5.1-5.5-9.9-2.7s-4.6,1.6-5.8,2.7-15.6,15.2-18.2,17.7l-5.7,5.3a131,131,0,0,0,8.6,11.3c3.9-4.1,8.7-8.8,11.4-11.3s8.6-8.7,11.1-9.4,3.4-.9,7.1-3.9S72.5,187.6,67.5,183.2Z"}}),n("path",{attrs:{d:"M39.5,156.3c-2.7,2.1-20.8,18.8-24.6,22.1l-1,.8a129.8,129.8,0,0,0,6.7,14.9c1.8-2.1,3.5-4.1,4.8-5.4,2.9-2.8,14.9-14.5,19.4-18.1s5.5-6,3.6-9.7S42.2,154.2,39.5,156.3Z"}}),n("path",{attrs:{d:"M167.1,82.4c0.5-2.2-2.3-5.8-4.7-4.3s-6.7,6.4-10.8,10-8.3,7-8.3,7c-1.7,1.5-6,7.9-7.4,10.1s-1.5,3.7.8,4.7,11.4-.4,16.9,3.2,8.6,4.3,10.6,3.1,1.4-4.5.4-7.8,0.3-12.3,1.5-17.2S166.7,84.6,167.1,82.4Z"}}),n("path",{attrs:{d:"M84.6,202.8c-1.3-4.9-5.7-7.9-9.6-6.9s-7,6.4-7,6.4-9,8.2-14.2,12.7L43,224.7a131.3,131.3,0,0,0,11,10c3-3.5,6.9-8,9.5-10.3s11.6-11.1,14-12.5S85.8,207.7,84.6,202.8Z"}}),n("path",{attrs:{d:"M215.2,32c-1.7,1.5-7.5,6.3-8.2,7.2s-3.9,3.1,1.6,6.4,9.8,4,15.6,4.1c4,0,10,1.6,14.7,3.3a131.3,131.3,0,0,0-22.7-22.7A5.1,5.1,0,0,1,215.2,32Z"}}),n("path",{attrs:{d:"M26,138.6c12.2-10.6,11.7-11.1,19.5-15.2s11.4-.7,16.6,3.2,6.6,3,9.5.1,1.4-6.3,1.9-10.9S74,98.5,74.9,92.3s0.1-8.8,5.5-13.6,12.3-3.8,20.1-3.4,17.8,5.2,20.4,6.5,6.8,4.3,10.3,4.9,6.2-3,6.6-4.5-0.5-8.8,0-11.4,0.4-15.4.5-17.6c1.2-17.4,1.6-21.6,4.8-30.6,2.5-7.2,3.3-8.6,6.4-8.5s13.5-1,22.8-.7c4.9,0.2,14.3,1.8,23,3.6A130.5,130.5,0,0,0,5.6,133.2a131.4,131.4,0,0,0,1.7,21.3C16.5,146.9,25.1,139.4,26,138.6Z"}}),n("path",{attrs:{d:"M185.6,83.1c1.2,1.7,3.3,3.1,5.9.9s11.1-10.6,13.1-12.1,4.3-3.4,2.3-5.6-9.1-8-11.1-8.3-4.1-1.6-6,.4-7.2,6.6-7.2,6.6-3.2,4.3-2.5,8.2S184.4,81.4,185.6,83.1Z"}}),n("path",{attrs:{d:"M249,128.3c-5.1-.4-8.1-2.8-10.7-5s-6.3-9-8.7-13.7-8.8-9.4-10-12.6,1.6-2.3,4.9-2.2l4.4-1.1c2.1-.7,7.9-3,11.5-4.7a43,43,0,0,0,10-5.8l4.6-3.6a130.2,130.2,0,0,0-9.4-17.2h0c-1.6,2.6-11.8,6.7-13.4,7.8s-4.5,4.5-9.2,7.7a63.5,63.5,0,0,1-10.5,5.5c-6.6,4.8-9.4,9.5-16.5,16.2-2.4,2.3-5.7,5-7.6,7.2s-2.1,5.1-6,8.1c-1.1.9-1.8,2.4-2.8,3.2s-2.8,1.5-4.2,2.8-5.2.5-6.3,1.5c-3.6,3.3-2.6,5.1-2.6,7.3s-3.4,3.9-4,5.3-1.5,4.9-.2,6.5,3.6,5.9,7,7.4,8.1,5.8,12.3,9.7,4.6,5.9,3.5,12.6-8.6,8.7-14.1,7.2-7.2-8.2-7.9-13.8-4.4-15.7-5.6-18.5-4.2-4.8-7.5-2.4-15,13.4-19.4,18.7-3,8-2.2,10.9,4.6,5.3,6.4,7,9.3,4.5,12.5,5.3,7.1,2,7.4,4.7-1.2,11-5.4,15.5-13.5,2.8-18.3-.6-1.3-8.5-.6-11.4-1.4-6.3-1.4-6.3c-0.6-6.7-2.2-8.9-4.6-11.6s-4-1.3-5.8.2-8.9,11-9.3,14.1,7.8,14,7.8,14c11.7,19.8,2,30.3-6.5,42.1-2.8,3.9-6.2,8.3-9.7,12.6A130.6,130.6,0,0,0,264.9,112.7C261.1,123.2,253.2,128.6,249,128.3Zm-34.8,28.9c-8.9,3.6-13.2-4.7-15.3-8.9s-7.3-11.1-9-14.4-0.8-9.6,0-13.8,3.1-3,4.8-2.1a82.7,82.7,0,0,1,8.6,3C208,123,217,132.9,221,140.2S223.1,153.7,214.2,157.2Z"}}),n("path",{attrs:{d:"M180.5,38.5c-2.1-1.7-6.6-6.6-8.2-7.3s-5.3-1-6.7-.1l-6.6,4.5a18.2,18.2,0,0,0-5.2,7.5c-0.8,2.8,1,6.6,2.6,9.2s3.7,7.3,8.4,4.7,13.5-11.5,15.3-13.1S182.7,40.3,180.5,38.5Z"}}),n("path",{attrs:{d:"M118.5,144.7c1,0.9,4.6,3.5,9.5-1.4s6.8-7.4,9-9.7,5.5-6,3.8-9.4-5.5-8.4-11.1-5.9a46.9,46.9,0,0,0-10.5,6.2l-2.7,2.4c-2.1,2.7-4.1,5.6-2.7,10.7S117.5,143.8,118.5,144.7Z"}}),n("path",{attrs:{d:"M115.9,109c3.1-3.3,1.7-4.8-.7-8.4S108,96.5,101,97.1s-10.4,7.3-11.1,9.7c0,0-1.9,5-1.6,7.4s4.4,8.2,7.8,10,6.3-.4,9.6-4.8S112.8,112.3,115.9,109Z"}})]),t.$root.isMobileSize?n("div",{staticClass:"header-bar__icon-burger",on:{click:function(e){t.isListOpen=!t.isListOpen}}},[n("div",{class:{active:t.isListOpen}}),n("div",{class:{active:t.isListOpen}}),n("div",{class:{active:t.isListOpen}})]):n("nav",{staticClass:"header-bar__anchor-menu"},[t._m(0),t._m(1)])]),n("transition",{attrs:{name:"list-fade"}},[t.isListOpen&&t.$root.isMobileSize?n("div",{staticClass:"header-list"},[n("nav",{staticClass:"header-list__anchor-menu"},[n("ul",{staticClass:"header-list__anchor--inner"},[n("li",{staticClass:"header-list__anchor-main"},[t._v("台灣是我們的共業")]),n("li",{staticClass:"header-list__anchor-item"},[t._v("退休前心內話")]),n("li",{staticClass:"header-list__anchor-item"},[t._v("預告的背後故事")]),n("li",{staticClass:"header-list__anchor-item"},[t._v("給台灣的情書")])]),n("ul",{staticClass:"header-list__anchor--outer"},[n("li",{staticClass:"header-list__anchor-main"},[t._v("雲門大船的未來進行式")])])])]):t._e()])],1)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"header-bar__anchor-item header-bar__anchor-item--outer"},[n("li",[t._v("雲門大船的未來進行式")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"header-bar__anchor-item header-bar__anchor-item--inner"},[n("li",[t._v("台灣是我們的共業\n          "),n("ul",{staticClass:"header-bar__inner-anchor"},[n("li",{staticClass:"header-bar__anchor-item header-bar__inner-anchor-item"},[t._v("退休前心內話")]),n("li",{staticClass:"header-bar__anchor-item header-bar__inner-anchor-item"},[t._v("預告的背後故事")]),n("li",{staticClass:"header-bar__anchor-item header-bar__inner-anchor-item"},[t._v("給台灣的情書")])])])])}],h={name:"HeadBar",data:function(){return{isListOpen:!0}}},f=h,m=(n("2569"),Object(_["a"])(f,d,v,!1,null,null,null));m.options.__file="HeadBar.vue";var b=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"cover",on:{"~mousewheel":function(e){return t.dancerMove(e)},"~DOMMouseScroll":function(e){return t.dancerMove(e)},"~touchmove":function(e){return t.dancerMove(e)}}},[a("video",{staticClass:"cover__video",attrs:{id:"cover__video","data-object-fit":"cover",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[t.$root.isMobileSize?a("source",{attrs:{src:n("4ca7"),type:"video/mp4"}}):a("source",{attrs:{src:n("adb3"),type:"video/mp4"}})])])},C=[],w={name:"Cover",data:function(){return{isDancerMove:!1,isCoverPromptExist:!0,isCoverFadeOut:!1,isCoverTitleFadeIn:!1,isCoverTitleMove:!1}},methods:{dancerClass:function(t){var e={"dancer-move":this.isDancerMove};return e["dancer".concat(t)]=!0,e["dancer".concat(t,"-move")]=this.isDancerMove&&4!==t&&5!==t,e},dancerMove:function(){this.isCoverPromptExist=!1,this.isDancerMove=!0},dancerMoveEnd:function(){this.isDancerMove&&(this.isCoverFadeOut=!0)},coverFadeOutEnd:function(){this.isCoverTitleFadeIn=!0},coverTitleFadeInEnd:function(){this.isCoverTitleMove=!0},subtitleMoveEnd:function(){this.$root.$el.style.overflow="initial"}}},x=w,y=(n("0d26"),Object(_["a"])(x,g,C,!1,null,null,null));y.options.__file="Cover.vue";var E=y.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"opening-line"},[n("div",{staticClass:"opening-line__wrapper"},[n("p",[t._v("去年雲門舞集創辦人、藝術總監林懷民宣布將於2019年底退休，為社會投下震撼彈。在驚訝與不捨之後，大家更關注林懷民以及雲門舞集的下一步，連林懷民本人都笑說：「好像我說要退休之後，大家對我更好奇了。」")]),n("p",[n("br")]),n("p",[t._v("回首雲門舞集一路走來，成立在1973年、台灣退出聯合國後隔年，林懷民帶領雲門舞集與台灣併肩走過45年光陰，創作出無數作品，不只是台灣在國際舞台上最亮麗的文化名片，更帶給許多台灣人一段寧靜、快樂的觀舞時光。")]),n("p",[n("br")]),n("p",[t._v("一直以來，林懷民作品風格的多變，都與他感受到的台灣息息相關。他口中退休前的最後一齣舞作《關於島嶼》，裡面同時有著和諧與衝突、挫敗與希望，是他對當今台灣的印象，以及感受到的氛圍。他自稱這是他的「懺悔錄」，問他懺悔何來，他字字沉重：")]),n("p",[n("br")]),n("blockquote",[t._v("「台灣的今天，都是我們的共業，是我們眼睜睜讓這些事發生。」")]),n("p",[n("br")]),n("p",[t._v("對於這塊孕育雲門舞集的土地，他有滿懷的情感與憂心，日前林懷民接受《聯合晚報》與新媒體中心專訪，暢談他眼中的台灣變化、雲門歷程與內心感懷。")])])])}],k={name:"OpeningLine"},O=k,M=(n("1081"),Object(_["a"])(O,$,q,!1,null,"15542eb6",null));M.options.__file="OpeningLine.vue";var T=M.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"youtube",style:{"padding-bottom":t.aspectRatio}},[n("iframe",{staticClass:"youtube__player",attrs:{id:"player",src:"https://www.youtube.com/embed/"+t.youtubeID+"?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&controls=0&iv_load_policy=3&loop=1",frameborder:"0"}})])},L=[],j={name:"Youtube",props:["youtubeID"],computed:{aspectRatio:function(){return"".concat(this.$root.windowHeight/this.$root.windowWidth*100,"%")}}},P=j,F=(n("922d"),Object(_["a"])(P,S,L,!1,null,null,null));F.options.__file="Youtube.vue";var H=F.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"fixed-page"},[n("div",{staticClass:"fixed-page__photo-wrapper"},[n("transition",{attrs:{name:"photo-fade",mode:"out-in"}},t._l(t.photos,function(e){return e.name===t.photoName?n("div",{key:e.name,staticClass:"fixed-page__photo",style:{backgroundImage:"url('"+e.url+"')"}}):t._e()})),n("transition",{attrs:{name:"caption-fade",mode:"out-in"}},t._l(t.photos,function(e){return e.name===t.photoName?n("div",{key:e.name,staticClass:"content__photo-caption content__photo-caption--dark content__photo-caption--photo-page",domProps:{innerHTML:t._s(e.caption)}}):t._e()}))],1),n("div",{staticClass:"fixed-page__mask"})])},Y=[],I=n("5640"),N=n.n(I),D=n("cbf0"),B=n.n(D),Z=n("f2d7"),z=n.n(Z),A={name:"FixedPhotoPage",props:["photoName"],data:function(){return{photos:[{name:"legacy",url:N.a,caption:"圖說預留的位置&ensp;/&ensp;誰誰&ensp;攝影"},{name:"wanderers",url:B.a,caption:"圖說預留的位置&ensp;/&ensp;誰誰&ensp;攝影"},{name:"watermoon",url:z.a,caption:"圖說預留的位置&ensp;/&ensp;誰誰&ensp;攝影"}]}}},V=A,G=(n("1c54"),Object(_["a"])(V,W,Y,!1,null,null,null));G.options.__file="FixedPhotoPage.vue";var J=G.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content content--dark content--photo-page"},[t._m(0),n("div",{staticClass:"content__text"},[n("p",[t._v("林懷民父親是台灣首任嘉義縣縣長及交通部、內政部部長林金生，從小叮囑他「要貢獻社會」，「懷民」名字也因此而來。雖然他一路抗拒，最終投入5歲起著迷的舞蹈，成立雲門卻仍滿載社會使命：台灣要有自己的舞團、要做跟西方不一樣的舞，要跳到學校、跳到社區，跳舞給台灣人看。")]),t._m(1),n("p",[t._v("雲門舞集成立之時，正值台灣國際外交處境的艱困期，1971年台灣退出聯合國、1973年雲門舞集即成立。 在那充滿熱血救國口號的1970年代，林懷民說，他們一開始就有一大票人，都是像他一樣在光復後出生的「光復仔」，例如蔣勳、奚淞、賴德和、張照堂等人，「個人的力量是不夠的，才華是有限的，一定要『群組』、合起來做事情。」")]),t._m(2),n("p",{ref:"photoLegacy"},[t._v("也因為這樣的情感與時代背景，有了描繪先人移民奮鬥艱辛、充滿壓抑爆發力的舞蹈史詩《薪傳》（1978）。距離40年後的今天回頭看，林懷民形容那時舞者的身體有一鼓「壓抑的爆發力」，身體有障礙、不像現在的舞者肢體如此流暢，但正是這些有點生硬、卻力道強悍的舞蹈動作，激勵了無數台灣人心。")]),t._m(3),n("p",[t._v("「我只是一個愛跳舞的小孩，沒有學太多舞就來到雲門，因為看到一個舞叫《薪傳》。」在舞團超過30年、現任助理藝術總監的李靜君回憶，當時她只是個16、17歲的年輕女孩，看完《薪傳》後感動到連鼓掌都忘了，整個人像傻掉一樣，毅然決然放棄原本想跳的芭蕾舞，轉而來到雲門舞集，一待至今。")])]),t._m(4),n("h3",{staticClass:"content__subtitle"},[t._v("風起雲湧的1980年代")]),n("div",{staticClass:"content__text"},[n("p",[t._v("1980年代，台灣從農業社會急速轉型為工商業社會，在這10年間，經濟上台灣快速起飛、擠身進「亞洲四小龍」；政治上經歷民進黨成立、解嚴、開放探親等重大民主化進程，社會正在劇變，各種情緒在社會上流竄。林懷民這麼形容曾經的80年代：「有一股氣在那，不管是怨氣還是樂觀的氣，大家就是這樣跑來跑去在互相鼓舞。」")]),t._m(5),n("p",[t._v("那段時間，林懷民感受到台灣社會的快速變化，創作出1984年的《春之祭禮・台北一九八四》，背幕上投影著代表工業化的怪手、推土機、鏟平的老厝和新建的高樓，舞者在高樓前舞著，身影顯得渺小，擠壓、交疊的肢體，彷彿被後方的怪手吞噬，是林懷民對現代化最深的反思。")]),t._m(6),n("p",[t._v("雲門舞集當時也跟著社會的步調一起高速發展，隨舞團演出愈來愈多，加上林懷民在學校任教的系務壓力，隨之而來的是忙亂、沒有時間停下腳步思考。")]),t._m(7),n("p",[t._v("1988年林懷民毅然決然休團、暫時停下腳步。雲門舞集暫停3年後，他遇到一位計程車司機問他為何停掉雲門，並在他述說種種辛苦後，說「每個行業都很辛苦，但台灣還是需要雲門舞集」。林懷民說，他那時「覺得無比羞愧」，之後重啟舞團。")]),t._m(8),n("p",{ref:"photoWanderers"},[t._v("舞團重啟後，雲門舞集陸續帶給觀眾《九歌》（1993）、《流浪者之歌》（1994），期待《九歌》能帶給台灣人民一些安慰，《流浪者之歌》則能帶來一些安靜的喜悅。")]),t._m(9),n("p",[t._v("20多年前一位計程車司機給了林懷民繼續前行的力量，那麼去年宣布退休後，大家都怎麼說呢？林懷民溫和地笑了：「現在他們都說，林老師，你辛苦了，好好休息。」最後一句話，是用閩南語說的。")])]),t._m(10),n("div",{staticClass:"content__text"},[n("p",[t._v("1997年、解嚴後10年，雲門舞集有了追溯228、白色恐怖的《家族合唱》。台北藝術大學舞蹈系副教授陳雅萍在專文中形容《薪傳》與《家族合唱》可說是雲門台灣史的前後篇，兩支舞隔了20年，都是要喚醒台灣社會共同的記憶。")]),t._m(11),n("p",[t._v("在《家族合唱》裡，林懷民蒐集了近200張老照片，找來各種方言口述歷史，帶台灣人民一起面對經歷苦難的時代。他曾說，《家族合唱》是他不得不編，卻又害怕去看的一齣作品，但他希望一直演，直到觀眾和他自己都不再害怕、不再有悲情，能夠凝眸面對這段歲月。 ")]),t._m(12),n("p",{ref:"photoWatermoon"},[t._v("再之後的《水月》（1998）、以及代表作行草三部曲（行草、松煙、狂草），則反映林懷民感受到的「精緻台灣」。「對我來說，《家族合唱》是台灣，《水月》也是台灣」，林懷民說，1998年的台灣生活已經漸走向中產、精緻，有愛樂電台也有誠品書店，社會已經不一樣了。")])]),t._m(13),t._m(14),n("h3",{staticClass:"content__subtitle"},[t._v("能「ㄍㄧㄥ」45年的原因")]),t._m(15),t._m(16)])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"content__title content__title--dark content__title--photo-page"},[t._v("45年來"),n("br"),t._v("努力實踐「懷民」")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__quote-wrapper content__quote-wrapper--photo-page"},[n("blockquote",{staticClass:"content__quote"},[t._v("我看到舞作裡對台灣的愛，跟對台灣的關心，覺得跳這個好像更有意義。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--photo-page"},[t._v("雲門舞集助理藝術總監 李靜君")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"content__subtitle"},[t._v("苦難228和精緻生活"),n("br"),t._v("都是台灣")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__quote-wrapper content__quote-wrapper--photo-page"},[n("blockquote",{staticClass:"content__quote"},[t._v("我也在這個生活裡，所以我後來的東西都是比較美學的。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--photo-page"},[t._v("林懷民")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text"},[n("p",[t._v("1997年做談228、白色恐怖的《家族合唱》，隔年做精緻抽象的《水月》，林懷民也曾被疑問是否背棄什麼，但他認為，兩個作品只是反映不同時代的台灣。「一切要泛政治化嗎？一定要分左右前後嗎？」大家要這樣分，就變成這種局面，「但都不是，藝術與生活而已。」")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text"},[n("p",[t._v("採訪當天，窗外的雲門劇場園區傳來遊客朗笑，林懷民凝神諦聽，說這樣很好，有時他編舞遇到小難關，就去下面走走，當看到訪客怡然自在、開心跟他說謝謝，是他動力來源。")]),n("p",[n("br")]),n("p",[t._v("從林懷民創辦雲門以來，用他自己的話說，「從第一天就很疲累」。一ㄍㄧㄥ45年，林懷民放不了自己，也放不了別人，與他緊密工作過的人，都看過他時時刻刻全身繃緊到血脈賁張、張牙舞爪的樣子，讓大家膽顫心驚之餘，還暗暗祈禱他別心臟病發。 ")]),n("p",[n("br")]),n("p",[t._v("但林懷民不曾因為疲累而放棄。觀衆看的開心、讓藝術服務人群，是林懷民成立雲門舞集最大的期待。回首雲門舞集45年時光，林懷民說，雲門的目光從不看向歐美劇場，「我們看的是老百姓，」他很希望雲門舞集的作品，能夠帶給台灣的老百姓一點點快樂、安靜的時光。")]),n("p",[n("br")]),n("p",[t._v("所以雲門舞集從1990年代開始，每年一定會到各地戶外公演，讓作品走出劇院、走進人民的生活，至今23年不輟。戶外廣場上每個觀眾感受和理解到的都不同，但只要在舞者演出的那段時間，觀眾能享受演出，露出一抹微笑或獲得短暫平靜，就是林懷民繼續下去的力量。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__quote-wrapper content__quote-wrapper--photo-page content__quote-wrapper--last"},[n("blockquote",{staticClass:"content__quote"},[t._v("我個人跟雲門何其幸運，能看到大家對我們努力的結果，有比較好的、正面的回饋，這樣的對話非常重要。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--photo-page"},[t._v("林懷民")])])}],K={name:"PhotoPageContent",data:function(){return{marginTop:148,startScrollTime:new Date}},created:function(){var t=this;window.addEventListener("scroll",function(){var e=new Date;e-t.startScrollTime<200||(t.$root.cacheWindow.pageYOffset>=t.$refs.photoWatermoon.offsetTop-t.marginTop?t.$parent.photoName="watermoon":t.$root.cacheWindow.pageYOffset>=t.$refs.photoWanderers.offsetTop-t.marginTop?t.$parent.photoName="wanderers":t.$root.cacheWindow.pageYOffset>=t.$refs.photoLegacy.offsetTop-t.marginTop?t.$parent.photoName="legacy":t.$parent.photoName="",t.startScrollTime=e)})}},U=K,Q=(n("a38d"),Object(_["a"])(U,R,X,!1,null,null,null));Q.options.__file="PhotoPageContent.vue";var tt=Q.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"content content--dark"},[a("h2",{staticClass:"content__title content__title--dark"},[t._v("45年來"),a("br"),t._v("努力實踐「懷民」")]),a("div",{staticClass:"content__text"},[a("p",[t._v("林懷民父親是台灣首任嘉義縣縣長及交通部、內政部部長林金生，從小叮囑他「要貢獻社會」，「懷民」名字也因此而來。雖然他一路抗拒，最終投入5歲起著迷的舞蹈，成立雲門卻仍滿載社會使命：台灣要有自己的舞團、要做跟西方不一樣的舞，要跳到學校、跳到社區，跳舞給台灣人看。")]),a("p",[a("br")]),a("p",[t._v("雲門舞集成立之時，正值台灣國際外交處境的艱困期，1971年台灣退出聯合國、1973年雲門舞集即成立。 在那充滿熱血救國口號的1970年代，林懷民說，他們一開始就有一大票人，都是像他一樣在光復後出生的「光復仔」，例如蔣勳、奚淞、賴德和、張照堂等人，「個人的力量是不夠的，才華是有限的，一定要『群組』、合起來做事情。」")]),a("p",[a("br")]),a("p",[t._v("也因為這樣的情感與時代背景，有了描繪先人移民奮鬥艱辛、充滿壓抑爆發力的舞蹈史詩《薪傳》（1978）。距離40年後的今天回頭看，林懷民形容那時舞者的身體有一鼓「壓抑的爆發力」，身體有障礙、不像現在的舞者肢體如此流暢，但正是這些有點生硬、卻力道強悍的舞蹈動作，激勵了無數台灣人心。")])]),a("figure",{staticClass:"content__photo-wrapper content__photo-wrapper--dark"},[a("img",{staticClass:"content__photo",attrs:{src:n("7e59"),alt:""}}),a("figcaption",{staticClass:"content__photo-caption content__photo-caption--dark"},[t._v("圖說預留的位置 / 誰誰 攝影")])]),a("div",{staticClass:"content__text"},[a("p",[t._v("「我只是一個愛跳舞的小孩，沒有學太多舞就來到雲門，因為看到一個舞叫《薪傳》。」在舞團超過30年、現任助理藝術總監的李靜君回憶，當時她只是個16、17歲的年輕女孩，看完《薪傳》後感動到連鼓掌都忘了，整個人像傻掉一樣，毅然決然放棄原本想跳的芭蕾舞，轉而來到雲門舞集，一待至今。")])]),a("div",{staticClass:"content__quote-wrapper"},[a("blockquote",{staticClass:"content__quote"},[t._v("我看到舞作裡對台灣的愛，跟對台灣的關心，覺得跳這個好像更有意義。")]),a("p",{staticClass:"content__quote-speaker"},[t._v("雲門舞集助理藝術總監 李靜君")])]),a("h3",{staticClass:"content__subtitle"},[t._v("風起雲湧的1980年代")]),a("div",{staticClass:"content__text"},[a("p",[t._v("1980年代，台灣從農業社會急速轉型為工商業社會，在這10年間，經濟上台灣快速起飛、擠身進「亞洲四小龍」；政治上經歷民進黨成立、解嚴、開放探親等重大民主化進程，社會正在劇變，各種情緒在社會上流竄。林懷民這麼形容曾經的80年代：「有一股氣在那，不管是怨氣還是樂觀的氣，大家就是這樣跑來跑去在互相鼓舞。」")]),a("p",[a("br")]),a("p",[t._v("那段時間，林懷民感受到台灣社會的快速變化，創作出1984年的《春之祭禮・台北一九八四》，背幕上投影著代表工業化的怪手、推土機、鏟平的老厝和新建的高樓，舞者在高樓前舞著，身影顯得渺小，擠壓、交疊的肢體，彷彿被後方的怪手吞噬，是林懷民對現代化最深的反思。")]),a("p",[a("br")]),a("p",[t._v("雲門舞集當時也跟著社會的步調一起高速發展，隨舞團演出愈來愈多，加上林懷民在學校任教的系務壓力，隨之而來的是忙亂、沒有時間停下腳步思考。")]),a("p",[a("br")]),a("p",[t._v("1988年林懷民毅然決然休團、暫時停下腳步。雲門舞集暫停3年後，他遇到一位計程車司機問他為何停掉雲門，並在他述說種種辛苦後，說「每個行業都很辛苦，但台灣還是需要雲門舞集」。林懷民說，他那時「覺得無比羞愧」，之後重啟舞團。")]),a("p",[a("br")]),a("p",[t._v("舞團重啟後，雲門舞集陸續帶給觀眾《九歌》（1993）、《流浪者之歌》（1994），期待《九歌》能帶給台灣人民一些安慰，《流浪者之歌》則能帶來一些安靜的喜悅。")])]),a("figure",{staticClass:"content__photo-wrapper content__photo-wrapper--dark"},[a("img",{staticClass:"content__photo",attrs:{src:n("3101"),alt:""}}),a("figcaption",{staticClass:"content__photo-caption content__photo-caption--dark"},[t._v("圖說預留的位置 / 誰誰 攝影")])]),a("div",{staticClass:"content__text"},[a("p",[t._v("20多年前一位計程車司機給了林懷民繼續前行的力量，那麼去年宣布退休後，大家都怎麼說呢？林懷民溫和地笑了：「現在他們都說，林老師，你辛苦了，好好休息。」最後一句話，是用閩南語說的。")])]),a("h3",{staticClass:"content__subtitle"},[t._v("苦難228和精緻生活"),a("br"),t._v("都是台灣")]),a("div",{staticClass:"content__text"},[a("p",[t._v("1997年、解嚴後10年，雲門舞集有了追溯228、白色恐怖的《家族合唱》。台北藝術大學舞蹈系副教授陳雅萍在專文中形容《薪傳》與《家族合唱》可說是雲門台灣史的前後篇，兩支舞隔了20年，都是要喚醒台灣社會共同的記憶。")]),a("p",[a("br")]),a("p",[t._v("在《家族合唱》裡，林懷民蒐集了近200張老照片，找來各種方言口述歷史，帶台灣人民一起面對經歷苦難的時代。他曾說，《家族合唱》是他不得不編，卻又害怕去看的一齣作品，但他希望一直演，直到觀眾和他自己都不再害怕、不再有悲情，能夠凝眸面對這段歲月。 ")]),a("p",[a("br")]),a("p",[t._v("再之後的《水月》（1998）、以及代表作行草三部曲（行草、松煙、狂草），則反映林懷民感受到的「精緻台灣」。「對我來說，《家族合唱》是台灣，《水月》也是台灣」，林懷民說，1998年的台灣生活已經漸走向中產、精緻，有愛樂電台也有誠品書店，社會已經不一樣了。")])]),a("div",{staticClass:"content__quote-wrapper"},[a("blockquote",{staticClass:"content__quote"},[t._v("我也在這個生活裡，所以我後來的東西都是比較美學的。")]),a("p",{staticClass:"content__quote-speaker"},[t._v("林懷民")])]),a("figure",{staticClass:"content__photo-wrapper content__photo-wrapper--dark"},[a("img",{staticClass:"content__photo",attrs:{src:n("9680"),alt:""}}),a("figcaption",{staticClass:"content__photo-caption content__photo-caption--dark"},[t._v("圖說預留的位置 / 誰誰 攝影")])]),a("div",{staticClass:"content__text"},[a("p",[t._v("1997年做談228、白色恐怖的《家族合唱》，隔年做精緻抽象的《水月》，林懷民也曾被疑問是否背棄什麼，但他認為，兩個作品只是反映不同時代的台灣。「一切要泛政治化嗎？一定要分左右前後嗎？」大家要這樣分，就變成這種局面，「但都不是，藝術與生活而已。」")])]),a("h3",{staticClass:"content__subtitle"},[t._v("能「ㄍㄧㄥ」45年的原因")]),a("div",{staticClass:"content__text"},[a("p",[t._v("採訪當天，窗外的雲門劇場園區傳來遊客朗笑，林懷民凝神諦聽，說這樣很好，有時他編舞遇到小難關，就去下面走走，當看到訪客怡然自在、開心跟他說謝謝，是他動力來源。")]),a("p",[a("br")]),a("p",[t._v("從林懷民創辦雲門以來，用他自己的話說，「從第一天就很疲累」。一ㄍㄧㄥ45年，林懷民放不了自己，也放不了別人，與他緊密工作過的人，都看過他時時刻刻全身繃緊到血脈賁張、張牙舞爪的樣子，讓大家膽顫心驚之餘，還暗暗祈禱他別心臟病發。 ")]),a("p",[a("br")]),a("p",[t._v("但林懷民不曾因為疲累而放棄。觀衆看的開心、讓藝術服務人群，是林懷民成立雲門舞集最大的期待。回首雲門舞集45年時光，林懷民說，雲門的目光從不看向歐美劇場，「我們看的是老百姓，」他很希望雲門舞集的作品，能夠帶給台灣的老百姓一點點快樂、安靜的時光。")]),a("p",[a("br")]),a("p",[t._v("所以雲門舞集從1990年代開始，每年一定會到各地戶外公演，讓作品走出劇院、走進人民的生活，至今23年不輟。戶外廣場上每個觀眾感受和理解到的都不同，但只要在舞者演出的那段時間，觀眾能享受演出，露出一抹微笑或獲得短暫平靜，就是林懷民繼續下去的力量。")])]),a("div",{staticClass:"content__quote-wrapper content__quote-wrapper--last"},[a("blockquote",{staticClass:"content__quote"},[t._v("我個人跟雲門何其幸運，能看到大家對我們努力的結果，有比較好的、正面的回饋，這樣的對話非常重要。")]),a("p",{staticClass:"content__quote-speaker"},[t._v("林懷民")])])])}],at={name:"ContentDark"},ot=at,it=(n("65ae"),Object(_["a"])(ot,et,nt,!1,null,null,null));it.options.__file="ContentDark.vue";var st=it.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"content"},[n("div",{staticClass:"content-wrapper"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),n("h2",{staticClass:"content__title content__title--light"},[t._v("退休與算命一席話有關")]),t._m(8),t._m(9),t._m(10),n("h2",{staticClass:"content__title content__title--light"},[t._v("期待台灣從「我」變成「我們」")]),t._m(11),n("div",{staticClass:"content__quote-wrapper"},[t.$root.isMobileSize?n("blockquote",{staticClass:"content__quote content__quote--light"},[t._v("做出什麼事呢？"),n("br"),t._v("小事"),n("br"),t._v("但小事累積後就可能變成比較有規模的大事。")]):n("blockquote",{staticClass:"content__quote content__quote--light"},[t._v("做出什麼事呢？小事，但小事累積後就可能變成比較有規模的大事。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--light"},[t._v("林懷民")])])])])},ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"content__title content__title--light"},[t._v("永遠都在補課的"),n("br"),t._v("難題")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("雲門園區內蓬勃花木中，有棵林懷民母親親手培育送給兒子的老梅樹，跟著雲門從燒毀的舊排練場到今日的新園區，林懷民每次談到此樹，總顯深情，說起已逝的父母，卻是滿滿的悔憾。這些悔憾，讓他至今每次旅行都帶著父母的照片在旅館供起來，對著他們說話，大大小小的記憶都是不捨。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__quote-wrapper"},[n("blockquote",{staticClass:"content__quote content__quote--light"},[t._v("如何陪伴老去的父母是人生最大的課題，我到今天好像還在補課，可是統統來不及。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--light"},[t._v("林懷民")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("林懷民回憶，有次他應邀去歐洲導演，爸媽來看首演，之後他帶他們去歐洲玩，由於媽媽堅持省錢，三人擠一間房，現在回想充滿遺憾，「我後來去演出，人家都給我住很好的套房，我為什麼就不能讓他們住套房？」")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"content__photo-wrapper content__photo-wrapper--light"},[a("img",{staticClass:"content__photo",attrs:{src:n("e0c4"),alt:""}}),a("figcaption",{staticClass:"content__photo-caption content__photo-caption--light"},[t._v("圖說預留的位置 / 誰誰 攝影")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("又譬如，爸爸過世後，林懷民總在周六陪媽媽，周日由弟弟陪。有年林懷民弟弟出國，他周六在台中演完，準備周日回家，先打電話問「媽媽您好嗎」，聽到媽媽答「一個人吃飯哪有什麼好？」他聽到簡直快瘋掉，趕快衝回家。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__quote-wrapper"},[n("blockquote",{staticClass:"content__quote content__quote--light"},[t._v("我們在年輕時，不知道老人家的寂寞；我到60歲知道一些事情，往往是我希望40歲知道的。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--light"},[t._v("林懷民")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("林懷民2002年執導的歌劇《托斯卡》，明年將重新演出，背後也有段深刻的母子記憶。林懷民說，他第一次知道《托斯卡》中的名曲〈為了藝術為了愛〉，就是四、五歲時，媽媽放78轉老唱片給他聽，還教他認日文字「為了藝術為了愛」。")]),n("p",[n("br")]),n("p",[t._v("後來林懷民版《托斯卡》上演，媽媽正在住院，也興沖沖來看。上半場結束，大家想該聽醫生說的9點要回家，媽媽卻抵死不回，說要看劇中的托斯卡怎麼跳下來，但大家都不大敢不尊重醫生的意思，終說服媽媽坐輪椅回家。")]),n("p",[n("br")]),n("p",[t._v("「我好後悔那時為什麼不讓她看？看完了，明天再繼續生病也可以。」林懷民建議天下兒女，在過了一條線後，別太在意醫生說什麼可以吃、什麼不可以吃，「有時就讓老人家吃了吧，看是要活得很長很辛苦，還是讓他過癮一下？」")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("去年林懷民預告2019年退休，屆時歲數是72歲——傳言中他兩次批命，對方都指將遭大限的年齡。採訪時，我們拐著彎問林懷民預告用意，沒想到林懷民丟出直球：「是要問72歲的事對不對？我覺得，我可以不相信相命的說什麼，可是要尊敬，既然大家都說我72歲要死，我就要把它當一件事。」")]),n("p",[n("br")]),n("p",[t._v("林懷民說，這說法於他個人不重要，但對團而言重要。「如果有一天我突然不來上班，絕對有場大混亂」，為了舞團，他必須尊敬這說法。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"content__photo-wrapper content__photo-wrapper--light"},[a("img",{staticClass:"content__photo",attrs:{src:n("7925"),alt:""}}),a("figcaption",{staticClass:"content__photo-caption content__photo-caption--light"},[t._v("圖說預留的位置 / 誰誰 攝影")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("林懷民退休前最後一齣舞作《關於島嶼》裡有一段金剛經偈語：「一切有為法／如夢幻泡影／如露亦如電／應作如是觀」，反映著林懷民的生死觀。林懷民認為，夢幻泡影是人世間的必然，「你覺得你是例外嗎？沒有例外。」林懷民說得凜然，彷彿直視生死。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("林懷民能夠坦率面對自己的生死，但對於今天的台灣，他語中卻流露出憂心與期許。")]),n("p",[n("br")]),n("p",[t._v("林懷民說，長年以來，大家常說是哪個政黨、政客，讓台灣變成現在這個樣子，但在這同時，「我們」明明也讓這些事情發生。他認為，台灣現在不論好或不好，「都是我們的共業」。")]),n("p",[n("br")]),n("p",[t._v("在林懷民車禍後唯一作品、也是最後舞作《關於島嶼》中，舞者從島嶼初生蓬勃舞至相鬥幻滅，末了倏地打亮的全白舞台，猶如曹雪芹《紅樓夢》尾聲「落了片白茫茫大地真乾淨」，令人警醒美麗島的榮枯更迭，是否就如肉身易碎，只是場黃梁大夢？")]),n("p",[n("br")]),n("p",[t._v("但「光復仔」林懷民的救國情懷，其實跟過往一樣強悍。「台灣沒有悲觀的本錢。」林懷民說，必須去面對任何可能性，「面對了這個可能性，你就有很長的路」；其他口水對立，都可以假裝不存在，「就去做應該做的事，批評沒有用。」")]),n("p",[n("br")]),n("p",[t._v("林懷民感嘆，台灣一直花太多時間做各種政治分類，大家都誓不兩立，「3個人就有兩派或三派」。像雲門5歲做演繹自「唐山過台灣」歷史的《薪傳》，隔年做《廖添丁》，都源於當時社會的互動與影響，但就在同個時空，被不同人說是獨派或統派。")]),n("p",[n("br")]),n("p",[t._v("「來來去去的頻繁的選舉，把大家的格局做小了！」林懷民說，如果做《廖添丁》是獨，那蓋廖添丁廟的人就是台獨嗎？媽祖是從大陸來的，那去媽祖廟拜的人，就是統派嗎？從媒體開始，各界都各為其主，大家都把格局做小了。")]),n("p",[n("br")]),n("p",[t._v("「心胸狹小，路會愈走愈窄。」林懷民認為，台灣必須擁有更大的格局，才能真正自處。他也期待現在的年輕人，能撐出一股氣來，聚集成一大票人改變社會，「『我』當然很渺小，但當『我』變成『我們』時，就能做出一點事情來。」")])])}],lt={name:"ContentLight"},_t=lt,ut=(n("de36"),Object(_["a"])(_t,rt,ct,!1,null,null,null));ut.options.__file="ContentLight.vue";var pt=ut.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"finalScene",staticClass:"final-scene"},[n("div",{staticClass:"final-scene__text",class:{"fade-out":t.isTextFadeOut},on:{"~transitionend":function(e){if(e.target!==e.currentTarget)return null;t.isYoutubeFadeIn=!0},"~webkitTransitionEnd":function(e){if(e.target!==e.currentTarget)return null;t.isYoutubeFadeIn=!0}}},[n("div",{staticClass:"final-scene__text--first",class:{"fade-in":t.isTextFadeIn}},[t._v("過去45年"),n("br"),t._v("林懷民用90齣舞作"),n("br"),t._v("不斷與台灣社會對話")]),t._m(0),n("div",{staticClass:"final-scene__text--last",class:{"fade-in":t.isTextFadeIn},on:{"~transitionend":function(e){t.isTextFadeOut=!0},"~webkitTransitionEnd":function(e){t.isTextFadeOut=!0}}},[t._v("退休前，"),n("br"),t._v("他最後有段話"),n("br"),t._v("想對現在的台灣說")])]),n("div",{staticClass:"final-scene__youtube",class:{"fade-in":t.isYoutubeFadeIn}},[t._t("default")],2)])},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])}],ht={name:"FinalScene",data:function(){return{isTextFadeIn:!1,isTextFadeOut:!1,isYoutubeFadeIn:!1}},created:function(){window.addEventListener("scroll",this.finalSceneFade)},methods:{finalSceneFade:function(){this.$root.cacheWindow.pageYOffset+this.$root.cacheHTML.clientHeight>=this.$root.cacheHTML.scrollHeight-8&&(this.isTextFadeIn=!0)}}},ft=ht,mt=(n("d8e4"),Object(_["a"])(ft,dt,vt,!1,null,null,null));mt.options.__file="FinalScene.vue";var bt=mt.exports,gt={name:"app",components:{ProgressBar:p,Cover:E,OpeningLine:T,Youtube:H,FixedPhotoPage:J,PhotoPageContent:tt,ContentDark:st,ContentLight:pt,FinalScene:bt,HeadBar:b},data:function(){return{bodyClass:document.body.classList,resizeTimer:null,scrollTimer:null,beforeWindowWidth:document.documentElement.clientWidth,canScroll:!0,pageScrollY:0,touchStartX:0,touchStartY:0,photoName:"",beforeScrollY:window.pageYOffset}},created:function(){window.addEventListener("beforeunload",this.beforeunloadHandler),window.addEventListener("scroll",this.fixedPageMove)},computed:{pageTransform:function(){return{transform:"translateY(".concat(this.pageScrollY,"px)")}}},methods:{beforeunloadHandler:function(){this.$root.cacheWindow.scrollTo({top:0,behavior:"instant"})},youtubeID:function(t){switch(t){case"first":return this.$root.windowWidth<576?"4Cyyr2brm7U":"w-jS7Bf90bY";case"second":return this.$root.windowWidth<576?"xhKWsXskhRM":"iVpdcGvj32s";case"third":return this.$root.windowWidth<576?"6u2vkJCamD8":"aNwTvyITqBY";default:return!1}}}},Ct=gt,wt=(n("5c0b"),Object(_["a"])(Ct,o,i,!1,null,null,null));wt.options.__file="App.vue";var xt=wt.exports;n("fa6d"),n("2b57");n("8386"),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(xt)},data:{cacheWindow:window,cacheHTML:document.documentElement,windowWidth:document.documentElement.clientWidth,windowHeight:document.documentElement.clientHeight},created:function(){window.addEventListener("load",this.loadHandler),window.addEventListener("resize",this.resizeHandler)},computed:{isMobileSize:function(){return this.windowWidth<576}},methods:{loadHandler:function(){this.windowWidth=document.documentElement.clientWidth,this.windowHeight=document.documentElement.clientHeight},resizeHandler:function(){this.windowWidth=document.documentElement.clientWidth,this.windowHeight=document.documentElement.clientHeight}}}).$mount("#app");var yt=document.createElement("script");yt.src="https://www.youtube.com/iframe_api";var Et=document.getElementsByTagName("script")[0];Et.parentNode.insertBefore(yt,Et)},"5c0b":function(t,e,n){"use strict";var a=n("2856"),o=n.n(a);o.a},"65ae":function(t,e,n){"use strict";var a=n("0283"),o=n.n(a);o.a},"70a3":function(t,e,n){},7925:function(t,e,n){t.exports=n.p+"img/mob_huimin.88d2a9f1.jpg"},"7e59":function(t,e,n){t.exports=n.p+"img/mob_legacy.5e5be491.jpg"},"7ea1":function(t,e,n){},8386:function(t,e,n){"use strict";n.r(e);var a=n("6bde");n("4917");!function(){if("undefined"!=typeof window){var t=window.navigator.userAgent.match(/Edge\/(\d{2})\./),e=!!t&&parseInt(t[1],10)>=16;if("objectFit"in document.documentElement.style!=0&&!e)return void(window.objectFitPolyfill=function(){return!1});var n=function(t){var e=window.getComputedStyle(t,null),n=e.getPropertyValue("position"),a=e.getPropertyValue("overflow"),o=e.getPropertyValue("display");n&&"static"!==n||(t.style.position="relative"),"hidden"!==a&&(t.style.overflow="hidden"),o&&"inline"!==o||(t.style.display="block"),0===t.clientHeight&&(t.style.height="100%"),-1===t.className.indexOf("object-fit-polyfill")&&(t.className=t.className+" object-fit-polyfill")},o=function(t){var e=window.getComputedStyle(t,null),n={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var a in n)e.getPropertyValue(a)!==n[a]&&(t.style[a]=n[a])},i=function(t){var e=t.parentNode;n(e),o(t),t.style.position="absolute",t.style.height="100%",t.style.width="auto",t.clientWidth>e.clientWidth?(t.style.top="0",t.style.marginTop="0",t.style.left="50%",t.style.marginLeft=t.clientWidth/-2+"px"):(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",t.style.top="50%",t.style.marginTop=t.clientHeight/-2+"px")},s=function(t){if(void 0===t)t=document.querySelectorAll("[data-object-fit]");else if(t&&t.nodeName)t=[t];else{if("object"!=Object(a["a"])(t)||!t.length||!t[0].nodeName)return!1;t=t}for(var n=0;n<t.length;n++)if(t[n].nodeName){var o=t[n].nodeName.toLowerCase();"img"!==o||e?"video"===o&&(t[n].readyState>0?i(t[n]):t[n].addEventListener("loadedmetadata",function(){i(this)})):t[n].complete?i(t[n]):t[n].addEventListener("load",function(){i(this)})}return!0};document.addEventListener("DOMContentLoaded",function(){s()}),window.addEventListener("resize",function(){s()}),window.objectFitPolyfill=s}}()},8841:function(t,e,n){},"922d":function(t,e,n){"use strict";var a=n("8841"),o=n.n(a);o.a},9680:function(t,e,n){t.exports=n.p+"img/mob_watermoon.b29348bb.jpg"},"9e28":function(t,e,n){},a38d:function(t,e,n){"use strict";var a=n("c28a"),o=n.n(a);o.a},adb3:function(t,e,n){t.exports=n.p+"media/web_video.be94dad0.mp4"},c28a:function(t,e,n){},c525:function(t,e,n){},cbf0:function(t,e,n){t.exports=n.p+"img/web_wanderers.2e972c65.jpg"},d8e4:function(t,e,n){"use strict";var a=n("0138"),o=n.n(a);o.a},de36:function(t,e,n){"use strict";var a=n("c525"),o=n.n(a);o.a},dee8:function(t,e,n){"use strict";var a=n("9e28"),o=n.n(a);o.a},e0c4:function(t,e,n){t.exports=n.p+"img/mob_childhood.74caefd1.jpg"},f2d7:function(t,e,n){t.exports=n.p+"img/web_watermoon.4d3a3e52.jpg"}});
//# sourceMappingURL=app-legacy.c7688e9f.js.map