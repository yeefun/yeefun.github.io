(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Tl1Y:function(e,t,n){},"l/wD":function(e,t,n){},pcw8:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return s}));var a=n("q1tI"),c=n("IP2g"),l=n("wHSu"),r=n("VXBa"),o=n("H8eV"),u=n("uP4m"),s=(n("Tl1Y"),"2575012596");t.default=function(e){var t=e.data,n=e.location,s=t.allMarkdownRemark.edges,i=Object(a.useState)(""),m=i[0],d=i[1],p=Object(a.useState)(!0),f=p[0],E=p[1],w=Object(a.useCallback)(s.filter((function(e){var t=e.node,n=t.frontmatter,a=t.rawMarkdownBody,c=n.title,l=m.toLocaleLowerCase();return!(f||!a.toLocaleLowerCase().includes(l))||c.toLocaleLowerCase().includes(l)})),[m,f]);return a.createElement(r.a,null,a.createElement(o.a,{title:"Search",description:"🔎...",pathname:n.pathname}),a.createElement("div",{id:"Search"},a.createElement("div",{className:"search-inner-wrap"},a.createElement("div",{className:"input-wrap"},a.createElement(c.a,{icon:l.i}),a.createElement("input",{type:"text",name:"search",id:"searchInput",value:m,placeholder:"Search",autoComplete:"off",autoFocus:!0,onChange:function(e){d(e.currentTarget.value)}}),a.createElement("div",{className:"search-toggle"},a.createElement("span",{style:{opacity:f?.8:.15},onClick:function(){E(!0)}},"in Title"),a.createElement("span",{style:{opacity:f?.15:.8},onClick:function(){E(!1)}},"in Title+Content"))),""===m||w.length?null:a.createElement("span",{className:"no-result"},"No search results"),a.createElement(u.a,{posts:""===m?s:w}))))}},uP4m:function(e,t,n){"use strict";var a=n("t8Zj"),c=n("q1tI"),l=n("Wbzz"),r=n("DzJC"),o=n.n(r);n("l/wD");function u(e){return!e.includes("0001")}t.a=function(e){var t=e.posts,n=Object(c.useState)(10),r=n[0],s=n[1],i=Object(c.useState)([]),m=i[0],d=i[1],p=Object(c.useMemo)((function(){return t.sort((function(e,t){var n=e.node.frontmatter,a=t.node.frontmatter,c=new Date(u(n.update)?n.update:n.date),l=new Date(u(a.update)?a.update:a.date);return c<l?1:c>l?-1:0})),t}),[t]),f=Object(c.useCallback)(o()((function(){window.outerHeight>document.querySelector(".post-list").getBoundingClientRect().bottom&&s((function(e){return e>=p.length?e:e+10}))}),250),[p]),E=Object(c.useCallback)((function(e){var t=e.map((function(e){var t=e.node,n=t.fields,a=t.frontmatter,r=n.slug,o=a.date,s=a.title,i=a.description,m=a.tags,d=a.update;u(d)||(d=null);var p=m.map((function(e){if("undefined"!==e)return c.createElement("div",{key:r+"-"+e,className:"tag"},c.createElement("span",null,c.createElement(l.Link,{to:"/tags#"+e},"#"+e)))}));return c.createElement("li",{key:r,className:"post"},c.createElement("article",null,c.createElement("h1",null,c.createElement(l.Link,{to:r},s)),c.createElement("div",{className:"info"},c.createElement("div",{className:"date-wrap"},c.createElement("span",{className:"date"},o),d?c.createElement("span",{className:"update"}," ","(Updated: "+d+")"):null),m.length&&"undefined"!==m[0]?c.createElement("span",{className:"info-dot"},"·"):null,c.createElement("ul",{className:"tag-list"},p)),c.createElement(l.Link,{to:r,className:"excerpt"},c.createElement("p",null,i))))}));d((function(e){return[].concat(Object(a.a)(e),Object(a.a)(t))}))}),[]);return Object(c.useEffect)((function(){r>0&&10!==r&&E(p.slice(m.length,r))}),[r]),Object(c.useEffect)((function(){return m.length&&d([]),s((function(e){return 10===e&&E(p.slice(0,10)),10})),window.addEventListener("scroll",f),function(){window.removeEventListener("scroll",f)}}),[p]),c.createElement("div",{className:"post-list"},c.createElement("ul",null,m))}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-534538228b9b3c1f6642.js.map