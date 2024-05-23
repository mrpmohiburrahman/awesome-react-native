"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:a,i[1]=d;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5235:(e,t,n)=>{n.d(t,{n:()=>a});var o=n(7294);const a=e=>{let{title:t,url:n}=e;return o.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:t,width:"100%"},o.createElement("source",{src:n,type:"video/mp4"}))}},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},9391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var o=n(7462),a=(n(7294),n(3905)),r=(n(5488),n(5162),n(4996)),i=n(5235);const d={id:"custom-handle",title:"Custom Handle",description:"Bottom Sheet custom handle.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/custom-handle"},l=void 0,s={unversionedId:"guides/custom-handle",id:"version-2/guides/custom-handle",title:"Custom Handle",description:"Bottom Sheet custom handle.",source:"@site/versioned_docs/version-2/guides/custom-handle.mdx",sourceDirName:"guides",slug:"/custom-handle",permalink:"/awesome-react-native/v2/custom-handle",draft:!1,editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/versioned_docs/version-2/guides/custom-handle.mdx",tags:[],version:"2",frontMatter:{id:"custom-handle",title:"Custom Handle",description:"Bottom Sheet custom handle.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/custom-handle"},sidebar:"version-2/packages",previous:{title:"Scrollables",permalink:"/awesome-react-native/v2/scrollables"},next:{title:"Custom Backdrop",permalink:"/awesome-react-native/v2/custom-backdrop"}},c={},m=[{value:"Example",id:"example",level:3}],p={toc:m},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To override the default handle, you will need to pass the prop ",(0,a.kt)("inlineCode",{parentName:"p"},"handleComponent")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomSheet")," component."),(0,a.kt)("p",null,"When you provide your own handle component, it will receive these animated props ",(0,a.kt)("inlineCode",{parentName:"p"},"animatedIndex")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"animatedPosition")," that indicates the position and the index of the sheet."),(0,a.kt)("p",null,"You can extend your custom handle props interface with the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomSheetHandleProps")," interface to expose ",(0,a.kt)("inlineCode",{parentName:"p"},"animatedIndex")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"animatedPosition")," into your own interface."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)(i.n,{title:"React Native Bottom Sheet Custom Handle",url:(0,r.Z)("video/bottom-sheet-custom-handle-preview.mp4"),mdxType:"Video"}),(0,a.kt)("p",null,"Here is an example of a custom handle component, but first you will need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"Redash"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/wcandillon/react-native-redash"},"Redash"),": The React Native Reanimated and Gesture Handler Toolbelt.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-redash\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useMemo } from 'react';\nimport { StyleProp, StyleSheet, ViewStyle } from 'react-native';\nimport { BottomSheetHandleProps } from '@gorhom/bottom-sheet';\nimport Animated, { interpolate, Extrapolate } from 'react-native-reanimated';\nimport { transformOrigin, toRad } from 'react-native-redash';\n\ninterface HandleProps extends BottomSheetHandleProps {}\n\nconst Handle: React.FC<HandleProps> = ({ animatedIndex }) => {\n  //#region animations\n  const borderTopRadius = useMemo(\n    () =>\n      interpolate(animatedIndex, {\n        inputRange: [1, 2],\n        outputRange: [20, 0],\n        extrapolate: Extrapolate.CLAMP,\n      }),\n    [animatedIndex]\n  );\n  const indicatorTransformOriginY = useMemo(\n    () =>\n      interpolate(animatedIndex, {\n        inputRange: [0, 1, 2],\n        outputRange: [-1, 0, 1],\n        extrapolate: Extrapolate.CLAMP,\n      }),\n    [animatedIndex]\n  );\n  const leftIndicatorRotate = useMemo(\n    () =>\n      interpolate(animatedIndex, {\n        inputRange: [0, 1, 2],\n        outputRange: [toRad(-30), 0, toRad(30)],\n        extrapolate: Extrapolate.CLAMP,\n      }),\n    [animatedIndex]\n  );\n  const rightIndicatorRotate = interpolate(animatedIndex, {\n    inputRange: [0, 1, 2],\n    outputRange: [toRad(30), 0, toRad(-30)],\n    extrapolate: Extrapolate.CLAMP,\n  });\n  //#endregion\n\n  //#region styles\n  const containerStyle = useMemo(\n    () => [\n      styles.header,\n      {\n        borderTopLeftRadius: borderTopRadius,\n        borderTopRightRadius: borderTopRadius,\n      },\n    ],\n    [borderTopRadius]\n  );\n  const leftIndicatorStyle = useMemo(\n    () => ({\n      ...styles.indicator,\n      ...styles.leftIndicator,\n      transform: transformOrigin(\n        { x: 0, y: indicatorTransformOriginY },\n        {\n          rotate: leftIndicatorRotate,\n          translateX: -5,\n        }\n      ),\n    }),\n    [indicatorTransformOriginY, leftIndicatorRotate]\n  );\n  const rightIndicatorStyle = useMemo(\n    () => ({\n      ...styles.indicator,\n      ...styles.rightIndicator,\n      transform: transformOrigin(\n        { x: 0, y: indicatorTransformOriginY },\n        {\n          rotate: rightIndicatorRotate,\n          translateX: 5,\n        }\n      ),\n    }),\n    [indicatorTransformOriginY, rightIndicatorRotate]\n  );\n  //#endregion\n\n  // render\n  return (\n    <Animated.View style={containerStyle}>\n      <Animated.View style={leftIndicatorStyle} />\n      <Animated.View style={rightIndicatorStyle} />\n    </Animated.View>\n  );\n};\n\nexport default Handle;\n\nconst styles = StyleSheet.create({\n  header: {\n    alignContent: 'center',\n    alignItems: 'center',\n    justifyContent: 'center',\n    backgroundColor: 'white',\n    paddingVertical: 14,\n    shadowColor: 'black',\n    shadowOffset: {\n      width: 0,\n      height: -20,\n    },\n    shadowOpacity: 0.1,\n    shadowRadius: 10,\n    elevation: 16,\n    borderBottomWidth: 1,\n    borderBottomColor: '#fff',\n  },\n  indicator: {\n    position: 'absolute',\n    width: 10,\n    height: 4,\n    backgroundColor: '#999',\n  },\n  leftIndicator: {\n    borderTopStartRadius: 2,\n    borderBottomStartRadius: 2,\n  },\n  rightIndicator: {\n    borderTopEndRadius: 2,\n    borderBottomEndRadius: 2,\n  },\n});\n")))}h.isMDXComponent=!0}}]);