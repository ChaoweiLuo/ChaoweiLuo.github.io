"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1227],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),o=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(t),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(h,p(p({ref:n},c),{},{components:t})):a.createElement(h,p({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:r,p[1]=s;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const l={},p="React\u5165\u95e8\u6559\u7a0b",s={unversionedId:"React/\u5165\u95e8\u6559\u7a0b",id:"React/\u5165\u95e8\u6559\u7a0b",title:"React\u5165\u95e8\u6559\u7a0b",description:"1\u3001JSX \u7b80\u4ecb",source:"@site/docs/09-React/00-\u5165\u95e8\u6559\u7a0b.mdx",sourceDirName:"09-React",slug:"/React/\u5165\u95e8\u6559\u7a0b",permalink:"/docs/React/\u5165\u95e8\u6559\u7a0b",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6",permalink:"/docs/Vue/\u81ea\u5b9a\u4e49\u4e8b\u4ef6"},next:{title:"react\u6982\u8ff0\uff0c\u9879\u76ee\u642d\u5efa\uff0cjsx\uff0c\u7236\u5b50\u4f20\u503c",permalink:"/docs/React/react\u6982\u8ff0\uff0c\u9879\u76ee\u642d\u5efa\uff0cjsx\uff0c\u7236\u5b50\u4f20\u503c"}},i={},o=[{value:"1\u3001JSX \u7b80\u4ecb",id:"1jsx-\u7b80\u4ecb",level:2},{value:"2\u3001\u5143\u7d20\u6e32\u67d3",id:"2\u5143\u7d20\u6e32\u67d3",level:2},{value:"3\u3001\u7ec4\u4ef6 &amp; Props",id:"3\u7ec4\u4ef6--props",level:2},{value:"<strong>4\u3001</strong>State &amp; \u751f\u547d\u5468\u671f",id:"4state--\u751f\u547d\u5468\u671f",level:2},{value:"5\u3001\u4e8b\u4ef6\u5904\u7406",id:"5\u4e8b\u4ef6\u5904\u7406",level:2},{value:"6\u3001\u6761\u4ef6\u6e32\u67d3",id:"6\u6761\u4ef6\u6e32\u67d3",level:2},{value:"6.1 \u4e0e\u8fd0\u7b97\u7b26 &amp;&amp;",id:"61-\u4e0e\u8fd0\u7b97\u7b26-",level:3},{value:"6.2 \u4e09\u76ee\u8fd0\u7b97\u7b26",id:"62-\u4e09\u76ee\u8fd0\u7b97\u7b26",level:3},{value:"6.3 \u963b\u6b62\u7ec4\u4ef6\u6e32\u67d3",id:"63-\u963b\u6b62\u7ec4\u4ef6\u6e32\u67d3",level:3},{value:"7\u3001\u5217\u8868 &amp; Key",id:"7\u5217\u8868--key",level:2},{value:"8\u3001\u8868\u5355",id:"8\u8868\u5355",level:3},{value:"9\u3001\u72b6\u6001\u63d0\u5347",id:"9\u72b6\u6001\u63d0\u5347",level:2},{value:"10\u3001\u7ec4\u5408 vs \u7ee7\u627f",id:"10\u7ec4\u5408-vs-\u7ee7\u627f",level:2}],c={toc:o};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react\u5165\u95e8\u6559\u7a0b"},"React\u5165\u95e8\u6559\u7a0b"),(0,r.kt)("h2",{id:"1jsx-\u7b80\u4ecb"},"1\u3001JSX \u7b80\u4ecb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <h1>Hello, world!</h1>;\n")),(0,r.kt)("p",null,"\u7b49\u53f7\u540e\u9762\u7684\u8bed\u6cd5\uff0c\u4e0d\u662fJavascript\u7684\u8bed\u6cd5\uff0c\u4f46\u662f\u5728React\u662f\u5408\u7406\u7684\uff0c\u8fd9\u5c31\u662fJSX\u8bed\u6cd5\u3002"),(0,r.kt)("p",null,"\u6240\u6709HTML\u4e2d\u7684\u6807\u7b7e\u90fd\u53ef\u4ee5\u5728JSX\u4e2d\u8868\u793a\u4e3a\u4e00\u4e2a\u5143\u7d20\uff0c\u800c\u4e14\u5728\u5143\u7d20\u4e2d\u53ef\u4ee5\u5d4c\u5957\u4efb\u4f55\u53d8\u91cf\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const name = 'Josh Perez';\nconst element = <h1>Hello, {name}</h1>;\n")),(0,r.kt)("p",null,"JSX \u8868\u8fbe\u5f0f\u672c\u8eab\u4e5f\u662f\u4e00\u4e2a\u53d8\u91cf\uff0c\u53ef\u4ee5\u8d4b\u503c\u7ed9\u53d8\u91cf\uff0c\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570\u548c\u8fd4\u56de\u503c\u4f20\u9012\u3002"),(0,r.kt)("h2",{id:"2\u5143\u7d20\u6e32\u67d3"},"2\u3001\u5143\u7d20\u6e32\u67d3"),(0,r.kt)("p",null,"\u5143\u7d20\u63cf\u8ff0\u4e86\u4f60\u5728\u5c4f\u5e55\u4e0a\u60f3\u770b\u5230\u7684\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u60f3\u8981\u5c06\u4e00\u4e2a React \u5143\u7d20\u6e32\u67d3\u5230\u6839 DOM \u8282\u70b9\u4e2d\uff0c\u53ea\u9700\u628a\u5b83\u4eec\u4e00\u8d77\u4f20\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM.render()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = <h1>Hello, world</h1>;\nReactDOM.render(element, document.getElementById('root'));\n")),(0,r.kt)("p",null,"React \u5143\u7d20\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e0d\u53ef\u53d8\u5bf9\u8c61"),"\u3002\u4e00\u65e6\u88ab\u521b\u5efa\uff0c\u4f60\u5c31\u65e0\u6cd5\u66f4\u6539\u5b83\u7684\u5b50\u5143\u7d20\u6216\u8005\u5c5e\u6027\u3002\u66f4\u65b0 UI \u552f\u4e00\u7684\u65b9\u5f0f\u662f\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684\u5143\u7d20\uff0c\u5e76\u5c06\u5176\u4f20\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM.render()"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function tick() {\n  const element = (\n    <div>\n      <h1>Hello, world!</h1>\n      <h2>It is {new Date().toLocaleTimeString()}.</h2>\n    </div>\n  );\n  ReactDOM.render(element, document.getElementById('root'));\n}\n\nsetInterval(tick, 1000);\n")),(0,r.kt)("p",null,"\u5c3d\u7ba1\u6bcf\u4e00\u79d2\u6211\u4eec\u90fd\u4f1a\u65b0\u5efa\u4e00\u4e2a\u63cf\u8ff0\u6574\u4e2a UI \u6811\u7684\u5143\u7d20\uff0cReact DOM \u53ea\u4f1a\u66f4\u65b0\u5b9e\u9645\u6539\u53d8\u4e86\u7684\u5185\u5bb9\u3002"),(0,r.kt)("h2",{id:"3\u7ec4\u4ef6--props"},"3\u3001\u7ec4\u4ef6 & Props"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u662f\u53ef\u590d\u7528\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u6bcf\u4e2a\u4ee3\u7801\u7247\u6bb5\u5305\u62ec\u5143\u7d20\uff08\u5b9e\u9645\u5c55\u793a\u7684\u5185\u5bb9\uff09\u548c\u884c\u4e3a\u3002"),(0,r.kt)("p",null,"\u51fd\u6570\u7ec4\u4ef6\u548cclass\u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nclass Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const element = <Welcome name="Sara" />;\n')),(0,r.kt)("p",null,"\u5f53 React \u5143\u7d20\u4e3a\u7528\u6237\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\uff0c\u5b83\u4f1a\u5c06 JSX \u6240\u63a5\u6536\u7684\u5c5e\u6027\uff08attributes\uff09\u4ee5\u53ca\u5b50\u7ec4\u4ef6\uff08children\uff09\u8f6c\u6362\u4e3a\u5355\u4e2a\u5bf9\u8c61\u4f20\u9012\u7ed9\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u88ab\u79f0\u4e4b\u4e3a \u201cprops\u201d\u3002"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u540d\u79f0\u5fc5\u987b\u4ee5\u5927\u5199\u5b57\u6bcd\u5f00\u5934\u3002React \u4f1a\u5c06\u4ee5\u5c0f\u5199\u5b57\u6bcd\u5f00\u5934\u7684\u7ec4\u4ef6\u89c6\u4e3a\u539f\u751f DOM \u6807\u7b7e\u3002"),(0,r.kt)("p",null,"\u51fd\u6570\u4e0d\u4f1a\u5c1d\u8bd5\u66f4\u6539\u5165\u53c2\uff0c\u4e14\u591a\u6b21\u8c03\u7528\u4e0b\u76f8\u540c\u7684\u5165\u53c2\u59cb\u7ec8\u8fd4\u56de\u76f8\u540c\u7684\u7ed3\u679c\uff0c\u8fd9\u5c31\u662f\u7eaf\u51fd\u6570\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6240\u6709 React \u7ec4\u4ef6\u90fd\u5fc5\u987b\u50cf\u7eaf\u51fd\u6570\u4e00\u6837\u4fdd\u62a4\u5b83\u4eec\u7684 props \u4e0d\u88ab\u66f4\u6539\u3002")),(0,r.kt)("h2",{id:"4state--\u751f\u547d\u5468\u671f"},(0,r.kt)("strong",{parentName:"h2"},"4\u3001"),"State & \u751f\u547d\u5468\u671f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u5728\u7ec4\u4ef6\u4e2d\u8c03\u7528setState\u65f6\uff0cReact \u90fd\u4f1a\u81ea\u52a8\u66f4\u65b0\u5176\u5b50\u7ec4\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"state \u5bf9\u4e8e\u6bcf\u4e2a\u7ec4\u4ef6\u6765\u8bf4\u662f\u79c1\u6709\u7684")),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u7b2c\u4e8c\u8282\u91cc\u7684Clock\u7ec4\u4ef6\u505a\u6210\u4e00\u4e2aClass\u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class Clock extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {date: new Date()};\n  }\n\n  render() {\n    return (\n      <div>\n        <h1>Hello, world!</h1>\n        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(\n  <Clock />,\n  document.getElementById('root')\n);\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u8fd8\u8981\u4e3aClock\u7ed1\u5b9a\u4e00\u4e2a\u5b9a\u65f6\u5668\uff1a\u5f53\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Clock"),"\xa0\u7ec4\u4ef6\u7b2c\u4e00\u6b21\u88ab\u6e32\u67d3\u5230 DOM \u4e2d\u7684\u65f6\u5019\uff0c\u5c31\u4e3a\u5176\u8bbe\u7f6e\u4e00\u4e2a\u8ba1\u65f6\u5668\u3002\u8fd9\u5728 React \u4e2d\u88ab\u79f0\u4e3a\u201c\u6302\u8f7d\uff08mount\uff09\u201d\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u5f53 DOM \u4e2d\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Clock"),"\xa0\u7ec4\u4ef6\u88ab\u5220\u9664\u7684\u65f6\u5019\uff0c\u5e94\u8be5\u6e05\u9664\u8ba1\u65f6\u5668\u3002\u8fd9\u5728 React \u4e2d\u88ab\u79f0\u4e3a\u201c\u5378\u8f7d\uff08unmount\uff09\u201d\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u52a0\u4e0a\u4e0b\u9762\u7684\u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"  componentDidMount() {\n    this.timerID = setInterval(\n      () => this.tick(),\n      1000\n    );\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.timerID);\n  }\n\n  tick() {\n    this.setState({\n      date: new Date()\n    });\n  }\n")),(0,r.kt)("h2",{id:"5\u4e8b\u4ef6\u5904\u7406"},"5\u3001\u4e8b\u4ef6\u5904\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React \u4e8b\u4ef6\u7684\u547d\u540d\u91c7\u7528\u5c0f\u9a7c\u5cf0\u5f0f\uff08camelCase\uff09\uff0c\u800c\u4e0d\u662f\u7eaf\u5c0f\u5199\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 JSX \u8bed\u6cd5\u65f6\u4f60\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function ActionLink() {\n  // e \u662f\u4e00\u4e2a\u5408\u6210\u4e8b\u4ef6\n  function handleClick(e) {\n    e.preventDefault();\n    console.log('The link was clicked.');\n  }\n\n  return (\n    <a href=\"#\" onClick={handleClick}>\n      Click me\n    </a>\n  );\n}\n")),(0,r.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0cclass \u7684\u65b9\u6cd5\u9ed8\u8ba4\u4e0d\u4f1a\u7ed1\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u3002\u5982\u679c\u4f60\u5fd8\u8bb0\u7ed1\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"this.handleClick"),"\u5e76\u628a\u5b83\u4f20\u5165\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"onClick"),"\uff0c\u5f53\u4f60\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u7684\u65f6\u5019",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u7684\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\u8981\u5728class\u7684\u6784\u9020\u51fd\u6570\u4e2d\uff0c\u663e\u793a\u5730\u7ed1\u5b9a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"// \u4e3a\u4e86\u5728\u56de\u8c03\u4e2d\u4f7f\u7528 `this`\uff0c\u8fd9\u4e2a\u7ed1\u5b9a\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\nthis.handleClick = this.handleClick.bind(this);\n")),(0,r.kt)("p",null,"\u5728 React \u4e2d\uff0c\u6709\u4e00\u4e2a\u547d\u540d\u89c4\u8303\uff0c\u901a\u5e38\u4f1a\u5c06\u4ee3\u8868\u4e8b\u4ef6\u7684\u76d1\u542c prop \u547d\u540d\u4e3aon","[Event]","\uff0c\u5c06\u5904\u7406\u4e8b\u4ef6\u7684\u76d1\u542c\u65b9\u6cd5\u547d\u540d\u4e3ahandle","[Event]","\u8fd9\u6837\u7684\u683c\u5f0f\u3002"),(0,r.kt)("h2",{id:"6\u6761\u4ef6\u6e32\u67d3"},"6\u3001\u6761\u4ef6\u6e32\u67d3"),(0,r.kt)("h3",{id:"61-\u4e0e\u8fd0\u7b97\u7b26-"},"6.1 \u4e0e\u8fd0\u7b97\u7b26 &&"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Mailbox(props) {\n  const unreadMessages = props.unreadMessages;\n  return (\n    <div>\n      <h1>Hello!</h1>\n      {unreadMessages.length > 0 &&\n        <h2>\n          You have {unreadMessages.length} unread messages.\n        </h2>\n      }\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u6761\u4ef6\u662f\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"&&"),"\xa0\u53f3\u4fa7\u7684\u5143\u7d20\u5c31\u4f1a\u88ab\u6e32\u67d3\uff0c\u5982\u679c\u662f\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\uff0cReact \u4f1a\u5ffd\u7565\u5e76\u8df3\u8fc7\u5b83\u3002"),(0,r.kt)("h3",{id:"62-\u4e09\u76ee\u8fd0\u7b97\u7b26"},"6.2 \u4e09\u76ee\u8fd0\u7b97\u7b26"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"render() {\n  const isLoggedIn = this.state.isLoggedIn;\n  return (\n    <div>\n      {isLoggedIn\n        ? <LogoutButton onClick={this.handleLogoutClick} />\n        : <LoginButton onClick={this.handleLoginClick} />\n      }\n    </div>\n  );\n}\n")),(0,r.kt)("h3",{id:"63-\u963b\u6b62\u7ec4\u4ef6\u6e32\u67d3"},"6.3 \u963b\u6b62\u7ec4\u4ef6\u6e32\u67d3"),(0,r.kt)("p",null,"\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u80fd\u9690\u85cf\u7ec4\u4ef6\uff0c\u5373\u4f7f\u5b83\u5df2\u7ecf\u88ab\u5176\u4ed6\u7ec4\u4ef6\u6e32\u67d3\u3002\u82e5\u8981\u5b8c\u6210\u6b64\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u8ba9\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"render"),"\xa0\u65b9\u6cd5\u76f4\u63a5\u8fd4\u56de\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u800c\u4e0d\u8fdb\u884c\u4efb\u4f55\u6e32\u67d3\u3002"),(0,r.kt)("h2",{id:"7\u5217\u8868--key"},"7\u3001\u5217\u8868 & Key"),(0,r.kt)("p",null,"\u4e00\u4e2a\u5143\u7d20\u7684 key \u6700\u597d\u662f\u8fd9\u4e2a\u5143\u7d20\u5728\u5217\u8868\u4e2d\u62e5\u6709\u7684\u4e00\u4e2a\u72ec\u4e00\u65e0\u4e8c\u7684\u5b57\u7b26\u4e32\u3002\u4e00\u4e2a\u597d\u7684\u7ecf\u9a8c\u6cd5\u5219\u662f\uff1a\u5728\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"map()"),"\xa0\u65b9\u6cd5\u4e2d\u7684\u5143\u7d20\u9700\u8981\u8bbe\u7f6e key \u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u5217\u8868\u521b\u5efa\u5143\u7d20\u7684\u65f6\u5019\uff0c\u6bcf\u4e2a\u5143\u7d20\u5fc5\u987b\u8981\u6709\u4e00\u4e2akey\uff0c\u6570\u7ec4\u5143\u7d20\u4e2d\u4f7f\u7528\u7684 key \u5728\u5176\u5144\u5f1f\u8282\u70b9\u4e4b\u95f4\u5e94\u8be5\u662f\u72ec\u4e00\u65e0\u4e8c\u7684\u3002\u7136\u800c\uff0c\u5b83\u4eec\u4e0d\u9700\u8981\u662f\u5168\u5c40\u552f\u4e00\u7684\u3002\u5f53\u6211\u4eec\u751f\u6210\u4e24\u4e2a\u4e0d\u540c\u7684\u6570\u7ec4\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684 key \u503c\u3002"),(0,r.kt)("p",null,"key \u4f1a\u4f20\u9012\u4fe1\u606f\u7ed9 React \uff0c\u4f46\u4e0d\u4f1a\u4f20\u9012\u7ed9\u4f60\u7684\u7ec4\u4ef6\u3002\u5982\u679c\u4f60\u7684\u7ec4\u4ef6\u4e2d\u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u5c5e\u6027\u7684\u503c\uff0c\u8bf7\u7528\u5176\u4ed6\u5c5e\u6027\u540d\u663e\u5f0f\u4f20\u9012\u8fd9\u4e2a\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const content = posts.map((post) =>\n  <Post\n    key={post.id}\n    id={post.id}\n    title={post.title} />\n);\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Post"),"\xa0\u7ec4\u4ef6\u53ef\u4ee5\u8bfb\u51fa\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"props.id"),"\uff0c\u4f46\u662f\u4e0d\u80fd\u8bfb\u51fa\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"props.key"),"\u3002"),(0,r.kt)("h3",{id:"8\u8868\u5355"},"8\u3001\u8868\u5355"),(0,r.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c\u8fd9\u4f7f\u5f97",(0,r.kt)("inlineCode",{parentName:"p"},'<input type="text">'),",",(0,r.kt)("inlineCode",{parentName:"p"},"<textarea>"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"<select>"),"\u4e4b\u7c7b\u7684\u6807\u7b7e\u90fd\u975e\u5e38\u76f8\u4f3c\u2014\u5b83\u4eec\u90fd\u63a5\u53d7\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\u5c5e\u6027\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u5b9e\u73b0\u53d7\u63a7\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u5728 HTML \u4e2d,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"<textarea>"),"\xa0\u5143\u7d20\u901a\u8fc7\u5176\u5b50\u5143\u7d20\u5b9a\u4e49\u5176\u6587\u672c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<textarea>   \u4f60\u597d\uff0c \u8fd9\u662f\u5728 text area \u91cc\u7684\u6587\u672c </textarea>\n")),(0,r.kt)("p",null,"\u800c\u5728 React \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"<textarea>"),"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\u5c5e\u6027\u4ee3\u66ff\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Select"),"\u653e\u5f03\u4e86selected\u5c5e\u6027\uff0c\u4e5f\u9009\u7528\u4e86value\u5c5e\u6027\uff0c\u4e0b\u9762",(0,r.kt)("inlineCode",{parentName:"p"},"this.state.value"),"\u662f\u9009\u4e2d\u7684tap\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<select value={this.state.value} onChange={this.handleChange}>\n    <option value="grapefruit">\u8461\u8404\u67da</option>\n    <option value="lime">\u9178\u6a59</option>\n    <option value="coconut">\u6930\u5b50</option>\n    <option value="mango">\u8292\u679c</option>\n</select>\n')),(0,r.kt)("h2",{id:"9\u72b6\u6001\u63d0\u5347"},"9\u3001\u72b6\u6001\u63d0\u5347"),(0,r.kt)("p",null,"\u591a\u4e2a\u7ec4\u4ef6\u9700\u8981\u53cd\u6620\u76f8\u540c\u7684\u53d8\u5316\u6570\u636e\uff0c\u8fd9\u65f6\u6211\u4eec\u5efa\u8bae\u5c06\u5171\u4eab\u72b6\u6001\u63d0\u5347\u5230\u6700\u8fd1\u7684\u5171\u540c\u7236\u7ec4\u4ef6\u4e2d\u53bb\u3002\u5728 React \u4e2d\uff0c\u5c06\u591a\u4e2a\u7ec4\u4ef6\u4e2d\u9700\u8981\u5171\u4eab\u7684 state \u5411\u4e0a\u79fb\u52a8\u5230\u5b83\u4eec\u7684\u6700\u8fd1\u5171\u540c\u7236\u7ec4\u4ef6\u4e2d\uff0c\u4fbf\u53ef\u5b9e\u73b0\u5171\u4eab state\u3002\u8fd9\u5c31\u662f\u6240\u8c13\u7684\u201c\u72b6\u6001\u63d0\u5347\u201d\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0cCalculator\u62e5\u6709\u4e24\u4e2aTemperatureInput\u7ec4\u4ef6\uff0c\u9700\u6c42\u662f\u60f3\u8ba9\u4e24\u4e2aTemperatureInput\u7ec4\u4ef6\u53ef\u4ee5\u4fdd\u6301\u540c\u6b65\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u91cc\u9762\u8f93\u5165\u503c\uff0c\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u91cc\u663e\u793a\u4fee\u6539\u540e\u7684\u503c\uff0c\u4f46\u662f\u56e0\u4e3aTemperatureInput\u7ec4\u4ef6\u81ea\u8eab\u4fdd\u6301\u4e86state\uff0c\u5c31\u6ca1\u529e\u6cd5\u505a\u5230\u8054\u52a8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'class TemperatureInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleChange = this.handleChange.bind(this);\n    this.state = {temperature: \'\'};\n  }\n\n  handleChange(e) {\n    this.setState({temperature: e.target.value});\n  }\n\n  render() {\n    const temperature = this.state.temperature;\n    const scale = this.props.scale;\n    return (\n      <fieldset>\n        <legend>Enter temperature in {scaleNames[scale]}:</legend>\n        <input value={temperature}\n               onChange={this.handleChange} />\n      </fieldset>\n    );\n  }\n}\n\nclass Calculator extends React.Component {\n  render() {\n    return (\n      <div>\n        <TemperatureInput scale="c" />\n        <TemperatureInput scale="f" />\n      </div>\n    );\n  }\n}\n')),(0,r.kt)("p",null,"\u72b6\u6001\u63d0\u5347\u4e4b\u540e\u7684\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class TemperatureInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleChange = this.handleChange.bind(this);\n  }\n\n  handleChange(e) {\n    this.props.onTemperatureChange(e.target.value);\n  }\n\n  render() {\n    const temperature = this.props.temperature;\n    const scale = this.props.scale;\n    return (\n      <fieldset>\n        <legend>Enter temperature in {scaleNames[scale]}:</legend>\n        <input value={temperature}\n               onChange={this.handleChange} />\n      </fieldset>\n    );\n  }\n}\n\nclass Calculator extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);\n    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);\n    this.state = {temperature: '', scale: 'c'};\n  }\n\n  handleCelsiusChange(temperature) {\n    this.setState({scale: 'c', temperature});\n  }\n\n  handleFahrenheitChange(temperature) {\n    this.setState({scale: 'f', temperature});\n  }\n\n  render() {\n    const scale = this.state.scale;\n    const temperature = this.state.temperature;\n    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;\n    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;\n\n    return (\n      <div>\n        <TemperatureInput\n          scale=\"c\"\n          temperature={celsius}\n          onTemperatureChange={this.handleCelsiusChange} />\n        <TemperatureInput\n          scale=\"f\"\n          temperature={fahrenheit}\n          onTemperatureChange={this.handleFahrenheitChange} />\n        <BoilingVerdict\n          celsius={parseFloat(celsius)} />\n      </div>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"\u6700\u4e3b\u8981\u7684\u6539\u52a8\u5982\u4e0b\uff1a\u5bf9\u4e8eTemperatureInput \u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"const temperature =this.stats.temperature;"),"\u4fee\u6539\u4e3a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"const temperature =this.props.temperature;"),"\uff0c\u7136\u540e\u589e\u52a0\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"onTemperatureChange"),"\u5c5e\u6027\u7528\u6765\u5c06\u6539\u52a8\u4f20\u9012\u5230\u7236\u7ec4\u4ef6\u3002"),(0,r.kt)("h2",{id:"10\u7ec4\u5408-vs-\u7ee7\u627f"},"10\u3001\u7ec4\u5408 vs \u7ee7\u627f"),(0,r.kt)("p",null,"React \u6709\u5341\u5206\u5f3a\u5927\u7684\u7ec4\u5408\u6a21\u5f0f\u3002\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u7ec4\u5408\u800c\u975e\u7ee7\u627f\u6765\u5b9e\u73b0\u7ec4\u4ef6\u95f4\u7684\u4ee3\u7801\u91cd\u7528\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5305\u542b\u5173\u7cfb\uff0cContacts\u548cChat\u7ec4\u4ef6\u90fd\u662fSplitPane\u7684\u5b50\u7ec4\u4ef6\uff0c\u4e5f\u662f\u901a\u8fc7props\u8fdb\u884c\u4f20\u9012\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function SplitPane(props) {\n  return (\n    <div className="SplitPane">\n      <div className="SplitPane-left">\n        {props.left}\n      </div>\n      <div className="SplitPane-right">\n        {props.right}\n      </div>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <SplitPane\n      left={\n        <Contacts />\n      }\n      right={\n        <Chat />\n      } />\n  );\n}\n')))}u.isMDXComponent=!0}}]);