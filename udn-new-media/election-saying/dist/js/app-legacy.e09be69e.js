(function(e){function t(t){for(var a,r,i=t[0],d=t[1],c=t[2],l=0,g=[];l<i.length;l++)r=i[l],n[r]&&g.push(n[r][0]),n[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);u&&u(t);while(g.length)g.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,i=1;i<s.length;i++){var d=s[i];0!==n[d]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},o=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=d;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"029f":function(e,t,s){},"03ce":function(e,t,s){e.exports=s.p+"img/ding--answer.7a70295b.png"},"0d26":function(e,t,s){"use strict";var a=s("2884"),n=s.n(a);n.a},"0fc9":function(e,t,s){e.exports=s.p+"img/lin--question.43cfbbd3.png"},"133d":function(e,t,s){e.exports=s.p+"img/good.95fad065.png"},"1e17":function(e,t,s){},"254a":function(e,t,s){e.exports=s.p+"img/udn-news.9300181a.svg"},2569:function(e,t,s){"use strict";var a=s("6e6f"),n=s.n(a);n.a},2884:function(e,t,s){},"3bb2":function(e,t){e.exports="data:image/png;base64,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"},"46ce":function(e,t,s){e.exports=s.p+"img/han--question.2290be7b.png"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"app",staticClass:"app",attrs:{id:"app"},on:{scroll:e.fixedStage}},[s("div",{staticClass:"total-container",attrs:{id:"total-container"}},[s("Cover"),s("div",{staticClass:"test-container"},[e.isStageShow?s("Stage",{attrs:{stageMove:e.stageMove}}):e._e(),s("div",{staticClass:"test-wrapper",attrs:{id:"test-wrapper"}},e._l(e.tests,function(e){return s("Test",{key:"test"+e.id,ref:"test"+e.id,refInFor:!0,attrs:{test:e}})}))],1),s("Result",{ref:"result"})],1)])},o=[],r=s("7e62"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"stage",style:"transform: translateY("+e.stageMove+"px)"},[s("div",{staticClass:"stage-wrapper"},e._l(6,function(t,a){return s("div",{key:a,staticClass:"stage__squre"},[s("div",{staticClass:"stage__num",class:0===a?"active":"",attrs:{id:"stage-num--test"+(a+1)}},[s("div",{staticClass:"stage__correct-mark",attrs:{id:"stage-correct--test"+(a+1)}}),s("p",[e._v(e._s(t))])])])}))])},d=[],c={name:"Stage",props:["stageMove"]},u=c,l=(s("f2fc"),s("2877")),g=Object(l["a"])(u,i,d,!1,null,null,null);g.options.__file="Stage.vue";var p=g.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"cover"},[e.isCoverShow?a("div",[a("HeadBar"),a("img",{attrs:{src:s("faa1"),alt:""}}),a("div",{staticClass:"cover__text-wrapper"},[e._m(0),a("h1",[e._v("這些政策是誰提的？")]),a("p",{staticClass:"cover__intro"},[e._v("九合一選舉即將到來，每位候選人都積極喊出各種口號及政策，希望能獲得選民青睞。你知道這些金句出自哪幾位候選人嗎？來玩玩看這個小測驗吧！")]),a("button",{staticClass:"primary-btn",attrs:{type:"button"},on:{touchstart:function(t){return t.preventDefault(),e.slideToFirstTestPage(t)},click:e.slideToFirstTestPage}},[e._v("開始")])])],1):e._e()])},h=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",[s("div",[e._v("候選人金句連連看")])])}],m=s("109c"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"head-bar"},[a("a",{attrs:{href:"https://ubrand.udn.com/ubrand/index",target:"_blank"}},[a("svg",{staticClass:"udn-logo",attrs:{viewBox:"0 0 272.1 266.5"}},[a("path",{attrs:{d:"M105.4,155.2c1.4-2.2-.3-7.2-1.7-8.1s-3.9-4.4-7.1-1.6-4.2,5.2-6.2,6-4.6,2.3-4.6,2.3a5,5,0,0,0-3.5,6.7c1.2,3.1,8.3,10.8,11,12.6s7.5-1.1,8.5-4.7S104,157.3,105.4,155.2Z"}}),a("path",{attrs:{d:"M87.9,224.8c-3.4,2-12.6,10.7-21.1,19.1a130.2,130.2,0,0,0,15.6,8.4c5.7-6.5,11.1-13.1,13.2-17.3C99.3,227.2,91.9,222.5,87.9,224.8Z"}}),a("path",{attrs:{d:"M67.5,183.2c-5-4.3-5.1-5.5-9.9-2.7s-4.6,1.6-5.8,2.7-15.6,15.2-18.2,17.7l-5.7,5.3a131,131,0,0,0,8.6,11.3c3.9-4.1,8.7-8.8,11.4-11.3s8.6-8.7,11.1-9.4,3.4-.9,7.1-3.9S72.5,187.6,67.5,183.2Z"}}),a("path",{attrs:{d:"M39.5,156.3c-2.7,2.1-20.8,18.8-24.6,22.1l-1,.8a129.8,129.8,0,0,0,6.7,14.9c1.8-2.1,3.5-4.1,4.8-5.4,2.9-2.8,14.9-14.5,19.4-18.1s5.5-6,3.6-9.7S42.2,154.2,39.5,156.3Z"}}),a("path",{attrs:{d:"M167.1,82.4c0.5-2.2-2.3-5.8-4.7-4.3s-6.7,6.4-10.8,10-8.3,7-8.3,7c-1.7,1.5-6,7.9-7.4,10.1s-1.5,3.7.8,4.7,11.4-.4,16.9,3.2,8.6,4.3,10.6,3.1,1.4-4.5.4-7.8,0.3-12.3,1.5-17.2S166.7,84.6,167.1,82.4Z"}}),a("path",{attrs:{d:"M84.6,202.8c-1.3-4.9-5.7-7.9-9.6-6.9s-7,6.4-7,6.4-9,8.2-14.2,12.7L43,224.7a131.3,131.3,0,0,0,11,10c3-3.5,6.9-8,9.5-10.3s11.6-11.1,14-12.5S85.8,207.7,84.6,202.8Z"}}),a("path",{attrs:{d:"M215.2,32c-1.7,1.5-7.5,6.3-8.2,7.2s-3.9,3.1,1.6,6.4,9.8,4,15.6,4.1c4,0,10,1.6,14.7,3.3a131.3,131.3,0,0,0-22.7-22.7A5.1,5.1,0,0,1,215.2,32Z"}}),a("path",{attrs:{d:"M26,138.6c12.2-10.6,11.7-11.1,19.5-15.2s11.4-.7,16.6,3.2,6.6,3,9.5.1,1.4-6.3,1.9-10.9S74,98.5,74.9,92.3s0.1-8.8,5.5-13.6,12.3-3.8,20.1-3.4,17.8,5.2,20.4,6.5,6.8,4.3,10.3,4.9,6.2-3,6.6-4.5-0.5-8.8,0-11.4,0.4-15.4.5-17.6c1.2-17.4,1.6-21.6,4.8-30.6,2.5-7.2,3.3-8.6,6.4-8.5s13.5-1,22.8-.7c4.9,0.2,14.3,1.8,23,3.6A130.5,130.5,0,0,0,5.6,133.2a131.4,131.4,0,0,0,1.7,21.3C16.5,146.9,25.1,139.4,26,138.6Z"}}),a("path",{attrs:{d:"M185.6,83.1c1.2,1.7,3.3,3.1,5.9.9s11.1-10.6,13.1-12.1,4.3-3.4,2.3-5.6-9.1-8-11.1-8.3-4.1-1.6-6,.4-7.2,6.6-7.2,6.6-3.2,4.3-2.5,8.2S184.4,81.4,185.6,83.1Z"}}),a("path",{attrs:{d:"M249,128.3c-5.1-.4-8.1-2.8-10.7-5s-6.3-9-8.7-13.7-8.8-9.4-10-12.6,1.6-2.3,4.9-2.2l4.4-1.1c2.1-.7,7.9-3,11.5-4.7a43,43,0,0,0,10-5.8l4.6-3.6a130.2,130.2,0,0,0-9.4-17.2h0c-1.6,2.6-11.8,6.7-13.4,7.8s-4.5,4.5-9.2,7.7a63.5,63.5,0,0,1-10.5,5.5c-6.6,4.8-9.4,9.5-16.5,16.2-2.4,2.3-5.7,5-7.6,7.2s-2.1,5.1-6,8.1c-1.1.9-1.8,2.4-2.8,3.2s-2.8,1.5-4.2,2.8-5.2.5-6.3,1.5c-3.6,3.3-2.6,5.1-2.6,7.3s-3.4,3.9-4,5.3-1.5,4.9-.2,6.5,3.6,5.9,7,7.4,8.1,5.8,12.3,9.7,4.6,5.9,3.5,12.6-8.6,8.7-14.1,7.2-7.2-8.2-7.9-13.8-4.4-15.7-5.6-18.5-4.2-4.8-7.5-2.4-15,13.4-19.4,18.7-3,8-2.2,10.9,4.6,5.3,6.4,7,9.3,4.5,12.5,5.3,7.1,2,7.4,4.7-1.2,11-5.4,15.5-13.5,2.8-18.3-.6-1.3-8.5-.6-11.4-1.4-6.3-1.4-6.3c-0.6-6.7-2.2-8.9-4.6-11.6s-4-1.3-5.8.2-8.9,11-9.3,14.1,7.8,14,7.8,14c11.7,19.8,2,30.3-6.5,42.1-2.8,3.9-6.2,8.3-9.7,12.6A130.6,130.6,0,0,0,264.9,112.7C261.1,123.2,253.2,128.6,249,128.3Zm-34.8,28.9c-8.9,3.6-13.2-4.7-15.3-8.9s-7.3-11.1-9-14.4-0.8-9.6,0-13.8,3.1-3,4.8-2.1a82.7,82.7,0,0,1,8.6,3C208,123,217,132.9,221,140.2S223.1,153.7,214.2,157.2Z"}}),a("path",{attrs:{d:"M180.5,38.5c-2.1-1.7-6.6-6.6-8.2-7.3s-5.3-1-6.7-.1l-6.6,4.5a18.2,18.2,0,0,0-5.2,7.5c-0.8,2.8,1,6.6,2.6,9.2s3.7,7.3,8.4,4.7,13.5-11.5,15.3-13.1S182.7,40.3,180.5,38.5Z"}}),a("path",{attrs:{d:"M118.5,144.7c1,0.9,4.6,3.5,9.5-1.4s6.8-7.4,9-9.7,5.5-6,3.8-9.4-5.5-8.4-11.1-5.9a46.9,46.9,0,0,0-10.5,6.2l-2.7,2.4c-2.1,2.7-4.1,5.6-2.7,10.7S117.5,143.8,118.5,144.7Z"}}),a("path",{attrs:{d:"M115.9,109c3.1-3.3,1.7-4.8-.7-8.4S108,96.5,101,97.1s-10.4,7.3-11.1,9.7c0,0-1.9,5-1.6,7.4s4.4,8.2,7.8,10,6.3-.4,9.6-4.8S112.8,112.3,115.9,109Z"}})])]),a("svg",{staticClass:"head-bar__arrow",class:{active:e.isEditorListShow},attrs:{viewBox:"0 0 39.174 40"},on:{click:e.toggleEditorList,touchstatr:function(t){return t.preventDefault(),e.toggleEditorList(t)}}},[a("path",{attrs:{d:"M23.627,8.59l-7.64,7.328L8.347,8.59,6,10.846l9.987,9.6,9.987-9.6Z",transform:"translate(3.6 5.983)"}}),a("path",{attrs:{fill:"none",d:"M0,0H39.174V40H0Z"}})]),a("transition",{attrs:{name:"slide"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isEditorListShow,expression:"isEditorListShow"}],staticClass:"head-bar__editor-list"},[a("div",[a("div",{staticClass:"head-bar__editor-wrapper"},[a("h4",[e._v("採訪、文字")]),a("p",{staticClass:"mb-0"},[e._v("邱瓊玉、莊琇閔、楊濡嘉、劉宛琳")]),a("p",[e._v("陳珮琦、楊正海、丘采薇、劉星君")]),a("h4",[e._v("數位內容製作")]),a("p",[e._v("謝汶均、蔡佩蓉、洪欣慈")]),a("h4",[e._v("網頁設計")]),a("p",[e._v("劉宜峰")]),a("h4",[e._v("網頁製作")]),a("p",[e._v("林昱帆")]),a("h4",[e._v("插畫設計")]),a("p",[e._v("董十行")]),a("h4",[e._v("監製")]),a("p",{staticClass:"mb-0"},[e._v("董谷音、蔡幸怡、潘如瑩")])]),a("div",{staticClass:"head-bar__logo-wrapper"},[a("a",{attrs:{href:"https://udn.com/news/index",target:"_blank"}},[a("img",{attrs:{src:s("254a"),alt:""}})]),a("a",{attrs:{href:"https://udn.com/upf/newmedia/ubrandstudio/",target:"_blank"}},[a("img",{staticClass:"mb-0",attrs:{src:s("d20b"),alt:""}})])]),a("div",{staticClass:"head-bar__date"},[e._v("2018.11.16")])])])])],1)},w=[],b={name:"HeadBar",data:function(){return{isEditorListShow:!1}},methods:{toggleEditorList:function(){this.isEditorListShow=!this.isEditorListShow}}},A=b,y=(s("2569"),Object(l["a"])(A,v,w,!1,null,null,null));y.options.__file="HeadBar.vue";var D=y.exports,_={name:"Cover",components:{HeadBar:D},data:function(){return{isCoverShow:!0}},methods:{slideToFirstTestPage:function(){var e=this;m["d"].to("#total-container",.3,{x:"-=100%",ease:m["a"].easeIn.config(1.4),onComplete:function(){e.isCoverShow=!1,e.$parent.$refs.test5[0].testSlideInDynamic()}})}}},H=_,S=(s("0d26"),Object(l["a"])(H,f,h,!1,null,null,null));S.options.__file="Cover.vue";var x=S.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isResultShow?a("section",{staticClass:"result",attrs:{id:"result"}},[a("HeadBar"),e.isReaderSoso?[a("img",{attrs:{src:s("db2b"),alt:""}}),a("div",{staticClass:"result__text"},[e._m(0),a("Share"),a("h3",[e._v("你不關心政治，政治會來關心你。")]),a("p",[e._v("選舉只是一時的，關心政治卻是一輩子的功課。關注政治大小事，確保自己的權益不受損。")])],1)]:e.isReaderBad?[a("img",{attrs:{src:s("dd23"),alt:""}}),e._m(1)]:[a("img",{attrs:{src:s("133d"),alt:""}}),a("div",{staticClass:"result__text"},[e._m(2),a("Share"),a("h3",[e._v("天底下沒有我不知道的政事。")]),a("p",[e._v("你的腦中內建候選人金句資料庫，蒐羅各候選人的經典語錄，選戰新聞達人非你莫屬！")])],1)],a("div",{staticClass:"result__share"},[a("div",{staticClass:"result__share-fb",on:{click:e.shareToFb}},[a("p",[e._v("分享至")]),a("img",{attrs:{src:s("cf5d"),alt:""}})]),a("div",{staticClass:"result__share-line",on:{click:e.shareToLine}},[a("p",[e._v("分享至")]),a("img",{attrs:{src:s("c1ae"),alt:""}})]),e._m(3)])],2):e._e()},T=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",[s("div",{attrs:{id:"result__name"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"result__text"},[s("h2",[s("div",{attrs:{id:"result__name"}})]),s("h3",[e._v("問世間，選舉為何物？")]),s("p",[e._v("不論是柯文哲的經典語錄，還是韓國瑜的名言，選戰的喧鬧只要到你身邊就會立刻消音。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",[s("div",{attrs:{id:"result__name"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"result__share-election"},[s("a",{attrs:{href:"https://udn.com/vote2018/index",target:"_blank"}},[s("p",[e._v("選戰專區")])])])}],E=(s("28a5"),{name:"Result",components:{HeadBar:D},data:function(){return{FbShareMetaImg:"https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--soso.jpg",isResultShow:!1,isReaderSoso:!0,isReaderBad:!0,resultNames:["選舉觀測員","政治絕緣體","選戰新聞達人"],typeNameTimer:null}},methods:{shareToLine:function(){Object(r["detectMob"])()?window.open("https://line.me/R/msg/text/?".concat(document.querySelector("title").innerHTML,"%0D%0A%0D%0A").concat(document.querySelector('meta[property="og:description"]').content,"%0D%0A%0D%0Ahttps://udn.com/upf/newmedia/2018_data/2018election/game2/index.html")):window.open("https://lineit.line.me/share/ui?url=https://udn.com/upf/newmedia/2018_data/2018election/game2/index.html","","width=647, height=400, left=162, top=100")},shareToFb:function(){this.$parent.scores<=2?this.FbShareMetaImg="https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--bad.jpg":this.$parent.scores>=6&&(this.FbShareMetaImg="https://udn.com/upf/newmedia/2018_data/2018election/game2/meta--good.jpg"),window.FB.ui({method:"share_open_graph",action_type:"og.likes",action_properties:JSON.stringify({object:{"og:url":"https://udn.com/upf/newmedia/2018_data/2018election/game2/index.html","og:title":"候選人金句連連看 這些政策是誰提的？","og:description":"九合一選舉即將到來，每位候選人都積極喊出各種口號及政策，希望能獲得選民青睞。你知道這些金句出自哪幾位候選人嗎？來玩玩看這個小測驗吧！","og:image":this.FbShareMetaImg}})})},resultSlideInDynamic:function(){var e=this;m["d"].to("#result",.3,{opacity:1,ease:m["b"].easeIn,onComplete:function(){e.isReaderSoso?e.typeResultName(0):e.isReaderBad?e.typeResultName(1):e.typeResultName(2)}})},typeResultName:function(e){var t=this,s=document.getElementById("result__name"),a=this.resultNames[e].split(""),n="",o=0,r=function e(){t.typeNameTimer=setTimeout(function(){n+=a[o],s.textContent=n,o+=1,o!==a.length?e():clearTimeout(t.typeNameTimer)},160)};r()}}}),k=E,M=(s("aada"),Object(l["a"])(k,C,T,!1,null,null,null));M.options.__file="Result.vue";var O=M.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"test"},[(5!==e.test.id?e.isTestShow:!e.isTestShow)?a("div",[a("section",{directives:[{name:"show",rawName:"v-show",value:e.isAnswerShow,expression:"isAnswerShow"}],staticClass:"test-answer"},[a("div",{attrs:{id:"answer-text--test"+e.test.id}},[a("div",{staticClass:"candidate-name",class:e.test.backgroundColorOfAnswerName},[e._v(e._s(e.test.answerName))]),a("h2",[e._v(e._s(e.test.saying))]),a("p",{domProps:{innerHTML:e._s(e.test.context)}}),6!==e.test.id?a("button",{attrs:{type:"button"},on:{click:e.slideToNextTestPage,touchstart:function(t){return t.preventDefault(),e.slideToNextTestPage(t)}}},[e._v("下一題")]):a("button",{attrs:{type:"button"},on:{click:e.slideToResult,touchstart:function(t){return t.preventDefault(),e.slideToResult(t)}}},[e._v("看結果")])])]),e.isQuestionShow?a("section",{staticClass:"test-question",attrs:{id:"question--test"+e.test.id}},[a("div",{staticClass:"test-question__quotation"},[e.hideForAnswerPop?e._e():a("img",{staticClass:"test-question__quotation-mark test-question__quotation-mark--top",attrs:{id:"quotation-mark-top--test"+e.test.id,src:s("75c6"),alt:""}}),e.hideForAnswerPop?e._e():a("h2",{attrs:{id:"quotation--test"+e.test.id}}),e.hideForAnswerPop?e._e():a("img",{staticClass:"test-question__quotation-mark test-question__quotation-mark--bottom",attrs:{id:"quotation-mark-bottom--test"+e.test.id,src:s("75c6"),alt:""}})]),a("div",{staticClass:"test-question__drop-place",attrs:{id:"drop-place--test"+e.test.id}},[a("img",{directives:[{name:"show",rawName:"v-show",value:!e.hideForAnswerPop,expression:"!hideForAnswerPop"}],ref:"droppedHead",staticClass:"test-question__head",attrs:{src:s("3bb2"),id:"droppedHead--test"+e.test.id,alt:""}}),a("img",{staticClass:"test-question__answer-head",attrs:{src:e.test.answerImg,id:"answer-head--test"+e.test.id,alt:""}}),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.hideForAnswerPop,expression:"!hideForAnswerPop"}],staticClass:"test-question__drop-place-prompt"},[e._v("拖曳"),a("br"),e._v("頭像")]),a("svg",{directives:[{name:"show",rawName:"v-show",value:!e.hideForAnswerPop,expression:"!hideForAnswerPop"}],attrs:{viewBox:"0 0 86 86"}},[a("g",{attrs:{transform:"translate(-19 -398)"}},[a("g",{attrs:{transform:"translate(19 398)"}},[a("circle",{staticClass:"check-fill",attrs:{cx:"43",cy:"43",r:"43"}}),a("circle",{staticClass:"check-stroke",attrs:{id:"correct-stroke--test"+e.test.id,cx:"43",cy:"43",r:"41.5",transform:"rotate(-90)"}})]),a("path",{staticClass:"check-mark check-mark--tick",attrs:{id:"tick--test"+e.test.id,d:"M36.082,1221.95l15.807,15.832,31.615-32.3",transform:"translate(4 -781)"}})])]),a("svg",{directives:[{name:"show",rawName:"v-show",value:!e.hideForAnswerPop,expression:"!hideForAnswerPop"}],attrs:{viewBox:"0 0 86 86"}},[a("g",{attrs:{transform:"translate(-113 -398)"}},[a("g",{attrs:{transform:"translate(113 398)"}},[a("circle",{staticClass:"check-fill",attrs:{cx:"43",cy:"43",r:"43"}}),a("circle",{staticClass:"check-stroke",attrs:{id:"incorrect-stroke--test"+e.test.id,cx:"43",cy:"43",r:"41.5",transform:"rotate(-90)"}})]),a("path",{staticClass:"check-mark check-mark--cross",attrs:{id:"cross-right--test"+e.test.id,d:"M149,1182.4v48.783",transform:"translate(903.972 -517.898) rotate(45)"}}),a("path",{staticClass:"check-mark check-mark--cross",attrs:{id:"cross-left--test"+e.test.id,d:"M149,1182.4v48.783",transform:"translate(-802.69 -307.18) rotate(-45)"}})])])]),a("div",{staticClass:"test-question__candidate"},e._l(e.test.names.length,function(t,s){return a("div",{key:e.test.names[s],attrs:{id:"candidate"+(s+1)+"--test"+e.test.id}},[a("img",{staticClass:"test-question__head test-question__head--candidate",attrs:{src:e.test.imgs[s],"data-name":e.test.names[s],alt:""},on:{mousedown:function(t){t.preventDefault(),!e.canDragHead||e.mouseDragStart(t)},touchstart:function(t){t.preventDefault(),!e.canDragHead||e.touchDragStart(t)}}}),a("div",{staticClass:"candidate-name",class:e.test.backgroundColorOfNames[s]},[e._v(e._s(e.test.names[s]))])])}))]):e._e()]):e._e()])},I=[],q={name:"Test",props:["test"],data:function(){return{isTestShow:!1,mouseX:0,mouseY:0,touchX:0,touchY:0,draggedHeadTotalMoveX:0,draggedHeadTotalMoveY:0,draggedHead:null,draggedHeadTop:0,draggedHeadLeft:0,droppedHeadOffsetTop:0,droppedHeadOffsetLeft:0,canDragHead:!1,isDraggedHeadMatchDrop:!1,windowEle:window,htmlEle:document.documentElement,resizeTimer:null,isAnswerShow:!1,isQuestionShow:!0,hideForAnswerPop:!1,typeSayingTimer:null}},computed:{triggerDropMatchRange:function(){return this.$test.computed.triggerDropMatchRange(this)}},methods:{setDroppedHeadOffset:function(){this.$test.methods.setDroppedHeadOffset(this)},resizeHandler:function(){this.$test.methods.resizeHandler(this)},testSlideInDynamic:function(){this.$test.methods.testSlideInDynamic(this)},typeQuotation:function(){this.$test.methods.typeQuotation(this)},mouseDragStart:function(e){this.$test.methods.mouseDragStart(e,this)},mouseDragging:function(e){this.$test.methods.mouseDragging(e,this)},mouseDrop:function(e){this.$test.methods.mouseDrop(e,this)},touchDragStart:function(e){this.$test.methods.touchDragStart(e,this)},touchDragging:function(e){this.$test.methods.touchDragging(e,this)},touchDrop:function(e){this.$test.methods.touchDrop(e,this)},headDropped:function(){this.$test.methods.headDropped(this)},checkAnswerDynamic:function(){this.$test.methods.checkAnswerDynamic(this)},switchQuestionToAnswer:function(){this.$test.methods.switchQuestionToAnswer(this)},checkDraggedHeadInDropRange:function(){this.$test.methods.checkDraggedHeadInDropRange(this)},slideToNextTestPage:function(){this.$test.methods.slideToNextTestPage(this)},slideToResult:function(e){this.$test.methods.slideToResult(e,this)}}},N=q,L=(s("82e3"),Object(l["a"])(N,R,I,!1,null,null,null));L.options.__file="Test.vue";var Y=L.exports,B=s("e5a1"),P=s.n(B),z=(s("daa2"),s("03ce"),s("9c21"),s("a37f"),s("9baf")),F=s.n(z),Q=s("7e66"),Z=s.n(Q),V=s("88db"),X=s.n(V),U=s("0fc9"),j=s.n(U),G=s("6e35"),K=s.n(G),J=(s("46ce"),s("8b5b"),s("ae95")),W=s.n(J),$={name:"app",components:{Cover:x,Stage:p,Test:Y,Result:O},data:function(){return{isStageShow:!0,stageMove:0,scores:0,tests:[{id:5,saying:"捷運蓋到哪裡，都更就做到哪裡。",names:["侯友宜","柯文哲","丁守中","林佳龍"],imgs:[Z.a,X.a,K.a,j.a],backgroundColorOfNames:["bg-blue","bg-grey","bg-blue","bg-green"],answerName:"侯友宜",answerImg:P.a,backgroundColorOfAnswerName:"bg-blue",context:'國民黨新北市長參選人侯友宜推出「<a href="https://udn.com/news/story/7323/3314450" target="_blank">三環六線</a>」政策，計劃新增完成五股泰山輕軌、深坑輕軌、淡海輕軌延伸到八里等捷運路線，同時將積極推動共構，提高捷運站周邊的生活和商業機能，以讓更多人住在捷運站周邊。'},{id:6,saying:"空氣品質不會一天變壞，它是經年累月的，但是我們這三年來的努力，空氣變好是看得見的。",names:["侯友宜","林佳龍","柯文哲","鄭文燦"],imgs:[Z.a,j.a,X.a,W.a],backgroundColorOfNames:["bg-blue","bg-green","bg-grey","bg-green"],answerName:"林佳龍",answerImg:F.a,backgroundColorOfAnswerName:"bg-green",context:'競選連任的台中市長林佳龍與國民黨籍台中市長參選人盧秀燕在<a href="https://udn.com/news/story/6656/3446301" target="_blank">空汙議題</a>上針鋒相對，盧秀燕曾批評，台中近年來成為全國空氣最糟的地方，林佳龍則表示，過去30年來，台中火力發電廠的空汙問題，沒有一位縣市長敢挑戰，他選擇扛起責任，今年上半年，台中空氣品質第一次來到全國前十名。'}]}},mounted:function(){window.addEventListener("scroll",this.fixedStage),Object(r["detectMob"])()?this.$refs.app.style.minHeight="100%":document.documentElement.clientHeight>619&&(document.body.style.cssText="display: flex; align-items: center;")},methods:{fixedStage:function(){this.stageMove=this.$refs.app.scrollTop+window.pageYOffset}}},ee=$,te=(s("5c0b"),Object(l["a"])(ee,n,o,!1,null,null,null));te.options.__file="App.vue";var se=te.exports,ae=(s("7f7f"),{computed:{triggerDropMatchRange:function(e){return{top:e.droppedHeadOffsetTop+e.$refs.droppedHead.offsetHeight/2,left:e.droppedHeadOffsetLeft+e.$refs.droppedHead.offsetWidth/2}}},methods:{setDroppedHeadOffset:function(e){var t=e.$refs.droppedHead.getBoundingClientRect();e.droppedHeadOffsetTop=t.top+e.windowEle.pageYOffset,e.droppedHeadOffsetLeft=t.left+e.windowEle.pageXOffset},resizeHandler:function(e){e.resizeTimer&&clearTimeout(e.resizeTimer),e.resizeTimer=setTimeout(function(){e.setDroppedHeadOffset()},600)},testSlideInDynamic:function(e){window.addEventListener("resize",e.resizeHandler),m["d"].to("#candidate1--test".concat(e.test.id),.4,{x:0,ease:m["a"].easeOut.config(1.4)}),m["d"].to("#candidate2--test".concat(e.test.id),.3,{x:0,ease:m["a"].easeOut.config(1.4),delay:.1}),m["d"].to("#candidate3--test".concat(e.test.id),.2,{x:0,ease:m["a"].easeOut.config(1.4),delay:.2}),m["d"].to("#candidate4--test".concat(e.test.id),.1,{x:0,ease:m["a"].easeOut.config(1.4),delay:.3,onComplete:function(){e.setDroppedHeadOffset(),e.typeQuotation()}})},typeQuotation:function(e){m["d"].set("#quotation-mark-top--test".concat(e.test.id,", #quotation-mark-bottom--test").concat(e.test.id),{opacity:1});var t=document.getElementById("quotation--test".concat(e.test.id)),s=e.test.saying.split(""),a="",n=0,o=100,r=function r(){e.typeSayingTimer=setTimeout(function(){a+=s[n],t.textContent=a,o=Math.floor(51*Math.random()+50),n+=1,n!==s.length?r():(clearTimeout(e.typeSayingTimer),m["d"].to("#drop-place--test".concat(e.test.id),.4,{opacity:1,ease:m["b"].easeIn,onComplete:function(){e.canDragHead=!0}}))},o)};r()},mouseDragStart:function(e,t){t.draggedHead=e.target,t.draggedHeadTop=t.draggedHead.getBoundingClientRect().top+t.windowEle.pageYOffset,t.draggedHeadLeft=t.draggedHead.getBoundingClientRect().left+t.windowEle.pageXOffset,m["d"].to(t.draggedHead,.2,{scale:1.2,ease:m["c"].easeOut}),t.mouseX=e.pageX,t.mouseY=e.pageY,t.draggedHead.parentNode.style.zIndex="99",document.addEventListener("mousemove",t.mouseDragging),document.addEventListener("mouseup",t.mouseDrop)},mouseDragging:function(e,t){e.preventDefault();var s=e.pageX,a=e.pageY;t.draggedHeadTotalMoveX+=s-t.mouseX,t.draggedHeadTotalMoveY+=a-t.mouseY,m["d"].set(t.draggedHead,{x:t.draggedHeadTotalMoveX,y:t.draggedHeadTotalMoveY}),t.checkDraggedHeadInDropRange(),t.mouseX=s,t.mouseY=a},mouseDrop:function(e,t){e.preventDefault(),t.headDropped(),document.removeEventListener("mousemove",t.mouseDragging),document.removeEventListener("mouseup",t.mouseDrop)},touchDragStart:function(e,t){t.draggedHead=e.target,t.draggedHeadTop=t.draggedHead.getBoundingClientRect().top+t.windowEle.pageYOffset,t.draggedHeadLeft=t.draggedHead.getBoundingClientRect().left+t.windowEle.pageXOffset,m["d"].to(t.draggedHead,.2,{scale:1.2,ease:m["c"].easeOut}),t.touchX=e.touches[0].pageX,t.touchY=e.touches[0].pageY,t.draggedHead.parentNode.style.zIndex="99",t.draggedHead.addEventListener("touchmove",t.touchDragging),t.draggedHead.addEventListener("touchend",t.touchDrop)},touchDragging:function(e,t){e.preventDefault();var s=e.changedTouches[0].pageX,a=e.changedTouches[0].pageY;t.draggedHeadTotalMoveX+=s-t.touchX,t.draggedHeadTotalMoveY+=a-t.touchY,m["d"].set(t.draggedHead,{x:t.draggedHeadTotalMoveX,y:t.draggedHeadTotalMoveY}),t.checkDraggedHeadInDropRange(),t.touchX=s,t.touchY=a},touchDrop:function(e,t){e.preventDefault(),t.headDropped(),t.draggedHead.removeEventListener("touchmove",t.touchDragging),t.draggedHead.removeEventListener("touchend",t.touchDrop)},headDropped:function(e){if(e.isDraggedHeadMatchDrop){m["d"].to(e.draggedHead,.2,{x:e.droppedHeadOffsetLeft-e.draggedHeadLeft,y:e.droppedHeadOffsetTop-e.draggedHeadTop,scale:1,ease:m["c"].easeOut}),e.canDragHead=!1;for(var t=e.draggedHead.parentNode.parentNode.children,s=e.draggedHead.parentNode,a=[],n=0;n<t.length;n+=1)t[n]!==s&&a.push(t[n]);a.forEach(function(e){e.classList.add("check-answer-hide")}),m["d"].to(e.draggedHead.nextElementSibling,.8,{opacity:0,ease:m["b"].easeInOut}),m["d"].to(".check-answer-hide",.8,{opacity:0,ease:m["b"].easeInOut,onComplete:function(){e.draggedHead.parentNode.style.zIndex="auto",e.checkAnswerDynamic()}})}else m["d"].to(e.draggedHead,.2,{x:0,y:0,scale:1,ease:m["c"].easeOut,onComplete:function(){e.draggedHead.parentNode.style.zIndex="auto"}});e.draggedHeadTotalMoveX=0,e.draggedHeadTotalMoveY=0},checkAnswerDynamic:function(e){e.draggedHead.dataset.name===e.test.answerName?(e.$parent.scores+=1,m["d"].to("#correct-stroke--test".concat(e.test.id),.4,{strokeDashoffset:0,ease:m["b"].easeOut}),m["d"].to("#tick--test".concat(e.test.id),.4,{strokeDashoffset:0,ease:m["b"].easeIn,delay:.4,onComplete:function(){e.switchQuestionToAnswer()}})):(m["d"].to("#incorrect-stroke--test".concat(e.test.id),.4,{strokeDashoffset:0,ease:m["b"].easeOut}),m["d"].to("#cross-left--test".concat(e.test.id),.2,{strokeDashoffset:0,ease:m["b"].easeIn,delay:.4}),m["d"].to("#cross-right--test".concat(e.test.id),.2,{strokeDashoffset:0,ease:m["b"].easeIn,delay:.6,onComplete:function(){e.switchQuestionToAnswer()}}))},switchQuestionToAnswer:function(e){6!==e.test.id?e.$parent.$refs["test".concat(e.test.id+1)][0].isTestShow=!0:e.$parent.$refs.result.isResultShow=!0,m["d"].set("#answer-head--test".concat(e.test.id),{opacity:1,delay:.4,onStart:function(){e.hideForAnswerPop=!0,e.draggedHead.style.display="none",e.isAnswerShow=!0}}),m["d"].to("#answer-head--test".concat(e.test.id),.4,{x:"-50%",y:-248,scale:2,ease:m["a"].easeOut.config(1),delay:.4}),m["d"].from("#answer-text--test".concat(e.test.id),.4,{y:200,ease:m["a"].easeOut.config(1),delay:.4}),e.draggedHead.dataset.name===e.test.answerName&&m["d"].to("#stage-correct--test".concat(e.test.id),.4,{scale:1,ease:m["a"].easeOut.config(1.7),delay:.4,onStart:function(){document.getElementById("stage-num--test".concat(e.test.id)).classList.add("correct")}})},checkDraggedHeadInDropRange:function(e){var t=e.draggedHead.getBoundingClientRect(),s=e.windowEle.pageYOffset,a=e.windowEle.pageXOffset,n=t.top+s,o=t.bottom+s,r=t.left+a,i=t.right+a;(n>e.droppedHeadOffsetTop&&n<e.triggerDropMatchRange.top||n<e.droppedHeadOffsetTop&&o>e.triggerDropMatchRange.top)&&(r<e.droppedHeadOffsetLeft&&i>e.triggerDropMatchRange.left||r>e.droppedHeadOffsetLeft&&r<e.triggerDropMatchRange.left)?(m["d"].to(e.draggedHead,.2,{scale:1,ease:m["c"].easeOut}),e.isDraggedHeadMatchDrop=!0):(m["d"].to(e.draggedHead,.2,{scale:1.2,ease:m["c"].easeOut}),e.isDraggedHeadMatchDrop=!1)},slideToNextTestPage:function(e){document.getElementById("stage-num--test".concat(e.test.id+1)).classList.add("active"),m["d"].to("#test-wrapper",.3,{x:"-=100%",ease:m["a"].easeIn.config(1.4),onComplete:function(){e.isTestShow=!e.isTestShow,window.removeEventListener("resize",e.resizeHandler),e.$parent.$refs["test".concat(e.test.id+1)][0].testSlideInDynamic()}})},slideToResult:function(e,t){t.$parent.$refs.result.isResultShow=!0,t.$parent.scores<=2?t.$parent.$refs.result.isReaderSoso=!1:t.$parent.scores>=6&&(t.$parent.$refs.result.isReaderSoso=!1,t.$parent.$refs.result.isReaderBad=!1),m["d"].to(e.currentTarget,.5,{opacity:0,ease:m["b"].easeOut}),m["d"].to("#total-container",.3,{x:"-=100%",ease:m["a"].easeIn.config(1.4),delay:.5,onComplete:function(){t.isTestShow=!t.isTestShow,t.$parent.isStageShow=!1,window.removeEventListener("resize",t.resizeHandler),t.$parent.$refs.result.resultSlideInDynamic()}})}}});a["a"].prototype.$test=ae,a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(se)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(e,t,s){},"6e35":function(e,t,s){e.exports=s.p+"img/ding--question.594404f3.png"},"6e6f":function(e,t,s){},"75c6":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAYAAABlcqYFAAAABHNCSVQICAgIfAhkiAAAAYFJREFUOI2N1U+LTmEYx/FPDzUWD2OkNDE2ZuHPSPZWajbWioUN3oDMK1AKMTVb8gIkK8nGrDBNmZJih55JRg1FMlL+PRbHU6er65xzX3UW9933e/+uc7rOOVS1BfP4hp9YxlWM667d/90HWMAZ9CPUxysMk2sVMy0Bx/E18d7iUB283RAwujZwIAkYx3qL9xH7RvC7jpAhniUh5wu8pyP4cwE8xJEQcqPQO9HDk6TLrI6F9ftC7xxM40NBR9eC3MegwFvr4Y3qUdzr6GgsrDdUE3QZv1q8ibhxFC8aOpprOeiwamwz73smbFeNX4RPtoTAJD4l3qBJeBTA39jREQKXkpD7vQZ4b1g/Vo16V/1N9hYzcCbp5nRBADwP3g/sjNAmrARwqTDgQtLcfIS24WGAvuBgQcBZ/AnuijD2s1gL0Dr2dxw+huvJHQywqw7OJdBrtS9oQ03L341VTEX4YoDuSH46SU2ppqk+5rewNYM3467qx3Wq4PB63cRLXMGeJugfBjXKkg1DjQcAAAAASUVORK5CYII="},"7e66":function(e,t,s){e.exports=s.p+"img/hou--question.e02a786e.png"},"82e3":function(e,t,s){"use strict";var a=s("029f"),n=s.n(a);n.a},"88db":function(e,t,s){e.exports=s.p+"img/ke--question.4b053e87.png"},"8b5b":function(e,t,s){e.exports=s.p+"img/yao--question.599ff82e.png"},"9baf":function(e,t,s){e.exports=s.p+"img/lin--answer.4691fb75.png"},"9c21":function(e,t,s){e.exports=s.p+"img/yao--answer.2ce5e38d.png"},a37f:function(e,t,s){e.exports=s.p+"img/ke--answer.c0b93f97.png"},aada:function(e,t,s){"use strict";var a=s("1e17"),n=s.n(a);n.a},adcc:function(e,t,s){},ae95:function(e,t,s){e.exports=s.p+"img/zheng--question.6f64170a.png"},c1ae:function(e,t,s){e.exports=s.p+"img/line.1ff996d7.svg"},cf5d:function(e,t,s){e.exports=s.p+"img/facebook.3cf4b508.svg"},d20b:function(e,t,s){e.exports=s.p+"img/new-media.92bd503a.svg"},daa2:function(e,t,s){e.exports=s.p+"img/han--answer.92bbec9f.png"},db2b:function(e,t,s){e.exports=s.p+"img/soso.a30a2a75.png"},dd23:function(e,t,s){e.exports=s.p+"img/bad.44231e97.png"},e5a1:function(e,t,s){e.exports=s.p+"img/hou--answer.6a68ee51.png"},f2fc:function(e,t,s){"use strict";var a=s("adcc"),n=s.n(a);n.a},faa1:function(e,t,s){e.exports=s.p+"img/cover-background.c8adf5de.png"}});
//# sourceMappingURL=app-legacy.e09be69e.js.map