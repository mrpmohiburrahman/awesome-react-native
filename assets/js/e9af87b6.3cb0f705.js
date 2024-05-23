"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=c(r),m=n,u=l["".concat(s,".").concat(m)]||l[m]||h[m]||a;return r?o.createElement(u,i(i({ref:t},p),{},{components:r})):o.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[l]="string"==typeof e?e:n,i[1]=d;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={id:"adding-shadow",title:"Adding Shadow",description:"Adding shadow to the Bottom Sheet.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/adding-shadow"},i=void 0,d={unversionedId:"guides/adding-shadow",id:"guides/adding-shadow",title:"Adding Shadow",description:"Adding shadow to the Bottom Sheet.",source:"@site/docs/guides/adding-shadow.mdx",sourceDirName:"guides",slug:"/adding-shadow",permalink:"/react-native-bottom-sheet/adding-shadow",draft:!1,editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/guides/adding-shadow.mdx",tags:[],version:"current",frontMatter:{id:"adding-shadow",title:"Adding Shadow",description:"Adding shadow to the Bottom Sheet.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/adding-shadow"},sidebar:"packages",previous:{title:"Pull To Refresh",permalink:"/react-native-bottom-sheet/pull-to-refresh"},next:{title:"React Navigation Integration",permalink:"/react-native-bottom-sheet/react-navigation-integration"}},s={},c=[],p={toc:c},l="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"React Native Bottom Sheet Shadow",src:r(350).Z,width:"1280",height:"640"})),(0,n.kt)("p",null,"To add shadow to the bottom sheet, you will need to pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"style")," prop with shadow styling config, I recommend checking out ",(0,n.kt)("a",{parentName:"p",href:"https://ethercreative.github.io/react-native-shadow-generator/"},"React Native Shadow Generator")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethercreative"},"@ethercreative"),"."),(0,n.kt)("admonition",{title:"NOTICE",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You may notice that shadow looks different between ",(0,n.kt)("strong",{parentName:"p"},"iOS")," and ",(0,n.kt)("strong",{parentName:"p"},"Android"),", that's because each platform handle drawing shadows differently, read more about ",(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/training/material/shadows-clipping"},"Android Shadows"),".")))}h.isMDXComponent=!0},350:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/bottom-sheet-shadow-12e2a4c6f6953069261a683c6514bdb4.jpg"}}]);