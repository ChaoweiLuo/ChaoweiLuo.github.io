"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6},o="NestJS-\u8fdb\u9636\u73a9\u6cd5",p={unversionedId:"Nestjs/\u8fdb\u9636\u73a9\u6cd5",id:"Nestjs/\u8fdb\u9636\u73a9\u6cd5",title:"NestJS-\u8fdb\u9636\u73a9\u6cd5",description:"Provider",source:"@site/docs/11-Nestjs/06-\u8fdb\u9636\u73a9\u6cd5.md",sourceDirName:"11-Nestjs",slug:"/Nestjs/\u8fdb\u9636\u73a9\u6cd5",permalink:"/docs/Nestjs/\u8fdb\u9636\u73a9\u6cd5",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"NestJS-\u4e00\u4e9b\u8865\u5145",permalink:"/docs/Nestjs/\u4e00\u4e9b\u8865\u5145"},next:{title:"\u524d\u7aef\u9762\u8bd5\u77e5\u8bc6\u70b9\u603b\u7ed3",permalink:"/docs/\u524d\u7aef\u9762\u8bd5/\u524d\u7aef\u9762\u8bd5\u77e5\u8bc6\u70b9\u603b\u7ed3"}},l={},d=[{value:"Provider",id:"provider",level:2},{value:"TypeProvider",id:"typeprovider",level:3},{value:"ClassProvider",id:"classprovider",level:3},{value:"ValueProvider",id:"valueprovider",level:3},{value:"FactoryProvider",id:"factoryprovider",level:3},{value:"ExistingProvider",id:"existingprovider",level:3},{value:"Module",id:"module",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nestjs-\u8fdb\u9636\u73a9\u6cd5"},"NestJS-\u8fdb\u9636\u73a9\u6cd5"),(0,a.kt)("h2",{id:"provider"},"Provider"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Nest"),"\u4e2d\u4e3b\u8981\u6709\u51e0\u79cd\u79cd\u5b9a\u4e49",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u7684\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TypePrivider"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ClassProvider"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ValueProvider"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FactoryProvider"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ExistingProvider")))),(0,a.kt)("p",null,"\u6211\u4eec\u5206\u522b\u4ecb\u7ecd\u4e00\u4e0b\u4ed6\u4eec\u7684\u542b\u4e49\u548c\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\uff0c\u800c\u9664\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"TypeProvider"),"\u4e4b\u5916\u90fd\u4f1a\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"provider"),"\u5c5e\u6027\uff0c\u5728\u9700\u8981\u6ce8\u5165\u7684\u5730\u65b9\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"@Inject(provide)"),"\u6765\u4f7f\u7528\u3002\u800c\u5176\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"provider"),"\u5c5e\u6027\u53ef\u4ee5\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"string | symbol | Type<any> | Abstract<any> | Function"),"\u3002"),(0,a.kt)("h3",{id:"typeprovider"},"TypeProvider"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TypeProvider"),"\u5c31\u662f\u6700\u5e38\u7528\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Nest"),"\u4e2d\u5c06\u4e00\u4e2a\u7c7b\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"@Injectable()"),"\u6ce8\u89e3\uff0c\u7136\u540e\u5728\u6240\u5c5e\u7684\u6a21\u5757\u4e2d\u5c06\u7c7b",(0,a.kt)("inlineCode",{parentName:"p"},"providers"),"\u6570\u7ec4\u4e2d\u3002\u8fd9\u65f6\u5c31\u53ef\u4ee5\u5728\u9700\u8981\u7684\u5730\u65b9\u76f4\u63a5\u6ce8\u5165\u5373\u53ef\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"classprovider"},"ClassProvider"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ClassProvider"),"\u901a\u8fc7\u5c5e\u6027",(0,a.kt)("inlineCode",{parentName:"p"},"useClass"),"\u6307\u5b9a\u4e00\u4e2a\u7279\u5b9a\u7684\u7c7b\u578b\u3002\u5728\u9700\u8981\u7684\u5730\u65b9\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"@Inject()"),"\u5b83\u7684provider\u719f\u6089\u5c31\u53ef\u4ee5\u62ff\u5230\u4e00\u4e2a\u5177\u4f53\u7684\u5b9e\u4f8b\uff0c\u8fd9\u662f\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Nest"),"\u6846\u67b6\u5185\u90e8\u6709\u4e00\u5957\u5b9e\u4f8b\u5316\u7684\u903b\u8f91\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"{ provide: BookService, useClass: BookService }\n")),(0,a.kt)("h3",{id:"valueprovider"},"ValueProvider"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ValueProvider"),"\u901a\u8fc7\u5c5e\u6027",(0,a.kt)("inlineCode",{parentName:"p"},"useValue"),"\u6765\u6307\u5b9a\u4e00\u4e2a\u5b9e\u4f8b\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u3002\u6bd4\u8f83\u7279\u6b8a\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ValueProvider"),"\u4e0d\u80fd\u989d\u5916\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"scope"),"\uff0c\u56e0\u4e3a\u5b83\u6c38\u8fdc\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u5355\u4f8b"),"\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = { name: 'Nest-first-instance1', createdAt: '2023-02-07' };\n// \u5c06\u4e0b\u9762\u7684\u4ee3\u7801\u52a0\u5165\u5230 providers\u6570\u7ec4\u4e2d\n{ provide: 'app', useValue: app }\n")),(0,a.kt)("h3",{id:"factoryprovider"},"FactoryProvider"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"useFactory"),"\u52a8\u6001\u5730\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u3002\u5b9e\u9645\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u5c06\u7531\u5de5\u5382\u51fd\u6570\u8fd4\u56de\u7684\u503c\u63d0\u4f9b\u3002\u5de5\u5382\u51fd\u6570\u53ef\u4ee5\u6839\u636e\u9700\u8981\u81ea\u5df1\u6dfb\u52a0\u4efb\u610f\u7684\u903b\u8f91\u3002\u4e00\u4e2a\u7b80\u5355\u7684\u5de5\u5382\u53ef\u4ee5\u4e0d\u4f9d\u8d56\u4e8e\u4efb\u4f55\u5176\u5b83",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u3002\u4e00\u4e2a\u66f4\u590d\u6742\u7684\u5de5\u5382\u53ef\u4ee5\u81ea\u5df1\u6ce8\u5165\u5b83\u6240\u9700\u8981\u7684\u5176\u4ed6",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u6765\u8ba1\u7b97\u5176\u7ed3\u679c\u3002\u5bf9\u4e8e\u540e\u4e00\u79cd\u60c5\u51b5\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"useFactory"),"\u53ef\u4ee5\u63a5\u53d7\u4e00\u7ec4\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u5fc5\u987b\u662f\u5176\u4ed6\u53ef\u4ee5\u6ce8\u5165\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  provide: 'factory',\n  inject: [{ token: 'app', optional: false }],\n  useFactory: (app: App) => {\n    return {\n      name: 'factory',\n      createdAt: new Date\n    };\n  },\n},\n")),(0,a.kt)("p",null,"useFactory\u4e5f\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  provide: 'async_factory',\n  useFactory: async () => {\n    return new Promise<App>(function (resolve) {\n      setTimeout(() => {\n        resolve({\n          name: app.name,\n          createdAt: new Date(),\n        });\n      }, Math.random() * 1000);\n    });\n  },\n},\n")),(0,a.kt)("h3",{id:"existingprovider"},"ExistingProvider"),(0,a.kt)("p",null,"\u4e3a\u5df2\u7ecf\u5b58\u5728\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u521b\u5efa\u522b\u540d\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"BookService"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},'"exists_book"'),"\u90fd\u662f\u540c\u6837\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"{ provide: BookService, useClass: BookService },\n{\n  provide: 'exists_book',\n  useExisting: BookService,\n}\n")),(0,a.kt)("p",null,"\u6240\u6709\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u90fd\u53ef\u4ee5\u6307\u5b9a\u5b83\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"scope"),"\uff0c\u901a\u5e38",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u6709\u4e09\u79cd",(0,a.kt)("inlineCode",{parentName:"p"},"scope"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"default\uff08\u5355\u4f8b\u6a21\u5f0f\uff09\uff1a\u6c38\u8fdc\u90fd\u662f\u540c\u4e00\u4e2a\u5b9e\u4f8b\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"REQUEST\uff1a\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u4f1a\u6709\u5bf9\u5e94\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u5b9e\u4f8b\u521b\u5efa\uff0c\u5728\u8bf7\u6c42\u5b8c\u6210\u540e\u5b9e\u4f8b\u88ab\u9500\u6bc1\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TRANSIENT\uff1a\u6bcf\u6b21\u90fd\u80fd\u62ff\u5230\u65b0\u7684\u5b9e\u4f8b\uff1b"))),(0,a.kt)("p",null,"\u6307\u5b9a\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable, Scope } from '@nestjs/common';\n\n@Injectable({ scope: Scope.REQUEST })\nexport class BookService {}\n\n// \u6216\u8005\u5728module\u7684providers\u4e2d\u5b9a\u4e49\n{ provide: BookService, useClass: BookService, scope: Scope.REQUEST },\n{\n  provide: 'exists_book',\n  useExisting: BookService,\n  scope: Scope.REQUEST\n}\n")),(0,a.kt)("h2",{id:"module"},"Module"),(0,a.kt)("p",null,"\u6a21\u5757\u7684\u5e38\u89c4\u64cd\u4f5c\u5df2\u7ecf\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"\u6982\u5ff5"),"\u4e2d\u4e86\u89e3\u8fc7\u4e86\uff0c\u4f7f\u7528\u65b9\u6cd5\u901a\u5e38\u662f\u76f4\u63a5\n\u8fd9\u91cc\u8bf4\u8bf4\u52a8\u6001\u6a21\u5757\u3002\u6240\u8c13\u7684\u52a8\u6001\u6a21\u5757\u5176\u5b9e\u5c31\u662f\u6839\u636e"))}c.isMDXComponent=!0}}]);