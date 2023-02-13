"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9290],{3905:(t,n,e)=>{e.d(n,{Zo:()=>i,kt:()=>A});var r=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)e=s[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)e=s[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var g=r.createContext({}),p=function(t){var n=r.useContext(g),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},i=function(t){var n=p(t.components);return r.createElement(g.Provider,{value:n},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,s=t.originalType,g=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),d=p(e),c=a,A=d["".concat(g,".").concat(c)]||d[c]||m[c]||s;return e?r.createElement(A,o(o({ref:n},i),{},{components:e})):r.createElement(A,o({ref:n},i))}));function A(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var s=e.length,o=new Array(s);o[0]=c;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<s;p++)o[p]=e[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}c.displayName="MDXCreateElement"},1591:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=e(7462),a=(e(7294),e(3905));const s={},o=void 0,l={unversionedId:"CSS/CSS3/transform",id:"CSS/CSS3/transform",title:"transform",description:"transform \u5b57\u9762\u4e0a\u5c31\u662f\u53d8\u5f62\uff0c\u6539\u53d8\u7684\u610f\u601d\u3002\u5728CSS3\u4e2dtransform\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd\uff1a\u79fb\u52a8 translate\uff0c\u7f29\u653escale\uff0c\u65cb\u8f6crotate\uff0c\u7ffb\u8f6cskew\uff0c\u6539\u53d8\u65cb\u8f6c\u8f74\u5fc3\u7b49\u3002",source:"@site/docs/02-CSS/02-CSS3/05-transform.md",sourceDirName:"02-CSS/02-CSS3",slug:"/CSS/CSS3/transform",permalink:"/docs/CSS/CSS3/transform",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8fb9\u6846\u56fe\u7247\uff0c\u8fc7\u6e21",permalink:"/docs/CSS/CSS3/\u8fb9\u6846\u56fe\u7247\uff0c\u8fc7\u6e21"},next:{title:"animation\u52a8\u753b\uff0cWeb\u5b57\u4f53",permalink:"/docs/CSS/CSS3/animation\u52a8\u753b\uff0cWeb\u5b57\u4f53"}},g={},p=[{value:"1\u3001\u5143\u7d20\u7684\u79fb\u52a8\uff1atranslate",id:"1\u5143\u7d20\u7684\u79fb\u52a8translate",level:2},{value:"2\u3001\u7f29\u653e\uff1ascale",id:"2\u7f29\u653escale",level:2},{value:"3\u3001\u65cb\u8f6c\uff1arotate",id:"3\u65cb\u8f6crotate",level:2},{value:"4\u3001\u7ffb\u8f6c\uff1askew",id:"4\u7ffb\u8f6cskew",level:2},{value:"5\u3001\u6539\u53d8\u65cb\u8f6c\u8f74\u5fc3",id:"5\u6539\u53d8\u65cb\u8f6c\u8f74\u5fc3",level:2},{value:"6\u3001\u540c\u65f6\u6dfb\u52a0\u591a\u4e2atransform\u5c5e\u6027\u503c",id:"6\u540c\u65f6\u6dfb\u52a0\u591a\u4e2atransform\u5c5e\u6027\u503c",level:2},{value:"\u6848\u4f8b\uff1a\u65cb\u8f6c\u8f74\u5fc3\u6848\u4f8b",id:"\u6848\u4f8b\u65cb\u8f6c\u8f74\u5fc3\u6848\u4f8b",level:2},{value:"\u6848\u4f8b\uff1a\u56fe\u5f62\u6253\u6563",id:"\u6848\u4f8b\u56fe\u5f62\u6253\u6563",level:2},{value:"\u6848\u4f8b\uff1a\u8131\u6807\u6d41\u76d2\u5b50\u5c45\u4e2d",id:"\u6848\u4f8b\u8131\u6807\u6d41\u76d2\u5b50\u5c45\u4e2d",level:2},{value:"7\u30013d\u4e09\u7ef4\u53d8\u6362",id:"73d\u4e09\u7ef4\u53d8\u6362",level:2},{value:"\u6848\u4f8b\uff1a\u7acb\u65b9\u4f53",id:"\u6848\u4f8b\u7acb\u65b9\u4f53",level:2},{value:"8\u3001\u666f\u6df1/\u900f\u89c6\u6548\u679c",id:"8\u666f\u6df1\u900f\u89c6\u6548\u679c",level:2}],i={toc:p};function d(t){let{components:n,...s}=t;return(0,a.kt)("wrapper",(0,r.Z)({},i,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"transform")," \u5b57\u9762\u4e0a\u5c31\u662f\u53d8\u5f62\uff0c\u6539\u53d8\u7684\u610f\u601d\u3002\u5728CSS3\u4e2dtransform\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd\uff1a\u79fb\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"translate"),"\uff0c\u7f29\u653e",(0,a.kt)("inlineCode",{parentName:"p"},"scale"),"\uff0c\u65cb\u8f6c",(0,a.kt)("inlineCode",{parentName:"p"},"rotate"),"\uff0c\u7ffb\u8f6c",(0,a.kt)("inlineCode",{parentName:"p"},"skew"),"\uff0c\u6539\u53d8\u65cb\u8f6c\u8f74\u5fc3\u7b49\u3002"),(0,a.kt)("h2",{id:"1\u5143\u7d20\u7684\u79fb\u52a8translate"},"1\u3001\u5143\u7d20\u7684\u79fb\u52a8\uff1atranslate"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f5c\u7528\uff1a"),"\u4f7f\u7528transform\u5b9e\u73b0\u5143\u7d20\u7684\u79fb\u52a8 "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/*\u4f7f\u7528transform\u5b9e\u73b0\u5143\u7d20\u7684\u79fb\u52a8 \n1.\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\u5c31\u4ee3\u8868x\u65b9\u5411\n2.\u5982\u679c\u6709\u4e24\u4e2a\u53c2\u6570\u5c31\u4ee3\u8868x/y\u65b9\u5411*/\ntransform: translate(100px);\ntransform: translate(400px,500px);\ntransform: translate(0px,500px);\n\n/*\u6dfb\u52a0\u6c34\u5e73\u6216\u8005\u5782\u76f4\u65b9\u5411\u7684\u79fb\u52a8*/\ntransform:translateX(300px);\ntransform:translateY(300px);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  \u6ce8\u610f\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"  1\u3001\u79fb\u52a8\u662f\u53c2\u7167\u5143\u7d20\u7684\u5de6\u4e0a\u89d2 \uff1b"),(0,a.kt)("p",{parentName:"blockquote"},"  2\u3001\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\u4f1a\u6062\u590d\u5230\u539f\u59cb\u72b6\u6001\u3002")),(0,a.kt)("h2",{id:"2\u7f29\u653escale"},"2\u3001\u7f29\u653e\uff1ascale"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f5c\u7528\uff1a"),"\u5b9e\u73b0\u7f29\u653e\uff08\u53c2\u7167\u5143\u7d20\u7684\u51e0\u4f55\u4e2d\u5fc3\uff09\uff1a1\u6307\u4e0d\u7f29\u653e\uff0c>1.01\u653e\u5927\uff0c  <0.99\u7f29\u5c0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/*\u5b9e\u73b0\u7f29\u653e\uff08\u53c2\u7167\u5143\u7d20\u7684\u51e0\u4f55\u4e2d\u5fc3\uff09\uff1a1\u6307\u4e0d\u7f29\u653e\uff0c>1.01\u653e\u5927  <0.99\u7f29\u5c0f\u3002\n1.\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u5c31\u4ee3\u8868x\u548cy\u65b9\u5411\u90fd\u8fdb\u884c\u76f8\u7b49\u6bd4\u4f8b\u7684\u7f29\u653e\n2.\u5982\u679c\u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u5c31\u4ee3\u8868x/y\u65b9\u5411*/\ntransform: scale(2);\ntransform: scale(2,1);\n/* \u7f29\u653e\u6307\u5b9a\u7684\u65b9\u5411 */\ntransform:scaleX(0.5);\ntransform:scaleY(0.5);\n")),(0,a.kt)("h2",{id:"3\u65cb\u8f6crotate"},"3\u3001\u65cb\u8f6c\uff1arotate"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f5c\u7528\uff1a"),"\u5b9e\u73b0\u5143\u7d20\u7684\u65cb\u8f6c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/*\u53c2\u6570\uff1a\u6b63\u6570\u5c31\u662f\u987a\u65f6\u9488\u65b9\u5411\uff0c\u8d1f\u6570\u5c31\u662f\u9006\u65f6\u9488\u65b9\u5411\u3002*/ \ntransform:rotate(90deg); \n")),(0,a.kt)("h2",{id:"4\u7ffb\u8f6cskew"},"4\u3001\u7ffb\u8f6c\uff1askew"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f5c\u7528\uff1a"),"\u5b9e\u73b0\u5143\u7d20\u7684\u7ffb\u8f6c"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/*\u5982\u679c\u89d2\u5ea6\u4e3a\u6b63\uff0c\u5219\u5f80\u5f53\u524d\u8f74\u7684\u8d1f\u65b9\u5411\u659c\u5207\uff0c\u5982\u679c\u89d2\u5ea6\u4e3a\u8d1f\uff0c\u5219\u5f80\u5f53\u524d\u8f74\u7684\u6b63\u65b9\u5411\u659c\u5207*/\ntransform:skew(-30deg);\n/*\u4e24\u4e2a\u503c\uff0c\u4e00\u4e2a\u5f80x\u65b9\u5411\uff0c\u4e00\u4e2ay\u65b9\u5411*/\ntransform:skew(30deg,-30deg);\n/*\u8bbe\u7f6e\u67d0\u4e2a\u65b9\u5411\u7684\u659c\u5207\u503c*/\n/*transform:skewX(30deg);*/\n/*transform:skewY(30deg);*/\n")),(0,a.kt)("h2",{id:"5\u6539\u53d8\u65cb\u8f6c\u8f74\u5fc3"},"5\u3001\u6539\u53d8\u65cb\u8f6c\u8f74\u5fc3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/*\u8bbe\u7f6e\u65cb\u8f6c\u8f74\u5fc3\n1.\u53c2\u6570\uff1ax y\n2.\u5173\u952e\u5b57\uff1aleft top right bottom center*/\ntransform-origin: left top;\ntransform-origin: 10px 10px;\n")),(0,a.kt)("h2",{id:"6\u540c\u65f6\u6dfb\u52a0\u591a\u4e2atransform\u5c5e\u6027\u503c"},"6\u3001\u540c\u65f6\u6dfb\u52a0\u591a\u4e2atransform\u5c5e\u6027\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/*\u5355\u72ec\u5199\u4e24\u4e2a\u662f\u65e0\u6548\u7684\uff0c\u540e\u9762\u7684\u4f1a\u8986\u76d6\u524d\u9762\u7684*/\ntransform: translateX(700px);\ntransform: rotate(-90deg);\n\n/*\u9700\u8981\u5408\u5e76\u8d77\u6765\u5199*/\ntransform: translateX(700px) rotate(-90deg);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"  \u6ce8\u610f\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"  1\u3001transform \u591a\u4e2a\u5c5e\u6027\u5206\u5f00\u5199\u7684\u8bdd\uff0c\u540e\u9762\u7684\u5c5e\u6027\u4f1a\u8986\u76d6\u524d\u9762\u7684\uff0c\u4e00\u5b9a\u8981\u5408\u5e76\u8d77\u6765\u5199\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"  2\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"transform: rotate(-90deg)  translateX(700px); "),"\u4f1a\u51fa\u95ee\u9898\uff0c\u56e0\u4e3a\u65cb\u8f6c\u4f1a\u5c06\u5750\u6807\u7cfb\u65cb\u8f6c\uff0c\u6240\u4ee5\u5148\u79fb\u52a8\u518d\u65cb\u8f6c\u3002")),(0,a.kt)("h2",{id:"\u6848\u4f8b\u65cb\u8f6c\u8f74\u5fc3\u6848\u4f8b"},"\u6848\u4f8b\uff1a\u65cb\u8f6c\u8f74\u5fc3\u6848\u4f8b"),(0,a.kt)("p",null,"\u6548\u679c\uff1a\u9f20\u6807\u653e\u5728\u56fe\u5f62\u4e0a\uff0c\u56fe\u5f62\u65cb\u8f6c\uff0c\u9f20\u6807\u79fb\u5f00\uff0c\u56fe\u5f62\u56de\u5f52\u539f\u72b6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Document</title>\n    <style>\n        * {\n            padding: 0;\n            margin: 0;\n        }\n        .box {\n            width: 100px;\n            height: 100px;\n            margin: 300px auto;\n            position: relative;\n        }\n        .box > img {\n            width: 100px;\n            height: 100px;\n            position: absolute;\n            transition: transform 1s;\n            transform-origin: 110px -10px;\n        }\n        .box:hover > img:nth-of-type(1) {\n            transform: rotate(60deg);\n        }\n        .box:hover > img:nth-of-type(2) {\n            transform: rotate(120deg);\n        }\n        .box:hover > img:nth-of-type(3) {\n            transform: rotate(180deg);\n        }\n        .box:hover > img:nth-of-type(4) {\n            transform: rotate(240deg);\n        }\n        .box:hover > img:nth-of-type(5) {\n            transform: rotate(300deg);\n        }\n        .box:hover > img:nth-of-type(6) {\n            transform: rotate(360deg);\n        }\n        \n    </style>\n</head>\n<body>\n    <div class="box">\n        <img src="./images/gzh.png">\n        <img src="./images/gzh.png">\n        <img src="./images/gzh.png">\n        <img src="./images/gzh.png">\n        <img src="./images/gzh.png">\n        <img src="./images/gzh.png">\n    </div>\n</body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(8630).Z,width:"408",height:"402"})),(0,a.kt)("h2",{id:"\u6848\u4f8b\u56fe\u5f62\u6253\u6563"},"\u6848\u4f8b\uff1a\u56fe\u5f62\u6253\u6563"),(0,a.kt)("p",null,"\u6548\u679c\uff1a\u9f20\u6807\u653e\u5230\u56fe\u5f62\u4e0a\uff0c\u56fe\u5f62\u6253\u6563\uff0c\u9f20\u6807\u79fb\u5f00\uff0c\u56fe\u5f62\u5f52\u4f4d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Document</title>\n    <style>\n        *{\n            margin: 0;\n            padding: 0;\n        }\n        body {\n            background-color: rgb(110, 84, 226);\n        }\n        .box {\n            width: 500px;\n            height: 100%;\n            margin: 100px auto;\n        }\n        .box > img {\n            transition: transform 1s;\n        }\n        .box:hover > img:nth-of-type(1){\n            transform: translate(-100px, 200px) rotate(30deg);\n        }\n        .box:hover > img:nth-of-type(2){\n            transform: translate(-500px, -50px) rotate(60deg);\n        }\n        .box:hover > img:nth-of-type(3){\n            transform: translate(300px, 10px) rotate(-50deg);\n        }\n        .box:hover > img:nth-of-type(4){\n            transform: translate(600px, 20px) rotate(-90deg);\n        }\n        .box:hover > img:nth-of-type(5){\n            transform: translate(30px, 200px) rotate(90deg);\n        }\n        .box:hover > img:nth-of-type(6){\n            transform: translate(-100px, -200px) rotate(-30deg);\n        }\n        .box:hover > img:nth-of-type(7){\n            transform: translate(-300px, 100px) rotate(-30deg);\n        }\n        .box:hover > img:nth-of-type(8){\n            transform: translate(200px, 250px) rotate(30deg);\n        }\n        .box:hover > img:nth-of-type(9){\n            transform: translate(0, -150px) rotate(-30deg);\n        }\n    </style>\n</head>\n<body>\n    <div class="box">\n        <img src="./images/shield_1_01.png">\n        <img src="./images/shield_1_02.png">\n        <img src="./images/shield_1_03.png">\n        <img src="./images/shield_1_04.png">\n        <img src="./images/shield_1_05.png">\n        <img src="./images/shield_1_06.png">\n        <img src="./images/shield_1_07.png">\n        <img src="./images/shield_1_08.png">\n        <img src="./images/shield_1_09.png">\n    </div>\n</body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(8844).Z,width:"605",height:"436"})),(0,a.kt)("h2",{id:"\u6848\u4f8b\u8131\u6807\u6d41\u76d2\u5b50\u5c45\u4e2d"},"\u6848\u4f8b\uff1a\u8131\u6807\u6d41\u76d2\u5b50\u5c45\u4e2d"),(0,a.kt)("p",null,"\u6211\u4eec\u4e4b\u524d\u4e5f\u5b66\u8fc7\u8131\u6807\u6d41\u76d2\u5b50\u7684\u5c45\u4e2d\u95ee\u9898\uff0c\u5f53\u65f6\u505a\u7684\u662f\u5148\u79fb\u52a8\u7236\u76d2\u5b50\u7684 50%\uff08\u6bd4\u5982\uff1aleft\uff1a50%\uff09\uff0c\u518d\u5f80\u76f8\u53cd\u65b9\u5411\u79fb\u52a8\u5b50\u76d2\u5b50\u7684 50%\uff08\u6bd4\u5982\uff1amargin-left\uff1a100px;\uff09\u3002\u5927\u5bb6\u53ef\u4ee5\u770b\u5230\uff0c\u5b50\u76d2\u5b50\u7684\u79fb\u52a8\u53ea\u80fd\u5199\u5177\u4f53\u7684\u50cf\u7d20\u503c\uff0c\u800c\u4e0d\u80fd\u5199 -50%\u3002\u5982\u679c\u5b50\u76d2\u5b50\u7684\u5927\u5c0f\u6539\u53d8\u4e86\uff0c\u5c31\u9700\u8981\u91cd\u65b0\u8ba1\u7b97\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u4f7f\u7528\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"left: 50%;")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"transform:translate(-50%, -50%);")," \u5c31\u53ef\u4ee5\u89e3\u51b3\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Document</title>\n    <style>\n        .cir {\n            width: 300px;\n            height: 300px;\n            background-color: #ccc;\n            border-radius: 50%;\n            margin: 100px auto;\n            position: relative;\n        }\n        .rec {\n            width: 100px;\n            height: 100px;\n            background-color: blue;\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            /* margin-left: -50px;\n            margin-top: -50px; */\n            transform: translate(-50%, -50%);\n        }\n    </style>\n</head>\n<body>\n    <div class="cir">\n        <div class="rec"></div>\n    </div>\n</body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(9841).Z,width:"238",height:"215"})),(0,a.kt)("h2",{id:"73d\u4e09\u7ef4\u53d8\u6362"},"7\u30013d\u4e09\u7ef4\u53d8\u6362"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/*\u6dfb\u52a0\u4e09\u7ef4\u79fb\u52a8--3D\u79fb\u52a8*/\n/*translate3d(X\u65b9\u5411\u7684\u504f\u79fb\uff0cY\u65b9\u5411\u7684\u504f\u79fb\uff0cZ\u65b9\u5411\u7684\u504f\u79fb)*/\n/*transform: translate3d(400px,0,0);*/\n/*transform: translate3d(400px,400px,0);*/\ntransform: translate3d(0px,0px,400px);\n\n/*\u6dfb\u52a03d\u7f29\u653e*/\n/*scale3d(x\u65b9\u5411\u4e0a\u7684\u7f29\u653e\uff0cy\u65b9\u5411\u7684\u7f29\u653e\uff0cz\u65b9\u5411\u7684\u7f29\u653e)\n>1.01 \u653e\u5927   <0.99 \u7f29\u5c0f*/\ntransform:scale3d(1,1,10);\n\n/*\u6dfb\u52a0\u4e09\u7ef4\u65cb\u8f6c*/\n/*rotate3d(x,y,z,angle):\nx:\u4ee3\u8868x\u8f74\u65b9\u5411\u4e0a\u7684\u4e00\u4e2a\u5411\u91cf\u503c\ny:\u4ee3\u8868y\u8f74\u65b9\u5411\u4e0a\u7684\u4e00\u4e2a\u5411\u91cf\u503c\nz:\u4ee3\u8868z\u8f74\u65b9\u5411\u4e0a\u7684\u4e00\u4e2a\u5411\u91cf\u503c\n330deg\uff1a\u65cb\u8f6c\u7684\u5ea6\u6570*/\ntransform: rotate3d(1,1,1,330deg);\n/*\u6ce8\u610f\uff1a\u5f53\u53ea\u6709\u4e00\u4e2a\u65b9\u5411\u7684\u5411\u91cf\u503c\u7684\u65f6\u5019\uff0c\u6570\u5b57\u5927\u5c0f\u65e0\u6240\u8c13\uff0c\u4f46\u662f\u5f53\u6709\u4e24\u4e2a\u6216\u4e09\u4e2a\u5411\u91cf\u503c\u7684\u65f6\u5019\uff0c\u65cb\u8f6c\u8f74\u5fc3\u4e3a\u4e09\u4e2a\u5411\u91cf\u503c\u5408\u6210\u7684\u4e00\u4e2a\u5411\u91cf\u503c\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0c\u5404\u4e2a\u5411\u91cf\u503c\u7684\u5927\u5c0f\u4f1a\u5bf9\u5408\u6210\u7684\u5411\u91cf\u503c\u7684\u65b9\u5411\u6709\u5f71\u54cd\u3002*/\n")),(0,a.kt)("h2",{id:"\u6848\u4f8b\u7acb\u65b9\u4f53"},"\u6848\u4f8b\uff1a\u7acb\u65b9\u4f53"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Document</title>\n    <style>\n        * {\n            margin: 0;\n            padding: 0;\n        }\n        .cube {\n            width: 100px;\n            height: 100px;\n            position: relative;\n            margin: 100px auto;\n            /* \u65cb\u8f6c\u4e00\u5b9a\u7684\u89d2\u5ea6\u4fbf\u4e8e\u67e5\u770b */\n            transform: rotate3d(1,1,0,30deg);\n            /* \u4fdd\u5b58\u53d8\u6362\u4e4b\u540e\u7684\u6548\u679c \uff08\u52a0\u5728\u7236\u5143\u7d20\u8eab\u4e0a\uff09*/\n            transform-style: preserve-3d;\n\n        }\n        .cube > div {\n            width: 100px;\n            height: 100px;\n            position: absolute;\n            opacity: 0.5;\n        }\n        .front {\n            background-color: red;\n            transform: translateZ(50px);\n        }\n        .back {\n            background-color: orange;\n            transform: translateZ(-50px) rotateY(180deg);\n        }\n        .left{\n            background-color: yellow;\n            transform: translateX(-50px) rotateY(-90deg);\n        }\n        .right {\n            background-color: green;\n            transform: translateX(50px) rotateY(90deg);\n        }\n        .top{\n            background-color: blue;\n            transform: translateY(-50px) rotateX(90deg);\n        }\n        .bottom{\n            background-color: purple;\n            transform: translateY(50px) rotateX(-90deg);\n        }\n    </style>\n</head>\n<body>\n    <div class="cube">\n        <div class="front">front</div>\n        <div class="back">back</div>\n        <div class="left">left</div>\n        <div class="right">right</div>\n        <div class="top">top</div>\n        <div class="bottom">bottom</div>\n    </div>\n</body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:e(4118).Z,width:"288",height:"279"})),(0,a.kt)("h2",{id:"8\u666f\u6df1\u900f\u89c6\u6548\u679c"},"8\u3001\u666f\u6df1/\u900f\u89c6\u6548\u679c"),(0,a.kt)("p",null,"\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"perspective:none/0;"),"\u65f6\uff0c\u76f8\u5f53\u4e8e\u6ca1\u6709\u8bbe\u7f6e\uff0c\u6ca1\u6709\u8bbe\u7f6e\u7684\u65f6\u5019\uff0c\u89c6\u89d2\u4f4d\u4e8e3D\u7684\u51e0\u4f55\u4e2d\u5fc3\u4f4d\u7f6e\uff0c\u76f8\u5f53\u4e8e\u5728\n\u76d2\u5b50\u5185\u90e8\u5f80\u5916\u770b;"),(0,a.kt)("p",null,"\u5f53perspective\u7684\u503c\u5927\u4e8e\u4e2d\u5fc3\u5230\u5404\u4e2a\u5e73\u9762\u7684\u8ddd\u79bb\u65f6\uff0c\u76f8\u5f53\u4e8e\u51fa\u4e86\u76d2\u5b50\u770b\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/*\u9ed8\u8ba4\u65e0\u900f\u89c6\u6548\u679c*/\nperspective: 0px;\n\n/*perspective-origin\u5c5e\u6027\u89c4\u5b9a\u4e86\u955c\u5934\u5728\u5e73\u9762\u4e0a\u7684\u4f4d\u7f6e\u3002\u9ed8\u8ba4\u662f\u653e\u5728\u5143\u7d20\u7684\u4e2d\u5fc3*/\nperspective-origin: 0px 0px;\n\n/*transform-style\uff1a\u4f7f\u88ab\u8f6c\u6362\u7684\u5b50\u5143\u7d20\u4fdd\u7559\u5176 3D \u8f6c\u6362(\u9700\u8981\u8bbe\u7f6e\u5728\u7236\u5143\u7d20\u4e2d)\nflat: \u4e0d\u4fdd\u75593d\u8f6c\u6362\u7ed3\u679c\npreserve-3d\uff1a\u4fdd\u75593d\u8f6c\u6362\u7ed3\u679c*/\ntransform-style: preserve-3d;\n")))}d.isMDXComponent=!0},8630:(t,n,e)=>{e.d(n,{Z:()=>r});const r=e.p+"assets/images/2-fe4a900e600be0ec353118557eb060a4.gif"},8844:(t,n,e)=>{e.d(n,{Z:()=>r});const r=e.p+"assets/images/3-4b63a8f003b9cf476a2d7bc72d30b136.gif"},9841:(t,n,e)=>{e.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAADXCAMAAAAqRZ11AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAArlBMVEX////7+/vz8/Pr6+vl5eXi4uLf39/c3Nza2trX19fU1NTS0tLPz8/MzMz+/v739/fv7+/n5+fy8vLY2NjNzc3Z2dnm5ub9/f3t7e3Ozs78/Pzs7Ozb29v6+vrp6enq6urR0dHh4eHQ0ND4+Pjw8PDT09Pg4ODk5OT19fXW1tb5+fne3t7V1dXx8fH29vbd3d22ttGJid2fn9cAAP9CQu709PRwcOPu7u7o6Ojj4+NrMm3bAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+MLDwcsC9gbRmgAAAU8SURBVHja7Z3pcuJIDIBl8IHBMkdMjCE4QOIQCAk7s5NN8v4vtn+2pmqrsls++pBa/l7A9ZX7kNRtGaCnp6enp0cK3mDoB2E0iseTBDGZjONRFAb+cOC55ZlOZ/MwTvA/SeJwPpumLqgu/JsMa5EtbwepDFX2yvkqKrAVRbTKebmuN3cZdiC726zZrMDDUSfXf4xHQwbG2/IGlbG839KesOUOlbIr6U7jtZ+gcpJbmmN6GxSohSKgN6SnYYbayMIprWG8R83sCQ3p1QG1c1gRkX1YohGWDxQCYz9DQ2S+9XD6sUKDVAu7r/YJDXO0+IKfx2ic09mW7TxDCyQzO3vtHVpib2FAnyu0xtj4lrRI0CKF4ZhjjpY5mtx/XtA6e3PVmRgJ8GJowfIuSILISKHDq5AI8VqSLeLFc3m7/SZl0BxR5ickxUnr/E2XSIylzvX5Bcnxos82QIIEzkaO3zPXVG9EomjJFx6RLBoS/nNBV7dQvv2mJyRMnEpYlLWlvwskzqvSw8wDdd2DyuxoieSJ1NmWyIB7ZUfVGQfd4k3OUEZEXDoePGoJJvMdF91d7n6AoTgXnCIjplLWKUWr1QpZsZKyTilZrXxkRqdKTp5w0+30ektkR9mhhLHjp7trX9jYIEM2rV9uxVG3ErLndi3Dnnjqxu1sX5Ep7e6JXrnqXluFGAVX3SKXsgu134tu+OqOWtyw6fK8P3505WeXx2ee2XD5x59d+WU4cL5w1r00tX1DzrqNi1ZH3rq+ybFsX7fhaF4jb11stjbPuOs2S4sC7rqBwalLQPdicOoS0G00eWf8dWfmpi4F3cDc1KWg22DynpG/boPJu3BB991cIYOC7sZQfkBEt/41ycgF3cjYwkxCt/7SXLigWxjbh0joYt0r7K9u6C5MFCHp6N6b2odo6B4NJQhEdOsmCU9u6D4ZO+kkoVv33HPkhm7dg7HYDd26lxYqN3TrRpETN3Tr3jg6uKF7qKmbuaGb9br9YHZlqZrI2oiqPszog8juhUheKYIjGVHY57t98caV0lwpq/D62pfVv8UJ3dqHJt2jSF5HYsIOPIUdZwu7rCDsKsrWBd0GLY5kXSOTdklQ2BVQj79uo+5ksq5vS7ucL+zTC4+7bsPGgrI+m5L2UZywTx6FfdDarRz581dX/jJShFQXWNmkxcfowloNSGskkWdcbVu1CVFw7mmJsI1t56TXGi07cctq4MT19bZtzwWymq8Ja60nrXGisLaY0pqeCmtpK61hsbB21NKajUtrJS/sRwGQH6SsU8xCSUV/jJP1Cxcmq1U2VaQL925nQhzLVld1trCeULedKP2x9DvxKmz2DEohnvmWoBjS0zdSbUt6+k40/BH+jWyvdWW/xPv3FxlUl6sFaIFo8LwCTZCsXM1BGwRz3wA0Qm47utNpC3lMy/aUatUFj9QxWeWBZrwLoXer3RZgTWY8j3IwAJX5ewUz5FfndyBy+28JBiltx88fYJR3q0eDhwEYZmtxwbrZgnFSawvWEawwtDKBD49gielYxkD+PaD3Qgby74uERu/mJI9gmfxobgYfc7DPm6GbsfEUaLAyUIOebIAM6afmKXwoU6BEPtconMxzoMb6S9OalX2tgSLeUcMbTnwPqLIuFSdKu88cKJNuFJYqq2EK5DnfKgmlq9szMOH5q+Og3gXPwIpF2Po8uAhfgR/p++e18UveXT/fU2DL9uMrrrkfZ3HwsQX+pNPZPIz/Z09O4vBz9pCCU3iDoR+E0SgeTxLEZDKOR1EY+MPBGnp6enp6enqc428mcv6DMOQHWQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMS0xNVQwNzo0MzowMSswMDowMBuCdSkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMTVUMDc6NDM6MDErMDA6MDBq382VAAAAAElFTkSuQmCC"},4118:(t,n,e)=>{e.d(n,{Z:()=>r});const r="data:image/png;base64,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"}}]);