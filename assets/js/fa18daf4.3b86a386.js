"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,u=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(u,r(r({ref:t},m),{},{components:n})):o.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const a={id:"methods",title:"Methods",description:"Bottom Sheet methods.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/methods"},r=void 0,s={unversionedId:"methods",id:"methods",title:"Methods",description:"Bottom Sheet methods.",source:"@site/docs/methods.md",sourceDirName:".",slug:"/methods",permalink:"/react-native-bottom-sheet/methods",draft:!1,editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/methods.md",tags:[],version:"current",frontMatter:{id:"methods",title:"Methods",description:"Bottom Sheet methods.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/methods"},sidebar:"packages",previous:{title:"Props",permalink:"/react-native-bottom-sheet/props"},next:{title:"Hooks",permalink:"/react-native-bottom-sheet/hooks"}},p={},l=[{value:"<code>snapToIndex</code>",id:"snaptoindex",level:3},{value:"<code>snapToPosition</code>",id:"snaptoposition",level:3},{value:"<code>expand</code>",id:"expand",level:3},{value:"<code>collapse</code>",id:"collapse",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"<code>forceClose</code>",id:"forceclose",level:3}],m={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These methods are accessible using the bottom sheet reference or the hook ",(0,i.kt)("inlineCode",{parentName:"p"},"useBottomSheet")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"useBottomSheetModal"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useRef } from 'react';\nimport { Button } from 'react-native';\nimport BottomSheet from '@gorhom/bottom-sheet';\n\nconst App = () => {\n  const bottomSheetRef = useRef<BottomSheet>(null);\n\n  const handleClosePress = () => bottomSheetRef.current.close()\n\n  return (\n    <>\n      <Button title=\"Close Sheet\" onPress={handleClosePress} />\n      <BottomSheet ref={bottomSheetRef}>\n    </>\n  )\n}\n\n")),(0,i.kt)("h3",{id:"snaptoindex"},(0,i.kt)("inlineCode",{parentName:"h3"},"snapToIndex")),(0,i.kt)("p",null,"Snap to one of the provided points from ",(0,i.kt)("inlineCode",{parentName:"p"},"snapPoints"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type snapToIndex = (\n  // snap point index.\n  index: number,\n  // snap animation configs\n  animationConfigs?: Animated.WithSpringConfig | Animated.WithTimingConfig\n) => void;\n")),(0,i.kt)("h3",{id:"snaptoposition"},(0,i.kt)("inlineCode",{parentName:"h3"},"snapToPosition")),(0,i.kt)("p",null,"Snap to a position out of provided ",(0,i.kt)("inlineCode",{parentName:"p"},"snapPoints"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type snapToPosition = (\n  // position in pixel or percentage.\n  position: number,\n  // snap animation configs\n  animationConfigs?: Animated.WithSpringConfig | Animated.WithTimingConfig\n) => void;\n")),(0,i.kt)("h3",{id:"expand"},(0,i.kt)("inlineCode",{parentName:"h3"},"expand")),(0,i.kt)("p",null,"Snap to the maximum provided point from ",(0,i.kt)("inlineCode",{parentName:"p"},"snapPoints"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type expand = (\n  // snap animation configs\n  animationConfigs?: Animated.WithSpringConfig | Animated.WithTimingConfig\n) => void;\n")),(0,i.kt)("h3",{id:"collapse"},(0,i.kt)("inlineCode",{parentName:"h3"},"collapse")),(0,i.kt)("p",null,"Snap to the minimum provided point from ",(0,i.kt)("inlineCode",{parentName:"p"},"snapPoints"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type collapse = (\n  // snap animation configs\n  animationConfigs?: Animated.WithSpringConfig | Animated.WithTimingConfig\n) => void;\n")),(0,i.kt)("h3",{id:"close"},(0,i.kt)("inlineCode",{parentName:"h3"},"close")),(0,i.kt)("p",null,"Close the bottom sheet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type close = (\n  // snap animation configs\n  animationConfigs?: Animated.WithSpringConfig | Animated.WithTimingConfig\n) => void;\n")),(0,i.kt)("h3",{id:"forceclose"},(0,i.kt)("inlineCode",{parentName:"h3"},"forceClose")),(0,i.kt)("p",null,"Force close the bottom sheet, this prevent any interruptions till the sheet is closed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type forceClose = (\n  // snap animation configs\n  animationConfigs?: Animated.WithSpringConfig | Animated.WithTimingConfig\n) => void;\n")))}c.isMDXComponent=!0}}]);