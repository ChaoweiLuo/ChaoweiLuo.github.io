"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(k,p(p({ref:t},u),{},{components:n})):o.createElement(k,p({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<a;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},p=void 0,l={unversionedId:"React/react\u8def\u7531",id:"React/react\u8def\u7531",title:"react\u8def\u7531",description:"\u4e00\u3001react\u7684\u8def\u7531",source:"@site/docs/09-React/04-react\u8def\u7531.md",sourceDirName:"09-React",slug:"/React/react\u8def\u7531",permalink:"/docs/React/react\u8def\u7531",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"react\u5185\u5bb9\u63d2\u69fd\uff0c\u751f\u547d\u5468\u671f\u51fd\u6570",permalink:"/docs/React/react\u5185\u5bb9\u63d2\u69fd\uff0c\u751f\u547d\u5468\u671f\u51fd\u6570"},next:{title:"Flux\u67b6\u6784",permalink:"/docs/React/Flux\u67b6\u6784"}},i={},s=[{value:"\u4e00\u3001react\u7684\u8def\u7531",id:"\u4e00react\u7684\u8def\u7531",level:2},{value:"1\u3001\u8bbe\u7f6edist\u751f\u6210\u7684App.js\u4e3a\u7edd\u5bf9\u8def\u5f84",id:"1\u8bbe\u7f6edist\u751f\u6210\u7684appjs\u4e3a\u7edd\u5bf9\u8def\u5f84",level:3},{value:"2\u3001\u8bbe\u7f6e\u53ea\u52a0\u8f7d\u4e00\u4e2a\u7ec4\u4ef6",id:"2\u8bbe\u7f6e\u53ea\u52a0\u8f7d\u4e00\u4e2a\u7ec4\u4ef6",level:3},{value:"3\u3001\u8bbe\u7f6e\u4e25\u683c\u5339\u914d",id:"3\u8bbe\u7f6e\u4e25\u683c\u5339\u914d",level:3},{value:"4\u3001\u8bbe\u7f6e\u81ea\u52a8\u8df3\u8f6c",id:"4\u8bbe\u7f6e\u81ea\u52a8\u8df3\u8f6c",level:3},{value:"5\u3001\u8bbe\u7f6elink\u8df3\u8f6c",id:"5\u8bbe\u7f6elink\u8df3\u8f6c",level:3},{value:"6\u3001\u591a\u89c6\u56fe\u8def\u7531",id:"6\u591a\u89c6\u56fe\u8def\u7531",level:3},{value:"7\u3001\u8def\u7531\u5d4c\u5957",id:"7\u8def\u7531\u5d4c\u5957",level:3},{value:"8\u3001\u7f16\u7a0b\u5f0f\u5bfc\u822a",id:"8\u7f16\u7a0b\u5f0f\u5bfc\u822a",level:3},{value:"9\u3001\u8def\u7531\u4f20\u53c2",id:"9\u8def\u7531\u4f20\u53c2",level:3},{value:"9.1\u3001\u95ee\u53f7\u4f20\u53c2",id:"91\u95ee\u53f7\u4f20\u53c2",level:4},{value:"9.2\u3001\u8def\u5f84\u4f20\u53c2",id:"92\u8def\u5f84\u4f20\u53c2",level:4},{value:"9.3\u3001state\u4f20\u53c2",id:"93state\u4f20\u53c2",level:4}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00react\u7684\u8def\u7531"},"\u4e00\u3001react\u7684\u8def\u7531"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips:"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"import ReactDOM from 'react-dom';")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM.render(<MyRouter />, document.getElementById('app'));")),(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u76f4\u63a5\u5199\u6210\u4e0b\u9762\u7684\u65b9\u5f0f\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"import { render } from 'react-dom';")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"render(<MyRouter />, document.getElementById('app'));"))),(0,r.kt)("p",null,"\u597d\u4e86\uff0c\u8a00\u5f52\u6b63\u4f20\u3002\u6211\u4eec\u5148\u521b\u5efaHome\u548cGoods\u9875\u9762\u3002"),(0,r.kt)("p",null,"\u7136\u540e\u518d\u521b\u5efa\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"AppRouter.js"),"\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u7528\u5230\u8def\u7531\uff0c\u6240\u4ee5\u8fd8\u9700\u8981\u5b89\u88c5\u8def\u7531\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i react-router-dom -S\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728AppRouter.js\u4e2d\u5f15\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';\n// \u7ed9BrowserRouter\u8d77\u4e2a\u522b\u540dRouter\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"BrowserRouter"),"\uff1a\u8868\u793a\u6b63\u5e38\u659c\u6760\u8df3\u8f6c\u7684\u8def\u7531"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"HashRouter"),"\uff1a\u7c7b\u4f3cvue\u7684\u5e26#\u7684\u8def\u7531\u8df3\u8f6c"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Route"),"\uff1a\u914d\u7f6e\u8def\u7531\u7684\u8df3\u8f6c\u5730\u5740")),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528HashRouter\u53ef\u4ee5\u4e0d\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u4f46\u662f\u5982\u679c\u4f7f\u7528\u6b63\u5e38\u8df3\u8f6c\u9700\u8981\u5728\u5728config\u4e2d\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"devServer: {\n    historyApiFallback: true,\n    disableHostCheck: true,\n},\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4e24\u53e5\u8bdd\u7684\u610f\u601d\u662f\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u7ba1\u8df3\u8f6c\u7684\u7406\u7531\u8def\u5f84\u662f\u4ec0\u4e48\uff0c\u59cb\u7ec8\u52a0\u8f7dindex.html\u6587\u4ef6\uff0c\u4fdd\u8bc1\u5355\u9875\u9762\u5e94\u7528\u3002")),(0,r.kt)("p",null,"\u7136\u540e\u5728AppRouter.js\u4e2d\u8fdb\u884c\u8def\u7531\u8df3\u8f6c\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';\nimport { Home } from './Pages/Home';\nimport { Goods } from './Pages/Goods';\n\nexport class Router extends React.Component {\n    constructor() {\n        super();\n    }\n    render() {\n        return (\n            // BrowserRouter\u4e0b\u9762\u53ea\u80fd\u6709\u4e00\u4e2a\u5b50\u5143\u7d20\uff0c\u6240\u4ee5\u7528div\u5305\u88f9\u8d77\u6765\n            // \u4f7f\u7528Route\u8fdb\u884c\u8def\u7531\u914d\u7f6e\u3002\n            <Router>\n                <div>\n                    <Route path=\"/home\" component={Home}></Route>\n                    <Route path=\"/goods\" component={Goods}></Route>\n                </div>\n            </Router>\n        );\n    }\n}\n")),(0,r.kt)("h3",{id:"1\u8bbe\u7f6edist\u751f\u6210\u7684appjs\u4e3a\u7edd\u5bf9\u8def\u5f84"},"1\u3001\u8bbe\u7f6edist\u751f\u6210\u7684App.js\u4e3a\u7edd\u5bf9\u8def\u5f84"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u628a",(0,r.kt)("inlineCode",{parentName:"p"},'<Route path="/goods" component={Goods}></Route>')," \u6539\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},'<Route path="/home/goods" component={Goods}></Route>')," \u7684\u65f6\u5019\uff0c\u4f1a\u62a5\u9519\uff0c\u627e\u4e0d\u5230app.js\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET http://localhost:3000/home/app.js net::ERR_ABORTED 404 (Not Found)\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684App.js\u662f\u76f8\u5bf9\u8def\u5f84\uff0c\u6211\u4eec\u9700\u8981\u628a\u5b83\u6539\u4e3a\u7edd\u5bf9\u8def\u5f84\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'output: {\n    path: __dirname + "/dist/",\n    filename: "app.js",\n    publicPath: "/"\n},\ndevServer: {\n    publicPath: "/"\n},\n')),(0,r.kt)("h3",{id:"2\u8bbe\u7f6e\u53ea\u52a0\u8f7d\u4e00\u4e2a\u7ec4\u4ef6"},"2\u3001\u8bbe\u7f6e\u53ea\u52a0\u8f7d\u4e00\u4e2a\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u53d1\u73b0\uff0cHome\u548cGoods\u540c\u65f6\u52a0\u8f7d\u51fa\u6765\u4e86\uff0c\u600e\u4e48\u8bbe\u7f6e\u540c\u65f6\u53ea\u52a0\u8f7d\u4e00\u4e2a\u7ec4\u4ef6\u5462\uff1f"),(0,r.kt)("p",null,"\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"Switch"),"\u7ec4\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { BrowserRouter as Router, HashRouter, Route, Switch } from \'react-router-dom\';\n\nexport class MyRouter extends React.Component {\n    constructor() {\n        super();\n    }\n    render() {\n        return (\n            <Router>\n                {/* \u7528 Switch \u5305\u88f9\u9700\u8981\u663e\u793a\u7684\u8def\u7531\u5373\u53ef*/}\n                <Switch>\n                    <Route path="/home" component={Home} />\n                    <Route path="/home/goods" component={Goods} />\n                </Switch>\n            </Router>\n        );\n    }\n}\n')),(0,r.kt)("h3",{id:"3\u8bbe\u7f6e\u4e25\u683c\u5339\u914d"},"3\u3001\u8bbe\u7f6e\u4e25\u683c\u5339\u914d"),(0,r.kt)("p",null,"\u6b64\u65f6\u4e0d\u7ba1\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"/home"),"\u8fd8\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"/home/goods"),"\u90fd\u53ea\u52a0\u8f7d\u7684Home\u7ec4\u4ef6\uff0c\u539f\u56e0\u662f\u8def\u7531\u5339\u914d\u9ed8\u8ba4\u662f\u53ea\u8981\u5f00\u5934\u5339\u914d\u5230\u5c31\u663e\u793a\uff0c\u4e0d\u518d\u5f80\u540e\u9762\u5339\u914d\uff0c\u5982\u4f55\u8bbe\u7f6e\u4e25\u683c\u5339\u914d\uff1f"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"exact={true}"),"\u8bbe\u7f6e\u4e25\u683c\u5339\u914d\u6a21\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Route path="/home" exact={true} component={Home} />\n<Route path="/home/goods" exact={true} component={Goods} />\n')),(0,r.kt)("h3",{id:"4\u8bbe\u7f6e\u81ea\u52a8\u8df3\u8f6c"},"4\u3001\u8bbe\u7f6e\u81ea\u52a8\u8df3\u8f6c"),(0,r.kt)("p",null,"\u521a\u5f00\u542f\u670d\u52a1\u6253\u5f00\u6d4f\u89c8\u5668\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u4e0d\u4f1a\u663e\u793a\u4efb\u4f55\u4e1c\u897f\uff0c\u6211\u4eec\u5e0c\u671b\u81ea\u52a8\u8df3\u8f6c\u5230/home\u8def\u7531\u5982\u4f55\u8bbe\u7f6e\uff1f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { BrowserRouter as Router, HashRouter, Route, Switch,  Redirect} from \'react-router-dom\';\n\n<Switch>\n    {/* \u5728\u6839\u8def\u5f84\u4e0b\u81ea\u52a8\u8df3\u8f6c\u5230home\u9875 */}\n    <Redirect path="/" exact={true} to="/home" />\n    <Route path="/home" exact={true} component={Home} />\n    <Route path="/home/goods" exact={true} component={Goods} />\n</Switch>\n')),(0,r.kt)("h3",{id:"5\u8bbe\u7f6elink\u8df3\u8f6c"},"5\u3001\u8bbe\u7f6elink\u8df3\u8f6c"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u7c7b\u4f3cvue\u7684router-link\u70b9\u51fb\u540e\u8df3\u8f6c\u7684\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Link } from "react-router-dom";\n\n<Link to="/home/goods" >\u8df3\u8f6c\u5230goods\u9875</Link>\n')),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5199\u6210\u5bf9\u8c61\u7684\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Link to={{ pathname: '/home/goods', search: '?goodsid=8' }} >\u8df3\u8f6c\u5230goods\u9875</Link>\n<Link to={{ pathname: '/home/goods?goodsid=8' }} >\u8df3\u8f6c\u5230goods\u9875</Link>\n")),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u8ba9Link\u8df3\u8f6c\u4e4b\u540e\u4e0d\u80fd\u540e\u9000\u7684\u8bdd\uff0c\u53ef\u4ee5\u52a0\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"replace={true}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Link replace={true} to={{ pathname: '/home/goods?goodsid=8' }} >\u8df3\u8f6c\u5230goods\u9875</Link>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u73b0Link\u9009\u4e2d\u6837\u5f0f\u6548\u679c\uff1a")),(0,r.kt)("p",null,"react\u4e0d\u80fd\u50cfvue\u90a3\u6837\uff0c\u76f4\u63a5\u52a0class\u5c5e\u6027\uff0creact\u9700\u8981\u6ce8\u610f\u4e24\u70b9\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"1\u3001\u4e0d\u80fd\u5728Link\u4e0a\u9762\u6dfb\u52a0\uff0c\u53ea\u80fd\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"NavLink"),"\u4e0a\u9762\u6dfb\u52a0\u7c7b\u6837\u5f0f\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"2\u3001\u7c7b\u6837\u5f0f\u540d\u4e0d\u53eb active-class\uff0c\u800c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"activeClassName"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Link, Route, Switch, NavLink } from "react-router-dom";\n\n<NavLink activeClassName="active" to="/goods" >\u8df3\u8f6c\u5230goods\u9875</NavLink>\n')),(0,r.kt)("h3",{id:"6\u591a\u89c6\u56fe\u8def\u7531"},"6\u3001\u591a\u89c6\u56fe\u8def\u7531"),(0,r.kt)("p",null,"react\u7684\u8def\u7531\u5339\u914d\u91c7\u7528\u5206\u5e03\u5f0f\u8def\u7531\uff0c\u5373",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u9700\u8981\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u6765\u4e66\u5199\u8def\u7531\u5339\u914d\u89c4\u5219\uff0c\u800c\u662f\u76f4\u63a5\u5199\u5728\u8def\u7531\u4e0a\u3002")),(0,r.kt)("p",null,"\u591a\u89c6\u56fe\u8def\u7531\u5c31\u662f\uff1a\u4e00\u6b21\u663e\u793a\u591a\u4e2a\u8def\u7531\u5339\u914d\u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u5176\u5b9e\u4e0d\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"Switch"),"\u7684\u65b9\u5f0f\u5c31\u662f\u591a\u89c6\u56fe\u8def\u7531\uff0c\u6240\u6709\u7684Route\u8def\u7531\u5339\u914d\u5230\u7684\u90fd\u4f1a\u663e\u793a\u51fa\u6765\u3002"),(0,r.kt)("p",null,"\u800c\u4e25\u683c\u6a21\u5f0f\u53ea\u662f\u786e\u5b9a\u591a\u89c6\u56fe\u8def\u7531\u4e2d\u89c6\u56fe\u662f\u5426\u663e\u793a\u800c\u5df2\u3002\u5339\u914d\u4e0d\u5230\u5c31\u4e0d\u663e\u793a\uff0c\u4f46\u662f\u90a3\u4e2a\u5751\u8fd8\u5728\u7684\u3002"),(0,r.kt)("h3",{id:"7\u8def\u7531\u5d4c\u5957"},"7\u3001\u8def\u7531\u5d4c\u5957"),(0,r.kt)("p",null,"\u53ea\u9700\u8981\u5728\u7ec4\u4ef6\u4e2d\u7ee7\u7eed\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"Route"),"\u5373\u53ef\uff0c\u8fd9\u4e2a\u8def\u7531\u5c31\u662f\u5b50\u8def\u7531\u3002"),(0,r.kt)("p",null,"\u5982\u6211\u4eec\u5728Home\u4e0b\u5d4c\u5957A.js\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Link, Route } from \"react-router-dom\";\nimport { A } from './A'\n\nexport class Home extends React.Component {\n    constructor() {\n        super();\n    }\n    render() {\n        return (\n            <div>\n                <h4>\u9996\u9875</h4>\n                <Link to={{ pathname: '/home/goods', search: '?goodsid=8' }} >\u8df3\u8f6c\u5230goods\u9875</Link>\n                \n                {/* \u6dfb\u52a0\u5b50\u8def\u7531A */}\n                <Route pathname=\"/home/a\" component={A} />\n            </div>\n        );\n    }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a\u5b50\u8def\u7531\u7684 pathname \u4e00\u5b9a\u662f\u7edd\u5bf9\u8def\u5f84\u3002")),(0,r.kt)("h3",{id:"8\u7f16\u7a0b\u5f0f\u5bfc\u822a"},"8\u3001\u7f16\u7a0b\u5f0f\u5bfc\u822a"),(0,r.kt)("p",null,"\u4ec0\u4e48\u662f\u7f16\u7a0b\u5f0f\u5bfc\u822a\uff1f\u8bf4\u4eba\u8bdd\u5c31\u662fjs\u4ee3\u7801\u89e6\u53d1\u8def\u7531\u8df3\u8f6c\uff0c\u800c\u4e0d\u662f\u5728\u6807\u7b7e\u4e2d\u8bbe\u7f6e\u8def\u7531\u8df3\u8f6c\u3002"),(0,r.kt)("p",null,"\u4e3e\u4f8b\uff1a\u5728Home\u9875\u70b9\u51fb\u6309\u94ae\uff0c\u8df3\u8f6c\u5230Goods\u9875\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Home.js\nexport class Home extends React.Component {\n    constructor() {\n        super();\n        this.goGoods = this.goGoods.bind(this);\n    }\n    goGoods() {\n        // \u4f7f\u7528push\u6216\u8005replace\u8df3\u8f6c\n        this.props.history.push('/goods');\n    }\n    render() {\n        return (\n            <div>\n                <button onClick={this.goGoods}>\u8df3\u8f6c\u5230Goods</button>\n            </div>\n        );\n    }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},"1\u3001\u5e76\u4e0d\u662f\u6240\u6709\u7ec4\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this.props"),"\u6240\u6709history\u5c5e\u6027\u3002\u53ea\u6709\u5f53\u524d\u7684\u7ec4\u4ef6\u662f",(0,r.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u8def\u7531\u52a0\u8f7d\u51fa\u6765"),"\u7684\uff08\u4e5f\u5c31\u662f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},'<Route path="/home" exact={true} component={Home} />'),"\u52a0\u8f7d\u51fa\u6765\uff09\u624d\u4f1a\u6709history\u5c5e\u6027\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"2\u3001\u5982\u679c\u4e0d\u662f\u901a\u8fc7\u8def\u7531\u52a0\u8f7d\u51fa\u6765\u7684\u7ec4\u4ef6\uff0c\u4f46\u662f\u60f3\u8981\u7f16\u7a0b\u5f0f\u5bfc\u822a\u600e\u4e48\u529e\uff1f",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u7531\u5b83\u7684\u7236\u7ec4\u4ef6\u4f20\u9012",(0,r.kt)("inlineCode",{parentName:"strong"},"this.props.history"),"\u8fc7\u6765\u3002\u5982\u679c\u5b83\u7236\u7ec4\u4ef6\u6709\u7684\u8bdd"),"\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6bd4\u5982\uff1aHome\u7ec4\u4ef6\u4e0b\u52a0\u8f7dBox\u7ec4\u4ef6\uff0cHome\u7ec4\u4ef6\u7ed9Box\u7ec4\u4ef6\u4f20\u9012\u53c2\u6570\u3002"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"<Box history={this.props.history}>")),(0,r.kt)("p",{parentName:"blockquote"},"\u6b64\u65f6\uff0cBox\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this.props"),"\u5c31\u6709\u4e86history\u5c5e\u6027\u4e86\u3002")),(0,r.kt)("h3",{id:"9\u8def\u7531\u4f20\u53c2"},"9\u3001\u8def\u7531\u4f20\u53c2"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a\u70b9\u51fbgoods\u5217\u8868\uff0c\u4f20\u9012id\u7ed9detail\u7ec4\u4ef6\u3002"),(0,r.kt)("h4",{id:"91\u95ee\u53f7\u4f20\u53c2"},"9.1\u3001\u95ee\u53f7\u4f20\u53c2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"//goods.js\nimport { Link } from 'react-router-dom'\n\nexport class Goods extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            goodsList: [\n                { goodsId: 1, name: 'AAA', price: 12 },\n                { goodsId: 2, name: 'BBB', price: 42 },\n                { goodsId: 3, name: 'CCC', price: 54 },\n            ]\n        }\n    }\n    render() {\n        let list = this.state.goodsList.map(item => {\n            return (\n                // \u95ee\u53f7\u4f20\u53c2\n                <Link to={`/detail?id=${item.goodsId}`} key={item.goodsId}>\n                    <h3>\u540d\u79f0\uff1a{item.name}</h3>\n                    <p>\u4ef7\u683c\uff1a{item.price}</p>\n                </Link>\n            );\n        });\n        return (\n            <div>\n                {list}\n            </div >\n        );\n    }\n}\n")),(0,r.kt)("p",null,"\u5728detail\u7ec4\u4ef6\uff0c\u5728\u7ec4\u4ef6\u52a0\u8f7d\u5b8c\u6bd5\u540e\u63a5\u6536\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u95ee\u53f7\u4f20\u53c2\u4f20\u9012\u8fc7\u6765\u7684\u6570\u636e\u5b58\u653e\u5728\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"this.props.location.search"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// detail.js\nimport url from 'url';\n\ncomponentDidMount() {\n    // \u95ee\u53f7\u4f20\u53c2\uff1a\u83b7\u53d6\u4f20\u9012\u8fc7\u6765\u7684id\n    let { id } = url.parse(this.props.location.search, true).query;\n    console.log(id);\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e\u5728webpack\u53ef\u4ee5\u4f7f\u7528node\u7684\u4e00\u4e9b\u63d2\u4ef6\uff0c\u6bd4\u5982url\uff0c\u53ef\u4ee5\u65b9\u4fbf\u83b7\u53d6\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"this.props.location.search"),"\u4e2d\u7684id\u503c\uff0c\u800c\u4e0d\u9700\u8981\u81ea\u5df1\u89e3\u6790\u3002")),(0,r.kt)("h4",{id:"92\u8def\u5f84\u4f20\u53c2"},"9.2\u3001\u8def\u5f84\u4f20\u53c2"),(0,r.kt)("p",null,"\u9996\u5148\u8981\u5728\u8def\u7531\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Route path="/detail/:goodsid" exact={true} component={Detail} />\n')),(0,r.kt)("p",null,"\u7136\u540e\u5728goods.js\u91cc\u9762\u548c\u95ee\u53f7\u4f20\u53c2\u57fa\u672c\u4e00\u81f4\uff0c\u53ea\u662f\u95ee\u53f7\u6539\u6210\u4e86\u8def\u5f84\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Link to={`/detail/${item.goodsId}`} key={item.goodsId}>\n    <h3>\u540d\u79f0\uff1a{item.name}</h3>\n    <p>\u4ef7\u683c\uff1a{item.price}</p>\n</Link>\n")),(0,r.kt)("p",null,"\u5728detail.js\u52a0\u8f7d\u5b8c\u6210\u63a5\u6536\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8def\u5f84\u4f20\u53c2\u4f20\u9012\u7684\u6570\u636e\u5b58\u653e\u5728\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"this.props.match.params"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidMount() {\n    // \u8def\u5f84\u4f20\u53c2\uff1a\u83b7\u53d6\u4f20\u9012\u8fc7\u6765\u7684id\n    console.log(this.props.match.params);\n}\n")),(0,r.kt)("h4",{id:"93state\u4f20\u53c2"},"9.3\u3001state\u4f20\u53c2"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u4f20\u9012\u5927\u91cf\u6570\u636e\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"state"),"\u8fdb\u884c\u4f20\u9012\uff0c\u8fd9\u79cd\u4f20\u9012\u7684\u65b9\u5f0f",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a\u5728\u5730\u5740\u680f\u663e\u793a\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," { pathname: `/detail/${item.goodsId}`, state: { name: item.name, price: item.price } }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cdstate\u4f20\u53c2\u7684\u5199\u6cd5\uff0c\u9700\u8981\u6ce8\u610fto\u7684\u503c\u4e0d\u518d\u662f\u5b57\u7b26\u4e32\u62fc\u63a5\uff0c\u800c\u662f\u4e00\u4e2a\u5bf9\u8c61\u3002")),(0,r.kt)("p",null,"\u63a5\u6536\u8fd8\u662f\u5728detail\u52a0\u8f7d\u540e\u63a5\u6536\uff1a"),(0,r.kt)("p",null,"\u5176state\u5185\u5bb9\u5b58\u5728\u4e8e\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"this.props.location.state")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidMount() {\n    // state\u5927\u91cf\u6570\u636e\u4f20\u9012\n    console.log(this.props.location.state);\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1astate\u4f20\u53c2\u4e0d\u9002\u5408\u8be6\u60c5\u9875\uff0c\u56e0\u4e3a\u65e0\u6cd5\u5206\u4eab\u7ed9\u522b\u4eba\u67e5\u770b\u76f8\u540c\u7684\u5185\u5bb9\u3002")))}c.isMDXComponent=!0}}]);