(function(e){function t(t){for(var a,i,o=t[0],c=t[1],d=t[2],g=0,l=[];g<o.length;g++)i=o[g],n[i]&&l.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"029f":function(e,t,s){},"03ce":function(e,t,s){e.exports=s.p+"img/ding--answer.7a70295b.png"},"0d26":function(e,t,s){"use strict";var a=s("2884"),n=s.n(a);n.a},"0fc9":function(e,t,s){e.exports=s.p+"img/lin--question.43cfbbd3.png"},"133d":function(e,t,s){e.exports=s.p+"img/good.95fad065.png"},"1e17":function(e,t,s){},"254a":function(e,t,s){e.exports=s.p+"img/udn-news.9300181a.svg"},2569:function(e,t,s){"use strict";var a=s("6e6f"),n=s.n(a);n.a},2884:function(e,t,s){},"3bb2":function(e,t){e.exports="data:image/png;base64,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"},"46ce":function(e,t,s){e.exports=s.p+"img/han--question.2290be7b.png"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=s("8bbf"),n=s.n(a),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"app",staticClass:"app",attrs:{id:"app"},on:{scroll:e.fixedStage}},[s("div",{staticClass:"total-container",attrs:{id:"total-container"}},[s("Cover"),s("div",{staticClass:"test-container"},[e.isStageShow?s("Stage",{attrs:{stageMove:e.stageMove}}):e._e(),s("div",{staticClass:"test-wrapper",attrs:{id:"test-wrapper"}},e._l(e.tests,function(e){return s("Test",{key:"test"+e.id,ref:"test"+e.id,refInFor:!0,attrs:{test:e}})}))],1),s("Result",{ref:"result"})],1)])},i=[],o=(s("4917"),s("7e62")),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"stage",style:"transform: translateY("+e.stageMove+"px)"},[s("div",{staticClass:"stage-wrapper"},e._l(6,function(t,a){return s("div",{key:a,staticClass:"stage__squre"},[s("div",{staticClass:"stage__num",class:0===a?"active":"",attrs:{id:"stage-num--test"+(a+1)}},[s("div",{staticClass:"stage__correct-mark",attrs:{id:"stage-correct--test"+(a+1)}}),s("p",[e._v(e._s(t))])])])}))])},d=[],u={name:"Stage",props:["stageMove"]},g=u,l=(s("f2fc"),s("2877")),h=Object(l["a"])(g,c,d,!1,null,null,null);h.options.__file="Stage.vue";var p=h.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"cover"},[e.isCoverShow?a("div",[a("HeadBar"),a("img",{attrs:{src:s("faa1"),alt:""}}),a("div",{staticClass:"cover__text-wrapper"},[e._m(0),a("h1",[e._v("這些政策是誰提的？")]),a("p",{staticClass:"cover__intro"},[e._v("九合一選舉即將到來，每位候選人都積極喊出各種口號及政策，希望能獲得選民青睞。你知道這些金句出自哪幾位候選人嗎？來玩玩看這個小測驗吧！")]),a("button",{attrs:{type:"button"},on:{"~click":function(t){return e.slideToFirstTestPage(t)},"~touchstart":function(t){return t.preventDefault(),e.slideToFirstTestPage(t)}}},[e._v("開始")])])],1):e._e()])},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",[s("div",[e._v("候選人金句連連看")])])}],w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"head-bar"},[a("a",{attrs:{href:"https://ubrand.udn.com/ubrand/index",target:"_blank"}},[a("svg",{staticClass:"udn-logo",attrs:{viewBox:"0 0 272.1 266.5"}},[a("path",{attrs:{d:"M105.4,155.2c1.4-2.2-.3-7.2-1.7-8.1s-3.9-4.4-7.1-1.6-4.2,5.2-6.2,6-4.6,2.3-4.6,2.3a5,5,0,0,0-3.5,6.7c1.2,3.1,8.3,10.8,11,12.6s7.5-1.1,8.5-4.7S104,157.3,105.4,155.2Z"}}),a("path",{attrs:{d:"M87.9,224.8c-3.4,2-12.6,10.7-21.1,19.1a130.2,130.2,0,0,0,15.6,8.4c5.7-6.5,11.1-13.1,13.2-17.3C99.3,227.2,91.9,222.5,87.9,224.8Z"}}),a("path",{attrs:{d:"M67.5,183.2c-5-4.3-5.1-5.5-9.9-2.7s-4.6,1.6-5.8,2.7-15.6,15.2-18.2,17.7l-5.7,5.3a131,131,0,0,0,8.6,11.3c3.9-4.1,8.7-8.8,11.4-11.3s8.6-8.7,11.1-9.4,3.4-.9,7.1-3.9S72.5,187.6,67.5,183.2Z"}}),a("path",{attrs:{d:"M39.5,156.3c-2.7,2.1-20.8,18.8-24.6,22.1l-1,.8a129.8,129.8,0,0,0,6.7,14.9c1.8-2.1,3.5-4.1,4.8-5.4,2.9-2.8,14.9-14.5,19.4-18.1s5.5-6,3.6-9.7S42.2,154.2,39.5,156.3Z"}}),a("path",{attrs:{d:"M167.1,82.4c0.5-2.2-2.3-5.8-4.7-4.3s-6.7,6.4-10.8,10-8.3,7-8.3,7c-1.7,1.5-6,7.9-7.4,10.1s-1.5,3.7.8,4.7,11.4-.4,16.9,3.2,8.6,4.3,10.6,3.1,1.4-4.5.4-7.8,0.3-12.3,1.5-17.2S166.7,84.6,167.1,82.4Z"}}),a("path",{attrs:{d:"M84.6,202.8c-1.3-4.9-5.7-7.9-9.6-6.9s-7,6.4-7,6.4-9,8.2-14.2,12.7L43,224.7a131.3,131.3,0,0,0,11,10c3-3.5,6.9-8,9.5-10.3s11.6-11.1,14-12.5S85.8,207.7,84.6,202.8Z"}}),a("path",{attrs:{d:"M215.2,32c-1.7,1.5-7.5,6.3-8.2,7.2s-3.9,3.1,1.6,6.4,9.8,4,15.6,4.1c4,0,10,1.6,14.7,3.3a131.3,131.3,0,0,0-22.7-22.7A5.1,5.1,0,0,1,215.2,32Z"}}),a("path",{attrs:{d:"M26,138.6c12.2-10.6,11.7-11.1,19.5-15.2s11.4-.7,16.6,3.2,6.6,3,9.5.1,1.4-6.3,1.9-10.9S74,98.5,74.9,92.3s0.1-8.8,5.5-13.6,12.3-3.8,20.1-3.4,17.8,5.2,20.4,6.5,6.8,4.3,10.3,4.9,6.2-3,6.6-4.5-0.5-8.8,0-11.4,0.4-15.4.5-17.6c1.2-17.4,1.6-21.6,4.8-30.6,2.5-7.2,3.3-8.6,6.4-8.5s13.5-1,22.8-.7c4.9,0.2,14.3,1.8,23,3.6A130.5,130.5,0,0,0,5.6,133.2a131.4,131.4,0,0,0,1.7,21.3C16.5,146.9,25.1,139.4,26,138.6Z"}}),a("path",{attrs:{d:"M185.6,83.1c1.2,1.7,3.3,3.1,5.9.9s11.1-10.6,13.1-12.1,4.3-3.4,2.3-5.6-9.1-8-11.1-8.3-4.1-1.6-6,.4-7.2,6.6-7.2,6.6-3.2,4.3-2.5,8.2S184.4,81.4,185.6,83.1Z"}}),a("path",{attrs:{d:"M249,128.3c-5.1-.4-8.1-2.8-10.7-5s-6.3-9-8.7-13.7-8.8-9.4-10-12.6,1.6-2.3,4.9-2.2l4.4-1.1c2.1-.7,7.9-3,11.5-4.7a43,43,0,0,0,10-5.8l4.6-3.6a130.2,130.2,0,0,0-9.4-17.2h0c-1.6,2.6-11.8,6.7-13.4,7.8s-4.5,4.5-9.2,7.7a63.5,63.5,0,0,1-10.5,5.5c-6.6,4.8-9.4,9.5-16.5,16.2-2.4,2.3-5.7,5-7.6,7.2s-2.1,5.1-6,8.1c-1.1.9-1.8,2.4-2.8,3.2s-2.8,1.5-4.2,2.8-5.2.5-6.3,1.5c-3.6,3.3-2.6,5.1-2.6,7.3s-3.4,3.9-4,5.3-1.5,4.9-.2,6.5,3.6,5.9,7,7.4,8.1,5.8,12.3,9.7,4.6,5.9,3.5,12.6-8.6,8.7-14.1,7.2-7.2-8.2-7.9-13.8-4.4-15.7-5.6-18.5-4.2-4.8-7.5-2.4-15,13.4-19.4,18.7-3,8-2.2,10.9,4.6,5.3,6.4,7,9.3,4.5,12.5,5.3,7.1,2,7.4,4.7-1.2,11-5.4,15.5-13.5,2.8-18.3-.6-1.3-8.5-.6-11.4-1.4-6.3-1.4-6.3c-0.6-6.7-2.2-8.9-4.6-11.6s-4-1.3-5.8.2-8.9,11-9.3,14.1,7.8,14,7.8,14c11.7,19.8,2,30.3-6.5,42.1-2.8,3.9-6.2,8.3-9.7,12.6A130.6,130.6,0,0,0,264.9,112.7C261.1,123.2,253.2,128.6,249,128.3Zm-34.8,28.9c-8.9,3.6-13.2-4.7-15.3-8.9s-7.3-11.1-9-14.4-0.8-9.6,0-13.8,3.1-3,4.8-2.1a82.7,82.7,0,0,1,8.6,3C208,123,217,132.9,221,140.2S223.1,153.7,214.2,157.2Z"}}),a("path",{attrs:{d:"M180.5,38.5c-2.1-1.7-6.6-6.6-8.2-7.3s-5.3-1-6.7-.1l-6.6,4.5a18.2,18.2,0,0,0-5.2,7.5c-0.8,2.8,1,6.6,2.6,9.2s3.7,7.3,8.4,4.7,13.5-11.5,15.3-13.1S182.7,40.3,180.5,38.5Z"}}),a("path",{attrs:{d:"M118.5,144.7c1,0.9,4.6,3.5,9.5-1.4s6.8-7.4,9-9.7,5.5-6,3.8-9.4-5.5-8.4-11.1-5.9a46.9,46.9,0,0,0-10.5,6.2l-2.7,2.4c-2.1,2.7-4.1,5.6-2.7,10.7S117.5,143.8,118.5,144.7Z"}}),a("path",{attrs:{d:"M115.9,109c3.1-3.3,1.7-4.8-.7-8.4S108,96.5,101,97.1s-10.4,7.3-11.1,9.7c0,0-1.9,5-1.6,7.4s4.4,8.2,7.8,10,6.3-.4,9.6-4.8S112.8,112.3,115.9,109Z"}})])]),a("svg",{staticClass:"head-bar__arrow",class:{active:e.isEditorListShow},attrs:{viewBox:"0 0 39.174 40"},on:{click:e.toggleEditorList,touchstatr:function(t){return t.preventDefault(),e.toggleEditorList(t)}}},[a("path",{attrs:{d:"M23.627,8.59l-7.64,7.328L8.347,8.59,6,10.846l9.987,9.6,9.987-9.6Z",transform:"translate(3.6 5.983)"}}),a("path",{attrs:{fill:"none",d:"M0,0H39.174V40H0Z"}})]),a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isEditorListShow,expression:"isEditorListShow"}],staticClass:"head-bar__editor-list"},[a("div",[a("div",{staticClass:"head-bar__editor-wrapper"},[a("h4",[e._v("採訪、文字")]),a("p",{staticClass:"mb-0"},[e._v("邱瓊玉、莊琇閔、楊濡嘉、劉宛琳")]),a("p",[e._v("陳珮琦、楊正海、丘采薇、劉星君")]),a("h4",[e._v("數位內容製作")]),a("p",[e._v("謝汶均、蔡佩蓉、洪欣慈")]),a("h4",[e._v("網頁設計")]),a("p",[e._v("劉宜峰")]),a("h4",[e._v("網頁製作")]),a("p",[e._v("林昱帆")]),a("h4",[e._v("插畫設計")]),a("p",[e._v("董十行")]),a("h4",[e._v("監製")]),a("p",{staticClass:"mb-0"},[e._v("董谷音、蔡幸怡、潘如瑩")])]),a("div",{staticClass:"head-bar__logo-wrapper"},[a("a",{attrs:{href:"https://udn.com/news/index",target:"_blank"}},[a("img",{attrs:{src:s("254a"),alt:""}})]),a("a",{attrs:{href:"https://udn.com/upf/newmedia/ubrandstudio/",target:"_blank"}},[a("img",{staticClass:"mb-0",attrs:{src:s("d20b"),alt:""}})])]),a("div",{staticClass:"head-bar__date"},[e._v("2018.11.16")])])])])],1)},v=[],b={name:"HeadBar",data:function(){return{isEditorListShow:!1}},methods:{toggleEditorList:function(){this.isEditorListShow=!this.isEditorListShow}}},A=b,y=(s("2569"),Object(l["a"])(A,w,v,!1,null,null,null));y.options.__file="HeadBar.vue";var T=y.exports,_={name:"Cover",components:{HeadBar:T},data:function(){return{isCoverShow:!0}},methods:{slideToFirstTestPage:function(){for(var e=this,t=document.getElementsByClassName("test-question__candidate-wrapper"),s=0;s<t.length;s+=1)t[s].style.transform="translateX(".concat(this.$parent.$refs.app.offsetWidth,"px)");TweenLite.to("#total-container",.3,{x:"-=100%",ease:Back.easeIn.config(1.4),onComplete:function(){e.isCoverShow=!1,e.$parent.currentStage+=1,e.$parent.$refs.test1[0].testSlideInDynamic()}})}}},C=_,x=(s("0d26"),Object(l["a"])(C,f,m,!1,null,null,null));x.options.__file="Cover.vue";var S=x.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"show",rawName:"v-show",value:e.isResultShow,expression:"isResultShow"}],ref:"result",staticClass:"result",attrs:{id:"result"}},[a("HeadBar"),e.isReaderSoso?[a("img",{attrs:{src:s("db2b"),alt:""}}),e._m(0)]:e.isReaderBad?[a("img",{attrs:{src:s("dd23"),alt:""}}),e._m(1)]:[a("img",{attrs:{src:s("133d"),alt:""}}),e._m(2)],a("div",{staticClass:"result__share"},[a("div",{staticClass:"result__share-fb",on:{click:e.shareToFb}},[a("p",[e._v("分享至")]),a("img",{attrs:{src:s("cf5d"),alt:""}})]),a("div",{staticClass:"result__share-line",on:{click:e.shareToLine}},[a("p",[e._v("分享至")]),a("img",{attrs:{src:s("c1ae"),alt:""}})]),a("div",{staticClass:"result__share-election",on:{click:e.gaRelateEvent}},[e._m(3)])])],2)},H=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"result__text"},[s("h2",[s("div",{attrs:{id:"result__name"}})]),s("h3",[e._v("你不關心政治，政治會來關心你。")]),s("p",[e._v("選舉只是一時的，關心政治卻是一輩子的功課。關注政治大小事，確保自己的權益不受損。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"result__text"},[s("h2",[s("div",{attrs:{id:"result__name"}})]),s("h3",[e._v("問世間，選舉為何物？")]),s("p",[e._v("不論是柯文哲的經典語錄，還是韓國瑜的名言，選戰的喧鬧只要到你身邊就會立刻消音。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"result__text"},[s("h2",[s("div",{attrs:{id:"result__name"}})]),s("h3",[e._v("天底下沒有我不知道的政事。")]),s("p",[e._v("你的腦中內建候選人金句資料庫，蒐羅各候選人的經典語錄，選戰新聞達人非你莫屬！")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"https://udn.com/vote2018/index",target:"_blank"}},[s("p",[e._v("選戰專區")])])}],D=(s("28a5"),{name:"Result",components:{HeadBar:T},data:function(){return{FbShareMetaImg:"https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--soso.jpg",isResultShow:!1,isReaderSoso:!0,isReaderBad:!0,resultNames:["選舉觀測員","政治絕緣體","選戰新聞達人"],typeNameTimer:null}},mounted:function(){Object(o["detectMob"])()&&!navigator.userAgent.match(/iPad/i)&&(this.$refs.result.style.minHeight="100vh")},methods:{gaRelateEvent:function(){window.ga("newmedia.send",{hitType:"event",eventCategory:"Relate",eventAction:"Click",eventLabel:"[候選人金句連連看] [".concat(Object(o["detectPlatform"])(),"] [選戰專區]")})},shareToLine:function(){Object(o["detectMob"])()?window.open("https://line.me/R/msg/text/?".concat(document.querySelector("title").innerHTML,"%0D%0A%0D%0A").concat(document.querySelector('meta[property="og:description"]').content,"%0D%0A%0D%0Ahttps://udn.com/upf/newmedia/2018_data/2018election/game2/index.html")):window.open("https://lineit.line.me/share/ui?url=https://udn.com/upf/newmedia/2018_data/2018election/game2/index.html","","width=647, height=400, left=162, top=100"),window.ga("newmedia.send",{hitType:"event",eventCategory:"Share",eventAction:"Click",eventLabel:"[候選人金句連連看] [".concat(Object(o["detectPlatform"])(),"] [Line]")})},shareToFb:function(){this.$parent.scores<=2?this.FbShareMetaImg="https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--bad.jpg":this.$parent.scores>=6&&(this.FbShareMetaImg="https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--good.jpg"),window.FB.ui({method:"share_open_graph",action_type:"og.shares",action_properties:JSON.stringify({object:{"og:url":"https://udn.com/upf/newmedia/2018_data/2018election/game2/index.html","og:title":"候選人金句連連看 這些政策是誰提的？","og:description":"九合一選舉即將到來，每位候選人都積極喊出各種口號及政策，希望能獲得選民青睞。你知道這些金句出自哪幾位候選人嗎？來玩玩看這個小測驗吧！","og:image":this.FbShareMetaImg,"og:image:width":"1280","og:image:height":"680"}})})},resultSlideInDynamic:function(){var e=this;TweenLite.to("#result",.3,{opacity:1,ease:Power2.easeIn,onComplete:function(){e.isReaderSoso?e.typeResultName(0):e.isReaderBad?e.typeResultName(1):e.typeResultName(2)}})},typeResultName:function(e){var t=this,s=document.getElementById("result__name"),a=this.resultNames[e].split(""),n="",r=0,i=function e(){t.typeNameTimer=setTimeout(function(){n+=a[r],s.textContent=n,r+=1,r!==a.length?e():(clearTimeout(t.typeNameTimer),window.ga("newmedia.send",{hitType:"event",eventCategory:"Game",eventAction:"answer",eventLabel:"[候選人金句連連看] [共得".concat(t.$parent.scores,"分]"),eventValue:t.$parent.scores}))},160)};i()}}}),E=D,L=(s("aada"),Object(l["a"])(E,k,H,!1,null,null,null));L.options.__file="Result.vue";var O=L.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"test"},[(1!==e.test.id?e.isTestShow:!e.isTestShow)?a("div",[a("section",{directives:[{name:"show",rawName:"v-show",value:e.isAnswerShow,expression:"isAnswerShow"}],staticClass:"test-answer"},[a("div",{attrs:{id:"answer-text--test"+e.test.id}},[a("div",{staticClass:"candidate-name candidate-name--answer",class:e.test.backgroundColorOfAnswerName},[e._v(e._s(e.test.answerName))]),a("h2",[e._v(e._s(e.test.saying))]),a("p",{domProps:{innerHTML:e._s(e.test.context)}}),6!==e.test.id?a("button",{attrs:{type:"button"},on:{"~click":function(t){return e.slideToNextTestPage(t)},"~touchstart":function(t){return t.preventDefault(),e.slideToNextTestPage(t)}}},[e._v("下一題")]):a("button",{attrs:{type:"button"},on:{"~click":function(t){return e.slideToResult(t)},"~touchstart":function(t){return t.preventDefault(),e.slideToResult(t)}}},[e._v("看結果")])])]),e.isQuestionShow?a("section",{staticClass:"test-question",attrs:{id:"question--test"+e.test.id}},[a("div",{staticClass:"test-question__quotation"},[e.hideForAnswerPop?e._e():a("img",{staticClass:"test-question__quotation-mark test-question__quotation-mark--top",attrs:{id:"quotation-mark-top--test"+e.test.id,src:s("75c6"),alt:""}}),e.hideForAnswerPop?e._e():a("h2",{attrs:{id:"quotation--test"+e.test.id}}),e.hideForAnswerPop?e._e():a("img",{staticClass:"test-question__quotation-mark test-question__quotation-mark--bottom",attrs:{id:"quotation-mark-bottom--test"+e.test.id,src:s("75c6"),alt:""}})]),a("div",{staticClass:"test-question__drop-place",attrs:{id:"drop-place--test"+e.test.id}},[a("img",{directives:[{name:"show",rawName:"v-show",value:!e.hideForAnswerPop,expression:"!hideForAnswerPop"}],ref:"droppedHead",staticClass:"test-question__head",attrs:{src:s("3bb2"),id:"droppedHead--test"+e.test.id,alt:""}}),a("img",{staticClass:"test-question__answer-head",attrs:{src:e.test.answerImg,id:"answer-head--test"+e.test.id,alt:""}}),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.hideForAnswerPop,expression:"!hideForAnswerPop"}],staticClass:"test-question__drop-place-prompt"},[e._v("拖曳"),a("br"),e._v("頭像")]),a("svg",{directives:[{name:"show",rawName:"v-show",value:!e.hideForAnswerPop,expression:"!hideForAnswerPop"}],attrs:{viewBox:"0 0 86 86"}},[a("g",{attrs:{transform:"translate(-19 -398)"}},[a("g",{attrs:{transform:"translate(19 398)"}},[a("circle",{staticClass:"check-fill",attrs:{cx:"43",cy:"43",r:"43"}}),a("circle",{staticClass:"check-stroke",attrs:{id:"correct-stroke--test"+e.test.id,cx:"43",cy:"43",r:"41.5"}})]),a("path",{staticClass:"check-mark check-mark--tick",attrs:{id:"tick--test"+e.test.id,d:"M36.082,1221.95l15.807,15.832,31.615-32.3",transform:"translate(4 -781)"}})])]),a("svg",{directives:[{name:"show",rawName:"v-show",value:!e.hideForAnswerPop,expression:"!hideForAnswerPop"}],attrs:{viewBox:"0 0 86 86"}},[a("g",{attrs:{transform:"translate(-113 -398)"}},[a("g",{attrs:{transform:"translate(113 398)"}},[a("circle",{staticClass:"check-fill",attrs:{cx:"43",cy:"43",r:"43"}}),a("circle",{staticClass:"check-stroke",attrs:{id:"incorrect-stroke--test"+e.test.id,cx:"43",cy:"43",r:"41.5"}})]),a("path",{staticClass:"check-mark check-mark--cross",attrs:{id:"cross-right--test"+e.test.id,d:"M149,1182.4v48.783",transform:"translate(903.972 -517.898) rotate(45)"}}),a("path",{staticClass:"check-mark check-mark--cross",attrs:{id:"cross-left--test"+e.test.id,d:"M149,1182.4v48.783",transform:"translate(-802.69 -307.18) rotate(-45)"}})])])]),a("div",{staticClass:"test-question__candidate"},e._l(e.test.names.length,function(t,s){return a("div",{key:e.test.names[s],staticClass:"test-question__candidate-wrapper",attrs:{id:"candidate"+(s+1)+"--test"+e.test.id}},[a("img",{staticClass:"test-question__head test-question__head--candidate",attrs:{src:e.test.imgs[s],"data-name":e.test.names[s],alt:""},on:{mousedown:function(t){t.preventDefault(),!e.canDragHead||e.mouseDragStart(t)},touchstart:function(t){t.preventDefault(),!e.canDragHead||e.touchDragStart(t)}}}),a("div",{staticClass:"candidate-name",class:e.test.backgroundColorOfNames[s]},[e._v(e._s(e.test.names[s]))])])}))]):e._e()]):e._e()])},I=[],P=(s("7f7f"),{name:"Test",props:["test"],data:function(){return{isTestShow:!1,mouseX:0,mouseY:0,touchX:0,touchY:0,draggedHeadTotalMoveX:0,draggedHeadTotalMoveY:0,draggedHead:null,draggedHeadTop:0,draggedHeadLeft:0,droppedHeadOffsetTop:0,droppedHeadOffsetLeft:0,canDragHead:!1,isDraggedHeadMatchDrop:!1,windowEle:window,htmlEle:document.documentElement,resizeTimer:null,isAnswerShow:!1,isQuestionShow:!0,hideForAnswerPop:!1,typeSayingTimer:null,startTimeInAnswerPage:null,endTimeInAnswerPage:null}},computed:{triggerDropMatchRange:function(){return{top:this.droppedHeadOffsetTop+this.$refs.droppedHead.offsetHeight/2,left:this.droppedHeadOffsetLeft+this.$refs.droppedHead.offsetWidth/2}}},methods:{setDroppedHeadOffset:function(){var e=this.$refs.droppedHead.getBoundingClientRect();this.droppedHeadOffsetTop=e.top+this.windowEle.pageYOffset,this.droppedHeadOffsetLeft=e.left+this.windowEle.pageXOffset},resizeHandler:function(){var e=this;this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(function(){e.setDroppedHeadOffset()},600)},testSlideInDynamic:function(){var e=this;this.$parent.$refs.app.scrollTop=0,this.htmlEle.scrollTop=0,window.addEventListener("resize",this.resizeHandler),TweenLite.to("#candidate1--test".concat(this.test.id),.4,{x:0,ease:Back.easeOut.config(1.4)}),TweenLite.to("#candidate2--test".concat(this.test.id),.3,{x:0,ease:Back.easeOut.config(1.4),delay:.1}),TweenLite.to("#candidate3--test".concat(this.test.id),.2,{x:0,ease:Back.easeOut.config(1.4),delay:.2}),TweenLite.to("#candidate4--test".concat(this.test.id),.1,{x:0,ease:Back.easeOut.config(1.4),delay:.3,onComplete:function(){e.setDroppedHeadOffset(),e.typeQuotation()}})},typeQuotation:function(){var e=this;TweenLite.set("#quotation-mark-top--test".concat(this.test.id,", #quotation-mark-bottom--test").concat(this.test.id),{opacity:1});var t=document.getElementById("quotation--test".concat(this.test.id)),s=this.test.saying.split(""),a="",n=0,r=100,i=function i(){e.typeSayingTimer=setTimeout(function(){a+=s[n],t.textContent=a,r=4!==n?n>4&&n<s.length-5?60:100:160,n+=1,n!==s.length?i():(clearTimeout(e.typeSayingTimer),TweenLite.to("#drop-place--test".concat(e.test.id),.2,{opacity:1,ease:Power2.easeIn,onComplete:function(){e.canDragHead=!0}}))},r)};i()},mouseDragStart:function(e){this.draggedHead=e.target,this.draggedHeadTop=this.draggedHead.getBoundingClientRect().top+this.windowEle.pageYOffset,this.draggedHeadLeft=this.draggedHead.getBoundingClientRect().left+this.windowEle.pageXOffset,TweenLite.to(this.draggedHead,.2,{scale:1.2,ease:Power4.easeOut}),this.mouseX=e.pageX,this.mouseY=e.pageY,this.draggedHead.parentNode.style.zIndex="99",document.addEventListener("mousemove",this.mouseDragging),document.addEventListener("mouseup",this.mouseDrop)},mouseDragging:function(e){e.preventDefault();var t=e.pageX,s=e.pageY;this.draggedHeadTotalMoveX+=t-this.mouseX,this.draggedHeadTotalMoveY+=s-this.mouseY,TweenLite.set(this.draggedHead,{x:this.draggedHeadTotalMoveX,y:this.draggedHeadTotalMoveY}),this.checkDraggedHeadInDropRange(),this.mouseX=t,this.mouseY=s},mouseDrop:function(e){e.preventDefault(),this.headDropped(),document.removeEventListener("mousemove",this.mouseDragging),document.removeEventListener("mouseup",this.mouseDrop)},touchDragStart:function(e){this.draggedHead=e.target,this.draggedHeadTop=this.draggedHead.getBoundingClientRect().top+this.windowEle.pageYOffset,this.draggedHeadLeft=this.draggedHead.getBoundingClientRect().left+this.windowEle.pageXOffset,TweenLite.to(this.draggedHead,.2,{scale:1.2,ease:Power4.easeOut}),this.touchX=e.touches[0].pageX,this.touchY=e.touches[0].pageY,this.draggedHead.parentNode.style.zIndex="99",this.draggedHead.addEventListener("touchmove",this.touchDragging),this.draggedHead.addEventListener("touchend",this.touchDrop)},touchDragging:function(e){e.preventDefault();var t=e.changedTouches[0].pageX,s=e.changedTouches[0].pageY;this.draggedHeadTotalMoveX+=t-this.touchX,this.draggedHeadTotalMoveY+=s-this.touchY,TweenLite.set(this.draggedHead,{x:this.draggedHeadTotalMoveX,y:this.draggedHeadTotalMoveY}),this.checkDraggedHeadInDropRange(),this.touchX=t,this.touchY=s},touchDrop:function(e){e.preventDefault(),this.headDropped(),this.draggedHead.removeEventListener("touchmove",this.touchDragging),this.draggedHead.removeEventListener("touchend",this.touchDrop)},headDropped:function(){var e=this;if(this.isDraggedHeadMatchDrop){TweenLite.to(this.draggedHead,.2,{x:this.droppedHeadOffsetLeft-this.draggedHeadLeft,y:this.droppedHeadOffsetTop-this.draggedHeadTop,scale:1,ease:Power4.easeOut}),this.canDragHead=!1;for(var t=this.draggedHead.parentNode.parentNode.children,s=this.draggedHead.parentNode,a=[],n=0;n<t.length;n+=1)t[n]!==s&&a.push(t[n]);a.forEach(function(e){e.classList.add("check-answer-hide")}),TweenLite.to(this.draggedHead.nextElementSibling,.8,{opacity:0,ease:Power2.easeInOut}),TweenLite.to(".check-answer-hide",.8,{opacity:0,ease:Power2.easeInOut,onComplete:function(){e.draggedHead.parentNode.style.zIndex="auto",e.checkAnswerDynamic()}})}else TweenLite.to(this.draggedHead,.2,{x:0,y:0,scale:1,ease:Power4.easeOut,onComplete:function(){e.draggedHead.parentNode.style.zIndex="auto"}});this.draggedHeadTotalMoveX=0,this.draggedHeadTotalMoveY=0},checkAnswerDynamic:function(){var e=this;this.draggedHead.dataset.name===this.test.answerName?(this.$parent.scores+=1,TweenLite.set("#correct-stroke--test".concat(this.test.id),{svgOrigin:"43 43",rotation:"-90_ccw"}),TweenLite.to("#correct-stroke--test".concat(this.test.id),.4,{strokeDashoffset:0,ease:Power2.easeOut}),TweenLite.to("#tick--test".concat(this.test.id),.4,{strokeDashoffset:0,ease:Power2.easeIn,delay:.4,onComplete:function(){e.switchQuestionToAnswer()}})):(TweenLite.set("#incorrect-stroke--test".concat(this.test.id),{svgOrigin:"43 43",rotation:"-90_ccw"}),TweenLite.to("#incorrect-stroke--test".concat(this.test.id),.4,{strokeDashoffset:0,ease:Power2.easeOut}),TweenLite.to("#cross-left--test".concat(this.test.id),.2,{strokeDashoffset:0,ease:Power2.easeIn,delay:.4}),TweenLite.to("#cross-right--test".concat(this.test.id),.2,{strokeDashoffset:0,ease:Power2.easeIn,delay:.6,onComplete:function(){e.switchQuestionToAnswer()}}))},switchQuestionToAnswer:function(){var e=this;6!==this.test.id?this.$parent.$refs["test".concat(this.test.id+1)][0].isTestShow=!0:this.$parent.$refs.result.isResultShow=!0,TweenLite.set("#answer-head--test".concat(this.test.id),{opacity:1,delay:.4,onStart:function(){e.hideForAnswerPop=!0,e.draggedHead.style.display="none",e.isAnswerShow=!0}}),TweenLite.to("#answer-head--test".concat(this.test.id),.4,{x:"-50%",y:-248,scale:2,ease:Back.easeOut.config(1),delay:.4,onStart:function(){e.$parent.$refs.app.scrollTop=0,e.htmlEle.scrollTop=0}}),TweenLite.from("#answer-text--test".concat(this.test.id),.4,{y:200,ease:Back.easeOut.config(1),delay:.4}),this.draggedHead.dataset.name===this.test.answerName&&TweenLite.to("#stage-correct--test".concat(this.test.id),.4,{scale:1,ease:Back.easeOut.config(1.7),delay:.4,onStart:function(){document.getElementById("stage-num--test".concat(e.test.id)).classList.add("correct")}}),this.startTimeInAnswerPage=new Date},checkDraggedHeadInDropRange:function(){var e=this.draggedHead.getBoundingClientRect(),t=this.windowEle.pageYOffset,s=this.windowEle.pageXOffset,a=e.top+t,n=e.bottom+t,r=e.left+s,i=e.right+s;(a>this.droppedHeadOffsetTop&&a<this.triggerDropMatchRange.top||a<this.droppedHeadOffsetTop&&n>this.triggerDropMatchRange.top)&&(r<this.droppedHeadOffsetLeft&&i>this.triggerDropMatchRange.left||r>this.droppedHeadOffsetLeft&&r<this.triggerDropMatchRange.left)?(TweenLite.to(this.draggedHead,.2,{scale:1,ease:Power4.easeOut}),this.isDraggedHeadMatchDrop=!0):(TweenLite.to(this.draggedHead,.2,{scale:1.2,ease:Power4.easeOut}),this.isDraggedHeadMatchDrop=!1)},slideToNextTestPage:function(){var e=this;this.readerStayTimeInAnswerPage(),document.getElementById("stage-num--test".concat(this.test.id+1)).classList.add("active");for(var t=document.getElementsByClassName("test-question__candidate-wrapper"),s=0;s<t.length;s+=1)t[s].style.transform="translateX(".concat(this.$parent.$refs.app.offsetWidth,"px)");TweenLite.to("#test-wrapper",.3,{x:"-=100%",ease:Back.easeIn.config(1.4),onComplete:function(){e.isTestShow=!e.isTestShow,e.$parent.currentStage+=1,window.removeEventListener("resize",e.resizeHandler),e.$parent.$refs["test".concat(e.test.id+1)][0].testSlideInDynamic()}})},slideToResult:function(e){var t=this;this.readerStayTimeInAnswerPage(),this.$parent.$refs.result.isResultShow=!0,this.$parent.scores<=2?this.$parent.$refs.result.isReaderSoso=!1:this.$parent.scores>=6&&(this.$parent.$refs.result.isReaderSoso=!1,this.$parent.$refs.result.isReaderBad=!1),TweenLite.to(e.currentTarget,.3,{opacity:0,ease:Power2.easeIn}),TweenLite.to("#total-container",.3,{x:"-=100%",ease:Back.easeIn.config(1.4),delay:.3,onComplete:function(){t.isTestShow=!t.isTestShow,t.$parent.isStageShow=!1,window.removeEventListener("resize",t.resizeHandler),t.$parent.$refs.result.resultSlideInDynamic()}})},readerStayTimeInAnswerPage:function(){this.endTimeInAnswerPage=new Date;var e=Math.round((this.endTimeInAnswerPage-this.startTimeInAnswerPage)/1e3);window.ga("newmedia.send",{hitType:"event",eventCategory:"Game",eventAction:"Stay",eventLabel:"[候選人金句連連看] [第".concat(this.test.id,"關] [停留").concat(e,"秒]"),eventValue:e})}}}),R=P,N=(s("82e3"),Object(l["a"])(R,M,I,!1,null,null,null));N.options.__file="Test.vue";var q=N.exports,B=s("e5a1"),Y=s.n(B),F=s("daa2"),z=s.n(F),V=s("03ce"),Z=s.n(V),X=s("9c21"),Q=s.n(X),U=s("a37f"),j=s.n(U),G=s("9baf"),W=s.n(G),K=s("7e66"),J=s.n(K),$=s("88db"),ee=s.n($),te=s("0fc9"),se=s.n(te),ae=s("6e35"),ne=s.n(ae),re=s("46ce"),ie=s.n(re),oe=s("8b5b"),ce=s.n(oe),de=s("ae95"),ue=s.n(de),ge={name:"app",components:{Cover:S,Stage:p,Test:q,Result:O},data:function(){return{isStageShow:!0,stageMove:0,currentStage:0,scores:0,tests:[{id:1,saying:"捍衛多數人的居住正義，對付釘子戶，我說到做到。",names:["姚文智","侯友宜","鄭文燦","丁守中"],imgs:[ce.a,J.a,ue.a,ne.a],backgroundColorOfNames:["bg-green","bg-blue","bg-green","bg-blue"],answerName:"丁守中",answerImg:Z.a,backgroundColorOfAnswerName:"bg-blue",context:'國民黨台北市長參選人丁守中推出「<a href="https://udn.com/news/story/7323/3465970" target="_blank">三招救都更</a>」政策，第一招是提高容積率，一坪換一坪；第二招是成立都更局，一條龍服務；第三招是加速修法，拔掉釘子戶。丁守中表示，在台北需要都更的老房子有60萬戶，但是4年了，大家講到都更還是一句，麥作惘了(別做夢了)。」'},{id:2,saying:"拆掉機場是為了不讓你輕易的離開我。",names:["柯文哲","林佳龍","丁守中","姚文智"],imgs:[ee.a,se.a,ne.a,ce.a],backgroundColorOfNames:["bg-grey","bg-green","bg-blue","bg-green"],answerName:"姚文智",answerImg:Q.a,backgroundColorOfAnswerName:"bg-green",context:'民進黨台北市長參選人姚文智日前搭上「撩妹金句」風潮，以幽默風趣的圖文結合市政，向市民告白。姚文智也在金句中提及自己「<a href="https://udn.com/news/story/10958/2880476" target="_blank">廢松機，改中央公園</a>」的政策，若當選台北市長，計劃在2022年將松山機場遷走。'},{id:3,saying:"在我的心中，沒有圍牆。有了圍牆，處處不通。沒有圍牆，處處都通。",names:["姚文智","韓國瑜","柯文哲","侯友宜"],imgs:[ce.a,ie.a,ee.a,J.a],backgroundColorOfNames:["bg-green","bg-blue","bg-grey","bg-blue"],answerName:"韓國瑜",answerImg:z.a,backgroundColorOfAnswerName:"bg-blue",context:'國民黨高雄市長參選人韓國瑜表示，若有機會執掌高雄市，對他來說，兩岸關係及對外關係通通都沒有圍牆，只有道路，他也主張「<a href="https://udn.com/news/story/6656/3299296" target="_blank">南南合作</a>」，即台灣南部、中國大陸南方和東南亞結合起來，高雄走經濟之路。民進黨高雄市長參選人陳其邁則把招商引資列為高雄拚經濟的首要目標，強調將打造智慧城市及全世界最有價值的半導體聚落。'},{id:4,saying:"當我們願意開始去關心那些跟我們不一樣的人，或我們願意跟他共享一些東西的時候，這就是共融社會的精神。",names:["韓國瑜","姚文智","丁守中","柯文哲"],imgs:[ie.a,ce.a,ne.a,ee.a],backgroundColorOfNames:["bg-blue","bg-green","bg-blue","bg-grey"],answerName:"柯文哲",answerImg:j.a,backgroundColorOfAnswerName:"bg-grey",context:'尋求連任的台北市長柯文哲透過影片宣傳「擁抱多元，全城平權」的理念，他提到台北市推動<a href="https://udn.com/news/story/7323/2911231" target="_blank">共融式遊具</a>，讓健康的孩童與腦性麻痺、殘障、身障的朋友都可以到公園玩樂，柯文哲也以台北在去年舉辦開齋節和台北同志大遊行為例，證明台北能接納各個族群，是個多元、友善的城市。'},{id:5,saying:"捷運蓋到哪裡，都更就做到哪裡。",names:["侯友宜","柯文哲","丁守中","林佳龍"],imgs:[J.a,ee.a,ne.a,se.a],backgroundColorOfNames:["bg-blue","bg-grey","bg-blue","bg-green"],answerName:"侯友宜",answerImg:Y.a,backgroundColorOfAnswerName:"bg-blue",context:'國民黨新北市長參選人侯友宜推出「<a href="https://udn.com/news/story/7323/3314450" target="_blank">三環六線</a>」政策，計劃新增完成五股泰山輕軌、深坑輕軌、淡海輕軌延伸到八里等捷運路線，同時將積極推動共構，提高捷運站周邊的生活和商業機能，以讓更多人住在捷運站周邊。'},{id:6,saying:"空氣品質不會一天變壞，它是經年累月的，但是我們這三年來的努力，空氣變好是看得見的。",names:["侯友宜","林佳龍","柯文哲","鄭文燦"],imgs:[J.a,se.a,ee.a,ue.a],backgroundColorOfNames:["bg-blue","bg-green","bg-grey","bg-green"],answerName:"林佳龍",answerImg:W.a,backgroundColorOfAnswerName:"bg-green",context:'競選連任的台中市長林佳龍與國民黨籍台中市長參選人盧秀燕在<a href="https://udn.com/news/story/6656/3446301" target="_blank">空汙議題</a>上針鋒相對，盧秀燕曾批評，台中近年來成為全國空氣最糟的地方，林佳龍則表示，過去30年來，台中火力發電廠的空汙問題，沒有一位縣市長敢挑戰，他選擇扛起責任，今年上半年，台中空氣品質第一次來到全國前十名。'}]}},mounted:function(){window.addEventListener("scroll",this.fixedStage),Object(o["detectMob"])()&&!navigator.userAgent.match(/iPad/i)?this.$refs.app.style.minHeight="100%":document.documentElement.clientHeight>643&&(document.body.style.cssText="display: flex; align-items: center;"),window.addEventListener("unload",this.unloadHandler)},methods:{fixedStage:function(){this.stageMove=this.$refs.app.scrollTop+window.pageYOffset},unloadHandler:function(){window.ga("newmedia.send",{hitType:"event",eventCategory:"Game",eventAction:"Exit",eventLabel:"[候選人金句連連看] [".concat(Object(o["detectPlatform"])(),"] [第").concat(this.currentStage,"關跳出]"),eventValue:this.currentStage})}}},le=ge,he=(s("5c0b"),Object(l["a"])(le,r,i,!1,null,null,null));he.options.__file="App.vue";var pe=he.exports;n.a.config.productionTip=!1,new n.a({render:function(e){return e(pe)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(e,t,s){},"6e35":function(e,t,s){e.exports=s.p+"img/ding--question.594404f3.png"},"6e6f":function(e,t,s){},"75c6":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAYAAABlcqYFAAAABHNCSVQICAgIfAhkiAAAAYFJREFUOI2N1U+LTmEYx/FPDzUWD2OkNDE2ZuHPSPZWajbWioUN3oDMK1AKMTVb8gIkK8nGrDBNmZJih55JRg1FMlL+PRbHU6er65xzX3UW9933e/+uc7rOOVS1BfP4hp9YxlWM667d/90HWMAZ9CPUxysMk2sVMy0Bx/E18d7iUB283RAwujZwIAkYx3qL9xH7RvC7jpAhniUh5wu8pyP4cwE8xJEQcqPQO9HDk6TLrI6F9ftC7xxM40NBR9eC3MegwFvr4Y3qUdzr6GgsrDdUE3QZv1q8ibhxFC8aOpprOeiwamwz73smbFeNX4RPtoTAJD4l3qBJeBTA39jREQKXkpD7vQZ4b1g/Vo16V/1N9hYzcCbp5nRBADwP3g/sjNAmrARwqTDgQtLcfIS24WGAvuBgQcBZ/AnuijD2s1gL0Dr2dxw+huvJHQywqw7OJdBrtS9oQ03L341VTEX4YoDuSH46SU2ppqk+5rewNYM3467qx3Wq4PB63cRLXMGeJugfBjXKkg1DjQcAAAAASUVORK5CYII="},"7e66":function(e,t,s){e.exports=s.p+"img/hou--question.e02a786e.png"},"82e3":function(e,t,s){"use strict";var a=s("029f"),n=s.n(a);n.a},"88db":function(e,t,s){e.exports=s.p+"img/ke--question.4b053e87.png"},"8b5b":function(e,t,s){e.exports=s.p+"img/yao--question.599ff82e.png"},"8bbf":function(e,t){e.exports=Vue},"9baf":function(e,t,s){e.exports=s.p+"img/lin--answer.4691fb75.png"},"9c21":function(e,t,s){e.exports=s.p+"img/yao--answer.2ce5e38d.png"},a37f:function(e,t,s){e.exports=s.p+"img/ke--answer.c0b93f97.png"},aada:function(e,t,s){"use strict";var a=s("1e17"),n=s.n(a);n.a},adcc:function(e,t,s){},ae95:function(e,t,s){e.exports=s.p+"img/zheng--question.6f64170a.png"},c1ae:function(e,t,s){e.exports=s.p+"img/line.1ff996d7.svg"},cf5d:function(e,t,s){e.exports=s.p+"img/facebook.3cf4b508.svg"},d20b:function(e,t,s){e.exports=s.p+"img/new-media.92bd503a.svg"},daa2:function(e,t,s){e.exports=s.p+"img/han--answer.92bbec9f.png"},db2b:function(e,t,s){e.exports=s.p+"img/soso.a30a2a75.png"},dd23:function(e,t,s){e.exports=s.p+"img/bad.44231e97.png"},e5a1:function(e,t,s){e.exports=s.p+"img/hou--answer.6a68ee51.png"},f2fc:function(e,t,s){"use strict";var a=s("adcc"),n=s.n(a);n.a},faa1:function(e,t,s){e.exports=s.p+"img/cover-background.c8adf5de.png"}});
//# sourceMappingURL=app-legacy.57468120.js.map