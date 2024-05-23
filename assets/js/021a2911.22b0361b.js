"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={id:"troubleshooting",title:"Troubleshooting",description:"Bottom Sheet troubleshooting.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/troubleshooting"},a=void 0,l={unversionedId:"troubleshooting",id:"version-2/troubleshooting",title:"Troubleshooting",description:"Bottom Sheet troubleshooting.",source:"@site/versioned_docs/version-2/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/awesome-react-native/2/troubleshooting",draft:!1,editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/versioned_docs/version-2/troubleshooting.md",tags:[],version:"2",frontMatter:{id:"troubleshooting",title:"Troubleshooting",description:"Bottom Sheet troubleshooting.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/troubleshooting"},sidebar:"version-2/packages",previous:{title:"React Navigation Integration",permalink:"/awesome-react-native/2/react-navigation-integration"},next:{title:"FAQ",permalink:"/awesome-react-native/2/faq"}},s={},c=[{value:"Pressables / Touchables are not working on Android",id:"pressables--touchables-are-not-working-on-android",level:2},{value:"Adding horizontal FlatList or ScrollView is not working properly on Android",id:"adding-horizontal-flatlist-or-scrollview-is-not-working-properly-on-android",level:2},{value:"My component gesture interaction gets conflicted with Bottom Sheet interactions ?",id:"my-component-gesture-interaction-gets-conflicted-with-bottom-sheet-interactions-",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Native Bottom Sheet. These issues may or may not be related to React Native Bottom Sheet itself."),(0,r.kt)("h2",{id:"pressables--touchables-are-not-working-on-android"},"Pressables / Touchables are not working on Android"),(0,r.kt)("p",null,"Due to wrapping the content and handle with ",(0,r.kt)("inlineCode",{parentName:"p"},"TapGestureHandler")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"PanGestureHandler"),", any gesture interaction would not function as expected."),(0,r.kt)("p",null,"To resolve this issue, please use touchables that this library provide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  TouchableOpacity,\n  TouchableHighlight,\n  TouchableWithoutFeedback,\n} from '@gorhom/bottom-sheet';\n")),(0,r.kt)("h2",{id:"adding-horizontal-flatlist-or-scrollview-is-not-working-properly-on-android"},"Adding horizontal FlatList or ScrollView is not working properly on Android"),(0,r.kt)("p",null,"Due to wrapping the content and handle with ",(0,r.kt)("inlineCode",{parentName:"p"},"TapGestureHandler")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"PanGestureHandler"),", any gesture interaction would not function as expected."),(0,r.kt)("p",null,"To resolve this issue, please use ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," provide instead ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  ScrollView,\n  FlatList\n} from 'react-native-gesture-handler';\n")),(0,r.kt)("h2",{id:"my-component-gesture-interaction-gets-conflicted-with-bottom-sheet-interactions-"},"My component gesture interaction gets conflicted with Bottom Sheet interactions ?"),(0,r.kt)("p",null,"To avoid the gesture interaction conflict between the Bottom Sheet and its content, you will need to wrap your component with ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { NativeViewGestureHandler } from 'react-native-gesture-handler';\n\n<NativeViewGestureHandler disallowInterruption={true}>\n   <AwesomeComponent />\n</NativeViewGestureHandler>\n")))}d.isMDXComponent=!0}}]);