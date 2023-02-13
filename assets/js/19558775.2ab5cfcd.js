"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7641],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(t),d=l,k=s["".concat(o,".").concat(d)]||s[d]||c[d]||r;return t?a.createElement(k,p(p({ref:n},u),{},{components:t})):a.createElement(k,p({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[s]="string"==typeof e?e:l,p[1]=i;for(var m=2;m<r;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=t(7462),l=(t(7294),t(3905));const r={title:"\u95ed\u5305",slug:"Web/JavaScript/Closures"},p=void 0,i={unversionedId:"JavaScript/JavaScript\u9ad8\u7ea7\u77e5\u8bc6/\u95ed\u5305",id:"JavaScript/JavaScript\u9ad8\u7ea7\u77e5\u8bc6/\u95ed\u5305",title:"\u95ed\u5305",description:"\u95ed\u5305\uff08closure\uff09\u662f\u4e00\u4e2a\u51fd\u6570\u4ee5\u53ca\u5176\u6346\u7ed1\u7684\u5468\u8fb9\u73af\u5883\u72b6\u6001\uff08lexical environment\uff0c\u8bcd\u6cd5\u73af\u5883\uff09\u7684\u5f15\u7528\u7684\u7ec4\u5408\u3002\u6362\u800c\u8a00\u4e4b\uff0c\u95ed\u5305\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u4ece\u5185\u90e8\u51fd\u6570\u8bbf\u95ee\u5916\u90e8\u51fd\u6570\u7684\u4f5c\u7528\u57df\u3002\u5728 JavaScript \u4e2d\uff0c\u95ed\u5305\u4f1a\u968f\u7740\u51fd\u6570\u7684\u521b\u5efa\u800c\u88ab\u540c\u65f6\u521b\u5efa\u3002",source:"@site/docs/03-JavaScript/04-JavaScript\u9ad8\u7ea7\u77e5\u8bc6/\u95ed\u5305.md",sourceDirName:"03-JavaScript/04-JavaScript\u9ad8\u7ea7\u77e5\u8bc6",slug:"/JavaScript/JavaScript\u9ad8\u7ea7\u77e5\u8bc6/Web/JavaScript/Closures",permalink:"/docs/JavaScript/JavaScript\u9ad8\u7ea7\u77e5\u8bc6/Web/JavaScript/Closures",draft:!1,tags:[],version:"current",frontMatter:{title:"\u95ed\u5305",slug:"Web/JavaScript/Closures"},sidebar:"tutorialSidebar",previous:{title:"\u7ee7\u627f\u4e0e\u539f\u578b\u94fe",permalink:"/docs/JavaScript/JavaScript\u9ad8\u7ea7\u77e5\u8bc6/\u7ee7\u627f\u548c\u539f\u578b"},next:{title:"ES6",permalink:"/docs/JavaScript/ES6"}},o={},m=[{value:"<strong>\u8bcd\u6cd5\u4f5c\u7528\u57df</strong>",id:"\u8bcd\u6cd5\u4f5c\u7528\u57df",level:2},{value:"<strong>\u95ed\u5305</strong>",id:"\u95ed\u5305",level:2},{value:"\u5b9e\u7528\u7684\u95ed\u5305",id:"\u5b9e\u7528\u7684\u95ed\u5305",level:2},{value:"\u7528\u95ed\u5305\u6a21\u62df\u79c1\u6709\u65b9\u6cd5",id:"\u7528\u95ed\u5305\u6a21\u62df\u79c1\u6709\u65b9\u6cd5",level:2},{value:"\u5728\u5faa\u73af\u4e2d\u521b\u5efa\u95ed\u5305\uff1a\u4e00\u4e2a\u5e38\u89c1\u9519\u8bef",id:"\u5728\u5faa\u73af\u4e2d\u521b\u5efa\u95ed\u5305\u4e00\u4e2a\u5e38\u89c1\u9519\u8bef",level:2},{value:"\u6027\u80fd\u8003\u91cf",id:"\u6027\u80fd\u8003\u91cf",level:2}],u={toc:m};function s(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u95ed\u5305"),"\uff08closure\uff09\u662f\u4e00\u4e2a\u51fd\u6570\u4ee5\u53ca\u5176\u6346\u7ed1\u7684\u5468\u8fb9\u73af\u5883\u72b6\u6001\uff08",(0,l.kt)("strong",{parentName:"p"},"lexical environment"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u8bcd\u6cd5\u73af\u5883"),"\uff09\u7684\u5f15\u7528\u7684\u7ec4\u5408\u3002\u6362\u800c\u8a00\u4e4b\uff0c\u95ed\u5305\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u4ece\u5185\u90e8\u51fd\u6570\u8bbf\u95ee\u5916\u90e8\u51fd\u6570\u7684\u4f5c\u7528\u57df\u3002\u5728 JavaScript \u4e2d\uff0c\u95ed\u5305\u4f1a\u968f\u7740\u51fd\u6570\u7684\u521b\u5efa\u800c\u88ab\u540c\u65f6\u521b\u5efa\u3002"),(0,l.kt)("h2",{id:"\u8bcd\u6cd5\u4f5c\u7528\u57df"},(0,l.kt)("strong",{parentName:"h2"},"\u8bcd\u6cd5\u4f5c\u7528\u57df")),(0,l.kt)("p",null,"\u8bf7\u770b\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function init() {\n  var name = "Mozilla"; // name \u662f\u4e00\u4e2a\u88ab init \u521b\u5efa\u7684\u5c40\u90e8\u53d8\u91cf\n  function displayName() { // displayName() \u662f\u5185\u90e8\u51fd\u6570\uff0c\u4e00\u4e2a\u95ed\u5305\n      alert(name); // \u4f7f\u7528\u4e86\u7236\u51fd\u6570\u4e2d\u58f0\u660e\u7684\u53d8\u91cf\n  }\n  displayName();\n}\ninit();\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"init()")," \u521b\u5efa\u4e86\u4e00\u4e2a\u5c40\u90e8\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u548c\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"displayName()")," \u7684\u51fd\u6570\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"displayName()")," \u662f\u5b9a\u4e49\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"init()")," \u91cc\u7684\u5185\u90e8\u51fd\u6570\uff0c\u5e76\u4e14\u4ec5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"init()")," \u51fd\u6570\u4f53\u5185\u53ef\u7528\u3002\u8bf7\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"displayName()")," \u6ca1\u6709\u81ea\u5df1\u7684\u5c40\u90e8\u53d8\u91cf\u3002\u7136\u800c\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u8bbf\u95ee\u5230\u5916\u90e8\u51fd\u6570\u7684\u53d8\u91cf\uff0c\u6240\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"displayName()")," \u53ef\u4ee5\u4f7f\u7528\u7236\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"init()")," \u4e2d\u58f0\u660e\u7684\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u3002"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"http://jsfiddle.net/xAFs9/3/"},"\u8fd9\u4e2a JSFiddle \u94fe\u63a5"),"\u8fd0\u884c\u8be5\u4ee3\u7801\u540e\u53d1\u73b0\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"displayName()")," \u51fd\u6570\u5185\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"alert()")," \u8bed\u53e5\u6210\u529f\u663e\u793a\u51fa\u4e86\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u7684\u503c\uff08\u8be5\u53d8\u91cf\u5728\u5176\u7236\u51fd\u6570\u4e2d\u58f0\u660e\uff09\u3002\u8fd9\u4e2a",(0,l.kt)("em",{parentName:"p"},"\u8bcd\u6cd5\u4f5c\u7528\u57df"),"\u7684\u4f8b\u5b50\u63cf\u8ff0\u4e86\u5206\u6790\u5668\u5982\u4f55\u5728\u51fd\u6570\u5d4c\u5957\u7684\u60c5\u51b5\u4e0b\u89e3\u6790\u53d8\u91cf\u540d\u3002\u8bcd\u6cd5\uff08lexical\uff09\u4e00\u8bcd\u6307\u7684\u662f\uff0c\u8bcd\u6cd5\u4f5c\u7528\u57df\u6839\u636e\u6e90\u4ee3\u7801\u4e2d\u58f0\u660e\u53d8\u91cf\u7684\u4f4d\u7f6e\u6765\u786e\u5b9a\u8be5\u53d8\u91cf\u5728\u4f55\u5904\u53ef\u7528\u3002\u5d4c\u5957\u51fd\u6570\u53ef\u8bbf\u95ee\u58f0\u660e\u4e8e\u5b83\u4eec\u5916\u90e8\u4f5c\u7528\u57df\u7684\u53d8\u91cf\u3002"),(0,l.kt)("h2",{id:"\u95ed\u5305"},(0,l.kt)("strong",{parentName:"h2"},"\u95ed\u5305")),(0,l.kt)("p",null,"\u73b0\u5728\u6765\u8003\u8651\u4ee5\u4e0b\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function makeFunc() {\n    var name = "Mozilla";\n    function displayName() {\n        alert(name);\n    }\n    return displayName;\n}\n\nvar myFunc = makeFunc();\nmyFunc();\n')),(0,l.kt)("p",null,"\u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u7684\u6548\u679c\u548c\u4e4b\u524d ",(0,l.kt)("inlineCode",{parentName:"p"},"init()")," \u51fd\u6570\u7684\u793a\u4f8b\u5b8c\u5168\u4e00\u6837\u3002\u5176\u4e2d\u4e0d\u540c\u7684\u5730\u65b9\uff08\u4e5f\u662f\u6709\u610f\u601d\u7684\u5730\u65b9\uff09\u5728\u4e8e\u5185\u90e8\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"displayName()")," ",(0,l.kt)("em",{parentName:"p"},"\u5728\u6267\u884c\u524d"),"\uff0c\u4ece\u5916\u90e8\u51fd\u6570\u8fd4\u56de\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e00\u773c\u770b\u4e0a\u53bb\uff0c\u4e5f\u8bb8\u4e0d\u80fd\u76f4\u89c2\u5730\u770b\u51fa\u8fd9\u6bb5\u4ee3\u7801\u80fd\u591f\u6b63\u5e38\u8fd0\u884c\u3002\u5728\u4e00\u4e9b\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u4e00\u4e2a\u51fd\u6570\u4e2d\u7684\u5c40\u90e8\u53d8\u91cf\u4ec5\u5b58\u5728\u4e8e\u6b64\u51fd\u6570\u7684\u6267\u884c\u671f\u95f4\u3002\u4e00\u65e6 ",(0,l.kt)("inlineCode",{parentName:"p"},"makeFunc()")," \u6267\u884c\u5b8c\u6bd5\uff0c\u4f60\u53ef\u80fd\u4f1a\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u53d8\u91cf\u5c06\u4e0d\u80fd\u518d\u88ab\u8bbf\u95ee\u3002\u7136\u800c\uff0c\u56e0\u4e3a\u4ee3\u7801\u4ecd\u6309\u9884\u671f\u8fd0\u884c\uff0c\u6240\u4ee5\u5728 JavaScript \u4e2d\u60c5\u51b5\u663e\u7136\u4e0e\u6b64\u4e0d\u540c\u3002"),(0,l.kt)("p",null,"\u539f\u56e0\u5728\u4e8e\uff0cJavaScript \u4e2d\u7684\u51fd\u6570\u4f1a\u5f62\u6210\u4e86\u95ed\u5305\u3002 ",(0,l.kt)("em",{parentName:"p"},"\u95ed\u5305"),"\u662f\u7531\u51fd\u6570\u4ee5\u53ca\u58f0\u660e\u8be5\u51fd\u6570\u7684\u8bcd\u6cd5\u73af\u5883\u7ec4\u5408\u800c\u6210\u7684\u3002\u8be5\u73af\u5883\u5305\u542b\u4e86\u8fd9\u4e2a\u95ed\u5305\u521b\u5efa\u65f6\u4f5c\u7528\u57df\u5185\u7684\u4efb\u4f55\u5c40\u90e8\u53d8\u91cf\u3002\u5728\u672c\u4f8b\u5b50\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"myFunc")," \u662f\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"makeFunc")," \u65f6\u521b\u5efa\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"displayName")," \u51fd\u6570\u5b9e\u4f8b\u7684\u5f15\u7528\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"displayName")," \u7684\u5b9e\u4f8b\u7ef4\u6301\u4e86\u4e00\u4e2a\u5bf9\u5b83\u7684\u8bcd\u6cd5\u73af\u5883\uff08\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u5b58\u5728\u4e8e\u5176\u4e2d\uff09\u7684\u5f15\u7528\u3002\u56e0\u6b64\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"myFunc")," \u88ab\u8c03\u7528\u65f6\uff0c\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u4ecd\u7136\u53ef\u7528\uff0c\u5176\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"Mozilla")," \u5c31\u88ab\u4f20\u9012\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"alert"),"\u4e2d\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u66f4\u6709\u610f\u601d\u7684\u793a\u4f8b \u2014 \u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"makeAdder")," \u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function makeAdder(x) {\n  return function(y) {\n    return x + y;\n  };\n}\n\nvar add5 = makeAdder(5);\nvar add10 = makeAdder(10);\n\nconsole.log(add5(2));  // 7\nconsole.log(add10(2)); // 12\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"makeAdder(x)")," \u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u3002\u8fd4\u56de\u7684\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"y"),"\uff0c\u5e76\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"x+y"),"\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u4ece\u672c\u8d28\u4e0a\u8bb2\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"makeAdder")," \u662f\u4e00\u4e2a\u51fd\u6570\u5de5\u5382 \u2014 \u4ed6\u521b\u5efa\u4e86\u5c06\u6307\u5b9a\u7684\u503c\u548c\u5b83\u7684\u53c2\u6570\u76f8\u52a0\u6c42\u548c\u7684\u51fd\u6570\u3002\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u51fd\u6570\u5de5\u5382\u521b\u5efa\u4e86\u4e24\u4e2a\u65b0\u51fd\u6570 \u2014 \u4e00\u4e2a\u5c06\u5176\u53c2\u6570\u548c 5 \u6c42\u548c\uff0c\u53e6\u4e00\u4e2a\u548c 10 \u6c42\u548c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"add5")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"add10")," \u90fd\u662f\u95ed\u5305\u3002\u5b83\u4eec\u5171\u4eab\u76f8\u540c\u7684\u51fd\u6570\u5b9a\u4e49\uff0c\u4f46\u662f\u4fdd\u5b58\u4e86\u4e0d\u540c\u7684\u8bcd\u6cd5\u73af\u5883\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"add5")," \u7684\u73af\u5883\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4e3a 5\u3002\u800c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"add10")," \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u5219\u4e3a 10\u3002"),(0,l.kt)("h2",{id:"\u5b9e\u7528\u7684\u95ed\u5305"},"\u5b9e\u7528\u7684\u95ed\u5305"),(0,l.kt)("p",null,"\u95ed\u5305\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u5b83\u5141\u8bb8\u5c06\u51fd\u6570\u4e0e\u5176\u6240\u64cd\u4f5c\u7684\u67d0\u4e9b\u6570\u636e\uff08\u73af\u5883\uff09\u5173\u8054\u8d77\u6765\u3002\u8fd9\u663e\u7136\u7c7b\u4f3c\u4e8e\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u3002\u5728\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u4e2d\uff0c\u5bf9\u8c61\u5141\u8bb8\u6211\u4eec\u5c06\u67d0\u4e9b\u6570\u636e\uff08\u5bf9\u8c61\u7684\u5c5e\u6027\uff09\u4e0e\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u65b9\u6cd5\u76f8\u5173\u8054\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u901a\u5e38\u4f60\u4f7f\u7528\u53ea\u6709\u4e00\u4e2a\u65b9\u6cd5\u7684\u5bf9\u8c61\u7684\u5730\u65b9\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528\u95ed\u5305\u3002"),(0,l.kt)("p",null,"\u5728 Web \u4e2d\uff0c\u4f60\u60f3\u8981\u8fd9\u6837\u505a\u7684\u60c5\u51b5\u7279\u522b\u5e38\u89c1\u3002\u5927\u90e8\u5206\u6211\u4eec\u6240\u5199\u7684 JavaScript \u4ee3\u7801\u90fd\u662f\u57fa\u4e8e\u4e8b\u4ef6\u7684 \u2014 \u5b9a\u4e49\u67d0\u79cd\u884c\u4e3a\uff0c\u7136\u540e\u5c06\u5176\u6dfb\u52a0\u5230\u7528\u6237\u89e6\u53d1\u7684\u4e8b\u4ef6\u4e4b\u4e0a\uff08\u6bd4\u5982\u70b9\u51fb\u6216\u8005\u6309\u952e\uff09\u3002\u6211\u4eec\u7684\u4ee3\u7801\u901a\u5e38\u4f5c\u4e3a\u56de\u8c03\uff1a\u4e3a\u54cd\u5e94\u4e8b\u4ef6\u800c\u6267\u884c\u7684\u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u5047\u5982\uff0c\u6211\u4eec\u60f3\u5728\u9875\u9762\u4e0a\u6dfb\u52a0\u4e00\u4e9b\u53ef\u4ee5\u8c03\u6574\u5b57\u53f7\u7684\u6309\u94ae\u3002\u4e00\u79cd\u65b9\u6cd5\u662f\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," \u5143\u7d20\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"font-size"),"\uff0c\u7136\u540e\u901a\u8fc7\u76f8\u5bf9\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"em")," \u5355\u4f4d\u8bbe\u7f6e\u9875\u9762\u4e2d\u5176\u5b83\u5143\u7d20\uff08\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"header"),"\uff09\u7684\u5b57\u53f7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 12px;\n}\n\nh1 {\n  font-size: 1.5em;\n}\n\nh2 {\n  font-size: 1.2em;\n}\n")),(0,l.kt)("p",null,"\u6211\u4eec\u7684\u6587\u672c\u5c3a\u5bf8\u8c03\u6574\u6309\u94ae\u53ef\u4ee5\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," \u5143\u7d20\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"font-size")," \u5c5e\u6027\uff0c\u7531\u4e8e\u6211\u4eec\u4f7f\u7528\u76f8\u5bf9\u5355\u4f4d\uff0c\u9875\u9762\u4e2d\u7684\u5176\u5b83\u5143\u7d20\u4e5f\u4f1a\u76f8\u5e94\u5730\u8c03\u6574\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f JavaScript\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function makeSizer(size) {\n  return function() {\n    document.body.style.fontSize = size + 'px';\n  };\n}\n\nvar size12 = makeSizer(12);\nvar size14 = makeSizer(14);\nvar size16 = makeSizer(16);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"size12"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"size14")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"size16")," \u4e09\u4e2a\u51fd\u6570\u5c06\u5206\u522b\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," \u6587\u672c\u8c03\u6574\u4e3a 12\uff0c14\uff0c16 \u50cf\u7d20\u3002\u6211\u4eec\u53ef\u4ee5\u5c06\u5b83\u4eec\u5206\u522b\u6dfb\u52a0\u5230\u6309\u94ae\u7684\u70b9\u51fb\u4e8b\u4ef6\u4e0a\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"document.getElementById('size-12').onclick = size12;\ndocument.getElementById('size-14').onclick = size14;\ndocument.getElementById('size-16').onclick = size16;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<a href="#" id="size-12">12</a>\n<a href="#" id="size-14">14</a>\n<a href="#" id="size-16">16</a>\n')),(0,l.kt)("h2",{id:"\u7528\u95ed\u5305\u6a21\u62df\u79c1\u6709\u65b9\u6cd5"},"\u7528\u95ed\u5305\u6a21\u62df\u79c1\u6709\u65b9\u6cd5"),(0,l.kt)("p",null,"\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u6bd4\u5982 Java\uff0c\u662f\u652f\u6301\u5c06\u65b9\u6cd5\u58f0\u660e\u4e3a\u79c1\u6709\u7684\uff0c\u5373\u5b83\u4eec\u53ea\u80fd\u88ab\u540c\u4e00\u4e2a\u7c7b\u4e2d\u7684\u5176\u5b83\u65b9\u6cd5\u6240\u8c03\u7528\u3002"),(0,l.kt)("p",null,"\u800c JavaScript \u6ca1\u6709\u8fd9\u79cd\u539f\u751f\u652f\u6301\uff0c\u4f46\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u95ed\u5305\u6765\u6a21\u62df\u79c1\u6709\u65b9\u6cd5\u3002\u79c1\u6709\u65b9\u6cd5\u4e0d\u4ec5\u4ec5\u6709\u5229\u4e8e\u9650\u5236\u5bf9\u4ee3\u7801\u7684\u8bbf\u95ee\uff1a\u8fd8\u63d0\u4f9b\u4e86\u7ba1\u7406\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u7684\u5f3a\u5927\u80fd\u529b\uff0c\u907f\u514d\u975e\u6838\u5fc3\u7684\u65b9\u6cd5\u5f04\u4e71\u4e86\u4ee3\u7801\u7684\u516c\u5171\u63a5\u53e3\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u5c55\u73b0\u4e86\u5982\u4f55\u4f7f\u7528\u95ed\u5305\u6765\u5b9a\u4e49\u516c\u5171\u51fd\u6570\uff0c\u5e76\u4ee4\u5176\u53ef\u4ee5\u8bbf\u95ee\u79c1\u6709\u51fd\u6570\u548c\u53d8\u91cf\u3002\u8fd9\u4e2a\u65b9\u5f0f\u4e5f\u79f0\u4e3a",(0,l.kt)("a",{parentName:"p",href:"http://www.google.com/search?q=javascript+module+pattern"},"\u6a21\u5757\u6a21\u5f0f\uff08module pattern\uff09"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var Counter = (function() {\n  var privateCounter = 0;\n  function changeBy(val) {\n    privateCounter += val;\n  }\n  return {\n    increment: function() {\n      changeBy(1);\n    },\n    decrement: function() {\n      changeBy(-1);\n    },\n    value: function() {\n      return privateCounter;\n    }\n  }\n})();\n\nconsole.log(Counter.value()); /* logs 0 */\nCounter.increment();\nCounter.increment();\nconsole.log(Counter.value()); /* logs 2 */\nCounter.decrement();\nconsole.log(Counter.value()); /* logs 1 */\n")),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u793a\u4f8b\u4e2d\uff0c\u6bcf\u4e2a\u95ed\u5305\u90fd\u6709\u5b83\u81ea\u5df1\u7684\u8bcd\u6cd5\u73af\u5883\uff1b\u800c\u8fd9\u6b21\u6211\u4eec\u53ea\u521b\u5efa\u4e86\u4e00\u4e2a\u8bcd\u6cd5\u73af\u5883\uff0c\u4e3a\u4e09\u4e2a\u51fd\u6570\u6240\u5171\u4eab\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Counter.increment"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Counter.decrement")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Counter.value"),"\u3002"),(0,l.kt)("p",null,"\u8be5\u5171\u4eab\u73af\u5883\u521b\u5efa\u4e8e\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u7684\u533f\u540d\u51fd\u6570\u4f53\u5185\u3002\u8fd9\u4e2a\u73af\u5883\u4e2d\u5305\u542b\u4e24\u4e2a\u79c1\u6709\u9879\uff1a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"privateCounter")," \u7684\u53d8\u91cf\u548c\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"changeBy")," \u7684\u51fd\u6570\u3002\u8fd9\u4e24\u9879\u90fd\u65e0\u6cd5\u5728\u8fd9\u4e2a\u533f\u540d\u51fd\u6570\u5916\u90e8\u76f4\u63a5\u8bbf\u95ee\u3002\u5fc5\u987b\u901a\u8fc7\u533f\u540d\u51fd\u6570\u8fd4\u56de\u7684\u4e09\u4e2a\u516c\u5171\u51fd\u6570\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e09\u4e2a\u516c\u5171\u51fd\u6570\u662f\u5171\u4eab\u540c\u4e00\u4e2a\u73af\u5883\u7684\u95ed\u5305\u3002\u591a\u4e8f JavaScript \u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\uff0c\u5b83\u4eec\u90fd\u53ef\u4ee5\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"privateCounter")," \u53d8\u91cf\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"changeBy")," \u51fd\u6570\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u5907\u6ce8\uff1a")," \u4f60\u5e94\u8be5\u6ce8\u610f\u5230\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u533f\u540d\u51fd\u6570\uff0c\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u8ba1\u6570\u5668\u3002\u6211\u4eec\u7acb\u5373\u6267\u884c\u4e86\u8fd9\u4e2a\u533f\u540d\u51fd\u6570\uff0c\u5e76\u5c06\u4ed6\u7684\u503c\u8d4b\u7ed9\u4e86\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"Counter"),"\u3002\u6211\u4eec\u53ef\u4ee5\u628a\u8fd9\u4e2a\u51fd\u6570\u50a8\u5b58\u5728\u53e6\u5916\u4e00\u4e2a\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"makeCounter"),"\u4e2d\uff0c\u5e76\u7528\u4ed6\u6765\u521b\u5efa\u591a\u4e2a\u8ba1\u6570\u5668\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var makeCounter = function() {\n  var privateCounter = 0;\n  function changeBy(val) {\n    privateCounter += val;\n  }\n  return {\n    increment: function() {\n      changeBy(1);\n    },\n    decrement: function() {\n      changeBy(-1);\n    },\n    value: function() {\n      return privateCounter;\n    }\n  }\n};\n\nvar Counter1 = makeCounter();\nvar Counter2 = makeCounter();\nconsole.log(Counter1.value()); /* logs 0 */\nCounter1.increment();\nCounter1.increment();\nconsole.log(Counter1.value()); /* logs 2 */\nCounter1.decrement();\nconsole.log(Counter1.value()); /* logs 1 */\nconsole.log(Counter2.value()); /* logs 0 */\n")),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\u4e24\u4e2a\u8ba1\u6570\u5668 ",(0,l.kt)("inlineCode",{parentName:"p"},"Counter1")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Counter2")," \u662f\u5982\u4f55\u7ef4\u62a4\u5b83\u4eec\u5404\u81ea\u7684\u72ec\u7acb\u6027\u7684\u3002\u6bcf\u4e2a\u95ed\u5305\u90fd\u662f\u5f15\u7528\u81ea\u5df1\u8bcd\u6cd5\u4f5c\u7528\u57df\u5185\u7684\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"privateCounter")," \u3002"),(0,l.kt)("p",null,"\u6bcf\u6b21\u8c03\u7528\u5176\u4e2d\u4e00\u4e2a\u8ba1\u6570\u5668\u65f6\uff0c\u901a\u8fc7\u6539\u53d8\u8fd9\u4e2a\u53d8\u91cf\u7684\u503c\uff0c\u4f1a\u6539\u53d8\u8fd9\u4e2a\u95ed\u5305\u7684\u8bcd\u6cd5\u73af\u5883\u3002\u7136\u800c\u5728\u4e00\u4e2a\u95ed\u5305\u5185\u5bf9\u53d8\u91cf\u7684\u4fee\u6539\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u53e6\u5916\u4e00\u4e2a\u95ed\u5305\u4e2d\u7684\u53d8\u91cf\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u5907\u6ce8\uff1a")," \u4ee5\u8fd9\u79cd\u65b9\u5f0f\u4f7f\u7528\u95ed\u5305\uff0c\u63d0\u4f9b\u4e86\u8bb8\u591a\u4e0e\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u76f8\u5173\u7684\u597d\u5904 \u2014\u2014 \u7279\u522b\u662f\u6570\u636e\u9690\u85cf\u548c\u5c01\u88c5\u3002")),(0,l.kt)("h2",{id:"\u5728\u5faa\u73af\u4e2d\u521b\u5efa\u95ed\u5305\u4e00\u4e2a\u5e38\u89c1\u9519\u8bef"},"\u5728\u5faa\u73af\u4e2d\u521b\u5efa\u95ed\u5305\uff1a\u4e00\u4e2a\u5e38\u89c1\u9519\u8bef"),(0,l.kt)("p",null,"\u5728 ECMAScript 2015 \u5f15\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u5173\u952e\u5b57 \u4e4b\u524d\uff0c\u5728\u5faa\u73af\u4e2d\u6709\u4e00\u4e2a\u5e38\u89c1\u7684\u95ed\u5305\u521b\u5efa\u95ee\u9898\u3002\u53c2\u8003\u4e0b\u9762\u7684\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<p id="help">Helpful notes will appear here</p>\n<p>E-mail: <input type="text" id="email" name="email"></p>\n<p>Name: <input type="text" id="name" name="name"></p>\n<p>Age: <input type="text" id="age" name="age"></p>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function showHelp(help) {\n  document.getElementById('help').innerHTML = help;\n}\n\nfunction setupHelp() {\n  var helpText = [\n      {'id': 'email', 'help': 'Your e-mail address'},\n      {'id': 'name', 'help': 'Your full name'},\n      {'id': 'age', 'help': 'Your age (you must be over 16)'}\n    ];\n\n  for (var i = 0; i < helpText.length; i++) {\n    var item = helpText[i];\n    document.getElementById(item.id).onfocus = function() {\n      showHelp(item.help);\n    }\n  }\n}\n\nsetupHelp();\n")),(0,l.kt)("p",null,"\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"helpText")," \u4e2d\u5b9a\u4e49\u4e86\u4e09\u4e2a\u6709\u7528\u7684\u63d0\u793a\u4fe1\u606f\uff0c\u6bcf\u4e00\u4e2a\u90fd\u5173\u8054\u4e8e\u5bf9\u5e94\u7684\u6587\u6863\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," \u7684 ID\u3002\u901a\u8fc7\u5faa\u73af\u8fd9\u4e09\u9879\u5b9a\u4e49\uff0c\u4f9d\u6b21\u4e3a\u76f8\u5e94 ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," \u6dfb\u52a0\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"onfocus")," \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u4ee5\u4fbf\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u540e\uff0c\u60a8\u4f1a\u53d1\u73b0\u5b83\u6ca1\u6709\u8fbe\u5230\u60f3\u8981\u7684\u6548\u679c\u3002\u65e0\u8bba\u7126\u70b9\u5728\u54ea\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," \u4e0a\uff0c\u663e\u793a\u7684\u90fd\u662f\u5173\u4e8e\u5e74\u9f84\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u539f\u56e0\u662f\u8d4b\u503c\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"onfocus")," \u7684\u662f\u95ed\u5305\u3002\u8fd9\u4e9b\u95ed\u5305\u662f\u7531\u4ed6\u4eec\u7684\u51fd\u6570\u5b9a\u4e49\u548c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"setupHelp")," \u4f5c\u7528\u57df\u4e2d\u6355\u83b7\u7684\u73af\u5883\u6240\u7ec4\u6210\u7684\u3002\u8fd9\u4e09\u4e2a\u95ed\u5305\u5728\u5faa\u73af\u4e2d\u88ab\u521b\u5efa\uff0c\u4f46\u4ed6\u4eec\u5171\u4eab\u4e86\u540c\u4e00\u4e2a\u8bcd\u6cd5\u4f5c\u7528\u57df\uff0c\u5728\u8fd9\u4e2a\u4f5c\u7528\u57df\u4e2d\u5b58\u5728\u4e00\u4e2a\u53d8\u91cf item\u3002\u8fd9\u662f\u56e0\u4e3a\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"item")," \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," \u8fdb\u884c\u58f0\u660e\uff0c\u7531\u4e8e\u53d8\u91cf\u63d0\u5347\uff0c\u6240\u4ee5\u5177\u6709\u51fd\u6570\u4f5c\u7528\u57df\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"onfocus")," \u7684\u56de\u8c03\u6267\u884c\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"item.help")," \u7684\u503c\u88ab\u51b3\u5b9a\u3002\u7531\u4e8e\u5faa\u73af\u5728\u4e8b\u4ef6\u89e6\u53d1\u4e4b\u524d\u65e9\u5df2\u6267\u884c\u5b8c\u6bd5\uff0c\u53d8\u91cf\u5bf9\u8c61 ",(0,l.kt)("inlineCode",{parentName:"p"},"item"),"\uff08\u88ab\u4e09\u4e2a\u95ed\u5305\u6240\u5171\u4eab\uff09\u5df2\u7ecf\u6307\u5411\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"helpText")," \u7684\u6700\u540e\u4e00\u9879\u3002"),(0,l.kt)("p",null,"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u4e00\u79cd\u65b9\u6848\u662f\u4f7f\u7528\u66f4\u591a\u7684\u95ed\u5305\uff1a\u7279\u522b\u662f\u4f7f\u7528\u524d\u9762\u6240\u8ff0\u7684\u51fd\u6570\u5de5\u5382\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function showHelp(help) {\n  document.getElementById('help').innerHTML = help;\n}\n\nfunction makeHelpCallback(help) {\n  return function() {\n    showHelp(help);\n  };\n}\n\nfunction setupHelp() {\n  var helpText = [\n      {'id': 'email', 'help': 'Your e-mail address'},\n      {'id': 'name', 'help': 'Your full name'},\n      {'id': 'age', 'help': 'Your age (you must be over 16)'}\n    ];\n\n  for (var i = 0; i < helpText.length; i++) {\n    var item = helpText[i];\n    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);\n  }\n}\n\nsetupHelp();\n")),(0,l.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u53ef\u4ee5\u5982\u6211\u4eec\u6240\u671f\u671b\u7684\u90a3\u6837\u5de5\u4f5c\u3002\u6240\u6709\u7684\u56de\u8c03\u4e0d\u518d\u5171\u4eab\u540c\u4e00\u4e2a\u73af\u5883\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"makeHelpCallback")," \u51fd\u6570\u4e3a\u6bcf\u4e00\u4e2a\u56de\u8c03\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8bcd\u6cd5\u73af\u5883\u3002\u5728\u8fd9\u4e9b\u73af\u5883\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"help")," \u6307\u5411 ",(0,l.kt)("inlineCode",{parentName:"p"},"helpText")," \u6570\u7ec4\u4e2d\u5bf9\u5e94\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,"\u53e6\u4e00\u79cd\u65b9\u6cd5\u4f7f\u7528\u4e86\u533f\u540d\u95ed\u5305\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function showHelp(help) {\n  document.getElementById('help').innerHTML = help;\n}\n\nfunction setupHelp() {\n  var helpText = [\n      {'id': 'email', 'help': 'Your e-mail address'},\n      {'id': 'name', 'help': 'Your full name'},\n      {'id': 'age', 'help': 'Your age (you must be over 16)'}\n    ];\n\n  for (var i = 0; i < helpText.length; i++) {\n    (function() {\n       var item = helpText[i];\n       document.getElementById(item.id).onfocus = function() {\n         showHelp(item.help);\n       }\n    })(); // \u9a6c\u4e0a\u628a\u5f53\u524d\u5faa\u73af\u9879\u7684 item \u4e0e\u4e8b\u4ef6\u56de\u8c03\u76f8\u5173\u8054\u8d77\u6765\n  }\n}\n\nsetupHelp();\n")),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u4f7f\u7528\u8fc7\u591a\u7684\u95ed\u5305\uff0c\u4f60\u53ef\u4ee5\u7528 ES2015 \u5f15\u5165\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u5173\u952e\u8bcd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function showHelp(help) {\n  document.getElementById('help').textContent = help;\n}\n\nfunction setupHelp() {\n  const helpText = [\n    { id: 'email', help: 'Your e-mail address' },\n    { id: 'name', help: 'Your full name' },\n    { id: 'age', help: 'Your age (you must be over 16)' },\n  ];\n\n  for (let i = 0; i < helpText.length; i++) {\n    const item = helpText[i];\n    document.getElementById(item.id).onfocus = () => {\n      showHelp(item.help);\n    };\n  }\n}\n\nsetupHelp();\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"const")," \u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),"\uff0c\u56e0\u6b64\u6bcf\u4e2a\u95ed\u5305\u90fd\u7ed1\u5b9a\u4e86\u5757\u4f5c\u7528\u57df\u7684\u53d8\u91cf\uff0c\u8fd9\u610f\u5473\u7740\u4e0d\u518d\u9700\u8981\u989d\u5916\u7684\u95ed\u5305\u3002"),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a\u53ef\u9009\u65b9\u6848\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"forEach()")," \u6765\u904d\u5386 ",(0,l.kt)("inlineCode",{parentName:"p"},"helpText")," \u6570\u7ec4\u5e76\u7ed9\u6bcf\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"<input>")," \u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u5668\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function showHelp(help) {\n  document.getElementById('help').textContent = help;\n}\n\nfunction setupHelp() {\n  var helpText = [\n    { id: 'email', help: 'Your e-mail address' },\n    { id: 'name', help: 'Your full name' },\n    { id: 'age', help: 'Your age (you must be over 16)' },\n  ];\n\n  helpText.forEach(function (text) {\n    document.getElementById(text.id).onfocus = function () {\n      showHelp(text.help);\n    };\n  });\n}\n\nsetupHelp();\n")),(0,l.kt)("h2",{id:"\u6027\u80fd\u8003\u91cf"},"\u6027\u80fd\u8003\u91cf"),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u662f\u67d0\u4e9b\u7279\u5b9a\u4efb\u52a1\u9700\u8981\u4f7f\u7528\u95ed\u5305\uff0c\u5728\u5176\u5b83\u51fd\u6570\u4e2d\u521b\u5efa\u51fd\u6570\u662f\u4e0d\u660e\u667a\u7684\uff0c\u56e0\u4e3a\u95ed\u5305\u5728\u5904\u7406\u901f\u5ea6\u548c\u5185\u5b58\u6d88\u8017\u65b9\u9762\u5bf9\u811a\u672c\u6027\u80fd\u5177\u6709\u8d1f\u9762\u5f71\u54cd\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u521b\u5efa\u65b0\u7684\u5bf9\u8c61\u6216\u8005\u7c7b\u65f6\uff0c\u65b9\u6cd5\u901a\u5e38\u5e94\u8be5\u5173\u8054\u4e8e\u5bf9\u8c61\u7684\u539f\u578b\uff0c\u800c\u4e0d\u662f\u5b9a\u4e49\u5230\u5bf9\u8c61\u7684\u6784\u9020\u5668\u4e2d\u3002\u539f\u56e0\u662f\u8fd9\u5c06\u5bfc\u81f4\u6bcf\u6b21\u6784\u9020\u5668\u88ab\u8c03\u7528\u65f6\uff0c\u65b9\u6cd5\u90fd\u4f1a\u88ab\u91cd\u65b0\u8d4b\u503c\u4e00\u6b21\uff08\u4e5f\u5c31\u662f\u8bf4\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u5bf9\u8c61\u7684\u521b\u5efa\uff0c\u65b9\u6cd5\u90fd\u4f1a\u88ab\u91cd\u65b0\u8d4b\u503c\uff09\u3002"),(0,l.kt)("p",null,"\u8003\u8651\u4ee5\u4e0b\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function MyObject(name, message) {\n  this.name = name.toString();\n  this.message = message.toString();\n  this.getName = function() {\n    return this.name;\n  };\n\n  this.getMessage = function() {\n    return this.message;\n  };\n}\n")),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5e76\u6ca1\u6709\u5229\u7528\u5230\u95ed\u5305\u7684\u597d\u5904\uff0c\u56e0\u6b64\u53ef\u4ee5\u907f\u514d\u4f7f\u7528\u95ed\u5305\u3002\u4fee\u6539\u6210\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function MyObject(name, message) {\n  this.name = name.toString();\n  this.message = message.toString();\n}\nMyObject.prototype = {\n  getName() {\n    return this.name;\n  },\n  getMessage() {\n    return this.message;\n  }\n};\n")),(0,l.kt)("p",null,"\u4f46\u6211\u4eec\u4e0d\u5efa\u8bae\u91cd\u65b0\u5b9a\u4e49\u539f\u578b\u3002\u53ef\u6539\u6210\u5982\u4e0b\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function MyObject(name, message) {\n  this.name = name.toString();\n  this.message = message.toString();\n}\nMyObject.prototype.getName = function() {\n  return this.name;\n};\nMyObject.prototype.getMessage = function() {\n  return this.message;\n};\n")))}s.isMDXComponent=!0}}]);