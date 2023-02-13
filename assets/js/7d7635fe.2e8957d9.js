"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[415],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[s]="string"==typeof e?e:o,l[1]=u;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7501:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},l=void 0,u={unversionedId:"Vue/\u63d2\u4ef6",id:"Vue/\u63d2\u4ef6",title:"\u63d2\u4ef6",description:"\u63d2\u4ef6\u901a\u5e38\u7528\u6765\u4e3a Vue \u6dfb\u52a0\u5168\u5c40\u529f\u80fd\u3002",source:"@site/docs/08-Vue/\u63d2\u4ef6.md",sourceDirName:"08-Vue",slug:"/Vue/\u63d2\u4ef6",permalink:"/docs/Vue/\u63d2\u4ef6",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u6001\u7ec4\u4ef6 & \u5f02\u6b65\u7ec4\u4ef6",permalink:"/docs/Vue/\u52a8\u6001\u7ec4\u4ef6 & \u5f02\u6b65\u7ec4\u4ef6"},next:{title:"\u6570\u7ec4\u4e0e\u5bf9\u8c61\u66f4\u65b0\u68c0\u6d4b",permalink:"/docs/Vue/\u6570\u7ec4\u4e0e\u5bf9\u8c61\u66f4\u65b0\u68c0\u6d4b"}},i={},p=[{value:"\u4f7f\u7528\u63d2\u4ef6",id:"\u4f7f\u7528\u63d2\u4ef6",level:2},{value:"\u5f00\u53d1\u63d2\u4ef6",id:"\u5f00\u53d1\u63d2\u4ef6",level:2}],c={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u63d2\u4ef6\u901a\u5e38\u7528\u6765\u4e3a Vue \u6dfb\u52a0",(0,o.kt)("strong",{parentName:"p"},"\u5168\u5c40\u529f\u80fd"),"\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u63d2\u4ef6"},"\u4f7f\u7528\u63d2\u4ef6"),(0,o.kt)("p",null,"\u901a\u8fc7\u5168\u5c40\u65b9\u6cd5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Vue.use()")," \u4f7f\u7528\u63d2\u4ef6\u3002\u5b83\u9700\u8981\u5728\u4f60\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"new Vue()")," \u542f\u52a8\u5e94\u7528\u4e4b\u524d\u5b8c\u6210\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u8c03\u7528 `MyPlugin.install(Vue)`\nVue.use(MyPlugin)\n\nnew Vue({\n  // ...\u7ec4\u4ef6\u9009\u9879\n})\n")),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a\u53ef\u9009\u7684\u9009\u9879\u5bf9\u8c61\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Vue.use(MyPlugin, { someOption: true })\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Vue.use")," \u4f1a\u81ea\u52a8\u963b\u6b62\u591a\u6b21\u6ce8\u518c\u76f8\u540c\u63d2\u4ef6\uff0c\u5c4a\u65f6\u5373\u4f7f\u591a\u6b21\u8c03\u7528\u4e5f\u53ea\u4f1a\u6ce8\u518c\u4e00\u6b21\u8be5\u63d2\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u5f00\u53d1\u63d2\u4ef6"},"\u5f00\u53d1\u63d2\u4ef6"),(0,o.kt)("p",null,"Vue.js \u7684\u63d2\u4ef6\u5e94\u8be5\u66b4\u9732\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Vue")," \u6784\u9020\u5668\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u53ef\u9009\u7684\u9009\u9879\u5bf9\u8c61\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"MyPlugin.install = function (Vue, options) {\n  // 1. \u6dfb\u52a0\u5168\u5c40\u65b9\u6cd5\u6216\u5c5e\u6027\n  Vue.myGlobalMethod = function () {\n    // \u903b\u8f91...\n  }\n\n  // 2. \u6dfb\u52a0\u5168\u5c40\u8d44\u6e90\n  Vue.directive('my-directive', {\n    bind (el, binding, vnode, oldVnode) {\n      // \u903b\u8f91...\n    }\n    ...\n  })\n\n  // 3. \u6ce8\u5165\u7ec4\u4ef6\u9009\u9879\n  Vue.mixin({\n    created: function () {\n      // \u903b\u8f91...\n    }\n    ...\n  })\n\n  // 4. \u6dfb\u52a0\u5b9e\u4f8b\u65b9\u6cd5\n  Vue.prototype.$myMethod = function (methodOptions) {\n    // \u903b\u8f91...\n  }\n}\n")),(0,o.kt)("p",null,"\u7f51\u4e0a\u627e\u7684\u6848\u4f8b\uff1a"),(0,o.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684 vue-toast \u63d2\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://juejin.im/post/58d9aae02f301e007e8ee278"},"https://juejin.im/post/58d9aae02f301e007e8ee278")))}s.isMDXComponent=!0}}]);