"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"usage",title:"Usage",description:"Bottom Sheet usage.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/usage"},s=void 0,i={unversionedId:"usage",id:"usage",title:"Usage",description:"Bottom Sheet usage.",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/react-native-bottom-sheet/usage",draft:!1,editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/website/docs/usage.md",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage",description:"Bottom Sheet usage.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/usage"},sidebar:"packages",previous:{title:"Getting Started",permalink:"/react-native-bottom-sheet/"},next:{title:"Props",permalink:"/react-native-bottom-sheet/props"}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is a simple usage of the ",(0,o.kt)("strong",{parentName:"p"},"Bottom Sheet"),", with non-scrollable content. For more scrollable usage please read ",(0,o.kt)("a",{parentName:"p",href:"./scrollables"},"Scrollables"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useCallback, useMemo, useRef } from 'react';\nimport { View, Text, StyleSheet } from 'react-native';\nimport BottomSheet from '@gorhom/bottom-sheet';\n\nconst App = () => {\n  // ref\n  const bottomSheetRef = useRef<BottomSheet>(null);\n\n  // variables\n  const snapPoints = useMemo(() => ['25%', '50%'], []);\n\n  // callbacks\n  const handleSheetChanges = useCallback((index: number) => {\n    console.log('handleSheetChanges', index);\n  }, []);\n\n  // renders\n  return (\n    <View style={styles.container}>\n      <BottomSheet\n        ref={bottomSheetRef}\n        index={1}\n        snapPoints={snapPoints}\n        onChange={handleSheetChanges}\n      >\n        <View style={styles.contentContainer}>\n          <Text>Awesome \ud83c\udf89</Text>\n        </View>\n      </BottomSheet>\n    </View>\n  );\n};\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    backgroundColor: 'grey',\n  },\n  contentContainer: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n\nexport default App;\n")))}u.isMDXComponent=!0}}]);