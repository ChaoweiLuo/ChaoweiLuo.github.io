"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},l=void 0,s={unversionedId:"React/Redux\u6846\u67b6",id:"React/Redux\u6846\u67b6",title:"Redux\u6846\u67b6",description:"\u4e00\u3001Redux\u6846\u67b6",source:"@site/docs/09-React/06-Redux\u6846\u67b6.md",sourceDirName:"09-React",slug:"/React/Redux\u6846\u67b6",permalink:"/docs/React/Redux\u6846\u67b6",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flux\u67b6\u6784",permalink:"/docs/React/Flux\u67b6\u6784"},next:{title:"Angular\u7b80\u4ecb\uff0c\u9879\u76ee\u642d\u5efa\uff0c\u7ec4\u4ef6\u521b\u5efa\uff0cTypescript",permalink:"/docs/Angular/Angular\u7b80\u4ecb\uff0c\u9879\u76ee\u642d\u5efa\uff0c\u7ec4\u4ef6\u521b\u5efa\uff0cTypescript"}},p={},i=[{value:"\u4e00\u3001Redux\u6846\u67b6",id:"\u4e00redux\u6846\u67b6",level:2},{value:"\u4e8c\u3001Redux\u8bbe\u8ba1\u601d\u60f3",id:"\u4e8credux\u8bbe\u8ba1\u601d\u60f3",level:2},{value:"\u4e09\u3001\u793a\u4f8b",id:"\u4e09\u793a\u4f8b",level:2},{value:"1\u3001\u521b\u5efastore",id:"1\u521b\u5efastore",level:3},{value:"2\u3001\u5728\u89c6\u56fe\u70b9\u51fb\u6309\u94ae\u53d1\u9001action",id:"2\u5728\u89c6\u56fe\u70b9\u51fb\u6309\u94ae\u53d1\u9001action",level:3},{value:"3\u3001\u521b\u5efareducer\uff0c\u63a5\u6536action",id:"3\u521b\u5efareducer\u63a5\u6536action",level:3},{value:"4\u3001\u4f1a\u4e8b\u5148\u5728\u89c6\u56fe\u521d\u59cb\u5316\u65f6\u7ed1\u5b9a\u89c6\u56fe\u66f4\u65b0\u51fd\u6570",id:"4\u4f1a\u4e8b\u5148\u5728\u89c6\u56fe\u521d\u59cb\u5316\u65f6\u7ed1\u5b9a\u89c6\u56fe\u66f4\u65b0\u51fd\u6570",level:3},{value:"\u56db\u3001\u4f18\u5316",id:"\u56db\u4f18\u5316",level:2},{value:"1\u3001\u5c01\u88c5action\u521b\u5efa\u51fd\u6570",id:"1\u5c01\u88c5action\u521b\u5efa\u51fd\u6570",level:3},{value:"2\u3001\u81ea\u52a8\u521b\u5efa\u5bb9\u5668\u7ec4\u4ef6",id:"2\u81ea\u52a8\u521b\u5efa\u5bb9\u5668\u7ec4\u4ef6",level:3},{value:"3\u3001reducer\u62c6\u5206",id:"3reducer\u62c6\u5206",level:3},{value:"4\u3001\u5f02\u6b65action",id:"4\u5f02\u6b65action",level:3}],c={toc:i};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00redux\u6846\u67b6"},"\u4e00\u3001Redux\u6846\u67b6"),(0,o.kt)("p",null,"Redux\u662f Flux\u67b6\u6784\u7684\u4f53\u73b0\uff0c\u5c06 Flux \u4e0e\u51fd\u6570\u5f0f\u7f16\u7a0b\u7ed3\u5408\u4e00\u8d77\uff0c\u5f88\u77ed\u65f6\u95f4\u5185\u5c31\u6210\u4e3a\u4e86\u6700\u70ed\u95e8\u7684\u524d\u7aef\u67b6\u6784\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1226).Z,width:"444",height:"120"})),(0,o.kt)("p",null,"Redux\u662f\u5728\u89e3\u51b3\u4e2d\u5927\u578b\u9879\u76ee\u7528\u5230\u7684\u6846\u67b6\uff0c\u50cfFlux\u4e00\u6837\uff0c\u5c0f\u578b\u9879\u76ee\u53ef\u4ee5\u4e0d\u5fc5\u4f7f\u7528\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u662f\u5426\u9700\u8981 Redux\uff0c\u90a3\u5c31\u662f\u4e0d\u9700\u8981\u5b83\u3002" \u2014\u2014someone'),(0,o.kt)("p",{parentName:"blockquote"},'"\u53ea\u6709\u9047\u5230 React \u5b9e\u5728\u89e3\u51b3\u4e0d\u4e86\u7684\u95ee\u9898\uff0c\u4f60\u624d\u9700\u8981 Redux \u3002" \u2014\u2014 Redux \u7684\u521b\u9020\u8005 Dan Abramov')),(0,o.kt)("h2",{id:"\u4e8credux\u8bbe\u8ba1\u601d\u60f3"},"\u4e8c\u3001Redux\u8bbe\u8ba1\u601d\u60f3"),(0,o.kt)("p",null,"Redux \u7684\u8bbe\u8ba1\u601d\u60f3\u5f88\u7b80\u5355\uff0c\u5c31\u4e24\u53e5\u8bdd\u3002"),(0,o.kt)("p",null,"\uff081\uff09Web \u5e94\u7528\u662f\u4e00\u4e2a\u72b6\u6001\u673a\uff0c\u89c6\u56fe\u4e0e\u72b6\u6001\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\u3002"),(0,o.kt)("p",null,"\uff082\uff09\u6240\u6709\u7684\u72b6\u6001\uff0c\u4fdd\u5b58\u5728\u4e00\u4e2a\u5bf9\u8c61\u91cc\u9762\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5763).Z,width:"481",height:"313"})),(0,o.kt)("p",null,"\u5982\u4e0a\u56fe\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"React Component"),"\u5373\u6211\u4eec\u901a\u5e38\u8bf4\u7684\u89c6\u56fe\uff0c\u89c6\u56fe\u53ef\u80fd\u89e6\u53d1\u4fee\u6539store\u7684\u4e8b\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539store\u4e8b\u4ef6\u7531",(0,o.kt)("inlineCode",{parentName:"li"},"Action Creators"),"\u521b\u5efa\u5e76\u901a\u8fc7store\u7684dispatch\u65b9\u6cd5\uff0c\u53d1\u9001\u7ed9store\u3002"),(0,o.kt)("li",{parentName:"ul"},"store\u63a5\u6536\u5230action\u540e\uff0c\u4f1a\u53d1\u9001\u7ed9",(0,o.kt)("inlineCode",{parentName:"li"},"Reducers"),"\uff0c\u53d1\u9001\u7ed9Reducers\u7684\u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u4e00\u4e2a\u662fstore\u672c\u8eab\uff0c\u4e00\u4e2a\u662faction\uff0c\u7136\u540eReducers\u62ff\u5230action\u5bf9\u539f\u6765\u7684store\u8fdb\u884c\u66f4\u65b0\uff0c\u7136\u540e\u8fd4\u56de\u65b0\u7684store\u7ed9store\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u5148\u4f1a\u5728\u5728\u89c6\u56fe\u52a0\u8f7d\u540e\u4e2d\u7ed1\u5b9a\u66f4\u65b0\u89c6\u56fe\u7684\u51fd\u6570\uff0c\u4e00\u65e6store\u53d1\u751f\u66f4\u65b0\u5c31\u4f1a\u540c\u6b65\u5230\u89c6\u56fe\u3002")),(0,o.kt)("h2",{id:"\u4e09\u793a\u4f8b"},"\u4e09\u3001\u793a\u4f8b"),(0,o.kt)("p",null,"\u4ee5\u5546\u54c1\u5217\u8868\u9875\u8fdb\u884c\u6f14\u793a\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528redux\u9996\u5148\u8981\u5b89\u88c5redux\u6a21\u5757\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i redux -S\n")),(0,o.kt)("h3",{id:"1\u521b\u5efastore"},"1\u3001\u521b\u5efastore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createStore } from 'redux';\nimport { reducer } from './reducer'\n\nexport let store = createStore(reducer);\n")),(0,o.kt)("h3",{id:"2\u5728\u89c6\u56fe\u70b9\u51fb\u6309\u94ae\u53d1\u9001action"},"2\u3001\u5728\u89c6\u56fe\u70b9\u51fb\u6309\u94ae\u53d1\u9001action"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {store} from './store'\n\nadd() {\n    let action = {\n        type: 'ADD_ITEM',\n        goods: {name:'\u65b0\u5546\u54c1'}\n    }\n    \n    store.dispatch(action);\n}\n")),(0,o.kt)("h3",{id:"3\u521b\u5efareducer\u63a5\u6536action"},"3\u3001\u521b\u5efareducer\uff0c\u63a5\u6536action"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { deepCopy } from \"./deepCopy\"; // \u81ea\u5b9a\u4e49\u6df1\u62f7\u8d1d\u51fd\u6570\n\n// \u53c2\u6570\u4ee5\uff1astore\u4e2d\u7684state\n// \u53c2\u6570\u4e8c\uff1astore\u4f20\u8fc7\u6765\u7684action\nexport let reducer = (state = {\n    list: [\n        { name: '\u5546\u54c11' },\n        { name: '\u5546\u54c12' },\n        { name: '\u5546\u54c13' },\n    ]\n}, action) => {\n    let newStore = {};\n    switch (action.type) {\n        case 'ADD_ITEM':\n            newStore = deepCopy(state);\n            newStore.list.push(action.goods);\n            return newStore;\n            break;\n        case 'DEL_ITEM':\n            newStore = deepCopy(state);\n            newStore.list.pop();\n            return newStore;\n            break;\n\n        default:\n            return state;\n            break;\n    }\n}\n")),(0,o.kt)("p",null,"state\u9700\u8981\u6709\u521d\u59cb\u503c\uff0c\u5373\u6ca1\u6709action\u4fee\u6539\u7684\u65f6\u5019\u7684\u521d\u59cb\u503c\u3002\u4e5f\u5c31\u662f\u89c6\u56fe\u4e2d\u4e0d\u70b9\u51fb\u6309\u94ae\u65f6\u540e\u663e\u793a\u7684\u9ed8\u8ba4\u503c\u3002"),(0,o.kt)("p",null,"\u65e2\u7136\u8981\u8fd4\u56de\u9ed8\u8ba4\u503c\uff0c\u6240\u4ee5\u5728default\u4e2d\uff0creturn state\u3002"),(0,o.kt)("h3",{id:"4\u4f1a\u4e8b\u5148\u5728\u89c6\u56fe\u521d\u59cb\u5316\u65f6\u7ed1\u5b9a\u89c6\u56fe\u66f4\u65b0\u51fd\u6570"},"4\u3001\u4f1a\u4e8b\u5148\u5728\u89c6\u56fe\u521d\u59cb\u5316\u65f6\u7ed1\u5b9a\u89c6\u56fe\u66f4\u65b0\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { List } from "./List";\nimport { store } from "./store";\nimport { addAction } from "./ActionCreators";\n\nexport class ListController extends React.Component{\n    constructor(props){\n        super(props)\n\n        this.add = this.add.bind(this)\n        this.updateView = this.updateView.bind(this)\n\n        this.state = store.getState()\n    }\n\n    componentDidMount(){\n        this.unsub = store.subscribe(this.updateView)\n    }\n\n    componentWillUnmount(){\n        // \u89e3\u7ed1\u89c6\u56fe\u66f4\u65b0\u51fd\u6570\n        this.unsub()\n    }\n    // \u89c6\u56fe\u66f4\u65b0\u51fd\u6570\n    updateView(){\n        this.setState(store.getState())\n    }\n\n    add(){\n        store.dispatch(addAction({name:"\u65b0\u7684\u5546\u54c1"}))\n    }\n\n    render(){\n        return <List list={this.state.list} add={this.add} />\n    }\n}\n')),(0,o.kt)("h2",{id:"\u56db\u4f18\u5316"},"\u56db\u3001\u4f18\u5316"),(0,o.kt)("h3",{id:"1\u5c01\u88c5action\u521b\u5efa\u51fd\u6570"},"1\u3001\u5c01\u88c5action\u521b\u5efa\u51fd\u6570"),(0,o.kt)("p",null,"\u53d1\u9001\u7684action\u4e00\u822c\u4f1a\u5c01\u88c5\u5230\u4e00\u4e2a\u51fd\u6570\u4e2d\u3002"),(0,o.kt)("p",null,"\u800caction\u7684type\u4e5f\u4f1a\u5c01\u88c5\u5230\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\uff0c\u907f\u514d\u91cd\u590d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// actionCreators\n\nimport { ADD_ITEM, DEL_ITEM } from "./actionTypes";\n\nexport let addAction = (goods) => {\n    return {\n        type: ADD_ITEM,\n        goods\n    }\n}\n\nexport let delAction = () => {\n    return {\n        type: DEL_ITEM\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// actionTypes.js\n\nexport const ADD_ITEM = 'ADD_ITEM';\nexport const DEL_ITEM = 'DEL_ITEM';\n")),(0,o.kt)("p",null,"\u4e8e\u662f\u6211\u4eec\u7684add\u51fd\u6570\u5c31\u53d8\u6210\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { addAction } from "./ActionCreators";\n\nadd(){\n    store.dispatch(addAction({name:"\u65b0\u7684\u5546\u54c1"}))\n}\n')),(0,o.kt)("h3",{id:"2\u81ea\u52a8\u521b\u5efa\u5bb9\u5668\u7ec4\u4ef6"},"2\u3001\u81ea\u52a8\u521b\u5efa\u5bb9\u5668\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u6211\u95e8\u4e4b\u524d\u5bb9\u5668\u7ec4\u4ef6\u548cUI\u7ec4\u4ef6\u90fd\u662f\u81ea\u5df1\u521b\u5efa\u7684\uff0c\u73b0\u5728react\u63d0\u4f9b\u4e86\u4e13\u95e8\u7684\u63d2\u4ef6\uff0c\u65b9\u4fbf\u6211\u4eec\u521b\u5efa\u5bb9\u5668\u7ec4\u4ef6\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u800c\u4e14\u7531\u4e8e\u521b\u5efa\u7684\u5bb9\u5668\u7ec4\u4ef6\u4ee3\u7801\u91cf\u5c0f\uff0c\u6240\u4ee5\u53ef\u4ee5\u5c06UI\u7ec4\u4ef6\u548c\u5bb9\u5668\u7ec4\u4ef6\u5408\u5e76\u6210\u4e00\u4e2a\u6587\u4ef6\u3002")),(0,o.kt)("p",null,"\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i react-redux -S\n")),(0,o.kt)("p",null,"\u7ec4\u4ef6\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// Goods.js\nimport { connect } from "react-redux";\nimport { addAction, delAction } from "../actionCreators";\n\n// 1\u3001\u5bb9\u5668\u90e8\u5206\n\n// \u6b64\u51fd\u6570\u653e\u5bb9\u5668\u7684state\nlet mapStateToProps = (state) => {\n    return {\n        list: state.list\n    }\n}\n// \u6b64\u51fd\u6570\u653e\u5bb9\u5668\u7684\u4e00\u4e9b\u65b9\u6cd5\nlet mapDispatchToProps = dispatch => {\n    return {\n        add() {\n            let name = this.refs.goodsInput.value;\n            let action = addAction({ name });\n\n            dispatch(action);\n        },\n        del() {\n            let action = delAction();\n\n            dispatch(action);\n        }\n    }\n}\n\n// \u6700\u540e\u5bfc\u5165UI\u4e2d\u7684Goods,Goods\u6765\u81eaUI\nexport let GoodsController = connect(mapStateToProps, mapDispatchToProps)(Goods);\n\n/*\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u5bb9\u5668\uff0cUI\u5206\u754c\u7ebf\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014*/\n\n// 2\u3001UI\u90e8\u5206\nexport class Goods extends React.Component {\n    constructor() {\n        super();\n    }\n\n    render() {\n        let { list } = this.props;\n        let domList = list.map((item, i) => {\n            return (\n                <li key={i}>{item.name}</li>\n            );\n        });\n        return (\n            <div>\n                \u5546\u54c1\u540d\uff1a<input type="text" ref="goodsInput" />\n                <button onClick={this.props.add.bind(this)}>\u6dfb\u52a0</button>\n                <button onClick={this.props.del}>\u5220\u9664</button>\n                <ul>\n                    {domList}\n                </ul>\n            </div>\n        );\n    }\n}\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\uff0c\u524d\u4e00\u90e8\u5206\u662f\u5bb9\u5668\uff0c\u540e\u4e00\u90e8\u5206\u662fUI\uff08",(0,o.kt)("strong",{parentName:"p"},"UI\u7ec4\u4ef6\u662f\u4e0d\u7528\u66b4\u9732\u51fa\u53bb\u7684"),"\uff09\uff0c\u5206\u754c\u8fd8\u662f\u5f88\u660e\u663e\u7684\u3002"),(0,o.kt)("p",null,"\u6700\u540e\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u6574\u4e2a\u5e94\u7528"),"\u9700\u8981\u6700\u5916\u9762\u5305\u88f9\u4e00\u5c42",(0,o.kt)("inlineCode",{parentName:"p"},"Provider"),"\u624d\u53ef\u4ee5\uff0c\u8fd8\u8981\u4f20\u4e00\u4e2astore\u53c2\u6570\u8fc7\u53bb\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render } from 'react-dom';\nimport { GoodsController } from './Goods';\nimport { Provider } from \"react-redux\";\nimport { store } from \"./store\";\n\nrender(<Provider store={store}><GoodsController /></Provider>, document.getElementById('app'));\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u81ea\u52a8\u521b\u5efa\u7684\u5bb9\u5668\u7ec4\u4ef6\u4e0d\u9700\u8981\u7ed1\u5b9a\u89c6\u56fe\u66f4\u65b0\u51fd\u6570\u3002")),(0,o.kt)("h3",{id:"3reducer\u62c6\u5206"},"3\u3001reducer\u62c6\u5206"),(0,o.kt)("p",null,"\u6211\u4eec\u4e4b\u524d\u7684reducer\u957f\u4e0b\u9762\u8fd9\u6837\uff0c\u53ea\u6709\u4e00\u4e2aGoods\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { deepCopy } from \"./deepCopy\";\n\nexport let reducer = (state = {\n    list: [\n        { name: '\u5546\u54c11' },\n        { name: '\u5546\u54c12' },\n        { name: '\u5546\u54c13' },\n    ]\n}, action) => {\n    let newStore = {};\n    switch (action.type) {\n        case 'ADD_ITEM':\n            newStore = deepCopy(state);\n            newStore.list.push(action.goods);\n            return newStore;\n            break;\n        case 'DEL_ITEM':\n            newStore = deepCopy(state);\n            newStore.list.pop();\n            return newStore;\n            break;\n\n        default:\n            return state;\n            break;\n    }\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u7ec4\u4ef6\u4e00\u591a\uff0c\u6240\u6709\u7684store\u7684\u521d\u59cbstate\u5c31\u4f1a\u79ef\u538b\u5728\u4e00\u8d77\u4e0d\u65b9\u4fbf\u7ba1\u7406\uff0c\u6240\u4ee5\u8981\u8fdb\u884c\u62c6\u5206\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u589e\u52a0\u4e00\u4e2aHome\u7ec4\u4ef6\uff0cHome\u7ec4\u4ef6\u6709title\u548cbanner\u5217\u8868\uff0c\u90a3\u4e48\u6211\u5c31\u8981\u5199\u5728\u4e00\u8d77\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { deepCopy } from \"../deepCopy\";\n\nexport let reducer = (state = {\n    list: [\n        { name: '\u5546\u54c11' },\n        { name: '\u5546\u54c12' },\n        { name: '\u5546\u54c13' },\n    ],\n    title: '\u9996\u9875',\n    banner: [\n        { name: '\u9996\u98751' },\n        { name: '\u9996\u98752' },\n        { name: '\u9996\u98753' },\n    ]\n}, action) => {\n    let newStore = deepCopy(state);;\n    switch (action.type) {\n        case 'ADD_ITEM':\n            newStore.list.push(action.goods);\n            return newStore;\n\n        case 'DEL_ITEM':\n            newStore.list.pop();\n            return newStore;\n\n        default:\n            return state;\n    }\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u6709\u66f4\u591a\u7ec4\u4ef6\u7684\u8bdd\u5c31\u66f4\u4e71\u4e86\u3002"),(0,o.kt)("p",null,"\u62c6\u5206\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"homeReducer.js"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"goodsReducer.js"),"\uff0c\u6700\u540e\u5408\u5e76\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// homeReducer.js\nexport let homeReducer = (state = {\n    title: '\u9996\u9875',\n    banner: [\n        { name: '\u9996\u98751' },\n        { name: '\u9996\u98752' },\n        { name: '\u9996\u98753' },\n    ]\n}, action) => {\n    return state;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// goodsReducer.js\nimport { deepCopy } from \"../deepCopy\";\n\nexport let goodsReducer = (state = {\n    list: [\n        { name: '\u5546\u54c11' },\n        { name: '\u5546\u54c12' },\n        { name: '\u5546\u54c13' },\n    ],\n}, action) => {\n    let newStore = deepCopy(state);;\n    switch (action.type) {\n        case 'ADD_ITEM':\n            newStore.list.push(action.goods);\n            return newStore;\n\n        case 'DEL_ITEM':\n            newStore.list.pop();\n            return newStore;\n\n        default:\n            return state;\n    }\n}\n")),(0,o.kt)("p",null,"\u5408\u5e76\u7684\u65f6\u5019\u9700\u8981\u7528\u5230\u4e00\u4e2a\u6765\u81earedux\u7684\u63d2\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"combineReducers"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { combineReducers } from "redux";\nimport { homeReducer } from "./homeReducer";\nimport { goodsReducer } from "./goodsReducer";\n\nexport let reducer = combineReducers({\n    home: homeReducer,\n    goods: goodsReducer\n});\n')),(0,o.kt)("h3",{id:"4\u5f02\u6b65action"},"4\u3001\u5f02\u6b65action"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u521b\u5efaaction\u7684\u51fd\u6570actionCreators\u4e2d\u7684\u4ee3\u7801\u5fc5\u987b\u662f\u7eaf\u51fd\u6570\uff0c\u4e5f\u5fc5\u987b\u662f\u540c\u6b65\u51fd\u6570\uff0c\u6709\u70b9\u7c7b\u4f3c\u4e0emutations\u3002")),(0,o.kt)("p",null,"\u90a3\u4e48\u5982\u679c\u6709\u5f02\u6b65\u7684\u4ee3\u7801\u600e\u4e48\u529e\uff1f\u6bd4\u5982ajax\u83b7\u53d6\u6570\u636e\uff1f"),(0,o.kt)("p",null,"\u8fd9\u65f6\u5019\u9700\u8981\u7528\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"redux-thunk"),"\u5b89\u88c5\u63d2\u4ef6\u3002"),(0,o.kt)("p",null,"1\u3001\u5b89\u88c5\u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i redux-thunk -S\n")),(0,o.kt)("p",null,"2\u3001\u4fee\u6539store"),(0,o.kt)("p",null,"applyMiddleware \u662f\u4e2d\u95f4\u4ef6\u7684\u610f\u601d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createStore, applyMiddleware } from 'redux';\nimport { reducer } from './reducers'\nimport thunk from \"redux-thunk\";\n\nexport let store = createStore(reducer, applyMiddleware(thunk));\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c\u6211\u4eecstore\u7684dispatch\u7684action\u5c31\u53ef\u4ee5\u4e0d\u662f\u5bf9\u8c61\u4e86\uff0c\u53ef\u4ee5\u662f\u4e2a\u51fd\u6570\u7c7b\u578b\uff0c\u5982\u679c\u662f\u51fd\u6570\u7c7b\u578b\u7684\u8bdd\uff0cdispatch\u8fd9\u4e2a\u51fd\u6570\uff0c\u4f1a\u4f7f\u5f97\u8fd9\u4e2a\u51fd\u6570\u7acb\u5373\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u4e00\u822c\u8fd9\u4e2a\u51fd\u6570\u5c31\u662f\u7528\u6765\u5f02\u6b65\u8bf7\u6c42\u6570\u636e\u7684\uff0c\u5728\u8fd9\u4e2a\u51fd\u6570\u8bf7\u6c42\u5230\u6570\u636e\u7684\u65f6\u5019\u624d\u4f1a\u5728\u8fd9\u4e2a\u51fd\u6570\u5185\u90e8\u518d\u6b21dispatch\u5f97\u5230\u7684\u6570\u636e\uff0c\u8fd9\u4e2a\u6570\u636e\u5c31\u662f\u4e00\u4e2a\u5bf9\u8c61\u3002\u6709\u70b9\u50cf\u7ed5\u5f2f\u7684\u6837\u5b50\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5c31\u5728Home\u9875\u8bf7\u6c42\u5546\u54c1\u5217\u8868\uff1a"),(0,o.kt)("p",null,"Home.js \u5bb9\u5668\u52a0UI\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'\nimport { connect } from "react-redux";\nimport { getListAction } from "./actionCreators";\n\n// UI\u7ec4\u4ef6\nclass UI extends React.Component {\n    constructor() {\n        super();\n    }\n\n    componentDidMount() {\n        // UI\u52a0\u8f7d\u5b8c\u6210\u5c31\u83b7\u53d6ajax\u4fe1\u606f\n        this.props.getList();\n    }\n\n    render() {\n        let { title, banner } = this.props;\n        let domList = banner.map((item, i) => {\n            return (\n                <li key={i}>{item._id}</li>\n            );\n        });\n        return (\n            <div>\n                <h1>{title}</h1>\n                <ul>{domList}</ul>\n            </div>\n        );\n    }\n}\n\nlet mapStateToProps = (state) => {\n    // \u6ce8\u610f\uff1a\u7531\u4e8e\u62c6\u5206\u4e86reducer\uff0c\u6240\u4ee5state\u76f8\u5e94\u7684\u4e5f\u6539\u53d8\u4e86\u3002\n    // \u5c31\u4e0d\u662f\u4e4b\u524d\u7684state.title\u548cstate.banner\u4e86\n    return {\n        title: state.home.title,\n        banner: state.home.banner\n    }\n}\n\nlet mapDispatchToProps = dispatch => {\n    return {\n        getList() {\n            // getListAction\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u7528\u6765\u83b7\u53d6ajax\u6570\u636e\n            dispatch(getListAction);\n        }\n    }\n}\n\nexport let Home = connect(mapStateToProps, mapDispatchToProps)(UI);\n')),(0,o.kt)("p",null,"\u521b\u5efaactionCreators.js\u51fd\u6570\uff1a\u5f02\u6b65\u8bf7\u6c42ajax\u6570\u636e\uff0c\u5e76\u53d1\u7ed9homeReducer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { BANNER_ITEM } from "./actionTypes";\nimport axios from \'axios\';\n\nexport let setListAction = (banner) => {\n    return {\n        type: BANNER_ITEM,\n        banner\n    }\n}\n\n// getListAction\u6709\u4e00\u4e2a\u53c2\u6570\u5c31\u662fmapDispatchToProps\u7684\u53c2\u6570dispatch\uff0c\u7528\u6765\u53d1\u9001action\nexport let getListAction = dispatch => {\n    axios.get("/zhuiszhu/goods/getHot")\n        .then(({ data }) => {\n            // \u83b7\u53d6\u5230\u6570\u636e\u540e\uff0c\u5c06action\u5bf9\u8c61\u53d1\u9001\u7ed9homeReducer\n            dispatch(setListAction(data.list));\n        })\n}\n')),(0,o.kt)("p",null,"homeReducer\u63a5\u6536\u6570\u636e\uff0c\u66f4\u65b0homeState\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { BANNER_ITEM } from "../actionTypes";\nimport { deepCopy } from "../deepCopy";\n\nexport let homeReducer = (state = {\n    title: \'\u9996\u9875\',\n    banner: []\n}, action) => {\n    let newState = deepCopy(state);\n    switch (action.type) {\n        case BANNER_ITEM:\n            newState.banner = action.banner;\n            return newState;\n\n        default:\n            return state;\n    }\n}\n')),(0,o.kt)("p",null,"\u81ea\u52a8\u521b\u5efa\u7684\u5bb9\u5668\u7ec4\u4ef6\u4f1a\u81ea\u52a8\u66f4\u65b0\u89c6\u56fe\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053store\u7684dispatch\u7684action\u5728\u5f02\u6b65\u7684\u65f6\u5019\u662f\u4e2a\u51fd\u6570\u7c7b\u578b\uff0c\u5982\u679c\u6211\u4eec\u8981\u83b7\u53d6\u5546\u54c1\u8be6\u60c5\u7684\u8bdd\uff0c\u5fc5\u7136\u4f1a\u5728\u7c7b\u4f3c\u4e0b\u9762\u4ee3\u7801\u7684getListAction\u51fd\u6570\u4e2d\u4f20\u5165\u53c2\u6570\uff0c\u4e00\u65e6\u4f20\u5165\u53c2\u6570\uff0c\u5c31\u4e0d\u662f\u51fd\u6570\u7c7b\u578b\u4e86\uff0c\u7c7b\u578b\u662f\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002\u6240\u4ee5\u6211\u4eec\u5e94\u8be5\u5728getListAction\u4e2d\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\u7c7b\u578b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"let mapDispatchToProps = dispatch => {\n    return {\n        getList() {\n            // getListAction\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u7528\u6765\u83b7\u53d6ajax\u6570\u636e\n            dispatch(getListAction(id));\n        }\n    }\n}\n")),(0,o.kt)("p",null,"\u7c7b\u4f3c\u4e0b\u9762\u7684\u4f2a\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'export let getListAction = dispatch => {\n    // \u8fd4\u56de\u7684\u662f\u4e2a\u51fd\u6570\n    return dispatch => {\n        axios.get("/zhuiszhu/goods/getHot",{parems:{xxx}})\n        .then(({ data }) => {\n            dispatch(xxx);\n        })\n    }\n}\n')))}u.isMDXComponent=!0},1226:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},5763:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/9-d672ab5e722c890c20bb6d024cb75f96.png"}}]);