"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[399],{8860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var o=n(7953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=c(n),l=r,h=m["".concat(s,".").concat(l)]||m[l]||g[l]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=l;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=n(3911),r=(n(7953),n(8860));const a={id:"adding-shadow",title:"Adding Shadow",description:"Adding shadow to the Bottom Sheet.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/adding-shadow"},i=void 0,d={unversionedId:"guides/adding-shadow",id:"version-2/guides/adding-shadow",title:"Adding Shadow",description:"Adding shadow to the Bottom Sheet.",source:"@site/versioned_docs/version-2/guides/adding-shadow.mdx",sourceDirName:"guides",slug:"/adding-shadow",permalink:"/awesome-react-native/2/adding-shadow",draft:!1,editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/versioned_docs/version-2/guides/adding-shadow.mdx",tags:[],version:"2",frontMatter:{id:"adding-shadow",title:"Adding Shadow",description:"Adding shadow to the Bottom Sheet.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/adding-shadow"},sidebar:"version-2/packages",previous:{title:"Custom Background",permalink:"/awesome-react-native/2/custom-background"},next:{title:"React Navigation Integration",permalink:"/awesome-react-native/2/react-navigation-integration"}},s={},c=[],p={toc:c},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,o.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"React Native Bottom Sheet Shadow",src:n(7657).A,width:"1280",height:"640"})),(0,r.yg)("p",null,"To add shadow to the bottom sheet, you will need to pass the ",(0,r.yg)("inlineCode",{parentName:"p"},"style")," prop with shadow styling config, I recommend checking out ",(0,r.yg)("a",{parentName:"p",href:"https://ethercreative.github.io/react-native-shadow-generator/"},"React Native Shadow Generator")," by ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ethercreative"},"@ethercreative"),"."),(0,r.yg)("admonition",{title:"NOTICE",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You may notice that shadow looks different between ",(0,r.yg)("strong",{parentName:"p"},"iOS")," and ",(0,r.yg)("strong",{parentName:"p"},"Android"),", that's because each platform handle drawing shadows differently, read more about ",(0,r.yg)("a",{parentName:"p",href:"https://developer.android.com/training/material/shadows-clipping"},"Android Shadows"),".")))}g.isMDXComponent=!0},7657:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/bottom-sheet-shadow-12e2a4c6f6953069261a683c6514bdb4.jpg"}}]);