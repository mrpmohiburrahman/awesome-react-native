"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[545],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||n;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<n;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5235:(e,t,r)=>{r.d(t,{n:()=>o});var a=r(7294);const o=e=>{let{title:t,url:r}=e;return a.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:t,width:"100%"},a.createElement("source",{src:r,type:"video/mp4"}))}},9618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var a=r(7462),o=(r(7294),r(3905)),n=r(4996),i=r(5235);const l={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",description:"A performant interactive bottom sheet modal with fully configurable options \ud83d\ude80",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-modal-preview.gif",slug:"/modal"},s="React Native Bottom Sheet Modal",m={unversionedId:"modal/getting-started",id:"version-2/modal/getting-started",title:"Getting Started",description:"A performant interactive bottom sheet modal with fully configurable options \ud83d\ude80",source:"@site/versioned_docs/version-2/modal/getting-started.mdx",sourceDirName:"modal",slug:"/modal",permalink:"/awesome-react-native/v2/modal",draft:!1,editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/versioned_docs/version-2/modal/getting-started.mdx",tags:[],version:"2",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",description:"A performant interactive bottom sheet modal with fully configurable options \ud83d\ude80",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-modal-preview.gif",slug:"/modal"},sidebar:"version-2/packages",previous:{title:"FAQ",permalink:"/awesome-react-native/v2/faq"},next:{title:"Usage",permalink:"/awesome-react-native/v2/modal/usage"}},p={},d=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2}],c={toc:d},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-native-bottom-sheet-modal"},"React Native Bottom Sheet Modal"),(0,o.kt)(i.n,{title:"React Native Bottom Sheet Modal",url:(0,n.Z)("video/bottom-sheet-modal-preview.mp4"),mdxType:"Video"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bottom Sheet Modal")," is wrapper/decorator on top of the ",(0,o.kt)("strong",{parentName:"p"},"Bottom Sheet"),", it provides all of its functionalities with extra modal presentation functionalities."),(0,o.kt)("p",null,"With the release of the library, support for stack sheet modals were something planned ahead to provide the a native feel & and experience to users."),(0,o.kt)("p",null,"The implementation of this feature was inspired by Apple Maps sheet modals \u2764\ufe0f, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gorhom/react-native-bottom-sheet/blob/master/example/src/screens/advanced/MapExample.tsx"},"check out the Apple Map sheet modals clone"),"."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"...",(0,o.kt)("a",{parentName:"li",href:"/#features"},"Bottom Sheet Features")),(0,o.kt)("li",{parentName:"ul"},"Smooth interaction and mounting animation."),(0,o.kt)("li",{parentName:"ul"},"Support stack sheet modals.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"This feature is already shipped with ",(0,o.kt)("inlineCode",{parentName:"p"},"@gorhom/bottom-sheet")," package and it requires no extra dependency."))}f.isMDXComponent=!0}}]);