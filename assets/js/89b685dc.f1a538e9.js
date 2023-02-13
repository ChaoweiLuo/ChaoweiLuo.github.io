"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5813],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,s=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(h,r(r({ref:e},d),{},{components:n})):a.createElement(h,r({ref:e},d))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=n.length,r=new Array(s);r[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[c]="string"==typeof t?t:i,r[1]=l;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5649:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const s={},r=void 0,l={unversionedId:"React/Flux\u67b6\u6784",id:"React/Flux\u67b6\u6784",title:"Flux\u67b6\u6784",description:"\u4e00\u3001flux\u67b6\u6784",source:"@site/docs/09-React/05-Flux\u67b6\u6784.md",sourceDirName:"09-React",slug:"/React/Flux\u67b6\u6784",permalink:"/docs/React/Flux\u67b6\u6784",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"react\u8def\u7531",permalink:"/docs/React/react\u8def\u7531"},next:{title:"Redux\u6846\u67b6",permalink:"/docs/React/Redux\u6846\u67b6"}},o={},p=[{value:"\u4e00\u3001flux\u67b6\u6784",id:"\u4e00flux\u67b6\u6784",level:2},{value:"1\u3001\u57fa\u672c\u6982\u5ff5",id:"1\u57fa\u672c\u6982\u5ff5",level:3},{value:"2\u3001\u793a\u4f8b",id:"2\u793a\u4f8b",level:3},{value:"2.1\u3001\u521b\u5efastore\uff0c\u4fdd\u5b58\u6570\u636e\u6a21\u578b",id:"21\u521b\u5efastore\u4fdd\u5b58\u6570\u636e\u6a21\u578b",level:4},{value:"2.2\u3001\u521b\u5efaaction",id:"22\u521b\u5efaaction",level:4},{value:"2.3\u3001\u521b\u5efadispatcher",id:"23\u521b\u5efadispatcher",level:4},{value:"2.4\u3001\u66f4\u65b0store",id:"24\u66f4\u65b0store",level:4},{value:"2.5\u3001\u66f4\u65b0view",id:"25\u66f4\u65b0view",level:4},{value:"\u4f18\u5316view\u66f4\u65b0",id:"\u4f18\u5316view\u66f4\u65b0",level:5},{value:"\u7ee7\u7eed\u4f18\u5316",id:"\u7ee7\u7eed\u4f18\u5316",level:5},{value:"\u4f18\u5316store\u548cview\u66f4\u65b0",id:"\u4f18\u5316store\u548cview\u66f4\u65b0",level:5},{value:"2.6\u3001\u89c6\u56fe\u5206\u5c42",id:"26\u89c6\u56fe\u5206\u5c42",level:4},{value:"3\u3001flux\u9879\u76ee\u601d\u8def",id:"3flux\u9879\u76ee\u601d\u8def",level:3}],d={toc:p};function c(t){let{components:e,...s}=t;return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e00flux\u67b6\u6784"},"\u4e00\u3001flux\u67b6\u6784"),(0,i.kt)("p",null,"\u4ec0\u4e48\u662fflux\uff1f"),(0,i.kt)("p",null,"\u7b80\u5355\u8bf4\uff0cFlux \u662f\u4e00\u79cd\u67b6\u6784\u601d\u60f3\uff0c\u4e13\u95e8\u89e3\u51b3\u8f6f\u4ef6\u7684\u7ed3\u6784\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u4e00\u822c",(0,i.kt)("strong",{parentName:"p"},"\u4e2d\u5927\u578breact\u9879\u76ee"),"\u4f1a\u7528\u5230 Flux\uff0c\u4fbf\u4e8e\u7ba1\u7406\u6570\u636e\u6a21\u578b\u3002\u5c0f\u578b\u9879\u76ee\u5c31\u6ca1\u5fc5\u8981\u4f7f\u7528\u4e86\u3002"),(0,i.kt)("h3",{id:"1\u57fa\u672c\u6982\u5ff5"},"1\u3001\u57fa\u672c\u6982\u5ff5"),(0,i.kt)("p",null,"\u9996\u5148\uff0cFlux\u5c06\u4e00\u4e2a\u5e94\u7528\u5206\u6210\u56db\u4e2a\u90e8\u5206\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"View"),"\uff1a \u89c6\u56fe\u5c42"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Action"),"\uff08\u52a8\u4f5c\uff09\uff1a\u89c6\u56fe\u5c42\u53d1\u51fa\u7684\u6d88\u606f\uff0c\u7528\u6765\u4fee\u6539\u6570\u636e\u6a21\u578b\uff08\u6bd4\u5982mouseClick\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dispatcher"),"\uff08\u6d3e\u53d1\u5668\uff09\uff1a\u7528\u6765\u63a5\u6536Actions\u3001\u6267\u884c\u56de\u8c03\u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Store"),"\uff08\u6570\u636e\u5c42\uff09\uff1a\u7528\u6765\u5b58\u653e\u5e94\u7528\u7684\u72b6\u6001\uff0c\u4e00\u65e6\u53d1\u751f\u53d8\u52a8\uff0c\u5c31\u63d0\u9192Views\u8981\u66f4\u65b0\u9875\u9762")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7019).Z,width:"424",height:"184"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Flux \u7684\u6700\u5927\u7279\u70b9\uff0c\u5c31\u662f\u6570\u636e\u7684"\u5355\u5411\u6d41\u52a8"\u3002'),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"\u7528\u6237\u8bbf\u95ee View\uff0c\uff08\u540c\u65f6\u5c06View\u4e2d\u89c6\u56fe\u66f4\u65b0\u7684\u51fd\u6570\u8d4b\u503c\u7ed9Store\u7684\u76d1\u542c\u51fd\u6570subscribe\uff09"),(0,i.kt)("li",{parentName:"ol"},"View \u53d1\u51fa\u7528\u6237\u7684 Action"),(0,i.kt)("li",{parentName:"ol"},"Dispatcher \u6536\u5230 Action\uff0c\u8981\u6c42 Store \u8fdb\u884c\u76f8\u5e94\u7684\u66f4\u65b0"),(0,i.kt)("li",{parentName:"ol"},"Store \u66f4\u65b0\u540e\uff0c\uff08\u89e6\u53d1Store\u7684subscribe\u51fd\u6570\u6765\u66f4\u65b0View\u89c6\u56fe\uff09"))),(0,i.kt)("h3",{id:"2\u793a\u4f8b"},"2\u3001\u793a\u4f8b"),(0,i.kt)("p",null,"\u6548\u679c\uff1a\u521b\u5efaList\u7ec4\u4ef6\u663e\u793a\u5217\u8868\uff0c\u70b9\u51fb\u6dfb\u52a0\u6309\u94ae\u6dfb\u52a0\u6570\u636e\uff0c\u70b9\u51fb\u5220\u9664\u6309\u94ae\u5220\u9664\u6700\u540e\u4e00\u4e2a\u6570\u636e\u3002"),(0,i.kt)("h4",{id:"21\u521b\u5efastore\u4fdd\u5b58\u6570\u636e\u6a21\u578b"},"2.1\u3001\u521b\u5efastore\uff0c\u4fdd\u5b58\u6570\u636e\u6a21\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"export let store = {\n    state: {\n        list: [\n            { name: '\u5546\u54c11' },\n            { name: '\u5546\u54c12' },\n            { name: '\u5546\u54c13' },\n            { name: '\u5546\u54c14' },\n        ]\n    },\n}\n")),(0,i.kt)("h4",{id:"22\u521b\u5efaaction"},"2.2\u3001\u521b\u5efaaction"),(0,i.kt)("p",null,"\u70b9\u51fb\u6309\u94ae\u7684\u65f6\u5019\u65f6\u5019\u521b\u5efa\u3002"),(0,i.kt)("p",null,"\u521b\u5efa\u7684\u65f6\u5019\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\u662f\u4e3a\u4e86\u5206\u8fa8\u4e4b\u540e\u8be5\u5982\u4f55\u64cd\u4f5cstore\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// List.js\nimport { store } from './store'\nimport dispatcher from './dispatcher'\nexport class List extends React.Component {\n    constructor() {\n        super();\n        // List\u52a0\u8f7d\u7684\u65f6\u5019\uff0c\u901a\u8fc7store.getList()\u51fd\u6570\u83b7\u53d6store\u7684\u6570\u636e\n        this.state = store.getList();\n        this.add = this.add.bind(this);\n        this.del = this.del.bind(this);\n    }\n    add() {\n        // \u521b\u5efaaction\n        let action = {\n            type: 'ADD_ITEM',\n            name: '\u65b0\u7684\u5546\u54c1'\n        }\n    }\n    del() {\n        // \u521b\u5efaaction\n        let action = {\n            type: 'DEL_ITEM'\n        }\n    }\n\n    render() {\n        let domList = this.state.list.map((item, i) => {\n            return (\n                <li key={i}>\n                    {item.name}\n                </li>\n            );\n        })\n        return (\n            <div>\n                <button onClick={this.add}>\u6dfb\u52a0</button>\n                <button onClick={this.del}>\u5220\u9664</button>\n                <ul>\n                    {domList}\n                </ul>\n            </div>\n        )\n    }\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"store\u7684\u6570\u636e\u83b7\u53d6\u4e5f\u4e0d\u80fd\u76f4\u63a5\u64cd\u4f5c\uff0c\u800c\u662f\u9700\u8981store\u81ea\u5df1\u63d0\u4f9b\u81ea\u5b9a\u4e49\u65b9\u6cd5\u624d\u53ef\u4ee5\u3002")),(0,i.kt)("h4",{id:"23\u521b\u5efadispatcher"},"2.3\u3001\u521b\u5efadispatcher"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'// dispatcher.js\nimport flux from "flux";\nimport { store } from "./store";\n\nlet Dispatcher = flux.Dispatcher;\nlet dispatcher = new Dispatcher();\ndispatcher.register(action => {\n    // \u53c2\u6570action\u5373\u662f\u83b7\u53d6\u5230action\u7684\u503c\n    console.log(action);\n})\n\nexport default dispatcher;\n')),(0,i.kt)("p",null,"\u4e3a\u4e86\u80fd\u83b7\u53d6\u5230action\uff0c\u6240\u4ee5\u5728\u521b\u5efaaction\u4e4b\u540e\uff0c\u8fd8\u8981\u53d1\u9001\u7ed9dispatcher\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import dispatcher from './dispatcher'\n\nadd() {\n    let action = {\n        type: 'ADD_ITEM',\n        name: '\u65b0\u7684\u5546\u54c1'\n    }\n    dispatcher.dispatch(action);\n}\ndel() {\n    let action = {\n        type: 'DEL_ITEM'\n    }\n    dispatcher.dispatch(action);\n}\n")),(0,i.kt)("h4",{id:"24\u66f4\u65b0store"},"2.4\u3001\u66f4\u65b0store"),(0,i.kt)("p",null,"dispatcher\u83b7\u53d6\u5230action\u540e\u9700\u8981\u66f4\u65b0store\u3002\u4e5f\u9700\u8981\u8c03\u7528store\u63d0\u4f9b\u7684\u81ea\u5b9a\u4e49\u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// store.js\nexport let store = {\n    state: {\n        list: [\n            { name: '\u5546\u54c11' },\n            { name: '\u5546\u54c12' },\n            { name: '\u5546\u54c13' },\n            { name: '\u5546\u54c14' },\n        ]\n    },\n    getList() {\n        return this.state;\n    },\n    // \u81ea\u5b9a\u4e49\u64cd\u4f5cstore\u65b9\u6cd5\n    addList(name) {\n        this.state.list.push({ name });\n    },\n    delList(name) {\n        this.state.list.pop();\n    },\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// dispatcher.js\nimport flux from \"flux\";\nimport { store } from \"./store\";\n\nlet Dispatcher = flux.Dispatcher;\nlet dispatcher = new Dispatcher();\ndispatcher.register(action => {\n    // \u6839\u636etype\u6765\u64cd\u4f5c\u4e0d\u540c\u7684store\u65b9\u6cd5\n    switch (action.type) {\n        case 'ADD_ITEM':\n            store.addList(action.name);\n            break;\n        case 'DEL_ITEM':\n            store.delList();\n            break;\n        default:\n            break;\n    }\n})\n\nexport default dispatcher;\n")),(0,i.kt)("h4",{id:"25\u66f4\u65b0view"},"2.5\u3001\u66f4\u65b0view"),(0,i.kt)("p",null,"\u6b64\u65f6store\u5df2\u7ecf\u66f4\u65b0\uff0c\u4f46\u662fview\u6ca1\u6709\u66f4\u65b0\uff0c\u5982\u4f55\u66f4\u65b0view\uff1f"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5728store\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cfbindUpdate\uff0c\u7528\u6765\u8c03\u7528view\u7684\u66f4\u65b0\u65b9\u6cd5\u3002\u5728List\u52a0\u8f7d\u65f6\u5c31\u628abindUpdate\u8d4b\u503c\u4e3aview\u7684\u66f4\u65b0\u65b9\u6cd5\uff0c\u53ea\u8981store\u7684\u6570\u636e\u4e00\u66f4\u65b0\uff0c\u5c31\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u6765\u66f4\u65b0\u89c6\u56fe\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"export let store = {\n    state: {\n        list: [\n            { name: '\u5546\u54c11' },\n            { name: '\u5546\u54c12' },\n            { name: '\u5546\u54c13' },\n            { name: '\u5546\u54c14' },\n        ]\n    },\n    // \u5b9a\u4e49\u66f4\u65b0view\u53d8\u91cf\n    bindUpdate: null,\n    getList() {\n        return this.state;\n    },\n    addList(name) {\n        // \u66f4\u65b0store\n        this.state.list.push({ name });\n\n        // \u6267\u884c\u66f4\u65b0view\n        this.bindUpdate();\n    },\n    delList(name) {\n        // \u66f4\u65b0store\n        this.state.list.pop();\n\n        // \u6267\u884c\u66f4\u65b0view\n        this.bindUpdate();\n    },\n\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { store } from './store'\nimport dispatcher from './dispatcher'\nexport class List extends React.Component {\n    constructor() {\n        super();\n\n        this.state = store.getList();\n        this.add = this.add.bind(this);\n        this.del = this.del.bind(this);\n    }\n    componentDidMount = () => {\n        // List\u52a0\u8f7d\u5b8c\u6210\u540e\u5c06bindUpdate\u8d4b\u503c\u4e3a\u66f4\u65b0\u65b9\u6cd5\n        store.bindUpdate = this.updateView.bind(this);\n    }\n    add() {\n        let action = {\n            type: 'ADD_ITEM',\n            name: '\u65b0\u7684\u5546\u54c1'\n        }\n        dispatcher.dispatch(action);\n    }\n    del() {\n        let action = {\n            type: 'DEL_ITEM'\n        }\n        dispatcher.dispatch(action);\n    }\n    // \u66f4\u65b0\u65b9\u6cd5\uff0c\u83b7\u53d6store.state\u7684\u6700\u65b0\u6570\u636e\u8fdb\u884c\u66f4\u65b0\n    updateView() {\n        this.setState(store.state)\n    }\n\n    render() {\n        let domList = this.state.list.map((item, i) => {\n            return (\n                <li key={i}>\n                    {item.name}\n                </li>\n            );\n        })\n        return (\n            <div>\n                <button onClick={this.add}>\u6dfb\u52a0</button>\n                <button onClick={this.del}>\u5220\u9664</button>\n                <ul>\n                    {domList}\n                </ul>\n            </div>\n        )\n    }\n}\n")),(0,i.kt)("p",null,"\u4e8e\u662f\u4e4e\uff0c\u6574\u4e2a\u5355\u5411\u6d41\u52a8\u5faa\u73af\u5b8c\u6210\u3002"),(0,i.kt)("h5",{id:"\u4f18\u5316view\u66f4\u65b0"},"\u4f18\u5316view\u66f4\u65b0"),(0,i.kt)("p",null,"\u4e4b\u524dview\u7684\u66f4\u65b0\u662f\u901a\u8fc7\u5c06List\u7684\u4e00\u4e2a\u66f4\u65b0\u65b9\u6cd5\u8d4b\u503c\u7ed9store\u7684\u4e00\u4e2a\u53d8\u91cf\uff0c\u4f46\u662f\u6709\u4e2a\u95ee\u9898\u662f\uff0c\u5982\u679c\u6709\u5f88\u591a\u4e2a\u7ec4\u4ef6\u7684\u8bdd\uff0c\u5c31\u7531\u5f88\u591a\u4e2astore\uff0c\u5c31\u9700\u8981\u5f88\u591a\u4e2a\u53d8\u91cf\uff0c\u90a3\u5c31\u592a\u9ebb\u70e6\u4e86\uff0c\u5176\u540d\u79f0\u5934\u90fd\u8d77\u5927\u4e86\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7node\u81ea\u5e26\u7684event\u5bf9\u8c61\u6765\u505a\u89c2\u5bdf\u8005\u6a21\u5f0f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"let EventEmitter = require('events').EventEmitter;\nlet event = new EventEmitter();\n\nexport let store = {\n    state: {\n        list: [\n            { name: '\u5546\u54c11' },\n            { name: '\u5546\u54c12' },\n            { name: '\u5546\u54c13' },\n            { name: '\u5546\u54c14' },\n        ]\n    },\n    getList() {\n        return this.state;\n    },\n    addList(name) {\n        this.state.list.push({ name });\n        // \u6bcf\u6b21\u6570\u636e\u6a21\u578b\u6709\u53d8\u66f4\uff0c\u89e6\u53d1update\u4e8b\u4ef6\n        event.emit('update');\n    },\n    delList(name) {\n        this.state.list.pop();\n        // \u6bcf\u6b21\u6570\u636e\u6a21\u578b\u6709\u53d8\u66f4\uff0c\u89e6\u53d1update\u4e8b\u4ef6\n        event.emit('update');\n    },\n    bindUpdate(cb) {\n        // \u76d1\u542cupdate\u4e8b\u4ef6\n        event.on('update', cb);\n    },\n    unBindUpdate(cb) {\n        this.removeListener('update', cb);\n    }\n}\n")),(0,i.kt)("p",null,"\u5728List\u91cc\u9762\u52a0\u8f7d\u5b8c\u6210\u540e\u8fdb\u884c\u7ed1\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"bindUpdate"),"\u51fd\u6570\uff1a"),(0,i.kt)("p",null,"\u5378\u8f7d\u7684\u65f6\u5019\u7ed1\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"unBindUpdate"),"\u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"componentDidMount = () => {\n    store.bindUpdate(this.updateView.bind(this));\n}\ncomponentWillUnmount() {\n    store.unBindUpdate(this.updateView.bind(this));\n}\n")),(0,i.kt)("p",null,"\u8fd9\u65f6\u5019\u4e0d\u7ba1\u6709\u591a\u5c11\u4e2a\u7ec4\u4ef6\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528bindUpdate\u548cunBindUpdate\u8fdb\u884c\u89c6\u56fe\u66f4\u65b0\u3002"),(0,i.kt)("h5",{id:"\u7ee7\u7eed\u4f18\u5316"},"\u7ee7\u7eed\u4f18\u5316"),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528event\u7684\u65f6\u5019\uff0cnew\u4e86\u4e00\u4e2a\u5bf9\u8c61\uff0c\u53ef\u662f\u5c31\u53ea\u7528\u5230\u4e86on\u548cemit\u65b9\u6cd5\uff0c\u592a\u6d6a\u8d39\u5185\u5b58\u4e86\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53d1\u73b0event\u5bf9\u8c61\u4e2d\u5176\u5b9e\u6ca1\u6709on\u548cemit\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u662fEventEmitter\u539f\u578b\u5bf9\u8c61\u4e2d\u7684\uff0c\u90a3\u4e48\u6211\u4eec\u76f4\u63a5\u628aEventEmitter\u539f\u578b\u5bf9\u8c61\u62ff\u8fc7\u6765\u5c31\u597d\u4e86\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"let EventEmitter = require('events').EventEmitter;\n\nexport let store = {\n    state: {\n        list: [\n            { name: '\u5546\u54c11' },\n            { name: '\u5546\u54c12' },\n            { name: '\u5546\u54c13' },\n            { name: '\u5546\u54c14' },\n        ]\n    },\n    // \u628aEventEmitter.prototype\u5168\u90e8copy\u8fc7\u6765\uff0c\u5c31\u4e0d\u9700\u8981new\u4e86\u3002\n    ...EventEmitter.prototype,\n    getList() {\n        return this.state;\n    },\n    addList(name) {\n        this.state.list.push({ name });\n\n        // \u6267\u884c\u66f4\u65b0\n        // this.bindUpdate();\n        this.emit('update');\n    },\n    delList(name) {\n        this.state.list.pop();\n\n        // \u6267\u884c\u66f4\u65b0\n        this.emit('update');\n    },\n    bindUpdate(cb) {\n        this.on('update', cb);\n    }\n\n}\n")),(0,i.kt)("p",null,"\u8c03\u7528\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u4f7f\u7528this.on\u548cthis.emit\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,i.kt)("h5",{id:"\u4f18\u5316store\u548cview\u66f4\u65b0"},"\u4f18\u5316store\u548cview\u66f4\u65b0"),(0,i.kt)("p",null,"\u4e4b\u524dstore\u7684\u66f4\u65b0\u65b9\u5f0f\u662f\u5728dispatcher\u4e2d\u8c03\u7528store\u7684\u66f4\u65b0\u5404\u4e2a\u66f4\u65b0\u65b9\u6cd5\u8fdb\u884c\u66f4\u65b0\uff0c\u5982\u679c\u65b9\u6cd5\u5f88\u591a\u7684\u8bdd\uff0c\u5c31\u8981\u5199\u5f88\u591a\u65b9\u6cd5\u6bd4\u8f83\u9ebb\u70e6\u3002\u5e76\u4e14\u6bcf\u4e2a\u65b9\u6cd5\u4e2d\u90fd\u9700\u8981emit\u66f4\u65b0\u89c6\u56fe\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8937).Z,width:"522",height:"482"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5510).Z,width:"494",height:"509"})),(0,i.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u5728store\u4e2d\u589e\u52a0\u4e00\u4e2a\u7c7b\u4f3creact\u7684setState\u65b9\u6cd5\uff0c\u4e00\u6b21\u6027\u66f4\u6539\u6240\u6709store\u7684state\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6363).Z,width:"532",height:"528"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3970).Z,width:"515",height:"522"})),(0,i.kt)("h4",{id:"26\u89c6\u56fe\u5206\u5c42"},"2.6\u3001\u89c6\u56fe\u5206\u5c42"),(0,i.kt)("p",null,"\u6211\u4eec\u4e4b\u524dList\u7ec4\u4ef6\u89c6\u56fe\u7684\u663e\u793a\u548c\u903b\u8f91\u5904\u7406\u4ee3\u7801\u662f\u5199\u5728\u4e00\u8d77\u7684\uff0c\u89c6\u56fe\u5206\u5c42\u5c31\u662f\u628a\u4ed6\u4eec\u5206\u5f00\u3002"),(0,i.kt)("p",null,"\u5206\u5f00\u540e\u5206\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"\u5bb9\u5668\u7ec4\u4ef6"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"UI\u7ec4\u4ef6")),(0,i.kt)("p",null,"UI\u7ec4\u4ef6\u590d\u8d1f\u8d23\u89c6\u56fe\u663e\u793a\uff1b"),(0,i.kt)("p",null,"\u5bb9\u5668\u7ec4\u4ef6\u5305\u88f9UI\uff0c\u5e76\u8d1f\u8d23\u903b\u8f91\u5904\u7406\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u5c06List\u5206\u5c42\uff1a"),(0,i.kt)("p",null,"\u5bb9\u5668\u7ec4\u4ef6\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"ListController.js")," "),(0,i.kt)("p",null,"UI\u7ec4\u4ef6\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"List.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// List.js\n\nexport class List extends React.Component {\n    constructor() {\n        super();\n    }\n    render() {\n        let domList = this.props.list.map((item, i) => {\n            return (\n                <li key={i}>\n                    {item.name}\n                </li>\n            );\n        })\n        return (\n            <div>\n                <button onClick={this.props.add}>\u6dfb\u52a0</button>\n                <button onClick={this.props.del}>\u5220\u9664</button>\n                <ul>\n                    {domList}\n                </ul>\n            </div>\n        )\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"//ListController.js\n\nimport { store } from '../store'\nimport dispatcher from '../dispatcher'\nimport { List } from './List'\n\nexport class ListController extends React.Component {\n    constructor() {\n        super();\n\n        this.state = store.getState();\n        this.add = this.add.bind(this);\n        this.del = this.del.bind(this);\n    }\n    componentDidMount = () => {\n        store.bindUpdate(this.updateView.bind(this));\n    }\n    componentWillUnmount() {\n        store.unBindUpdate(this.updateView.bind(this));\n    }\n\n    add() {\n        let action = {\n            type: 'ADD_ITEM',\n            name: '\u65b0\u7684\u5546\u54c1'\n        }\n        dispatcher.dispatch(action);\n    }\n    del() {\n        let action = {\n            type: 'DEL_ITEM'\n        }\n        dispatcher.dispatch(action);\n    }\n    updateView() {\n        this.setState(store.state)\n    }\n\n    render() {\n        // \u8c03\u7528List UI\u7ec4\u4ef6\n        return <List list={this.state.list} add={this.add} del={this.del} />\n    }\n}\n")),(0,i.kt)("h3",{id:"3flux\u9879\u76ee\u601d\u8def"},"3\u3001flux\u9879\u76ee\u601d\u8def"),(0,i.kt)("p",null,"1\u3001\u5c06\u89c6\u56fe\u90e8\u5206\u7684\u9875\u9762\u7ec4\u4ef6\u62c6\u5206\u6210\u5bb9\u5668\u7ec4\u4ef6\u548cUI\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u5bb9\u5668\u7ec4\u4ef6\u53ef\u7ee7\u627f \u5c01\u88c5\u597d\u7684 Controller \u4ee5\u81ea\u52a8\u5b9e\u73b0\u7ed1\u5b9a\u66f4\u65b0\u89c6\u56fe\u65b9\u6cd5\u53ca\u5378\u8f7d\u7ec4\u4ef6\u65f6\u81ea\u52a8\u89e3\u7ed1\uff0c\u907f\u514d\u6240\u6709\u5bb9\u5668\u7ec4\u4ef6\u5199\u76f8\u540c\u7684\u4ee3\u7801\u3002\n\uff08\u5176\u4e2d\u5dee\u5f02\u90e8\u5206\u5404\u4e2a\u7ec4\u4ef6\u7684store\u901a\u8fc7\u6784\u9020\u51fd\u6570\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\u3002\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"export class Controller extends React.Component {\n    constructor(props, store) {\n        super(props);\n        this.store = store;\n        this.state = this.store.getState();\n        this.store.subscribe(this.updateView.bind(this));\n    }\n\n    updateView() {\n        this.setState(this.store.getState());\n    }\n\n    componentWillUnmount() {\n        this.store.unBindUpdate(this.updateView.bind(this));\n    }\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Controller \u4e4b\u6240\u4ee5\u7ee7\u627f React.Component\u662f\u56e0\u4e3a\u5bb9\u5668\u7ec4\u4ef6\u9700\u8981\uff0c\u4f46\u662f\u53c8\u4e0d\u80fd\u540c\u65f6\u7ee7\u627fController\u548cReact.Component\uff0c\u6240\u4ee5\u91c7\u53d6\u8fd9\u79cd\u5d4c\u5957\u7ee7\u627f\u7684\u65b9\u5f0f\u3002")),(0,i.kt)("p",null,"UI\u7ec4\u4ef6\u6240\u6709\u6570\u636e(\u70b9\u51fb\u7b49\u5404\u79cd\u4e8b\u4ef6\u6240\u8c03\u7528\u7684\u51fd\u6570)\u5747\u6765\u81ea\u4e8eprops(\u7531\u5bb9\u5668\u7ec4\u4ef6\u4f20\u5165)\n\u7c7b\u4f3c\u4ee5\u4e0b\u65b9\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"render() {\n    return <Home {...this.state} />\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<Home />")," \u5373\u662fUI\u7ec4\u4ef6\u3002\nthis.state \u54ea\u91cc\u6765\u5462\uff1f\n\u6765\u81ea\u5bf9\u5e94\u7684store\uff1athis.state = HomeStore.getState();\nstore\u7684state\u6765\u81ea\u54ea\u91cc\u5462\uff1f\n\u6765\u81ea\u9875\u9762\u52a0\u8f7d\u65f6ajax\u8bf7\u6c42\uff0c\u8bf7\u6c42\u5230\u6570\u636e\u5199\u5165store\u3002\n\u65e2\u7136\u8981\u64cd\u4f5cstore\uff0c\u90a3\u4e48\u5c31\u8981\u901a\u8fc7action->dispatcher->store->view\u7684\u987a\u5e8f\u6765\u3002"),(0,i.kt)("p",null,"2\u3001\u521b\u5efaaction\u5de5\u5382\u51fd\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2a\u521d\u59cb\u5316 \u7684action\u5de5\u5382\u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u9700\u8981\u7684\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u5c06\u62ff\u5230\u7684\u6570\u636e\u5c01\u88c5\u5230 action\u4e2d"),(0,i.kt)("li",{parentName:"ul"},"\u5c06action\u53d1\u9001\u5230dispatcher (\u901a\u8fc7.dispatch()\u65b9\u6cd5)")),(0,i.kt)("p",null,"3\u3001\u5728\u6d3e\u53d1\u5668dispatcher\u4e2d\u914d\u7f6e\u5bf9\u5e94\u7684case\n\u5e76\u4e14\u4eceaction\u4e2d\u62ff\u5230\u6570\u636e\u540e\uff0c\u8bbe\u7f6e\u5230\u5bf9\u5e94store\u4e2d\u5373\u53ef\n\u901a\u8fc7\u5404\u81ea\u7ec4\u4ef6\u7684\u7c7b\u4f3c",(0,i.kt)("inlineCode",{parentName:"p"},"HomeStore.setState(action);"),"\u65b9\u5f0f\u8fdb\u884c\u8bbe\u7f6e\u3002\nstore\u7684state\u66f4\u65b0\u4e86\uff0c\u6ce8\u610f\u9700\u8981\u5728\u5bb9\u5668\u7ec4\u4ef6\u52a0\u8f7d\u5b8c\u6210\u540e\u7ed1\u5b9a\u89c6\u56fe\u66f4\u65b0\u65b9\u6cd5\uff0c\u89c6\u56fe\u66f4\u65b0\u65b9\u6cd5\u5c31\u662f\u7ec4\u4ef6\u83b7\u53d6\u6700\u65b0store\u7684state\u6570\u636e\u3002"),(0,i.kt)("p",null,"4\u3001\u5728\u5bb9\u5668\u7ec4\u4ef6\u7684\u52a0\u8f7d\u5b8c\u6210\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\uff0c\u8c03\u7528\u4e0a\u8ff0\u6b65\u9aa4\u5c01\u88c5\u597d\u7684action\u5de5\u5382\u51fd\u6570\uff08\u4e5f\u5c31\u662f\u6253\u5f00\u9875\u9762\u7684\u65f6\u5019\u8fdb\u884cajax\u8bf7\u6c42\uff09"),(0,i.kt)("p",null,"5\u3001\u8def\u7531\u90e8\u5206\u5f15\u5165\u7684\u7ec4\u4ef6 \u6ce8\u610f\u9700\u8981\u5207\u6362\u6210\u5bb9\u5668\u7ec4\u4ef6\u3002"))}c.isMDXComponent=!0},7019:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/3-837f5a90db2bfdae4c1d319a35598bc4.png"},8937:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/4-b4a0f34341f9763c6b96b7f331aedf54.png"},5510:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/5-c1f1a490a28602212028b13b581cf977.png"},6363:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/6-9f1b80b786c95f05fb0aadd069813897.png"},3970:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/7-133adce9e5d95c25f4dc08ca1b24becb.png"}}]);