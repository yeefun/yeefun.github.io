(function(t){function e(e){for(var o,r,s=e[0],c=e[1],l=e[2],p=0,u=[];p<s.length;p++)r=s[p],a[r]&&u.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);_&&_(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var _=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0138":function(t,e,n){},"0283":function(t,e,n){},"0d26":function(t,e,n){"use strict";var o=n("5592"),a=n.n(o);a.a},1081:function(t,e,n){"use strict";var o=n("11bf"),a=n.n(o);a.a},"11bf":function(t,e,n){},"1c54":function(t,e,n){"use strict";var o=n("70a3"),a=n.n(o);a.a},2856:function(t,e,n){},"2b57":function(t,e,n){},3101:function(t,e,n){t.exports=n.p+"img/mob_wanderers.21c8f787.jpg"},"4ca7":function(t,e,n){t.exports=n.p+"media/mobile_video.7ef4abb2.mp4"},5592:function(t,e,n){},5640:function(t,e,n){t.exports=n.p+"img/web_legacy.da4c3bf3.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{ref:"pageContent",staticClass:"page-content",style:t.pageTransform}),n("div",{ref:"scrollContent",staticClass:"scroll-content"},[n("FinalScene"),n("div")],1)])},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"cover",on:{"~mousewheel":function(e){return t.dancerMove(e)},"~DOMMouseScroll":function(e){return t.dancerMove(e)},"~touchmove":function(e){return t.dancerMove(e)}}},[o("video",{staticClass:"cover__video",attrs:{id:"cover__video","data-object-fit":"cover",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[t.isMobileSize?o("source",{attrs:{src:n("4ca7"),type:"video/mp4"}}):o("source",{attrs:{src:n("adb3"),type:"video/mp4"}})])])},s=[];const c={data(){return{windowWidth:document.documentElement.clientWidth}},created(){window.addEventListener("resize",()=>{this.windowWidth=document.documentElement.clientWidth})},computed:{isMobileSize(){return this.windowWidth<576}}};var l=c,_={name:"Cover",mixins:[l],data(){return{isDancerMove:!1,isCoverPromptExist:!0,isCoverFadeOut:!1,isCoverTitleFadeIn:!1,isCoverTitleMove:!1}},methods:{resizeHandler(){this.windowWidth=document.documentElement.clientWidth},dancerClass(t){const e={"dancer-move":this.isDancerMove};return e[`dancer${t}`]=!0,e[`dancer${t}-move`]=this.isDancerMove&&4!==t&&5!==t,e},dancerMove(){this.isCoverPromptExist=!1,this.isDancerMove=!0},dancerMoveEnd(){this.isDancerMove&&(this.isCoverFadeOut=!0)},coverFadeOutEnd(){this.isCoverTitleFadeIn=!0},coverTitleFadeInEnd(){this.isCoverTitleMove=!0},subtitleMoveEnd(){this.$root.$el.style.overflow="initial"}}},p=_,u=(n("0d26"),n("2877")),d=Object(u["a"])(p,r,s,!1,null,null,null);d.options.__file="Cover.vue";var v=d.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"opening-line"},[n("div",{staticClass:"opening-line__wrapper"},[n("p",[t._v("去年雲門舞集創辦人、藝術總監林懷民宣布將於2019年底退休，為社會投下震撼彈。在驚訝與不捨之後，大家更關注林懷民以及雲門舞集的下一步，連林懷民本人都笑說：「好像我說要退休之後，大家對我更好奇了。」")]),n("p",[n("br")]),n("p",[t._v("回首雲門舞集一路走來，成立在1973年、台灣退出聯合國後隔年，林懷民帶領雲門舞集與台灣併肩走過45年光陰，創作出無數作品，不只是台灣在國際舞台上最亮麗的文化名片，更帶給許多台灣人一段寧靜、快樂的觀舞時光。")]),n("p",[n("br")]),n("p",[t._v("一直以來，林懷民作品風格的多變，都與他感受到的台灣息息相關。他口中退休前的最後一齣舞作《關於島嶼》，裡面同時有著和諧與衝突、挫敗與希望，是他對當今台灣的印象，以及感受到的氛圍。他自稱這是他的「懺悔錄」，問他懺悔何來，他字字沉重：")]),n("p",[n("br")]),n("blockquote",[t._v("「台灣的今天，都是我們的共業，是我們眼睜睜讓這些事發生。」")]),n("p",[n("br")]),n("p",[t._v("對於這塊孕育雲門舞集的土地，他有滿懷的情感與憂心，日前林懷民接受《聯合晚報》與新媒體中心專訪，暢談他眼中的台灣變化、雲門歷程與內心感懷。")])])])}],m={name:"OpeningLine"},b=m,g=(n("1081"),Object(u["a"])(b,f,h,!1,null,"15542eb6",null));g.options.__file="OpeningLine.vue";var C=g.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"youtube"},[n("iframe",{staticClass:"youtube__player",attrs:{id:"player",src:"http://www.youtube.com/embed/6u2vkJCamD8",frameborder:"0"}})])}],y={name:"Youtube"},E=y,q=(n("922d"),Object(u["a"])(E,w,x,!1,null,null,null));q.options.__file="Youtube.vue";var $=q.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"fixed-page"},[n("div",{staticClass:"fixed-page__photo-wrapper"},[n("transition",{attrs:{name:"photo-fade",mode:"out-in"}},t._l(t.photos,function(e){return e.name===t.photoName?n("div",{key:e.name,staticClass:"fixed-page__photo",style:{backgroundImage:"url("+e.url+")"}}):t._e()})),n("transition",{attrs:{name:"caption-fade",mode:"out-in"}},t._l(t.photos,function(e){return e.name===t.photoName?n("div",{key:e.name,staticClass:"content__photo-caption content__photo-caption--dark content__photo-caption--photo-page",domProps:{innerHTML:t._s(e.caption)}}):t._e()}))],1),n("div",{staticClass:"fixed-page__mask"})])},O=[],j=n("5640"),P=n.n(j),T=n("cbf0"),S=n.n(T),M=n("f2d7"),F=n.n(M),L={name:"FixedPhotoPage",props:["photoName"],data(){return{photos:[{name:"legacy",url:P.a,caption:"圖說預留的位置&ensp;/&ensp;誰誰&ensp;攝影"},{name:"wanderers",url:S.a,caption:"圖說預留的位置&ensp;/&ensp;誰誰&ensp;攝影"},{name:"watermoon",url:F.a,caption:"圖說預留的位置&ensp;/&ensp;誰誰&ensp;攝影"}]}}},N=L,Y=(n("1c54"),Object(u["a"])(N,k,O,!1,null,null,null));Y.options.__file="FixedPhotoPage.vue";var D=Y.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content content--dark content--photo-page"},[t._m(0),n("div",{staticClass:"content__text"},[n("p",[t._v("林懷民父親是台灣首任嘉義縣縣長及交通部、內政部部長林金生，從小叮囑他「要貢獻社會」，「懷民」名字也因此而來。雖然他一路抗拒，最終投入5歲起著迷的舞蹈，成立雲門卻仍滿載社會使命：台灣要有自己的舞團、要做跟西方不一樣的舞，要跳到學校、跳到社區，跳舞給台灣人看。")]),t._m(1),n("p",[t._v("雲門舞集成立之時，正值台灣國際外交處境的艱困期，1971年台灣退出聯合國、1973年雲門舞集即成立。 在那充滿熱血救國口號的1970年代，林懷民說，他們一開始就有一大票人，都是像他一樣在光復後出生的「光復仔」，例如蔣勳、奚淞、賴德和、張照堂等人，「個人的力量是不夠的，才華是有限的，一定要『群組』、合起來做事情。」")]),t._m(2),n("p",{ref:"photoLegacy"},[t._v("也因為這樣的情感與時代背景，有了描繪先人移民奮鬥艱辛、充滿壓抑爆發力的舞蹈史詩《薪傳》（1978）。距離40年後的今天回頭看，林懷民形容那時舞者的身體有一鼓「壓抑的爆發力」，身體有障礙、不像現在的舞者肢體如此流暢，但正是這些有點生硬、卻力道強悍的舞蹈動作，激勵了無數台灣人心。")]),t._m(3),n("p",[t._v("「我只是一個愛跳舞的小孩，沒有學太多舞就來到雲門，因為看到一個舞叫《薪傳》。」在舞團超過30年、現任助理藝術總監的李靜君回憶，當時她只是個16、17歲的年輕女孩，看完《薪傳》後感動到連鼓掌都忘了，整個人像傻掉一樣，毅然決然放棄原本想跳的芭蕾舞，轉而來到雲門舞集，一待至今。")])]),t._m(4),n("h3",{staticClass:"content__subtitle"},[t._v("風起雲湧的1980年代")]),n("div",{staticClass:"content__text"},[n("p",[t._v("1980年代，台灣從農業社會急速轉型為工商業社會，在這10年間，經濟上台灣快速起飛、擠身進「亞洲四小龍」；政治上經歷民進黨成立、解嚴、開放探親等重大民主化進程，社會正在劇變，各種情緒在社會上流竄。林懷民這麼形容曾經的80年代：「有一股氣在那，不管是怨氣還是樂觀的氣，大家就是這樣跑來跑去在互相鼓舞。」")]),t._m(5),n("p",[t._v("那段時間，林懷民感受到台灣社會的快速變化，創作出1984年的《春之祭禮・台北一九八四》，背幕上投影著代表工業化的怪手、推土機、鏟平的老厝和新建的高樓，舞者在高樓前舞著，身影顯得渺小，擠壓、交疊的肢體，彷彿被後方的怪手吞噬，是林懷民對現代化最深的反思。")]),t._m(6),n("p",[t._v("雲門舞集當時也跟著社會的步調一起高速發展，隨舞團演出愈來愈多，加上林懷民在學校任教的系務壓力，隨之而來的是忙亂、沒有時間停下腳步思考。")]),t._m(7),n("p",[t._v("1988年林懷民毅然決然休團、暫時停下腳步。雲門舞集暫停3年後，他遇到一位計程車司機問他為何停掉雲門，並在他述說種種辛苦後，說「每個行業都很辛苦，但台灣還是需要雲門舞集」。林懷民說，他那時「覺得無比羞愧」，之後重啟舞團。")]),t._m(8),n("p",{ref:"photoWanderers"},[t._v("舞團重啟後，雲門舞集陸續帶給觀眾《九歌》（1993）、《流浪者之歌》（1994），期待《九歌》能帶給台灣人民一些安慰，《流浪者之歌》則能帶來一些安靜的喜悅。")]),t._m(9),n("p",[t._v("20多年前一位計程車司機給了林懷民繼續前行的力量，那麼去年宣布退休後，大家都怎麼說呢？林懷民溫和地笑了：「現在他們都說，林老師，你辛苦了，好好休息。」最後一句話，是用閩南語說的。")])]),t._m(10),n("div",{staticClass:"content__text"},[n("p",[t._v("1997年、解嚴後10年，雲門舞集有了追溯228、白色恐怖的《家族合唱》。台北藝術大學舞蹈系副教授陳雅萍在專文中形容《薪傳》與《家族合唱》可說是雲門台灣史的前後篇，兩支舞隔了20年，都是要喚醒台灣社會共同的記憶。")]),t._m(11),n("p",[t._v("在《家族合唱》裡，林懷民蒐集了近200張老照片，找來各種方言口述歷史，帶台灣人民一起面對經歷苦難的時代。他曾說，《家族合唱》是他不得不編，卻又害怕去看的一齣作品，但他希望一直演，直到觀眾和他自己都不再害怕、不再有悲情，能夠凝眸面對這段歲月。 ")]),t._m(12),n("p",{ref:"photoWatermoon"},[t._v("再之後的《水月》（1998）、以及代表作行草三部曲（行草、松煙、狂草），則反映林懷民感受到的「精緻台灣」。「對我來說，《家族合唱》是台灣，《水月》也是台灣」，林懷民說，1998年的台灣生活已經漸走向中產、精緻，有愛樂電台也有誠品書店，社會已經不一樣了。")])]),t._m(13),t._m(14),n("h3",{staticClass:"content__subtitle"},[t._v("能「ㄍㄧㄥ」45年的原因")]),t._m(15),t._m(16)])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"content__title content__title--dark content__title--photo-page"},[t._v("45年來"),n("br"),t._v("努力實踐「懷民」")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__quote-wrapper content__quote-wrapper--photo-page"},[n("blockquote",{staticClass:"content__quote"},[t._v("我看到舞作裡對台灣的愛，跟對台灣的關心，覺得跳這個好像更有意義。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--photo-page"},[t._v("雲門舞集助理藝術總監 李靜君")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"content__subtitle"},[t._v("苦難228和精緻生活"),n("br"),t._v("都是台灣")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__quote-wrapper content__quote-wrapper--photo-page"},[n("blockquote",{staticClass:"content__quote"},[t._v("我也在這個生活裡，所以我後來的東西都是比較美學的。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--photo-page"},[t._v("林懷民")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text"},[n("p",[t._v("1997年做談228、白色恐怖的《家族合唱》，隔年做精緻抽象的《水月》，林懷民也曾被疑問是否背棄什麼，但他認為，兩個作品只是反映不同時代的台灣。「一切要泛政治化嗎？一定要分左右前後嗎？」大家要這樣分，就變成這種局面，「但都不是，藝術與生活而已。」")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text"},[n("p",[t._v("採訪當天，窗外的雲門劇場園區傳來遊客朗笑，林懷民凝神諦聽，說這樣很好，有時他編舞遇到小難關，就去下面走走，當看到訪客怡然自在、開心跟他說謝謝，是他動力來源。")]),n("p",[n("br")]),n("p",[t._v("從林懷民創辦雲門以來，用他自己的話說，「從第一天就很疲累」。一ㄍㄧㄥ45年，林懷民放不了自己，也放不了別人，與他緊密工作過的人，都看過他時時刻刻全身繃緊到血脈賁張、張牙舞爪的樣子，讓大家膽顫心驚之餘，還暗暗祈禱他別心臟病發。 ")]),n("p",[n("br")]),n("p",[t._v("但林懷民不曾因為疲累而放棄。觀衆看的開心、讓藝術服務人群，是林懷民成立雲門舞集最大的期待。回首雲門舞集45年時光，林懷民說，雲門的目光從不看向歐美劇場，「我們看的是老百姓，」他很希望雲門舞集的作品，能夠帶給台灣的老百姓一點點快樂、安靜的時光。")]),n("p",[n("br")]),n("p",[t._v("所以雲門舞集從1990年代開始，每年一定會到各地戶外公演，讓作品走出劇院、走進人民的生活，至今23年不輟。戶外廣場上每個觀眾感受和理解到的都不同，但只要在舞者演出的那段時間，觀眾能享受演出，露出一抹微笑或獲得短暫平靜，就是林懷民繼續下去的力量。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__quote-wrapper content__quote-wrapper--photo-page content__quote-wrapper--last"},[n("blockquote",{staticClass:"content__quote"},[t._v("我個人跟雲門何其幸運，能看到大家對我們努力的結果，有比較好的、正面的回饋，這樣的對話非常重要。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--photo-page"},[t._v("林懷民")])])}],z={name:"PhotoPageContent",data(){return{marginTop:148,startScrollTime:new Date}},created(){window.addEventListener("scroll",()=>{const t=new Date;t-this.startScrollTime<200||(window.pageYOffset>=this.$refs.photoWatermoon.offsetTop-this.marginTop?this.$parent.photoName="watermoon":window.pageYOffset>=this.$refs.photoWanderers.offsetTop-this.marginTop?this.$parent.photoName="wanderers":window.pageYOffset>=this.$refs.photoLegacy.offsetTop-this.marginTop?this.$parent.photoName="legacy":this.$parent.photoName="",this.startScrollTime=t)})}},I=z,V=(n("a38d"),Object(u["a"])(I,W,H,!1,null,null,null));V.options.__file="PhotoPageContent.vue";var A=V.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"content content--dark"},[o("h2",{staticClass:"content__title content__title--dark"},[t._v("45年來"),o("br"),t._v("努力實踐「懷民」")]),o("div",{staticClass:"content__text"},[o("p",[t._v("林懷民父親是台灣首任嘉義縣縣長及交通部、內政部部長林金生，從小叮囑他「要貢獻社會」，「懷民」名字也因此而來。雖然他一路抗拒，最終投入5歲起著迷的舞蹈，成立雲門卻仍滿載社會使命：台灣要有自己的舞團、要做跟西方不一樣的舞，要跳到學校、跳到社區，跳舞給台灣人看。")]),o("p",[o("br")]),o("p",[t._v("雲門舞集成立之時，正值台灣國際外交處境的艱困期，1971年台灣退出聯合國、1973年雲門舞集即成立。 在那充滿熱血救國口號的1970年代，林懷民說，他們一開始就有一大票人，都是像他一樣在光復後出生的「光復仔」，例如蔣勳、奚淞、賴德和、張照堂等人，「個人的力量是不夠的，才華是有限的，一定要『群組』、合起來做事情。」")]),o("p",[o("br")]),o("p",[t._v("也因為這樣的情感與時代背景，有了描繪先人移民奮鬥艱辛、充滿壓抑爆發力的舞蹈史詩《薪傳》（1978）。距離40年後的今天回頭看，林懷民形容那時舞者的身體有一鼓「壓抑的爆發力」，身體有障礙、不像現在的舞者肢體如此流暢，但正是這些有點生硬、卻力道強悍的舞蹈動作，激勵了無數台灣人心。")])]),o("figure",{staticClass:"content__photo-wrapper content__photo-wrapper--dark"},[o("img",{staticClass:"content__photo",attrs:{src:n("7e59"),alt:""}}),o("figcaption",{staticClass:"content__photo-caption content__photo-caption--dark"},[t._v("圖說預留的位置 / 誰誰 攝影")])]),o("div",{staticClass:"content__text"},[o("p",[t._v("「我只是一個愛跳舞的小孩，沒有學太多舞就來到雲門，因為看到一個舞叫《薪傳》。」在舞團超過30年、現任助理藝術總監的李靜君回憶，當時她只是個16、17歲的年輕女孩，看完《薪傳》後感動到連鼓掌都忘了，整個人像傻掉一樣，毅然決然放棄原本想跳的芭蕾舞，轉而來到雲門舞集，一待至今。")])]),o("div",{staticClass:"content__quote-wrapper"},[o("blockquote",{staticClass:"content__quote"},[t._v("我看到舞作裡對台灣的愛，跟對台灣的關心，覺得跳這個好像更有意義。")]),o("p",{staticClass:"content__quote-speaker"},[t._v("雲門舞集助理藝術總監 李靜君")])]),o("h3",{staticClass:"content__subtitle"},[t._v("風起雲湧的1980年代")]),o("div",{staticClass:"content__text"},[o("p",[t._v("1980年代，台灣從農業社會急速轉型為工商業社會，在這10年間，經濟上台灣快速起飛、擠身進「亞洲四小龍」；政治上經歷民進黨成立、解嚴、開放探親等重大民主化進程，社會正在劇變，各種情緒在社會上流竄。林懷民這麼形容曾經的80年代：「有一股氣在那，不管是怨氣還是樂觀的氣，大家就是這樣跑來跑去在互相鼓舞。」")]),o("p",[o("br")]),o("p",[t._v("那段時間，林懷民感受到台灣社會的快速變化，創作出1984年的《春之祭禮・台北一九八四》，背幕上投影著代表工業化的怪手、推土機、鏟平的老厝和新建的高樓，舞者在高樓前舞著，身影顯得渺小，擠壓、交疊的肢體，彷彿被後方的怪手吞噬，是林懷民對現代化最深的反思。")]),o("p",[o("br")]),o("p",[t._v("雲門舞集當時也跟著社會的步調一起高速發展，隨舞團演出愈來愈多，加上林懷民在學校任教的系務壓力，隨之而來的是忙亂、沒有時間停下腳步思考。")]),o("p",[o("br")]),o("p",[t._v("1988年林懷民毅然決然休團、暫時停下腳步。雲門舞集暫停3年後，他遇到一位計程車司機問他為何停掉雲門，並在他述說種種辛苦後，說「每個行業都很辛苦，但台灣還是需要雲門舞集」。林懷民說，他那時「覺得無比羞愧」，之後重啟舞團。")]),o("p",[o("br")]),o("p",[t._v("舞團重啟後，雲門舞集陸續帶給觀眾《九歌》（1993）、《流浪者之歌》（1994），期待《九歌》能帶給台灣人民一些安慰，《流浪者之歌》則能帶來一些安靜的喜悅。")])]),o("figure",{staticClass:"content__photo-wrapper content__photo-wrapper--dark"},[o("img",{staticClass:"content__photo",attrs:{src:n("3101"),alt:""}}),o("figcaption",{staticClass:"content__photo-caption content__photo-caption--dark"},[t._v("圖說預留的位置 / 誰誰 攝影")])]),o("div",{staticClass:"content__text"},[o("p",[t._v("20多年前一位計程車司機給了林懷民繼續前行的力量，那麼去年宣布退休後，大家都怎麼說呢？林懷民溫和地笑了：「現在他們都說，林老師，你辛苦了，好好休息。」最後一句話，是用閩南語說的。")])]),o("h3",{staticClass:"content__subtitle"},[t._v("苦難228和精緻生活"),o("br"),t._v("都是台灣")]),o("div",{staticClass:"content__text"},[o("p",[t._v("1997年、解嚴後10年，雲門舞集有了追溯228、白色恐怖的《家族合唱》。台北藝術大學舞蹈系副教授陳雅萍在專文中形容《薪傳》與《家族合唱》可說是雲門台灣史的前後篇，兩支舞隔了20年，都是要喚醒台灣社會共同的記憶。")]),o("p",[o("br")]),o("p",[t._v("在《家族合唱》裡，林懷民蒐集了近200張老照片，找來各種方言口述歷史，帶台灣人民一起面對經歷苦難的時代。他曾說，《家族合唱》是他不得不編，卻又害怕去看的一齣作品，但他希望一直演，直到觀眾和他自己都不再害怕、不再有悲情，能夠凝眸面對這段歲月。 ")]),o("p",[o("br")]),o("p",[t._v("再之後的《水月》（1998）、以及代表作行草三部曲（行草、松煙、狂草），則反映林懷民感受到的「精緻台灣」。「對我來說，《家族合唱》是台灣，《水月》也是台灣」，林懷民說，1998年的台灣生活已經漸走向中產、精緻，有愛樂電台也有誠品書店，社會已經不一樣了。")])]),o("div",{staticClass:"content__quote-wrapper"},[o("blockquote",{staticClass:"content__quote"},[t._v("我也在這個生活裡，所以我後來的東西都是比較美學的。")]),o("p",{staticClass:"content__quote-speaker"},[t._v("林懷民")])]),o("figure",{staticClass:"content__photo-wrapper content__photo-wrapper--dark"},[o("img",{staticClass:"content__photo",attrs:{src:n("9680"),alt:""}}),o("figcaption",{staticClass:"content__photo-caption content__photo-caption--dark"},[t._v("圖說預留的位置 / 誰誰 攝影")])]),o("div",{staticClass:"content__text"},[o("p",[t._v("1997年做談228、白色恐怖的《家族合唱》，隔年做精緻抽象的《水月》，林懷民也曾被疑問是否背棄什麼，但他認為，兩個作品只是反映不同時代的台灣。「一切要泛政治化嗎？一定要分左右前後嗎？」大家要這樣分，就變成這種局面，「但都不是，藝術與生活而已。」")])]),o("h3",{staticClass:"content__subtitle"},[t._v("能「ㄍㄧㄥ」45年的原因")]),o("div",{staticClass:"content__text"},[o("p",[t._v("採訪當天，窗外的雲門劇場園區傳來遊客朗笑，林懷民凝神諦聽，說這樣很好，有時他編舞遇到小難關，就去下面走走，當看到訪客怡然自在、開心跟他說謝謝，是他動力來源。")]),o("p",[o("br")]),o("p",[t._v("從林懷民創辦雲門以來，用他自己的話說，「從第一天就很疲累」。一ㄍㄧㄥ45年，林懷民放不了自己，也放不了別人，與他緊密工作過的人，都看過他時時刻刻全身繃緊到血脈賁張、張牙舞爪的樣子，讓大家膽顫心驚之餘，還暗暗祈禱他別心臟病發。 ")]),o("p",[o("br")]),o("p",[t._v("但林懷民不曾因為疲累而放棄。觀衆看的開心、讓藝術服務人群，是林懷民成立雲門舞集最大的期待。回首雲門舞集45年時光，林懷民說，雲門的目光從不看向歐美劇場，「我們看的是老百姓，」他很希望雲門舞集的作品，能夠帶給台灣的老百姓一點點快樂、安靜的時光。")]),o("p",[o("br")]),o("p",[t._v("所以雲門舞集從1990年代開始，每年一定會到各地戶外公演，讓作品走出劇院、走進人民的生活，至今23年不輟。戶外廣場上每個觀眾感受和理解到的都不同，但只要在舞者演出的那段時間，觀眾能享受演出，露出一抹微笑或獲得短暫平靜，就是林懷民繼續下去的力量。")])]),o("div",{staticClass:"content__quote-wrapper content__quote-wrapper--last"},[o("blockquote",{staticClass:"content__quote"},[t._v("我個人跟雲門何其幸運，能看到大家對我們努力的結果，有比較好的、正面的回饋，這樣的對話非常重要。")]),o("p",{staticClass:"content__quote-speaker"},[t._v("林懷民")])])])}],X={name:"ContentDark"},G=X,K=(n("65ae"),Object(u["a"])(G,J,B,!1,null,null,null));K.options.__file="ContentDark.vue";var Q=K.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"content"},[n("div",{staticClass:"content-wrapper"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),n("h2",{staticClass:"content__title content__title--light"},[t._v("退休與算命一席話有關")]),t._m(8),t._m(9),t._m(10),n("h2",{staticClass:"content__title content__title--light"},[t._v("期待台灣從「我」變成「我們」")]),t._m(11),n("div",{staticClass:"content__quote-wrapper"},[t.isMobileSize?n("blockquote",{staticClass:"content__quote content__quote--light"},[t._v("做出什麼事呢？"),n("br"),t._v("小事"),n("br"),t._v("但小事累積後就可能變成比較有規模的大事。")]):n("blockquote",{staticClass:"content__quote content__quote--light"},[t._v("做出什麼事呢？小事，但小事累積後就可能變成比較有規模的大事。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--light"},[t._v("林懷民")])])])])},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"content__title content__title--light"},[t._v("永遠都在補課的"),n("br"),t._v("難題")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("雲門園區內蓬勃花木中，有棵林懷民母親親手培育送給兒子的老梅樹，跟著雲門從燒毀的舊排練場到今日的新園區，林懷民每次談到此樹，總顯深情，說起已逝的父母，卻是滿滿的悔憾。這些悔憾，讓他至今每次旅行都帶著父母的照片在旅館供起來，對著他們說話，大大小小的記憶都是不捨。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__quote-wrapper"},[n("blockquote",{staticClass:"content__quote content__quote--light"},[t._v("如何陪伴老去的父母是人生最大的課題，我到今天好像還在補課，可是統統來不及。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--light"},[t._v("林懷民")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("林懷民回憶，有次他應邀去歐洲導演，爸媽來看首演，之後他帶他們去歐洲玩，由於媽媽堅持省錢，三人擠一間房，現在回想充滿遺憾，「我後來去演出，人家都給我住很好的套房，我為什麼就不能讓他們住套房？」")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"content__photo-wrapper content__photo-wrapper--light"},[o("img",{staticClass:"content__photo",attrs:{src:n("e0c4"),alt:""}}),o("figcaption",{staticClass:"content__photo-caption content__photo-caption--light"},[t._v("圖說預留的位置 / 誰誰 攝影")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("又譬如，爸爸過世後，林懷民總在周六陪媽媽，周日由弟弟陪。有年林懷民弟弟出國，他周六在台中演完，準備周日回家，先打電話問「媽媽您好嗎」，聽到媽媽答「一個人吃飯哪有什麼好？」他聽到簡直快瘋掉，趕快衝回家。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__quote-wrapper"},[n("blockquote",{staticClass:"content__quote content__quote--light"},[t._v("我們在年輕時，不知道老人家的寂寞；我到60歲知道一些事情，往往是我希望40歲知道的。")]),n("p",{staticClass:"content__quote-speaker content__quote-speaker--light"},[t._v("林懷民")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("林懷民2002年執導的歌劇《托斯卡》，明年將重新演出，背後也有段深刻的母子記憶。林懷民說，他第一次知道《托斯卡》中的名曲〈為了藝術為了愛〉，就是四、五歲時，媽媽放78轉老唱片給他聽，還教他認日文字「為了藝術為了愛」。")]),n("p",[n("br")]),n("p",[t._v("後來林懷民版《托斯卡》上演，媽媽正在住院，也興沖沖來看。上半場結束，大家想該聽醫生說的9點要回家，媽媽卻抵死不回，說要看劇中的托斯卡怎麼跳下來，但大家都不大敢不尊重醫生的意思，終說服媽媽坐輪椅回家。")]),n("p",[n("br")]),n("p",[t._v("「我好後悔那時為什麼不讓她看？看完了，明天再繼續生病也可以。」林懷民建議天下兒女，在過了一條線後，別太在意醫生說什麼可以吃、什麼不可以吃，「有時就讓老人家吃了吧，看是要活得很長很辛苦，還是讓他過癮一下？」")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("去年林懷民預告2019年退休，屆時歲數是72歲——傳言中他兩次批命，對方都指將遭大限的年齡。採訪時，我們拐著彎問林懷民預告用意，沒想到林懷民丟出直球：「是要問72歲的事對不對？我覺得，我可以不相信相命的說什麼，可是要尊敬，既然大家都說我72歲要死，我就要把它當一件事。」")]),n("p",[n("br")]),n("p",[t._v("林懷民說，這說法於他個人不重要，但對團而言重要。「如果有一天我突然不來上班，絕對有場大混亂」，為了舞團，他必須尊敬這說法。")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"content__photo-wrapper content__photo-wrapper--light"},[o("img",{staticClass:"content__photo",attrs:{src:n("7925"),alt:""}}),o("figcaption",{staticClass:"content__photo-caption content__photo-caption--light"},[t._v("圖說預留的位置 / 誰誰 攝影")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("林懷民退休前最後一齣舞作《關於島嶼》裡有一段金剛經偈語：「一切有為法／如夢幻泡影／如露亦如電／應作如是觀」，反映著林懷民的生死觀。林懷民認為，夢幻泡影是人世間的必然，「你覺得你是例外嗎？沒有例外。」林懷民說得凜然，彷彿直視生死。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content__text content__text--light"},[n("p",[t._v("林懷民能夠坦率面對自己的生死，但對於今天的台灣，他語中卻流露出憂心與期許。")]),n("p",[n("br")]),n("p",[t._v("林懷民說，長年以來，大家常說是哪個政黨、政客，讓台灣變成現在這個樣子，但在這同時，「我們」明明也讓這些事情發生。他認為，台灣現在不論好或不好，「都是我們的共業」。")]),n("p",[n("br")]),n("p",[t._v("在林懷民車禍後唯一作品、也是最後舞作《關於島嶼》中，舞者從島嶼初生蓬勃舞至相鬥幻滅，末了倏地打亮的全白舞台，猶如曹雪芹《紅樓夢》尾聲「落了片白茫茫大地真乾淨」，令人警醒美麗島的榮枯更迭，是否就如肉身易碎，只是場黃梁大夢？")]),n("p",[n("br")]),n("p",[t._v("但「光復仔」林懷民的救國情懷，其實跟過往一樣強悍。「台灣沒有悲觀的本錢。」林懷民說，必須去面對任何可能性，「面對了這個可能性，你就有很長的路」；其他口水對立，都可以假裝不存在，「就去做應該做的事，批評沒有用。」")]),n("p",[n("br")]),n("p",[t._v("林懷民感嘆，台灣一直花太多時間做各種政治分類，大家都誓不兩立，「3個人就有兩派或三派」。像雲門5歲做演繹自「唐山過台灣」歷史的《薪傳》，隔年做《廖添丁》，都源於當時社會的互動與影響，但就在同個時空，被不同人說是獨派或統派。")]),n("p",[n("br")]),n("p",[t._v("「來來去去的頻繁的選舉，把大家的格局做小了！」林懷民說，如果做《廖添丁》是獨，那蓋廖添丁廟的人就是台獨嗎？媽祖是從大陸來的，那去媽祖廟拜的人，就是統派嗎？從媒體開始，各界都各為其主，大家都把格局做小了。")]),n("p",[n("br")]),n("p",[t._v("「心胸狹小，路會愈走愈窄。」林懷民認為，台灣必須擁有更大的格局，才能真正自處。他也期待現在的年輕人，能撐出一股氣來，聚集成一大票人改變社會，「『我』當然很渺小，但當『我』變成『我們』時，就能做出一點事情來。」")])])}],Z={name:"ContentLight",mixins:[l]},tt=Z,et=(n("de36"),Object(u["a"])(tt,R,U,!1,null,null,null));et.options.__file="ContentLight.vue";var nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"finalScene",staticClass:"final-scene"},[n("Youtube")],1)},at=[],it={name:"FinalScene",components:{Youtube:$},data(){return{root:document.documentElement,isTextFadeIn:!1,isTextFadeOut:!1}},created(){window.addEventListener("scroll",this.finalSceneFade)},methods:{finalSceneFade(){window.pageYOffset+this.root.clientHeight>=this.root.scrollHeight-8&&(this.isTextFadeIn=!0)},textFadeInEnd(){this.isTextFadeOut=!0}}},rt=it,st=(n("d8e4"),Object(u["a"])(rt,ot,at,!1,null,null,null));st.options.__file="FinalScene.vue";var ct=st.exports,lt={name:"app",mixins:[l],components:{Cover:v,OpeningLine:C,Youtube:$,FixedPhotoPage:D,PhotoPageContent:A,ContentDark:Q,ContentLight:nt,FinalScene:ct},data(){return{windowHeight:document.documentElement.clientHeight,bodyClass:document.body.classList,root:document.documentElement,resizeTimer:null,scrollTimer:null,canScroll:!0,pageScrollY:0,touchStartX:0,touchStartY:0,photoName:"",beforeScrollY:window.pageYOffset}},created(){window.addEventListener("beforeunload",this.beforeunloadHandler),window.addEventListener("resize",this.resizeHandler),window.addEventListener("scroll",this.fixedPageMove)},computed:{isFixedPage(){return this.isMobileSize?"ContentDark":"FixedPhotoPage"},pageTransform(){return{transform:`translateY(${this.pageScrollY}px)`}}},methods:{beforeunloadHandler(){window.scrollTo({top:0,behavior:"instant"})}}},_t=lt,pt=(n("5c0b"),Object(u["a"])(_t,a,i,!1,null,null,null));pt.options.__file="App.vue";var ut=pt.exports;n("fa6d"),n("2b57");n("8386"),o["a"].config.productionTip=!1,new o["a"]({render:t=>t(ut)}).$mount("#app");const dt=document.createElement("script");dt.src="https://www.youtube.com/iframe_api";const vt=document.getElementsByTagName("script")[0];vt.parentNode.insertBefore(dt,vt)},"5c0b":function(t,e,n){"use strict";var o=n("2856"),a=n.n(o);a.a},"65ae":function(t,e,n){"use strict";var o=n("0283"),a=n.n(o);a.a},"70a3":function(t,e,n){},7925:function(t,e,n){t.exports=n.p+"img/mob_huimin.88d2a9f1.jpg"},"7e59":function(t,e,n){t.exports=n.p+"img/mob_legacy.5e5be491.jpg"},8386:function(t,e,n){"use strict";n.r(e);n("4917");!function(){if("undefined"!=typeof window){var t=window.navigator.userAgent.match(/Edge\/(\d{2})\./),e=!!t&&parseInt(t[1],10)>=16;if("objectFit"in document.documentElement.style!=0&&!e)return void(window.objectFitPolyfill=function(){return!1});var n=function(t){var e=window.getComputedStyle(t,null),n=e.getPropertyValue("position"),o=e.getPropertyValue("overflow"),a=e.getPropertyValue("display");n&&"static"!==n||(t.style.position="relative"),"hidden"!==o&&(t.style.overflow="hidden"),a&&"inline"!==a||(t.style.display="block"),0===t.clientHeight&&(t.style.height="100%"),-1===t.className.indexOf("object-fit-polyfill")&&(t.className=t.className+" object-fit-polyfill")},o=function(t){var e=window.getComputedStyle(t,null),n={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var o in n)e.getPropertyValue(o)!==n[o]&&(t.style[o]=n[o])},a=function(t){var e=t.parentNode;n(e),o(t),t.style.position="absolute",t.style.height="100%",t.style.width="auto",t.clientWidth>e.clientWidth?(t.style.top="0",t.style.marginTop="0",t.style.left="50%",t.style.marginLeft=t.clientWidth/-2+"px"):(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",t.style.top="50%",t.style.marginTop=t.clientHeight/-2+"px")},i=function(t){if(void 0===t)t=document.querySelectorAll("[data-object-fit]");else if(t&&t.nodeName)t=[t];else{if("object"!=typeof t||!t.length||!t[0].nodeName)return!1;t=t}for(var n=0;n<t.length;n++)if(t[n].nodeName){var o=t[n].nodeName.toLowerCase();"img"!==o||e?"video"===o&&(t[n].readyState>0?a(t[n]):t[n].addEventListener("loadedmetadata",function(){a(this)})):t[n].complete?a(t[n]):t[n].addEventListener("load",function(){a(this)})}return!0};document.addEventListener("DOMContentLoaded",function(){i()}),window.addEventListener("resize",function(){i()}),window.objectFitPolyfill=i}}()},8841:function(t,e,n){},"922d":function(t,e,n){"use strict";var o=n("8841"),a=n.n(o);a.a},9680:function(t,e,n){t.exports=n.p+"img/mob_watermoon.b29348bb.jpg"},a38d:function(t,e,n){"use strict";var o=n("c28a"),a=n.n(o);a.a},adb3:function(t,e,n){t.exports=n.p+"media/web_video.be94dad0.mp4"},c28a:function(t,e,n){},c525:function(t,e,n){},cbf0:function(t,e,n){t.exports=n.p+"img/web_wanderers.2e972c65.jpg"},d8e4:function(t,e,n){"use strict";var o=n("0138"),a=n.n(o);a.a},de36:function(t,e,n){"use strict";var o=n("c525"),a=n.n(o);a.a},e0c4:function(t,e,n){t.exports=n.p+"img/mob_childhood.74caefd1.jpg"},f2d7:function(t,e,n){t.exports=n.p+"img/web_watermoon.4d3a3e52.jpg"}});
//# sourceMappingURL=app.7c2d36f9.js.map